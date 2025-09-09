import { useEffect, useState } from 'react';

interface UseScrollSpyOptions {
  offset?: number;
  rootMargin?: string;
}

export function useScrollSpy(sectionIds: string[], options: UseScrollSpyOptions = {}) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const { offset = 0, rootMargin = '0px 0px -50% 0px' } = options;

    const handleScroll = () => {
      const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);
      
      if (sections.length === 0) return;

      const scrollPosition = window.scrollY + offset;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (!section) continue;

        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop - sectionHeight / 2) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Initial call
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [sectionIds, options]);

  return activeSection;
}
