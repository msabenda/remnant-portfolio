import { awards, certificates, education, events, type TimelineItem } from '@/lib/profile-data';

const groups: { title: string; items: TimelineItem[] }[] = [
  { title: 'Accomplishments', items: awards },
  { title: 'Events', items: events },
  { title: 'Education', items: education },
  { title: 'Certificates', items: certificates },
];

export function ProfileRecord() {
  return <div className="record-groups">
    {groups.map(group => <section key={group.title} className="record-group">
      <h3>{group.title}</h3>
      <div>{group.items.map((item, index) => <article key={`${item.title}-${index}`} className="record-item">
        <header><div><small>{item.organization}</small><h4>{item.title}</h4></div><time>{item.date}</time></header>
        <p>{item.description}</p>
        {item.demo && <span className="demo-label">Demo · replace with real information</span>}
        {item.href && <a className="text-link" href={item.href} target="_blank" rel="noreferrer">View evidence ↗</a>}
      </article>)}</div>
    </section>)}
  </div>;
}
