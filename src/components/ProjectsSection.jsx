import React from 'react';

const ProjectsSection = ({ projects, isDark }) => (
  <section id="projects" className={`py-20 relative ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Featured <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-purple-500 to-pink-500' : 'from-indigo-600 to-indigo-600'}`}>{isDark ? '- Projects' : ''} -</span>
        </h2>
        <div className={`mx-auto rounded-full ${isDark ? 'w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 shadow-[0_0_15px_rgba(192,132,252,0.5)]' : 'w-20 h-1.5 bg-indigo-600 opacity-80'
          }`}></div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className={`group rounded-2xl border overflow-hidden transition-all duration-300 hover:-translate-y-2 flex flex-col h-full relative ${isDark
              ? 'bg-slate-900/60 backdrop-blur-md border-white/5 hover:border-purple-500/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]'
              : 'bg-white border-slate-100 hover:border-indigo-100 hover:shadow-xl'
            }`}>

            {isDark && <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>}

            <div className={`h-48 flex items-center justify-center relative overflow-hidden border-b transition-colors ${isDark
                ? 'bg-slate-950 border-white/5 group-hover:border-purple-500/30'
                : 'bg-slate-100'
              }`}>
              {isDark && (
                <>
                  <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
                </>
              )}

              <span className={`text-lg font-semibold z-10 flex items-center gap-2 ${isDark
                  ? 'text-slate-500 font-mono group-hover:text-purple-400 transition-colors'
                  : 'text-slate-400 group-hover:text-indigo-600'
                }`}>
                {isDark && <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></span>}
                {project.title} Preview
              </span>
            </div>

            <div className="p-6 flex flex-col flex-grow relative z-10">
              <h3 className={`text-xl font-bold mb-2 transition-colors ${isDark ? 'text-white group-hover:text-purple-300' : 'text-slate-900 group-hover:text-indigo-600'
                }`}>{project.title}</h3>
              <p className={`mb-4 text-sm leading-relaxed flex-grow ${isDark ? 'text-slate-400 font-light' : 'text-slate-600'}`}>{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className={`border text-xs px-2.5 py-1 rounded-md font-medium transition-colors ${isDark
                        ? 'bg-slate-800/50 text-slate-300 border-slate-700 group-hover:border-purple-500/30 group-hover:text-purple-200'
                        : 'bg-slate-50 text-slate-600 border-slate-200'
                      }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center py-2.5 rounded-xl font-bold shadow-lg border transition-all ${isDark
                      ? 'bg-slate-800 text-white border-slate-700 hover:bg-purple-600 hover:border-purple-500 hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                      : 'bg-slate-900 text-white hover:bg-indigo-600 hover:shadow-xl'
                    }`}
                >
                  {isDark ? '<Code />' : 'Code'}
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex-1 text-center py-2.5 rounded-xl font-bold border transition-all ${isDark
                      ? 'bg-transparent text-slate-300 border-slate-600 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]'
                      : 'bg-white text-slate-700 border-slate-200 hover:border-indigo-600 hover:text-indigo-600'
                    }`}
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProjectsSection;
