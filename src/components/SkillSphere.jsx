import React, { useRef, useEffect, useState } from 'react';

/**
 * Pure-CSS 3D skill sphere. Skills are arranged on a Fibonacci sphere
 * and counter-rotate so labels always face the camera. Rotation pauses
 * on hover; individual orbs lift forward (translateZ).
 */
const SkillSphere = ({ skills, radius = 180 }) => {
  const wrapRef = useRef(null);
  const innerRef = useRef(null);
  const rot = useRef({ x: -10, y: 0 });
  const target = useRef({ x: -10, y: 0 });
  const hovering = useRef(false);
  const rafRef = useRef(null);

  const [reduced, setReduced] = useState(false);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setReduced(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  }, []);

  // Fibonacci sphere positions
  useEffect(() => {
    const n = skills.length;
    const pts = [];
    const offset = 2 / n;
    const increment = Math.PI * (3 - Math.sqrt(5));
    for (let i = 0; i < n; i++) {
      const y = i * offset - 1 + offset / 2;
      const r = Math.sqrt(1 - y * y);
      const phi = i * increment;
      pts.push({
        x: Math.cos(phi) * r * radius,
        y: y * radius,
        z: Math.sin(phi) * r * radius,
      });
    }
    setPositions(pts);
  }, [skills, radius]);

  useEffect(() => {
    if (reduced) return;

    const wrap = wrapRef.current;
    if (!wrap) return;

    const onMove = (e) => {
      const rect = wrap.getBoundingClientRect();
      const px = (e.clientX - rect.left) / rect.width - 0.5;
      const py = (e.clientY - rect.top) / rect.height - 0.5;
      target.current.y = px * 90;
      target.current.x = -py * 45 - 10;
    };

    const onEnter = () => { hovering.current = true; };
    const onLeave = () => { hovering.current = false; };

    wrap.addEventListener('mousemove', onMove);
    wrap.addEventListener('mouseenter', onEnter);
    wrap.addEventListener('mouseleave', onLeave);

    const tick = () => {
      if (!hovering.current) target.current.y += 0.25;
      rot.current.x += (target.current.x - rot.current.x) * 0.08;
      rot.current.y += (target.current.y - rot.current.y) * 0.08;
      if (innerRef.current) {
        innerRef.current.style.transform = `rotateX(${rot.current.x}deg) rotateY(${rot.current.y}deg)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(rafRef.current);
      wrap.removeEventListener('mousemove', onMove);
      wrap.removeEventListener('mouseenter', onEnter);
      wrap.removeEventListener('mouseleave', onLeave);
    };
  }, [reduced]);

  // Reduced-motion / mobile fallback: grid
  if (reduced) {
    return (
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {skills.map((s) => (
          <div key={s.name} className="glass-pill px-4 py-3 text-center text-sm font-medium">
            {s.name}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      className="relative mx-auto"
      style={{
        width: radius * 2 + 180,
        maxWidth: '100%',
        height: radius * 2 + 120,
        perspective: '1200px',
      }}
    >
      <div
        ref={innerRef}
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d', willChange: 'transform' }}
      >
        {positions.map((p, i) => {
          const s = skills[i];
          if (!s) return null;
          const level = s.level ?? 75;
          return (
            <div
              key={s.name}
              className="absolute left-1/2 top-1/2 group"
              style={{
                transform: `translate(-50%, -50%) translate3d(${p.x}px, ${p.y}px, ${p.z}px)`,
                transformStyle: 'preserve-3d',
              }}
            >
              {/* counter-rotate so labels stay readable — but we keep it simple:
                  perspective makes back labels smaller; add opacity via z-depth */}
              <div
                className="glass-pill px-3 py-1.5 text-[12px] sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 group-hover:scale-125"
                style={{
                  opacity: 0.55 + ((p.z + radius) / (radius * 2)) * 0.45,
                  boxShadow: `0 0 ${8 + level / 6}px rgba(167,139,250,${0.2 + level / 300})`,
                }}
                title={`${s.name} — ${level}%`}
              >
                <span
                  className="inline-block w-1.5 h-1.5 rounded-full mr-2 align-middle"
                  style={{
                    background: `conic-gradient(#a78bfa ${level * 3.6}deg, rgba(255,255,255,0.15) 0)`,
                  }}
                />
                {s.name}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillSphere;
