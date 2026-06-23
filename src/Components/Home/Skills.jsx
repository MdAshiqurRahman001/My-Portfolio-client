import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Backend",
    color: "var(--accent-primary)",
    bgColor: "rgba(124, 58, 237, 0.12)",
    borderColor: "rgba(124, 58, 237, 0.2)",
    skills: ["TypeScript", "JavaScript", "Node.js", "Express.js", "MongoDB", "Prisma", "Mongoose", "REST API", "WebSockets", "JWT", "bcrypt", "Stripe"],
  },
  {
    title: "Frontend",
    color: "var(--accent-secondary)",
    bgColor: "rgba(6, 182, 212, 0.12)",
    borderColor: "rgba(6, 182, 212, 0.2)",
    skills: ["HTML", "CSS", "React", "React Router", "TailwindCSS", "DaisyUI", "Bootstrap", "TanStack Query", "Axios", "Firebase"],
  },
  {
    title: "Familiar",
    color: "#f59e0b",
    bgColor: "rgba(245, 158, 11, 0.12)",
    borderColor: "rgba(245, 158, 11, 0.2)",
    skills: ["Redux", "Next.js"],
  },
  {
    title: "Tools",
    color: "#22c55e",
    bgColor: "rgba(34, 197, 94, 0.12)",
    borderColor: "rgba(34, 197, 94, 0.2)",
    skills: ["Windows", "VS Code", "Git & Github", "Postman", "Figma", "Netlify", "Vercel"],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.04 },
  },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.3, ease: "easeOut" } },
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

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="glass-card"
            style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
              <span style={{
                width: 10,
                height: 10,
                borderRadius: '50%',
                background: category.color,
                boxShadow: `0 0 12px ${category.color}`,
              }} />
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, color: category.color, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                {category.title}
              </h3>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}
            >
              {category.skills.map((skill) => (
                <motion.span
                  key={skill}
                  variants={badgeVariants}
                  whileHover={{ y: -3, boxShadow: `0 6px 20px ${category.borderColor}` }}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '0.5rem 1rem',
                    background: category.bgColor,
                    border: `1px solid ${category.borderColor}`,
                    borderRadius: 10,
                    fontSize: '0.85rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                    cursor: 'default',
                    transition: 'all 200ms',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Skills;