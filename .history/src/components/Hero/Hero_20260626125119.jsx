// Hero.jsx - Updated with warm, vibration-reflecting colors
import "./Hero.css";
import { useEffect, useRef, useState, useCallback } from "react";
import spiritualBg from "../../assets/h.png";
import financialBg from "../../assets/cryptobg.png";
import productsBg from "../../assets/creambg.png";
import heroImage from "../../assets/h.png";

function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  const heroRef = useRef(null);
  const slideTimer = useRef(null);
  const canvasRef = useRef(null);

  // Entry animation
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Auto-slide
  useEffect(() => {
    slideTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 8000);
    return () => clearInterval(slideTimer.current);
  }, []);

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    clearInterval(slideTimer.current);
    slideTimer.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % 3);
    }, 8000);
  }, []);

  // Smooth mouse tracking
  useEffect(() => {
    let smoothX = 0.5, smoothY = 0.5;
    let rafId;

    const handleMouseMove = (e) => {
      const rect = heroRef.current?.getBoundingClientRect();
      if (rect) {
        smoothX = (e.clientX - rect.left) / rect.width;
        smoothY = (e.clientY - rect.top) / rect.height;
      }
    };

    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    const animate = () => {
      setMousePos(prev => ({
        x: prev.x + (smoothX - prev.x) * 0.05,
        y: prev.y + (smoothY - prev.y) * 0.05
      }));
      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });
    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(rafId);
    };
  }, []);

