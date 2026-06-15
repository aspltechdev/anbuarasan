import "./About.css";
import { useEffect, useRef, useState } from "react";

function About() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e) => {
    if (sectionRef.current) {
      const rect = sectionRef.current.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  const pillars = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <circle cx="12" cy="12" r="3" strokeWidth={1.5} />
          <path
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
          />
        </svg>
      ),
      title: "Mind Clarity",
      subtitle: "Inner Awareness",
      description:
        "Cultivate mental clarity and emotional intelligence. Learn to observe thoughts, master your mindset, and find stillness within.",
      color: "golden",
      essence: "Clarity • Focus • Peace",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"
          />
        </svg>
      ),
      title: "Financial Wisdom",
      subtitle: "Conscious Abundance",
      description:
        "Transform your relationship with money. Build wealth through mindful decisions, smart investments, and sustainable financial habits.",
      color: "violet",
      essence: "Abundance • Security • Freedom",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeWidth={1.5}
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
      title: "Whole Body Wellness",
      subtitle: "Vibrant Living",
      description:
        "Nourish your body, energize your life. Integrate nutrition, movement, rest, and holistic practices for complete well-being.",
      color: "turquoise",
      essence: "Energy • Health • Vitality",
    },
  ];

  const journeySteps = [
    {
      number: "01",
      title: "Awaken",
      description: "Discover your inner potential and life's deeper purpose",
    },
    {
      number: "02",
      title: "Transform",
      description: "Reshape limiting beliefs into empowering mindsets",
    },
    {
      number: "03",
      title: "Thrive",
      description: "Live with clarity, abundance, and holistic success",
    },
  ];

  return (
    <section
      className="about-universal"
      id="about"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
    >
      {/* Ambient background */}
      <div className="about-ambient-bg">
        <div className="cosmic-dust" />
        <div className="ambient-orb ambient-orb-1" />
        <div className="ambient-orb ambient-orb-2" />
        <div className="ambient-orb ambient-orb-3" />
        
        {/* Light beam following cursor */}
        <div
          className="cursor-light"
          style={{
            "--mouse-x": `${mousePosition.x}px`,
            "--mouse-y": `${mousePosition.y}px`,
          }}
        />
      </div>

      {/* Floating words of inspiration */}
      <div className="floating-words">
        <span className="float-word" style={{ top: "10%", left: "5%", animationDelay: "0s" }}>
          Clarity
        </span>
        <span className="float-word" style={{ top: "20%", right: "8%", animationDelay: "1.5s" }}>
          Purpose
        </span>
        <span className="float-word" style={{ top: "60%", left: "3%", animationDelay: "3s" }}>
          Growth
        </span>
        <span className="float-word" style={{ bottom: "15%", right: "5%", animationDelay: "4.5s" }}>
          Balance
        </span>
      </div>

      <div className="about-container-universal">
        {/* Header */}
        <div className={`about-header-universal ${isVisible ? "visible" : ""}`}>
          <div className="header-line-decoration" />
          <div className="header-content-universal">
            <span className="section-label">
              <span className="label-dot" />
              The Journey Within
              <span className="label-dot" />
            </span>
            <h2 className="universal-heading">
              A Journey Towards
              <br />
              <span className="heading-gradient">Conscious Living</span>
            </h2>
          </div>
          <div className="header-line-decoration" />
        </div>

        {/* Story Section */}
        <div className={`story-section ${isVisible ? "visible" : ""}`}>
          <div className="story-card-universal">
            <div className="story-card-glow" />
            <div className="story-card-content">
              <div className="story-icon-wrapper">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="story-icon">
                  <path
                    strokeLinecap="round"
                    strokeWidth={1.2}
                    d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
                  />
                </svg>
              </div>

              <p className="story-paragraph">
                For years,{" "}
                <span className="text-accent">Anbuarasan</span> has dedicated his
                life to guiding individuals toward{" "}
                <span className="text-emphasis-universal">self-awareness</span>,{" "}
                <span className="text-emphasis-universal">mindset mastery</span>,{" "}
                <span className="text-emphasis-universal">
                  financial consciousness
                </span>
                , and{" "}
                <span className="text-emphasis-universal">holistic wellness</span>.
              </p>

              <div className="mission-box">
                <div className="mission-icon-row">
                  <span className="mission-star">✦</span>
                  <span className="mission-label">His Mission</span>
                  <span className="mission-star">✦</span>
                </div>
                <p className="mission-text">
                  Help people live with greater <span className="mission-highlight">clarity</span>, 
                  stronger <span className="mission-highlight">purpose</span>, deeper{" "}
                  <span className="mission-highlight">awareness</span>, and sustainable{" "}
                  <span className="mission-highlight">success</span>.
                </p>
              </div>

              <p className="story-paragraph">
                Through daily transformation programs, spiritual coaching
                sessions, financial awareness initiatives, and wellness
                education, he continues to impact lives globally.
              </p>
            </div>
          </div>

          {/* Journey Steps */}
          <div className="journey-steps">
            {journeySteps.map((step, index) => (
              <div
                key={index}
                className={`journey-step ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${0.3 + index * 0.2}s` }}
              >
                <div className="step-number-wrapper">
                  <span className="step-number">{step.number}</span>
                  <svg className="step-circle" viewBox="0 0 40 40">
                    <circle
                      cx="20"
                      cy="20"
                      r="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="0.5"
                      className="step-circle-path"
                    />
                  </svg>
                </div>
                <h4 className="step-title">{step.title}</h4>
                <p className="step-description">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars Section */}
        <div className={`pillars-section-universal ${isVisible ? "visible" : ""}`}>
          <div className="pillars-grid-universal">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className={`pillar-card-universal pillar-${pillar.color} ${
                  isVisible ? "visible" : ""
                }`}
                style={{ transitionDelay: `${0.2 + index * 0.15}s` }}
              >
                <div className="pillar-card-inner">
                  <div className="pillar-icon-container">
                    <div className="pillar-icon-ring" />
                    <div className="pillar-icon-universal">{pillar.icon}</div>
                  </div>

                  <div className="pillar-content-universal">
                    <h3 className="pillar-title-universal">{pillar.title}</h3>
                    <span className="pillar-subtitle-universal">
                      {pillar.subtitle}
                    </span>
                    <p className="pillar-description-universal">
                      {pillar.description}
                    </p>
                    <div className="pillar-essence">
                      <span className="essence-label">Essence</span>
                      <span className="essence-text">{pillar.essence}</span>
                    </div>
                  </div>

                  <div className="pillar-corner-decoration">
                    <svg viewBox="0 0 20 20" className="corner-svg">
                      <path
                        d="M0 10 L0 0 L10 0"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Impact Numbers */}
        <div className={`impact-section ${isVisible ? "visible" : ""}`}>
          <div className="impact-item">
            <div className="impact-number-container">
              <span className="impact-number">10K+</span>
              <div className="impact-ring" />
            </div>
            <span className="impact-label">Lives Transformed</span>
          </div>

          <div className="impact-divider">
            <div className="divider-dot" />
            <div className="divider-line" />
            <div className="divider-dot" />
          </div>

          <div className="impact-item">
            <div className="impact-number-container">
              <span className="impact-number">500+</span>
              <div className="impact-ring" />
            </div>
            <span className="impact-label">Programs Conducted</span>
          </div>

          <div className="impact-divider">
            <div className="divider-dot" />
            <div className="divider-line" />
            <div className="divider-dot" />
          </div>

          <div className="impact-item">
            <div className="impact-number-container">
              <span className="impact-number">15+</span>
              <div className="impact-ring" />
            </div>
            <span className="impact-label">Years of Impact</span>
          </div>

          <div className="impact-divider">
            <div className="divider-dot" />
            <div className="divider-line" />
            <div className="divider-dot" />
          </div>

          <div className="impact-item">
            <div className="impact-number-container">
              <span className="impact-number">25+</span>
              <div className="impact-ring" />
            </div>
            <span className="impact-label">Countries Reached</span>
          </div>
        </div>

        {/* Bottom quote */}
        <div className={`bottom-quote ${isVisible ? "visible" : ""}`}>
          <div className="quote-line" />
          <div className="quote-content">
            <span className="quote-text">
              "The greatest transformation happens from within"
            </span>
            <span className="quote-author">— Universal Truth</span>
          </div>
          <div className="quote-line" />
        </div>
      </div>
    </section>
  );
}

export default About;