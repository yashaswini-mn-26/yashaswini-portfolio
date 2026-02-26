import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Award, ExternalLink } from 'lucide-react'; // Added ExternalLink
import './Education.css';

const educationData = [
  {
    id: 1,
    degree: "Bachelor of Engineering - Computer Science & Engineering",
    institution: "Mysuru Royal Institute of Technology",
    location: "Mandya, Karnataka",
    year: "2021 - 2025",
    score: "CGPA: 9.2",
  },
  {
    id: 2,
    degree: "Pre-University College (PCMB)", 
    institution: "Abhinava Bharathi Composite PU College",
    location: "Karnataka",
    year: "2020 - 2021",
    score: "Percentage: 97.8%", 
  },
  {
    id: 3,
    degree: "Secondary School Leaving Certificate (SSLC)", 
    institution: "Sri Venkateshwara Vidyanikethana High School",
    location: "Karnataka",
    year: "2018 - 2019",
    score: "Percentage: 94.4%", 
  }
];

// Updated to an array of objects to hold the URLs
const certifications = [
  { 
    title: "Certificate of Internship- QSpiders (Java, J2EE, JDBC, Servlets, JSP)", 
    url: "https://drive.google.com/file/d/1Ug7earbVEyobjA6ihZIZE2WX2UCscoAF/view?usp=drivesdk" 
  },
  { 
    title: "Certificate of Internship - SkillBout (Python, Django, REST APIs, SQL)", 
    url: "https://drive.google.com/file/d/1l91-Tagj82i0bkHA9OmgHNilIMWcVPcw/view?usp=drivesdk" 
  },
  { 
    title: "Microsoft Training Program (Infosys ICT Academy) - Azure & AI", 
    url: "https://drive.google.com/file/d/1H9UBiKv3Vm1w-z34H6OBQiWnnKPkoFmI/view?usp=drivesdk" 
  },
  { 
    title: "IEEE Udbhav Project Expo - Technical Project Expo", 
    url: "https://drive.google.com/file/d/1AbpHnBL2EiQfZ-EZNNhlWwz18CLZN4w4/view?usp=drivesdk" 
  },
  { 
    title: "Blink Foundation (Intel Sponsored) - Tech Learning Contribution", 
    url: "https://drive.google.com/file/d/1sPDvc9GJ--cN406MPAbK4rr-BgCqAmLR/view?usp=drivesdk" 
  }
];

const Education = () => {
  return (
    <section className="education-section section-container" id="education">
      <div className="section-header">
        <h2 className="section-title">Education & Certifications</h2>
        <div className="title-underline"></div>
      </div>

      <div className="education-wrapper">
        {/* Education Column */}
        <motion.div 
          className="edu-column"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          <div className="column-header">
            <BookOpen size={24} className="column-icon" />
            <h3>Academic Background</h3>
          </div>
          
          <div className="edu-cards">
            {educationData.map((item) => (
              <div key={item.id} className="edu-card">
                <h4>{item.degree}</h4>
                <div className="edu-card-meta">
                  <span className="edu-institution">{item.institution}</span>
                  <span className="edu-year">{item.year}</span>
                </div>
                <div className="edu-score">{item.score}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Certifications Column */}
        <motion.div 
          className="edu-column"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.2, ease: "easeOut" }}
        >
          <div className="column-header">
            <Award size={24} className="column-icon" />
            <h3>Certifications</h3>
          </div>
          
          <div className="cert-cards">
            {certifications.map((cert, index) => (
              // Changed from div to an anchor (a) tag
              <a 
                key={index} 
                href={cert.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cert-card cert-card-link"
              >
                <div className="cert-bullet"></div>
                <p>{cert.title}</p>
                <ExternalLink size={16} className="cert-link-icon" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;