import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Globe, Server, Database, GitMerge, BrainCircuit, Monitor } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaDocker, FaGithub } from 'react-icons/fa';
import { SiTypescript, SiJavascript, SiDjango, SiTensorflow, SiPostgresql, SiMongodb, SiNextdotjs, SiTailwindcss, SiFlask, SiFastapi } from 'react-icons/si';
import './Skills.css';

const skillGroups = [
  {
    label: 'Languages',
    icon: <Code2 size={18} />,
    color: 'blue',
    skills: ['Python', 'JavaScript (ES6+)', 'TypeScript', 'Java', 'SQL', 'C'],
  },
  {
    label: 'Frontend',
    icon: <Globe size={18} />,
    color: 'teal',
    skills: ['React.js', 'Next.js', 'Tailwind CSS', 'HTML5 / CSS3', 'Framer Motion', 'Bootstrap'],
  },
  {
    label: 'Backend',
    icon: <Server size={18} />,
    color: 'purple',
    skills: ['Node.js', 'Express.js', 'Django REST', 'FastAPI', 'Flask', 'Java EE'],
  },
  {
    label: 'Databases',
    icon: <Database size={18} />,
    color: 'orange',
    skills: ['PostgreSQL', 'MongoDB', 'SQL Server', 'MySQL', 'Firebase', 'JDBC'],
  },
  {
    label: 'DevOps & Cloud',
    icon: <GitMerge size={18} />,
    color: 'green',
    skills: ['Docker', 'Jenkins', 'CI/CD', 'Microsoft Azure', 'Git / GitHub', 'GitLab'],
  },
  {
    label: 'AI & ML',
    icon: <BrainCircuit size={18} />,
    color: 'pink',
    skills: ['TensorFlow', 'PyTorch', 'OpenCV', 'Scikit-Learn', 'NumPy', 'Pandas', 'Mediapipe'],
  },
  {
    label: 'CS Fundamentals',
    icon: <Monitor size={18} />,
    color: 'gray',
    skills: ['DSA', 'OOP', 'System Design', 'REST APIs', 'Microservices', 'MVC'],
  },
];

const marqueeItems = [
  { icon: <FaReact />, name: 'React', color: '#61DAFB' },
  { icon: <SiNextdotjs />, name: 'Next.js', color: 'currentColor' },
  { icon: <SiJavascript />, name: 'JavaScript', color: '#F7DF1E' },
  { icon: <SiTypescript />, name: 'TypeScript', color: '#3178C6' },
  { icon: <FaPython />, name: 'Python', color: '#3776AB' },
  { icon: <SiDjango />, name: 'Django', color: '#197250' },
  { icon: <SiFlask />, name: 'Flask', color: 'currentColor' },
  { icon: <SiFastapi />, name: 'FastAPI', color: '#009688' },
  { icon: <FaNodeJs />, name: 'Node.js', color: '#339933' },
  { icon: <FaJava />, name: 'Java', color: '#007396' },
  { icon: <SiTensorflow />, name: 'TensorFlow', color: '#FF6F00' },
  { icon: <FaDocker />, name: 'Docker', color: '#2496ED' },
  { icon: <SiPostgresql />, name: 'PostgreSQL', color: '#336791' },
  { icon: <SiMongodb />, name: 'MongoDB', color: '#47A248' },
  { icon: <FaGithub />, name: 'GitHub', color: 'currentColor' },
  { icon: <SiTailwindcss />, name: 'Tailwind', color: '#06B6D4' },
];

const colorMap = {
  blue: 'var(--accent)',
  teal: '#2dd4bf',
  purple: '#a78bfa',
  orange: 'var(--orange)',
  green: 'var(--green)',
  pink: '#f472b6',
  gray: 'var(--text-tertiary)',
};

const bgMap = {
  blue: 'var(--accent-dim)',
  teal: 'rgba(45,212,191,0.08)',
  purple: 'rgba(167,139,250,0.08)',
  orange: 'rgba(251,146,60,0.08)',
  green: 'var(--green-dim)',
  pink: 'rgba(244,114,182,0.08)',
  gray: 'var(--bg-hover)',
};

const Skills = () => (
  <section className="skills-section section-container" id="skills" style={{margin:"auto"}}>
    {/* Header */}
    <div className="section-label">Expertise</div>
    <h2 className="section-heading">Technical Skills</h2>
    <p className="section-subheading">
      A full-stack engineer comfortable across the entire development lifecycle — from pixel-perfect frontends to optimized backend APIs and ML pipelines.
    </p>

    {/* Marquee */}
    <div className="skills-marquee">
      <div className="skills-marquee__track">
        {[...marqueeItems, ...marqueeItems].map((item, i) => (
          <div key={i} className="skills-marquee__item">
            <span className="skills-marquee__icon" style={{ color: item.color }}>{item.icon}</span>
            <span className="skills-marquee__name">{item.name}</span>
          </div>
        ))}
      </div>
    </div>

    {/* Grid */}
    <div className="skills-grid">
      {skillGroups.map((group, i) => (
        <motion.div
          key={group.label}
          className="skill-group"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="skill-group__header">
            <div
              className="skill-group__icon"
              style={{ color: colorMap[group.color], background: bgMap[group.color] }}
            >
              {group.icon}
            </div>
            <span className="skill-group__label">{group.label}</span>
          </div>

          <div className="skill-group__tags">
            {group.skills.map(skill => (
              <span key={skill} className="skill-tag" style={{ '--tag-color': colorMap[group.color] }}>
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  </section>
);

export default Skills;