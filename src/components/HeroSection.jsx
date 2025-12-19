import React from 'react';
import profileImg from '../assets/IMG_4844.JPG';

const HeroSection = ({ personalInfo, currentText, scrollToSection }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-slate-50">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Top Right Blob */}
        <div className="absolute -top-[20%] -right-[10%] w-[50vh] h-[50vh] bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
        {/* Bottom Left Blob */}
        <div className="absolute top-[40%] -left-[10%] w-[60vh] h-[60vh] bg-violet-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        {/* Center Small Blob */}
        <div className="absolute top-[20%] left-[20%] w-[20vh] h-[20vh] bg-pink-100/40 rounded-full blur-2xl animate-bounce delay-700 duration-[4000ms]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-block px-4 py-2 mb-6 rounded-full bg-indigo-50 border border-indigo-100 animate-fade-in-up">
              <span className="text-indigo-600 font-semibold text-sm tracking-wide uppercase">
                Available for work
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6 font-heading tracking-tight">
              Hi, I'm <br className="hidden lg:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                {personalInfo.name}
              </span>
            </h1>

            <div className="h-12 md:h-16 text-2xl md:text-3xl lg:text-4xl font-medium text-slate-600 mb-8 flex items-center justify-center lg:justify-start">
              {/* <span>I build</span> */}
              <span className="ml-3 text-indigo-600 font-semibold border-b-4 border-indigo-200">
                {currentText}
              </span>
              <span className="ml-1 animate-pulse text-indigo-600">|</span>
            </div>

            <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body">
              Computer Science Engineering student at <strong className="text-slate-900">MNIT Jaipur</strong>.
              I specialize in building exceptional digital experiences that are fast, accessible, and visually stunning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold shadow-sm hover:shadow-md hover:border-indigo-200 transition-all transform hover:-translate-y-1"
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 relative group">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-indigo-600 to-violet-600 rounded-[2rem] -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-500"></div>
              <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl bg-white">
                {profileImg ? (
                  <img
                    src={profileImg}
                    alt="Bhavdeep"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full bg-slate-100 text-slate-400 font-bold text-4xl">
                    Img
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce text-slate-400 hover:text-indigo-600 transition-colors"
        onClick={() => scrollToSection('about')}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
