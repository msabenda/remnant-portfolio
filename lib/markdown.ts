import 'server-only';
import fs from 'node:fs';
import path from 'node:path';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';
import { assetPath } from './paths';

export async function renderPost(slug: string) {
  const safe = slug.replace(/[^a-z0-9-]/g, '');
  const source = fs.readFileSync(path.join(process.cwd(), 'content/posts', `${safe}.md`), 'utf8');
  const result = await remark().use(gfm).use(html, { sanitize: true }).process(source);
  return String(result).replace(
    /(src|href)="(\/(?:assets|gallery|profile)\/[^"\s]+)"/g,
    (_match, attribute, url) => `${attribute}="${assetPath(url)}"`,
  );
}
