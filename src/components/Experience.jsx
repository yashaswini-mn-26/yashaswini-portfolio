import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import './Experience.css';

const experiences = [
  {
    id: 1,
    role: 'Software Developer',
    company: 'Thought Process Systems LLP',
    companyUrl: 'https://www.thoughtprocess.co.in/',
    period: 'Apr 2025 – Present',
    location: 'Bengaluru, Karnataka',
    type: 'Full-time',
    active: true,
    icon: <Briefcase size={16} />,
    highlights: [
      'Migrated 50+ VB.NET pages to a scalable React.js + Django architecture, improving system performance and maintainability.',
      'Developed 150+ REST APIs using Django REST Framework, enabling high-performance backend services across core systems.',
      'Optimized SQL Server queries via Django ORM and built Docker-based CI/CD pipelines with Jenkins.',
      'Developed an AI-powered Story Analyzer using NLP for grammar correction, AI detection, and regional English adaptation.',
      'Built and deployed 3 production-grade web apps using React.js and Tailwind CSS.',
    ],
    tech: ['React.js', 'Django', 'SQL Server', 'Docker', 'Jenkins', 'REST APIs'],
  },
  {
    id: 2,
    role: 'UI/UX & Web Development Intern',
    company: 'Thought Process Systems LLP',
    companyUrl: 'https://www.thoughtprocess.co.in/',
    period: 'Apr 2025 – Jun 2025',
    location: 'Bengaluru, Karnataka',
    type: 'Internship',
    active: false,
    icon: <Briefcase size={16} />,
    highlights: [
      'Designed and delivered 3 responsive, production-ready websites using React, HTML, CSS, JavaScript, Bootstrap, and Tailwind.',
      'Created UI/UX wireframes and prototypes in Figma and integrated analytics tools (Hotjar, Microsoft Clarity, Segment Pixel, GTM).',
    ],
    tech: ['React.js', 'Figma', 'Tailwind CSS', 'Hotjar', 'GTM'],
  },
  {
    id: 3,
    role: 'Microsoft Azure Trainee',
    company: 'Microsoft Training Program (Infosys ICT Academy)',
    companyUrl: '#',
    period: 'Sep 2024 – Oct 2024',
    location: 'Mysuru, Karnataka',
    type: 'Training',
    active: false,
    icon: <GraduationCap size={16} />,
    highlights: [
      'Gained hands-on experience with Microsoft Azure (Compute, Storage, Databases) and built AI-powered prototypes using Azure AI & Cognitive Services.',
      'Strengthened cloud computing, DevOps, and modern deployment workflow fundamentals through practical implementation.',
    ],
    tech: ['Azure', 'Azure AI', 'Cognitive Services', 'DevOps'],
  },
  {
    id: 4,
    role: 'Java Development Intern',
    company: 'QSpiders CampusConnect',
    companyUrl: '#',
    period: 'Aug 2023 – Oct 2023',
    location: 'Mysuru, Karnataka',
    type: 'Internship',
    active: false,
    icon: <Briefcase size={16} />,
    highlights: [
      'Strengthened Core Java fundamentals including OOP, Exception Handling, and Collections while building Java EE applications.',
      'Built CRUD applications with Servlets, JSP, and JDBC with MySQL database integration.',
    ],
    tech: ['Java', 'JSP', 'Servlets', 'JDBC', 'MySQL'],
  },
];

const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="experience-section section-container" id="experience">
      <div className="section-label">Career</div>
      <h2 className="section-heading">Professional Experience</h2>
      <p className="section-subheading">
        Building real products in production environments, shipping features used by real users.
      </p>

      <div className="exp-timeline" ref={containerRef}>
        {/* Track */}
        <div className="exp-track">
          <div className="exp-track__bg" />
          <motion.div className="exp-track__fill" style={{ scaleY }} />
        </div>

        <div className="exp-items">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.id}
              className="exp-item"
              initial={{ opacity: 0, x: 32 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Node */}
              <div className={`exp-node ${exp.active ? 'exp-node--active' : ''}`}>
                {exp.icon}
              </div>

              {/* Card */}
              <div className="exp-card">
                <div className="exp-card__header">
                  <div className="exp-card__left">
                    <div className="exp-card__title-row">
                      <h3 className="exp-card__role">{exp.role}</h3>
                      {exp.active && <span className="exp-badge exp-badge--active">Current</span>}
                      <span className={`exp-badge exp-badge--type`}>{exp.type}</span>
                    </div>
                    <a
                      href={exp.companyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="exp-card__company"
                    >
                      {exp.company}
                      {exp.companyUrl !== '#' && <ArrowUpRight size={13} />}
                    </a>
                  </div>

                  <div className="exp-card__meta">
                    <span className="exp-card__meta-item">
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span className="exp-card__meta-item">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>
                </div>

                <ul className="exp-card__highlights">
                  {exp.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>

                <div className="exp-card__tech">
                  {exp.tech.map(t => (
                    <span key={t} className="mono-tag">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;