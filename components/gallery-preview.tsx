import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { gallery } from '@/lib/profile-data';

const previewTitles = [
  'Tanzania Cybersecurity Community Zone CTF',
  'TCRA Cyberchampions recognition',
  'Connecting students with Industry Leaders',
] as const;

export function GalleryPreview() {
  const preview = previewTitles.map(title => gallery.find(item => item.title === title)!);

  return <>
    <div className="gallery-preview">
      {preview.map(item => <figure className="gallery-item" key={item.group} tabIndex={0}>
        <div className={`gallery-media gallery-${item.format ?? 'standard'}`}>
          <Image src={item.src!} alt={item.alt} fill sizes="(max-width: 800px) 100vw, 33vw"/>
          <div className="gallery-hover-copy" aria-hidden="true"><strong>{item.group}</strong><span>{item.context}</span></div>
        </div>
        <figcaption><div><strong>{item.title}</strong><span>{item.group}</span></div>{item.date && <time>{item.date}</time>}</figcaption>
      </figure>)}
    </div>
    <Link className="button gallery-button" href="/achievements/gallery">View the complete gallery <ArrowRight size={16}/></Link>
  </>;
}
