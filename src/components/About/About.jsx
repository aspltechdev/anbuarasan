import "./About.css";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-content">
          <span className="section-tag">
            About Anbu Arasan
          </span>

          <h2>
            Inspiring Lives Through Faith,
            Financial Awareness & Wellness
          </h2>

          <p>
            Anbu Arasan is a passionate speaker,
            mentor, and consultant dedicated to
            helping individuals and families build
            a stronger future through spiritual
            guidance, financial education, and
            personal wellness.
          </p>

          <p>
            Through motivational programs,
            financial awareness sessions, and
            wellness initiatives, he has impacted
            people from different backgrounds,
            empowering them to make informed
            decisions and live a more balanced
            life.
          </p>

          <div className="about-highlights">
            <div>
              <h3>Faith</h3>
              <p>Spiritual & motivational programs</p>
            </div>

            <div>
              <h3>Finance</h3>
              <p>Loans, investments & awareness</p>
            </div>

            <div>
              <h3>Wellness</h3>
              <p>Healthy living solutions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;