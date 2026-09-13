import { PageReveal } from './page-reveal';

export function PageShell({ index, title, intro, children }: { index: string; title: string; intro: string; children: React.ReactNode }) {
  return <>
    <PageReveal/>
    <header className="page-hero shell">
      <p className="eyebrow">{index}</p>
      <h1>{title}</h1>
      <p>{intro}</p>
    </header>
    <section className="section shell page-content">{children}</section>
  </>;
}
