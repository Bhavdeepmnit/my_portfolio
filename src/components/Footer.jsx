import React from 'react';

const Footer = ({ personalInfo }) => (
  <footer className="bg-slate-900 text-white py-12 border-t border-slate-800">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <p className="text-2xl font-bold font-heading mb-2">
            {personalInfo.name}
            <span className="text-indigo-500">.</span>
          </p>
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="https://drive.google.com/file/d/17JFFqwK2LlK4rOzqniuwFFY8_xFYymMH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full font-medium transition-all duration-300 backdrop-blur-sm border border-white/10 hover:border-white/20"
          >
            Download Resume
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
