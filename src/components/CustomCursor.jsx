import React, { useEffect, useRef } from 'react';

const isTouch = () =>
  typeof window !== 'undefined' &&
  (navigator.maxTouchPoints > 0 || window.matchMedia('(hover: none)').matches);

const CustomCursor = () => {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const target = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch() || prefersReduced) return;

    document.documentElement.classList.add('custom-cursor-active');

    const handleMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0) translate(-50%, -50%)`;
      }
    };

    const handleOver = (e) => {
      const interactive = e.target.closest('a, button, [role="button"], input, textarea, .tilt-3d');
      if (ringRef.current) {
        ringRef.current.classList.toggle('is-hovering', !!interactive);
      }
    };

    const animate = () => {
      ringPos.current.x += (target.current.x - ringPos.current.x) * 0.18;
      ringPos.current.y += (target.current.y - ringPos.current.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMove, { passive: true });
    window.addEventListener('mouseover', handleOver, { passive: true });
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      document.documentElement.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', handleMove);
      window.removeEventListener('mouseover', handleOver);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
      <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
    </>
  );
};

export default CustomCursor;
