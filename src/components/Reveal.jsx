import React, { useEffect, useRef, Children, cloneElement, isValidElement } from 'react';

const Reveal = ({ children, stagger = 80, className = '', once = true, ...rest }) => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.classList.add('is-visible');
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add('is-visible');
            if (once) obs.unobserve(el);
          } else if (!once) {
            el.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [once]);

  const kids = Children.map(children, (child, i) => {
    if (!isValidElement(child)) return child;
    const existing = child.props.className || '';
    const style = {
      ...(child.props.style || {}),
      '--stagger-delay': `${i * stagger}ms`,
    };
    return cloneElement(child, {
      className: `${existing} reveal-child`.trim(),
      style,
    });
  });

  return (
    <div ref={ref} className={`reveal ${className}`} {...rest}>
      {kids}
    </div>
  );
};

export default Reveal;
