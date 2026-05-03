import React from 'react';
import Reveal from './Reveal';
import { education } from '../data/education';

const accents = {
  indigo: 'from-violet-400 to-indigo-400',
  purple: 'from-fuchsia-400 to-purple-400',
  cyan:   'from-cyan-400 to-sky-400',
};

const EducationSection = () => (
  <section id="education" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Reveal className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight text-white glow-text">
          My{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">
            Education
          </span>
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shadow-[0_0_12px_rgba(167,139,250,0.6)]" />
      </Reveal>

      <div className="max-w-4xl mx-auto relative pl-8 md:pl-12 border-l border-white/15">
        <Reveal className="space-y-8" stagger={120}>
          {education.map((edu, i) => (
            <div key={i} className="relative group">
              <span
                className={`absolute -left-[44px] md:-left-[58px] top-4 w-5 h-5 rounded-full bg-gradient-to-br ${accents[edu.accent] || accents.indigo} shadow-[0_0_12px_rgba(167,139,250,0.7)] ring-4 ring-[rgba(10,6,32,0.6)]`}
              />
              <div className="glass-card p-6 md:p-8 border-l-2 border-l-violet-400/60 transition-transform duration-300 hover:-translate-y-0.5">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-white">{edu.degree}</h3>
                    {edu.url ? (
                      <a
                        href={edu.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cyan-300 hover:text-cyan-200 transition-colors text-sm md:text-base"
                      >
                        {edu.institution}
                      </a>
                    ) : (
                      <p className="text-cyan-200/90 text-sm md:text-base">{edu.institution}</p>
                    )}
                    <p className="text-slate-300/70 text-xs mt-1">
                      {edu.location}
                      {edu.score ? ` • ${edu.score}` : ''}
                    </p>
                  </div>
                  <span className="glass-pill px-3 py-1 text-xs font-semibold whitespace-nowrap">
                    {edu.period}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </div>
  </section>
);

export default EducationSection;
