import "./Wisdom.css";
import { useEffect, useRef, useState } from "react";

function Wisdom() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentQuote, setCurrentQuote] = useState(0);
  const sectionRef = useRef(null);
  const intervalRef = useRef(null);

  const quotes = [
    {
      quote: "Awareness is the beginning of transformation.",
      author: "Anbuarasan",
      symbol: "☉"
    },
    {
      quote: "Discipline creates the future you desire.",
      author: "Anbuarasan",
      symbol: "◈"
    },
    {
      quote: "Inner growth shapes outer success.",
      author: "Anbuarasan",
      symbol: "✦"
    },
    {
      quote: "Your morning routine determines your life's direction.",
      author: "Anbuarasan",
      symbol: "🌅"
    },
    {
      quote: "True wealth begins with a wealthy mindset.",
      author: "Anbuarasan",
      symbol: "◆"
    },
    {
      quote: "Every soul carries infinite potential within.",
      author: "Anbuarasan",
      symbol: "⬡"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          intervalRef.current = setInterval(() => {
            setCurrentQuote((prev) => (prev + 1) % quotes.length);
          }, 5000);
        } else {
          clearInterval(intervalRef.current);
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      observer.disconnect();
      clearInterval(intervalRef.current);
    };
  }, [quotes.length]);

  const goToQuote = (index) => {
    setCurrentQuote(index);
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
  };

  return (
    <section className="wisdom" ref={sectionRef}>
      {/* Background Atmosphere */}
      <div className="wisdom-bg">
        <div className="wisdom-glow wisdom-glow-center"></div>
        <div className="wisdom-glow wisdom-glow-top"></div>
      </div>

      {/* Floating Particles */}
      <div className="wisdom-particles">
        {[...Array(15)].map((_, i) => (
          <span 
            key={i} 
            className="wisdom-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="wisdom-container">
        {/* Section Header */}
        <div className={`wisdom-header ${isVisible ? 'visible' : ''}`}>
          <span className="wisdom-tag">Timeless Wisdom</span>
          <h2 className="wisdom-title">
            Words That <span className="wisdom-title-accent">Transform</span>
          </h2>
        </div>

        {/* Quote Carousel */}
        <div className={`wisdom-carousel ${isVisible ? 'visible' : ''}`}>
          {/* Large Quote Symbol */}
          <div className="wisdom-quote-mark">"</div>

          {/* Quote Display */}
          <div className="wisdom-quote-display">
            {quotes.map((q, i) => (
              <div
                key={i}
                className={`wisdom-quote-item ${currentQuote === i ? 'wisdom-quote-active' : ''}`}
              >
                <span className="wisdom-quote-symbol">{q.symbol}</span>
                <blockquote className="wisdom-quote-text">
                  {q.quote}
                </blockquote>
                <cite className="wisdom-quote-author">— {q.author}</cite>
              </div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="wisdom-indicators">
            {quotes.map((_, i) => (
              <button
                key={i}
                className={`wisdom-indicator ${currentQuote === i ? 'wisdom-indicator-active' : ''}`}
                onClick={() => goToQuote(i)}
                aria-label={`Quote ${i + 1}`}
              >
                <span className="wisdom-indicator-bar"></span>
              </button>
            ))}
          </div>

          {/* Navigation */}
          <div className="wisdom-nav">
            <button 
              className="wisdom-nav-btn"
              onClick={() => goToQuote((currentQuote - 1 + quotes.length) % quotes.length)}
              aria-label="Previous quote"
            >
              ←
            </button>
            <button 
              className="wisdom-nav-btn"
              onClick={() => goToQuote((currentQuote + 1) % quotes.length)}
              aria-label="Next quote"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wisdom;