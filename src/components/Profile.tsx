import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import '../styles/Profile.css';

// Team data
const teamMembers = [
  {
    id: 1,
    name: 'Anil L. Sonar',
    role: 'Contractor',
    image: '/images/profile1.jpg',
    bio: 'With over 14 years of experience in the construction industry, Mr. Anil Sonar has established himself as a trusted and skilled civil contractor. His expertise spans across residential, commercial, and industrial projects, with a focus on structural work, RCC frameworks, brick masonry, plastering, and complete site execution.'
  },
  {
    id: 2,
    name: 'Pratham A. Sonar',
    role: 'Architect',
    image: '/images/profile2.jpg',
    bio: 'Ar. Pratham Sonar is an emerging architectural designer with a passion for creating spaces that blend functionality, user experience, and contextual sensitivity. With a design philosophy rooted in spatial storytelling and human interaction, his work often explores the relationship between built form and nature, emphasizing courtyards, transitions, material honesty, and user comfort.'
  },
  
];

const Profile: React.FC = () => {
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
    <section id="profile" className="profile bg-light">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Meet Our <span className="text-accent">Team</span></h2>
        </motion.div>
        
        <motion.div
          className="profile-intro"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <p>
            We are team of designers, architects, and project managers work collaboratively to bring your vision to life.
            With diverse expertise and a shared passion for exceptional design, we're committed to creating spaces that inspire.
          </p>
        </motion.div>
        
        <motion.div
          className="team-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {teamMembers.map(member => (
            <motion.div
              className="team-member"
              key={member.id}
              variants={itemVariants}
            >
              <div className="member-image">
                <img src={member.image} alt={member.name} />
                <div className="member-overlay">
                  <div className="member-social">
                    <a href="#" aria-label="LinkedIn"><span>in</span></a>
                    <a href="#" aria-label="Instagram"><span>ig</span></a>
                    <a href="#" aria-label="Twitter"><span>tw</span></a>
                  </div>
                </div>
              </div>
              <div className="member-info">
                <h3>{member.name}</h3>
                <p className="member-role">{member.role}</p>
                <p className="member-bio">{member.bio}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          className="profile-stats"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="stat-item">
            <span className="stat-number">14+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">30+</span>
            <span className="stat-label">Projects Completed</span>
          </div>
          
          <div className="stat-item">
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Profile;