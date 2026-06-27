import "./AboutPage.css";
// import aboutImg from "../assets/about-main.jpg"; // replace with your image

function AboutPage() {
  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-tag">ABOUT ANBU ARASAN</span>

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
          {/* <img src={aboutImg} alt="Anbu Arasan" /> */}
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
              <h3>180+</h3>
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
        <div className="vision-card">
          <h2>Mission</h2>
          <p>
            To inspire conscious living and create meaningful change
            through education, self-awareness, and practical wisdom.
          </p>
        </div>

        <div className="vision-card">
          <h2>Vision</h2>
          <p>
            A world where individuals live with clarity, purpose,
            abundance, and holistic well-being.
          </p>
        </div>
      </section>

      {/* Values */}
      <section className="values-section">
        <h2>Core Principles</h2>

        <div className="values-grid">
          <div className="value-card">
            <h3>Self Awareness</h3>
            <p>Understand yourself to transform your future.</p>
          </div>

          <div className="value-card">
            <h3>Financial Consciousness</h3>
            <p>Build wealth with wisdom and responsibility.</p>
          </div>

          <div className="value-card">
            <h3>Holistic Wellness</h3>
            <p>Balance mind, body, and spirit.</p>
          </div>

          <div className="value-card">
            <h3>Purpose Driven Growth</h3>
            <p>Create lasting transformation with intention.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;