// Plum Purple Theme Particle System
useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId, particles = [];
    let time = 0;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + 'px';
      canvas.style.height = window.innerHeight + 'px';
      ctx.scale(dpr, dpr);
    };

    class PlumParticle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 3 + 0.5;
        this.size = this.baseSize;
        this.alpha = Math.random() * 0.3 + 0.1;
        this.phase = Math.random() * Math.PI * 2;
        this.speed = 0.002 + Math.random() * 0.004;
        this.amplitude = 40 + Math.random() * 80;
        this.angle = Math.random() * Math.PI * 2;
        this.frequency = 0.02 + Math.random() * 0.04;
        this.waveOffset = Math.random() * Math.PI * 2;
        
        // Rich plum/purple color palette
        const colors = [
          'rgba(168, 85, 247, 0.6)',   // Bright purple
          'rgba(147, 51, 234, 0.5)',   // Medium purple
          'rgba(192, 132, 252, 0.4)',  // Light purple
          'rgba(124, 58, 237, 0.5)',   // Deep purple
          'rgba(233, 213, 255, 0.3)',  // Soft lavender
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(time, mouseX, mouseY) {
        this.phase += this.speed;
        this.angle += 0.001;
        
        // Vibration-like movement
        const vibration = Math.sin(time * this.frequency + this.waveOffset);
        this.size = this.baseSize * (1 + vibration * 0.3);
        
        this.x += Math.sin(time * 0.0005 + this.phase) * 0.02 * (1 + vibration);
        this.y += Math.cos(time * 0.0003 + this.phase * 0.7) * 0.02 * (1 + vibration);
        
        if (mouseX && mouseY) {
          const dx = this.x - mouseX * canvas.width;
          const dy = this.y - mouseY * canvas.height;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            const force = (1 - dist / 200) * 0.002;
            this.x -= dx * force;
            this.y -= dy * force;
          }
        }
        
        if (this.x < -20) this.x = canvas.width + 20;
        if (this.x > canvas.width + 20) this.x = -20;
        if (this.y < -20) this.y = canvas.height + 20;
        if (this.y > canvas.height + 20) this.y = -20;
      }

      draw(ctx) {
        const alpha = this.alpha * (0.8 + 0.2 * Math.sin(this.phase));
        
        ctx.save();
        ctx.globalAlpha = alpha;
        
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 8
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(0.5, `rgba(147, 51, 234, 0.2)`);
        gradient.addColorStop(1, 'transparent');
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 8, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
        
        // Inner glow with bright purple
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 132, 252, ${alpha * 1.5})`;
        ctx.fill();
        
        ctx.restore();
      }
    }

    const init = () => {
      particles = Array.from({ length: 50 }, () => new PlumParticle());
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(p => {
        p.update(time, mousePos.x, mousePos.y);
        p.draw(ctx);
      });
      
      animId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();
    
    window.addEventListener("resize", resize);
    
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [mousePos]);

  const slides = [
    {
      id: 'spiritual',
      title: 'Awaken Your',
      titleEm: 'Inner Self',
      tagline: 'Conscious Living',
      description: 'Guiding individuals worldwide toward spiritual awareness, financial consciousness, and holistic wellness through transformational coaching.',
      features: ['Athma Connect', 'Brahma Muhurta Kriya', 'Thought Process Coaching'],
      image: spiritualBg,
      bgImage: heroImage,
    },
    {
      id: 'financial',
      title: 'Master Your',
      titleEm: 'Financial Freedom',
      tagline: 'Financial Empowerment',
      description: 'Expert guidance in financial literacy, wealth creation, insurance awareness, and digital asset education.',
      features: ['Wealth Building', 'Digital Assets', 'Risk Awareness'],
      image: financialBg,
      bgImage: financialBg,
    },
    {
      id: 'wellness',
      title: 'Embrace',
      titleEm: 'Holistic Wellness',
      tagline: 'Wellness & Vitality',
      description: 'Premium wellness solutions with 12 medicinal herbs. Trusted across 120+ countries for purity and excellence.',
      features: ['Firmax3', 'O2max3', 'Natural Wellness'],
      image: productsBg,
      bgImage: productsBg,
    }
  ];

  const s = slides[currentSlide];

  return (
    <section className="hero" ref={heroRef} id="home">
      {/* Particle Canvas */}
      <canvas ref={canvasRef} className="hero-canvas" />

      {/* Warm Earthy Background */}
      <div className="hero-bg-container">
        {slides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`hero-bg-slide ${currentSlide === idx ? 'active' : ''}`}
            style={{
              backgroundImage: `url(${slide.bgImage})`,
              transform: currentSlide === idx 
                ? `translate3d(${(mousePos.x - 0.5) * 15}px, ${(mousePos.y - 0.5) * 15 + scrollY * 0.008}px, 0) scale(1.03)` 
                : 'scale(1.01)',
              transition: 'transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), opacity 1.5s ease',
              opacity: currentSlide === idx ? 1 : 0,
            }}
          />
        ))}
        <div className="hero-bg-overlay"></div>
      </div>

      {/* Warm Light Effects */}
      <div className="hero-light-effects">
        <div className="hero-light-spot hero-light-spot-1"></div>
        <div className="hero-light-spot hero-light-spot-2"></div>
        <div className="hero-light-spot hero-light-spot-3"></div>
      </div>

      {/* Subtle Geometry with warm tones */}
      <div className="hero-geometry">
        <div className="hero-geo-ring hero-geo-ring-1"></div>
        <div className="hero-geo-ring hero-geo-ring-2"></div>
      </div>

      {/* Main Content */}
      <div className="hero-content">
        <div className={`hero-container ${isVisible ? 'visible' : ''}`}>
          {/* Top Bar */}
          <div className="hero-top-bar">
            <div className="hero-brand">
              <span className="hero-brand-dot"></span>
              <span className="hero-brand-name">Anbuarasan</span>
              <span className="hero-brand-separator">•</span>
              <span className="hero-brand-tagline">Consciousness, Wealth & Wellness</span>
            </div>
            <div className="hero-nav-indicators">
              {[0, 1, 2].map((i) => (
                <button
                  key={i}
                  className={`hero-nav-indicator ${currentSlide === i ? 'active' : ''}`}
                  onClick={() => goToSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* Main Grid */}
          <div className="hero-grid">
            {/* Left Content */}
            <div className="hero-left">
              <div className="hero-tagline">
                <span className="hero-tagline-icon">✦</span>
                <span className="hero-tagline-text">{s.tagline}</span>
              </div>

              <h1 className="hero-headline">
                <span className="hero-headline-main">{s.title}</span>
                <span className="hero-headline-emphasis">{s.titleEm}</span>
              </h1>

              <p className="hero-description">{s.description}</p>

              <div className="hero-features">
                {s.features.map((feature, index) => (
                  <span key={index} className="hero-feature">
                    <span className="hero-feature-dot"></span>
                    {feature}
                  </span>
                ))}
              </div>

              <div className="hero-actions">
                <button className="hero-primary-btn">
                  <a href="/#contact" className="hero-primary-btn"></a>
                  <span>Begin Your Transformation</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <><a/>
                </button>
                <button className="hero-secondary-btn">Learn More</button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="hero-right">
              <div className="hero-visual">
                <div className="hero-image-container">
                  <div className="hero-image-glow"></div>
                  <div className="hero-image-ring hero-image-ring-1"></div>
                  <div className="hero-image-ring hero-image-ring-2"></div>
                  <div className="hero-image-frame">
                    <img src={s.image} alt={s.tagline} className="hero-image" />
                    <div className="hero-image-shine"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="hero-bottom">
            <div className="hero-stats">
              <div className="hero-stat">
                <span className="hero-stat-number">500+</span>
                <span className="hero-stat-label">Souls Guided</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-number">12+</span>
                <span className="hero-stat-label">Years Wisdom</span>
              </div>
              <div className="hero-stat-divider"></div>
              <div className="hero-stat">
                <span className="hero-stat-number">80+</span>
                <span className="hero-stat-label">Countries</span>
              </div>
            </div>

            <div className="hero-progress">
              <span className="hero-progress-label">0{currentSlide + 1}</span>
              <div className="hero-progress-bar">
                <div className="hero-progress-fill" style={{ width: `${((currentSlide + 1) / 3) * 100}%` }}></div>
              </div>
              <span className="hero-progress-label">03</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;