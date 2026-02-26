import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap } from 'lucide-react';
import './Experience.css';

// Experience Data extracted from your resume
const experienceData = [
  {
    id: 1,
    role: "Junior Software Developer",
    company: "Thought Process Systems LLP",
    date: "07/2025 - Present",
    location: "Bengaluru, Karnataka",
    active: true, // Triggers the active blue glow
    icon: <Briefcase size={20} />,
    achievements: [
      "Migrating Kinetic Education's legacy ASP.NET VB system to a scalable React + Django + SQL architecture, building reusable UI components and secure, high-performance REST APIs with optimized queries.",
      "Enhancing deployment and delivery through Docker & Jenkins CI/CD pipelines while collaborating cross-functionally to improve performance, reliability, and development speed."
    ],
    tech: ["React.js", "Django", "SQL", "Docker", "Jenkins"]
  },
  {
    id: 2,
    role: "UI/UX & Web Development Intern",
    company: "Thought Process Systems LLP",
    date: "04/2025 - 06/2025",
    location: "Bengaluru, Karnataka",
    active: false,
    icon: <Briefcase size={20} />,
    achievements: [
      "Designed and delivered 3 responsive, production-ready websites using React, HTML, CSS, JavaScript, Bootstrap, and Tailwind, following component-based architecture and frontend best practices.",
      "Created UI/UX wireframes and prototypes in Figma and integrated analytics tools (Hotjar, Microsoft Clarity, Segment Pixel, GTM) to drive data-informed UX improvements."
    ],
    tech: ["React.js", "Figma", "HTML/CSS", "Tailwind", "Hotjar"]
  },
  {
    id: 3,
    role: "Microsoft Trainee",
    company: "Microsoft (Training Program)",
    date: "09/2024 - 10/2024",
    location: "Mysuru, Karnataka",
    active: false,
    icon: <GraduationCap size={20} />,
    achievements: [
      "Gained hands-on experience with Microsoft Azure (Compute, Storage, Databases) and built AI-powered prototypes using Azure AI & Cognitive Services.",
      "Strengthened cloud computing, DevOps, and modern deployment workflow fundamentals through practical implementation."
    ],
    tech: ["Azure", "Azure AI", "DevOps"]
  },
  {
    id: 4,
    role: "Java Intern",
    company: "QSpiders CampusConnect",
    date: "08/2023 - 10/2023",
    location: "Mysuru, Karnataka",
    active: false,
    icon: <Briefcase size={20} />,
    achievements: [
      "Strengthened Core Java fundamentals including OOP, Exception Handling, and Collections while building Java EE applications (Servlets, JSP, JDBC) with CRUD and database integration.",
      "Enhanced debugging skills and clean-code practices through hands-on, industry-oriented exercises."
    ],
    tech: ["Java", "JSP", "JDBC", "Servlets"]
  }
];

const Experience = () => {
  const containerRef = useRef(null);
  
  // Track scroll progress to fill the timeline line
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="experience-section section-container" id="experience">
      <div className="section-header">
        <h2 className="section-title">Professional Experience</h2>
        <div className="title-underline"></div>
      </div>

      <div className="timeline-container" ref={containerRef}>
        {/* The background track for the timeline */}
        <div className="timeline-track-bg"></div>
        {/* The animated fill line */}
        <motion.div className="timeline-track-fill" style={{ scaleY }}></motion.div>

        <div className="timeline-items">
          {experienceData.map((item, index) => (
            <motion.div 
              key={item.id} 
              className="timeline-item"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.35, delay: index * 0.1, ease: [0.0, 0.0, 0.2, 1] }}
            >
              {/* Timeline Node */}
              <div className={`timeline-node ${item.active ? 'active-node' : ''}`}>
                <div className="node-icon">{item.icon}</div>
              </div>

              {/* Experience Card */}
              <div className="experience-card">
                <div className="exp-card-header">
                  <div>
                    <h3 className="exp-role">{item.role}</h3>
                    <h4 className="exp-company">{item.company}</h4>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-date">{item.date}</span>
                    <span className="exp-location">{item.location}</span>
                  </div>
                </div>

                <ul className="exp-achievements">
                  {item.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>

                <div className="exp-tech-stack">
                  {item.tech.map((tech, i) => (
                    <span key={i} className="exp-tech-badge">{tech}</span>
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