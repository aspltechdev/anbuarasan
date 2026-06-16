import "./Wellness.css";
import { useEffect, useRef, useState } from "react";

function Wellness() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
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

  const products = [
    {
      name: "Firmax3",
      tagline: "Advanced Herbal Formulation",
      description: "A premium wellness cream crafted in Malaysia with a unique blend of botanical ingredients. Designed to complement an active lifestyle and daily wellness routine.",
      origin: "Malaysia",
      reach: "120+ Countries",
      icon: "🌿",
      color: "#c9a84c",
      highlights: [
        "12 Medicinal Herbs",
        "International Quality Standards",
        "India Licensed & Available",
        "Trusted Worldwide"
      ]
    },
    {
      name: "O2max 3",
      tagline: "Oxygen-Infused Wellness",
      description: "An innovative formulation that supports individuals pursuing active lifestyles and wellness-oriented routines. Developed with modern science and traditional wisdom.",
      origin: "Malaysia",
      reach: "120+ Countries",
      icon: "💎",
      color: "#e0ca80",
      highlights: [
        "12 Medicinal Herbs",
        "GMP Certified Manufacturing",
        "ISO 22716 Compliant",
        "Global Distribution Network"
      ]
    }
  ];

  const certifications = [
    "FDA Approved",
    "ISO 22716",
    "GMP Certified",
    "Halal Certified",
    "India Licensed"
  ];

  return (
    <section className="wellness" ref={sectionRef} id="wellness">
      {/* Background Atmosphere */}
      <div className="wellness-bg">
        <div className="wellness-glow wellness-glow-1"></div>
        <div className="wellness-glow wellness-glow-2"></div>
        <div className="wellness-grid-pattern"></div>
      </div>

      {/* Subtle Particles */}
      <div className="wellness-particles">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="wellness-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
            }}
          />
        ))}
      </div>

      <div className="wellness-container">
        {/* Header */}
        <div className={`wellness-header ${isVisible ? 'visible' : ''}`}>
          <span className="wellness-tag">Wellness Solutions</span>
          <h2 className="wellness-title">
            Supporting <span className="wellness-title-accent">Healthier Lifestyles</span>
          </h2>
          <p className="wellness-subtitle">
            Through wellness-focused products and conscious living practices
          </p>
        </div>

        {/* Product Tabs */}
        <div className={`wellness-tabs ${isVisible ? 'visible' : ''}`}>
          {products.map((product, i) => (
            <button
              key={i}
              className={`wellness-tab ${activeProduct === i ? 'wellness-tab-active' : ''}`}
              onClick={() => setActiveProduct(i)}
            >
              <span className="wellness-tab-icon">{product.icon}</span>
              <span className="wellness-tab-name">{product.name}</span>
              <div className="wellness-tab-indicator"></div>
            </button>
          ))}
        </div>

        {/* Product Display */}
        <div className={`wellness-display ${isVisible ? 'visible' : ''}`}>
          {products.map((product, i) => (
            <div
              key={i}
              className={`wellness-product ${activeProduct === i ? 'wellness-product-active' : ''}`}
            >
              <div className="wellness-product-grid">
                {/* Left - Product Visual */}
                <div className="wellness-product-visual" style={calcParallax(0.02)}>
                  <div className="wellness-product-frame">
                    <div className="wellness-product-aura"></div>
                    <div className="wellness-product-image">
                      <span className="wellness-product-icon-large">{product.icon}</span>
                    </div>
                    <div className="wellness-product-ring"></div>
                  </div>

                  {/* Floating highlights */}
                  <div className="wellness-highlight wellness-highlight-1">
                    <span>{product.highlights[0]}</span>
                  </div>
                  <div className="wellness-highlight wellness-highlight-2">
                    <span>{product.highlights[1]}</span>
                  </div>
                  <div className="wellness-highlight wellness-highlight-3">
                    <span>{product.highlights[2]}</span>
                  </div>
                </div>

                {/* Right - Product Details */}
                <div className="wellness-product-info">
                  <div className="wellness-product-header">
                    <span className="wellness-product-tagline">{product.tagline}</span>
                    <h3 className="wellness-product-name">{product.name}</h3>
                  </div>

                  <p className="wellness-product-desc">
                    {product.description}
                  </p>

                  <div className="wellness-product-meta">
                    <div className="wellness-meta-item">
                      <span className="wellness-meta-label">Origin</span>
                      <span className="wellness-meta-value">{product.origin}</span>
                    </div>
                    <div className="wellness-meta-divider"></div>
                    <div className="wellness-meta-item">
                      <span className="wellness-meta-label">Global Reach</span>
                      <span className="wellness-meta-value">{product.reach}</span>
                    </div>
                  </div>

                  <div className="wellness-product-highlights">
                    {product.highlights.map((h, hi) => (
                      <div key={hi} className="wellness-highlight-item">
                        <span className="wellness-highlight-icon">✓</span>
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  <button className="wellness-cta">
                    <span>Learn More About {product.name}</span>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`wellness-certs ${isVisible ? 'visible' : ''}`}>
          <span className="wellness-certs-label">Quality Assured</span>
          <div className="wellness-certs-row">
            {certifications.map((cert, i) => (
              <div key={i} className="wellness-cert-item" style={{ transitionDelay: `${i * 0.06}s` }}>
                <span className="wellness-cert-check">✓</span>
                <span className="wellness-cert-text">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Wellness;