import "./AthmaConnect.css";
import { useEffect, useRef, useState } from "react";

function AthmaConnect() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) videoRef.current.play().catch(() => { });
        } else {
          if (videoRef.current) videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const orbitingCards = [
    { icon: "☉", title: "Self Awareness", desc: "Know your inner universe", color: "#818cf8" },
    { icon: "☽", title: "Inner Peace", desc: "Stillness among stars", color: "#a78bfa" },
    { icon: "✦", title: "Emotional Clarity", desc: "Light through cosmos", color: "#c084fc" },
    { icon: "◈", title: "Mindfulness", desc: "Present every moment", color: "#34d399" },
    { icon: "◆", title: "Purpose Discovery", desc: "Your cosmic calling", color: "#fbbf24" },
    { icon: "⬡", title: "Personal Growth", desc: "Expand beyond limits", color: "#f472b6" },
  ];

  const journeySteps = [
    { num: "01", title: "Awaken Awareness" },
    { num: "02", title: "Understand Your Mind" },
    { num: "03", title: "Transform Patterns" },
    { num: "04", title: "Live Consciously" },
  ];

  return (
    <section className="galaxy" ref={sectionRef} id="athma-connect">
      {/* Galaxy Video Background */}
      <div className="galaxy-video-wrap">
        <video
          ref={videoRef}
          className="galaxy-video"
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://www.pexels.com/download/video/29994297/"
            type="video/mp4"
          />
        </video>
        <div className="galaxy-video-overlay" />
      </div>

      {/* Star Particles */}
      <div className="galaxy-stars">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="galaxy-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      {/* Subtle Nebula Glows */}
      <div className="galaxy-nebula galaxy-nebula-1" />
      <div className="galaxy-nebula galaxy-nebula-2" />

      <div className="galaxy-container">


        {/* Bottom Content */}
        <div className={`galaxy-content ${isVisible ? 'galaxy-content-visible' : ''}`}>
          <div className="galaxy-badge">
            <span>Athma Connect Program</span>
          </div>

          <h2 className="galaxy-heading">
            Reconnect with your
            <span className="galaxy-heading-accent"> soul.</span>
            <br />
            Rediscover your
            <span className="galaxy-heading-accent"> purpose.</span>
          </h2>

          <p className="galaxy-desc">
            A transformative journey for those seeking deeper meaning,
            emotional balance, and lasting spiritual growth.
          </p>

          {/* Journey Steps */}
          <div className="galaxy-journey">
            {journeySteps.map((step, i) => (
              <div key={step.num} className="galaxy-journey-step" style={{ transitionDelay: `${0.5 + i * 0.1}s` }}>
                <span className="galaxy-journey-num">{step.num}</span>
                <span className="galaxy-journey-title">{step.title}</span>
              </div>
            ))}
          </div>

          <button className="galaxy-cta">
            <span>Begin Your Soul Journey</span>
            <span className="galaxy-cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AthmaConnect;