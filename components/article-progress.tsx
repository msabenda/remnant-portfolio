'use client';

import { useEffect, useState } from 'react';

export function ArticleProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const article = document.querySelector<HTMLElement>('.reading-prose');
        if (!article) return;
        const start = article.offsetTop;
        const distance = Math.max(article.offsetHeight - window.innerHeight * 0.45, 1);
        setProgress(Math.min(1, Math.max(0, (window.scrollY - start + 100) / distance)));
      });
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return <div className="reading-progress" aria-hidden="true"><i style={{ transform: `scaleX(${progress})` }}/></div>;
}
