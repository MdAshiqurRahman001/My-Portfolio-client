import { useState, useEffect } from 'react';
import { FaDownload, FaEnvelope } from 'react-icons/fa';
import { motion } from "framer-motion";

const roles = [
  "MERN Stack Developer",
  "Backend Engineer",
  "Full-Stack Web Developer",
  "Software Engineer",
];

const Home = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const role = roles[currentRole];
    let timeout;

    if (!isDeleting && displayText === role) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRole((prev) => (prev + 1) % roles.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(
          isDeleting
            ? role.substring(0, displayText.length - 1)
            : role.substring(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRole]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="section" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '100px' }}>
      {/* Floating decorative shapes */}
      <div className="floating-shape animate-float" style={{ width: 300, height: 300, background: 'var(--accent-primary)', top: '10%', right: '-5%', filter: 'blur(80px)' }} />
      <div className="floating-shape animate-float-reverse" style={{ width: 200, height: 200, background: 'var(--accent-secondary)', bottom: '15%', left: '-3%', filter: 'blur(60px)' }} />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', alignItems: 'center', width: '100%' }}
        className="lg:grid-cols-2"
      >
        {/* Text Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={itemVariants}
            className="font-mono"
            style={{ color: 'var(--accent-primary)', fontSize: '0.95rem', marginBottom: '0.75rem', letterSpacing: '0.05em' }}
          >
            {'// Hello, World! I am'}
          </motion.p>

          <motion.h1
            variants={itemVariants}
            style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, lineHeight: 1.1, marginBottom: '1.25rem', letterSpacing: '-0.03em' }}
          >
            Md. Ashiqur Rahman{" "}
            <span className="text-gradient">Tonmoy</span>
          </motion.h1>

          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', minHeight: '2rem' }}
          >
            <span style={{ width: 24, height: 2, background: 'var(--accent-primary)', borderRadius: 1 }} />
            <span className="font-mono" style={{ color: 'var(--accent-secondary)', fontSize: 'clamp(0.9rem, 2vw, 1.15rem)' }}>
              {displayText}
              <span style={{ animation: 'typing-cursor 0.8s infinite', color: 'var(--accent-primary)', fontWeight: 700 }}>|</span>
            </span>
          </motion.div>

          <motion.p
            variants={itemVariants}
            style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.9rem, 2vw, 1.05rem)', lineHeight: 1.7, maxWidth: 520, marginBottom: '2rem' }}
          >
            I build robust, scalable web applications with modern technologies.
            Passionate about clean code, great user experiences, and turning ideas into reality.
          </motion.p>

          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
          >
            <a
              href="https://drive.google.com/uc?export=download&id=1ULmwe4BiX5cxDJhn0ZgHRYJXQFZf82Hh"
              className="btn-primary"
            >
              <FaDownload /> Resume
            </a>
            <a href="#contact" className="btn-outline" onClick={(e) => {
              e.preventDefault();
              document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              <FaEnvelope /> Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div style={{ position: 'relative' }}>
            {/* Glow ring behind image */}
            <div style={{
              position: 'absolute',
              inset: -4,
              borderRadius: '50%',
              background: 'var(--gradient-primary)',
              opacity: 0.5,
              filter: 'blur(20px)',
              animation: 'pulse-glow 3s ease-in-out infinite',
            }} />
            {/* Profile image with gradient border */}
            <div style={{
              width: 'clamp(260px, 30vw, 380px)',
              height: 'clamp(260px, 30vw, 380px)',
              borderRadius: '50%',
              padding: 3,
              background: 'var(--gradient-primary)',
              position: 'relative',
            }}>
              <img
                src="https://i.ibb.co/LxZzDGC/my-photo-no-back.png"
                alt="Md. Ashiqur Rahman Tonmoy"
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '50%',
                  objectFit: 'cover',
                  background: 'var(--bg-primary)',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;