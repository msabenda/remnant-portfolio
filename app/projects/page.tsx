import { ArrowUpRight } from 'lucide-react';
import { PageShell } from '@/components/page-shell';
import { featuredProjects } from '@/lib/content';

export const metadata = {
  title: 'Projects',
  description: 'Open-source developer tooling, API security projects, and practical security education by Msambili Ndaga.',
};

export default function ProjectsPage() {
  return <PageShell
    index="WORK · OPEN SOURCE"
    title="Projects built for developers and security teams."
    intro="Practical tools for API discovery, secure code review, automated security testing, and hands-on technical learning."
  >
    <section className="achievement-block">
      <div className="project-pair projects-directory">
        {featuredProjects.map((project, index) => <a
          href={project.href}
          target="_blank"
          rel="noreferrer"
          key={project.title}
          className="project-card"
        >
          <small>{String(index + 1).padStart(2, '0')} · {project.label}</small>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
          <strong>View project <ArrowUpRight size={16}/></strong>
        </a>)}
      </div>
    </section>
  </PageShell>;
}
