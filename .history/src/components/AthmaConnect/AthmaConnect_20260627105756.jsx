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
    { icon: "◈", title: "Self Awareness", desc: "Know your inner universe", color: "#8b7355" },
    { icon: "✦", title: "Inner Peace", desc: "Stillness within", color: "#8b7355" },
    { icon: "◆", title: "Emotional Clarity", desc: "Light through the soul", color: "#8b7355" },
    { icon: "◈", title: "Mindfulness", desc: "Present every moment", color: "#8b7355" },
    { icon: "⬡", title: "Purpose Discovery", desc: "Your true calling", color: "#8b7355" },
    { icon: "⟐", title: "Personal Growth", desc: "Expand beyond limits", color: "#8b7355" },
  ];

  const journeySteps = [
    { num: "01", title: "Awaken Awareness" },
    { num: "02", title: "Understand Your Mind" },
    { num: "03", title: "Transform Patterns" },
    { num: "04", title: "Live Consciously" },
  ];

  return (
    <section className="athma" ref={sectionRef} id="athma-connect">
      {/* Video Background */}
      <div className="athma-video-wrap">
        <video
          ref={videoRef}
          className="athma-video"
          muted
          loop
          playsInline
          preload="auto"
        >
          <source
            src="https://www.pexels.com/download/video/9341351/"
            type="video/mp4"
          />
        </video>
        <div className="athma-video-overlay" />
      </div>

      {/* Star-like Particles */}
      <div className="athma-particles">
        {[...Array(40)].map((_, i) => (
          <span
            key={i}
            className="athma-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${1.5 + Math.random() * 2.5}px`,
              height: `${1.5 + Math.random() * 2.5}px`,
            }}
          />
        ))}
      </div>

      {/* Ambient Glows */}
      <div className="athma-ambient">
        <div className="athma-glow athma-glow-1"></div>
        <div className="athma-glow athma-glow-2"></div>
      </div>

      <div className="athma-container">
        {/* Left: Orbiting Cards Visual */}
        <div className="athma-orbit-wrapper">
          <div className="athma-orbit-ring"></div>
          <div className="athma-orbit-ring athma-orbit-ring-2"></div>
          
          <div className="athma-orbit-center">
            <div className="athma-center-icon">◈</div>
            <div className="athma-center-pulse"></div>
          </div>

          {orbitingCards.map((card, i) => (
            <div
              key={i}
              className={`athma-orbit-card ${activeCard === i ? 'athma-orbit-card-active' : ''}`}
              style={{
                '--orbit-angle': `${i * 60}deg`,
              }}
            >
              <span className="athma-orbit-card-icon">{card.icon}</span>
              <span className="athma-orbit-card-title">{card.title}</span>
              <span className="athma-orbit-card-desc">{card.desc}</span>
            </div>
          ))}
        </div>

        {/* Right: Content */}
        <div className={`athma-content ${isVisible ? 'athma-content-visible' : ''}`}>
          <div className="athma-badge">
            <span className="athma-badge-line"></span>
            <span>Be a Wonderful Creator</span>
            <span className="athma-badge-line"></span>
          </div>

          <h2 className="athma-heading">
            Reconnect with your
            <span className="athma-heading-accent"> soul.</span>
            <br />
            Rediscover your
            <span className="athma-heading-accent"> purpose.</span>
          </h2>

          <div className="athma-divider">
            <span className="athma-divider-line"></span>
            <span className="athma-divider-icon">✦</span>
            <span className="athma-divider-line"></span>
          </div>

          <p className="athma-desc">
            A transformative journey for those seeking deeper meaning,
            emotional balance, and lasting spiritual growth.
          </p>

          {/* Journey Steps */}
          <div className="athma-journey">
            {journeySteps.map((step, i) => (
              <div key={step.num} className="athma-journey-step" style={{ transitionDelay: `${0.5 + i * 0.1}s` }}>
                <span className="athma-journey-num">{step.num}</span>
                <span className="athma-journey-title">{step.title}</span>
              </div>
            ))}
          </div>

 <div className="athma-cta-wrapper">
  <a
    href="https://chat.whatsapp.com/FqGyQcdwWwPFEDpLs3HDh8"
    className="athma-cta"
    target="_blank"
    rel="noopener noreferrer"
  >
    <span>Begin Your Soul Journey</span>
    <span className="athma-cta-arrow">→</span>
  </a>

  <p className="athma-cta-note">
    📱 You'll be redirected to our <strong>WhatsApp Community</strong> to join
    like-minded seekers and receive updates, guidance, and event invitations.
  </p>
</div>
        </div>
      </div>
    </section>
  );
}

export default AthmaConnect;