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
    { icon: "📞", label: "Phone", value: "+91 XXXXXXXXXX", href: "tel:+91XXXXXXXXXX" },
    { icon: "📧", label: "Email", value: "hello@anbuarasan.com", href: "mailto:hello@anbuarasan.com" },
    { icon: "📍", label: "Location", value: "India", href: "#" },
    { icon: "🌐", label: "Zoom Community", value: "Join Free Sessions", href: "#" },
  ];

  return (
    <section className="contact" ref={sectionRef} id="contact">
      {/* Background */}
      <div className="contact-bg">
        <div className="contact-glow contact-glow-1"></div>
        <div className="contact-glow contact-glow-2"></div>
        <div className="contact-glow contact-glow-3"></div>
      </div>

      {/* Particles */}
      <div className="contact-particles">
        {[...Array(10)].map((_, i) => (
          <span key={i} className="contact-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }} />
        ))}
      </div>

      <div className="contact-container">
        {/* Header */}
        <div className={`contact-header ${isVisible ? 'visible' : ''}`}>
          <span className="contact-tag">Get In Touch</span>
          <h2 className="contact-title">
            Let's Begin Your{" "}
            <span className="contact-title-accent">Transformation</span> Journey
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
              <div className="contact-info-list">
                {contactDetails.map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="contact-info-item"
                    style={{ transitionDelay: `${i * 0.08}s` }}
                  >
                    <span className="contact-info-icon">{item.icon}</span>
                    <div className="contact-info-text">
                      <span className="contact-info-label">{item.label}</span>
                      <span className="contact-info-value">{item.value}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="contact-quick-links">
                <span className="contact-quick-label">Quick Links</span>
                <div className="contact-quick-row">
                  <a href="#" className="contact-quick-btn">
                    <span>Book A Consultation</span>
                  </a>
                  <a href="#" className="contact-quick-btn contact-quick-btn-outline">
                    <span>Join Free Morning Community</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="contact-form-col" style={calcParallax(0.015)}>
            <div className="contact-form-card">
              <div className="contact-form-header">
                <span className="contact-form-icon">✧</span>
                <span className="contact-form-title">Send a Message</span>
              </div>

              <form className="contact-form">
                <div className="contact-form-row">
                  <div className="contact-form-group">
                    <label className="contact-form-label">Name</label>
                    <input type="text" placeholder="Your name" className="contact-form-input" />
                  </div>
                  <div className="contact-form-group">
                    <label className="contact-form-label">Email</label>
                    <input type="email" placeholder="your@email.com" className="contact-form-input" />
                  </div>
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Subject</label>
                  <input type="text" placeholder="What would you like to discuss?" className="contact-form-input" />
                </div>

                <div className="contact-form-group">
                  <label className="contact-form-label">Message</label>
                  <textarea placeholder="Share your thoughts..." className="contact-form-textarea" rows={4}></textarea>
                </div>

                <button type="submit" className="contact-submit">
                  <span>Send Message</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;