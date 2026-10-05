import React, { useState, useEffect } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import EducationSection from './components/EducationSection';
import AchievementsSection from './components/AchievementsSection';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Background from './components/Background';

import { personalInfo } from './data/personalInfo';
import { skills } from './data/skills';
import { experiences } from './data/experiences';
import { projects } from './data/projects';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = sectionId => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    document.getElementById(sectionId)?.scrollIntoView({ behavior: reduced ? 'instant' : 'smooth' });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const current = entries.find(entry => entry.isIntersecting);
      if (current) setActiveSection(current.target.id);
    }, { rootMargin: '-20% 0px -70% 0px', threshold: 0 });
    document.querySelectorAll('main > section').forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Background />

      <Navigation
        personalInfo={personalInfo}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />

      <main>
        <HeroSection
          personalInfo={personalInfo}
          scrollToSection={scrollToSection}
        />
        <AboutSection />
        <EducationSection />
        <SkillsSection skills={skills} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <AchievementsSection />
        <ContactSection personalInfo={personalInfo} />
      </main>

      <Footer personalInfo={personalInfo} />
    </>
  );
}

export default App;
