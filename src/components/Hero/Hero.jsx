import "./Hero.css";
import { useEffect, useRef, useState, useCallback } from "react";
import spiritualBg from "../../assets/h.png";
import financialBg from "../../assets/h2.png";
import productsBg from "../../assets/h3.png";
import heroImage from "../../assets/h.png";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const slideTimer = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    slideTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 7000);
    return () => clearInterval(slideTimer.current);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    clearInterval(slideTimer.current);
    slideTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 7000);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    const handleScroll = () => setScrollY(window.pageYOffset);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId, particles = [];
    let mouse = { x: null, y: null, radius: 200 };
    let time = 0;

    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };

    class Particle {
      constructor() { this.reset(); }
      reset() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + 20;
        this.size = Math.random() * 2 + 0.4;
        this.speedY = -(Math.random() * 0.5 + 0.12);
        this.speedX = (Math.random() - 0.5) * 0.35;
        this.alpha = Math.random() * 0.4 + 0.06;
        this.phase = Math.random() * Math.PI * 2;
        this.hue = 35 + Math.random() * 15;
      }
      update(mouse, time) {
        this.y += this.speedY;
        this.x += this.speedX + Math.sin(time * 0.00035 + this.phase) * 0.1;
        this.alpha += Math.sin(time * 0.0015 + this.phase) * 0.003;
        if (this.y < -30 || this.x < -30 || this.x > canvas.width + 30) this.reset();
        if (mouse.x && mouse.y) {
          const dx = this.x - mouse.x, dy = this.y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < mouse.radius) { 
            const f = (1 - dist / mouse.radius) * 0.005; 
            this.x -= dx * f; 
            this.y -= dy * f; 
            this.alpha = Math.min(0.5, this.alpha + 0.008); 
          }
        }
        this.alpha = Math.max(0.02, Math.min(0.45, this.alpha));
      }
      draw(ctx) {
        const g = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size * 6);
        g.addColorStop(0, `hsla(${this.hue}, 90%, 78%, ${this.alpha})`);
        g.addColorStop(0.35, `hsla(${this.hue}, 80%, 55%, ${this.alpha * 0.22})`);
        g.addColorStop(1, 'transparent');
        ctx.beginPath(); 
        ctx.arc(this.x, this.y, this.size * 6, 0, Math.PI * 2); 
        ctx.fillStyle = g; 
        ctx.fill();
        
        // Bright core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.4, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${this.hue}, 100%, 92%, ${this.alpha * 0.7})`;
        ctx.fill();
      }
    }

    const init = () => { particles = Array.from({ length: 40 }, () => new Particle()); };
    const animate = () => { 
      time++; 
      ctx.clearRect(0, 0, canvas.width, canvas.height); 
      particles.forEach(p => { p.update(mouse, time); p.draw(ctx); }); 
      animId = requestAnimationFrame(animate); 
    };
    const hm = (e) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const hl = () => { mouse.x = null; mouse.y = null; };

    resize(); init(); animate();
    window.addEventListener("resize", resize); 
    window.addEventListener("mousemove", hm); 
    window.addEventListener("mouseleave", hl);
    return () => { 
      cancelAnimationFrame(animId); 
      window.removeEventListener("resize", resize); 
      window.removeEventListener("mousemove", hm); 
      window.removeEventListener("mouseleave", hl); 
    };
  }, []);

  const calcParallax = (depth) => {
    if (!heroRef.current) return {};
    const rect = heroRef.current.getBoundingClientRect();
    return {
      transform: `translate3d(${(mousePos.x - rect.left - rect.width / 2) * depth}px, ${(mousePos.y - rect.top - rect.height / 2) * depth + scrollY * depth * 0.5}px, 0)`,
    };
  };

  const slides = [
    { 
      id: 'spiritual', 
      bgImage: heroImage,
      visualImage: heroImage,
      tagline: 'Spiritual Transformation', 
      title: 'Discover Inner Peace', 
      titleEm: 'Within You', 
      desc: 'Anbuarasan guides you through meditation, energy healing, and conscious living to unlock your highest self.', 
      features: ['Meditation', 'Energy Healing', 'Mindfulness', 'Wellness'], 
      stats: [{ v: '500+', l: 'Souls Guided' }, { v: '12+', l: 'Years Wisdom' }, { v: '∞', l: 'Growth' }], 
      cta: 'Begin Your Journey', 
      secondary: 'Explore Teachings' 
    },
    { 
      id: 'financial', 
      bgImage: financialBg,
      visualImage: financialBg,
      tagline: 'Financial Empowerment', 
      title: 'Master Digital Wealth', 
      titleEm: '& Crypto Assets', 
      desc: 'Navigate Bitcoin, Beldex, Ethereum & SPC with expert precision. Loans and insurance advisory included.', 
      features: ['₿ Bitcoin', '⟐ Beldex', 'Ξ Ethereum', '◈ SPC'], 
      stats: [{ v: '$50M+', l: 'Assets Guided' }, { v: '500+', l: 'Clients' }, { v: '12+', l: 'Years' }], 
      cta: 'Start Building Wealth', 
      secondary: 'Free Consultation' 
    },
    { 
      id: 'products', 
      bgImage: productsBg,
      visualImage: productsBg,
      tagline: 'Premium Skincare', 
      title: 'Firmax3 & O2max 3', 
      titleEm: 'Natural Beauty', 
      desc: 'Malaysian skincare with 12 medicinal herbs. Trusted in 120+ countries. India licensed.', 
      features: ['FDA Approved', 'ISO 22716', 'GMP Certified', '12 Herbs'], 
      stats: [{ v: '120+', l: 'Countries' }, { v: '12', l: 'Herbs' }, { v: 'India', l: 'Licensed' }], 
      cta: 'Shop Premium Skincare', 
      secondary: 'View Ingredients' 
    },
  ];

  const s = slides[currentSlide];

  return (
    <section className="hero" ref={heroRef}>
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Background Images Container */}
      <div className="hero-bg-container">
        {slides.map((slide, idx) => (
          <div 
            key={slide.id}
            className={`hero-bg-slide ${currentSlide === idx ? 'hero-bg-active' : ''}`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              transform: currentSlide === idx ? 
                `scale(1.08) translate3d(${(mousePos.x - window.innerWidth/2) * 0.008}px, ${(mousePos.y - window.innerHeight/2) * 0.008}px, 0)` : 
                'scale(1.02)',
            }}
          />
        ))}
        <div className="hero-bg-overlay" />
      </div>

      {/* Light Rays */}
      <div className="hero-rays">
        <div className="hero-ray hero-ray-1"></div>
        <div className="hero-ray hero-ray-2"></div>
        <div className="hero-ray hero-ray-3"></div>
      </div>

      {/* Atmosphere Glows */}
      <div className="hero-atmosphere">
        <div className="hero-glow hero-glow-top"></div>
        <div className="hero-glow hero-glow-bottom"></div>
      </div>

      {/* Main Content */}
      <div className="hero-main">
        <div className="hero-grid">
          {/* Left Column - Content */}
          <div className="hero-left">
            <div className="hero-content-wrap">
              <div className="hero-eyebrow">
                <span className="hero-eyebrow-accent"></span>
                <span>{s.tagline}</span>
              </div>

              <h1 className="hero-title">
                <span className="hero-title-line">
                  {s.title.split(' ').map((w, i) => (
                    <span key={i} className="hero-word" style={{ animationDelay: `${0.1 + i * 0.07}s` }}>{w}</span>
                  ))}
                </span>
                <span className="hero-title-line">
                  <span className="hero-word hero-word-emphasis" style={{ animationDelay: '0.55s' }}>{s.titleEm}</span>
                </span>
              </h1>

              <p className="hero-description">
                <strong>Anbuarasan</strong> — {s.desc}
              </p>

              <div className="hero-tags-row">
                {s.features.map((f, i) => (
                  <span key={i} className="hero-tag" style={{ animationDelay: `${0.7 + i * 0.06}s` }}>{f}</span>
                ))}
              </div>

              <div className="hero-stats-row">
                {s.stats.map((st, i) => (
                  <div key={i} className="hero-stat-item" style={{ animationDelay: `${0.85 + i * 0.07}s` }}>
                    <span className="hero-stat-value">{st.v}</span>
                    <span className="hero-stat-label">{st.l}</span>
                  </div>
                ))}
              </div>

              <div className="hero-actions-row">
                <button className="hero-btn-primary">
                  <span>{s.cta}</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="hero-btn-secondary">
                  <span>{s.secondary}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="hero-right">
            <div className="hero-visual-wrap" style={calcParallax(0.03)}>
              {/* Orbit Rings */}
              <div className="hero-orbit hero-orbit-1"></div>
              <div className="hero-orbit hero-orbit-2"></div>
              
              {/* Orbiting Dots */}
              <div className="hero-orbiter hero-orbiter-1"></div>
              <div className="hero-orbiter hero-orbiter-2"></div>
              <div className="hero-orbiter hero-orbiter-3"></div>

              {/* Image Frame */}
              <div className="hero-image-frame">
                <div className="hero-image-glow"></div>
                <img src={s.visualImage} alt={s.tagline} className="hero-image" />
              </div>

              {/* Floating Accents */}
              <div className="hero-accent hero-accent-1">✦</div>
              <div className="hero-accent hero-accent-2">◈</div>
              <div className="hero-accent hero-accent-3">◆</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="hero-bottom-bar">
        <div className="hero-slide-indicators">
          {[0, 1, 2].map((i) => (
            <button 
              key={i} 
              className={`hero-slide-dot ${currentSlide === i ? 'hero-slide-dot-active' : ''}`} 
              onClick={() => goToSlide(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        
        <div className="hero-slide-counter">
          <span className="hero-counter-current">0{currentSlide + 1}</span>
          <span className="hero-counter-divider"></span>
          <span className="hero-counter-total">03</span>
        </div>
      </div>
    </section>
  );
}

export default Hero;