import React from 'react';

const ExperienceSection = ({ experiences, isDark }) => (
  <section id="experience" className={`py-20 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Work <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-cyan-400 to-purple-400' : 'from-indigo-600 to-indigo-600'}`}>Experience</span>
        </h2>
        <div className={`mx-auto rounded-full ${isDark ? 'w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_15px_rgba(34,211,238,0.5)]' : 'w-20 h-1.5 bg-indigo-600 opacity-80'
          }`}></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 relative overflow-hidden group ${isDark
                ? 'bg-slate-900/40 backdrop-blur-md border-white/5 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)]'
                : 'bg-slate-50 border-slate-100 hover:border-indigo-100 transition-colors hover:shadow-lg'
              }`}>
              {isDark && <div className="absolute -right-20 -top-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl group-hover:bg-cyan-500/20 transition-all"></div>}

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4 gap-2 relative z-10">
                <div>
                  <h3 className={`text-xl font-bold transition-colors ${isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-indigo-600'
                    }`}>{exp.title}</h3>
                  <p className={`font-medium tracking-wide ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>{exp.company}</p>
                </div>
                <span className={`px-4 py-1.5 text-sm font-semibold rounded-full border shadow-sm transition-all ${isDark
                    ? 'bg-slate-800 text-slate-300 border-slate-700 group-hover:border-cyan-500/30 group-hover:text-cyan-200'
                    : 'bg-white text-slate-600 border-slate-200'
                  }`}>{exp.period}</span>
              </div>
              <p className={`leading-relaxed relative z-10 ${isDark ? 'text-slate-400 font-light' : 'text-slate-600'}`}>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default ExperienceSection;
