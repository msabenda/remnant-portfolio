import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { notFound } from 'next/navigation';
import { ArticleProgress } from '@/components/article-progress';
import { articles } from '@/lib/content';
import { renderPost } from '@/lib/markdown';

export function generateStaticParams() {
  return articles.map(article => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  return article ? { title: article.title, description: article.description, alternates: { canonical: `/writing/${article.slug}` } } : {};
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = articles.find(item => item.slug === slug);
  if (!article) notFound();

  const body = await renderPost(slug);
  const wordCount = body.replace(/<[^>]+>/g, ' ').trim().split(/\s+/).length;
  const readingMinutes = Math.max(1, Math.ceil(wordCount / 220));
  const articleIndex = articles.findIndex(item => item.slug === slug);
  const nextArticle = articles[(articleIndex + 1) % articles.length];

  return <>
    <ArticleProgress/>
    <header className="article-hero">
      <div className="article-hero-inner shell">
        <Link className="article-back" href="/writing"><ArrowLeft size={15}/> All writing</Link>
        <div className="post-meta article-meta"><span>{article.category}</span><time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en', { day: '2-digit', month: 'long', year: 'numeric' })}</time><span>{readingMinutes} min read</span></div>
        <h1>{article.title}</h1>
        <p>{article.description}</p>
        <div className="article-author"><span>MN</span><div><strong>Msambili Ndaga</strong><small>API Security and Developer Advocacy</small></div></div>
      </div>
    </header>

    <main className="reading-layout shell">
      <aside className="reading-rail"><span>FIELD NOTE</span><strong>{String(articleIndex + 1).padStart(2, '0')}</strong><i/></aside>
      <article className="prose reading-prose" dangerouslySetInnerHTML={{ __html: body }}/>
    </main>

    <nav className="next-article shell" aria-label="Continue reading">
      <div><p className="eyebrow">CONTINUE READING</p><h2>{nextArticle.title}</h2></div>
      <Link className="button" href={`/writing/${nextArticle.slug}`}>Next article <ArrowRight size={16}/></Link>
    </nav>
  </>;
}
