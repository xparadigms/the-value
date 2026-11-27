# The Value

The working thesis that ties the value sites together: **culture defines value, politics ranks it, industry creates it, and finance exchanges it**, with credit as the common mechanism. Built in the same design system as [The Value Creation](https://github.com/xparadigms/value-creation) and [The Value Exchange](https://github.com/xparadigms/the-value-exchange) (TDS tokens, Inter Tight and JetBrains Mono, light and dark themes), with a **horizontal** global navigation bar instead of a sidebar.

The site is password-protected (`src/proxy.ts`). The password is `SITE_PASSWORD` on Vercel, falling back to the default in `src/lib/site-auth.ts`.

## Pages

| Route | What it shows |
|---|---|
| `/` | The thesis and the full system: the four domains, two pairs, the credit loop, four domains compared, where strain appears |
| `/culture` | 01. Value Definition |
| `/politics` | 02. Value System, linking to [politics.heechangkang.org](https://politics.heechangkang.org/) |
| `/industry` | 03. Value Creation, linking to [value-creation.heechangkang.org](https://value-creation.heechangkang.org/) |
| `/finance` | 04. Value Exchange, linking to [value-exchange.heechangkang.org](https://value-exchange.heechangkang.org/institutions) |
| `/credit` | Credit: the common mechanism |

Navigation and the companion sites are data in `src/data/site.ts`; flow diagrams are data in `src/data/charts.ts`, rendered by `src/components/flow.tsx`.

```bash
npm install
npm run dev
```
