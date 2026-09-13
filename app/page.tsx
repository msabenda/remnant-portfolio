import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { articles, credentials, featuredProjects, profile, securityStack, tools } from '@/lib/content';
import { ScrollExperience } from '@/components/scroll-experience';
import { HeroCollage } from '@/components/hero-collage';
import { ToolGrid } from '@/components/tool-grid';

const focus = [
  ['API Security', 'Finding and fixing broken authorization, business-logic flaws, and identity weaknesses in modern APIs.'],
  ['Agentic AI Security', 'Researching prompt injection, unsafe tool use, excessive agency, and security boundaries for AI agents.'],
  ['Developer Advocacy', 'Making complex technical ideas useful through writing, workshops, and developer communities.'],
];

export default function Home() {
  return <>
    <ScrollExperience/>
    <section className="hero shell simple-hero reveal-step" data-step="0">
      <div className="hero-grid">
        <div>
          <h1>HI, I’M<br/>MSAMBILI <span className="name-accent">NDAGA</span></h1>
          <p className="hero-copy">{profile.summary}</p>
          <div className="credential-line">{credentials.map(item => <span key={item}>{item}</span>)}</div>
          <div className="actions">
            <Link className="button primary" href="/contact">Let&apos;s work together</Link>
            <Link className="button" href="/about">About me</Link>
          </div>
        </div>
        <HeroCollage/>
      </div>
    </section>

    <section className="section shell compact-section reveal-step" id="focus" data-step="1">
      <div className="simple-heading"><p className="eyebrow">WHAT I DO</p><h2>Securing the APIs and AI systems developers depend on.</h2></div>
      <div className="focus-list">{focus.map(([title, text], index) => <article key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
    </section>

    <section className="section shell compact-section reveal-step" data-step="2">
      <div className="simple-heading heading-row"><div><p className="eyebrow">FEATURED PROJECTS</p><h2>Open-source tools for secure development and practical learning.</h2></div><Link className="text-link" href="/projects">View all projects</Link></div>
      <div className="project-pair">{featuredProjects.slice(0, 4).map(project => <a href={project.href} target="_blank" rel="noreferrer" key={project.title} className="project-card"><small>{project.label}</small><h3>{project.title}</h3><p>{project.description}</p><div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><strong>View project <ArrowUpRight size={16}/></strong></a>)}</div>
    </section>

    <section className="apicon-section compact-section reveal-step" data-step="3">
      <div className="shell apicon-grid">
        <div><p className="eyebrow">FOUNDER & COMMUNITY LEAD - APICON TANZANIA</p><h2>Building Tanzania’s API community.</h2></div>
        <div><p>I founded APICon Tanzania to advance API Security, DevSecOps, software engineering, and practical collaboration across the regional developer ecosystem.</p><Link className="text-link" href="/about">Read my story <ArrowUpRight size={16}/></Link></div>
      </div>
    </section>

    <section className="section shell compact-section reveal-step toolbox-section" data-step="4">
      <div className="simple-heading"><p className="eyebrow">TOOLBOX</p><h2>Tools and standards I use to move from integration to assurance.</h2></div>
      <div className="toolbox-grid"><div><h3>Tools & technologies</h3><ToolGrid tools={tools}/></div><div><h3>API security stack</h3><div className="tool-cloud">{securityStack.map(tool => <span key={tool}>{tool}</span>)}</div></div></div>
    </section>

    <section className="section shell compact-section reveal-step" data-step="5">
      <div className="simple-heading heading-row"><div><p className="eyebrow">LATEST WRITING</p><h2>Notes for people building modern systems.</h2></div><Link className="text-link" href="/writing">All writing</Link></div>
      <div className="article-list">{articles.slice().reverse().slice(0, 3).map(a => <Link href={`/writing/${a.slug}`} key={a.slug} className="article-row"><time dateTime={a.date}>{new Date(a.date).toLocaleDateString('en', { month: 'short', year: 'numeric' })}</time><div><small>{a.category}</small><h3>{a.title}</h3><p>{a.description}</p></div><ArrowUpRight/></Link>)}</div>
    </section>

    <section className="simple-cta reveal-step" data-step="6"><div className="shell"><p className="eyebrow">LET’S CONNECT</p><h2>Have an API, developer experience, or AI and API security need?</h2><div className="connect-actions"><Link className="button primary" href="/contact">Start a conversation</Link>{profile.socials.slice(0,3).map(social => <a key={social.href} className="social-chip" href={social.href} target="_blank" rel="noreferrer"><span>{social.label}</span>{social.handle}<ArrowUpRight size={14}/></a>)}</div></div></section>
  </>;
}
