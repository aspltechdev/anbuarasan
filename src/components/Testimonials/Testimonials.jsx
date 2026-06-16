// ============================================
// TESTIMONIALS - ATHMA SOUL THEME
// Cinematic Testimonials with Emotional Connection
// Beautiful card-style testimonials with visual elements
// ============================================
import "./Testimonials.css";
import { useEffect, useRef, useState } from "react";

function Testimonials() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const testimonials = [
    {
      quote: "Athma Connect completely shifted my perspective on life. I found clarity I never knew existed within me.",
      name: "Priya M.",
      role: "Athma Connect Participant",
      symbol: "✦",
      color: "#d4a574",
      gradient: "linear-gradient(145deg, #fdf6f0, #f5e6d9)",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "The Brahma Muhurta sessions gave me discipline I never had. Waking up at 4 AM changed everything.",
      name: "Rahul K.",
      role: "Brahma Muhurta Community",
      symbol: "◈",
      color: "#c9b8a0",
      gradient: "linear-gradient(145deg, #f8f2ea, #ede3d6)",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "Anbuarasan's financial guidance helped me understand money in a way no book ever did. Truly grateful.",
      name: "Sarah L.",
      role: "Financial Awareness Program",
      symbol: "⬡",
      color: "#d5c4b0",
      gradient: "linear-gradient(145deg, #faf3ec, #efe5d9)",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "The wellness products have become part of my daily routine. I feel more energized and balanced.",
      name: "David W.",
      role: "Wellness Customer",
      symbol: "⟐",
      color: "#d4a574",
      gradient: "linear-gradient(145deg, #fdf6f0, #f5e6d9)",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face"
    },
    {
      quote: "I was lost before joining this community. Now I have purpose, direction, and a morning practice I love.",
      name: "Ananya S.",
      role: "Community Member",
      symbol: "◇",
      color: "#c9b8a0",
      gradient: "linear-gradient(145deg, #f8f2ea, #ede3d6)",
      image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&h=200&fit=crop&crop=face"
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          intervalRef.current = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
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
  }, [testimonials.length]);

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

  const goToTestimonial = (index) => {
    setActiveTestimonial(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
  };

  return (
    <section className="testimonials" ref={sectionRef} id="testimonials">
      {/* Background Atmosphere */}
      <div className="testimonials-bg">
        <div className="testimonials-glow testimonials-glow-1"></div>
        <div className="testimonials-glow testimonials-glow-2"></div>
        <div className="testimonials-glow testimonials-glow-3"></div>
      </div>

      {/* Breath Waves */}
      <div className="testimonials-breath-waves">
        <div className="testimonials-breath-wave wave-a"></div>
        <div className="testimonials-breath-wave wave-b"></div>
        <div className="testimonials-breath-wave wave-c"></div>
      </div>

      {/* Floating Particles */}
      <div className="testimonials-particles">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="testimonials-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              background: `radial-gradient(circle, rgba(212, 165, 116, ${0.05 + Math.random() * 0.1}), transparent)`,
            }}
          />
        ))}
      </div>

      <div className="testimonials-container">
        {/* Header */}
        <div className={`testimonials-header ${isVisible ? 'visible' : ''}`}>
          <div className="testimonials-badge">
            <span className="testimonials-badge-line"></span>
            <span className="testimonials-tag">✦ Testimonials</span>
            <span className="testimonials-badge-line"></span>
          </div>
          <h2 className="testimonials-title">
            Transformation <span className="testimonials-title-accent">Stories</span>
            <span className="testimonials-title-dot">.</span>
          </h2>
          <p className="testimonials-subtitle">
            Real voices from our community — journeys of awakening, growth, and connection
          </p>
        </div>

        {/* Main Carousel */}
        <div className={`testimonials-main ${isVisible ? 'visible' : ''}`}>
          {/* Left: Visual Avatar Card */}
          <div className="testimonials-visual" style={calcParallax(0.02)}>
            <div className="testimonials-visual-card" style={{ background: testimonials[activeTestimonial].gradient }}>
              <div className="testimonials-visual-ring" style={{ borderColor: testimonials[activeTestimonial].color }}></div>
              <div className="testimonials-visual-ring-2" style={{ borderColor: testimonials[activeTestimonial].color }}></div>
              
              <div className="testimonials-avatar-wrapper">
                <img 
                  src={testimonials[activeTestimonial].image} 
                  alt={testimonials[activeTestimonial].name}
                  className="testimonials-avatar"
                />
                <div className="testimonials-avatar-glow" style={{ background: testimonials[activeTestimonial].color }}></div>
              </div>
              
              <div className="testimonials-visual-symbol" style={{ color: testimonials[activeTestimonial].color }}>
                {testimonials[activeTestimonial].symbol}
              </div>
              
              <div className="testimonials-visual-info">
                <span className="testimonials-visual-name">{testimonials[activeTestimonial].name}</span>
                <span className="testimonials-visual-role">{testimonials[activeTestimonial].role}</span>
              </div>
            </div>
          </div>

          {/* Right: Quote Content */}
          <div className="testimonials-content">
            <div className="testimonials-quote-mark">"</div>
            
            <div className="testimonials-display">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`testimonials-item ${activeTestimonial === i ? 'testimonials-item-active' : ''}`}
                >
                  <blockquote className="testimonials-quote">{t.quote}</blockquote>
                  <div className="testimonials-author">
                    <div className="testimonials-author-line" style={{ background: t.color }}></div>
                    <div className="testimonials-author-info">
                      <span className="testimonials-name">{t.name}</span>
                      <span className="testimonials-role">{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Controls */}
            <div className="testimonials-controls">
              <button
                className="testimonials-arrow"
                onClick={() => goToTestimonial((activeTestimonial - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20">
                  <path d="M15 18l-6-6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className="testimonials-indicators">
                {testimonials.map((t, i) => (
                  <button
                    key={i}
                    className={`testimonials-dot ${activeTestimonial === i ? 'testimonials-dot-active' : ''}`}
                    onClick={() => goToTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                    style={activeTestimonial === i ? { '--dot-color': t.color } : {}}
                  >
                    <span className="testimonials-dot-bar"></span>
                  </button>
                ))}
              </div>

              <button
                className="testimonials-arrow"
                onClick={() => goToTestimonial((activeTestimonial + 1) % testimonials.length)}
                aria-label="Next"
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="20" height="20">
                  <path d="M9 18l6-6-6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Counter */}
            <div className="testimonials-counter">
              <span className="testimonials-counter-current">
                {String(activeTestimonial + 1).padStart(2, '0')}
              </span>
              <span className="testimonials-counter-sep">/</span>
              <span className="testimonials-counter-total">
                {String(testimonials.length).padStart(2, '0')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;