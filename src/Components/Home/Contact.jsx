import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import Lottie from "lottie-react";
import emailAnim from '../../../email-template.json';
import { motion } from "framer-motion";
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane } from "react-icons/fa";

const contactInfo = [
  { icon: FaEnvelope, label: "Email", value: "ashiqurtonmoy.official@gmail.com", href: "mailto:ashiqurtonmoy.official@gmail.com" },
  { icon: FaPhone, label: "Phone", value: "+880 1784707310", href: "tel:+8801784707310" },
  { icon: FaMapMarkerAlt, label: "Location", value: "Rajbari, Dhaka, Bangladesh", href: null },
];

const Contact = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);

  const showToast = (type, message) => {
    setToast({ type, message });
    setTimeout(() => setToast(null), 4000);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs.sendForm('service_zhj3he7', 'template_osftikb', form.current, '7Mvl3Q6mDRfontGIK')
      .then(() => {
        showToast('success', 'Message sent successfully! I\'ll get back to you soon.');
        form.current.reset();
      })
      .catch(() => {
        showToast('error', 'Failed to send message. Please try again or email me directly.');
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className="section">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="section-title">
          Get In <span className="text-gradient">Touch</span>
        </h2>
        <div className="section-divider" />
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>
      </motion.div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="lg:grid-cols-2">
        {/* Contact Info + Animation */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Contact cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2rem' }}>
            {contactInfo.map((item) => {
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <Wrapper
                  key={item.label}
                  href={item.href || undefined}
                  className="glass-card"
                  style={{
                    padding: '1rem 1.25rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    textDecoration: 'none',
                    color: 'inherit',
                  }}
                >
                  <div style={{
                    width: 42,
                    height: 42,
                    borderRadius: 12,
                    background: 'rgba(124, 58, 237, 0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <item.icon style={{ color: 'var(--accent-primary)', fontSize: '1rem' }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: 2 }}>
                      {item.label}
                    </p>
                    <p style={{ fontSize: '0.9rem', fontWeight: 500, color: 'var(--text-primary)' }}>
                      {item.value}
                    </p>
                  </div>
                </Wrapper>
              );
            })}
          </div>

          {/* Lottie animation */}
          <div style={{ maxWidth: 320, margin: '0 auto' }}>
            <Lottie animationData={emailAnim} loop={true} />
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="glass-card"
            style={{ padding: 'clamp(1.5rem, 4vw, 2.5rem)' }}
          >
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.5rem' }}>
              Send Me a Message
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <label className="form-label" htmlFor="contact-name">Name</label>
                <input
                  id="contact-name"
                  type="text"
                  name="user_name"
                  placeholder="Your full name"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label className="form-label" htmlFor="contact-email">Email</label>
                <input
                  id="contact-email"
                  type="email"
                  name="user_email"
                  placeholder="your@email.com"
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label className="form-label" htmlFor="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  placeholder="Tell me about your project..."
                  className="form-input"
                  rows={5}
                  style={{ resize: 'vertical', minHeight: 120 }}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                disabled={sending}
                style={{
                  justifyContent: 'center',
                  width: '100%',
                  opacity: sending ? 0.7 : 1,
                  pointerEvents: sending ? 'none' : 'auto',
                }}
              >
                <FaPaperPlane />
                {sending ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </motion.div>
      </div>

      {/* Toast notification */}
      {toast && (
        <div className={`toast toast-${toast.type}`}>
          {toast.message}
        </div>
      )}
    </div>
  );
};

export default Contact;