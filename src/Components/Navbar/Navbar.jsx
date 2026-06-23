import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedinIn, FaBars, FaTimes } from "react-icons/fa";
import './Navbar.css'

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/md-ashiqur-rahman-tonmoy-ab1569278/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/Mdashiqurrahman001", label: "GitHub" },
  { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100090913276553", label: "Facebook" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map(item => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`navbar-container ${scrolled ? "navbar-scrolled" : ""}`}
    >
      <div className="navbar-inner">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="navbar-logo"
        >
          <span className="logo-bracket">&lt;</span>
          Tonmoy
          <span className="logo-bracket">/&gt;</span>
        </a>

        {/* Desktop Navigation */}
        <div className="navbar-links-desktop">
          {navItems.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className={`navbar-link ${activeSection === item.href.substring(1) ? "navbar-link-active" : ""}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
              whileHover={{ y: -2 }}
            >
              {item.label}
              {activeSection === item.href.substring(1) && (
                <motion.span
                  layoutId="activeIndicator"
                  className="navbar-active-dot"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.a>
          ))}
        </div>

        {/* Desktop Social Icons */}
        <div className="navbar-socials-desktop">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              aria-label={social.label}
            >
              <social.icon />
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="navbar-mobile-menu"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`navbar-mobile-link ${activeSection === item.href.substring(1) ? "navbar-link-active" : ""}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                {item.label}
              </motion.a>
            ))}
            <div className="navbar-mobile-socials">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;