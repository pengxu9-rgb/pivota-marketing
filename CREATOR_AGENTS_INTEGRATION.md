# Creator Agents integration note

This marketing portal uses the Next.js App Router under `src/app/`.

- Existing product landing: `/shopping-agent` (`src/app/shopping-agent/page.tsx`) with a corresponding Chinese route under `/zh/`.
- Header navigation is primarily for the homepage sections; product discovery is driven by hero CTAs, badges, and inline links.

Integration approach for Creator Agents:

- Add a sibling marketing surface at `/creator-agents` (`src/app/creator-agents/page.tsx`) for clean SEO and parity with `/shopping-agent`.
- Add a shared product-toggle (“Agent Surfaces Switcher”) on both `/shopping-agent` and `/creator-agents` to connect the two surfaces without changing the global header.
- Cross-link from `/shopping-agent` to `/creator-agents` via a prominent promo block, and add light links from `/developers` and `/merchants`.

