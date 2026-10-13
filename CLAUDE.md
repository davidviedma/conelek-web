# CLAUDE.md

Landing page for **Conelek** (Electricidad Conelek S.L.), an electrical, air-conditioning and gas-boiler installer in Navarra, Spain. Same stack and conventions as `davidviedma/web-iruman`.

## Commands

```bash
pnpm install
pnpm dev         # http://localhost:3000 (Turbopack)
pnpm build
pnpm lint        # ESLint (components/reactbits is ignored)
pnpm format      # Prettier + Tailwind plugin (components/reactbits is ignored)
pnpm typecheck
```

## Stack

Next.js 16 (App Router) · TypeScript strict · Tailwind CSS 4 (`@theme inline` in `app/globals.css`) · shadcn/ui `Button` · HugeIcons · `motion` (only used by React Bits `RotatingText`) · fonts: Inter (body) + Archivo (headings) via `next/font`.

## Structure

- `app/page.tsx` — one-page landing composed of sections in `components/Sections/`.
- `app/layout.tsx` — metadata, fonts, `Electrician`/`HVACBusiness` JSON-LD.
- `app/icon.svg`, `app/apple-icon.png`, `app/opengraph-image.png` — favicon and social image.
- `lib/site.ts` — **single source of truth** for phone, email, WhatsApp number and social URLs (empty social URLs are hidden).
- `lib/services.ts` — the four services (electricidad, aire acondicionado, calderas, iluminación LED).
- `lib/logo-paths.ts` — vector outlines of the recreated CONELEK logo (Archivo Black glyphs); `components/logo.tsx` renders it with letters in `currentColor`. `public/logo.svg` is the black-text version for light backgrounds.
- `components/reactbits/` — components copied verbatim from [React Bits](https://reactbits.dev) (Lightning, ElectricBorder, SpotlightCard, RotatingText, ShinyText, LogoLoop). Don't reformat them; update by re-copying from upstream.
- `public/trabajos/` — real job photos. Gallery entries live in `components/Sections/trabajos.tsx`.

## Brand

- Purple primary `#7445c4` (`brand-primary`), light purple for text highlights `#b89ef5` (`brand-primary-light`).
- Green accent `#3a9a4c` / `#6fd886` (`brand-accent`, `brand-accent-light`) — taken from the logo ring.
- Dark theme (zinc-950/900 backgrounds), same layout language as Iruman: `container mx-auto px-6 sm:px-12 lg:px-24`, `py-16 lg:py-24`, uppercase purple eyebrow + bold heading with highlighted words.

## Conventions

- Contact actions go to WhatsApp via `whatsappLink(message)` with a prefilled message; the contact form only composes a WhatsApp message (no backend, no data stored).
- Nav links are hash anchors; every section must keep its `id` (`servicios`, `proyectos`, `trabajos`, `nosotros`, `faqs`, `contacto`).
