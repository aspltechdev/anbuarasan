import "./ServicesPage.css";

function ServicesPage() {
  return (
    <div className="services-page">

      {/* Hero */}
      <section className="services-hero">
        <div className="hero-content">
          <span>OUR SERVICES</span>

          <h1>
            Transforming Lives Through
            Conscious Living
          </h1>

          <p>
            Spiritual growth, financial awareness,
            mindset transformation and holistic wellness.
          </p>
        </div>
      </section>

      {/* Service 1 */}
      <section className="service-row">
        <div className="service-image"></div>

        <div className="service-content">
          <h2>Athma Connect</h2>

          <p>
            A powerful self-discovery journey helping
            individuals reconnect with their purpose,
            inner peace and true potential.
          </p>
        </div>
      </section>

      {/* Service 2 */}
      <section className="service-row reverse">
        <div className="service-image second"></div>

        <div className="service-content">
          <h2>Brahma Muhurta Kriya</h2>

          <p>
            Sacred morning rituals designed to enhance
            discipline, focus, vitality and spiritual
            awakening.
          </p>
        </div>
      </section>

      {/* Service 3 */}
      <section className="service-row">
        <div className="service-image third"></div>

        <div className="service-content">
          <h2>Financial Education</h2>

          <p>
            Learn practical money principles, wealth
            creation strategies and financial freedom
            through conscious decision making.
          </p>
        </div>
      </section>

      {/* Journey */}
      <section className="journey">
        <h2>Your Transformation Journey</h2>

        <div className="steps">
          <div className="step">
            <span>01</span>
            <h3>Awareness</h3>
          </div>

          <div className="step">
            <span>02</span>
            <h3>Clarity</h3>
          </div>

          <div className="step">
            <span>03</span>
            <h3>Action</h3>
          </div>

          <div className="step">
            <span>04</span>
            <h3>Transformation</h3>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <h2>Ready To Begin Your Journey?</h2>

        <a href="/#contact">
          Book A Free Consultation
        </a>
      </section>

    </div>
  );
}

export default ServicesPage;