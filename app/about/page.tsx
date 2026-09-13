import Link from 'next/link';
import { PageShell } from '@/components/page-shell';
import { keySkills } from '@/lib/profile-data';

export const metadata = { title: 'About' };

export default function Page() {
  return <PageShell index="ABOUT · MSAMBILI NDAGA" title="Developer advocacy meets API security." intro="Helping developers build secure, scalable API applications through better developer experience, practical education, and secure-by-design engineering.">
    <div className="content-grid">
      <aside className="about-sidebar">
        <div className="meta-rail"><div>Msambili Ndaga</div><div>Dar es Salaam, Tanzania</div><div>Developer Advocate 🥑</div><div>API Security Specialist</div><div>Agentic AI Security</div></div>
        <div className="sidebar-skills"><p className="eyebrow">KEY SKILLS</p><div className="tool-cloud">{keySkills.map(skill => <span key={skill}>{skill}</span>)}</div></div>
      </aside>
      <div className="prose about-story">
        <section>
          <p className="eyebrow">PROFILE</p>
          <h2>Building technology people can use and trust.</h2>
          <p>I’m a <strong>Developer Advocate 🥑, API Security Specialist, Agentic AI Security researcher, and Cybersecurity Professional</strong> based in Dar es Salaam, Tanzania. At <strong>NEUROTECH AFRICA</strong>, I help developers integrate platforms such as Snippe and Ghala through practical documentation, workshops, API support, and onboarding.</p>
          <p>I’m the <strong>Founder and Community Lead of APICon Tanzania</strong>, President of Cyber Club DIT, and a Zone Labs Ambassador at DIT. I also contribute to the NICE Cyber Careers Community of Interest and serve in the DIT–CEBOT Horizons Alliance. Across these roles, I focus on practical security education, developer communities, and creating opportunities for people entering technology and cybersecurity.</p>
        </section>

        <div className="actions"><Link className="button primary" href="/achievements">View achievements & gallery →</Link><Link className="button" href="/contact">Contact me</Link></div>
      </div>
    </div>
  </PageShell>;
}
