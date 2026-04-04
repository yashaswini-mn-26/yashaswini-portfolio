import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Menu, X, Download } from 'lucide-react';
import './Navbar.css';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    navLinks.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const smoothScroll = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.querySelector(id);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      className={`navbar ${scrolled || mobileOpen ? 'navbar--scrolled' : ''}`}
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="navbar__inner">
        {/* Logo */}
        <a
          href="#about"
          className="navbar__logo"
          onClick={(e) => smoothScroll(e, '#about')}
        >
          <span className="navbar__logo-yn">YN</span>
          <span className="navbar__logo-dot">.</span>
        </a>

        {/* Desktop Links */}
        <nav className="navbar__links">
          {navLinks.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className={`navbar__link ${activeSection === href.slice(1) ? 'navbar__link--active' : ''}`}
              onClick={(e) => smoothScroll(e, href)}
            >
              {name}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="navbar__actions">
          <button onClick={toggleTheme} className="navbar__icon-btn" aria-label="Toggle theme">
            <AnimatePresence mode="wait">
              <motion.div
                key={theme}
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 30, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
              </motion.div>
            </AnimatePresence>
          </button>
          <a href="/YashaswiniMN.pdf" target="_blank" className="navbar__resume-btn">
            <Download size={14} />
            Resume
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="navbar__mobile-btn"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait">
            <motion.div key={mobileOpen ? 'x' : 'menu'} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}>
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </motion.div>
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100dvh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="navbar__mobile-inner">
              {navLinks.map(({ name, href }, i) => (
                <motion.a
                  key={name}
                  href={href}
                  className="navbar__mobile-link"
                  onClick={(e) => smoothScroll(e, href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className="navbar__mobile-num">0{i + 1}</span>
                  {name}
                </motion.a>
              ))}
              <motion.div
                className="navbar__mobile-actions"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.3 }}
              >
                <button onClick={toggleTheme} className="btn-secondary" style={{ width: '100%', justifyContent: 'center' }}>
                  {theme === 'dark' ? <><Sun size={16} /> Light Mode</> : <><Moon size={16} /> Dark Mode</>}
                </button>
                <a href="/YashaswiniMN.pdf" target="_blank" className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  <Download size={16} /> Download Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;