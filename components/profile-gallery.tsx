import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { gallery } from '@/lib/profile-data';

const groups = ['Training and Events attended', 'DIT–CEBOT Horizons Alliance', 'DIT Cybersecurity Club', 'TCRA Cyberchampions 2026', 'Cyber Champions 2026'] as const;

export function ProfileGallery() {
  return <div className="event-galleries">
    {groups.map(group => <section className="event-gallery" key={group}>
      <header><p className="eyebrow">EVENT GALLERY</p><h3>{group}</h3><span>{gallery.filter(item => item.group === group).length.toString().padStart(2, '0')} images</span></header>
      <div className="gallery-grid">
        {gallery.filter(item => item.group === group).map((item, index) => <figure className="gallery-item" key={`${item.title}-${index}`}>
          <div className={`gallery-media gallery-${item.format ?? 'standard'}`}><Image src={item.src!} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 50vw"/></div>
          <figcaption><div><strong>{item.title}</strong><span>{item.context}</span>{item.href && <a className="instagram-link" href={item.href} target="_blank" rel="noreferrer">View on Instagram <ArrowUpRight size={13}/></a>}</div>{item.date && <time>{item.date}</time>}</figcaption>
        </figure>)}
      </div>
    </section>)}
  </div>;
}
