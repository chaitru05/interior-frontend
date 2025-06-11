import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import '../styles/Hero.css';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const scrollPosition = window.scrollY;
      const heroElement = heroRef.current;
      const parallaxBg = heroElement.querySelector('.hero-parallax-bg') as HTMLElement;
      
      if (parallaxBg) {
        // Parallax effect - background moves slower than scroll
        parallaxBg.style.transform = `translateY(${scrollPosition * 0.4}px)`;
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-parallax-bg"></div>
      <div className="hero-content">
        <motion.div 
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Elegance Interiors
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Transforming Spaces<br />Into <span className="text-accent">Experiences</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
          >
            We design spaces that tell your story and inspire your everyday life.
          </motion.p>
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.3 }}
          >
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-dark">Get In Touch</a>
          </motion.div>
        </motion.div>
      </div>
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;