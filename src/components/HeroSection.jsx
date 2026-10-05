import profileImg from '../assets/profile.webp';
import Reveal from './Reveal';
import TiltCard from './TiltCard';
import AnimatedRole from './AnimatedRole';

const HeroSection = ({ personalInfo, scrollToSection }) => (
  <section id="home" className="hero-section">
    <div className="hero-grid" aria-hidden="true" />
    <div className="hero-layout">
      <Reveal className="hero-copy">
        <p className="eyebrow">PORTFOLIO / {personalInfo.name.toUpperCase()}</p>
        <h1>Ideas into<br /><span>real systems.</span></h1>
        <p className="hero-name">I'm {personalInfo.name}.</p>
        <p className="hero-role">{personalInfo.title}</p>
        <p className="hero-description">{personalInfo.tagline}</p>
        <div className="hero-actions">
          <button className="primary-action" onClick={() => scrollToSection('projects')}>Explore my work <span aria-hidden="true">&#8599;</span></button>
          <button className="secondary-action" onClick={() => scrollToSection('contact')}>Let's talk <span aria-hidden="true">&#8599;</span></button>
        </div>
      </Reveal>
      <Reveal className="hero-visual">
        <div className="depth-orbit orbit-one" aria-hidden="true" />
        <div className="depth-orbit orbit-two" aria-hidden="true" />
        <TiltCard className="portrait-card" max={8} scale={1.015}>
          <div className="portrait-surface">
            <div className="portrait-caption"><span>{personalInfo.name.toUpperCase()}</span><span>01 / PROFILE</span></div>
            <img src={profileImg} alt={personalInfo.name} className="portrait-image" />
            <div className="portrait-bottom"><span>{personalInfo.location}</span><span aria-hidden="true">&#8599;</span></div>
          </div>
        </TiltCard>
        <div className="floating-caption"><span className="status-dot" /><AnimatedRole /></div>
      </Reveal>
    </div>
    <div className="hero-bottom"><span>CODE. CREATE. ITERATE.</span><button onClick={() => scrollToSection('about')}>SCROLL TO EXPLORE <span aria-hidden="true">&#8595;</span></button><span>01 / 08</span></div>
  </section>
);

export default HeroSection;
