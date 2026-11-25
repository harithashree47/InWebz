import { useState, useEffect, useRef } from 'react';

/**
 * Lightweight "animate on scroll" hook.
 * Returns a ref to attach to an element and a boolean that flips to true
 * once the element scrolls into view (triggerOnce by default).
 */
export function useInView({ threshold = 0.1, triggerOnce = true, rootMargin = '0px 0px -80px 0px' } = {}) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            if (triggerOnce) observer.unobserve(el);
          } else if (!triggerOnce) {
            setInView(false);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, triggerOnce, rootMargin]);

  return { ref, inView };
}
