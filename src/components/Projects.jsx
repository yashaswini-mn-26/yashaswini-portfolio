import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Github, ExternalLink, Activity, ChevronDown } from 'lucide-react';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "Plant Disease Prediction System",
    description: "Trained CNN-based ML/DL models on 17,000+ leaf images for multi-class disease classification.",
    impact: "Achieved 97.3% classification accuracy for real-time agricultural disease detection.",
    tech: ["TensorFlow", "PyTorch", "Deep Learning", "CNN", "OpenCV"],
    github: "#",
    demo: "#",
    image: "/plant.png" 
  },
  {
    id: 2,
    title: "Gesture Volume Control",
    description: "Built a real-time hand-gesture recognition system for hands-free volume control.",
    impact: "Mapped specific hand landmarks to system audio controls via webcam.",
    tech: ["Python", "OpenCV", "Mediapipe"],
    github: "https://github.com/yashaswini-mn/gesture-volume-control/tree/main",
    demo: "#",
    image: "/gesture.jpg"
  },
  {
    id: 3,
    title: "Swapnodaya Website",
    description: "Live responsive websites for NGOs",
    impact: "Delivered production-ready UIs focusing on high performance and SEO.",
    tech: ["HTML", "Tailwind", "JS"],
    github: "#",
    demo: "https://swapnodaya.com/",
    image: "/swap.png"
  },
  {
    id: 4,
    title: "Thought Process Systems LLP [Corporate Website]",
    description: "Live responsive websites for Corporate platform.",
    impact: "Delivered production-ready UIs focusing on high performance and SEO.",
    tech: ["HTML", "Tailwind", "JS"],
    github: "https://www.thoughtprocess.co.in/",
    demo: "#",
    image: "/tps.png"
  },
  {
    id: 5,
    title: "Bookstore Application",
    description: "Developed a full CRUD application for managing bookstore inventories.",
    impact: "Streamlined database operations utilizing a modern JavaScript tech stack.",
    tech: ["MongoDB", "Express.js", "React.js"],
    github: "https://github.com/yashaswini-mn/BookStore",
    demo: "#",
    image: "/book.png"
  },
  {
    id: 6,
    title: "Event Management System",
    description: "Web-based system for event creation, registration, and management.",
    impact: "Implemented secure database operations and robust backend logic.",
    tech: ["Java", "JSP", "MySQL"],
    github: "https://github.com/yashaswini-mn/EventManagement",
    demo: "#",
    image: "/event.png"
  },
  {
    id: 7,
    title: "EStudy - ELearning LMS",
    description: "Designed a complete LMS prototype covering chat, video tracking, and analytics.",
    impact: "Created high-fidelity workflows, improving UX for educational platforms.",
    tech: ["Figma", "UI/UX"],
    github: "https://www.figma.com/proto/wfE3NyjnAilnqfetkk17gl/E-study?node-id=67-52&t=gsRJs75jCqd0yAnV-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
    demo: "#",
    image: "/dashboard.png"
  },
  {
    id: 8,
    title: "Exskilence Upskilling [Corporate Website]",
    description: "Live responsive websites for Corporate platform.",
    impact: "Delivered production-ready UIs focusing on high performance and SEO.",
    tech: ["HTML", "Tailwind", "JS", "CSS", "BootStrap"],
    github: "#",
    demo: "https://www.exskilence.com/",
    image: "/exs.png"
  },
];

const tiltOptions = {
  reverse: true,
  max: 5, 
  perspective: 1500,
  scale: 1.02,
  speed: 400,
  transition: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projectsData : projectsData.slice(0, 4);

  return (
    <section className="projects-section section-container" id="projects">
      <div className="section-header">
        <h2 className="section-title">Engineering Portfolio</h2>
        <div className="title-underline"></div>
      </div>

      <motion.div layout className="bento-grid">
        <AnimatePresence>
          {displayedProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              layout
              className="bento-wrapper"
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, transition: { duration: 0.2 } }}
              transition={{ duration: 0.3, delay: index * 0.05, ease: "easeOut" }}
            >
              <Tilt options={tiltOptions} className="bento-card">
                
                <div className="bento-image-container">
                  <div className="bento-image-overlay"></div>
                  <img src={project.image} alt={project.title} className="bento-image" />
                </div>

                <div className="bento-content">
                  <div className="bento-content-top">
                    <h3 className="bento-title">{project.title}</h3>
                    <p className="bento-desc">{project.description}</p>
                    
                    <div className="bento-tech">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bento-tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div className="bento-impact-box">
                    <div className="bento-impact-header">
                      <Activity size={14} className="impact-icon" />
                      <span>Impact</span>
                    </div>
                    <p className="bento-impact-text">{project.impact}</p>
                  </div>

                  {/* Conditionally Rendered Links */}
                  <div className="bento-links">
                    {project.github !== "#" && (
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="bento-link" aria-label="GitHub">
                        <Github size={16} /> <span>Code</span>
                      </a>
                    )}
                    {project.demo !== "#" && (
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="bento-link" aria-label="Demo">
                        <ExternalLink size={16} /> <span>Live</span>
                      </a>
                    )}
                  </div>
                </div>

              </Tilt>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <motion.div layout className="projects-action-container">
        <button 
          className="btn-show-more" 
          onClick={() => setShowAll(!showAll)}
        >
          <span>{showAll ? "Show Less" : "View All Projects"}</span>
          <motion.div 
            animate={{ rotate: showAll ? 180 : 0 }} 
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ display: 'flex', alignItems: 'center' }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </button>
      </motion.div>

    </section>
  );
};

export default Projects;