// About.jsx
import "./About.css";
import { useEffect, useRef, useState } from "react";
import bgImage from "../../assets/bginnercard.png";
import sectionBg from "../../assets/bg.jpg"; // 👈 swap with your bg image path

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
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

  return (
    <section className="about" ref={sectionRef} id="about">
      {/* Background Image with Parallax + Ken Burns */}
      <div
        className="about-bg-image-light"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * -24}px, ${(mousePos.y - 0.5) * -24}px)`
        }}
      >
        <img src={sectionBg} alt="" className="about-bg-image-img-light" />
        <div className="about-bg-image-overlay-light"></div>
      </div>

      {/* Background */}
      <div className="about-bg-light">
        <div className="about-bg-gradient-light"></div>
        <div className="about-bg-grid-light"></div>
        <div className="about-bg-pattern-light"></div>
      </div>

      {/* Ambient Glows */}
      <div className="about-ambient-light">
        <div className="about-glow-light about-glow-1-light"></div>
        <div className="about-glow-light about-glow-2-light"></div>
        <div className="about-glow-light about-glow-3-light"></div>
      </div>

      {/* Geometry */}
      <div className="about-geometry-light">
        <div className="about-geo-ring-light about-geo-ring-1-light"></div>
        <div className="about-geo-ring-light about-geo-ring-2-light"></div>
      </div>

      {/* Particles */}
      <div className="about-particles-light">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="about-particle-light"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 12}s`,
              animationDuration: `${10 + Math.random() * 16}s`,
              width: `${1.5 + Math.random() * 2}px`,
              height: `${1.5 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      <div className="about-container-light">
        {/* Professional Layout */}
        <div className={`about-layout-light ${isVisible ? "visible-light" : ""}`}>
          {/* Left - Image with Professional Framing */}
          <div className="about-left-light">
            <div className="about-image-wrapper-light">
              <div className="about-image-aura-light"></div>
              <div className="about-image-ring-light about-image-ring-1-light"></div>
              <div className="about-image-ring-light about-image-ring-2-light"></div>
              <div className="about-image-frame-light">
                <img src={bgImage} alt="Anbuarasan" className="about-image-light" />
                <div className="about-image-overlay-light"></div>
              </div>

              {/* Experience Badge */}
              <div className="about-experience-badge-light">
                <span className="about-exp-number-light">12+</span>
                <span className="about-exp-label-light">Years of<br/>Experience</span>
              </div>
            </div>
          </div>

          {/* Right - Professional Content */}
          <div className="about-right-light">
            <div className="about-content-light">
              {/* Label */}
              <div className="about-label-light">
                <span className="about-label-line-light"></span>
                <span className="about-label-text-light">About The Founder</span>
                <span className="about-label-line-light"></span>
              </div>

              {/* Name & Title */}
              <h2 className="about-name-title-light">Anbuarasan</h2>
              <p className="about-role-light">Transformational Coach & Wellness Guide</p>

              {/* Professional Divider */}
              <div className="about-divider-light">
                <span className="about-divider-line-light"></span>
                <span className="about-divider-dot-light"></span>
                <span className="about-divider-line-light"></span>
              </div>

              {/* Bio */}
              <p className="about-bio-light">
                Dedicated to guiding individuals toward{" "}
                <span className="about-highlight-light">self-awareness</span>,{" "}
                <span className="about-highlight-light">mindset mastery</span>,{" "}
                <span className="about-highlight-light">financial consciousness</span>,
                and <span className="about-highlight-light">holistic wellness</span>{" "}
                through transformative daily practices and personalized coaching.
              </p>

              {/* Key Points */}
              <div className="about-key-points-light">
                <div className="about-point-light">
                  <span className="about-point-icon-light">◈</span>
                  <div className="about-point-content-light">
                    <span className="about-point-title-light">Global Impact</span>
                    <span className="about-point-desc-light">Transforming lives across 50+ countries</span>
                  </div>
                </div>
                <div className="about-point-light">
                  <span className="about-point-icon-light">✦</span>
                  <div className="about-point-content-light">
                    <span className="about-point-title-light">Holistic Approach</span>
                    <span className="about-point-desc-light">Mind, body, and financial wellness integrated</span>
                  </div>
                </div>
                <div className="about-point-light">
                  <span className="about-point-icon-light">⟐</span>
                  <div className="about-point-content-light">
                    <span className="about-point-title-light">Proven Methods</span>
                    <span className="about-point-desc-light">Research-backed transformation techniques</span>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="about-actions-light">
                <a href="#contact" className="about-cta-light">
                  <span>Begin Your Journey</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a href="#programs" className="about-cta-secondary-light">
                  Explore Programs
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className={`about-stats-bar-light ${isVisible ? "visible-light" : ""}`}>
          <div className="about-stat-item-light">
            <span className="about-stat-number-light">500+</span>
            <span className="about-stat-label-light">Clients Transformed</span>
          </div>
          <span className="about-stat-separator-light"></span>
          <div className="about-stat-item-light">
            <span className="about-stat-number-light">50+</span>
            <span className="about-stat-label-light">Countries Reached</span>
          </div>
          <span className="about-stat-separator-light"></span>
          <div className="about-stat-item-light">
            <span className="about-stat-number-light">12+</span>
            <span className="about-stat-label-light">Years of Practice</span>
          </div>
          <span className="about-stat-separator-light"></span>
          <div className="about-stat-item-light">
            <span className="about-stat-number-light">3</span>
            <span className="about-stat-label-light">Core Programs</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;