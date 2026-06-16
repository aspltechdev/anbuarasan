// ============================================
// GALLERY - ATHMA SOUL THEME
// Cinematic Gallery with Emotional Connection
// Beautiful image cards with overlay text and soft animations
// ============================================
import "./Gallery.css";
import { useEffect, useRef, useState } from "react";

function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightbox, setLightbox] = useState(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const filters = [
    { id: "all", label: "All Moments", symbol: "◈" },
    { id: "brahma", label: "Brahma Muhurta", symbol: "☀" },
    { id: "athma", label: "Athma Connect", symbol: "✦" },
    { id: "community", label: "Community", symbol: "⬡" },
    { id: "wellness", label: "Wellness", symbol: "⟐" },
  ];

  const images = [
    { 
      id: 1, 
      src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&h=600&fit=crop", 
      alt: "Morning Meditation",
      category: "brahma",
      emotion: "Awakening",
      quote: "The quiet of dawn holds infinite wisdom"
    },
    { 
      id: 2, 
      src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&h=600&fit=crop", 
      alt: "Yoga Practice",
      category: "athma",
      emotion: "Stillness",
      quote: "In stillness, the soul speaks"
    },
    { 
      id: 3, 
      src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop", 
      alt: "Group Session",
      category: "community",
      emotion: "Togetherness",
      quote: "United we rise, together we grow"
    },
    { 
      id: 4, 
      src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&h=600&fit=crop", 
      alt: "Nature Wellness",
      category: "wellness",
      emotion: "Harmony",
      quote: "Nature is the ultimate healer"
    },
    { 
      id: 5, 
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&h=600&fit=crop", 
      alt: "Sunrise Practice",
      category: "brahma",
      emotion: "Renewal",
      quote: "Each sunrise brings new beginnings"
    },
    { 
      id: 6, 
      src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=600&fit=crop", 
      alt: "Community Gathering",
      category: "community",
      emotion: "Connection",
      quote: "Souls connected, hearts aligned"
    },
    { 
      id: 7, 
      src: "https://images.unsplash.com/photo-1570194065650-d99fb4ee8e39?w=800&h=600&fit=crop", 
      alt: "Wellness Products",
      category: "wellness",
      emotion: "Nourishment",
      quote: "Wellness begins with mindful choices"
    },
    { 
      id: 8, 
      src: "https://images.unsplash.com/photo-1593811167562-9cef47f5f5d5?w=800&h=600&fit=crop", 
      alt: "Spiritual Session",
      category: "athma",
      emotion: "Transcendence",
      quote: "The journey inward is the greatest adventure"
    },
    { 
      id: 9, 
      src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=800&h=600&fit=crop", 
      alt: "Morning Nature",
      category: "brahma",
      emotion: "Serenity",
      quote: "Find peace in the morning light"
    },
  ];

  const filteredImages = activeFilter === "all" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  // Get current image index for navigation
  const getCurrentIndex = () => {
    if (!lightbox) return 0;
    return filteredImages.findIndex(img => img.id === lightbox.id);
  };

  return (
    <section className="gallery" ref={sectionRef} id="gallery">
      {/* Background Atmosphere */}
      <div className="gallery-bg">
        <div className="gallery-glow gallery-glow-1"></div>
        <div className="gallery-glow gallery-glow-2"></div>
        <div className="gallery-glow gallery-glow-3"></div>
      </div>

      {/* Breath Waves */}
      <div className="gallery-breath-waves">
        <div className="gallery-breath-wave wave-a"></div>
        <div className="gallery-breath-wave wave-b"></div>
        <div className="gallery-breath-wave wave-c"></div>
      </div>

      {/* Floating Particles */}
      <div className="gallery-particles">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="gallery-particle"
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

      <div className="gallery-container">
        {/* Header */}
        <div className={`gallery-header ${isVisible ? 'visible' : ''}`}>
          <div className="gallery-badge">
            <span className="gallery-badge-line"></span>
            <span className="gallery-tag">✦ Moments & Memories</span>
            <span className="gallery-badge-line"></span>
          </div>
          <h2 className="gallery-title">
            Our <span className="gallery-title-accent">Gallery</span>
            <span className="gallery-title-dot">.</span>
          </h2>
          <p className="gallery-subtitle">
            Glimpses from our sessions, community gatherings, and transformational journeys
          </p>
        </div>

        {/* Filters */}
        <div className={`gallery-filters ${isVisible ? 'visible' : ''}`}>
          {filters.map((filter) => (
            <button
              key={filter.id}
              className={`gallery-filter ${activeFilter === filter.id ? 'gallery-filter-active' : ''}`}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span className="gallery-filter-symbol">{filter.symbol}</span>
              <span className="gallery-filter-label">{filter.label}</span>
              <span className="gallery-filter-line"></span>
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className={`gallery-grid ${isVisible ? 'visible' : ''}`}>
          {filteredImages.map((image, i) => (
            <div
              key={image.id}
              className={`gallery-item gallery-item-${i % 3 === 0 ? 'tall' : i % 3 === 1 ? 'wide' : 'standard'}`}
              style={{ transitionDelay: `${i * 0.06}s` }}
              onClick={() => setLightbox(image)}
            >
              <div className="gallery-item-inner">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-item-overlay">
                  <div className="gallery-item-content">
                    <span className="gallery-item-emotion">{image.emotion}</span>
                    <span className="gallery-item-alt">{image.alt}</span>
                    <div className="gallery-item-divider"></div>
                    <span className="gallery-item-quote">"{image.quote}"</span>
                  </div>
                  <div className="gallery-item-expand">
                    <span>✦</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="gallery-empty">
            <div className="gallery-empty-symbol">◈</div>
            <p>No moments found in this category</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="gallery-lightbox-close" onClick={() => setLightbox(null)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="28" height="28">
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <div className="gallery-lightbox-info">
              <span className="gallery-lightbox-emotion">{lightbox.emotion}</span>
              <span className="gallery-lightbox-title">{lightbox.alt}</span>
              <div className="gallery-lightbox-divider"></div>
              <span className="gallery-lightbox-quote">"{lightbox.quote}"</span>
            </div>
          </div>

          <button 
            className="gallery-lightbox-nav gallery-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = getCurrentIndex();
              const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
              setLightbox(filteredImages[prevIndex]);
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="28" height="28">
              <path d="M15 18l-6-6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button 
            className="gallery-lightbox-nav gallery-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = getCurrentIndex();
              const nextIndex = (currentIndex + 1) % filteredImages.length;
              setLightbox(filteredImages[nextIndex]);
            }}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="28" height="28">
              <path d="M9 18l6-6-6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          <div className="gallery-lightbox-counter">
            <span>{String(getCurrentIndex() + 1).padStart(2, '0')}</span>
            <span className="gallery-lightbox-counter-sep">/</span>
            <span>{String(filteredImages.length).padStart(2, '0')}</span>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;