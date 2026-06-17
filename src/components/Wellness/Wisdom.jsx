// ============================================
// WISDOM - ATHMA SOUL CONNECTION THEME
// Cinematic Card Layout with Image Overlays
// Expressing emotions through visual storytelling
// ============================================
import "./Wisdom.css";
import { useEffect, useRef, useState } from "react";
import strengths from "../../assets/strengths.jpg";
import awakening from "../../assets/awakening.jpg";
import growth from "../../assets/growth.png";
import rhythm from "../../assets/rhythm.png";
import potentialImg from "../../assets/potential.png";
import abundance from "../../assets/abundance.jpg";

function Wisdom() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const wisdomCards = [
    {
      quote: "Awareness is the beginning of transformation.",
      author: "Anbuarasan",
      image: awakening,
      gradient: "linear-gradient(135deg, rgba(212, 165, 116, 0.3), rgba(139, 115, 85, 0.6))",
      emotion: "Awakening",
      color: "#d4a574"
    },
    {
      quote: "Discipline creates the future you desire.",
      author: "Anbuarasan",
      image: strengths,
      gradient: "linear-gradient(135deg, rgba(201, 184, 160, 0.3), rgba(168, 148, 122, 0.6))",
      emotion: "Strength",
      color: "#c9b8a0"
    },
    {
      quote: "Inner growth shapes outer success.",
      author: "Anbuarasan",
      image: growth,
      gradient: "linear-gradient(135deg, rgba(213, 196, 176, 0.3), rgba(184, 166, 146, 0.6))",
      emotion: "Growth",
      color: "#d5c4b0"
    },
    {
      quote: "Your morning routine determines your life's direction.",
      author: "Anbuarasan",
      image: rhythm,
      gradient: "linear-gradient(135deg, rgba(212, 165, 116, 0.3), rgba(139, 115, 85, 0.5))",
      emotion: "Rhythm",
      color: "#d4a574"
    },
    {
      quote: "True wealth begins with a wealthy mindset.",
      author: "Anbuarasan",
      image: abundance,
      gradient: "linear-gradient(135deg, rgba(201, 184, 160, 0.3), rgba(168, 148, 122, 0.5))",
      emotion: "Abundance",
      color: "#c9b8a0"
    },
    {
      quote: "Every soul carries infinite potential within.",
      author: "Anbuarasan",
      image: potentialImg,
      gradient: "linear-gradient(135deg, rgba(213, 196, 176, 0.3), rgba(184, 166, 146, 0.5))",
      emotion: "Potential",
      color: "#d5c4b0"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          intervalRef.current = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % wisdomCards.length);
          }, 6000);
        } else {
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, [wisdomCards.length]);

  const goToQuote = (index) => {
    setCurrentQuote(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % wisdomCards.length);
    }, 6000);
  };

  return (
    <section className="wisdom" ref={sectionRef}>
      {/* Background Atmosphere */}
      <div className="wisdom-bg">
        <div className="wisdom-glow wisdom-glow-center"></div>
        <div className="wisdom-glow wisdom-glow-top"></div>
        <div className="wisdom-glow wisdom-glow-bottom"></div>
      </div>

      {/* Floating Particles */}
      <div className="wisdom-particles">
        {[...Array(25)].map((_, i) => (
          <span 
            key={i} 
            className="wisdom-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              width: `${3 + Math.random() * 6}px`,
              height: `${3 + Math.random() * 6}px`,
              background: `radial-gradient(circle, rgba(212, 165, 116, ${0.08 + Math.random() * 0.15}), transparent)`,
            }}
          />
        ))}
      </div>

      {/* Breath Waves */}
      <div className="wisdom-breath-waves">
        <div className="wisdom-breath-wave wave-a"></div>
        <div className="wisdom-breath-wave wave-b"></div>
        <div className="wisdom-breath-wave wave-c"></div>
      </div>

      <div className="wisdom-container">
        {/* Section Header */}
        <div className={`wisdom-header ${isVisible ? 'visible' : ''}`}>
          <div className="wisdom-badge">
            <span className="wisdom-badge-line"></span>
            <span className="wisdom-tag">✦ Visual Wisdom</span>
            <span className="wisdom-badge-line"></span>
          </div>
          <h2 className="wisdom-title">
            Stories That <span className="wisdom-title-accent">Transform</span>
            <span className="wisdom-title-dot">.</span>
          </h2>
          <p className="wisdom-subtitle">
            Each card holds a truth — a visual journey into the depths of your soul
          </p>
        </div>

        {/* Cinematic Card Carousel */}
        <div className={`wisdom-carousel ${isVisible ? 'visible' : ''}`}>
          <div className="wisdom-card-container">
            {wisdomCards.map((card, index) => (
              <div
                key={index}
                className={`wisdom-card ${currentQuote === index ? 'wisdom-card-active' : ''}`}
                style={{
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                {/* Overlay Gradient */}
                <div className="wisdom-card-overlay" style={{ background: card.gradient }}></div>
                
                {/* Card Content */}
                <div className="wisdom-card-content">
                  {/* Emotion Badge */}
                  <div className="wisdom-card-badge" style={{ background: card.color }}>
                    <span>{card.emotion}</span>
                  </div>
                  
                  {/* Quote */}
                  <blockquote className="wisdom-card-quote">
                    "{card.quote}"
                  </blockquote>
                  
                  {/* Author */}
                  <div className="wisdom-card-author">
                    <div className="wisdom-card-author-line"></div>
                    <cite>— {card.author}</cite>
                    <div className="wisdom-card-author-line"></div>
                  </div>
                  
                  {/* Symbol */}
                  <div className="wisdom-card-symbol" style={{ color: card.color }}>
                    ◈
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="wisdom-controls">
            {/* Progress Indicators */}
            <div className="wisdom-indicators">
              {wisdomCards.map((_, i) => (
                <button
                  key={i}
                  className={`wisdom-indicator ${currentQuote === i ? 'wisdom-indicator-active' : ''}`}
                  onClick={() => goToQuote(i)}
                  aria-label={`Card ${i + 1}`}
                  style={currentQuote === i ? { '--indicator-color': wisdomCards[i].color } : {}}
                >
                  <span className="wisdom-indicator-bar"></span>
                  <span className="wisdom-indicator-number">{String(i + 1).padStart(2, '0')}</span>
                </button>
              ))}
            </div>

            {/* Navigation Buttons */}
            <div className="wisdom-nav">
              <button 
                className="wisdom-nav-btn"
                onClick={() => goToQuote((currentQuote - 1 + wisdomCards.length) % wisdomCards.length)}
                aria-label="Previous card"
              >
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <div className="wisdom-nav-counter">
                <span className="wisdom-nav-current" style={{ color: wisdomCards[currentQuote].color }}>
                  {String(currentQuote + 1).padStart(2, '0')}
                </span>
                <span className="wisdom-nav-separator">/</span>
                <span className="wisdom-nav-total">{String(wisdomCards.length).padStart(2, '0')}</span>
              </div>
              <button 
                className="wisdom-nav-btn"
                onClick={() => goToQuote((currentQuote + 1) % wisdomCards.length)}
                aria-label="Next card"
              >
                <svg viewBox="0 0 24 24" width="22" height="22">
                  <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className={`wisdom-footer ${isVisible ? 'visible' : ''}`}>
          <div className="wisdom-footer-line"></div>
          <div className="wisdom-footer-symbol">✦</div>
          <div className="wisdom-footer-line"></div>
        </div>
      </div>
    </section>
  );
}

export default Wisdom;