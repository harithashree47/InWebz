import { useInView } from '../../hooks/useInView';

/**
 * Lite AOS-style fade-up wrapper.
 * delay: 1-6 maps to reveal-delay-1..6 (100ms-600ms stagger)
 */
export default function FadeIn({ children, className = '', delay = 0 }) {
  const { ref, inView } = useInView({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`reveal ${inView ? 'visible' : ''} ${delay ? `reveal-delay-${delay}` : ''} ${className}`}
    >
      {children}
    </div>
  );
}
