import { NextResponse } from "next/server";
import { z } from "zod";

const interestOptions = [
  "Channel partner",
  "Merchant",
  "Agent builder",
  "Other",
] as const;

const InterestSchema = z.enum(interestOptions);

const DemoSchema = z.object({
  name: z.string().min(1),
  company: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  interest: InterestSchema,
  message: z.string().optional().nullable(),
});

async function sendViaResend(params: {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
  to: string[];
}) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return false;
  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    const from = process.env.RESEND_FROM || "Pivota Demo <no-reply@pivota.cc>";
    const result = await resend.emails.send({
      from,
      to: params.to,
      subject: params.subject,
      text: params.text,
      html: params.html,
      reply_to: params.replyTo,
    });
    if ((result as any).error) throw (result as any).error;
    return true;
  } catch (err) {
    console.error("Resend send error", err);
    return false;
  }
}

async function sendViaSMTP(params: {
  subject: string;
  text: string;
  html: string;
  replyTo?: string;
  to: string[];
}) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE } = process.env as Record<string, string | undefined>;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) return false;
  try {
    const nodemailer = await import("nodemailer");
    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: Number(SMTP_PORT),
      secure: SMTP_SECURE === "true" || Number(SMTP_PORT) === 465,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    });
    const from = process.env.SMTP_FROM || "Pivota Demo <no-reply@pivota.cc>";
    await transporter.sendMail({
      from,
      to: params.to.join(","),
      subject: params.subject,
      text: params.text,
      html: params.html,
      replyTo: params.replyTo,
    });
    return true;
  } catch (err) {
    console.error("SMTP send error", err);
    return false;
  }
}

export async function POST(req: Request) {
  try {
    const json = await req.json();
    const rawInterest =
      typeof json === "object" && json !== null
        ? (json as { interest?: unknown }).interest
        : undefined;
    if (typeof rawInterest !== "string" || rawInterest.trim().length === 0) {
      return NextResponse.json({ ok: false, error: "Interest is required" }, { status: 400 });
    }

    const parsed = DemoSchema.safeParse(json);
    if (!parsed.success) {
      const hasInterestIssue = parsed.error.issues.some((issue) => issue.path[0] === "interest");
      if (hasInterestIssue) {
        return NextResponse.json({ ok: false, error: "Invalid interest" }, { status: 400 });
      }

      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }
    const { name, company, email, phone, interest, message } = parsed.data;

    const to = [process.env.DEMO_TO_EMAIL || "contact@pivota.cc"];
    const submittedAt = new Date().toISOString();
    const subject = `[${interest}] New demo request from ${company} (${name})`;
    const text = `New demo request received\n\nInterest: ${interest}\nName: ${name}\nCompany: ${company}\nEmail: ${email}\nPhone: ${phone || "-"}\n\nMessage:\n${message || "-"}\n\nSubmitted at: ${submittedAt}`;
    const html = `
      <h2>New demo request</h2>
      <p><strong>Interest:</strong> ${interest}</p>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "-"}</p>
      <p><strong>Message:</strong><br/>${(message || "-").replace(/\n/g, "<br/>")}</p>
      <p style="color:#888">Submitted at: ${submittedAt}</p>
    `;

    // Try Resend, then fallback to SMTP
    const ok = (await sendViaResend({ subject, text, html, replyTo: email, to })) ||
               (await sendViaSMTP({ subject, text, html, replyTo: email, to }));

    if (!ok) {
      return NextResponse.json(
        { ok: false, error: "Email service not configured. Set RESEND_API_KEY/RESEND_FROM or SMTP_* env vars." },
        { status: 500 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("/api/demo error", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
