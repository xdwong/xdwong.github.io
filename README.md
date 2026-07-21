# Meng Li Academic Website — Redesign Concept

An independent redesign of [mengli.us](https://www.mengli.us/) created for review and comparison. It does not modify the existing GitHub Pages source.

## Design direction

- Editorial academic typography with generous whitespace
- Warm ivory, deep forest green, and restrained terracotta palette
- Clear hierarchy for research, service, talks, teaching, and team content
- Responsive layouts for desktop and mobile
- Original social sharing card matching the site identity

## Local preview

Requirements: Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm run dev
```

Open `http://localhost:3000`.

## Production check

```bash
pnpm run build
```

The primary page is in `app/page.tsx`; global visual styles are in `app/globals.css`.
