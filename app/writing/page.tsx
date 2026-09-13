import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { articles } from '@/lib/content';

export const metadata = { title: 'Writing' };

export default function Page() {
  const posts = articles.slice().reverse();
  const [featured, ...more] = posts;

  return <PageShell index="03 / WRITING" title="Field notes for builders." intro="Practical writing about APIs, software trust, AI systems, and security practices that survive contact with production.">
    <section className="writing-feature">
      <Link href={`/writing/${featured.slug}`} className="writing-feature-image">
        <Image src={featured.image} alt="" fill priority sizes="(max-width: 800px) 100vw, 52vw"/>
        <span>Latest field note</span>
      </Link>
      <div className="writing-feature-copy">
        <div className="post-meta"><span>{featured.category}</span><time dateTime={featured.date}>{new Date(featured.date).toLocaleDateString('en', { day: '2-digit', month: 'long', year: 'numeric' })}</time></div>
        <h2><Link href={`/writing/${featured.slug}`}>{featured.title}</Link></h2>
        <p>{featured.description}</p>
        <Link className="text-link" href={`/writing/${featured.slug}`}>Read article <ArrowRight size={15}/></Link>
      </div>
    </section>

    <section className="writing-library">
      <header><p className="eyebrow">THE NOTEBOOK</p><h2>More from the field</h2><span>{String(more.length).padStart(2, '0')} articles</span></header>
      <div className="writing-card-grid">{more.map((article, index) => <Link className="writing-card" href={`/writing/${article.slug}`} key={article.slug}>
        <div className="writing-card-image"><Image src={article.image} alt="" fill sizes="(max-width: 800px) 100vw, 40vw"/></div>
        <div className="post-meta"><span>{article.category}</span><time dateTime={article.date}>{new Date(article.date).toLocaleDateString('en', { month: 'short', year: 'numeric' })}</time></div>
        <h3>{article.title}</h3><p>{article.description}</p><span className="read-label">READ NOTE <ArrowUpRight size={14}/></span>
      </Link>)}</div>
    </section>
  </PageShell>;
}
