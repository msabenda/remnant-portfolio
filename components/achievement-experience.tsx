'use client';

import { useEffect } from 'react';

export function AchievementExperience() {
  useEffect(() => {
    const sections = [...document.querySelectorAll<HTMLElement>('.achievement-reveal')];
    const items = [...document.querySelectorAll<HTMLElement>('.record-item, .event-gallery, .gallery-item')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    sections.forEach((section) => section.classList.add('achievement-pending'));
    items.forEach((item, index) => {
      item.classList.add('achievement-item');
      item.style.setProperty('--achievement-delay', `${(index % 4) * 70}ms`);
    });

    if (reduceMotion) {
      [...sections, ...items].forEach((item) => item.classList.add('achievement-visible'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('achievement-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8%', threshold: 0.08 });

    [...sections, ...items].forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return null;
}
