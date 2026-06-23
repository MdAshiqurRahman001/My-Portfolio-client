import { motion } from "framer-motion";

const backendSkills = [
  'TypeScript',
  'JavaScript',
  'Node.js',
  'Express.js',
  'Express JS',
  'MongoDB',
  'Prisma',
  'Mongoose',
  'REST API',
  'WebSockets',
  'JWT',
  'bcrypt',
  'Stripe',
  'Paypal'
];

const frontendSkills = [
  'HTML5',
  'CSS3',
  'ES6',
  'React',
  'Next.js',
  'Redux',
  'React Router',
  'TailwindCSS',
  'DaisyUI',
  'Bootstrap',
  'TanStack Query',
  'Axios',
  'Firebase',
  'React Hook Form'
];

const toolsSkills = [
  'Windows',
  'VS Code',
  'Git & GitHub',
  'Postman',
  'Figma',
  'Netlify',
  'Vercel'
];

const MarqueeRow = ({ skills, direction = 'left', color, label }) => {
  const doubled = [...skills, ...skills, ...skills, ...skills];
  
  // Calculate uniform duration based on number of items. 
  // Since we scroll 50% of the track (which is 2 * skills.length),
  // a multiplier of 4 means 2 seconds per item.
  const duration = skills.length * 5;

  return (
    <div className="marquee-section">
      <div className="marquee-label">
        <span className="marquee-label-dot" style={{ background: color, color }} />
        <span className="marquee-label-text" style={{ color }}>{label}</span>
      </div>
      <div className="marquee-outer">
        <div 
          className={`marquee-track ${direction === 'right' ? 'marquee-track--right' : ''}`}
          style={{ animationDuration: `${duration}s` }}
        >
          {doubled.map((skill, i) => (
            <span
              key={i}
              className="marquee-pill"
              style={{ '--pill-border': `${color}40` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          My <span className="text-gradient">Skills</span>
        </h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Technologies and tools I use to bring ideas to life
        </p>
      </motion.div>

      {/* Marquee rows */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <MarqueeRow skills={backendSkills} direction="left" color="var(--accent-primary)" label="Backend" />
        <MarqueeRow skills={frontendSkills} direction="right" color="var(--accent-secondary)" label="Frontend" />
        <MarqueeRow skills={toolsSkills} direction="left" color="#22c55e" label="Tools" />
      </motion.div>
    </div>
  );
};

export default Skills;