
import Navigation from '@/components/Navigation';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Certificates from '@/components/sections/Certificates';
import Profile from '@/components/sections/Profile';
import Publications from '@/components/sections/Publications';
import Footer from '@/components/Footer';
import { useEffect, useRef } from 'react';

const Index = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorBlurRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';

    // Intersection Observer for sections
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    // Observe all sections
    document.querySelectorAll('[data-section]').forEach((section) => {
      observer.observe(section);
    });

    // Custom cursor movement
    const moveCursor = (e: MouseEvent) => {
      if (cursorRef.current && cursorBlurRef.current) {
        cursorRef.current.style.left = e.clientX + 'px';
        cursorRef.current.style.top = e.clientY + 'px';
        cursorBlurRef.current.style.left = e.clientX + 'px';
        cursorBlurRef.current.style.top = e.clientY + 'px';
      }
    };

    window.addEventListener('mousemove', moveCursor);

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
      window.removeEventListener('mousemove', moveCursor);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-background-dark">
      <Navigation />
      <div data-section="hero">
        <Hero />
      </div>
      <div data-section="skills">
        <Skills />
      </div>
      <div data-section="projects">
        <Projects />
      </div>
      <div data-section="certificates">
        <Certificates />
      </div>
      <div data-section="profile">
        <Profile />
      </div>
      <div data-section="publications">
        <Publications />
      </div>
      <div data-section="footer">
        <Footer />
      </div>
      <div id="custom-cursor" ref={cursorRef} />
      <div id="cursor-blur" ref={cursorBlurRef} />
    </div>
  );
};

export default Index;
