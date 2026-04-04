import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Phone, Download, Heart, Send, MapPin } from 'lucide-react';
import { SiKaggle, SiLeetcode } from 'react-icons/si';
import './Contact.css';

const socialLinks = [
  { icon: <Mail size={18} />, label: 'Email', value: 'yashaswinimn26@gmail.com', href: 'mailto:yashaswinimn26@gmail.com' },
  { icon: <Phone size={18} />, label: 'Phone', value: '+91 9353191699', href: 'tel:+919353191699' },
  { icon: <Linkedin size={18} />, label: 'LinkedIn', value: 'yashaswini-m-n', href: 'https://www.linkedin.com/in/yashaswini-m-n/' },
  { icon: <Github size={18} />, label: 'GitHub', value: 'yashaswini-mn', href: 'https://github.com/yashaswini-mn/' },
  { icon: <SiLeetcode size={18} />, label: 'LeetCode', value: 'Yashaswini-m-n', href: 'https://leetcode.com/u/Yashaswini-m-n/' },
  { icon: <SiKaggle size={18} />, label: 'Kaggle', value: 'yashaswinimn', href: 'https://www.kaggle.com/yashaswinimn' },
];

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', phone: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'sending' | 'success' | 'error'

  const handleChange = (e) => setFormState(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    const data = new FormData(e.target);
    data.append('access_key', 'e51d4d71-e643-4b55-a1db-088b1d5d1aab');
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
      const json = await res.json();
      setStatus(json.success ? 'success' : 'error');
      if (json.success) { setFormState({ name: '', email: '', subject: '', phone: '', message: '' }); }
    } catch {
      setStatus('error');
    }
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <>
      <section className="contact-section section-container" id="contact">
        <div className="section-label">Let's Talk</div>
        <h2 className="section-heading">Get in Touch</h2>
        <p className="section-subheading">
          Open to full-time roles, freelance projects, and collaboration. Reach out and I'll get back to you within 24 hours.
        </p>

        <div className="contact-grid">
          {/* Left Column */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="contact-info__location">
              <MapPin size={14} />
              Bengaluru, Karnataka, India
            </div>

            <div className="contact-info__status">
              <span className="contact-info__dot" />
              Available for new opportunities
            </div>

            <div className="contact-links">
              {socialLinks.map(({ icon, label, value, href }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <div className="contact-link__icon">{icon}</div>
                  <div className="contact-link__text">
                    <span className="contact-link__label">{label}</span>
                    <span className="contact-link__value">{value}</span>
                  </div>
                </a>
              ))}
            </div>

            <a href="/YashaswiniMN.pdf" target="_blank" className="btn-primary contact-resume-btn">
              <Download size={16} /> Download Resume
            </a>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="form-row">
              <div className="form-field">
                <label htmlFor="name">Name</label>
                <input
                  id="name" name="name" type="text"
                  placeholder="Jane Smith"
                  value={formState.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-field">
                <label htmlFor="email">Email</label>
                <input
                  id="email" name="email" type="email"
                  placeholder="jane@company.com"
                  value={formState.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject" name="subject" type="text"
                placeholder="Job opportunity / Project collaboration"
                value={formState.subject}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Contact No.</label>
              <input
                id="phone" name="phone" type="text"
                placeholder="+91 xxxxxxxxxx"
                value={formState.phone}
                onChange={handleChange}
              />
            </div>

            <div className="form-field">
              <label htmlFor="message">Message</label>
              <textarea
                id="message" name="message" rows={5}
                placeholder="Tell me about your project or opportunity..."
                value={formState.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn-primary form-submit" disabled={status === 'sending'}>
              {status === 'sending' ? (
                <span className="form-spinner" />
              ) : (
                <><Send size={15} /> Send Message</>
              )}
            </button>

            {status === 'success' && (
              <motion.p
                className="form-status form-status--success"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              >
                Message sent! I'll reply within 24 hours.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                className="form-status form-status--error"
                initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
              >
                Something went wrong. Email me directly at yashaswinimn26@gmail.com
              </motion.p>
            )}
          </motion.form>
        </div>
      </section>

{/* Footer */}
<footer className="site-footer">
  <div className="footer-inner">
    
    {/* Brand */}
    <div className="footer-brand">
      <span className="footer-logo">
        Yashaswini<span style={{ color: "#4f8ef7" }}>.</span>
      </span>
      <span className="footer-role">
        Full Stack Developer & AI Engineer
      </span>
    </div>

    {/* Social Links */}
    <div className="footer-socials">
      {[
        { icon: <Github size={17} />, href: 'https://github.com/yashaswini-mn/', label: 'GitHub' },
        { icon: <Linkedin size={17} />, href: 'https://www.linkedin.com/in/yashaswini-m-n/', label: 'LinkedIn' },
        { icon: <SiKaggle size={17} />, href: 'https://www.kaggle.com/yashaswinimn', label: 'Kaggle' },
        { icon: <SiLeetcode size={17} />, href: 'https://leetcode.com/u/Yashaswini-m-n/', label: 'LeetCode' },
        { icon: <Mail size={17} />, href: 'mailto:yashaswinimn26@gmail.com', label: 'Email' },
      ].map(({ icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="footer-social"
        >
          {icon}
        </a>
      ))}
    </div>
  </div>

  {/* Bottom */}
  <div className="footer-copy">
    <p>© {new Date().getFullYear()} Yashaswini MN · All rights reserved</p>
    <p className="footer-made">
      Made with{" "}
      <Heart size={12} fill="var(--accent)" color="var(--accent)" /> by Yashaswini
    </p>
  </div>
</footer>
    </>
  );
};

export default Contact;