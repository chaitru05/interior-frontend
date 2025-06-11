import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Services.css';

const servicesData = [
  {
    id: 1,
    title: 'Interior Design',
    description: 'Comprehensive interior design services tailored to your style and needs, creating spaces that are both beautiful and functional.',
    icon: '🏠',
  },
  {
    id: 2,
    title: 'Space Planning',
    description: 'Strategic space planning to optimize flow and functionality, making the most of every square foot in your home or business.',
    icon: '📐',
  },
  {
    id: 3,
    title: 'Custom Furniture',
    description: 'Bespoke furniture design and creation to perfectly fit your space and reflect your personal style and preferences.',
    icon: '🪑',
  },
  {
    id: 4,
    title: 'Renovation Management',
    description: 'End-to-end renovation management, coordinating contractors and ensuring your project is completed on time and within budget.',
    icon: '🏗️',
  },
  {
    id: 5,
    title: 'Plumbing',
    description: 'We offer complete plumbing solutions for residential, commercial, and industrial projects — ensuring safe, efficient, and long-lasting systems.',
    icon: '🎨',
  },
  {
    id: 6,
    title: 'Lighting Design',
    description: 'Specialized lighting design to enhance your space\'s atmosphere, functionality, and energy efficiency.',
    icon: '💡',
  }
];

const Services: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="services" className="services">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Our <span className="text-accent">Services</span></h2>
        </motion.div>
        
        <motion.div
          className="services-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>
            We offer a comprehensive range of interior design services to transform your space into something extraordinary. 
            From concept to completion, our team is committed to delivering exceptional results that exceed your expectations.
          </p>
        </motion.div>
        
        <motion.div
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {servicesData.map(service => (
            <motion.div
              className="service-card"
              key={service.id}
              variants={itemVariants}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="services-cta"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="cta-content">
            <h3>Ready to transform your space?</h3>
            <p>Schedule a consultation with our design team to discuss your project.</p>
          </div>
          <a href="#contact" className="btn">Get Started</a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;