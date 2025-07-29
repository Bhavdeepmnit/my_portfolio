import React from 'react';

const Footer = ({ personalInfo }) => (
  <footer className="bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center flex flex-col items-center gap-4">
        <p className="text-white/80 text-lg font-medium drop-shadow">
          © 2025 {personalInfo.name}. All rights reserved.
        </p>
        <a
          href="/resume.pdf"
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

// Add a fixed Download Resume button to always show on the page
export const FixedResumeButton = () => (
  <a
    href="/resume.pdf"
    download
    className="fixed bottom-8 right-8 z-50 bg-white/80 text-[#4f46e5] px-6 py-3 rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform duration-300 border border-[#e0e7ff] hover:bg-gradient-to-r hover:from-[#4f46e5] hover:to-[#f43f5e] hover:text-white fixed-resume-btn"
    style={{boxShadow: '0 4px 24px rgba(79,70,229,0.15)'}}
  >
    Download Resume
  </a>
);

// Add this to your global CSS (e.g., App.css):
/*
.fixed-resume-btn {
  @media (max-width: 640px) {
    bottom: 16px !important;
    right: 16px !important;
    width: 90vw !important;
    left: 5vw !important;
  }
}
*/
