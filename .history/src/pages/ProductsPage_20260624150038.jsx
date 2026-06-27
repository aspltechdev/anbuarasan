import "./ProductsPage.css";

function ProductsPage() {
  return (
    <div className="products-page">

      <section className="products-hero">
        <div className="products-content">
          <span className="products-tag">
            CONSCIOUS LIVING PRODUCTS
          </span>

          <h1>
            Transform Your Life
            <br />
            Through Wisdom &
            <span> Awareness</span>
          </h1>

          <p>
            Carefully designed programs, practices, and learning
            experiences to help you grow spiritually, mentally,
            physically, and financially.
          </p>

          <a href="/#contact" className="products-btn">
            Explore Programs →
          </a>
        </div>
      </section>

      <section className="products-section">

        <h2>Featured Programs</h2>

        <div className="products-grid">

          <div className="product-card">
            <div className="product-number">01</div>

            <h3>Athma Connect</h3>

            <p>
              A transformative self-awareness program
              helping you reconnect with your true self.
            </p>

            <a href="/#contact">Learn More →</a>
          </div>

          <div className="product-card">
            <div className="product-number">02</div>

            <h3>Brahma Muhurta Kriya</h3>

            <p>
              Sacred morning practices that cultivate
              clarity, focus, and inner balance.
            </p>

            <a href="/#contact">Learn More →</a>
          </div>

          <div className="product-card">
            <div className="product-number">03</div>

            <h3>Thought Process Coaching</h3>

            <p>
              Reprogram limiting beliefs and create
              empowering mental patterns.
            </p>

            <a href="/#contact">Learn More →</a>
          </div>

          <div className="product-card">
            <div className="product-number">04</div>

            <h3>Financial Education</h3>

            <p>
              Learn wealth creation, financial awareness,
              and long-term prosperity principles.
            </p>

            <a href="/#contact">Learn More →</a>
          </div>

        </div>
      </section>

      <section className="benefits-section">

        <h2>What You'll Gain</h2>

        <div className="benefits-grid">

          <div className="benefit-card">
            <h3>Self Awareness</h3>
            <p>Discover your purpose and inner strength.</p>
          </div>

          <div className="benefit-card">
            <h3>Mental Clarity</h3>
            <p>Remove confusion and build confidence.</p>
          </div>

          <div className="benefit-card">
            <h3>Financial Growth</h3>
            <p>Create abundance through conscious action.</p>
          </div>

          <div className="benefit-card">
            <h3>Holistic Wellness</h3>
            <p>Balance mind, body, and spirit.</p>
          </div>

        </div>
      </section>

    </div>
  );
}

export default ProductsPage;