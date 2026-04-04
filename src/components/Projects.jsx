import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, ExternalLink, ChevronDown, Zap } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'SentinelAPI',
    subtitle: 'API Monitoring & Failure Prediction',
    description: 'Built an API monitoring system to detect frameworks and extract endpoints across Django, Flask, and Express. Developed a Flask-based proxy backend with ML-based API failure prediction for real-time monitoring and latency tracking.',
    impact: 'Real-time ML-based failure prediction with low-latency monitoring pipeline',
    tech: ['React', 'TypeScript', 'Flask', 'Machine Learning', 'Python'],
    github: 'https://github.com/yashaswini-mn-26/api-failure-prediction-frontend.git',
    demo: 'https://api-failure-prediction-frontend.vercel.app/',
    featured: true,
    category: 'ML + Backend',
    image: '/senapi.png',
  },
  {
    id: 2,
    title: 'E-Study LMS',
    subtitle: 'Full-Stack Learning Management System',
    description: 'Developed a scalable MERN-based platform with real-time chat, analytics, and progress tracking. Implemented secure authentication using JWT, Google OAuth, and email verification workflows.',
    impact: 'Secure auth, real-time Socket.IO chat, and full analytics dashboard',
    tech: ['React', 'Node.js', 'MongoDB', 'Socket.IO', 'JWT', 'Redux'],
    github: 'https://github.com/yashaswini-mn-26/E-Study',
    demo: 'https://e-studyy.vercel.app/',
    featured: true,
    category: 'Full Stack',
    image: '/dashboard.png',
  },
  {
    id: 3,
    title: 'FinFlow',
    subtitle: 'Finance Dashboard',
    description: 'Built a responsive financial dashboard with analytics, transaction tracking, and role-based UI. Implemented interactive visualizations and efficient state management for seamless user experience.',
    impact: 'Role-based access control with interactive Recharts visualizations',
    tech: ['React', 'TypeScript', 'Recharts', 'TailwindCSS'],
    github: 'https://github.com/yashaswini-mn-26/Finance-FinFlow.git',
    demo: 'https://finance-fin-flow.vercel.app/',
    featured: true,
    category: 'Frontend',
    image: '/finflow.png',
  },
  {
    id: 4,
    title: 'Whisper',
    subtitle: 'Anonymous Social Platform',
    description: 'Developed a real-time anonymous social platform enabling secure content sharing and user interaction. Integrated Firebase Authentication and Firestore for real-time updates and scalable backend.',
    impact: 'Real-time Firestore updates with anonymous identity system',
    tech: ['React.js', 'Firebase Auth', 'Firestore', 'Real-time DB'],
    github: 'https://github.com/yashaswini-mn-26/Confession-App.git',
    demo: 'https://confession-app-livid.vercel.app/',
    featured: false,
    category: 'Full Stack',
    image: '/whisper.png',
  },
  {
    id: 5,
    title: 'Plant Disease Prediction',
    subtitle: 'Deep Learning CNN System',
    description: 'Trained CNN-based ML/DL models on 17,000+ leaf images for multi-class disease classification. Deployed a real-time inference pipeline for automated predictions.',
    impact: '97.3% classification accuracy across 17,000+ training images',
    tech: ['Python', 'TensorFlow', 'PyTorch', 'CNN', 'OpenCV'],
    github: 'https://github.com/yashaswini-mn-26/Plant-Disease-Prediction.git',
    demo: '#',
    featured: false,
    category: 'ML / AI',
    image: '/plant.png',
  },
  {
    id: 6,
    title: 'AI Story Analyser',
    subtitle: 'NLP-powered SaaS Tool',
    description: 'Developed a modern, interactive SaaS-inspired AI Story Analyser using React and Model API integration. Engineered a high-performance frontend using React, Framer Motion, and Vite.',
    impact: 'NLP grammar correction, AI detection, and regional English adaptation',
    tech: ['React', 'Framer Motion', 'Vite', 'OpenAI API', 'NLP'],
    github: '#',
    demo: 'https://gentle-desert-085a3c800.4.azurestaticapps.net/',
    featured: false,
    category: 'AI',
    image: '/ai.png',
  },
    {
    id: 8,
    title: 'Thought Process Corporate Website',
    subtitle: 'Corporate Website',
    description: 'Responsive corporate platform. Modern UI with high accessibility and responsiveness built with Tailwind and Bootstrap.',
    impact: 'Live production corporate site with analytics integration',
    tech: ['HTML', 'Tailwind CSS', 'Bootstrap', 'JS'],
    github: '#',
    demo: 'https://www.thoughtprocess.co.in/',
    featured: false,
    category: 'Frontend',
    image: '/tps.png',
  },
  {
    id: 7,
    title: 'Swapnodaya Website',
    subtitle: 'NGO Production Platform',
    description: 'Live responsive website developed for NGO platform. Production-ready UI focusing on performance, accessibility, and SEO optimization.',
    impact: 'Production live with optimized Lighthouse score',
    tech: ['HTML', 'Tailwind CSS', 'JavaScript'],
    github: '#',
    demo: 'https://swapnodaya.com/',
    featured: false,
    category: 'Frontend',
    image: '/swap.png',
  },
  {
    id: 8,
    title: 'Exskilence Platform',
    subtitle: 'Corporate Upskilling Website',
    description: 'Responsive corporate platform for upskilling programs. Modern UI with high accessibility and responsiveness built with Tailwind and Bootstrap.',
    impact: 'Live production corporate site with analytics integration',
    tech: ['HTML', 'Tailwind CSS', 'Bootstrap', 'JS'],
    github: '#',
    demo: 'https://www.exskilence.com/',
    featured: false,
    category: 'Frontend',
    image: '/exs.png',
  },
  {
    id: 9,
    title: 'Gesture Volume Control',
    subtitle: 'Computer Vision Input System',
    description: 'Real-time hand gesture recognition system controlling system volume using Mediapipe hand landmark detection mapped to audio controls.',
    impact: 'Real-time gesture recognition at 30fps with Mediapipe landmarks',
    tech: ['Python', 'OpenCV', 'Mediapipe', 'Computer Vision'],
    github: 'https://github.com/yashaswini-mn/gesture-volume-control',
    demo: '#',
    featured: false,
    category: 'ML / AI',
    image: '/gesture.jpg',
  },
  {
    id: 10,
    title: 'Bookstore App',
    subtitle: 'Full CRUD MERN Application',
    description: 'Full CRUD application for managing bookstore inventories with efficient database operations using the MERN stack.',
    impact: 'Efficient database operations with REST API design patterns',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    github: 'https://github.com/yashaswini-mn/BookStore',
    demo: '#',
    featured: false,
    category: 'Full Stack',
    image: '/book.png',
  },
  {
    id: 11,
    title: 'Event Management System',
    subtitle: 'Java EE Web Application',
    description: 'Web system for event creation and registration with secure backend and MySQL database integration using Java EE stack.',
    impact: 'Secure backend with MySQL, JDBC, and Java Servlets',
    tech: ['Java', 'JSP', 'MySQL', 'Servlets', 'JDBC'],
    github: 'https://github.com/yashaswini-mn/EventManagement',
    demo: '#',
    featured: false,
    category: 'Full Stack',
    image: '/event.png',
  },
  {
    id: 12,
    title: 'EStudy LMS Prototype',
    subtitle: 'UI/UX Figma Design System',
    description: 'Complete LMS UI prototype with analytics and video tracking. Improved UX workflows for educational platforms with full design system.',
    impact: 'End-to-end design with analytics dashboard and user flows',
    tech: ['Figma', 'UI/UX', 'Design System', 'Prototyping'],
    github: 'https://www.figma.com/proto/wfE3NyjnAilnqfetkk17gl/E-study',
    demo: '#',
    featured: false,
    category: 'Design',
    image: '/dashboard.png',
  },
];

