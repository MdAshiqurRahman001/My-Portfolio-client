import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import './Projects.css'
import image1 from '../../assets/Sports-Zone.png'
import image2 from '../../assets/Toy-Cars.png'
import image3 from '../../assets/Profit Prime.png'

const projects = [
  {
    id: 1,
    title: "Profit Prime",
    subtitle: "Revenue Generation Platform (Team Project)",
    image: image3,
    description: "Maximize profits effortlessly with our Revenue Generation Platform. Harness data-driven insights, optimize strategies, and elevate customer engagement for exponential growth.",
    features: [
      "Real-time insights into revenue trends, customer behavior, and market dynamics",
      "Dynamic Pricing Options for companies of all sizes",
      "Dashboard with charts (bar charts, line charts) and graphical elements",
      "Responsive Design",
    ],
    tech: ["TailwindCSS", "DaisyUI", "React", "React Router", "Firebase", "Express JS", "MongoDB", "Vercel"],
    liveUrl: "https://profit-prime.netlify.app",
    clientRepo: "https://github.com/T-0-N-M-0-Y/ProfitPrime/tree/main",
    serverRepo: "https://github.com/T-0-N-M-0-Y/ProfitPrime-Server",
  },
  {
    id: 2,
    title: "Sports Zone",
    subtitle: "Sports Training Center Platform",
    image: image1,
    description: "A Sports Based Training Center where students can enroll and train in their desired sports with their favourite instructors.",
    features: [
      "3 Dashboards: Students, Instructors & Admin",
      "Admin can manage user roles (Instructor or Admin)",
      "Instructors can add classes for students",
      "Responsive Design",
    ],
    tech: ["TailwindCSS", "DaisyUI", "React", "React Router", "Firebase", "JWT", "Express JS", "MongoDB", "Stripe", "Vercel"],
    liveUrl: "https://sports-zone-app.netlify.app",
    clientRepo: "https://github.com/T-0-N-M-0-Y/Sports-Zone-Client",
    serverRepo: "https://github.com/T-0-N-M-0-Y/Sports-Zone-Server",
  },
  {
    id: 3,
    title: "Toy Cars",
    subtitle: "Online Toy Car Showroom",
    image: image2,
    description: "An Online Showroom for Toy Cars! Anyone can upload and showcase their toys to users.",
    features: [
      "Find your favourite cars",
      "Explore categories of cars",
      "Eye-catching car designs",
      "Responsive Design",
    ],
    tech: ["TailwindCSS", "DaisyUI", "React", "React Router", "Firebase", "Express JS", "MongoDB", "Vercel"],
    liveUrl: "https://assingment-11-toy-cars.web.app",
    clientRepo: "https://github.com/T-0-N-M-0-Y/Toy-Cars-Client",
    serverRepo: "https://github.com/T-0-N-M-0-Y/Toy-Cars-Server",
  },
];

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          My <span className="text-gradient">Projects</span>
        </h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          A selection of projects I have built — from team collaborations to solo ventures
        </p>
      </motion.div>

      {/* Projects Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
        {projects.map((project, i) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="project-card"
            style={{ cursor: 'pointer' }}
            onClick={() => setSelectedProject(project)}
          >
            {/* Image */}
            <div style={{ position: 'relative', overflow: 'hidden', height: 220 }}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
                loading="lazy"
              />
              {/* Gradient overlay */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '60%',
                background: 'linear-gradient(to top, rgba(10, 10, 26, 0.9), transparent)',
                pointerEvents: 'none',
              }} />
            </div>

            {/* Content */}
            <div style={{ padding: '1.25rem' }}>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '0.35rem' }}>
                {project.title}
              </h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem', lineHeight: 1.5 }}>
                {project.subtitle}
              </p>

              {/* Tech badges */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                {project.tech.slice(0, 5).map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
                {project.tech.length > 5 && (
                  <span className="tech-badge">+{project.tech.length - 5}</span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="modal-backdrop"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="modal-content"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="modal-close"
                aria-label="Close modal"
              >
                <FaTimes />
              </button>

              <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem', paddingRight: '2rem' }}>
                {selectedProject.title}
              </h3>

              <p style={{ color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.25rem', fontSize: '0.95rem' }}>
                {selectedProject.description}
              </p>

              {/* Features */}
              <div style={{ marginBottom: '1.25rem' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  Key Features
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {selectedProject.features.map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--accent-primary)', fontWeight: 700, marginTop: 1 }}>→</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech stack */}
              <div style={{ marginBottom: '1.5rem' }}>
                <h4 style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.75rem' }}>
                  Technologies
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {selectedProject.tech.map((t) => (
                    <span key={t} className="tech-badge">{t}</span>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
                >
                  <FaExternalLinkAlt /> Live Demo
                </a>
                <a
                  href={selectedProject.clientRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
                >
                  <FaGithub /> Client
                </a>
                <a
                  href={selectedProject.serverRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                  style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}
                >
                  <FaGithub /> Server
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Portfolio;