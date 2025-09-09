import { useEffect, useRef } from 'react';

interface UseParallaxOptions {
  speed?: number;
  direction?: 'up' | 'down';
  disabled?: boolean;
}

export function useParallax(options: UseParallaxOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const { speed = 0.5, direction = 'up', disabled = false } = options;

  useEffect(() => {
    if (disabled) return;

    const element = ref.current;
    if (!element) return;

    let ticking = false;

    const updateParallax = () => {
      if (!element) return;

      const rect = element.getBoundingClientRect();
      const scrolled = window.pageYOffset;
      const rate = scrolled * -speed;
      
      const translateY = direction === 'up' ? rate : -rate;
      element.style.transform = `translate3d(0, ${translateY}px, 0)`;
      
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial call
    updateParallax();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (element) {
        element.style.transform = '';
      }
    };
  }, [speed, direction, disabled]);

  return ref;
}
