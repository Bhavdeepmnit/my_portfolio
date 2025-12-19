import React from 'react';
import { aboutMeParagraphs, socialLinks } from '../data/aboutData';

const AboutSection = () => (
  <section id="about" className="py-20 bg-white border-b border-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-4 font-heading tracking-tight">
          About <span className="text-indigo-600">Me</span>
        </h2>
        <div className="w-20 h-1.5 bg-indigo-600 mx-auto rounded-full opacity-80"></div>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="w-full">
          {aboutMeParagraphs.map((text, idx) => (
            <p key={idx} className="text-lg text-slate-600 mb-6 leading-8 font-body">
              {text}
            </p>
          ))}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            {socialLinks.map(link => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  ${link.className}
                  flex items-center gap-3 text-base font-semibold transition-all duration-300 transform hover:-translate-y-1 
                  px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-slate-700 
                  hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:shadow-lg
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
