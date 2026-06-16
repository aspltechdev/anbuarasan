// ============================================
// THREE PILLARS SECTION
// ============================================
import "./ThreePillars.css";
import { useEffect, useRef, useState } from "react";

function ThreePillars() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      icon: "☉",
      title: "Spiritual Transformation",
      desc: "Helping individuals reconnect with their true self through guided practices and conscious living.",
      color: "#c9a84c"
    },
    {
      icon: "◈",
      title: "Financial Consciousness",
      desc: "Creating awareness around financial planning, wealth creation principles, insurance, loans, and emerging technologies.",
      color: "#e0ca80"
    },
    {
      icon: "⬡",
      title: "Holistic Wellness",
      desc: "Supporting healthier lifestyles through disciplined habits and wellness-oriented solutions.",
      color: "#b8943a"
    }
  ];

  return (
    <section className="pillars" ref={sectionRef}>
      <div className="pillars-container">
        <div className={`pillars-header ${isVisible ? 'visible' : ''}`}>
          <span className="pillars-tag">Our Foundation</span>
          <h2 className="pillars-title">Three Pillars of <span className="pillars-title-accent">Transformation</span></h2>
        </div>

        <div className={`pillars-grid ${isVisible ? 'visible' : ''}`}>
          {pillars.map((p, i) => (
            <div key={i} className="pillar-card" style={{ transitionDelay: `${i * 0.12}s` }}>
              <div className="pillar-icon-wrap">
                <span className="pillar-icon" style={{ color: p.color }}>{p.icon}</span>
                <div className="pillar-icon-glow" style={{ background: p.color }}></div>
              </div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ThreePillars;