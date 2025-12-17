
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

const typingTexts = [
  "Full Stack Developer",
  "AI/ML Enthusiast",
  "Competitive Programmer",
  "Problem Solver"
];

function App() {
  // Move all state and data from Portfolio.jsx here
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const personalInfo = {
    name: "Bhavdeep",
    title: "Computer Science Engineering Student",
    email: "bhavdeep0609@gmail.com",
    phone: "+91-905-0470-760",
    location: "Charkhi Dadri, Haryana",
    github: "https://github.com/Bhavdeepmnit",
    linkedin: "https://www.linkedin.com/in/bhavdeep5577/",
    college: "Malaviya National Institute of Technology, Jaipur",
    roll: "2022ucp1717",
    emailOfficial: "2022ucp1717@mnit.ac.in"
  };

const skills = [
  { name: "C++", level: 90 },
  { name: "C", level: 80 },
  { name: "Python", level: 85 },
  { name: "JavaScript", level: 85 },
  { name: "HTML", level: 80 },
  { name: "CSS", level: 80 },
  { name: "React.js", level: 80 },
  { name: "Node.js", level: 80 },
  { name: "MongoDB", level: 75 },
  { name: "REST APIs", level: 75 },
  { name: "SQL", level: 70 },
  { name: "PyAutoGUI", level: 70 },
  { name: "Scikit-learn", level: 70 },
  { name: "NumPy", level: 80 },
  { name: "Pandas", level: 80 },
  { name: "OpenCV", level: 70 },
  { name: "TensorFlow", level: 65 },
  { name: "AWS", level: 65 },
  { name: "Azure", level: 60 },
  { name: "Docker", level: 60 },
  { name: "Git", level: 80 },
  { name: "GitHub", level: 80 },
  { name: "Linux", level: 70 },
  { name: "Jupyter Notebook", level: 75 },
  { name: "Google Colab", level: 75 },
  { name: "Postman", level: 70 },
  { name: "VS Code", level: 85 },
  { name: "Data Structures & Algorithms", level: 85 },
  { name: "OOP", level: 80 },
  { name: "Operating Systems", level: 70 },
  { name: "DBMS", level: 70 },
  { name: "Leadership", level: 90 },
  { name: "Problem Solving", level: 85 },
  { name: "Time Management", level: 80 },
  { name: "Communication", level: 85 }
];


  const experiences = [
    {
      title: "Machine Learning Intern",
      company: "Drivomate",
      period: "May 2025 - Present",
      description: "At Drivomate (May 2025–July 2025), I’m building an AI-powered route forecasting system for public transport optimization, which was recognized by NASSCOM under the Top 15 startups in India. I developed a time-series forecasting pipeline in Python, exposed it via Flask APIs, and integrated it with a real-time dashboard built in Next.js. I also collaborate on deployment and scaling strategies with senior engineers."
    },
    {
      title: "Software Engineering Intern",
      company: "Bluestock Fintech",
      period: "August 2024 - September 2024",
      description: "At Bluestock Fintech (Aug–Sep 2024), I led a team of five in developing a full-stack fintech platform using React, Node.js, and MongoDB. I implemented Google OAuth-based authentication, built secure RESTful APIs, and optimized backend performance—reducing API response times by 25%. This role enhanced my leadership, full-stack development, and agile collaboration skills through mentorship and product-driven decision-making."
    },
    {
      title: "Advisor to VP",
      company: "Science & Technology Society, MNIT",
      period: "2023 - Present",
      description: "Led the organization of Rajasthan’s largest techno-management fest, contributing to event planning, marketing strategy, and on-ground execution. Collaborated across teams to drive outreach, sponsorship, and seamless event coordination."
    }
  ];

  const projects = [
    {
      title: "Hand Gesture Virtual Mouse",
      description: "Real-time gesture recognition system using Python, MediaPipe, and OpenCV. Trained SVM model achieving 92% accuracy with PyAutoGUI integration for cursor control and Kalman filtering for stability.",
      technologies: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI", "SVM", "NumPy"],
      github: "https://github.com/Bhavdeepmnit/Virtual_mouse",
      demo: "https://github.com/Bhavdeepmnit/Virtual_mouse"
    },
    {
      title: "Personal Budget Tracker System",
      description: "Full-stack finance tracker built with MERN stack as part of 3-member team. Features secure JWT authentication, responsive dashboards, and real-time expense tracking with dynamic charts.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "Tailwind CSS"],
      github: "https://github.com/Bhavdeepmnit/Budget-Tracker",
      demo: "https://github.com/Bhavdeepmnit/Budget-Tracker"
    },
    {
      title: "OTT Platform for Video Streaming",
      description: "Full-stack streaming platform with user registration and video browsing features. Built using Django with normalized MySQL schema for handling user accounts, content management, and payment tracking.",
      technologies: ["Django", "HTML", "CSS", "MySQL", "JavaScript","python"],
      github: "https://github.com/Bhavdeepmnit/OTT-website",
      demo: "https://github.com/Bhavdeepmnit/OTT-website"
    }
  ];

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
