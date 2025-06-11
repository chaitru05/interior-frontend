import React from 'react';
import '../styles/Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-column">
            <div className="footer-logo">
              Elegance<span className="text-accent">.</span>
            </div>
            <p>
              Creating beautiful, functional spaces that inspire and elevate your everyday life. Our passion is transforming your vision into reality.
            </p>
            <div className="footer-social">
              <a href="https://www.instagram.com/_prathamconstruction01?igsh=bmRtbnc2MGNpeWY0" aria-label="Instagram">IG</a>
             
            </div>
          </div>
          
          <div className="footer-column">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#profile">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><a href="#services">Interior Design</a></li>
              <li><a href="#services">Space Planning</a></li>
              <li><a href="#services">Custom Furniture</a></li>
              <li><a href="#services">Renovation</a></li>
              <li><a href="#services">Color Consultation</a></li>
              <li><a href="#services">Lighting Design</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Contact Info</h4>
            <div className="footer-contact">
              <p><strong>Address:</strong>Plot no.187, Balaji Krupa, Gandhi Nagar, Nr. Reshabh dairy, Dombivli (East), 421201. </p>
              <p><strong>Phone:</strong> +91 9867423321</p>
              <p><strong>Email:</strong> prathamconstruction01@gmail.com</p>
              
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Pratham Construction. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;