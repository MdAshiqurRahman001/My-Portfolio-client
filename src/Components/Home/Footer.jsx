import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";

const socialLinks = [
  { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/md-ashiqur-rahman-tonmoy-ab1569278/", label: "LinkedIn" },
  { icon: FaGithub, href: "https://github.com/Mdashiqurrahman001", label: "GitHub" },
  { icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=100090913276553", label: "Facebook" },
];

const Footer = () => {
  return (
    <footer style={{
      borderTop: '1px solid var(--glass-border)',
      padding: '2rem clamp(1rem, 5vw, 2rem)',
      textAlign: 'center',
    }}>
      <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto' }}>
        {/* Social Icons */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
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

        {/* Gradient divider */}
        <div style={{
          width: 60,
          height: 2,
          background: 'var(--gradient-primary)',
          borderRadius: 1,
          margin: '0 auto 1rem',
        }} />

        {/* Copyright */}
        <p style={{
          color: 'var(--text-muted)',
          fontSize: '0.85rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.35rem',
          flexWrap: 'wrap',
        }}>
          © {new Date().getFullYear()} Md. Ashiqur Rahman Tonmoy
        </p>
      </div>
    </footer>
  );
};

export default Footer;
