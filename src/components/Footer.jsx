import React from 'react';

const Footer = ({ personalInfo }) => (
  <footer className="relative py-12 border-t border-white/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="glass-card px-6 md:px-10 py-7 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold font-heading mb-1 bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300">
            {personalInfo.name}
            <span className="text-fuchsia-300">.</span>
          </p>
          <p className="text-xs text-slate-200/70">
            © {new Date().getFullYear()} {personalInfo.name}. Built with React, Three.js & Tailwind.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://drive.google.com/file/d/1jx3rz9i7C8Iiu8XQQju6Shdwau8DeHCo/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-button px-5 py-2.5 text-sm font-semibold rounded-full"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
