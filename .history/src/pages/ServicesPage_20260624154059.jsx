import "./ServicesPage.css";

function ServicesPage() {
  return (
    <div className="services-page">

      <section className="services-hero">
        <div className="services-overlay"></div>

        <div className="services-content">
          <span className="services-tag">
            ATHMA CONNECT PROGRAMS
          </span>

          <h1>
            Reconnect with your soul.
            <br />
            Rediscover your purpose.
          </h1>

          <p>
            Transform your life through self-awareness,
            spiritual growth, financial consciousness,
            and holistic wellness practices.
          </p>

          <a href="/#contact" className="services-btn">
            Begin Your Journey →
          </a>
        </div>
      </section>

      <section className="services-grid-section">
        <h2>Transformation Pathways</h2>

        <div className="services-grid">

          <div className="service-card">
            <span>01</span>
            <h3>Awaken Awareness</h3>
            <p>
              Discover your true self and build deeper
              self-understanding.
            </p>
          </div>

          <div className="service-card">
            <span>02</span>
            <h3>Understand Your Mind</h3>
            <p>
              Learn how thoughts shape reality and
              transform limiting beliefs.
            </p>
          </div>

          <div className="service-card">
            <span>03</span>
            <h3>Transform Patterns</h3>
            <p>
              Break old habits and create empowering
              life systems.
            </p>
          </div>

          <div className="service-card">
            <span>04</span>
            <h3>Live Consciously</h3>
            <p>
              Align your daily actions with your purpose
              and vision.
            </p>
          </div>

        </div>
      </section>

      <section className="programs-section">

        <h2>Core Services</h2>

        <div className="programs-grid">

          <div className="program-card">
            <h3>Athma Connect</h3>
            <p>
              Deep self-discovery and spiritual awareness
              coaching program.
            </p>
          </div>

          <div className="program-card">
            <h3>Brahma Muhurta Kriya</h3>
            <p>
              Powerful morning practices to create clarity,
              discipline, and inner peace.
            </p>
          </div>

          <div className="program-card">
            <h3>Thought Process Coaching</h3>
            <p>
              Rewire mindset patterns and achieve lasting
              personal transformation.
            </p>
          </div>

          <div className="program-card">
            <h3>Financial Education</h3>
            <p>
              Develop financial awareness and build
              long-term prosperity.
            </p>
          </div>

        </div>

      </section>

    </div>
  );
}

export default ServicesPage;