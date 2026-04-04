import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink, TrendingUp } from 'lucide-react';
import './Education.css';

const education = [
  {
    degree: 'B.E. – Computer Science & Engineering',
    institution: 'Mysuru Royal Institute of Technology',
    location: 'Mandya, Karnataka',
    period: '2021 – 2025',
    score: '9.2 / 10',
    scoreLabel: 'CGPA',
    highlight: true,
  },
  {
    degree: 'Pre-University (PCMB)',
    institution: 'Abhinava Bharathi Composite PU College',
    location: 'Karnataka',
    period: '2020 – 2021',
    score: '97.8%',
    scoreLabel: 'Score',
    highlight: false,
  },
  {
    degree: 'Secondary School (SSLC)',
    institution: 'Sri Venkateshwara Vidyanikethana High School',
    location: 'Karnataka',
    period: '2018 – 2019',
    score: '94.4%',
    scoreLabel: 'Score',
    highlight: false,
  },
];

const certifications = [
  {
    title: 'Java & Java EE Internship',
    issuer: 'QSpiders (Java, J2EE, JDBC, Servlets, JSP)',
    url: 'https://drive.google.com/file/d/1Ug7earbVEyobjA6ihZIZE2WX2UCscoAF/view?usp=drivesdk',
  },
  {
    title: 'Python & Django Internship',
    issuer: 'SkillBout (Python, Django, REST APIs, SQL)',
    url: 'https://drive.google.com/file/d/1l91-Tagj82i0bkHA9OmgHNilIMWcVPcw/view?usp=drivesdk',
  },
  {
    title: 'Azure & AI Training',
    issuer: 'Microsoft Training Program (Infosys ICT Academy)',
    url: 'https://drive.google.com/file/d/1H9UBiKv3Vm1w-z34H6OBQiWnnKPkoFmI/view?usp=drivesdk',
  },
  {
    title: 'IEEE Udbhav Project Expo',
    issuer: 'Technical Project Presentation Award',
    url: 'https://drive.google.com/file/d/1AbpHnBL2EiQfZ-EZNNhlWwz18CLZN4w4/view?usp=drivesdk',
  },
  {
    title: 'Blink Foundation (Intel Sponsored)',
    issuer: 'Tech Learning Contribution',
    url: 'https://drive.google.com/file/d/1sPDvc9GJ--cN406MPAbK4rr-BgCqAmLR/view?usp=drivesdk',
  },
];

const Education = () => (
  <section className="education-section section-container" id="education">
    <div className="section-label">Background</div>
    <h2 className="section-heading">Education & Certifications</h2>

    <div className="edu-grid">
      {/* Education */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="edu-col-header">
          <BookOpen size={18} />
          Academic Background
        </div>

        <div className="edu-cards">
          {education.map((item, i) => (
            <div key={i} className={`edu-card ${item.highlight ? 'edu-card--featured' : ''}`}>
              <div className="edu-card__left">
                <div className="edu-card__track" />
                <div className="edu-card__body">
                  <h4 className="edu-card__degree">{item.degree}</h4>
                  <p className="edu-card__inst">{item.institution}</p>
                  <p className="edu-card__period">{item.period} · {item.location}</p>
                </div>
              </div>
              <div className="edu-card__score">
                <TrendingUp size={12} />
                <span>{item.score}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Certifications */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="edu-col-header">
          <Award size={18} />
          Certifications
        </div>

        <div className="cert-cards">
          {certifications.map((cert, i) => (
            <a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card"
            >
              <div className="cert-card__dot" />
              <div className="cert-card__content">
                <p className="cert-card__title">{cert.title}</p>
                <p className="cert-card__issuer">{cert.issuer}</p>
              </div>
              <ExternalLink size={13} className="cert-card__icon" />
            </a>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

export default Education;