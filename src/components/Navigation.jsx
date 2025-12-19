import React, { useState, useEffect } from 'react';

const Navigation = ({ personalInfo, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen, isDark, toggleTheme }) => {
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
          ? isDark
            ? "bg-slate-950/80 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5"
            : "bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20"
          : "bg-transparent border-b border-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">

          {/* Logo */}
          <div
            className={`text-2xl font-bold cursor-pointer tracking-tight font-heading group ${isDark ? 'text-white' : 'text-slate-800'}`}
            onClick={() => scrollToSection('home')}
          >
            <span className={`bg-clip-text text-transparent bg-gradient-to-r transition-all duration-300 ${isDark
                ? 'from-indigo-400 to-cyan-400 group-hover:to-purple-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]'
                : 'from-indigo-600 to-violet-600 group-hover:to-indigo-600'
              }`}>
              {personalInfo.name}
            </span>
            <span className={`${isDark ? 'text-cyan-400 animate-pulse' : 'text-indigo-600'}`}>{isDark ? '_' : '.'}</span>
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
                      ? isDark
                        ? "text-cyan-400 bg-cyan-950/30 shadow-[0_0_10px_rgba(34,211,238,0.2)]"
                        : "text-indigo-600 bg-indigo-50"
                      : isDark
                        ? "text-slate-400 hover:text-indigo-300 hover:bg-white/5"
                        : "text-slate-600 hover:text-indigo-600 hover:bg-slate-50"
                    }`}
                >
                  {item}
                  {isActive && (
                    <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full ${isDark ? 'bg-cyan-400 shadow-[0_0_5px_rgba(34,211,238,1)]' : 'bg-indigo-600'
                      }`}></span>
                  )}
                </button>
              );
            })}

            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className={`ml-2 p-2.5 rounded-full transition-all duration-300 ${isDark
                  ? 'bg-white/5 hover:bg-white/10 text-yellow-400 hover:text-yellow-300 border border-white/10'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-700 hover:text-slate-900'
                }`}
              aria-label="Toggle theme"
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            {/* CTA Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className={`ml-4 px-5 py-2.5 text-sm font-semibold text-white rounded-full transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 ${isDark
                  ? 'bg-indigo-600 hover:bg-indigo-500 shadow-[0_0_15px_rgba(79,70,229,0.4)] hover:shadow-[0_0_25px_rgba(79,70,229,0.6)] border border-indigo-500/50'
                  : 'bg-slate-900 hover:bg-indigo-600'
                }`}
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${isDark ? 'text-yellow-400 hover:text-yellow-300' : 'text-slate-600 hover:text-slate-900'
                }`}
              aria-label="Toggle theme"
            >
              {isDark ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 transition-colors focus:outline-none ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-slate-600 hover:text-indigo-600'
                }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span className={`h-0.5 bg-current transition-all duration-300 ${isDark && 'shadow-[0_0_5px_currentColor]'} ${isMenuOpen ? `w-6 rotate-45 translate-y-2 ${isDark ? 'text-cyan-400' : ''}` : "w-6"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? "opacity-0" : "w-4"}`} />
                <span className={`h-0.5 bg-current transition-all duration-300 ${isDark && 'shadow-[0_0_5px_currentColor]'} ${isMenuOpen ? `w-6 -rotate-45 -translate-y-2 ${isDark ? 'text-cyan-400' : ''}` : "w-6"}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full backdrop-blur-xl border-b shadow-2xl transition-all duration-300 ease-in-out origin-top ${isDark
              ? 'bg-slate-950/95 border-indigo-500/20'
              : 'bg-white/95 border-gray-100'
            } ${isMenuOpen ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0 h-0"}`}
        >
          <div className="px-4 py-6 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  handleItemClick(item);
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 ${activeSection === item.toLowerCase()
                    ? isDark
                      ? "bg-indigo-900/30 text-cyan-400 border border-indigo-500/30 shadow-[inset_0_0_10px_rgba(79,70,229,0.2)]"
                      : "bg-indigo-50 text-indigo-600"
                    : isDark
                      ? "text-slate-400 hover:text-indigo-300 hover:bg-white/5"
                      : "text-slate-600 hover:bg-slate-50 hover:text-indigo-600"
                  }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
