import React from 'react';
import profileImg from '../assets/IMG_4844.JPG';
import Hero3DBackground from './Hero3DBackground';
import Reveal from './Reveal';

const HeroSection = ({ personalInfo, currentText, scrollToSection }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden"
    >
      {/* 3D WebGL background, lazy-loaded when hero is visible */}
      <Hero3DBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">
          {/* Text */}
          <Reveal className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-5 font-heading tracking-tight text-white glow-text">
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 drop-shadow-[0_0_14px_rgba(167,139,250,0.6)]">
                {personalInfo.name}
              </span>
            </h1>

            <div className="h-12 md:h-14 text-xl md:text-2xl lg:text-3xl font-medium mb-6 flex items-center justify-center lg:justify-start font-mono">
              <span className="text-violet-300 mr-3">&gt;</span>
              <span className="text-cyan-200 font-semibold pb-1">{currentText}</span>
              <span className="ml-1 animate-pulse text-violet-300">_</span>
            </div>

            <p className="text-base md:text-lg mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body text-slate-200/90">
              {personalInfo.tagline} CS Engineering student at{' '}
              <strong className="text-white">MNIT Jaipur</strong> and Deep Learning Intern at{' '}
              <span className="text-cyan-300 font-semibold">Drivomate</span> — shipping
              real-time Computer Vision & ADAS perception for the edge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="glass-button px-8 py-3.5 rounded-full font-semibold"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="glass-button px-8 py-3.5 rounded-full font-semibold"
              >
                Contact Me
              </button>
            </div>
          </Reveal>

          {/* Profile */}
          <Reveal className="flex-1 relative group" stagger={0}>
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-[-12px] rounded-full border border-violet-400/40 border-t-violet-400 animate-[spin_12s_linear_infinite]" />
              <div className="absolute inset-[-24px] rounded-full border border-cyan-400/25 border-b-cyan-400 animate-[spin_18s_linear_infinite_reverse]" />

              <div className="glass-strong relative w-full h-full overflow-hidden rounded-full shadow-[0_0_60px_rgba(139,92,246,0.35)]">
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full text-4xl font-mono text-white/60">
                    [NO_SIGNAL]
                  </div>
                )}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        onClick={() => scrollToSection('about')}
        aria-label="Scroll to about section"
      >
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
};

export default HeroSection;
