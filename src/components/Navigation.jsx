import { useEffect } from 'react';
const navItems = ['Home', 'About', 'Education', 'Skills', 'Experience', 'Projects', 'Achievements', 'Contact'];

const Navigation = ({ personalInfo, activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => {
  useEffect(() => {
    if (!isMenuOpen) return;
    const close = event => { if (event.key === "Escape") setIsMenuOpen(false); };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, [isMenuOpen, setIsMenuOpen]);
  return (
  <>
    <nav className="portfolio-nav" aria-label="Main navigation">
      <button className="nav-brand" onClick={() => scrollToSection('home')}>{personalInfo.name}<span>.</span></button>
      <div className="nav-shortcuts">
        {['Projects', 'About', 'Contact'].map(item => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-current={activeSection === item.toLowerCase() ? 'location' : undefined}>{item}</button>)}
      </div>
      <button className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-expanded={isMenuOpen} aria-controls="portfolio-menu">{isMenuOpen ? 'Close -' : 'Menu +'}</button>
      {isMenuOpen && <div id="portfolio-menu" className="portfolio-menu">{navItems.map((item, index) => <button key={item} onClick={() => scrollToSection(item.toLowerCase())} aria-current={activeSection === item.toLowerCase() ? 'location' : undefined}><span>0{index + 1}</span>{item}<span aria-hidden="true">&#8599;</span></button>)}</div>}
    </nav>
    <nav className="section-rail" aria-label="Section navigation">{navItems.map((item, index) => <button key={item} className={activeSection === item.toLowerCase() ? 'rail-active' : ''} onClick={() => scrollToSection(item.toLowerCase())} aria-label={item} aria-current={activeSection === item.toLowerCase() ? 'location' : undefined}><span className="rail-label">{item}</span><span>0{index + 1}</span></button>)}</nav>
  </>
);
};

export default Navigation;
