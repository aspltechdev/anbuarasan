import "./ServicesPage.css";

function ServicesPage() {
  return (
    <div className="services-page">

      <section className="services-hero">

        <div className="hero-left">
          <span className="services-tag">ATHMA CONNECT PROGRAMS</span>

          <h1>Reconnect with your soul.<br />Rediscover your purpose.</h1>

          <p>Transform your life through self-awareness, spiritual growth, financial consciousness, and holistic wellness practices.</p>

          <div className="hero-btns">
            <a href="/#contact" className="btn-primary">Begin Your Journey</a>
            <a href="/#about" className="btn-secondary">Learn More</a>
          </div>

          <div className="hero-stats">
            <div className="stat">
              <strong>12K+</strong>
              <span>Lives Transformed</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>8+</strong>
              <span>Programs</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <strong>15+</strong>
              <span>Years of Practice</span>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="photo-grid">
            <div className="photo-card photo-top-left">
              <img src="/assets/hero1.jpg" alt="Meditation" />
            </div>
            <div className="photo-card photo-top-right">
              <img src="/assets/hero2.jpg" alt="Awareness" />
            </div>
            <div className="photo-card photo-bottom">
              <img src="/assets/hero3.jpg" alt="Wellness" />
            </div>
            <div className="photo-accent accent-circle" />
            <div className="photo-accent accent-dot" />
            <div className="photo-accent accent-badge">✦ Awaken</div>
          </div>
        </div>

      </section>

    </div>
  );
}

export default ServicesPage;