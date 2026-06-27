import "./ServicesPage.css";

function ServicesPage() {
  return (
    <div className="services-page">

      <section className="services-hero">
        <span>OUR SERVICES</span>

        <h1>
          Transform Your Life Through
          Conscious Living
        </h1>

        <p>
          Empowering individuals through spiritual growth,
          financial awareness, mindset transformation and
          holistic wellness practices.
        </p>
      </section>

      {/* Service 1 */}
      <section className="service-section">
        <div className="service-image">
          <img src="/src/assets/yoga.png" alt="Athma Connect" />
        </div>

        <div className="service-content">
          <span>01</span>
          <h2>Athma Connect</h2>

          <p>
            A transformative self-discovery program designed
            to reconnect individuals with their purpose,
            inner peace and higher consciousness.
          </p>

          <button>Learn More</button>
        </div>
      </section>

      {/* Service 2 */}
      <section className="service-section reverse">
        <div className="service-image">
          <img src="/src/assets/rhythm.png" alt="Brahma Muhurta" />
        </div>

        <div className="service-content">
          <span>02</span>
          <h2>Brahma Muhurta Kriya</h2>

          <p>
            Sacred morning practices that improve discipline,
            focus, clarity and spiritual alignment for a
            successful life.
          </p>

          <button>Learn More</button>
        </div>
      </section>

      {/* Service 3 */}
      <section className="service-section">
        <div className="service-image">
          <img src="/src/assets/F3.jpg" alt="Financial Education" />
        </div>

        <div className="service-content">
          <span>03</span>
          <h2>Financial Education</h2>

       <p>
  Covering Financial Planning, Insurance Awareness, Loan Guidance, Wealth Creation,
  Bitcoin, Ethereum, Beldex, Blockchain & Web3 — all in one journey.
</p>

<div className="service-topics">
  <div className="topic-group">
    <h4>Financial Awareness</h4>
    <ul>
      <li>
        <strong>Financial Planning</strong>
        <span>Understanding budgeting, savings, and long-term financial goal setting for a secure future.</span>
      </li>
      <li>
        <strong>Insurance Awareness</strong>
        <span>Protecting what matters through informed insurance decisions and risk management.</span>
      </li>
      <li>
        <strong>Loan Guidance</strong>
        <span>Understanding responsible borrowing, financial commitments, and debt management.</span>
      </li>
      <li>
        <strong>Wealth Creation</strong>
        <span>Developing sustainable habits and principles for long-term financial growth.</span>
      </li>
    </ul>
  </div>

  <div className="topic-group">
    <h4>Digital Assets</h4>
    <ul>
      <li>
        <strong>Bitcoin</strong>
        <span>Understanding the world's first decentralized digital currency and its underlying technology.</span>
      </li>
      <li>
        <strong>Ethereum</strong>
        <span>Exploring smart contracts, decentralized applications, and the Ethereum ecosystem.</span>
      </li>
      <li>
        <strong>Beldex</strong>
        <span>Learning about privacy-focused blockchain technology and decentralized solutions.</span>
      </li>
      <li>
        <strong>Blockchain & Web3</strong>
        <span>Understanding distributed ledger technology and the next generation of the internet.</span>
      </li>
    </ul>
  </div>
</div>

<button>Learn More</button>

          <button>Learn More</button>
        </div>
      </section>

      

      <section className="why-us">
        <h2>Why Choose Anbu Arasan?</h2>

        <div className="why-grid">
          <div>
            <h3>12+</h3>
            <p>Years Experience</p>
          </div>

          <div>
            <h3>180+</h3>
            <p>Countries Reached</p>
          </div>

          <div>
            <h3>1000+</h3>
            <p>Lives Impacted</p>
          </div>

          <div>
            <h3>4</h3>
            <p>Core Transformation Areas</p>
          </div>
        </div>
      </section>

      <section className="services-cta">
        <h2>Begin Your Transformation Journey Today</h2>

        <button>Book Consultation</button>
      </section>

    </div>
  );
}

export default ServicesPage;