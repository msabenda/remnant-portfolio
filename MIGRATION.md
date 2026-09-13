# Vue → Next.js migration

## Preservation
The complete prior Vue/Vite implementation is retained under `legacy-vue/`. The pre-migration uncommitted diff was also captured at `/tmp/remnant-portfolio-safety/pre-next-migration.patch`. `Contact.vue` and `Footer.vue` were verified byte-for-byte after preservation.

## Route map
- `/` → `/`
- `/blog` → `/writing`
- `/blog/post/1` → `/writing/breaking-down-api-vulnerabilities`
- `/blog/post/2` → `/writing/prompt-injection-in-llms`
- `/blog/post/3` → `/writing/data-poisoning-in-ai-models`
- `/blog/post/4` → `/writing/zero-trust-api-architecture`
- `/blog/post/5` → `/writing/devsecops-is-not-a-checkbox`
- `/remnant-portfolio/*` → canonical root equivalent

## Content
Five HTML-string articles were converted to Markdown under `content/posts/`. They render through a server-only sanitized Markdown pipeline rather than Vue `v-html`.

## Deployment
The contact route requires a server runtime. Vercel or another Next.js-capable host is recommended; GitHub Pages cannot run `/api/contact`.
