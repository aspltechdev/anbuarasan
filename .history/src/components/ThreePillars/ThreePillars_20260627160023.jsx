import "./ThreePillars.css";
import { useEffect, useRef, useState } from "react";
import pillarsBg from "../../assets/threep.png";
import pillarImg1 from "../../assets/threep1.png";
import pillarImg2 from "../../assets/threep2.png";
import pillarImg3 from "../../assets/threep.png";

function ThreePillars() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [activePillar, setActivePillar] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let smoothX = 0.5, smoothY = 0.5;
    let rafId;

    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) {
        smoothX = (e.clientX - rect.left) / rect.width;
        smoothY = (e.clientY - rect.top) / rect.height;
      }
    };

    const animate = () => {
      setMousePos(prev => ({
        x: prev.x + (smoothX - prev.x) * 0.04,
        y: prev.y + (smoothY - prev.y) * 0.04
      }));
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Single shared background image for the whole section (from src/assets)
  const sectionBgImage = pillarsBg;

  const pillars = [
    {
      icon: "◈",
      title: "Inner Awakening",
      subtitle: "Journey Within",
      desc: "Discover the infinite depths of your being. Connect with your inner wisdom through practices of self-awareness and mindful presence.",
      color: "#e8c97a",
      accentColor: "#a8762e",
      glowColor: "rgba(232, 201, 122, 0.25)",
      essence: "Know The Self",
      features: ["Self Awareness", "Mindful Presence", "Inner Peace"],
      bgImage: pillarImg1,
    },
    {
      icon: "✦",
      title: "Conscious Abundance",
      subtitle: "Flow of Prosperity",
      desc: "Align with the natural flow of abundance. Transform your relationship with prosperity through mindful awareness and balanced life principles.",
      color: "#e8c97a",
      accentColor: "#a8762e",
      glowColor: "rgba(232, 201, 122, 0.25)",
      essence: "Embrace Abundance",
      features: ["Financial Wisdom", "Wealth Mindset", "Prosperity Flow"],
      bgImage: pillarImg2,
    },
    {
      icon: "⟐",
      title: "Holistic Wellness",
      subtitle: "Mind-Body-Spirit",
      desc: "Nurture the sacred connection between mind, body, and spirit. Achieve vibrant wellbeing through integrated practices of balance and natural living.",
      color: "#e8c97a",
      accentColor: "#a8762e",
      glowColor: "rgba(232, 201, 122, 0.25)",
      essence: "Harmonize Being",
      features: ["Natural Living", "Vitality & Health", "Life Balance"],
      bgImage: pillarImg3,
    },
  ];

  return (
    <section className="pillars" ref={sectionRef} id="three-pillars">
      {/* Background */}
      <div className="pillars-bg">
        <div
          className="pillars-bg-image"
          style={{ backgroundImage: `url(${sectionBgImage})` }}
        ></div>
        <div className="pillars-bg-overlay"></div>
        <div className="pillars-bg-gradient"></div>
        <div className="pillars-bg-grid"></div>
        <div className="pillars-bg-pattern"></div>
      </div>

      {/* Ambient Glows */}
      <div className="pillars-ambient">
        <div className="pillars-glow pillars-glow-1"></div>
        <div className="pillars-glow pillars-glow-2"></div>
        <div className="pillars-glow pillars-glow-3"></div>
      </div>

      {/* Geometry */}
      <div className="pillars-geometry">
        <div className="pillars-geo-ring pillars-geo-ring-1"></div>
        <div className="pillars-geo-ring pillars-geo-ring-2"></div>
        <div className="pillars-geo-ring pillars-geo-ring-3"></div>
      </div>

      {/* Particles */}
      <div className="pillars-particles">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="pillars-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 12}s`,
              width: `${1.5 + Math.random() * 2}px`,
              height: `${1.5 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      <div className="pillars-container">
        {/* Header */}
        <div className={`pillars-header ${isVisible ? "visible" : ""}`}>
          <div className="pillars-badge">
            <span className="pillars-badge-icon">◈</span>
            <span>The Three Pillars</span>
          </div>

          <h2 className="pillars-title">
            Discover Your{" "}
            <span className="pillars-title-emphasis">True Essence</span>
          </h2>

          <div className="pillars-divider">
            <span className="pillars-divider-line"></span>
            <span className="pillars-divider-icon">✦</span>
            <span className="pillars-divider-line"></span>
          </div>

          <p className="pillars-subtitle">
            Three sacred pathways to reconnect with your deepest self and unlock the wisdom that resides within
          </p>
        </div>

        {/* Pillars Grid */}
        <div className={`pillars-grid ${isVisible ? "visible" : ""}`}>
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`pillar-card ${activePillar === index ? "active" : ""}`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
              onMouseEnter={() => setActivePillar(index)}
              onMouseLeave={() => setActivePillar(null)}
            >
              {/* Card Background Image */}
              <div
                className="pillar-bg-image"
                style={{ backgroundImage: `url(${pillar.bgImage})` }}
              ></div>
              <div className="pillar-bg-overlay"></div>

              {/* Hover Colour Tint */}
              <div
                className="pillar-card-glow"
                style={{
                  background: `radial-gradient(circle at center, ${pillar.glowColor}, transparent 70%)`,
                  opacity: activePillar === index ? 0.5 : 0,
                }}
              ></div>

              {/* Gold Ornamental Border */}
              <div className="pillar-ornament-border">
                <span className="pillar-ornament-corner pillar-ornament-tl"></span>
                <span className="pillar-ornament-corner pillar-ornament-tr"></span>
                <span className="pillar-ornament-corner pillar-ornament-bl"></span>
                <span className="pillar-ornament-corner pillar-ornament-br"></span>
              </div>

              {/* Icon Area */}
              <div className="pillar-icon-wrapper">
                <div className="pillar-icon-ring" style={{ borderColor: pillar.color }}></div>
                <div className="pillar-icon-ring-2" style={{ borderColor: pillar.color }}></div>
                <div className="pillar-icon-mandala"></div>
                <span className="pillar-icon" style={{ color: pillar.color }}>{pillar.icon}</span>
              </div>

              {/* Content */}
              <div className="pillar-content">
                <span className="pillar-subtitle-text" style={{ color: pillar.accentColor }}>
                  {pillar.subtitle}
                </span>
                <h3 className="pillar-title-text">{pillar.title}</h3>

                {/* Divider */}
                <div className="pillar-content-divider">
                  <span className="pillar-content-dot" style={{ background: pillar.color }}></span>
                  <span className="pillar-content-line"></span>
                  <span className="pillar-content-dot" style={{ background: pillar.color }}></span>
                </div>

                <p className="pillar-description">{pillar.desc}</p>

                {/* Features */}
                <div className="pillar-features">
                  {pillar.features.map((feature, i) => (
                    <span key={i} className="pillar-feature">
                      <span className="pillar-feature-dot" style={{ background: pillar.color }}></span>
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Essence */}
                <div className="pillar-essence">
                  <span className="pillar-essence-icon" style={{ color: pillar.color }}>◈</span>
                  <span className="pillar-essence-text" style={{ color: pillar.accentColor }}>
                    {pillar.essence}
                  </span>
                  <span className="pillar-essence-icon" style={{ color: pillar.color }}>◈</span>
                </div>
              </div>

              {/* Border Glow */}
              <div
                className="pillar-border-glow"
                style={{
                  borderColor: activePillar === index ? `${pillar.color}70` : `${pillar.color}20`,
                  boxShadow: activePillar === index ? `0 0 40px ${pillar.glowColor}` : "none",
                }}
              ></div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className={`pillars-footer ${isVisible ? "visible" : ""}`}>
          <div className="pillars-footer-line"></div>
          <p className="pillars-footer-text">
            The journey inward is the beginning of all transformation
          </p>
          <div className="pillars-footer-line"></div>
        </div>
      </div>
    </section>
  );
}

export default ThreePillars;