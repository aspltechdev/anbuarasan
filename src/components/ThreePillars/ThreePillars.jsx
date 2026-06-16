// ============================================
// THREE PILLARS - ATHMA SOUL CONNECTION THEME
// Light & soulful theme with emotional warmth
// ============================================
import "./ThreePillars.css";
import { useEffect, useRef, useState } from "react";

function ThreePillars() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [activePillar, setActivePillar] = useState(null);
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const rect = parallaxRef.current.getBoundingClientRect();
        const scrolled = window.scrollY - rect.top;
        setScrollY(scrolled);
      }
    };

    const handleMouseMove = (e) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 2 - 1,
          y: ((e.clientY - rect.top) / rect.height) * 2 - 1,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const pillars = [
    {
      icon: (
        <svg viewBox="0 0 80 80" className="pillar-svg-icon">
          <defs>
            <radialGradient id="glow1" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d4a574" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#d4a574" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="35" fill="url(#glow1)"/>
          <circle cx="40" cy="40" r="28" fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.2"/>
          <circle cx="40" cy="40" r="22" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.4"/>
          <circle cx="40" cy="40" r="15" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6"/>
          <circle cx="40" cy="40" r="8" fill="none" stroke="currentColor" strokeWidth="1.5" opacity="0.8"/>
          <circle cx="40" cy="40" r="3" fill="currentColor" opacity="0.9"/>
          {[...Array(12)].map((_, i) => (
            <line key={i}
              x1="40" y1="5" x2="40" y2="15"
              stroke="currentColor" strokeWidth="0.8" opacity="0.3"
              transform={`rotate(${i * 30} 40 40)`}
            />
          ))}
        </svg>
      ),
      title: "Inner Awakening",
      subtitle: "Journey Within",
      desc: "Discover the infinite depths of your being. Connect with your inner wisdom through ancient practices of self-awareness and mindful presence.",
      color: "#d4a574",
      gradient: "linear-gradient(135deg, #fdf6f0 0%, #f5e6d9 50%, #e8d0c0 100%)",
      glowColor: "rgba(212, 165, 116, 0.2)",
      accentColor: "#b8835a",
      essence: "Know Thy Self",
      breathColor: "#f5e6d9"
    },
    {
      icon: (
        <svg viewBox="0 0 80 80" className="pillar-svg-icon">
          <defs>
            <radialGradient id="glow2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c9b8a0" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#c9b8a0" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="35" fill="url(#glow2)"/>
          {[...Array(8)].map((_, i) => (
            <path key={i}
              d={`M40 40 L${40 + 28 * Math.cos(i * Math.PI / 4)} ${40 + 28 * Math.sin(i * Math.PI / 4)}`}
              stroke="currentColor" strokeWidth="0.8" opacity="0.3"
            />
          ))}
          <polygon points="40,12 55,35 50,55 30,55 25,35" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.6"/>
          <polygon points="40,22 48,35 44,48 36,48 32,35" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
          <circle cx="40" cy="40" r="4" fill="currentColor" opacity="0.9"/>
        </svg>
      ),
      title: "Conscious Abundance",
      subtitle: "Flow of Prosperity",
      desc: "Align with the natural flow of abundance. Transform your relationship with prosperity through mindful awareness and balanced life principles.",
      color: "#c9b8a0",
      gradient: "linear-gradient(135deg, #f8f2ea 0%, #ede3d6 50%, #dccfc0 100%)",
      glowColor: "rgba(201, 184, 160, 0.2)",
      accentColor: "#a8947a",
      essence: "Embrace Abundance",
      breathColor: "#ede3d6"
    },
    {
      icon: (
        <svg viewBox="0 0 80 80" className="pillar-svg-icon">
          <defs>
            <radialGradient id="glow3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#d5c4b0" stopOpacity="0.3"/>
              <stop offset="100%" stopColor="#d5c4b0" stopOpacity="0"/>
            </radialGradient>
          </defs>
          <circle cx="40" cy="40" r="35" fill="url(#glow3)"/>
          {[...Array(6)].map((_, i) => (
            <ellipse key={i}
              cx="40" cy="40" rx="30" ry="12"
              fill="none" stroke="currentColor" strokeWidth="0.8" opacity="0.3"
              transform={`rotate(${i * 30} 40 40)`}
            />
          ))}
          <circle cx="40" cy="40" r="18" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.5"/>
          <circle cx="40" cy="40" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" opacity="0.7"/>
          <circle cx="40" cy="40" r="4" fill="currentColor" opacity="0.9"/>
        </svg>
      ),
      title: "Holistic Harmony",
      subtitle: "Mind-Body-Spirit",
      desc: "Nurture the sacred connection between mind, body, and spirit. Achieve vibrant wellbeing through integrated practices of balance and natural living.",
      color: "#d5c4b0",
      gradient: "linear-gradient(135deg, #faf3ec 0%, #efe5d9 50%, #e2d5c8 100%)",
      glowColor: "rgba(213, 196, 176, 0.2)",
      accentColor: "#b8a692",
      essence: "Harmonize Being",
      breathColor: "#efe5d9"
    },
  ];

  return (
    <section className="athma-section" ref={sectionRef}>
      {/* Soul Atmosphere Background */}
      <div className="soul-atmosphere" ref={parallaxRef}>
        {/* Deep Breath Waves */}
        <div className="breath-waves" style={{ transform: `translateY(${scrollY * 0.08}px)` }}>
          <div className="breath-wave wave-1"></div>
          <div className="breath-wave wave-2"></div>
          <div className="breath-wave wave-3"></div>
        </div>

        {/* Floating Soul Particles - Warm tones */}
        <div className="soul-particles" style={{ transform: `translate(${mousePosition.x * 25}px, ${mousePosition.y * 25}px)` }}>
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="soul-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 8}s`,
                animationDuration: `${4 + Math.random() * 6}s`,
                background: `radial-gradient(circle, rgba(212, 165, 116, ${0.08 + Math.random() * 0.2}), transparent)`,
                width: `${3 + Math.random() * 6}px`,
                height: `${3 + Math.random() * 6}px`,
              }}
            ></div>
          ))}
        </div>

        {/* Energy Streams */}
        <div className="energy-streams">
          <svg viewBox="0 0 100 100" className="streams-svg">
            {[...Array(5)].map((_, i) => (
              <path
                key={i}
                d={`M${-10 + i * 30} 50 Q${20 + i * 15} ${20 + i * 10}, ${50 + i * 20} 50 T${110} 50`}
                fill="none"
                stroke="rgba(212, 165, 116, 0.06)"
                strokeWidth="0.5"
              >
                <animate
                  attributeName="d"
                  dur={`${8 + i * 2}s`}
                  repeatCount="indefinite"
                  values={`
                    M${-10 + i * 30} 50 Q${20 + i * 15} ${20 + i * 10}, ${50 + i * 20} 50 T${110} 50;
                    M${-10 + i * 30} 50 Q${20 + i * 15} ${70 - i * 10}, ${50 + i * 20} 50 T${110} 50;
                    M${-10 + i * 30} 50 Q${20 + i * 15} ${20 + i * 10}, ${50 + i * 20} 50 T${110} 50
                  `}
                />
              </path>
            ))}
          </svg>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="athma-container">
        {/* Header Section */}
        <div className={`athma-header ${isVisible ? "visible" : ""}`}>
          <div className="soul-badge">
            <span className="badge-breath left"></span>
            <span className="badge-text">The Inner Journey</span>
            <span className="badge-breath right"></span>
          </div>

          <h2 className="athma-title">
            <span className="title-whisper">Discover Your</span>
            <span className="title-soul">
              <span className="soul-word">True</span>
              <span className="soul-connector">
                <svg viewBox="0 0 24 24" className="connector-svg">
                  <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.4"/>
                  <circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.2"/>
                </svg>
              </span>
              <span className="soul-word">Essence</span>
            </span>
          </h2>

          <p className="athma-subtitle">
            Three sacred pathways to reconnect with your deepest self and unlock the wisdom that resides within
          </p>
        </div>

        {/* Pillars Grid */}
        <div className={`athma-grid ${isVisible ? "visible" : ""}`}>
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`athma-card ${activePillar === index ? 'active' : ''}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActivePillar(index)}
              onMouseLeave={() => setActivePillar(null)}
            >
              <div
                className="card-soul-layer"
                style={{
                  transform: `translate(${mousePosition.x * (12 + index * 6)}px, ${
                    mousePosition.y * (12 + index * 6)
                  }px)`,
                }}
              >
                {/* Breathing Aura */}
                <div className="breathing-aura" style={{ 
                  background: `radial-gradient(circle at center, ${pillar.glowColor}, transparent 70%)` 
                }}>
                  <div className="aura-ring aura-ring-1" style={{ borderColor: pillar.color }}></div>
                  <div className="aura-ring aura-ring-2" style={{ borderColor: pillar.color }}></div>
                </div>

                {/* Soul Portal (Icon Area) */}
                <div className="soul-portal">
                  <div className="portal-ripples">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="portal-ripple" style={{ 
                        borderColor: pillar.color,
                        animationDelay: `${i * 0.5}s`
                      }}></div>
                    ))}
                  </div>
                  <div className="portal-icon" style={{ color: pillar.color }}>
                    {pillar.icon}
                  </div>
                  <div className="portal-core" style={{ background: pillar.glowColor }}></div>
                </div>

                {/* Content Area */}
                <div className="card-essence">
                  <span className="essence-subtitle" style={{ color: pillar.accentColor }}>
                    {pillar.subtitle}
                  </span>
                  <h3 className="essence-title">{pillar.title}</h3>
                  
                  {/* Energy Divider */}
                  <div className="energy-divider">
                    <span className="divider-dot" style={{ background: pillar.color }}></span>
                    <span className="divider-line" style={{ background: `linear-gradient(90deg, transparent, ${pillar.color}40, ${pillar.color}80, ${pillar.color}40, transparent)` }}></span>
                    <span className="divider-dot" style={{ background: pillar.color }}></span>
                  </div>
                  
                  <p className="essence-description">{pillar.desc}</p>

                  {/* Soul Connection Points */}
                  <div className="soul-connections">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="connection-point" style={{ 
                        background: pillar.color,
                        animationDelay: `${i * 0.3}s`
                      }}></div>
                    ))}
                  </div>

                  {/* Essence Mantra */}
                  <div className="essence-mantra">
                    <span className="mantra-symbol" style={{ color: pillar.color }}>○</span>
                    <span className="mantra-text" style={{ color: pillar.accentColor }}>
                      {pillar.essence}
                    </span>
                    <span className="mantra-symbol" style={{ color: pillar.color }}>○</span>
                  </div>
                </div>

                {/* Card Glow Border */}
                <div className="card-glow-border" style={{ 
                  borderColor: `${pillar.color}20`,
                  boxShadow: activePillar === index ? `inset 0 0 40px ${pillar.glowColor}` : 'none'
                }}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Soul Connection Footer */}
        <div className={`soul-footer ${isVisible ? "visible" : ""}`}>
          <div className="footer-wisdom">
            <div className="wisdom-line">
              <svg viewBox="0 0 300 40" className="wisdom-svg">
                <path 
                  d="M0 20 Q75 5, 150 20 T300 20" 
                  fill="none" 
                  stroke="rgba(212, 165, 116, 0.2)" 
                  strokeWidth="0.8"
                >
                  <animate 
                    attributeName="d" 
                    values="M0 20 Q75 5, 150 20 T300 20;M0 20 Q75 35, 150 20 T300 20;M0 20 Q75 5, 150 20 T300 20" 
                    dur="8s" 
                    repeatCount="indefinite"
                  />
                </path>
                <circle cx="0" cy="20" r="2" fill="rgba(212, 165, 116, 0.3)"/>
                <circle cx="150" cy="20" r="3" fill="rgba(212, 165, 116, 0.5)">
                  <animate attributeName="r" values="3;4;3" dur="3s" repeatCount="indefinite"/>
                </circle>
                <circle cx="300" cy="20" r="2" fill="rgba(212, 165, 116, 0.3)"/>
              </svg>
            </div>
            <p className="wisdom-text">
              The journey inward is the beginning of all transformation
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreePillars;