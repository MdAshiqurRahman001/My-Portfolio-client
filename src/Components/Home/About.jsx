import { FaCalendarAlt, FaGamepad, FaGraduationCap, FaHome, FaMailBulk, FaPhoneAlt, FaUniversity, FaUser } from "react-icons/fa";
import { motion } from "framer-motion";

const personalInfo = [
    { icon: FaUser, label: "Name", value: "Md. Ashiqur Rahman Tonmoy" },
    { icon: FaMailBulk, label: "Email", value: "ashiqurtonmoy.official@gmail.com" },
    { icon: FaPhoneAlt, label: "Phone", value: "+8801784707310" },
    { icon: FaHome, label: "Location", value: "Rajbari, Dhaka, Bangladesh" },
];

const academicInfo = [
    { icon: FaGraduationCap, label: "Degree", value: "B.Sc in Software Engineering" },
    { icon: FaUniversity, label: "University", value: "Daffodil International University" },
    { icon: FaCalendarAlt, label: "Birthday", value: "13th November, 2000" },
    { icon: FaGamepad, label: "Hobby", value: "Books, Cricket, Video Games" },
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: { staggerChildren: 0.08 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const About = () => {
    return (
        <div className="section">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="section-title">
                    About <span className="text-gradient">Me</span>
                </h2>
                <div className="section-divider" />
                <p className="section-subtitle">
                    Passionate developer with a strong foundation in software engineering, dedicated to building clean, scalable applications.
                </p>
            </motion.div>

            {/* Bio section */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="glass-card"
                style={{ padding: 'clamp(1.25rem, 3vw, 2rem)', marginBottom: '2rem' }}
            >
                <p style={{ color: 'var(--text-secondary)', fontSize: 'clamp(0.88rem, 2vw, 1rem)', lineHeight: 1.8 }}>
                    I am a passionate web developer with a strong foundation in software engineering.
                    I graduated from Daffodil International University, where I gained expertise in various web technologies.
                    I enjoy developing simple, clean and slick websites that provide real value to the end user.
                    I am a lifelong learner, continuously expanding my knowledge and staying up-to-date with the latest trends in web development.
                    I am passionate about creating exceptional user experiences and building production-grade backend systems.
                </p>
            </motion.div>

            {/* Info Cards Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '1.5rem' }}>
                {/* Personal Info */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="glass-card"
                    style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}
                >
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem', color: 'var(--accent-light)' }}>
                        Personal Details
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {personalInfo.map((item) => (
                            <motion.div
                                key={item.label}
                                variants={itemVariants}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}
                            >
                                <div style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 10,
                                    background: 'rgba(124, 58, 237, 0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <item.icon style={{ color: 'var(--accent-primary)', fontSize: '0.9rem' }} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
                                        {item.label}
                                    </p>
                                    <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                                        {item.value}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Academic Info */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="glass-card"
                    style={{ padding: 'clamp(1.25rem, 3vw, 2rem)' }}
                >
                    <h3 style={{ fontSize: '1.1rem', fontWeight: 600, marginBottom: '1.25rem', color: 'var(--accent-light)' }}>
                        Education & Interests
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {academicInfo.map((item) => (
                            <motion.div
                                key={item.label}
                                variants={itemVariants}
                                style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}
                            >
                                <div style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 10,
                                    background: 'rgba(6, 182, 212, 0.12)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    flexShrink: 0,
                                }}>
                                    <item.icon style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem' }} />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
                                        {item.label}
                                    </p>
                                    <p style={{ fontSize: '0.92rem', color: 'var(--text-primary)', fontWeight: 500 }}>
                                        {item.value}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;