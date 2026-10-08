import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { buildFaqJsonLd } from "@/lib/schema";
export type EvidenceSection = { title: string; body: string };
export default function EvidencePage({ title, summary, sections, sources = [], faqs = [] }: {
  title: string; summary: string; sections: readonly EvidenceSection[];
  sources?: readonly { title: string; url: string }[];
  faqs?: readonly { question: string; answer: string }[];
}) {
  return <div className="min-h-screen bg-background"><Header />
    {faqs.length > 0 && <JsonLd id="evidence-faq" data={buildFaqJsonLd(faqs)} />}
    <main className="section-padding"><div className="container-max max-w-4xl space-y-8">
      <nav aria-label="Evidence navigation" className="flex flex-wrap gap-4 text-sm text-foreground underline underline-offset-4"><Link href="/">Home</Link><Link href="/developers/verify">Verify Pivota</Link><Link href="/ucp/insights">UCP Insights</Link></nav>
      <div><p className="mb-4 text-sm text-muted-foreground">Evidence reviewed 7 October 2026</p><h1 className="text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1><p className="mt-6 text-lg leading-8 text-muted-foreground">{summary}</p></div>
      {sections.map(s => <section key={s.title} className="section-frame p-6 sm:p-8"><h2 className="text-2xl font-semibold">{s.title}</h2><p className="mt-4 leading-8 text-muted-foreground">{s.body}</p></section>)}
      {faqs.length > 0 && <section className="space-y-6"><h2 className="text-2xl font-semibold">Questions and answers</h2>{faqs.map(f => <article key={f.question} className="section-frame p-6"><h3 className="text-xl font-semibold">{f.question}</h3><p className="mt-4 leading-8 text-muted-foreground">{f.answer}</p></article>)}</section>}
      {sources.length > 0 && <section><h2 className="text-2xl font-semibold">Sources and verification</h2><ul className="mt-4 space-y-3">{sources.map(s => <li key={s.url}><a className="text-foreground underline underline-offset-4" href={s.url}>{s.title}</a></li>)}</ul></section>}
      <p className="text-sm leading-7 text-muted-foreground">Pivota does not hold customer funds or act as merchant of record. The applicable merchant and payment providers handle the sale and funds flow. Persistent commerce identity requires separate explicit opt-in.</p>
    </div></main><Footer /></div>;
}
