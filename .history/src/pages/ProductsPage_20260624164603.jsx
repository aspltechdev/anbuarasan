import "./ProductsPage.css";

import firmaxImg from "../assets/firmax3.png";
import o2maxImg from "../assets/o2max3.png";

function ProductsPage() {
  return (
    <div className="products-page">

      {/* HERO */}
      <section className="products-hero">
        <span>PREMIUM WELLNESS PRODUCTS</span>

        <h1>
          Nature. Science.
          Wellness.
        </h1>

        <p>
          Discover globally trusted wellness products
          designed to support holistic health,
          vitality and conscious living.
        </p>
      </section>

      {/* FIRMAX */}
      <section className="product-section">

        <div className="product-content">

          <span className="product-tag">
            ADVANCED HERBAL FORMULATION
          </span>

          <h2>Firmax3</h2>

          <div className="line"></div>

          <p>
            A premium wellness cream crafted with
            12 medicinal herbs and traditional
            botanical wisdom. Designed to support
            an active lifestyle and daily wellness
            routines naturally.
          </p>

          <div className="product-features">

            <div>
              <h4>Origin</h4>
              <p>Malaysia</p>
            </div>

            <div>
              <h4>Reach</h4>
              <p>180+ Countries</p>
            </div>

          </div>

          <ul>
            <li>12 Medicinal Herbs</li>
            <li>GMP Certified Manufacturing</li>
            <li>Trusted Worldwide</li>
            <li>India Licensed</li>
          </ul>

          <button>Explore Firmax3</button>

        </div>

        <div className="product-image">
          <img src={firmaxImg} alt="Firmax3" />
        </div>

      </section>

      {/* O2MAX */}
      <section className="product-section reverse">

        <div className="product-image">
          <img src={o2maxImg} alt="O2Max3" />
        </div>

        <div className="product-content">

          <span className="product-tag">
            OXYGEN INFUSED WELLNESS
          </span>

          <h2>O2Max3</h2>

          <div className="line"></div>

          <p>
            An innovative oxygen-infused formulation
            created to complement modern lifestyles,
            supporting energy, wellness and daily
            performance.
          </p>

          <div className="product-features">

            <div>
              <h4>Origin</h4>
              <p>Malaysia</p>
            </div>

            <div>
              <h4>Reach</h4>
              <p>180+ Countries</p>
            </div>

          </div>

          <ul>
            <li>Oxygen Infused Formula</li>
            <li>ISO 22716 Certified</li>
            <li>Global Distribution</li>
            <li>Quality Assured</li>
          </ul>

          <button>Explore O2Max3</button>

        </div>

      </section>

    </div>
  );
}

export default ProductsPage;