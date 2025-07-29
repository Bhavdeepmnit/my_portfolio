import React, { useState } from 'react';

const Navigation = ({ personalInfo, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const navItems = ["Home", "About", "Education", "Skills", "Experience", "Projects", "Achievements", "Contact"];

  const handleItemHover = (item) => setHoveredItem(item);
  const handleItemLeave = () => setHoveredItem(null);
  const handleItemClick = (item) => scrollToSection(item.toLowerCase());

return (
    <nav role="navigation" aria-label="Main Navigation" className="fixed top-0 w-full bg-gradient-to-r from-[#4f46e5] via-[#7c3aed] to-[#f43f5e] backdrop-blur-md shadow-lg z-50 border-b border-[#e0e7ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-3xl font-extrabold bg-white/80 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300 cursor-pointer drop-shadow-lg">
            {personalInfo.name}
          </div>
          <div className="hidden md:flex space-x-2 bg-white/80 backdrop-blur-sm rounded-2xl px-8 py-3 shadow-xl border border-[#e0e7ff]">
            {navItems.map((item) => (
              <button
                key={item}
                tabIndex={0}
                aria-label={`Go to ${item}`}
                onMouseEnter={() => handleItemHover(item)}
                onMouseLeave={handleItemLeave}
                onClick={() => handleItemClick(item)}
                className={`relative px-6 py-3 text-base font-bold transition-all duration-300 rounded-2xl group border border-transparent focus:outline-none focus:ring-4 focus:ring-[#7c3aed]/40 ${
                  activeSection === item.toLowerCase()
                    ? "text-white bg-gradient-to-r from-[#4f46e5] to-[#f43f5e] shadow-lg scale-105 border-[#e0e7ff]"
                    : hoveredItem === item
                    ? "text-white bg-gradient-to-r from-[#4f46e5] to-[#f43f5e] scale-105 shadow-md border-[#e0e7ff]"
                    : "text-[#4f46e5] hover:bg-gradient-to-r hover:from-[#4f46e5] hover:to-[#f43f5e] hover:text-white"
                }`}
              >
                <span className="relative z-10">{item}</span>
                {hoveredItem === item && activeSection !== item.toLowerCase() && (
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4f46e5] to-[#f43f5e] opacity-10 rounded-2xl animate-pulse"></div>
                )}
                {activeSection === item.toLowerCase() && (
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                )}
              </button>
            ))}
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-3 text-[#4f46e5] hover:text-white hover:bg-gradient-to-r hover:from-[#4f46e5] hover:to-[#f43f5e] rounded-xl transition-all duration-200 hover:scale-110 shadow-xl"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                {isMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </div>
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-br from-[#f8fafc] via-[#e0e7ff] to-[#f0fdfa] backdrop-blur-md border-t border-[#e0e7ff] shadow-xl">
            <div className="px-4 py-3 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    handleItemClick(item);
                    setIsMenuOpen(false);
                  }}
                  onMouseEnter={() => handleItemHover(item)}
                  onMouseLeave={handleItemLeave}
                  className={`block w-full text-left px-6 py-4 text-lg font-bold rounded-2xl transition-all duration-300 transform hover:scale-105 border border-transparent focus:outline-none focus:ring-4 focus:ring-[#7c3aed]/40 ${
                    activeSection === item.toLowerCase()
                      ? "text-white bg-gradient-to-r from-[#4f46e5] to-[#f43f5e] shadow-lg border-[#e0e7ff]"
                      : hoveredItem === item
                      ? "text-white bg-gradient-to-r from-[#4f46e5] to-[#f43f5e] shadow-md border-[#e0e7ff]"
                      : "text-[#4f46e5] hover:bg-gradient-to-r hover:from-[#4f46e5] hover:to-[#f43f5e] hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{item}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center justify-between">
              <div className="w-2 h-2 bg-[#4f46e5] rounded-full animate-pulse"></div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;