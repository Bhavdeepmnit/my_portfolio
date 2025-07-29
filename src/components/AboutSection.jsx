import React from 'react';
import { aboutMeParagraphs, socialLinks } from '../data/aboutData';

const AboutSection = () => (
  <section id="about" className="py-16 bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa]">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mb-4 drop-shadow-lg">About Me</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] mx-auto rounded-full"></div>
      </div>
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="w-full">
          {aboutMeParagraphs.map((text, idx) => (
            <p key={idx} className="text-lg text-gray-700 mb-6 leading-relaxed bg-white/80 rounded-xl shadow p-4">
              {text}
            </p>
          ))}
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={
                  link.className +
                  ' flex items-center gap-2 text-lg font-semibold shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-[#7c3aed]/40 px-6 py-3 rounded-2xl bg-white/80 border border-[#e0e7ff] hover:bg-gradient-to-br hover:from-[#e0e7ff] hover:via-[#f0fdfa] hover:to-[#f43f5e] hover:text-white'
                }
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
