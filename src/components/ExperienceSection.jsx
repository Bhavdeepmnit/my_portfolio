import TiltCard from './TiltCard';
import React from 'react';
import Reveal from './Reveal';

const ExperienceSection = ({ experiences }) => (
  <section id="experience" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Reveal className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight text-white glow-text">
          Work{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-300">
            Experience
          </span>
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-neutral-400 to-neutral-400 shadow-[0_0_12px_rgba(165,165,165,0.55)]" />
      </Reveal>

      <div className="max-w-4xl mx-auto relative pl-8 md:pl-12 border-l border-white/15">
        <Reveal className="space-y-8" stagger={150}>
          {experiences.map((exp, i) => (
            <div key={i} className="relative group">
              <span className="absolute -left-[44px] md:-left-[58px] top-5 w-5 h-5 rounded-full bg-gradient-to-br from-neutral-400 to-neutral-400 shadow-[0_0_14px_rgba(153,153,153,0.8)] ring-4 ring-[rgba(9,9,9,0.6)]" />

              <TiltCard surfaceClassName="glass-card p-6 md:p-8 border-l-2 border-l-neutral-400/60 transition-transform duration-300 hover:-translate-y-0.5">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{exp.title}</h3>
                    {exp.subtitle && (
                      <p className="text-sm text-neutral-200/75 mt-0.5">{exp.subtitle}</p>
                    )}
                    <p className="font-semibold text-neutral-300 mt-1">
                      {exp.company}
                      {exp.location && (
                        <span className="text-neutral-300/70 font-normal">
                          {' '}· {exp.location}
                        </span>
                      )}
                    </p>
                  </div>
                  <span className="glass-pill px-3 py-1 text-xs font-semibold whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>

                {exp.bullets ? (
                  <ul className="space-y-2 mt-2">
                    {exp.bullets.map((b, j) => (
                      <li
                        key={j}
                        className="flex gap-3 text-sm md:text-base text-neutral-100/85 leading-relaxed"
                      >
                        <span className="mt-[10px] w-1.5 h-1.5 rounded-full bg-gradient-to-br from-neutral-300 to-neutral-300 flex-shrink-0 shadow-[0_0_6px_rgba(153,153,153,0.7)]" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="leading-relaxed text-neutral-100/85">{exp.description}</p>
                )}
              </TiltCard>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
