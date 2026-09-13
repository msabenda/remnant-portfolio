import Image from 'next/image';
import { assetPath } from '@/lib/paths';

export function HeroCollage() {
  return <div className="hero-collage" aria-label="Selected moments from Msambili Ndaga’s work">
    <figure className="collage-profile"><Image src={assetPath('/profile/msambili-ndaga.jpg')} alt="Portrait of Msambili Ndaga" fill priority sizes="(max-width: 800px) 62vw, 24vw"/><figcaption>Msambili Ndaga</figcaption></figure>
    <figure className="collage-action"><Image src={assetPath('/gallery/home-cyberchampions.webp')} alt="Msambili Ndaga participating in a Cyberchampions discussion" fill priority sizes="(max-width: 800px) 52vw, 18vw"/><figcaption>Cyberchampions · 2026</figcaption></figure>
    <figure className="collage-stage"><Image src={assetPath('/gallery/dit-cyber-club-1.webp')} alt="Msambili Ndaga speaking at a DIT cybersecurity event" fill priority sizes="(max-width: 800px) 48vw, 16vw"/><figcaption>Cyber Club DIT</figcaption></figure>
    <span className="collage-index">01  -  03</span>
  </div>;
}
