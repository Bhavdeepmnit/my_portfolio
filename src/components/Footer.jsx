import React from 'react';

const Footer = ({ personalInfo, isDark }) => (
  <footer className={`text-white py-12 border-t relative ${isDark ? 'bg-slate-950 border-white/5' : 'bg-slate-900 border-slate-800'
    }`}>
    {isDark && <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none"></div>}
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className={`text-2xl font-bold font-heading mb-2 ${isDark
              ? 'bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400'
              : 'text-white'
            }`}>
            {personalInfo.name}
            <span className={isDark ? 'text-purple-400' : 'text-indigo-500'}>.</span>
          </p>
          <p className={`text-sm ${isDark ? 'text-slate-500' : 'text-slate-400'}`}>
            © {new Date().getFullYear()} All rights reserved. {isDark && 'Built with React & Tailwind.'}
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://drive.google.com/file/d/17JFFqwK2LlK4rOzqniuwFFY8_xFYymMH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-3 text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm border ${isDark
                ? 'bg-white/5 hover:bg-indigo-600/20 text-indigo-300 border-indigo-500/20 hover:border-indigo-500 hover:shadow-[0_0_15px_rgba(79,70,229,0.3)] hover:text-white'
                : 'bg-white/10 hover:bg-white/20 border-white/10 hover:border-white/20'
              }`}
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
