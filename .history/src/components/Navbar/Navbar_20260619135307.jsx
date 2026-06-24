// Navbar.jsx
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
  { href: "#home", label: "Home", icon: "✦" },
  { href: "#about", label: "About", icon: "◆" },
  { href: "#testimonials", label: "Testimonials", icon: "◆" },
  { href: "#contact", label: "Contact", icon: "◇" },
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
      className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}
    >
      {/* Ambient glow effect */}
      <div className="navbar-ambient-glow"></div>
      
      <div className="navbar-container">
        {/* Logo / Brand */}
        <a 
          href="#home" 
          className="navbar-brand"
          onClick={(e) => handleNavClick(e, "#home")}
        >
          <div className="navbar-brand-icon-wrapper">
            <div className="brand-icon-glow"></div>
            <svg viewBox="0 0 40 40" fill="none" className="brand-svg">
              {/* Outer ring */}
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5" className="brand-outer-ring" />
              {/* Inner geometric pattern */}
              <path d="M20 2L35 12V28L20 38L5 28V12L20 2Z" stroke="currentColor" strokeWidth="1" className="brand-hexagon" />
              <circle cx="20" cy="20" r="6" stroke="currentColor" strokeWidth="1.5" className="brand-center" />
              {/* Energy dots */}
              <circle cx="20" cy="8" r="2" fill="currentColor" className="brand-dot brand-dot-1" />
              <circle cx="30" cy="14" r="2" fill="currentColor" className="brand-dot brand-dot-2" />
              <circle cx="30" cy="26" r="2" fill="currentColor" className="brand-dot brand-dot-3" />
              <circle cx="20" cy="32" r="2" fill="currentColor" className="brand-dot brand-dot-4" />
              <circle cx="10" cy="26" r="2" fill="currentColor" className="brand-dot brand-dot-5" />
              <circle cx="10" cy="14" r="2" fill="currentColor" className="brand-dot brand-dot-6" />
            </svg>
          </div>
          <span className="navbar-brand-text">
            <span className="brand-first">Anbu</span>
            <span className="brand-separator">·</span>
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
                  <span className="navbar-link-icon">{item.icon}</span>
                  <span className="navbar-link-text">{item.label}</span>
                  {activeSection === item.href.replace("#", "") && (
                    <span className="navbar-link-glow"></span>
                  )}
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
            <span className="navbar-cta-glow"></span>
            <span className="navbar-cta-text">Begin Journey</span>
            <span className="navbar-cta-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 7l5 5-5 5M6 12h12" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
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
      <div 
        className={`navbar-mobile-overlay ${isMobileMenuOpen ? 'mobile-overlay-active' : ''}`} 
        onClick={() => setIsMobileMenuOpen(false)} 
      />

      {/* Mobile Menu */}
      <div className={`navbar-mobile-menu ${isMobileMenuOpen ? 'mobile-menu-active' : ''}`}>
        {/* Decorative particles */}
        <div className="mobile-menu-particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="mobile-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>

        <div className="mobile-menu-header">
          <div className="mobile-brand-wrapper">
            <span className="mobile-brand-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="mobile-brand-svg">
                <circle cx="12" cy="12" r="10" strokeWidth="1.2" />
                <path d="M12 6v12M6 12h12" strokeWidth="1.2" strokeLinecap="round" />
                <circle cx="12" cy="12" r="3" strokeWidth="1" />
              </svg>
            </span>
            <span className="mobile-brand-text">
              <span className="mobile-brand-first">Anbu</span>
              <span className="mobile-brand-last">Arasan</span>
            </span>
          </div>
          <button 
            className="mobile-menu-close"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="mobile-menu-divider"></div>

        <nav className="mobile-menu-nav">
          <ul className="mobile-menu-list">
            {navItems.map((item, index) => (
              <li 
                key={item.href} 
                className={`mobile-menu-item ${activeSection === item.href.replace("#", "") ? 'mobile-item-active' : ''}`}
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <a
                  href={item.href}
                  className="mobile-menu-link"
                  onClick={(e) => handleNavClick(e, item.href)}
                >
                  <span className="mobile-link-number">0{index + 1}</span>
                  <span className="mobile-link-icon">{item.icon}</span>
                  <span className="mobile-link-label">{item.label}</span>
                  <span className="mobile-link-arrow">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {activeSection === item.href.replace("#", "") && (
                    <span className="mobile-link-active-glow"></span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-footer">
          <div className="mobile-footer-line"></div>
          <div className="mobile-footer-content">
            <p className="mobile-footer-text">
              Transforming Lives Through
            </p>
            <p className="mobile-footer-subtext">
              Consciousness, Wealth & Wellness
            </p>
          </div>
          <div className="mobile-footer-social">
            <a href="#" className="mobile-social-link">
              <span className="social-dot"></span>
              Twitter
            </a>
            <a href="#" className="mobile-social-link">
              <span className="social-dot"></span>
              Instagram
            </a>
            <a href="#" className="mobile-social-link">
              <span className="social-dot"></span>
              YouTube
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;