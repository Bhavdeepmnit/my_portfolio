import React from 'react';

const Footer = ({ personalInfo }) => (
  <footer className="bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col items-center gap-4">
        <p className="text-white/80 text-lg font-medium drop-shadow">
          © 2025 {personalInfo.name}. All rights reserved.
        </p>
        <a
          href="https://drive.google.com/file/d/17JFFqwK2LlK4rOzqniuwFFY8_xFYymMH/view?usp=sharing"
          download
          className="bg-white/80 text-[#4f46e5] px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform duration-300 border border-[#e0e7ff] hover:bg-gradient-to-r hover:from-[#4f46e5] hover:to-[#f43f5e] hover:text-white"
        >
          Download Resume
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
