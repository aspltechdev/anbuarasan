// ============================================
// CONTACT - WARM EARTHY THEME
// Elegant Contact Section
// Beautiful card-style sections with visual elements
// ============================================
import "./Contact.css";
import { useEffect, useRef, useState } from "react";

function Contact() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calcParallax = (depth) => {
    if (!sectionRef.current) return {};
    const rect = sectionRef.current.getBoundingClientRect();
    return {
      transform: `translate3d(${(mousePos.x - rect.left - rect.width / 2) * depth}px, ${(mousePos.y - rect.top - rect.height / 2) * depth}px, 0)`,
    };
  };

  const contactDetails = [
    { 
      label: "Phone", 
      value: "+91 XXXXXXXXXX", 
      href: "tel:+91XXXXXXXXXX",
      symbol: "◈",
      color: "#8b7355"
    },
    { 
      label: "Email", 
      value: "hello@anbuarasan.com", 
      href: "mailto:hello@anbuarasan.com",
      symbol: "✦",
      color: "#8b7355"
    },
    { 
      label: "Location", 
      value: "India", 
      href: "#",
      symbol: "⬡",
      color: "#8b7355"
    },
    { 
      label: "Zoom Community", 
      value: "Join Free Sessions", 
      href: "#",
      symbol: "⟐",
      color: "#8b7355"
    },
  ];

  return (
    <section className="contact" ref={sectionRef} id="contact">
      {/* Background Atmosphere */}
      <div className="contact-bg">
        <div className="contact-glow contact-glow-1"></div>
        <div className="contact-glow contact-glow-2"></div>
        <div className="contact-glow contact-glow-3"></div>
      </div>

      {/* Floating Particles */}
      <div className="contact-particles">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="contact-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              background: `radial-gradient(circle, rgba(139, 115, 85, ${0.05 + Math.random() * 0.1}), transparent)`,
            }}
          />
        ))}
      </div>

      <div className="contact-container">
        {/* Header */}
        <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <div className="contact-badge">
            <span className="contact-badge-line"></span>
            <span className="contact-tag">✦ Get In Touch</span>
            <span className="contact-badge-line"></span>
          </div>
          <h2 className="contact-title">
            Let's Begin Your{" "}
            <span className="contact-title-accent">Transformation</span> Journey
            <span className="contact-title-dot">.</span>
          </h2>
          <p className="contact-subtitle">
            Whether you seek spiritual growth, personal development, financial awareness, or wellness guidance, we're here to help.
          </p>
        </div>

        {/* Main Grid */}
        <div className={`contact-grid ${isVisible ? 'visible' : ''}`}>
          
          {/* Left: Contact Info */}
          <div className="contact-info">
            <div className="contact-info-card">
              <div className="contact-info-header">
                <span className="contact-info-symbol">◈</span>
                <span className="contact-info-title">Connect With Us</span>
                <div className="contact-info-divider"></div>
              </div>

              <div className="contact-info-list">
                {contactDetails.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="contact-info-item"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    <div className="contact-info-icon-wrapper">
                      <span className="contact-info-symbol-icon">{item.symbol}</span>
                    </div>
                    <div className="contact-info-text">
                      <span className="contact-info-label">{item.label}</span>
                      <span className="contact-info-value">{item.value}</span>
                    </div>
                    <span className="contact-info-arrow">→</span>
                  </a>
                ))}
              </div>

              <div className="contact-quick-links">
                <div className="contact-quick-divider"></div>
                <span className="contact-quick-label">Quick Actions</span>
                <div className="contact-quick-row">
                  <a href="#" className="contact-quick-btn">
                    <span>Book A Consultation</span>
                    <span className="contact-quick-btn-symbol">◈</span>
                  </a>
                  <a href="#" className="contact-quick-btn contact-quick-btn-outline">
                    <span>Join Free Morning Community</span>
                    <span className="contact-quick-btn-symbol">✦</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-col" style={calcParallax(0.015)}>
            <div className="contact-form-card">
              <div className="contact-form-header">
                <div className="contact-form-icon-wrapper">
                  <span className="contact-form-icon">✧</span>
                </div>
                <div>
                  <span className="contact-form-title">Send a Message</span>
                  <span className="contact-form-subtitle">We'll respond within 24 hours</span>
                </div>
              </div>

              <form className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label">Name</label>
                    <input type="text" placeholder="Your name" className="contact-form-input" />
                    <span className="contact-form-input-line"></span>
                  </div>
                  <div className="contact-form-group">
                    <label className="contact-form-label">Email</label>
                    <input type="email" placeholder="your@email.com" className="contact-form-input" />
                    <span className="contact-form-input-line"></span>
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Subject</label>
                  <input type="text" placeholder="What would you like to discuss?" className="contact-form-input" />
                  <span className="contact-form-input-line"></span>
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Message</label>
                  <textarea placeholder="Share your thoughts..." className="contact-form-textarea" rows={4}></textarea>
                  <span className="contact-form-input-line"></span>
                </div>

                <button type="submit" className="contact-submit">
                  <span>Send Message</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>

              <div className="contact-form-footer">
                <span className="contact-form-footer-symbol">⬡</span>
                <span className="contact-form-footer-text">We respect your privacy and will never share your information</span>
                <span className="contact-form-footer-symbol">⬡</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;