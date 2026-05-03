import React, { useState, useEffect } from 'react';
import './App.css';

import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen';
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
import CustomCursor from './components/CustomCursor';

import { personalInfo } from './data/personalInfo';
import { skills } from './data/skills';
import { experiences } from './data/experiences';
import { projects } from './data/projects';
import { typingTexts } from './data/constants';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Dark-only — lock the data-theme attribute once
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // Typing animation
  useEffect(() => {
    const typeSpeed = 60;
    const deleteSpeed = 30;
    const pauseTime = 1600;

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

  // Active section tracking
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'home',
        'about',
        'education',
        'skills',
        'experience',
        'projects',
        'achievements',
        'contact',
      ];
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
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
      <Background />
      <CustomCursor />

      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}

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
      </main>

      <Footer personalInfo={personalInfo} />
    </>
  );
}

export default App;
