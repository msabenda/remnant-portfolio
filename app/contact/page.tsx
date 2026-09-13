import { ArrowUpRight, Clock3, Mail, MapPin, ShieldCheck } from 'lucide-react';
import { ContactForm } from '@/components/contact-form';
import { PageShell } from '@/components/page-shell';
import { profile } from '@/lib/content';

export const metadata = {
  title: 'Contact',
  description: 'Contact Msambili Ndaga about API security, developer advocacy, workshops, research, and APICon Tanzania.',
};

const channels = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: MapPin, label: 'Based in', value: profile.location },
  { icon: Clock3, label: 'Response', value: 'Usually within 1–2 working days' },
] as const;

export default function Page() {
  return <PageShell
    index="CONTACT · OPEN CHANNEL"
    title="Bring the context. We’ll find the useful next step."
    intro="API security review, developer experience, workshops, community partnerships, or agentic AI research. Tell me what you are building and where trust matters."
  >
    <div className="contact-layout contact-showcase">
      <aside className="contact-intro">
        <p className="eyebrow">DIRECT CONTACT</p>
        <h2>Start with the problem, not the pitch.</h2>
        <p>Share the system, audience, current challenge, and outcome you need. I’ll respond with the clearest next step I can offer.</p>

        <div className="contact-channels">
          {channels.map(({ icon: Icon, label, value, ...channel }) => {
            const content = <><span className="contact-channel-icon"><Icon size={18}/></span><span><small>{label}</small><strong>{value}</strong></span>{'href' in channel && <ArrowUpRight size={15}/>}</>;
            return 'href' in channel
              ? <a key={label} href={channel.href} className="contact-channel">{content}</a>
              : <div key={label} className="contact-channel">{content}</div>;
          })}
        </div>

        <div className="privacy-note"><ShieldCheck size={19}/><p><strong>Privacy-first contact.</strong><br/>No advertising analytics, user-agent logging, or referrer collection. Your message is used only to respond.</p></div>
      </aside>

      <div className="contact-form-panel">
        <div className="contact-form-heading"><span>01</span><div><p className="eyebrow">PROJECT BRIEF</p><h2>What are we working on?</h2></div></div>
        <ContactForm/>
      </div>
    </div>
  </PageShell>;
}
