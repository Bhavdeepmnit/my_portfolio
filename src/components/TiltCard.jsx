import React, { useRef } from 'react';

const TiltCard = ({ children, className = '', max = 10, scale = 1.02 }) => {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const rafRef = useRef(null);

  const onMove = (e) => {
    const el = wrapRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rx = (py - 0.5) * -2 * max;
    const ry = (px - 0.5) * 2 * max;

    cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      if (innerRef.current) {
        innerRef.current.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
      }
      el.style.setProperty('--mx', `${px * 100}%`);
      el.style.setProperty('--my', `${py * 100}%`);
    });
  };

  const onLeave = () => {
    cancelAnimationFrame(rafRef.current);
    if (innerRef.current) {
      innerRef.current.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    }
  };

  return (
    <div
      ref={wrapRef}
      className={`tilt-3d relative ${className}`}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div ref={innerRef} className="tilt-3d-inner h-full">
        {children}
      </div>
      <span className="specular" aria-hidden="true" />
    </div>
  );
};

export default TiltCard;
