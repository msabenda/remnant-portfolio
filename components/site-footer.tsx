import Link from 'next/link';
import { ArrowUpRight, Mail, MapPin } from 'lucide-react';
import { profile } from '@/lib/content';

const navigation = [
  ['About', '/about'],
  ['Projects', '/projects'],
  ['Achievements', '/achievements'],
  ['Writing', '/writing'],
  ['Contact', '/contact'],
] as const;

export function SiteFooter() {
  return <footer className="site-footer portfolio-footer">
    <div className="shell">
      <div className="footer-directory">
        <div className="footer-identity">
          <Link className="wordmark" href="/">Msambili <span>Ndaga</span></Link>
          <p>Developer Advocate, API Security Specialist, and Agentic AI Security researcher sharing my work, writing, and community journey.</p>
          <div className="footer-facts">
            <span><MapPin size={15}/>{profile.location}</span>
          </div>
        </div>

        <div className="footer-column">
          <p className="footer-label">Explore</p>
          <nav aria-label="Footer navigation">
            {navigation.map(([label, href]) => <Link key={href} href={href}>{label}</Link>)}
          </nav>
        </div>

        <div className="footer-column">
          <p className="footer-label">Connect</p>
          <div className="social-list">
            {profile.socials.slice(0, 3).map(social => <a key={social.href} href={social.href} target="_blank" rel="noreferrer">{social.label}<ArrowUpRight size={13}/></a>)}
            <a href={`mailto:${profile.email}`}><Mail size={13}/>Email</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Msambili Ndaga</span>
        <span>Personal portfolio · Built with Next.js</span>
      </div>
    </div>
  </footer>;
}
