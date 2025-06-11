import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Projects.css';
import { Link } from 'react-router-dom';

// Project data
const projectData = [
  {
    id: 1,
    title: 'Modern Apartment Renovation',
    category: 'commercial',
    image: '/images/project6.jpg',
    description: 'Complete renovation of a 1,500 sq ft apartment with modern minimalist design.'
  },
  {
    id: 2,
    title: 'Luxury Restaurant Design',
    category: 'commercial',
    image: '/images/interior2.jpg',
    description: 'High-end restaurant interior featuring custom furniture and elegant lighting.'
  },
  {
    id: 3,
    title: 'Contemporary Office Space',
    category: 'commercial',
    image: '/images/interior3.jpg',
    description: 'Modern office design promoting collaboration and productivity.'
  },
  
  {
    id: 4,
    title: 'Boutique Hotel Lobby',
    category: 'hospitality',
    image: '/images/exterior2.jpg',
    description: 'Striking hotel lobby design with custom art pieces and bespoke furniture.'
  },
    {
    id: 5,
    title: 'Boutique Hotel Lobby',
    category: 'hospitality',
    image: '/images/exterior1.jpg',
    description: 'Striking hotel lobby design with custom art pieces and bespoke furniture.'
  },

];

const Projects: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = filter === 'all' 
    ? projectData 
    : projectData.filter(project => project.category === filter);

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
    <section id="projects" className="projects bg-light">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Our <span className="text-accent">Projects</span></h2>
        </motion.div>
        
        <motion.div
          className="projects-filter"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <button
            className={filter === 'all' ? 'active' : ''}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button
            className={filter === 'commercial' ? 'active' : ''}
            onClick={() => setFilter('commercial')}
          >
            Interior
          </button>
          <button
            className={filter === 'hospitality' ? 'active' : ''}
            onClick={() => setFilter('hospitality')}
          >
            Exterior
          </button>
        </motion.div>
        
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {filteredProjects.map(project => (
            <motion.div
              className="project-item"
              key={project.id}
              variants={itemVariants}
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
                <div className="project-overlay">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href="#" className="project-link">View Details</a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="projects-button"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
         <Link to="/gallery" className="btn">View All Projects</Link>

        </motion.div>
      </div>
    </section>
  );
};

export default Projects;