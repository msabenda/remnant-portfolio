import type { MetadataRoute } from 'next'; import { articles } from '@/lib/content';
export const dynamic = 'force-static';
export default function sitemap():MetadataRoute.Sitemap{const base=process.env.NEXT_PUBLIC_SITE_URL||'http://localhost:3000';const routes=['','about','projects','achievements','writing','contact'];return[...routes.map(r=>({url:`${base}/${r}`,lastModified:new Date()})),...articles.map(a=>({url:`${base}/writing/${a.slug}`,lastModified:new Date(a.date)}))]}
