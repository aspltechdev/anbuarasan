import "./BrahmaMuhurta.css";
import { useEffect, useRef, useState } from "react";
import f1 from "../../assets/f1.png";
function BrahmaMuhurta() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calcParallax = (depth) => {
    if (!sectionRef.current) return {};
    const rect = sectionRef.current.getBoundingClientRect();
    return {
      transform: `translate3d(${(mousePos.x - rect.left - rect.width / 2) * depth}px, ${(mousePos.y - rect.top - rect.height / 2) * depth}px, 0)`,
    };
  };

  return (
    <section className="brahma" ref={sectionRef}>
      {/* Background Layer */}
      <div className="brahma-bg">
        <video ref={videoRef} className="brahma-bg-video" muted loop playsInline preload="auto"
          poster="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1920&q=80">
          <source src="https://www.pexels.com/download/video/10638259/" type="video/mp4" />
        </video>
        <div className="brahma-bg-fade" />
      </div>

      {/* Atmospheric Elements */}
      <div className="brahma-atmosphere">
        <div className="brahma-glow brahma-glow-top" />
        <div className="brahma-glow brahma-glow-bottom" />
      </div>

      {/* Main Layout */}
      <div className="brahma-container">
        <div className={`brahma-layout ${isVisible ? 'brahma-revealed' : ''}`}>
          
          {/* LEFT COLUMN - The Invitation */}
          <div className="brahma-left" style={calcParallax(0.008)}>
            <div className="brahma-left-content">
              <div className="brahma-eyebrow">
                <span className="brahma-eyebrow-accent"></span>
                <span>A Global Morning Practice</span>
              </div>

              <h1 className="brahma-heading">
                <span className="brahma-heading-line">The most powerful</span>
                <span className="brahma-heading-line">
                  <span className="brahma-heading-emphasis">two hours</span>
                  <span> of your day</span>
                </span>
              </h1>

              <div className="brahma-divider">
                <span></span>
                <span></span>
              </div>

              <p className="brahma-description">
                Every morning before sunrise, individuals across the world come together 
                in stillness. Not bound by any religion or ritual — simply united by the 
                intention to begin each day with clarity, discipline, and purpose.
              </p>

              <div className="brahma-schedule">
                <div className="brahma-schedule-item">
                  <span className="brahma-schedule-icon"></span>
                  <div>
                    <span className="brahma-schedule-label">Time</span>
                    <span className="brahma-schedule-value">4:00 AM – 6:00 AM IST</span>
                  </div>
                </div>
                <div className="brahma-schedule-item">
                  <span className="brahma-schedule-icon">◉</span>
                  <div>
                    <span className="brahma-schedule-label">Platform</span>
                    <span className="brahma-schedule-value">Online via Zoom</span>
                  </div>
                </div>
                <div className="brahma-schedule-item">
                  <span className="brahma-schedule-icon">○</span>
                  <div>
                    <span className="brahma-schedule-label">Access</span>
                    <span className="brahma-schedule-value">Free • Open to Everyone</span>
                  </div>
                </div>
              </div>

              <div className="brahma-values">
                <span>Stillness</span>
                <span>Discipline</span>
                <span>Clarity</span>
                <span>Growth</span>
              </div>

              <button className="brahma-cta">
                <span>Begin Your Morning Practice</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN - The Visual Story */}
          <div className="brahma-right">
            <div className="brahma-visual" style={calcParallax(0.015)}>
              {/* Large meditation image */}
              <div className="brahma-image-container">
                <div className="brahma-image-frame">
                  <div className="brahma-image-glow"></div>
                  <img 
                    src={f1} 
                    alt="Early morning meditation practice"
                    className="brahma-image"
                  />
                </div>
                
                {/* Floating accent elements */}
                <div className="brahma-accent brahma-accent-1">
                  <span>☉</span>
                </div>
                <div className="brahma-accent brahma-accent-2">
                  <span>☽</span>
                </div>
                <div className="brahma-accent brahma-accent-3">
                  <span>✦</span>
                </div>
              </div>

              {/* Quote overlay */}
              <div className="brahma-quote-card">
                <p>"No rituals. No religion. Just you and the morning."</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default BrahmaMuhurta;