import fs from 'node:fs'; import TurndownService from 'turndown';
const src=fs.readFileSync('legacy-vue/src/stores/posts.ts','utf8'); const td=new TurndownService({headingStyle:'atx',codeBlockStyle:'fenced'});
const metas=[
[1,'breaking-down-api-vulnerabilities'],[2,'prompt-injection-in-llms'],[3,'data-poisoning-in-ai-models'],[4,'zero-trust-api-architecture'],[5,'devsecops-is-not-a-checkbox']];
for(let n=0;n<metas.length;n++){const[id,slug]=metas[n];const start=src.indexOf(`id: ${id},`);const end=n<metas.length-1?src.indexOf(`id: ${id+1},`,start):src.length;const block=src.slice(start,end);const m=block.match(/content:\s*`([\s\S]*?)`\s*,?\s*\n\s*}/);if(!m){console.error('No content',id);continue}let html=m[1].replace(/\$\{new URL\('([^']+)'[\s\S]*?\)\.href}/g,'$1');html=html.replace(/<script[\s\S]*?<\/script>/gi,'');const markdown=td.turndown(html);fs.writeFileSync(`content/posts/${slug}.md`,markdown+'\n');console.log(slug,markdown.length)}
