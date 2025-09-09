import { useEffect } from 'react';

interface SmoothScrollOptions {
  duration?: number;
  easing?: (t: number) => number;
}

export function useSmoothScroll(options: SmoothScrollOptions = {}) {
  const { duration = 800, easing = (t: number) => t * (2 - t) } = options;

  useEffect(() => {
    const smoothScrollTo = (targetY: number) => {
      const startY = window.pageYOffset;
      const distance = targetY - startY;
      const startTime = performance.now();

      const animateScroll = (currentTime: number) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const easedProgress = easing(progress);

        window.scrollTo(0, startY + distance * easedProgress);

        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    };

    // Override default anchor behavior
    const handleClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="#"]') as HTMLAnchorElement;
      
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href || href === '#') return;

      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (!targetElement) return;

      e.preventDefault();
      smoothScrollTo(targetElement.offsetTop - 80); // Account for fixed header
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [duration, easing]);
}
