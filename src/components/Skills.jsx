import React from 'react';
import { motion } from 'framer-motion';
import { Layers, Server, Database, GitBranch, BrainCircuit, Code, ComputerIcon } from 'lucide-react';
// Importing official brand logos for the carousel
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGithub, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiDjango, SiTensorflow, SiPostgresql, SiMongodb, SiNextdotjs, SiTailwindcss } from 'react-icons/si';
import './Skills.css';

// 1. Carousel Data
const carouselTech = [
  { icon: <FaReact />, name: "React", color: "#61DAFB" },
  { icon: <SiNextdotjs />, name: "Next.js", color: "#FFFFFF" },
  { icon: <SiJavascript />, name: "JavaScript", color: "#F7DF1E" },
  { icon: <SiTypescript />, name: "TypeScript", color: "#3178C6" },
  { icon: <FaPython />, name: "Python", color: "#3776AB" },
  { icon: <SiDjango />, name: "Django", color: "#197250" },
  { icon: <FaNodeJs />, name: "Node.js", color: "#339933" },
  { icon: <FaJava />, name: "Java", color: "#007396" },
  { icon: <SiTensorflow />, name: "TensorFlow", color: "#FF6F00" },
  { icon: <FaDocker />, name: "Docker", color: "#2496ED" },
  { icon: <SiPostgresql />, name: "PostgreSQL", color: "#336791" },
  { icon: <SiMongodb />, name: "MongoDB", color: "#47A248" },
  { icon: <FaGithub />, name: "GitHub", color: "#FFFFFF" },
];

// 2. Your Grid Data
const skillsData = [
   {
    category: "Programming Languages",
    icon: <Code size={24} />,
    yoe: "1+ Years",
    techs: ["JavaScript (ES6+)", "TypeScript", "Python", "Java", "C"] 
  },
  {
    category: "Frontend Development",
    icon: <Layers size={24} />,
    yoe: "1+ Years",
    techs: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap"] 
  },
  {
    category: "Backend Development",
    icon: <Server size={24} />,
    yoe: "1+ Years",
    techs: ["Node.js", "Express.js", "Django", "Flask", "FastAPI", "Java EE"] 
  },
  {
    category: "Databases",
    icon: <Database size={24} />,
    yoe: "1+ Years",
    techs: ["SQL", "MongoDB", "PostgreSQL", "JDBC"]
  },
  {
    category: "DevOps & Tools",
    icon: <GitBranch size={24} />,
    yoe: "1.5+ Years",
    techs: ["Git", "GitHub","GitLab", "Docker", "Jenkins", "CI/CD"] 
  },
  {
    category: "Machine Learning & AI",
    icon: <BrainCircuit size={24} />,
    yoe: "1+ Years",
    techs: ["TensorFlow", "PyTorch", "OpenCV", "NumPy", "Pandas"] 
  },
  {
    category: "Computer Science",
    icon: <ComputerIcon size={24} />,
    yoe: "1+ Years",
    techs: ["Data Structures & Algorithms", "OOPs", "RESTful APIs", "MVC Architecture"] 
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.35, ease: [0.0, 0.0, 0.2, 1] } 
  }
};

const Skills = () => {
  return (
    <section className="skills-section section-container" id="skills">
      <div className="section-header">
        <h2 className="section-title">Technical Expertise</h2>
        <div className="title-underline"></div>
      </div>

      {/* INFINITE SCROLL CAROUSEL */}
      <div className="carousel-container">
        <div className="carousel-track">
          {/* We render the list twice to create a seamless infinite loop */}
          {[...carouselTech, ...carouselTech].map((tech, index) => (
            <div key={index} className="carousel-item">
              <span className="carousel-icon" style={{ color: tech.color }}>
                {tech.icon}
              </span>
              <span className="carousel-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SKILLS GRID */}
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        // Changed viewport trigger so cards reveal even if barely on screen
        viewport={{ once: true, amount: 0.1 }} 
      >
        {skillsData.map((skillGroup, index) => (
          <motion.div key={index} className="skill-card" variants={cardVariants}>
            <div className="skill-card-header">
              <div className="skill-icon-wrapper">
                {skillGroup.icon}
              </div>
              <div className="skill-header-text">
                <h3>{skillGroup.category}</h3>
                <span className="yoe-indicator">{skillGroup.yoe}</span>
              </div>
            </div>
            
            <div className="tech-badges">
              {skillGroup.techs.map((tech, idx) => (
                <div key={idx} className="tech-badge">
                  <span className="tech-dot"></span>
                  {tech}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Skills;