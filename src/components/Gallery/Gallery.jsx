// ============================================
// GALLERY SECTION
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
    { id: "all", label: "All Moments" },
    { id: "brahma", label: "Brahma Muhurta" },
    { id: "athma", label: "Athma Connect" },
    { id: "community", label: "Community" },
    { id: "wellness", label: "Wellness" },
  ];

  const images = [
    { id: 1, src: "https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80", alt: "Morning Meditation", category: "brahma" },
    { id: 2, src: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&q=80", alt: "Yoga Practice", category: "athma" },
    { id: 3, src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=600&q=80", alt: "Group Session", category: "community" },
    { id: 4, src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", alt: "Nature Wellness", category: "wellness" },
    { id: 5, src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=600&q=80", alt: "Sunrise Practice", category: "brahma" },
    { id: 6, src: "https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=600&q=80", alt: "Community Gathering", category: "community" },
    { id: 7, src: "https://images.unsplash.com/photo-1570194065650-d99fb4ee8e39?w=600&q=80", alt: "Wellness Products", category: "wellness" },
    { id: 8, src: "https://images.unsplash.com/photo-1593811167562-9cef47f5f5d5?w=600&q=80", alt: "Spiritual Session", category: "athma" },
    { id: 9, src: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=600&q=80", alt: "Morning Nature", category: "brahma" },
  ];

  const filteredImages = activeFilter === "all" 
    ? images 
    : images.filter(img => img.category === activeFilter);

  return (
    <section className="gallery" ref={sectionRef} id="gallery">
      {/* Background */}
      <div className="gallery-bg">
        <div className="gallery-glow gallery-glow-1"></div>
        <div className="gallery-glow gallery-glow-2"></div>
      </div>

      <div className="gallery-container">
        {/* Header */}
        <div className={`gallery-header ${isVisible ? 'visible' : ''}`}>
          <span className="gallery-tag">Moments & Memories</span>
          <h2 className="gallery-title">
            Our <span className="gallery-title-accent">Gallery</span>
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
              {filter.label}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className={`gallery-grid ${isVisible ? 'visible' : ''}`}>
          {filteredImages.map((image, i) => (
            <div
              key={image.id}
              className="gallery-item"
              style={{ transitionDelay: `${i * 0.06}s` }}
              onClick={() => setLightbox(image)}
            >
              <div className="gallery-item-inner">
                <img src={image.src} alt={image.alt} loading="lazy" />
                <div className="gallery-item-overlay">
                  <span className="gallery-item-icon">⊕</span>
                  <span className="gallery-item-alt">{image.alt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="gallery-empty">
            <span className="gallery-empty-icon">🖼️</span>
            <p>No images found in this category</p>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div className="gallery-lightbox" onClick={() => setLightbox(null)}>
          <button className="gallery-lightbox-close" onClick={() => setLightbox(null)}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M18 6L6 18M6 6l12 12" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </button>
          <div className="gallery-lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={lightbox.src} alt={lightbox.alt} />
            <div className="gallery-lightbox-info">
              <span className="gallery-lightbox-title">{lightbox.alt}</span>
            </div>
          </div>
          <button 
            className="gallery-lightbox-nav gallery-lightbox-prev"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = filteredImages.findIndex(img => img.id === lightbox.id);
              const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
              setLightbox(filteredImages[prevIndex]);
            }}
          >
            ←
          </button>
          <button 
            className="gallery-lightbox-nav gallery-lightbox-next"
            onClick={(e) => {
              e.stopPropagation();
              const currentIndex = filteredImages.findIndex(img => img.id === lightbox.id);
              const nextIndex = (currentIndex + 1) % filteredImages.length;
              setLightbox(filteredImages[nextIndex]);
            }}
          >
            →
          </button>
        </div>
      )}
    </section>
  );
}

export default Gallery;