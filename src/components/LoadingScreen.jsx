import React, { useState, useEffect } from 'react';

const LoadingScreen = ({ onComplete }) => {
  const [percent, setPercent] = useState(0);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    let raf;
    let progress = 0;
    const start = performance.now();

    const tick = (t) => {
      progress = Math.min(100, ((t - start) / 1400) * 100);
      setPercent(Math.floor(progress));
      if (progress < 100) {
        raf = requestAnimationFrame(tick);
      } else {
        setFading(true);
        setTimeout(() => onComplete && onComplete(), 600);
      }
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [onComplete]);

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center transition-opacity duration-500 ${
        fading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      style={{
        background:
          'radial-gradient(1000px 700px at 50% 40%, rgba(139,92,246,0.35), transparent 60%), linear-gradient(135deg, #1b0b3a, #0b4f6c)',
      }}
    >
      <div className="glass-card px-8 py-10 md:px-12 md:py-12 w-[min(92vw,440px)] text-center">
        {/* Animated logo */}
        <div className="mx-auto mb-6 w-20 h-20 relative">
          <div className="absolute inset-0 rounded-full border border-white/20" />
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-violet-300 border-r-cyan-300 animate-[spin_1.2s_linear_infinite]" />
          <div className="absolute inset-[8px] rounded-full border border-white/15" />
          <div className="absolute inset-[8px] rounded-full border-2 border-transparent border-b-fuchsia-300 border-l-cyan-200 animate-[spin_2s_linear_infinite_reverse]" />
          <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold font-heading bg-clip-text text-transparent bg-gradient-to-br from-violet-200 via-fuchsia-200 to-cyan-200">
            B
          </div>
        </div>

        <div className="text-white/90 font-heading text-lg tracking-[0.35em] mb-2">
          LOADING
        </div>
        <div className="text-[10px] uppercase tracking-[0.4em] text-cyan-200/80 mb-5">
          Initializing portfolio
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
          <div
            className="h-full rounded-full bg-gradient-to-r from-violet-400 via-fuchsia-400 to-cyan-300 shadow-[0_0_12px_rgba(167,139,250,0.7)] transition-[width] duration-100"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="mt-3 font-mono text-sm text-white/70">{percent}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
