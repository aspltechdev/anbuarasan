// ============================================
// FOOTER - WARM EARTHY DARK THEME
// Simple, Clean, Elegant Footer
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
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-main">
          {/* Brand Section */}
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="footer-logo-icon">◈</span>
              <span className="footer-logo-text">
                Anb<span className="footer-logo-accent">arasan</span>
              </span>
            </a>
            <p className="footer-desc">
              Transforming lives through consciousness, wealth, and wellness.
            </p>
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Twitter">Twitter</a>
              <a href="#" className="footer-social-link" aria-label="Instagram">Instagram</a>
              <a href="#" className="footer-social-link" aria-label="YouTube">YouTube</a>
            </div>
          </div>

          {/* Links Grid */}
          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h4 className="footer-links-title">Programs</h4>
              <ul>
                {footerLinks.programs.map((link, i) => (
                  <li key={i}>
                    <a href={link.path}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-links-title">Explore</h4>
              <ul>
                {footerLinks.explore.map((link, i) => (
                  <li key={i}>
                    <a href={link.path}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-links-title">Connect</h4>
              <ul>
                {footerLinks.connect.map((link, i) => (
                  <li key={i}>
                    <a href={link.path}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <span className="footer-bottom-text">© {currentYear} Anbuarasan. All rights reserved.</span>
          <span className="footer-bottom-divider">·</span>
          <span className="footer-bottom-text">Crafted by ASPL</span>
          <span className="footer-bottom-divider">·</span>
          <span className="footer-bottom-text">Built with purpose</span>
          <span className="footer-bottom-divider">·</span>
          <span className="footer-bottom-highlight">Conscious living ✦</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;