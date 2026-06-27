import "./AboutPage.css";
import aboutImg from "../assets/bginnercard.png";
import aboutImg1 from "../assets/bg.png";
import aboutImg2 from "../assets/Athma2.png";
import aboutImg3 from "../assets/Athma5.png";
import aboutImg4 from "../assets/cryptobg.png";

// const heroImg = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=1600&q=80";
// const missionImg = "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80";
// const visionImg = "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80";
// const valuesBgImg = "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=1600&q=80";

function AboutPage() {
  return (
    <div className="about-page">

      {/* Hero */}
      <section className="about-hero" style={{ backgroundImage: `url(${aboutImg1})` }}>
        <div className="about-hero-overlay" />
        <div className="about-hero-content">
          <span className="about-tag">ABOUT ANBARASAN</span>
          <h1>
            Empowering Lives Through
            <span> Conscious Living</span>
          </h1>
          <p>
            Dedicated to guiding individuals toward self-awareness,
            financial consciousness, and holistic wellness through
            transformative practices and personalized coaching.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="about-main">
        <div className="about-image">
          <img src={aboutImg} alt="Anbu Arasan" />
        </div>
        <div className="about-content">
          <h2>My Journey</h2>
          <p>
            For more than a decade, I have been helping individuals
            discover their inner potential through a unique blend of
            spiritual wisdom, mindset transformation, financial education,
            and holistic wellness.
          </p>
          <p>
            My mission is to create lasting transformation by helping
            people align their thoughts, actions, and goals with a deeper
            sense of purpose and awareness.
          </p>
          <div className="about-stats">
            <div className="stat-card">
              <h3>12+</h3>
              <p>Years Experience</p>
            </div>
            <div className="stat-card">
              <h3>80+</h3>
              <p>Countries Reached</p>
            </div>
            <div className="stat-card">
              <h3>5000+</h3>
              <p>Lives Impacted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="vision-section">
        <div className="vision-card" style={{ backgroundImage: `url(${aboutImg3})` }}>
          <div className="vision-card-overlay" />
          <div className="vision-card-body">
            <h2>Mission</h2>
            <p>
              To inspire conscious living and create meaningful change
              through education, self-awareness, and practical wisdom.
            </p>
          </div>
        </div>
        <div className="vision-card" style={{ backgroundImage: `url(${aboutImg2})` }}>
          <div className="vision-card-overlay" />
          <div className="vision-card-body">
            <h2>Vision</h2>
            <p>
              A world where individuals live with clarity, purpose,
              abundance, and holistic well-being.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section" style={{ backgroundImage: `url(${aboutImg4 })` }}>
        <div className="values-section-overlay" />
        <div className="values-inner">
          <h2>Core Principles</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card-tint" />
              <div className="value-card-body">
                <h3>Self Awareness</h3>
                <p>Understand yourself to transform your future.</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-card-tint" />
              <div className="value-card-body">
                <h3>Financial Consciousness</h3>
                <p>Build wealth with wisdom and responsibility.</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-card-tint" />
              <div className="value-card-body">
                <h3>Holistic Wellness</h3>
                <p>Balance mind, body, and spirit.</p>
              </div>
            </div>
            <div className="value-card">
              <div className="value-card-tint" />
              <div className="value-card-body">
                <h3>Purpose Driven Growth</h3>
                <p>Create lasting transformation with intention.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default AboutPage;