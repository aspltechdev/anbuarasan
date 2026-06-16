// ============================================
// NAVBAR - ATHMA SOUL THEME
// Cinematic Navigation with Emotional Connection
// Elegant, smooth, and immersive
// ============================================
import "./Navbar.css";
import { useState, useEffect, useRef } from "react";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 200) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      
      setIsScrolled(currentScrollY > 50);
      
      const sections = ['home', 'about', 'services', 'products', 'testimonials', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 992) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#products", label: "Products" },
    { href: "#testimonials", label: "Testimonials" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);
    
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      setActiveSection(targetId);
    }
  };

  return (
    <header 
      ref={navbarRef}
      className={`navbar-header ${isScrolled ? 'navbar-scrolled' : ''} ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}
    >
      <div className="navbar-container">
        {/* Logo / Brand */}
        <a 
          href="#home" 
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <span className="navbar-brand-icon">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="brand-svg">
              <circle cx="12" cy="12" r="10" strokeWidth="1.2" />
              <path d="M12 6v12M6 12h12" strokeWidth="1.2" strokeLinecap="round" />
              <circle cx="12" cy="12" r="3" strokeWidth="1" />
            </svg>
          </span>
          <span className="navbar-brand-text">
            <span className="brand-first">Anbu</span>
            <span className="brand-last">Arasan</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav">
          <ul className="navbar-list">
            {navItems.map((item) => (
              <li key={item.href} className="navbar-item">
                <a
                  href={item.href}
                  className={`navbar-link ${activeSection === item.href.replace("#", "") ? 'navbar-link-active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="navbar-link-text">{item.label}</span>
                  <span className="navbar-link-indicator" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="navbar-actions">
          <a 
            href="#contact" 
            className="navbar-cta"
            onClick={(e) => handleNavClick(e, "#contact")}
          >
            <span className="navbar-cta-text">Get Started</span>
            <span className="navbar-cta-icon">→</span>
          </a>

          {/* Mobile Menu Toggle */}
          <button
            className={`navbar-mobile-toggle ${isMobileMenuOpen ? 'toggle-active' : ''}`}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span className="toggle-line toggle-line-1" />
            <span className="toggle-line toggle-line-2" />
            <span className="toggle-line toggle-line-3" />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'mobile-overlay-active' : ''}`} 
           onClick={() => setIsMobileMenuOpen(false)} 
      />

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        <div className="mobile-menu-header">
          <span className="mobile-menu-brand">
            <span className="mobile-brand-icon">✦</span>
            Anbu Arasan
          </span>
          <button 
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="mobile-menu-nav">
          <ul className="mobile-menu-list">
            {navItems.map((item, index) => (
              <li 
                key={item.href} 
                className="mobile-menu-item"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <a
                  href={item.href}
                  className={`mobile-menu-link ${activeSection === item.href.replace("#", "") ? 'mobile-link-active' : ''}`}
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="mobile-link-number">0{index + 1}</span>
                  <span className="mobile-link-label">{item.label}</span>
                  <span className="mobile-link-arrow">→</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <div className="mobile-footer-divider"></div>
          <p className="mobile-footer-text">
            Transforming Lives Through Spiritual &amp; Financial Wisdom
          </p>
          <div className="mobile-footer-social">
            <a href="#" className="mobile-social-link" aria-label="Twitter">TW</a>
            <a href="#" className="mobile-social-link" aria-label="Instagram">IG</a>
            <a href="#" className="mobile-social-link" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;