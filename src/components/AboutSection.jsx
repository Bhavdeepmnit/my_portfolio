import React from 'react';
import { aboutMeParagraphs, socialLinks } from '../data/aboutData';

const AboutSection = ({ isDark }) => (
  <section id="about" className={`py-20 relative overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-white border-b border-slate-50'
    }`}>
    {/* Background Glow (Dark mode only) */}
    {isDark && (
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-4xl opacity-20 pointer-events-none">
        <div className="absolute top-20 left-0 w-64 h-64 bg-indigo-600 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-20 right-0 w-64 h-64 bg-cyan-600 rounded-full blur-[100px]"></div>
      </div>
    )}

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="text-center mb-16">
        <h2 className={`text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight ${isDark ? 'text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]' : 'text-slate-900'
          }`}>
          About <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark ? 'from-indigo-400 to-cyan-400' : 'from-indigo-600 to-indigo-600'
            }`}>Me</span>
        </h2>
        <div className={`w-24 h-1 mx-auto rounded-full ${isDark
            ? 'bg-gradient-to-r from-indigo-500 to-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]'
            : 'w-20 h-1.5 bg-indigo-600 opacity-80'
          }`}></div>
      </div>

      <div className="max-w-3xl mx-auto">
        <div className={`rounded-2xl p-8 md:p-12 border transition-all duration-500 ${isDark
            ? 'bg-slate-900/40 backdrop-blur-md border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.3)] hover:border-indigo-500/30'
            : 'bg-white border-slate-100 shadow-sm hover:shadow-md'
          }`}>
          {aboutMeParagraphs.map((text, idx) => (
            <p key={idx} className={`text-lg mb-6 leading-8 font-body ${isDark ? 'text-slate-300 font-light tracking-wide' : 'text-slate-600'
              }`}>
              {text}
            </p>
          ))}

          <div className={`flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t ${isDark ? 'border-white/5' : 'border-slate-50'
            }`}>
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${link.className}
                  flex items-center gap-3 text-sm font-semibold transition-all duration-300 transform hover:-translate-y-1 
                  px-6 py-3 rounded-full border ${isDark
                    ? 'bg-slate-800/50 border-slate-700 text-slate-300 hover:bg-indigo-600 hover:text-white hover:border-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.4)]'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-lg'
                  }
                `}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
