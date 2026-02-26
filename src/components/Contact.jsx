import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Code, Instagram, Phone, Heart } from 'lucide-react';
import { SiKaggle, SiLeetcode } from "react-icons/si";
import './Contact.css';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' or 'error'

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const formData = new FormData(event.target);
    
    // REPLACE THIS string with your actual Web3Forms access key
    formData.append("access_key", "50e69df4-e993-4764-86fd-467d45150f63"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        event.target.reset(); // Clears the form inputs
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Clear the status message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <>
      <section className="contact-section section-container" id="contact">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <div className="title-underline"></div>
        </div>

        <div className="contact-wrapper">
          {/* Left: Info & CTA */}
          <div className="contact-info">
            <h3 className="contact-heading">Ready to build something scalable?</h3>
            <p className="contact-desc">
              I am currently open to new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="contact-links-grid">
              <a href="mailto:yashaswinimn26@gmail.com" className="contact-link-item">
                <div className="contact-icon"><Mail size={20} /></div>
                <span>yashaswinimn26@gmail.com</span>
              </a>
              <a href="tel:9353191699" className="contact-link-item">
                <div className="contact-icon"><Phone size={20} /></div>
                <span>+91 9353191699</span>
              </a>
              <a href="https://www.linkedin.com/in/yashaswini-m-n/" className="contact-link-item" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon"><Linkedin size={20} /></div>
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/yashaswini-mn/" className="contact-link-item" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon"><Github size={20} /></div>
                <span>GitHub</span>
              </a>
              <a href="https://leetcode.com/u/Yashaswini-m-n/" className="contact-link-item" target="_blank" rel="noopener noreferrer">
                <div className="contact-icon"><SiLeetcode size={20} /></div>
                <span>LeetCode</span>
              </a>
            </div>
          </div>

          {/* Right: The Form */}
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onSubmit={onSubmit}
          >
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" placeholder="John Doe" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" placeholder="john@company.com" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required></textarea>
            </div>

            <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            {/* Status Messages */}
            {submitStatus === 'success' && (
              <p style={{ color: 'var(--highlight)', marginTop: '15px', textAlign: 'center', fontSize: '0.9rem' }}>
                Message sent successfully! I'll get back to you soon.
              </p>
            )}
            {submitStatus === 'error' && (
              <p style={{ color: '#ef4444', marginTop: '15px', textAlign: 'center', fontSize: '0.9rem' }}>
                Something went wrong. Please try emailing me directly.
              </p>
            )}
          </motion.form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-content">
          <div className="footer-brand">
            <span className="footer-name">Yashaswini MN</span>
            <span className="footer-role">Software Developer</span>
          </div>

          <div className="footer-socials">
            <a href="https://github.com/yashaswini-mn/" aria-label="GitHub" className="contact-link-item" target="_blank" rel="noopener noreferrer"><Github size={20} /></a>
            <a href="https://www.linkedin.com/in/yashaswini-m-n/" aria-label="LinkedIn" className="contact-link-item" target="_blank" rel="noopener noreferrer"><Linkedin size={20} /></a>
            <a href="https://www.kaggle.com/yashaswinimn" aria-label="Kaggle" className="contact-link-item" target="_blank" rel="noopener noreferrer"><SiKaggle size={35} /></a>
            <a href="https://leetcode.com/u/Yashaswini-m-n/" aria-label="LeetCode" className="contact-link-item" target="_blank" rel="noopener noreferrer"><SiLeetcode size={20} /></a>
            <a href="https://www.instagram.com/_.yashaswiniiiii._/" aria-label="Instagram" className="contact-link-item" target="_blank" rel="noopener noreferrer"><Instagram size={20} /></a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Yashaswini MN | All rights reserved</p>
          <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px' }}>
            Developed with <Heart size={14} color="var(--accent)" fill="var(--accent)" /> by Yashaswini
          </p>
        </div>
      </footer>
    </>
  );
};

export default Contact;