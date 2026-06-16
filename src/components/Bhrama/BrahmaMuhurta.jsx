// ============================================
// BRAHMA MUHURTA - ATHMA SOUL THEME (LIGHT COSMIC VERSION)
// Light theme with universe-inspired cosmic effects
// Celestial animations, deep parallax, soul-connecting
// ============================================
import "./BrahmaMuhurta.css";
import { useEffect, useRef, useState } from "react";
import f1 from "../../assets/f1.png";

function BrahmaMuhurta() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) videoRef.current.play().catch(() => {});
        }
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const calcParallax = (depth, extraY = 0) => {
    if (!sectionRef.current) return {};
    const rect = sectionRef.current.getBoundingClientRect();
    return {
      transform: `translate3d(${(mousePos.x - rect.left - rect.width / 2) * depth}px, ${(mousePos.y - rect.top - rect.height / 2) * depth + scrollY * depth * 0.4 + extraY}px, 0)`,
    };
  };

  const keyHighlights = [
    { symbol: "✦", title: "Stillness & Silence", desc: "Experience the profound power of morning stillness" },
    { symbol: "◈", title: "Global Community", desc: "Join thousands across 50+ countries in unified practice" },
    { symbol: "⬡", title: "Discipline & Growth", desc: "Build unshakeable discipline through daily commitment" },
    { symbol: "⟐", title: "Inner Clarity", desc: "Begin each day with crystal clear purpose and focus" },
  ];

  const programFeatures = [
    { label: "4:00 AM – 6:00 AM IST", icon: "☀" },
    { label: "Free • Open to Everyone", icon: "◈" },
    { label: "Online via Zoom", icon: "⟐" },
    { label: "No Religion • No Rituals", icon: "✦" },
  ];

  return (
    <section className="brahma" ref={sectionRef}>
      {/* Cosmic Background */}
      <div className="brahma-bg">
        <video ref={videoRef} className="brahma-bg-video" muted loop playsInline preload="auto"
          poster="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80">
          <source src="https://www.pexels.com/download/video/10638259/" type="video/mp4" />
        </video>
        <div className="brahma-bg-overlay"></div>
        <div className="brahma-bg-gradient"></div>
      </div>

      {/* Celestial Glows - Light Theme */}
      <div className="brahma-celestial">
        <div className="brahma-glow brahma-glow-1"></div>
        <div className="brahma-glow brahma-glow-2"></div>
        <div className="brahma-glow brahma-glow-3"></div>
        <div className="brahma-glow brahma-glow-4"></div>
        <div className="brahma-glow brahma-glow-5"></div>
        <div className="brahma-glow brahma-glow-6"></div>
      </div>

      {/* Cosmic Rays */}
      <div className="brahma-rays">
        <div className="brahma-ray brahma-ray-1"></div>
        <div className="brahma-ray brahma-ray-2"></div>
        <div className="brahma-ray brahma-ray-3"></div>
        <div className="brahma-ray brahma-ray-4"></div>
        <div className="brahma-ray brahma-ray-5"></div>
      </div>

      {/* Breath Waves */}
      <div className="brahma-breath-waves">
        <div className="brahma-breath-wave wave-a"></div>
        <div className="brahma-breath-wave wave-b"></div>
        <div className="brahma-breath-wave wave-c"></div>
        <div className="brahma-breath-wave wave-d"></div>
      </div>

      {/* Starfield - Light theme stars */}
      <div className="brahma-starfield">
        {[...Array(100)].map((_, i) => (
          <span
            key={i}
            className="brahma-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${3 + Math.random() * 7}s`,
              width: `${0.5 + Math.random() * 3}px`,
              height: `${0.5 + Math.random() * 3}px`,
              opacity: `${0.1 + Math.random() * 0.4}`,
            }}
          />
        ))}
      </div>

      {/* Floating Gold Dust */}
      <div className="brahma-dust">
        {[...Array(30)].map((_, i) => (
          <span
            key={i}
            className="brahma-dust-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 15}s`,
              opacity: `${0.02 + Math.random() * 0.04}`,
              height: `${15 + Math.random() * 30}px`,
            }}
          />
        ))}
      </div>

      {/* Floating Cosmic Orbs */}
      <div className="brahma-orbs">
        <div className="brahma-orb brahma-orb-1" style={calcParallax(0.015, -50)}></div>
        <div className="brahma-orb brahma-orb-2" style={calcParallax(0.02, 30)}></div>
        <div className="brahma-orb brahma-orb-3" style={calcParallax(0.01, -20)}></div>
        <div className="brahma-orb brahma-orb-4" style={calcParallax(0.018, 10)}></div>
      </div>

      <div className="brahma-container">
        <div className={`brahma-layout ${isVisible ? 'brahma-revealed' : ''}`}>
          
          {/* LEFT COLUMN - Content */}
          <div className="brahma-left" style={calcParallax(0.008)}>
            <div className="brahma-left-content">
              {/* Cosmic Badge */}
              <div className="brahma-badge">
                <span className="brahma-badge-line"></span>
                <span className="brahma-badge-text">✦ Cosmic Morning Practice</span>
                <span className="brahma-badge-line"></span>
              </div>

              {/* Title */}
              <h1 className="brahma-heading">
                <span className="brahma-heading-line">The most powerful</span>
                <span className="brahma-heading-line">
                  <span className="brahma-heading-emphasis">two hours</span>
                  <span className="brahma-heading-text"> of your day</span>
                </span>
              </h1>

              {/* Divider */}
              <div className="brahma-divider">
                <span></span>
                <span className="brahma-divider-symbol">✦</span>
                <span></span>
              </div>

              {/* Description */}
              <p className="brahma-description">
                Every morning before sunrise, souls across the world come together 
                in stillness. Not bound by any religion or ritual — simply united by the 
                intention to begin each day with <span className="brahma-description-highlight">clarity</span>, 
                <span className="brahma-description-highlight"> discipline</span>, and 
                <span className="brahma-description-highlight"> purpose</span>.
              </p>

              {/* Program Features */}
              <div className="brahma-features">
                {programFeatures.map((feature, i) => (
                  <div key={i} className="brahma-feature-item" style={{ animationDelay: `${0.2 + i * 0.06}s` }}>
                    <span className="brahma-feature-icon">{feature.icon}</span>
                    <span className="brahma-feature-label">{feature.label}</span>
                  </div>
                ))}
              </div>

              {/* Key Highlights */}
              <div className="brahma-highlights">
                {keyHighlights.map((h, i) => (
                  <div key={i} className="brahma-highlight-item" style={{ animationDelay: `${0.4 + i * 0.08}s` }}>
                    <span className="brahma-highlight-symbol">{h.symbol}</span>
                    <div>
                      <span className="brahma-highlight-title">{h.title}</span>
                      <span className="brahma-highlight-desc">{h.desc}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button className="brahma-cta">
                <span>Begin Your Morning Practice</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              {/* Quote Footer */}
              <div className="brahma-quote-footer">
                <span className="brahma-quote-symbol">◈</span>
                <span>"No rituals. No religion. Just you and the morning."</span>
                <span className="brahma-quote-symbol">◈</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN - Cosmic Visual */}
          <div className="brahma-right">
            <div className="brahma-visual" style={calcParallax(0.02)}>
              {/* Main Image with Cosmic Frame */}
              <div className="brahma-image-container">
                <div className="brahma-image-frame">
                  <div className="brahma-image-glow"></div>
                  <div className="brahma-image-aura"></div>
                  <img 
                    src={f1} 
                    alt="Early morning meditation practice"
                    className="brahma-image"
                  />
                  <div className="brahma-image-overlay"></div>
                </div>

                {/* Cosmic Accents */}
                <div className="brahma-accent brahma-accent-1">
                  <span>☉</span>
                </div>
                <div className="brahma-accent brahma-accent-2">
                  <span>☽</span>
                </div>
                <div className="brahma-accent brahma-accent-3">
                  <span>✦</span>
                </div>
                <div className="brahma-accent brahma-accent-4">
                  <span>◈</span>
                </div>

                {/* Orbiting Rings */}
                <div className="brahma-orbit brahma-orbit-1"></div>
                <div className="brahma-orbit brahma-orbit-2"></div>
                <div className="brahma-orbit brahma-orbit-3"></div>
                
                {/* Orbiting Particles */}
                <div className="brahma-orbiter brahma-orbiter-1"></div>
                <div className="brahma-orbiter brahma-orbiter-2"></div>
                <div className="brahma-orbiter brahma-orbiter-3"></div>
                <div className="brahma-orbiter brahma-orbiter-4"></div>
              </div>

              {/* Floating Stat Cards */}
              <div className="brahma-stats">
                <div className="brahma-stat-card" style={{ animationDelay: '0.3s' }}>
                  <span className="brahma-stat-number">50+</span>
                  <span className="brahma-stat-label">Countries</span>
                </div>
                <div className="brahma-stat-card" style={{ animationDelay: '0.5s' }}>
                  <span className="brahma-stat-number">1000+</span>
                  <span className="brahma-stat-label">Daily Practitioners</span>
                </div>
                <div className="brahma-stat-card" style={{ animationDelay: '0.7s' }}>
                  <span className="brahma-stat-number">12+</span>
                  <span className="brahma-stat-label">Years of Practice</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BrahmaMuhurta;