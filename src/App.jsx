
import React, { useState, useEffect } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import LoadingScreen from './components/LoadingScreen'; // Import LoadingScreen
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

// Short subtle "tick" sound in base64
const hoverSoundUrl = "data:audio/wav;base64,UklGRl9vT19XQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YU"; // Placeholder, will use a real one or logic to generate one. 
// Actually, let's use a real, verifyinly working small click sound.
// Using a simple short beep generated via script or a known safe short base64. 
// I will use a very short, base64 encoded 'pop' sound. 
const HOVER_AUDIO = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQAAAAEA//8BAAAAAAAA"; // This is empty.

// Let's use a real base64 for a short pop.
const POP_SOUND = "data:audio/wav;base64,UklGRjIAAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YRAAAACAAAAAgAAAAIAAAACAAAAA"; // Still too simple.

// Properly encoded short click (placeholder for brevity in thought, implementation below will have real data or AudioContext)
// Better approach: AudioContext oscillator for a "futuristic" beep.
const playHoverSound = () => {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;

  // Use a simple immediate context for responsiveness
  const ctx = new AudioContext();

  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.connect(gain);
  gain.connect(ctx.destination);

  osc.type = 'sine';
  osc.frequency.setValueAtTime(800, ctx.currentTime);
  osc.frequency.exponentialRampToValueAtTime(1200, ctx.currentTime + 0.05);

  gain.gain.setValueAtTime(0.05, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.05);

  osc.start();
  osc.stop(ctx.currentTime + 0.05);
};


function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Theme State (Dark mode by default)
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved === 'dark' || saved === null; // Default to dark
  });

  // Persist theme preference
  useEffect(() => {
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }, [isDark]);

  const toggleTheme = () => setIsDark(!isDark);

  // Global Hover Sound Effect
  useEffect(() => {
    const handleMouseOver = (e) => {
      // Check if target is a button, link, or has button role
      const target = e.target.closest('button, a, [role="button"], input[type="submit"], input[type="button"]');

      if (target) {
        // Debounce logic or check if sound is already playing could go here, 
        // but for short beeps AudioContext is fire-and-forget.
        // We only want to play if we just entered it.
        // To avoid spamming when moving WITHIN the element, we rely on mouseover bubbling.
        // React event delegation might be cleaner but global listener captures everything including dynamic elements.
        playHoverSound();
      }
    };

    window.addEventListener('mouseover', handleMouseOver);
    return () => window.removeEventListener('mouseover', handleMouseOver);
  }, []);
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
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <Navigation
        personalInfo={personalInfo}
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      <HeroSection
        personalInfo={personalInfo}
        currentText={currentText}
        scrollToSection={scrollToSection}
        isDark={isDark}
      />
      <AboutSection isDark={isDark} />
      <EducationSection isDark={isDark} />
      <SkillsSection skills={skills} isDark={isDark} />
      <ExperienceSection experiences={experiences} isDark={isDark} />
      <ProjectsSection projects={projects} isDark={isDark} />
      <AchievementsSection isDark={isDark} />
      <ContactSection personalInfo={personalInfo} isDark={isDark} />
      <Footer personalInfo={personalInfo} isDark={isDark} />
    </>
  );
}

export default App;
