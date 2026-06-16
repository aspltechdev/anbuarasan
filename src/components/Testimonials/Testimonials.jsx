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
      symbol: "☉",
      color: "#c9a84c",
    },
    {
      quote: "The Brahma Muhurta sessions gave me discipline I never had. Waking up at 4 AM changed everything.",
      name: "Rahul K.",
      role: "Brahma Muhurta Community",
      symbol: "🌅",
      color: "#e0ca80",
    },
    {
      quote: "Anbuarasan's financial guidance helped me understand money in a way no book ever did. Truly grateful.",
      name: "Sarah L.",
      role: "Financial Awareness Program",
      symbol: "◆",
      color: "#d4a853",
    },
    {
      quote: "The wellness products have become part of my daily routine. I feel more energized and balanced.",
      name: "David W.",
      role: "Wellness Customer",
      symbol: "🌿",
      color: "#b8943a",
    },
    {
      quote: "I was lost before joining this community. Now I have purpose, direction, and a morning practice I love.",
      name: "Ananya S.",
      role: "Community Member",
      symbol: "✦",
      color: "#c9a84c",
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
      {/* Atmosphere */}
      <div className="testimonials-atmo">
        <div className="testimonials-glow testimonials-glow-center"></div>
        <div className="testimonials-glow testimonials-glow-top"></div>
      </div>

      {/* Subtle particles */}
      <div className="testimonials-particles">
        {[...Array(12)].map((_, i) => (
          <span key={i} className="testimonials-particle" style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }} />
        ))}
      </div>

      <div className="testimonials-container">
        {/* Header */}
        <div className={`testimonials-header ${isVisible ? 'visible' : ''}`}>
          <span className="testimonials-tag">Testimonials</span>
          <h2 className="testimonials-title">
            Transformation <span className="testimonials-title-accent">Stories</span>
          </h2>
        </div>

        {/* Main Carousel Layout */}
        <div className={`testimonials-main ${isVisible ? 'visible' : ''}`}>
          
          {/* Left: Visual */}
          <div className="testimonials-visual" style={calcParallax(0.02)}>
            <div className="testimonials-visual-ring testimonials-visual-ring-1"></div>
            <div className="testimonials-visual-ring testimonials-visual-ring-2"></div>
            
            <div className="testimonials-visual-center">
              <div className="testimonials-visual-glow" style={{ background: testimonials[activeTestimonial].color }}></div>
              <span className="testimonials-visual-symbol">{testimonials[activeTestimonial].symbol}</span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="testimonials-content">
            <div className="testimonials-quote-icon">"</div>
            
            <div className="testimonials-display">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`testimonials-item ${activeTestimonial === i ? 'testimonials-item-active' : ''}`}
                >
                  <blockquote className="testimonials-quote">{t.quote}</blockquote>
                  <div className="testimonials-author">
                    <span className="testimonials-name">{t.name}</span>
                    <span className="testimonials-role">{t.role}</span>
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
                ←
              </button>

              <div className="testimonials-indicators">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonials-dot ${activeTestimonial === i ? 'testimonials-dot-active' : ''}`}
                    onClick={() => goToTestimonial(i)}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>

              <button
                className="testimonials-arrow"
                onClick={() => goToTestimonial((activeTestimonial + 1) % testimonials.length)}
                aria-label="Next"
              >
                →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Testimonials;