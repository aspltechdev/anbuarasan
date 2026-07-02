// BrahmaMuhurta.jsx
import "./BrahmaMuhurta.css";
import { useEffect, useRef, useState } from "react";
import f1 from "../../assets/f1.png";

function BrahmaMuhurta() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [breathPhase, setBreathPhase] = useState(0);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setBreathPhase(prev => (prev + 0.3) % 100);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const calcParallax = (depth, extraY = 0) => {
    if (!sectionRef.current) return {};
    const rect = sectionRef.current.getBoundingClientRect();
    return {
      transform: `translate3d(${(mousePos.x - rect.left - rect.width / 2) * depth}px, ${(mousePos.y - rect.top - rect.height / 2) * depth + scrollY * depth * 0.2 + extraY}px, 0)`,
    };
  };

  const programFeatures = [
    { label: "4:00 AM – 6:00 AM IST", icon: "☀" },
    { label: "Free • Open to Everyone", icon: "◈" },
    { label: "Online via Zoom", icon: "⟐" },
    { label: "Secular • Inclusive Practice", icon: "✦" },
  ];

  const kriyaSteps = [
    "Aum Chanting",
    "Programming Ourselves",
    "Energising Our Chakras",
    "Aura Expanding & Energising",
    "Breathing Practice with Visualisation",
    "Shree Suktham",
    "Water Prayer",
    "Scripture",
    "Group Prayer",
    "Vote of Thanks",
  ];

  const courses = [
    "Be a Wonderful Creator",
    "Kriya Tools & Tech",
    "Art of Attracting Money",
    "Law of Transmutation",
  ];

  return (
    <section className="brahma" ref={sectionRef}>
      <div className="brahma-bg-light">
        <div className="brahma-bg-gradient-light"></div>
        <div className="brahma-bg-grid-light"></div>
        <div className="brahma-bg-pattern-light"></div>
      </div>

      <div className="brahma-ambient-light">
        <div className="brahma-glow-light brahma-glow-1-light"></div>
        <div className="brahma-glow-light brahma-glow-2-light"></div>
        <div className="brahma-glow-light brahma-glow-3-light"></div>
      </div>

      <div className="brahma-geometry-light">
        <div className="brahma-geo-ring-light brahma-geo-ring-1-light" style={{
          transform: `rotate(${breathPhase * 0.1}deg)`
        }}></div>
        <div className="brahma-geo-ring-light brahma-geo-ring-2-light" style={{
          transform: `rotate(${-breathPhase * 0.08}deg)`
        }}></div>
        <div className="brahma-geo-ring-light brahma-geo-ring-3-light"></div>
      </div>

      <div className="brahma-particles-light">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="brahma-particle-light"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 15}s`,
              animationDuration: `${10 + Math.random() * 20}s`,
              width: `${1.5 + Math.random() * 2}px`,
              height: `${1.5 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      <div className="brahma-breath-light">
        <div className="brahma-breath-ring-light" style={{
          transform: `scale(${1 + Math.sin(breathPhase * 0.01) * 0.03})`,
          opacity: 0.15 + Math.sin(breathPhase * 0.015) * 0.05
        }}></div>
      </div>

      <div className="brahma-orbs-light">
        <div className="brahma-orb-light brahma-orb-1-light" style={calcParallax(0.006, -20)}></div>
        <div className="brahma-orb-light brahma-orb-2-light" style={calcParallax(0.01, 12)}></div>
      </div>

      <div className="brahma-container-light">
        <div className={`brahma-main-light ${isVisible ? 'brahma-revealed-light' : ''}`}>

          {/* LEFT - Content */}
          <div className="brahma-left-light" style={calcParallax(0.004)}>
            <div className="brahma-content-light">
              <div className="brahma-badge-light">
                <span className="brahma-badge-line-light"></span>
                <span className="brahma-badge-text-light">Brahma Muhurtha Community</span>
                <span className="brahma-badge-line-light"></span>
              </div>

              <h1 className="brahma-heading-light">
                <span className="brahma-heading-main-light">The most powerful</span>
                <span className="brahma-heading-accent-light">
                  <span className="brahma-heading-emphasis-light">two hours</span>
                  <span className="brahma-heading-text-light"> of your day</span>
                </span>
              </h1>

              <div className="brahma-divider-light">
                <span className="brahma-divider-line-light"></span>
                <span className="brahma-divider-icon-light">✦</span>
                <span className="brahma-divider-line-light"></span>
              </div>

              <p className="brahma-description-light">
                Every morning before sunrise, people across the world come together
                in stillness. Not bound by any belief system or tradition — simply united by the
                intention to begin each day with <span className="brahma-highlight-light">clarity</span>,
                <span className="brahma-highlight-light"> discipline</span>, and
                <span className="brahma-highlight-light"> purpose</span>.
              </p>

              <div className="brahma-features-light">
                {programFeatures.map((feature, i) => (
                  <div key={i} className="brahma-feature-light" style={{ animationDelay: `${0.3 + i * 0.06}s` }}>
                    <span className="brahma-feature-icon-light">{feature.icon}</span>
                    <span className="brahma-feature-label-light">{feature.label}</span>
                  </div>
                ))}
              </div>

              <div className="brahma-kriya-light">
                <span className="brahma-kriya-title-light">What We Practice</span>
                <ul className="brahma-kriya-list-light">
                  {kriyaSteps.map((step, i) => (
                    <li key={i} className="brahma-kriya-item-light" style={{ animationDelay: `${0.35 + i * 0.05}s` }}>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT - Visual */}
          <div className="brahma-right-light">
            <div className="brahma-visual-light" style={calcParallax(0.01)}>
              <div className="brahma-image-wrapper-light">
                <div className="brahma-image-aura-light" style={{
                  opacity: 0.2 + Math.sin(breathPhase * 0.008) * 0.06
                }}></div>

                <div className="brahma-image-ring-light brahma-image-ring-1-light" style={{
                  transform: `rotate(${breathPhase * 0.06}deg)`
                }}></div>
                <div className="brahma-image-ring-light brahma-image-ring-2-light" style={{
                  transform: `rotate(${-breathPhase * 0.05}deg)`
                }}></div>

                <div className="brahma-image-frame-light">
                  <img src={f1} alt="Morning meditation" className="brahma-image-light" />
                  <div className="brahma-image-overlay-light"></div>
                </div>
              </div>

              <div className="brahma-stats-light">
                <div className="brahma-stat-light" style={{ animationDelay: '0.4s' }}>
                  <span className="brahma-stat-number-light">50+</span>
                  <span className="brahma-stat-label-light">Countries</span>
                </div>
                <div className="brahma-stat-light" style={{ animationDelay: '0.6s' }}>
                  <span className="brahma-stat-number-light">1000+</span>
                  <span className="brahma-stat-label-light">Participants</span>
                </div>
                <div className="brahma-stat-light" style={{ animationDelay: '0.8s' }}>
                  <span className="brahma-stat-number-light">12+</span>
                  <span className="brahma-stat-label-light">Years Running</span>
                </div>
              </div>

              <a
                href="https://chat.whatsapp.com/KsYLi3AKJRNInQ8IZkIksj"
                className="brahma-cta-light"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="brahma-cta-text-light">
                  Begin Your Morning Practice
                  <br />
                  <small>Join our WhatsApp Community</small>
                </span>
                <span className="brahma-cta-arrow-light">→</span>
              </a>

              <div className="brahma-quote-light">
                <span className="brahma-quote-text-light">
                  "No rituals. No religion. Just you and the morning."
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* COURSES SECTION */}
        <div
          style={{
            marginTop: "5rem",
            padding: "3rem 2rem",
            borderTop: "1px solid rgba(139,115,85,0.25)",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
              fontWeight: 600,
              letterSpacing: "0.03em",
              color: "#5a4a32",
              marginBottom: "0.5rem",
            }}
          >
            Courses
          </h2>
          <div
            style={{
              width: "60px",
              height: "2px",
              background: "#8b7355",
              margin: "0 auto 2.5rem",
            }}
          ></div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: "1.5rem",
              maxWidth: "1000px",
              margin: "0 auto",
            }}
          >
            {courses.map((course, i) => (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(139,115,85,0.3)",
                  borderRadius: "14px",
                  padding: "1.75rem 1.25rem",
                  backdropFilter: "blur(6px)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 10px 30px rgba(139,115,85,0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "0.85rem",
                    letterSpacing: "0.08em",
                    color: "#8b7355",
                    marginBottom: "0.5rem",
                    textTransform: "uppercase",
                  }}
                >
                  Course {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 500,
                    color: "#5a4a32",
                    lineHeight: 1.4,
                  }}
                >
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default BrahmaMuhurta;