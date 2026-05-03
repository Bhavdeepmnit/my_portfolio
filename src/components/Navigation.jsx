import React, { useState, useEffect } from 'react';

const navItems = ['Home', 'About', 'Education', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'];

const Navigation = ({
  personalInfo,
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleItemClick = (item) => scrollToSection(item.toLowerCase());

  return (
    <nav
      role="navigation"
      aria-label="Main Navigation"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled || isMenuOpen ? 'glass-navbar' : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3.5">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="text-2xl font-bold tracking-tight font-heading group text-white"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 group-hover:from-cyan-300 group-hover:to-violet-300 transition-all duration-300 drop-shadow-[0_0_6px_rgba(167,139,250,0.5)]">
              {personalInfo.name}
            </span>
            <span className="text-cyan-300 animate-pulse">_</span>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.toLowerCase();
              return (
                <button
                  key={item}
                  onClick={() => handleItemClick(item)}
                  className={`relative px-3.5 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                    isActive
                      ? 'text-cyan-200 bg-white/10 border border-white/15 shadow-[0_0_12px_rgba(56,189,248,0.25)]'
                      : 'text-white/75 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white/80 hover:text-white"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col items-end gap-1.5">
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'
                  }`}
                />
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'opacity-0' : 'w-4'
                  }`}
                />
                <span
                  className={`h-0.5 bg-current transition-all duration-300 ${
                    isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        <div
          className={`md:hidden absolute top-full left-0 w-full glass-navbar shadow-2xl transition-all duration-300 ease-in-out origin-top ${
            isMenuOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 h-0'
          }`}
        >
          <div className="px-4 py-5 space-y-2 flex flex-col">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  handleItemClick(item);
                  setIsMenuOpen(false);
                }}
                className={`text-left px-4 py-2.5 rounded-lg text-base font-medium transition-all ${
                  activeSection === item.toLowerCase()
                    ? 'bg-white/10 text-cyan-200 border border-white/15'
                    : 'text-white/75 hover:text-white hover:bg-white/5'
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
