import React from 'react';
import Reveal from './Reveal';
import SkillSphere from './SkillSphere';

const SkillsSection = ({ skills }) => {
  const isMobile =
    typeof window !== 'undefined' && (window.innerWidth < 768 || navigator.maxTouchPoints > 0);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <Reveal className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight text-white glow-text">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-violet-300">
              Skills
            </span>
          </h2>
          <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 shadow-[0_0_12px_rgba(56,189,248,0.55)]" />
          <p className="text-slate-200/70 mt-4 text-sm md:text-base">
            Drag to rotate · hover an orb to focus
          </p>
        </Reveal>

        <Reveal>
          <div className="glass-card px-4 py-8 md:py-12">
            {isMobile ? (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {skills.map((s) => (
                  <div
                    key={s.name}
                    className="glass-pill px-3 py-2 text-center text-xs font-semibold"
                  >
                    {s.name}
                  </div>
                ))}
              </div>
            ) : (
              <SkillSphere skills={skills} />
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default SkillsSection;
