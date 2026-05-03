import React from 'react';
import Reveal from './Reveal';
import TiltCard from './TiltCard';

const ProjectsSection = ({ projects }) => (
  <section id="projects" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Reveal className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight text-white glow-text">
          Featured{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-300 to-cyan-300">
            Projects
          </span>
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-fuchsia-400 to-cyan-400 shadow-[0_0_12px_rgba(236,72,153,0.55)]" />
      </Reveal>

      <Reveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" stagger={100}>
        {projects.map((project, index) => (
          <TiltCard key={index} className="h-full">
            <div className="glass-card h-full flex flex-col overflow-hidden">
              {/* Preview band */}
              <div className="h-36 relative overflow-hidden border-b border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-cyan-500/20">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-mono text-sm text-white/80 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse shadow-[0_0_8px_rgba(236,72,153,0.9)]" />
                    {project.title}
                  </span>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white">{project.title}</h3>
                <p className="mb-4 text-sm leading-relaxed text-slate-100/80 flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, t) => (
                    <span
                      key={t}
                      className="glass-pill text-[11px] px-2.5 py-0.5 font-medium text-slate-100/90"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button flex-1 text-center py-2.5 rounded-xl font-semibold text-sm"
                    >
                      &lt;Code /&gt;
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-button flex-1 text-center py-2.5 rounded-xl font-semibold text-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </TiltCard>
        ))}
      </Reveal>
    </div>
  </section>
);

export default ProjectsSection;
