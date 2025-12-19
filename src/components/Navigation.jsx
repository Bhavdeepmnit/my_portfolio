import React, { useState, useEffect } from 'react';

const Navigation = ({ personalInfo, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const navItems = ["Home", "About", "Education", "Skills", "Experience", "Projects", "Achievements", "Contact"];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (item) => scrollToSection(item.toLowerCase());

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || isMenuOpen
        ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20"
        : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div
            className="text-2xl font-bold text-slate-800 cursor-pointer tracking-tight font-heading group"
            onClick={() => scrollToSection('home')}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600 group-hover:to-indigo-600 transition-all duration-300">
              {personalInfo.name}
            </span>
            <span className="text-indigo-600">.</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => handleItemClick(item)}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 ${isActive
                    ? "text-indigo-600 bg-indigo-50"
                    : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                    }`}
                >
                  {item}
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-indigo-600 rounded-full"></span>
                  )}
                </button>
              );
            })}

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="ml-4 px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-indigo-600 transition-colors duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-slate-600 hover:text-indigo-600 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "w-6 rotate-45 translate-y-2" : "w-6"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "w-4"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "w-6 -rotate-45 -translate-y-2" : "w-6"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-xl border-b border-gray-100 shadow-lg transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0"
            }`}
        >
          <div className="px-4 py-6 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  handleItemClick(item);
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-3 text-lg font-medium rounded-xl transition-colors ${activeSection === item.toLowerCase()
                  ? "bg-indigo-50 text-indigo-600"
                  : "text-slate-600 hover:bg-slate-50"
                  }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => {
                scrollToSection('contact');
                setIsMenuOpen(false);
              }}
              className="mt-4 w-full py-3 text-center text-white bg-indigo-600 rounded-xl font-bold shadow-md active:scale-95 transition-transform"
            >
              Let's Talk
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
