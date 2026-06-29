import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaTimes } from "react-icons/fa";
import './Projects.css'
import fullImage1 from '../../assets/Sports-Zone-Full.png'
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
        liveUrl: "profit-prime.netlify.app",
        liveFull: "https://profit-prime.netlify.app",
        clientRepo: "https://github.com/MdAshiqurRahman001/ProfitPrime",
        serverRepo: "https://github.com/MdAshiqurRahman001/ProfitPrime-Server",
    },
    {
        id: 2,
        title: "Sports Zone",
        subtitle: "Sports Training Center Platform",
        image: fullImage1,
        description: "A Sports Based Training Center where students can enroll and train in their desired sports with their favourite instructors.",
        features: [
            "3 Dashboards: Students, Instructors & Admin",
            "Admin can manage user roles (Instructor or Admin)",
            "Instructors can add classes for students",
            "Stripe payment integration",
        ],
        tech: ["TailwindCSS", "DaisyUI", "React", "React Router", "Firebase", "JWT", "Express JS", "MongoDB", "Stripe", "Vercel"],
        liveUrl: "https://sports-zone-client.vercel.app",
        liveFull: "https://sports-zone-client.vercel.app",
        clientRepo: "https://github.com/MdAshiqurRahman001/Sports-Zone-Client",
        serverRepo: "https://github.com/MdAshiqurRahman001/Sports-Zone-Server",
    },
    {
        id: 3,
        title: "Toy Cars",
        subtitle: "Online Toy Car Showroom",
        image: image2,
        description: "An Online Showroom for Toy Cars where anyone can upload and showcase their toys to users.",
        features: [
            "Browse and find favourite cars",
            "Explore categories of cars",
            "User-uploaded listings",
            "Responsive Design",
        ],
        tech: ["TailwindCSS", "DaisyUI", "React", "React Router", "Firebase", "Express JS", "MongoDB", "Vercel"],
        liveUrl: "assingment-11-toy-cars.web.app",
        liveFull: "https://assingment-11-toy-cars.web.app",
        clientRepo: "https://github.com/MdAshiqurRahman001/Toy-Cars-Client",
        serverRepo: "https://github.com/MdAshiqurRahman001/Toy-Cars-Server",
    },
];

const Portfolio = () => {
    const [selected, setSelected] = useState(null);

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

            {/* Projects Grid — macOS window cards */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '1.5rem' }}>
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="macos-card"
                        style={{ cursor: 'pointer' }}
                        onClick={() => setSelected(project)}
                    >
                        {/* macOS title bar */}
                        <div className="macos-titlebar">
                            <div className="macos-dots">
                                <div className="macos-dot" style={{ background: '#ff5f57' }} />
                                <div className="macos-dot" style={{ background: '#febc2e' }} />
                                <div className="macos-dot" style={{ background: '#28c840' }} />
                            </div>
                            <div className="macos-urlbar">🔒 {project.liveUrl}</div>
                            <div style={{ width: 50, flexShrink: 0 }} />
                        </div>

                        {/* Screenshot */}
                        <div className="macos-screen">
                            <img src={project.image} alt={project.title} loading="lazy" />
                        </div>

                        {/* Card body */}
                        <div className="macos-body">
                            <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.3rem' }}>
                                {project.title}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '0.85rem', lineHeight: 1.5 }}>
                                {project.subtitle}
                            </p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.3rem' }}>
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
                {selected && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="modal-backdrop"
                        onClick={() => setSelected(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3, ease: "easeOut" }}
                            className="modal-content"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={() => setSelected(null)} className="modal-close" aria-label="Close">
                                <FaTimes />
                            </button>

                            <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', paddingRight: '2.5rem' }}>
                                {selected.title}
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.25rem' }}>
                                {selected.subtitle}
                            </p>
                            <p style={{ color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.25rem', fontSize: '0.92rem' }}>
                                {selected.description}
                            </p>

                            {selected.fullImage && (
                                <div style={{ marginBottom: '1.5rem', borderRadius: '8px', overflowY: 'auto', maxHeight: '350px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <img src={selected.fullImage} alt={`${selected.title} full view`} style={{ width: '100%', display: 'block' }} />
                                </div>
                            )}

                            <div style={{ marginBottom: '1.25rem' }}>
                                <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem' }}>
                                    Key Features
                                </h4>
                                <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.45rem' }}>
                                    {selected.features.map((f, i) => (
                                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', color: 'var(--text-secondary)', fontSize: '0.88rem' }}>
                                            <span style={{ color: 'var(--accent-primary)', fontWeight: 700, marginTop: 2, flexShrink: 0 }}>→</span>
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <h4 style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-light)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '0.65rem' }}>
                                    Technologies
                                </h4>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                                    {selected.tech.map((t) => (
                                        <span key={t} className="tech-badge">{t}</span>
                                    ))}
                                </div>
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                <a href={selected.liveFull} target="_blank" rel="noopener noreferrer" className="btn-primary" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
                                    <FaExternalLinkAlt /> Live Demo
                                </a>
                                <a href={selected.clientRepo} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
                                    <FaGithub /> Client
                                </a>
                                <a href={selected.serverRepo} target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
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