import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Code } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero-section section-container" id="about">
      {/* Subtle Background Glow */}
      <div className="hero-glow"></div>

      <div className="hero-content">
        {/* Left: Text */}
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <p className="hero-highlight">Yashaswini MN</p>
          <h1 className="hero-title">Software Developer. <br /><div style={{ padding: "5px" }}></div> <span style={{ color: 'var(--text-sec)' }}>Aspiring AI Engineer.</span></h1>
          <p className="hero-description">
            Bridging the gap between robust software architecture and intelligent systems.
            Experienced in building scalable web applications and actively transitioning into Machine Learning, predictive modeling, and AI-driven solutions.
          </p>

          <div className="hero-actions">
            <a
              href="#projects"
              className="btn-primary"
              style={{
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}
            >
              <Code size={20} />
              View Projects
            </a>
            <a href="#contact" className="btn-secondary" style={{ textDecoration: 'none' }}>
              <Mail size={18} /> Contact Me
            </a>
          </div>
        </motion.div>
        {/* Right: Profile Image with Architectural Frame */}
        <motion.div
          className="hero-image-wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
        >
          <div className="hero-image-aura"></div>

          {/* Tech Dot Grid Background */}
          <div className="tech-dots"></div>

          {/* NEW: Bottom-Right Glowing Bracket */}
          <div className="tech-corner"></div>

          <img src="/yash1.jpg" alt="Yashaswini MN" className="hero-profile-pic" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;