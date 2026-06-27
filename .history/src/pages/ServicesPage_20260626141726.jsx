import "./ServicesPage.css";
import bgVideo from '../assets/about.mp4';
import { useNavigate } from "react-router-dom";

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
         
          <h2>Athma Connect</h2>

          <p>
            A transformative self-discovery program designed
            to reconnect individuals with their purpose,
            inner peace and higher consciousness.
          </p>

          <button
  className="your-button-class"
  onClick={() => (window.location.href = "/#contact")}
>
  Enquire Now
</button>
        </div>
      </section>

      {/* Service 2 */}
      <section className="service-section reverse">
        <div className="service-image">
          <img src="/src/assets/rhythm.png" alt="Brahma Muhurta" />
        </div>

        <div className="service-content">
          
          <h2>Brahma Muhurta Kriya</h2>

          <p>
            Sacred morning practices that improve discipline,
            focus, clarity and spiritual alignment for a
            successful life.
          </p>

         <button
      className="your-button-class"
      onClick={() => navigate("/#contact")}
    >
      Enquire Now
    </button>
        </div>
      </section>

     {/* Service 3 */}
<section className="service-finance">
  <div className="service-finance-header">
    
    <h2>Wealth Wisdom</h2>
    <p>
      Empowering individuals with financial literacy, digital asset
      knowledge, and the clarity to make confident money decisions.
    </p>
  </div>

  {/* Financial Awareness */}
  <div className="service-finance-row">
    <h4 className="service-finance-row-label">◆ Financial Awareness</h4>
    <div className="service-finance-grid">
      {[
        { title: "Financial Planning", desc: "Understanding budgeting, savings, and long-term financial goal setting for a secure future.", image: "/src/assets/F1.jpg", accent: "#d4a574" },
        { title: "Insurance Awareness", desc: "Protecting what matters through informed insurance decisions and risk management.", image: "/src/assets/F2.jpg", accent: "#c9b8a0" },
        { title: "Loan Guidance", desc: "Understanding responsible borrowing, financial commitments, and debt management.", image: "/src/assets/F3.jpg", accent: "#d5c4b0" },
        { title: "Wealth Creation", desc: "Developing sustainable habits and principles for long-term financial growth.", image: "/src/assets/F4.jpg", accent: "#d4a574" },
      ].map((card) => (
        <div key={card.title} className="svc-fin-card" style={{ backgroundImage: `url(${card.image})` }}>
          <div className="svc-fin-card-overlay" style={{ background: `linear-gradient(145deg, rgba(61,52,44,0.75), rgba(212,165,116,0.25))` }} />
          <div className="svc-fin-card-content">
            <h3>{card.title}</h3>
            <div className="svc-fin-divider" style={{ background: card.accent }} />
            <p>{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  {/* Digital Assets */}
  <div className="service-finance-row">
    <h4 className="service-finance-row-label">◈ Digital Assets</h4>
    <div className="service-finance-grid digital-grid">
      {[
        { title: "Bitcoin", desc: "Understanding the world's first decentralized digital currency and its underlying technology.", image: "/src/assets/cryptoteach.png", accent: "#c9b8a0" },
        { title: "Ethereum", desc: "Exploring smart contracts, decentralized applications, and the Ethereum ecosystem.", image: "/src/assets/ethereum.png", accent: "#d5c4b0" },
        { title: "Beldex", desc: "Learning about privacy-focused blockchain technology and decentralized solutions.", image: "/src/assets/beldex.png", accent: "#d4a574" },
        { title: "Blockchain & Web3", desc: "Understanding distributed ledger technology and the next generation of the internet.", image: "/src/assets/web.png", accent: "#c9b8a0" },
      ].map((card) => (
        <div key={card.title} className="svc-fin-card" style={{ backgroundImage: `url(${card.image})` }}>
          <div className="svc-fin-card-overlay" style={{ background: `linear-gradient(145deg, rgba(61,52,44,0.75), rgba(201,184,160,0.25))` }} />
          <div className="svc-fin-card-content">
            <h3>{card.title}</h3>
            <div className="svc-fin-divider" style={{ background: card.accent }} />
            <p>{card.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <button className="svc-fin-btn">Enquire Now</button>
</section>

      <section className="services-cta">
  <video
    className="cta-video"
    autoPlay
    muted
    loop
    playsInline
   src={bgVideo} 
  />
  <h2>Begin Your Transformation Journey Today</h2>
  <button>Book Consultation</button>
</section>

    </div>
  );
}

export default ServicesPage;