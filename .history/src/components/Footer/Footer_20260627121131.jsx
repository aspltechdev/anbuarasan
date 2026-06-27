// ============================================
// FOOTER - WARM EARTHY DARK THEME
// Simple, Clean, Elegant Footer
// ============================================
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    programs: [
      { name: "Athma Connect", path: "/#athma-connect" },
      { name: "Brahma Muhurta", path: "/#BrahmaMuhurta" },
      { name: "Thought Process Coaching", path: "/#Finance" },
      { name: "Vibrance Intelligence", path: "/#athma-connect" },
    ],
    explore: [
      { name: "About", path: "/#about" },
      { name: "Financial Awareness", path: "/#financial-awareness" },
      { name: "Digital Assets", path: "/#financial-awareness" },
      { name: "Wellness Solutions", path: "/#wellness" },
    ],
    connect: [
      { name: "Contact", path: "/#contact" },
      { name: "Services", path: "/services" },
      { name: "Products", path: "/products" },
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
              <a
                href="https://www.linkedin.com/company/anbarasan-official/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                LinkedIn
              </a>

              <a
                href="https://www.instagram.com/rf3_anbu/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                Instagram
              </a>

              <a
                href="https://www.facebook.com/people/Anbarasan/61591229948970/"
                className="footer-social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                Facebook
              </a>
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
          <span className="footer-bottom-text">Crafted by Aspl Tech Solutions Pvt Ltd</span>
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