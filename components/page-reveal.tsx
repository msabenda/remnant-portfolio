'use client';

import { useEffect } from 'react';

export function PageReveal() {
  useEffect(() => {
    const elements = [...document.querySelectorAll<HTMLElement>('.page-hero > *, .page-content > *')];
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    elements.forEach((element, index) => {
      element.classList.add('page-reveal-item');
      element.style.setProperty('--page-reveal-delay', `${Math.min(index % 3, 2) * 70}ms`);
    });

    if (reduceMotion) {
      elements.forEach(element => element.classList.add('page-reveal-visible'));
      return;
    }

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('page-reveal-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -6%' });

    elements.forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return null;
}
