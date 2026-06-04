import { useEffect, useRef } from 'react';

export default function useFadeIn(options = { threshold: 0.1 }) {
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Optional: stop observing once it fades in
          observer.unobserve(entry.target); 
        }
      });
    }, options);

    const { current } = domRef;
    if (current) {
      observer.observe(current);
    }

    return () => {
      if (current) observer.unobserve(current);
    };
  }, [options]);

  return domRef;
}