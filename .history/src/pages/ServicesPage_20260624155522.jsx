import "./ServicesPage.css";

function ServicesPage() {
  return (
    <section className="services-page">

      <div className="services-overlay"></div>

      <div className="services-container">

        {/* LEFT SIDE */}
        <div className="services-journey">

          <div className="center-circle">
            ✧
          </div>

          <div className="service-box top">
            <h3>Athma Connect</h3>
            <p>Know your inner universe</p>
          </div>

          <div className="service-box left">
            <h3>Personal Growth</h3>
            <p>Expand beyond limits</p>
          </div>

          <div className="service-box right active">
            <h3>Inner Peace</h3>
            <p>Stillness within</p>
          </div>

          <div className="service-box bottom-left">
            <h3>Purpose Discovery</h3>
            <p>Your true calling</p>
          </div>

          <div className="service-box bottom-right">
            <h3>Financial Freedom</h3>
            <p>Conscious wealth</p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="services-content">

          <span className="service-label">
            ANBU ARASAN SERVICES
          </span>

          <h1>
            Transform Your Mind.
            <br />
            Elevate Your Life.
          </h1>

          <p>
            Discover a holistic approach to self-awareness,
            spiritual growth, financial education and
            personal transformation through guided coaching.
          </p>

          <div className="service-grid">

            <div>
              <span>01</span>
              Athma Connect
            </div>

            <div>
              <span>02</span>
              Brahma Muhurta
            </div>

            <div>
              <span>03</span>
              Financial Education
            </div>

            <div>
              <span>04</span>
              Wellness Coaching
            </div>

          </div>

          <button>
            Begin Your Transformation →
          </button>

        </div>

      </div>

    </section>
  );
}

export default ServicesPage;