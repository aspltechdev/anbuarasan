// ============================================
// FOOTER - ATHMA SOUL THEME
// Cinematic Footer with Emotional Connection
// Elegant, warm, and immersive
// ============================================
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: "Athma Connect", path: "/athma-connect" },
      { name: "Brahma Muhurta", path: "/brahma-muhurta" },
      { name: "Thought Process Coaching", path: "/contact" },
      { name: "Vibrance Intelligence", path: "/contact" },
    ],
    explore: [
      { name: "About", path: "/about" },
      { name: "Financial Awareness", path: "/financial-awareness" },
      { name: "Digital Assets", path: "/digital-assets" },
      { name: "Wellness Solutions", path: "/wellness" },
    ],
    connect: [
      { name: "Contact", path: "/contact" },
      { name: "Testimonials", path: "/testimonials" },
      { name: "Blog", path: "/blog" },
      { name: "Gallery", path: "/gallery" },
    ],
  };

  return (
    <footer className="footer">
      {/* Background Atmosphere */}
      <div className="footer-bg">
        <div className="footer-glow footer-glow-1"></div>
        <div className="footer-glow footer-glow-2"></div>
      </div>

      {/* Breath Waves */}
      <div className="footer-breath-waves">
        <div className="footer-breath-wave wave-a"></div>
        <div className="footer-breath-wave wave-b"></div>
      </div>

      {/* Floating Particles */}
      <div className="footer-particles">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="footer-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `radial-gradient(circle, rgba(212, 165, 116, ${0.05 + Math.random() * 0.08}), transparent)`,
            }}
          />
        ))}
      </div>

      <div className="footer-container">
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="footer-logo-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="footer-logo-svg">
                  <circle cx="12" cy="12" r="10" strokeWidth="1.2" />
                  <path d="M12 6v12M6 12h12" strokeWidth="1.2" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="3" strokeWidth="1" />
                </svg>
              </span>
              <span className="footer-logo-text">
                Anbu<span className="footer-logo-accent">arasan</span>
              </span>
            </a>
            <div className="footer-brand-divider"></div>
            <p className="footer-desc">
              Transforming lives through awareness, discipline, and purpose. 
              Join a global community of seekers and achievers.
            </p>
            <div className="footer-brand-symbols">
              <span className="footer-brand-symbol">✦</span>
              <span className="footer-brand-symbol">◈</span>
              <span className="footer-brand-symbol">⬡</span>
            </div>
          </div>

          {/* Links Grid */}
          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h4 className="footer-links-title">
                <span className="footer-links-title-symbol">◈</span>
                Programs
              </h4>
              <ul>
                {footerLinks.programs.map((link, i) => (
                  <li key={i}>
                    <a href={link.path}>
                      <span className="footer-link-dot"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-links-title">
                <span className="footer-links-title-symbol">✦</span>
                Explore
              </h4>
              <ul>
                {footerLinks.explore.map((link, i) => (
                  <li key={i}>
                    <a href={link.path}>
                      <span className="footer-link-dot"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-links-title">
                <span className="footer-links-title-symbol">⬡</span>
                Connect
              </h4>
              <ul>
                {footerLinks.connect.map((link, i) => (
                  <li key={i}>
                    <a href={link.path}>
                      <span className="footer-link-dot"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span className="footer-bottom-copy">© {currentYear} Anbuarasan.</span>
            <span className="footer-bottom-text">All rights reserved.</span>
          </div>
          
          <div className="footer-bottom-center">
            <span className="footer-bottom-symbol">⬡</span>
          </div>

          <div className="footer-bottom-right">
            <span className="footer-bottom-text">Built with purpose</span>
            <span className="footer-bottom-divider">·</span>
            <span className="footer-bottom-text">Transforming lives</span>
            <span className="footer-bottom-divider">·</span>
            <span className="footer-bottom-text footer-bottom-highlight">Conscious living</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;