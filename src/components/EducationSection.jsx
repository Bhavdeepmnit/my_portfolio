import React from 'react';

const EducationSection = ({ isDark }) => (
  <section id="education" className={`py-20 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
          My <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-purple-400 to-indigo-400' : 'from-indigo-600 to-indigo-600'}`}>Education</span>
        </h2>
        <div className={`mx-auto rounded-full ${isDark
          ? 'w-24 h-1 bg-gradient-to-r from-purple-500 to-indigo-500 shadow-[0_0_15px_rgba(168,85,247,0.5)]'
          : 'w-20 h-1.5 bg-indigo-600 opacity-80'
          }`}></div>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className={`relative ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-4 ${isDark ? 'border-l-2 border-indigo-500/20' : 'border-l-2 border-indigo-200'
          }`}>

          {/* Education Item 1 */}
          <div className="relative group">
            <span className={`absolute -left-[41px] md:-left-[59px] top-2 w-6 h-6 rounded-full border-4 shadow-md transition-all duration-300 ${isDark
              ? 'bg-slate-950 border-indigo-500 shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover:bg-indigo-500 group-hover:scale-125'
              : 'bg-indigo-600 border-white'
              }`}></span>
            <div className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${isDark
              ? 'bg-slate-900/40 backdrop-blur-sm border-white/5 hover:border-indigo-500/40 hover:shadow-[0_0_30px_rgba(79,70,229,0.15)]'
              : 'bg-white border-slate-100 hover:border-indigo-100 hover:shadow-md'
              }`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-xl font-bold mb-1 transition-colors ${isDark ? 'text-white group-hover:text-indigo-300' : 'text-slate-900 group-hover:text-indigo-600'
                    }`}>Bachelor of Technology</h3>
                  <p className={`font-medium ${isDark ? 'text-indigo-400' : 'text-indigo-600'}`}>Computer Science and Engineering</p>
                  <a href="https://mnit.ac.in" target="_blank" rel="noopener noreferrer" className={`text-sm transition-colors mt-2 inline-block ${isDark ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-500 hover:text-indigo-600'
                    }`}>
                    Malaviya National Institute of Technology (MNIT), Jaipur
                  </a>
                </div>
                <div className="mt-2 md:mt-0 flex items-center gap-2">
                  <span className={`px-3 py-1 border rounded-full text-xs font-bold ${isDark
                    ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20 shadow-[0_0_10px_rgba(99,102,241,0.1)]'
                    : 'bg-indigo-50 text-indigo-700 border-indigo-100'
                    }`}>2022 - 2026</span>
                </div>
              </div>
              <div className={`mt-4 pt-4 border-t ${isDark ? 'border-white/5' : 'border-slate-50'}`}>
                <span className={`font-bold ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>CGPA:</span>
                <span className={`ml-2 ${isDark ? 'text-white' : 'text-slate-600'}`}>6.36/10</span>
              </div>
            </div>
          </div>

          {/* Education Item 2 */}
          <div className="relative group">
            <span className={`absolute -left-[41px] md:-left-[59px] top-2 w-6 h-6 rounded-full border-4 shadow-md transition-all duration-300 ${isDark
              ? 'bg-slate-950 border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] group-hover:bg-purple-500 group-hover:scale-125'
              : 'bg-indigo-400 border-white'
              }`}></span>
            <div className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${isDark
              ? 'bg-slate-900/40 backdrop-blur-sm border-white/5 hover:border-purple-500/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]'
              : 'bg-white border-slate-100 hover:border-indigo-100 hover:shadow-md'
              }`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-xl font-bold mb-1 transition-colors ${isDark ? 'text-white group-hover:text-purple-300' : 'text-slate-900 group-hover:text-indigo-600'
                    }`}>Intermediate/+2</h3>
                  <p className={`font-medium ${isDark ? 'text-purple-400' : 'text-indigo-600'}`}>Science (PCM)</p>
                  <p className="text-slate-500 text-sm mt-1">K.V.M. Public School, Sikar</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${isDark ? 'bg-purple-500/10 text-purple-300 border border-purple-500/20' : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>2020 - 2021</span>
                </div>
              </div>
              <div className={`mt-4 pt-4 border-t ${isDark ? 'border-white/5' : 'border-slate-50'}`}>
                <span className={`font-bold ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>Percentage:</span>
                <span className={`ml-2 ${isDark ? 'text-white' : 'text-slate-600'}`}>96.80%</span>
              </div>
            </div>
          </div>

          {/* Education Item 3 */}
          <div className="relative group">
            <span className={`absolute -left-[41px] md:-left-[59px] top-2 w-6 h-6 rounded-full border-4 shadow-md transition-all duration-300 ${isDark
              ? 'bg-slate-950 border-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] group-hover:bg-cyan-500 group-hover:scale-125'
              : 'bg-slate-300 border-white'
              }`}></span>
            <div className={`p-8 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${isDark
              ? 'bg-slate-900/40 backdrop-blur-sm border-white/5 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(34,211,238,0.15)]'
              : 'bg-white border-slate-100 hover:border-indigo-100 hover:shadow-md'
              }`}>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className={`text-xl font-bold mb-1 transition-colors ${isDark ? 'text-white group-hover:text-cyan-300' : 'text-slate-900 group-hover:text-indigo-600'
                    }`}>Matriculation</h3>
                  <p className="text-slate-500 text-sm mt-1">R.E.D. Sr. Sec. Chhuchhakwas, Haryana</p>
                </div>
                <div className="mt-2 md:mt-0">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold ${isDark ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20' : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}>2018 - 2019</span>
                </div>
              </div>
              <div className={`mt-4 pt-4 border-t ${isDark ? 'border-white/5' : 'border-slate-50'}`}>
                <span className={`font-bold ${isDark ? 'text-slate-400' : 'text-slate-700'}`}>Percentage:</span>
                <span className={`ml-2 ${isDark ? 'text-white' : 'text-slate-600'}`}>88.20%</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default EducationSection;
