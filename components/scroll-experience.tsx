'use client';

import { useEffect, useState } from 'react';

const labels = ['Intro', 'Practice', 'Projects', 'Community', 'Toolbox', 'Writing', 'Contact'];

export function ScrollExperience() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('[data-step]')];
    const animatedItems = sections.flatMap((section) => [...section.querySelectorAll<HTMLElement>('h2, .focus-list article, .project-card, .apicon-grid > div, .toolbox-grid > div, .article-row, .simple-cta h2, .connect-actions')]);
    animatedItems.forEach((item, index) => {
      item.classList.add('scroll-item');
      item.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
    });
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.body.classList.add('scroll-ready');
    let entranceFrame = 0;
    const paintFrame = requestAnimationFrame(() => {
      entranceFrame = requestAnimationFrame(() => document.body.classList.add('experience-ready'));
    });

    if (reduceMotion) {
      [...sections, ...animatedItems].forEach((item) => item.classList.add('is-visible'));
      return () => {
        cancelAnimationFrame(paintFrame);
        cancelAnimationFrame(entranceFrame);
        document.body.classList.remove('scroll-ready', 'experience-ready');
      };
    }

    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) (entry.target as HTMLElement).classList.add('is-visible');
      }
    }, { rootMargin: '0px 0px -12%', threshold: 0.05 });

    let frame = 0;
    const updateStep = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const marker = window.scrollY + window.innerHeight * 0.48;
        let current = 0;
        sections.forEach((section, index) => {
          if (section.offsetTop <= marker) current = index;
        });
        if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 8) current = sections.length - 1;
        setActive(current);
        const shift = Math.max(-18, Math.min(18, (window.scrollY / Math.max(document.documentElement.scrollHeight - window.innerHeight, 1) - 0.18) * 36));
        document.documentElement.style.setProperty('--scroll-shift', `${shift}px`);
      });
    };

    [...sections, ...animatedItems].forEach((item) => observer.observe(item));
    updateStep();
    window.addEventListener('scroll', updateStep, { passive: true });
    window.addEventListener('resize', updateStep);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      cancelAnimationFrame(paintFrame);
      cancelAnimationFrame(entranceFrame);
      window.removeEventListener('scroll', updateStep);
      window.removeEventListener('resize', updateStep);
      document.body.classList.remove('scroll-ready', 'experience-ready');
      animatedItems.forEach((item) => {
        item.classList.remove('scroll-item', 'is-visible');
        item.style.removeProperty('--reveal-delay');
      });
      document.documentElement.style.removeProperty('--scroll-shift');
    };
  }, []);

  return <aside className="step-rail" aria-label="Page progress">
    <span className="step-count">0{active + 1} / 07</span>
    <div className="step-track" aria-hidden="true"><i style={{ transform: `scaleY(${(active + 1) / 7})` }}/></div>
    <span className="step-label">{labels[active]}</span>
  </aside>;
}
