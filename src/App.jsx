
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

import { personalInfo } from './data/personalInfo';
import { skills } from './data/skills';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import { typingTexts } from './data/constants';

function App() {
  // Move all state and data from Portfolio.jsx here
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Scroll to section
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  // Typing animation effect
  useEffect(() => {
    const typeSpeed = 50;
    const deleteSpeed = 75;
    const pauseTime = 2000;

    const type = () => {
      const current = typingTexts[currentIndex];
      if (!isDeleting) {
        if (currentText.length < current.length) {
          setCurrentText(current.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(current.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % typingTexts.length);
        }
      }
    };
    const timer = setTimeout(type, isDeleting ? deleteSpeed : typeSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentIndex]);

  // // Handle scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'education', 'skills', 'experience', 'projects', 'achievements', 'contact'];
      const scrollPosition = window.scrollY + 100;
      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navigation
        personalInfo={personalInfo}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      <HeroSection
        personalInfo={personalInfo}
        currentText={currentText}
        scrollToSection={scrollToSection}
      />
      <AboutSection />
      <EducationSection />
      <SkillsSection skills={skills} />
      <ExperienceSection experiences={experiences} />
      <ProjectsSection projects={projects} />
      <AchievementsSection />
      <ContactSection personalInfo={personalInfo} />
      <Footer personalInfo={personalInfo} />
    </>
  );
}

export default App;
