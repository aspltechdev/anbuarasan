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
        <div className="footer-main">
          <div className="footer-brand">
            <a href="/" className="footer-logo">
              <span className="footer-logo-icon">☉</span>
              <span className="footer-logo-text">
                Anbu<span className="footer-logo-accent">arasan</span>
              </span>
            </a>
            <p className="footer-desc">
              Transforming lives through awareness, discipline, and purpose. 
              Join a global community of seekers and achievers.
            </p>
          </div>

          <div className="footer-links-grid">
            <div className="footer-links-col">
              <h4 className="footer-links-title">Programs</h4>
              <ul>
                {footerLinks.programs.map((link, i) => (
                  <li key={i}><a href={link.path}>{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-links-title">Explore</h4>
              <ul>
                {footerLinks.explore.map((link, i) => (
                  <li key={i}><a href={link.path}>{link.name}</a></li>
                ))}
              </ul>
            </div>

            <div className="footer-links-col">
              <h4 className="footer-links-title">Connect</h4>
              <ul>
                {footerLinks.connect.map((link, i) => (
                  <li key={i}><a href={link.path}>{link.name}</a></li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <span>© {currentYear} Anbuarasan. All rights reserved.</span>
          </div>
          <div className="footer-bottom-right">
            <span>Built with purpose</span>
            <span className="footer-bottom-divider">·</span>
            <span>Transforming lives</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;