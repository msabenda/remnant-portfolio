# Msambili Ndaga portfolio

A Next.js portfolio for Msambili Ndaga: Founder of APICon Tanzania, API security specialist, developer advocate, and agentic AI security researcher.

## Develop
```bash
npm install
npm run dev
```
Open `http://localhost:3000`.

## Quality gates
```bash
npm run lint
npm run typecheck
npm test
npm run build
```

## Content
Profile, projects, articles, and expertise live in `lib/content.ts`. Migrated article bodies live in `content/posts/*.md`; they are rendered server-side through a sanitized Remark pipeline. See `CONTENT_NEEDED.md` and `TODO_VERIFY.md` before publishing new claims.

## Contact
`POST /api/contact` accepts validated JSON and proxies it server-side. Configure:
- `GOOGLE_APPS_SCRIPT_URL` (server only)
- `CONTACT_WEBHOOK_SECRET` (server only)
- `NEXT_PUBLIC_SITE_URL` (public canonical origin)

The in-memory limiter is a development baseline. Use an atomic managed rate-limit store for multi-instance production. The Apps Script must verify the shared secret before writing data.

## Deployment
Use Vercel or another Next.js server-capable platform. GitHub Pages cannot execute the contact API. Review CSP in `next.config.ts` and remove development-only script allowances before strict production enforcement.

## Legacy
The original Vue/Vite application is preserved in `legacy-vue/`. See `MIGRATION.md`.

## Updating achievements and gallery
Edit `lib/profile-data.ts` to replace demo awards, events, education, and certificates. For gallery photos, add optimized files to `public/gallery/` and set the matching `src` value, for example `/gallery/apicon-workshop.jpg`. See `public/gallery/README.md`.