const categories = ['All', 'Full Stack', 'ML / AI', 'Frontend', 'Backend', 'Design'];

const categoryColor = {
  'Full Stack': 'blue',
  'ML / AI': 'purple',
  'Frontend': 'teal',
  'Backend': 'orange',
  'ML + Backend': 'purple',
  'AI': 'purple',
  'Design': 'pink',
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    layout
    key={project.id}
    initial={{ opacity: 0, y: 24 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.96 }}
    transition={{ duration: 0.4, delay: index * 0.04, ease: [0.16, 1, 0.3, 1] }}
    className={`project-card ${project.featured ? 'project-card--featured' : ''}`}
  >
    <div className="project-card__image">
      <img src={project.image} alt={project.title} loading="lazy" />
      <div className="project-card__image-overlay" />
      <span className={`project-card__category project-card__category--${categoryColor[project.category] || 'blue'}`}>
        {project.category}
      </span>
    </div>

    <div className="project-card__body">
      <div className="project-card__header">
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__subtitle">{project.subtitle}</p>
      </div>

      <p className="project-card__desc">{project.description}</p>

      <div className="project-card__impact">
        <Zap size={12} />
        <span>{project.impact}</span>
      </div>

      <div className="project-card__tech">
        {project.tech.slice(0, 4).map(t => (
          <span key={t} className="mono-tag">{t}</span>
        ))}
        {project.tech.length > 4 && (
          <span className="mono-tag mono-tag--muted">+{project.tech.length - 4}</span>
        )}
      </div>

      <div className="project-card__links">
        {project.github && project.github !== '#' && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-card__link">
            <Github size={14} /> Code
          </a>
        )}
        {project.demo && project.demo !== '#' && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-card__link project-card__link--primary">
            <ExternalLink size={14} /> Live Demo
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory || p.category.includes(activeCategory.replace(' / AI', '')));

  const displayed = showAll ? filtered : filtered.slice(0, 6);

  return (
    <section className="projects-section section-container" id="projects">
      <div className="projects-header">
        <div className="section-label">Portfolio</div>
        <h2 className="section-heading">Selected Projects</h2>
        <p className="section-subheading">
          A collection of production-grade applications across full-stack development, machine learning, and AI engineering.
        </p>

        {/* Category Filter */}
        <div className="projects-filter">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => { setActiveCategory(cat); setShowAll(false); }}
              className={`projects-filter__btn ${activeCategory === cat ? 'projects-filter__btn--active' : ''}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <motion.div layout className="projects-grid">
        <AnimatePresence mode="popLayout">
          {displayed.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length > 6 && (
        <motion.div layout className="projects-footer">
          <button className="btn-secondary projects-more-btn" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Less' : `View All ${filtered.length} Projects`}
            <motion.span animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <ChevronDown size={16} />
            </motion.span>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;