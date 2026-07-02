// ============================================
// WELLNESS - ATHMA SOUL THEME
// Cinematic Product Showcase with Premium Feel
// Hero-style cards with imagery and immersive design
// ============================================
import firmax3 from "../../assets/firmax3.png";
import o2max3 from "../../assets/o2max3.png";
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
      { threshold: 0.15 }
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
      description: "A premium wellness cream crafted in Malaysia with a unique blend of 12 medicinal herbs. Designed to complement an active lifestyle and daily wellness routine with nature's finest ingredients.",
      origin: "Malaysia",
      reach: "120+ Countries",
      productImage: firmax3,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85f5f2?w=1200&h=800&fit=crop",
      color: "#d4a574",
      gradient: "linear-gradient(145deg, rgba(20, 16, 12, 0.75), rgba(212, 165, 116, 0.20))",
      symbol: "✦",
      features: [
        "12 Medicinal Herbs",
        "GMP Certified Manufacturing",
        "India Licensed",
        "Trusted Worldwide"
      ],
      benefits: [
        "Supports active lifestyle",
        "Natural botanical ingredients",
        "Premium quality standards",
        "Holistic wellness approach"
      ]
    },
    {
      name: "O2max 3",
      tagline: "Oxygen-Infused Wellness",
      description: "An innovative oxygen-infused formulation that supports individuals pursuing active lifestyles. Developed with modern science and traditional wisdom for optimal wellness results.",
      origin: "Malaysia",
      reach: "120+ Countries",
      productImage: o2max3,
      color: "#c9b8a0",
      gradient: "linear-gradient(145deg, rgba(20, 16, 12, 0.75), rgba(201, 184, 160, 0.20))",
      symbol: "◈",
      features: [
        "Oxygen-Infused Formula",
        "ISO 22716 Compliant",
        "Global Distribution",
        "Quality Assured"
      ],
      benefits: [
        "Enhanced vitality",
        "Science-backed formulation",
        "Active lifestyle support",
        "Premium wellness experience"
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
        <div className="wellness-glow wellness-glow-3"></div>
      </div>

      {/* Breath Waves */}
      <div className="wellness-breath-waves">
        <div className="wellness-breath-wave wave-a"></div>
        <div className="wellness-breath-wave wave-b"></div>
        <div className="wellness-breath-wave wave-c"></div>
      </div>

      {/* Floating Particles */}
      <div className="wellness-particles">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="wellness-particle"
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

      <div className="wellness-container">
        {/* Header */}
        <div className={`wellness-header ${isVisible ? 'visible' : ''}`}>
          <div className="wellness-badge">
            <span className="wellness-badge-line"></span>
            <span className="wellness-tag">Premium Wellness Solutions</span>
            <span className="wellness-badge-line"></span>
          </div>
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
              style={activeProduct === i ? { '--tab-color': product.color } : {}}
            >
              <span className="wellness-tab-symbol">{product.symbol}</span>
              <span className="wellness-tab-name">{product.name}</span>
              <div className="wellness-tab-line"></div>
            </button>
          ))}
        </div>

        {/* Product Display - Cinematic Hero Card */}
        <div className={`wellness-display ${isVisible ? 'visible' : ''}`}>
          {products.map((product, i) => (
            <div
              key={i}
              className={`wellness-product ${activeProduct === i ? 'wellness-product-active' : ''}`}
            >
              <div className="wellness-product-hero" style={{ backgroundImage: `url(${product.image})` }}>
                {/* Overlay */}
                
                
                {/* Decorative Elements */}
                

                {/* Content */}
                <div className="wellness-product-content">
                  <div className="wellness-product-badge" style={{ background: product.color }}>
                    {product.tagline}
                  </div>
                  
                  <h3 className="wellness-product-name">{product.name}</h3>
                  
                  <div className="wellness-product-divider" style={{ background: product.color }}></div>
                  
                  <p className="wellness-product-desc">
                    {product.description}
                  </p>

                  <div className="wellness-product-meta">
                    <div className="wellness-meta-item">
                      <span className="wellness-meta-label">Origin</span>
                      <span className="wellness-meta-value">{product.origin}</span>
                    </div>
                    <div className="wellness-meta-divider" style={{ background: product.color }}></div>
                    <div className="wellness-meta-item">
                      <span className="wellness-meta-label">Global Reach</span>
                      <span className="wellness-meta-value">{product.reach}</span>
                    </div>
                  </div>

                  <div className="wellness-product-features">
                    {product.features.map((feature, fi) => (
                      <div key={fi} className="wellness-feature-item">
                        <span className="wellness-feature-dot" style={{ background: product.color }}></span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  

                 <button
  className="wellness-cta"
  style={{ borderColor: product.color, color: product.color }}
  onClick={() => (window.location.href = "/#contact")}
>
  <span>Explore {product.name}</span>
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18">
    <path
      d="M5 12h14M12 5l7 7-7 7"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
</button>
                </div>
                <div className="wellness-product-image-wrapper">
                <img
                  src={product.productImage}
                  alt={product.name}
                  className="wellness-product-image"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className={`wellness-certs ${isVisible ? 'visible' : ''}`}>
          <div className="wellness-certs-label-wrapper">
            <span className="wellness-certs-line"></span>
            <span className="wellness-certs-label">Quality Assured</span>
            <span className="wellness-certs-line"></span>
          </div>
          <div className="wellness-certs-row">
            {certifications.map((cert, i) => (
              <div key={i} className="wellness-cert-item" style={{ transitionDelay: `${i * 0.06}s` }}>
                <span className="wellness-cert-symbol">◈</span>
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