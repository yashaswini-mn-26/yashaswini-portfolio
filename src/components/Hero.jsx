import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import './Hero.css';

const stats = [
  { value: '10+', label: 'Projects Shipped' },
  { value: '9.2', label: 'CGPA' },
  { value: '97.3%', label: 'ML Accuracy' },
  { value: '1+', label: 'Years Exp.' },
];

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let w, h, particles;

    const resize = () => {
      w = canvas.width = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = Array.from({ length: 60 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: Math.random() * 1.2 + 0.3,
        alpha: Math.random() * 0.4 + 0.1,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#4f8ef7';

      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = w;
        if (p.x > w) p.x = 0;
        if (p.y < 0) p.y = h;
        if (p.y > h) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = accent;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      });

      // Draw connecting lines
      ctx.globalAlpha = 1;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = accent;
            ctx.globalAlpha = (1 - dist / 100) * 0.06;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(draw);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    draw();

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08, delayChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="hero" id="about">
      {/* Canvas background */}
      <canvas ref={canvasRef} className="hero__canvas" />

      {/* Gradient orbs */}
      <div className="hero__orb hero__orb--1" />
      <div className="hero__orb hero__orb--2" />

      <div className="hero__container">
        <motion.div className="hero__content" variants={container} initial="hidden" animate="visible">

          {/* Status badge */}
          <motion.div variants={item} className="hero__badge">
            <span className="hero__badge-dot" />
            Available for opportunities
          </motion.div>

          {/* Name */}
          <motion.p variants={item} className="hero__name">Yashaswini MN</motion.p>

          {/* Title */}
          <motion.h1 variants={item} className="hero__title">
            Full Stack Developer<br />
            <span className="hero__title-accent">& Aspiring AI Engineer</span>
          </motion.h1>

          {/* Description */}
          <motion.p variants={item} className="hero__desc">
            Building scalable web applications and intelligent systems.
            1+ year shipping production-grade solutions with React, Django, and ML at{' '}
            <a href="https://www.thoughtprocess.co.in/" target="_blank" rel="noopener noreferrer" className="hero__company-link">
              Thought Process Systems
              <ExternalLink size={12} />
            </a>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="hero__ctas">
            <a href="#projects" className="btn-primary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              View Work <ArrowRight size={16} />
            </a>
            <a href="#contact" className="btn-secondary" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Get in Touch
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="hero__socials">
            {[
              { icon: <Github size={18} />, href: 'https://github.com/yashaswini-mn-26', label: 'GitHub' },
              { icon: <Linkedin size={18} />, href: 'https://www.linkedin.com/in/yashaswini-m-n/', label: 'LinkedIn' },
              { icon: <Mail size={18} />, href: 'mailto:yashaswinimn26@gmail.com', label: 'Email' },
            ].map(({ icon, href, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label={label}>
                {icon}
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: Image + Stats */}
        <div className="hero__visual">
          {/* Profile image */}
          <motion.div
            className="hero__image-frame"
            initial={{ opacity: 0, scale: 0.9, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="hero__image-bg" />
            <img src="/yash1.jpg" alt="Yashaswini MN" className="hero__image" />
            {/* Decorative corner marks */}
            <div className="hero__corner hero__corner--tl" />
            <div className="hero__corner hero__corner--br" />
          </motion.div>

          {/* Stats grid */}
          <motion.div
            className="hero__stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {stats.map(({ value, label }) => (
              <div key={label} className="hero__stat">
                <span className="hero__stat-value">{value}</span>
                <span className="hero__stat-label">{label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="hero__scroll-line" />
        <span>scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;