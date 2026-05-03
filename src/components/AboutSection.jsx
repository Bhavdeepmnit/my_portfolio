import React from 'react';
import { aboutMeParagraphs, socialLinks } from '../data/aboutData';
import Reveal from './Reveal';

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <Reveal className="text-center mb-14">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 font-heading tracking-tight text-white glow-text">
          About{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 to-cyan-300">
            Me
          </span>
        </h2>
        <div className="w-24 h-1 mx-auto rounded-full bg-gradient-to-r from-violet-400 to-cyan-400 shadow-[0_0_12px_rgba(167,139,250,0.6)]" />
      </Reveal>

      <Reveal className="max-w-3xl mx-auto">
        <div className="glass-card p-8 md:p-12">
          {aboutMeParagraphs.map((text, idx) => (
            <p key={idx} className="text-base md:text-lg mb-5 leading-8 text-slate-100/90">
              {text}
            </p>
          ))}

          <div className="flex flex-wrap justify-center gap-4 mt-8 pt-6 border-t border-white/10">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-button flex items-center gap-2 text-sm font-semibold px-6 py-3 rounded-full"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </div>
  </section>
);

export default AboutSection;
