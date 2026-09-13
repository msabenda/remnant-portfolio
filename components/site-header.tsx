'use client';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './theme-toggle';

const links = [['About', '/about'], ['Projects', '/projects'], ['Achievements', '/achievements'], ['Writing', '/writing'], ['Contact', '/contact']];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="shell nav-wrap">
    <Link className="wordmark" href="/">Msambili <span>Ndaga</span></Link>
    <nav aria-label="Primary" className={open ? 'nav-links open' : 'nav-links'}>
      {links.map(([label, href]) => <Link key={href} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      <Link className="nav-cta" href="/contact">Let&apos;s talk</Link>
    </nav>
    <div className="nav-actions"><ThemeToggle/><button className="icon-button menu-button" aria-expanded={open} aria-label="Toggle navigation" onClick={() => setOpen(!open)}>{open ? <X size={19}/> : <Menu size={19}/>}</button></div>
  </div></header>;
}
