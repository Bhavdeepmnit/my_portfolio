import React from 'react';
import profileImg from '../assets/IMG_4844.JPG';

const HeroSection = ({ personalInfo, currentText, scrollToSection, isDark }) => {
  return (
    <section id="home" className={`relative min-h-screen flex items-center pt-20 overflow-hidden ${isDark ? 'bg-slate-950' : 'bg-slate-50'}`}>

      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {isDark ? (
          <>
            {/* Cosmic Dark Background */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] mix-blend-screen opacity-50 animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px] mix-blend-screen opacity-50 animate-pulse-slow delay-1000"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"></div>
          </>
        ) : (
          <>
            {/* Light Mode Blobs */}
            <div className="absolute -top-[20%] -right-[10%] w-[50vh] h-[50vh] bg-indigo-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-[40%] -left-[10%] w-[60vh] h-[60vh] bg-violet-200/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-[20%] left-[20%] w-[20vh] h-[20vh] bg-pink-100/40 rounded-full blur-2xl animate-bounce delay-700 duration-[4000ms]"></div>
          </>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-8">

          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className={`inline-block px-4 py-2 mb-6 rounded-full animate-fade-in-up ${isDark
              ? 'bg-slate-900/50 border border-indigo-500/30 backdrop-blur-md shadow-[0_0_15px_rgba(79,70,229,0.3)]'
              : 'bg-indigo-50 border border-indigo-100'
              }`}>
              <span className={`font-semibold text-sm tracking-wide uppercase ${isDark ? 'text-cyan-400' : 'text-indigo-600'}`}>
                {isDark ? '• Available for work' : '• Available for work'}
              </span>
            </div>

            <h1 className={`text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-6 font-heading tracking-tight ${isDark ? 'text-white' : 'text-slate-900'}`}>
              Hi, I'm <br className="hidden lg:block" />
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${isDark
                ? 'from-indigo-400 via-purple-400 to-cyan-400 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]'
                : 'from-indigo-600 to-violet-600'
                }`}>
                {personalInfo.name}
              </span>
            </h1>

            <div className={`h-12 md:h-16 text-2xl md:text-3xl lg:text-4xl font-medium mb-8 flex items-center justify-center lg:justify-start ${isDark ? 'font-mono' : ''
              }`}>
              {isDark && <span className="text-indigo-400 mr-4">&gt;</span>}
              <span className={`${isDark ? 'ml-0 text-cyan-300' : 'text-indigo-600'} font-semibold ${isDark ? 'border-b-2 border-cyan-500/30' : 'border-b-4 border-indigo-200'
                } pb-1`}>
                {currentText}
              </span>
              <span className={`ml-1 animate-pulse ${isDark ? 'text-indigo-500' : 'text-indigo-600'}`}>{isDark ? '_' : '|'}</span>
            </div>

            <p className={`text-lg mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-body ${isDark ? 'text-slate-400' : 'text-slate-600'
              }`}>
              Computer Science Engineering student at <strong className={isDark ? 'text-white' : 'text-slate-900'}>MNIT Jaipur</strong>.
              {isDark ? (
                <> Engineering <span className="text-indigo-400">digital universes</span> with cleaner code and vivid interactivity.</>
              ) : (
                ' I specialize in building exceptional digital experiences that are fast, accessible, and visually stunning.'
              )}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('projects')}
                className={`px-8 py-4 text-white rounded-full font-bold shadow-lg transition-all transform hover:-translate-y-1 ${isDark
                  ? 'bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)]'
                  : 'bg-slate-900 hover:bg-slate-800 hover:shadow-xl'
                  }`}
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className={`px-8 py-4 rounded-full font-bold transition-all transform hover:-translate-y-1 ${isDark
                  ? 'bg-transparent text-white border border-slate-700 hover:border-cyan-400 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)] bg-slate-900/30 backdrop-blur-sm'
                  : 'bg-white text-slate-900 border border-slate-200 shadow-sm hover:shadow-md hover:border-indigo-200'
                  }`}
              >
                Contact Me
              </button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex-1 relative group">
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              {isDark ? (
                <>
                  {/* Dark Mode: Rotating Portal Rings */}
                  <div className="absolute inset-[-10px] rounded-full border border-indigo-500/30 border-t-indigo-500 animate-[spin_10s_linear_infinite]"></div>
                  <div className="absolute inset-[-20px] rounded-full border border-purple-500/20 border-b-purple-500 animate-[spin_15s_linear_infinite_reverse]"></div>
                </>
              ) : (
                <>
                  {/* Light Mode: Rotated Gradient Backgrounds */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600 to-violet-600 rounded-[2rem] rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
                  <div className="absolute inset-0 bg-gradient-to-bl from-indigo-600 to-violet-600 rounded-[2rem] -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-500"></div>
                </>
              )}

              <div className={`relative w-full h-full overflow-hidden ${isDark
                ? 'rounded-full border-2 border-slate-700 shadow-[0_0_50px_rgba(79,70,229,0.3)] bg-slate-900'
                : 'rounded-[2rem] border-4 border-white shadow-2xl bg-white'
                }`}>
                {profileImg ? (
                  <>
                    <img
                      src={profileImg}
                      alt="Bhavdeep"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-90 group-hover:opacity-100"
                    />
                    {isDark && (
                      <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[size:100%_4px] opacity-20 pointer-events-none"></div>
                    )}
                  </>
                ) : (
                  <div className={`flex items-center justify-center h-full font-bold text-4xl ${isDark ? 'bg-slate-900 text-slate-700 font-mono' : 'bg-slate-100 text-slate-400'
                    }`}>
                    {isDark ? '[NO_SIGNAL]' : 'Img'}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div
        className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer animate-bounce transition-colors ${isDark ? 'text-slate-500 hover:text-cyan-400' : 'text-slate-400 hover:text-indigo-600'
          }`}
        onClick={() => scrollToSection('about')}
      >
        <svg className={`w-${isDark ? '8' : '6'} h-${isDark ? '8' : '6'} ${isDark ? 'opacity-70' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
