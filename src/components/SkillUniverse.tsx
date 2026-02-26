import React from 'react';
import { motion } from 'framer-motion';
// Icons (Install via: npm install react-icons)
import { SiJavascript, SiTypescript, SiPython, SiC, SiReact, SiNextdotjs, SiHtml5, SiCss3, SiTailwindcss, SiBootstrap, SiNodedotjs, SiExpress, SiDjango, SiFlask, SiFastapi, SiMongodb, SiPostgresql, SiGit, SiGithub, SiGitlab, SiDocker, SiJenkins, SiTensorflow, SiPytorch, SiOpencv, SiNumpy, SiPandas, SiFigma, SiHotjar } from 'react-icons/si';
import { FaJava, FaDatabase } from 'react-icons/fa';
import { VscServerProcess, VscGraphLine } from 'react-icons/vsc';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Python", icon: <SiPython /> },
      { name: "Java", icon: <FaJava /> },
      { name: "C", icon: <SiC /> }
    ]
  },
  {
    title: "Frontend Development",
    skills: [
      { name: "React.js", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "HTML5", icon: <SiHtml5 /> },
      { name: "CSS3", icon: <SiCss3 /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> }
    ]
  },
  {
    title: "Backend & Databases",
    skills: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "Django", icon: <SiDjango /> },
      { name: "Flask", icon: <SiFlask /> },
      { name: "FastAPI", icon: <SiFastapi /> },
      { name: "SQL", icon: <FaDatabase /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "PostgreSQL", icon: <SiPostgresql /> }
    ]
  },
  {
    title: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", icon: <SiTensorflow /> },
      { name: "PyTorch", icon: <SiPytorch /> },
      { name: "OpenCV", icon: <SiOpencv /> },
      { name: "MediaPipe", icon: <VscServerProcess /> },
      { name: "NumPy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "Matplotlib", icon: <VscGraphLine /> }
    ]
  },
  {
    title: "DevOps & Cloud",
    skills: [
      { name: "Docker", icon: <SiDocker /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "Git", icon: <SiGit /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "GitLab", icon: <SiGitlab /> },
      { name: "CI/CD", icon: <VscServerProcess /> }
    ]
  },
  {
    title: "UI/UX & Analytics",
    skills: [
      { name: "Figma", icon: <SiFigma /> },
      { name: "Google Tag Manager", icon: <VscGraphLine /> },
      { name: "Microsoft Clarity", icon: <VscGraphLine /> },
      { name: "Hotjar", icon: <SiHotjar /> }
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { type: "spring" as const, stiffness: 100 } 
  }
};

const SkillUniverse = () => {
  return (
    <section className="dynamic-section" style={{ background: 'var(--bg-skills)' }}>
      <h2 className="section-title">The Technical Ecosystem</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '40px' }}>
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            className="glass-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            <h3 style={{ color: '#5eead4', fontSize: '1.2rem', marginBottom: '20px', fontWeight: '400' }}>
              {category.title}
            </h3>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
              {category.skills.map((skill, i) => (
                <motion.div 
                  key={i} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(94, 234, 212, 0.1)' }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '10px 16px',
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    borderRadius: '30px',
                    fontSize: '0.9rem',
                    cursor: 'default'
                  }}
                >
                  <span style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center' }}>{skill.icon}</span>
                  <span>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillUniverse;