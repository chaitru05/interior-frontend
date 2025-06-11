import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/About.css';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, delay: 0.3 }
    },
  };

  return (
    <section id="about" className="about">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <h2 className='about-h2'>About <span className="text-accent">Us</span></h2>
        </motion.div>
        
        <div className="about-content">
          <motion.div
            className="about-image"
            variants={imageVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <img src='https://images.pexels.com/photos/1099816/pexels-photo-1099816.jpeg' alt="Interior Designer" />
            <div className="about-experience">
              <span className="years">14+</span>
              <span className="text">Years of Experience</span>
            </div>
          </motion.div>
          
          <motion.div
            className="about-text"
            variants={textVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <motion.h3 variants={itemVariants}>
              Creating Extraordinary Spaces <br />That Elevate Your Lifestyle
            </motion.h3>
            
            <motion.p variants={itemVariants}>
              Pratham Contruction was founded with a simple yet powerful vision: to transform ordinary spaces into extraordinary experiences. With over 15 years of experience in the industry, our team of passionate designers and craftsmen work tirelessly to bring your vision to life.
            </motion.p>
            
            <motion.p variants={itemVariants}>
              We believe that great design is about more than just aesthetics – it's about creating spaces that enhance your life, reflect your personality, and stand the test of time. Our approach is collaborative, innovative, and detail-oriented, ensuring that every project exceeds expectations.
            </motion.p>
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;