import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import emailjs from '@emailjs/browser';
import '../styles/Contact.css';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    error: false,
    message: ''
  });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        'service_2bqhdrc',     // 🔁 Replace with your EmailJS service ID
        'template_4qpcpkz',    // 🔁 Replace with your EmailJS template ID
        formRef.current,
        'IsauB57Q0iMcw0B0C'      // 🔁 Replace with your EmailJS public key
      )
      .then(() => {
        setFormStatus({
          submitted: true,
          error: false,
          message: 'Thank you for your message! We will get back to you soon.'
        });

        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });

        setTimeout(() => {
          setFormStatus({ submitted: false, error: false, message: '' });
        }, 5000);
      })
      .catch(() => {
        setFormStatus({
          submitted: true,
          error: true,
          message: 'Something went wrong. Please try again later.'
        });
      });
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section id="contact" className="contact">
      <div className="container" ref={ref}>
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <h2>Get In <span className="text-accent">Touch</span></h2>
        </motion.div>

        <div className="contact-content">
          <motion.div
            className="contact-info"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <h3>Let's discuss your project</h3>
            <p>We'd love to hear about your interior design needs. Fill out the form and our team will get back to you within 24 hours.</p>

            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div className="contact-text">
                  <h4>Our Office</h4>
                  <p>Plot no.187, Balaji Krupa, Gandhi Nagar, Nr. Reshabh dairy, Dombivli (East), 421201.</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div className="contact-text">
                  <h4>Phone</h4>
                  <p>9867423321</p>
                  <p>7304996650</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <div className="contact-text">
                  <h4>Email</h4>
                  <p>prathamconstruction01@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="contact-form-container"
            variants={fadeInUp}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            transition={{ delay: 0.3 }}
          >
            {formStatus.submitted ? (
              <div className={`form-message ${formStatus.error ? 'error' : 'success'}`}>
                {formStatus.message}
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Your Phone"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="" disabled>Select Service</option>
                    <option value="Interior Design">Interior Design</option>
                    <option value="Space Planning">Exterior Design</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="btn btn-dark">Send Message</button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1755.340731538009!2d73.09146833630982!3d19.204339697416952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be79586c290c4e9%3A0xd1023fc03ceabb4d!2s187%2C%20Star%20Colony%2C%20P%20and%20T%20Colony%2C%20Gandhi%20Nagar%2C%20Kalyan%20Dombivali%2C%20Dombivli%2C%20Maharashtra%20421201!5e0!3m2!1sen!2sin!4v1748430803183!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;