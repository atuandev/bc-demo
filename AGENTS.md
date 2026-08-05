<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# bc-test

Next.js 16 (App Router) + React 19 + Tailwind v4 + shadcn/ui. Fresh template — `app/` has only `layout.tsx` and `page.tsx`. Use **pnpm** (never npm/yarn).

## Commands

- `pnpm dev`, `pnpm build`, `pnpm start`, `pnpm lint`, `pnpm typecheck`, `pnpm format`
- **No test runner is installed** — there is no `test` script. Verify with `pnpm lint && pnpm typecheck && pnpm build`.
- `pnpm format` only writes `**/*.{ts,tsx}` (not CSS/MD). Prettier style: no semicolons, double quotes, `prettier-plugin-tailwindcss` sorting via `cn`/`cva`.

## Stack quirks

- **Tailwind v4 is CSS-first**: no `tailwind.config.js`. Design tokens live in `app/globals.css` (`@theme inline`, `:root`, `.dark`). Don't create a config file.
- **shadcn uses `@base-ui/react`, not Radix.** Add components with `npx shadcn@latest add <name>`; they land in `components/ui/` (aliases in `components.json`: `@/components/ui`, `@/lib`, `@/hooks`; `@/*` maps to repo root).
- **Dark mode**: `next-themes` (`class` attribute) via `components/theme-provider.tsx` in the root layout; `d` toggles it in dev.
