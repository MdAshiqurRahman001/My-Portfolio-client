import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";
import useScramble from '../../Hooks/useScramble';
import MagneticButton from '../MagneticButton';

const stats = [
    { value: '3+', label: 'Projects Built' },
    { value: '1+', label: 'Yrs Experience' },
];

const TerminalCode = () => (
    <div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 12 }}>
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#ff5f57' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#febc2e' }} />
            <div style={{ width: 11, height: 11, borderRadius: '50%', background: '#28c840' }} />
            <span className="font-mono" style={{ fontSize: '0.67rem', color: 'var(--text-muted)', marginLeft: 8 }}>developer.ts</span>
        </div>
        <pre className="font-mono" style={{ fontSize: 'clamp(0.62rem, 1.1vw, 0.75rem)', lineHeight: 1.7, color: 'var(--text-secondary)', overflow: 'hidden' }}>
            <span style={{ color: '#7c3aed' }}>const </span>
            <span style={{ color: '#22d3ee' }}>developer</span>
            <span style={{ color: '#94a3b8' }}> = {'{'}</span>{'\n'}
            <span style={{ color: '#94a3b8' }}>  name</span>
            <span style={{ color: '#64748b' }}>: </span>
            <span style={{ color: '#a3e635' }}>"Tonmoy"</span>
            <span style={{ color: '#64748b' }}>,</span>{'\n'}
            <span style={{ color: '#94a3b8' }}>  role</span>
            <span style={{ color: '#64748b' }}>: </span>
            <span style={{ color: '#a3e635' }}>"Web Developer"</span>
            <span style={{ color: '#64748b' }}>,</span>{'\n'}
            <span style={{ color: '#94a3b8' }}>  stack</span>
            <span style={{ color: '#64748b' }}>: [</span>{'\n'}
            <span style={{ color: '#a3e635' }}>    "TypeScript"</span><span style={{ color: '#64748b' }}>, </span>
            <span style={{ color: '#a3e635' }}>"Node.js"</span><span style={{ color: '#64748b' }}>, </span>
            <span style={{ color: '#a3e635' }}>"Express.js"</span><span style={{ color: '#64748b' }}>,</span>{'\n'}
            <span style={{ color: '#a3e635' }}>    "MongoDB"</span><span style={{ color: '#64748b' }}>, </span>
            <span style={{ color: '#a3e635' }}>"Prisma"</span><span style={{ color: '#64748b' }}>, </span>
            <span style={{ color: '#a3e635' }}>"React.js"</span><span style={{ color: '#64748b' }}>,</span>{'\n'}
            <span style={{ color: '#64748b' }}>  ],</span>{'\n'}
            <span style={{ color: '#94a3b8' }}>  available</span>
            <span style={{ color: '#64748b' }}>: </span>
            <span style={{ color: '#7c3aed' }}>true</span>
            <span style={{ color: '#64748b' }}>,</span>{'\n'}
            <span style={{ color: '#94a3b8' }}>{'};'}</span>
        </pre>
    </div>
);


const Home = () => {
    const scrambledName = useScramble('Md. Ashiqur Rahman Tonmoy', { duration: 1500, delay: 400 });

    return (
        <div
            className="section"
            style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}
        >
            <div className="bento-grid">

                {/* Name card */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="glass-card bento-name"
                >
                    <p className="font-mono" style={{ color: 'var(--accent-primary)', fontSize: '0.82rem', marginBottom: '0.75rem', letterSpacing: '0.04em' }}>
                        {'// hello world'}
                    </p>
                    <h1 style={{ fontSize: 'clamp(1.5rem, 3vw, 2.75rem)', fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em' }}>
                        <span style={{ display: 'block', fontSize: 'clamp(0.8rem, 1.4vw, 1rem)', color: 'var(--text-muted)', fontWeight: 400, fontFamily: 'var(--font-mono)', marginBottom: '0.5rem' }}>
                            I am,
                        </span>
                        <span className="text-gradient">
                            {scrambledName || 'Md. Ashiqur Rahman Tonmoy'}
                        </span>
                    </h1>
                    <p style={{ color: 'var(--text-secondary)', marginTop: '0.9rem', fontSize: 'clamp(0.8rem, 1.5vw, 0.98rem)', fontWeight: 400 }}> Software Engineer &nbsp;·&nbsp; Web Developer &nbsp;·&nbsp; MERN Stack
                    </p>
                </motion.div>

                {/* Photo card */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.92 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="glass-card bento-photo"
                >
                    <img
                        src="https://i.ibb.co/LxZzDGC/my-photo-no-back.png"
                        alt="Md. Ashiqur Rahman Tonmoy"
                    />
                    <div className="bento-available-badge">
                        <span className="bento-pulse-dot bento-pulse-dot--green" />
                        Available for work
                    </div>
                </motion.div>

                {/* Stat cards */}
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                        className="glass-card bento-stat"
                    >
                        <span className="bento-stat-value text-gradient">{stat.value}</span>
                        <span className="bento-stat-label">{stat.label}</span>
                    </motion.div>
                ))}

                {/* Terminal card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.35 }}
                    className="glass-card bento-terminal"
                >
                    <TerminalCode />
                </motion.div>



                {/* CTA card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.55 }}
                    className="glass-card bento-cta"
                >
                    <MagneticButton>
                        <a
                            href="https://drive.google.com/uc?export=download&id=1ULmwe4BiX5cxDJhn0ZgHRYJXQFZf82Hh"
                            className="btn-primary"
                        >
                            <FaDownload /> Resume
                        </a>
                    </MagneticButton>
                    <MagneticButton>
                        <a
                            href="#contact"
                            className="btn-outline"
                            onClick={(e) => {
                                e.preventDefault();
                                document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <FaEnvelope /> Contact Me
                        </a>
                    </MagneticButton>
                </motion.div>

            </div>
        </div>
    );
};

export default Home;