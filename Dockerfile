# syntax=docker/dockerfile:1
# Next.js 15 marketing site on Cloud Run. Node 22 matches the Vercel project.

FROM node:22-slim AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

FROM node:22-slim AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
# NEXT_PUBLIC_* are inlined into the client bundle at BUILD time.
# Build-arg defaults ARE the production values (what the serving image was built with,
# read from its Cloud Build substitutions), so the deploy workflow, the PR build and a
# hand-run `gcloud builds submit` all build the same bundle.
ARG NEXT_PUBLIC_GA_MEASUREMENT_ID=G-GJJE1XMF61
ARG NEXT_PUBLIC_SAMPLE_AUDIT_REPORT_URL=https://merchant.pivota.cc/share/r/lySH8FSJDEn5vAF39idJmbDr9tixVnVtpVh-GtfXsoo
ENV NEXT_PUBLIC_GA_MEASUREMENT_ID=$NEXT_PUBLIC_GA_MEASUREMENT_ID \
    NEXT_PUBLIC_SAMPLE_AUDIT_REPORT_URL=$NEXT_PUBLIC_SAMPLE_AUDIT_REPORT_URL \
    NEXT_TELEMETRY_DISABLED=1
RUN npm run build

FROM node:22-slim AS runner
WORKDIR /app
ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1
# Vercel optimized /_next/image on its own platform. Self-hosted Next 15 needs
# sharp in-process, and throws at runtime without it. VERCEL_IMAGE_OPTIMIZATION_ENABLED
# is unset in production, so next.config.ts leaves optimization ENABLED.
RUN npm install --omit=dev sharp@0.33.5 && npm cache clean --force
RUN groupadd -g 1001 nodejs && useradd -u 1001 -g nodejs -m nextjs
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
ENV PORT=8080 HOSTNAME=0.0.0.0
EXPOSE 8080
CMD ["node", "server.js"]
