import React, { useEffect, useState } from 'react';
import profileImg from '../assets/IMG_4844.JPG';


const HeroSection = ({ personalInfo, currentText, scrollToSection }) => {
  const [showScrollDown, setShowScrollDown] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShowScrollDown(false);
      } else {
        setShowScrollDown(true);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
  <section id="home" className="relative pt-20 pb-16 min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa]">
    {/* 3D Grid Background SVG */}
    <svg
      className="absolute inset-0 w-full h-full z-0 opacity-20"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="gridGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.3" />
          <stop offset="50%" stopColor="#7c3aed" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#f43f5e" stopOpacity="0.3" />
        </linearGradient>
        <filter id="gridGlow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* 3D Perspective Grid Lines - Horizontal */}
      {Array.from({ length: 15 }).map((_, i) => {
        const y = (i / 14) * 800;
        const perspectiveOffset = (i / 14) * 300;
        return (
          <line
            key={`h-${i}`}
            x1={perspectiveOffset}
            y1={y}
            x2={1200 - perspectiveOffset}
            y2={y}
            stroke="url(#gridGradient)"
            strokeWidth="1.5"
            opacity={1 - i / 20}
            filter="url(#gridGlow)"
          />
        );
      })}
      
      {/* 3D Perspective Grid Lines - Vertical */}
      {Array.from({ length: 20 }).map((_, i) => {
        const x = (i / 19) * 1200;
        const perspectiveOffset = (i / 19) * 200;
        return (
          <line
            key={`v-${i}`}
            x1={x}
            y1={perspectiveOffset}
            x2={x}
            y2={800 - perspectiveOffset * 0.5}
            stroke="url(#gridGradient)"
            strokeWidth="1.5"
            opacity={1 - i / 25}
            filter="url(#gridGlow)"
          />
        );
      })}
      
      {/* Grid Intersection Points */}
      {Array.from({ length: 10 }).map((_, i) =>
        Array.from({ length: 15 }).map((_, j) => {
          const x = (j / 14) * 1200;
          const y = (i / 9) * 800;
          return (
            <circle
              key={`point-${i}-${j}`}
              cx={x}
              cy={y}
              r="2"
              fill="#7c3aed"
              opacity={(1 - i / 15) * 0.4}
              className="animate-pulse"
            />
          );
        })
      )}
    </svg>

    {/* Animated Background Elements */}
    <div className="absolute inset-0 z-10">
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full animate-bounce"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-40 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-ping"></div>
      <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-bounce delay-1000"></div>
    </div>
    <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
        {/* Left Content */}
        <div className="text-center lg:text-left text-[#4f46e5] lg:w-1/2 mb-10 lg:mb-0">
          <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-6xl font-extrabold mb-6 leading-tight">
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] drop-shadow-lg">Hi, I'm</span>
            <span className="block bg-gradient-to-r from-yellow-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
              {personalInfo.name}
            </span>
          </h2>
            {/* Typing Animation */}
            <div className="text-2xl md:text-4xl mb-6 text-[#7c3aed] h-12 flex items-center justify-center lg:justify-start">
              <span className="font-semibold">
                {currentText}
                <span className="animate-pulse">|</span>
              </span>
            </div>
            <p className="text-lg mb-4 text-[#f43f5e] font-medium">
              {personalInfo.college}
            </p>
            <p className="text-lg mb-8 max-w-2xl mx-auto lg:mx-0 text-[#4f46e5] leading-relaxed bg-white/80 rounded-xl shadow p-4">
              Computer Science Engineering student at MNIT Jaipur with expertise in full-stack 
              development, machine learning, and competitive programming. Building innovative 
              solutions for real-world problems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-[#4f46e5] to-[#f43f5e] text-white px-8 py-4 rounded-2xl font-bold shadow-xl hover:scale-105 transition-transform duration-300 border border-[#e0e7ff]"
              >
                Get In Touch
              </button>
              <button
                onClick={() => scrollToSection('projects')}
                className="bg-white/80 text-[#4f46e5] px-8 py-4 rounded-2xl font-semibold shadow-xl hover:bg-gradient-to-r hover:from-[#4f46e5] hover:to-[#f43f5e] hover:text-white transition-transform duration-300 border border-[#e0e7ff] hover:scale-105"
              >
                View My Work
              </button>
            </div>
          </div>
        </div>
        {/* Right Content - Profile Image and About Section */}
        <div className="lg:w-1/2 flex flex-col items-center lg:items-end gap-8">
          <div className="relative mb-8">
            {/* Outer Ring Animation */}
            <div className="absolute inset-0 rounded-full border-4 border-white/30 animate-spin-slow"></div>
            <div className="absolute inset-4 rounded-full border-2 border-yellow-400/50 animate-ping"></div>
            {/* Profile Image Container */}
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-8 border-[#e0e7ff] shadow-2xl backdrop-blur-sm">
              <div className="w-full h-full bg-gradient-to-br from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] flex items-center justify-center">
                {profileImg ? (
                  <img src={profileImg} alt="Bhavdeep" className="w-full h-full object-cover" />
                ) : (
                  <div className="text-center">
                    <div className="text-6xl md:text-8xl font-bold text-white mb-4">BD</div>
                  </div>
                )}
              </div>
              {/* Floating Skills Icons */}
              <div className="absolute -top-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute top-1/2 -right-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-pulse">
                <span className="text-2xl">🐍</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-bounce delay-500">
                <span className="text-2xl">🚀</span>
              </div>
              <div className="absolute top-1/2 -left-6 bg-white/90 backdrop-blur-sm rounded-full p-3 shadow-lg animate-pulse delay-1000">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
          {/* About Section Content removed from here */}
        </div>
      </div>
      {/* Scroll Indicator */}
      {showScrollDown && (
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-center z-30">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] text-sm mb-2 font-bold">Scroll Down</div>
          <span
            style={{fontSize:32, cursor:'pointer'}}
            className="text-transparent bg-clip-text bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] animate-bounce mx-auto hover:text-yellow-400 transition-colors duration-300 font-extrabold"
            onClick={() => scrollToSection('about')}
          >&#x25BC;</span>
        </div>
      )}
    </div>
  </section>
  );
};

export default HeroSection;
