import "./ProductsPage.css";
import creambg from "../assets/cr.png";
import creambg from "../assets/cr.png";
import firmaxImg from "../assets/firmax3.png";
import o2maxImg from "../assets/o2max3.png";

function ProductsPage() {
  return (
    <div className="products-page">

      {/* HERO */}
      <section
  className="products-hero"
  style={{
    backgroundImage: `url(${creambg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }}
>
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
              <p>80+ Countries</p>
            </div>

          </div>

          <ul>
            <li>12 Medicinal Herbs</li>
            
            <li>Trusted Worldwide</li>
            <li>India Licensed</li>
          </ul>

          <button onClick={() => (window.location.href = "/#contact")}>
  Explore Firmax3
</button>

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
              <p>80+ Countries</p>
            </div>

          </div>

          <ul>
            <li>Oxygen Infused Formula</li>
           
            <li>Global Distribution</li>
            <li>Quality Assured</li>
          </ul>

          <button onClick={() => (window.location.href = "/#contact")}>
  Explore O2Max3
</button>

        </div>

      </section>
      <section
      style={{
        position: "relative",
        height: "50vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: `url(${creambg}) center/cover no-repeat`,
      }}
    >
      {/* overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(210, 180, 140, 0.55)",
          backdropFilter: "blur(2px)",
        }}
      />

      {/* content */}
      <div
        style={{
          position: "relative",
          textAlign: "center",
          color: "#fff",
          maxWidth: "850px",
          padding: "0 20px",
        }}
      >
        <p
          style={{
            fontSize: "18px",
            fontStyle: "italic",
            marginBottom: "20px",
            opacity: 0.9,
          }}
        >
          
        </p>

        <h1
          style={{
            fontSize: "52px",
            fontWeight: 600,
            lineHeight: 1.2,
            marginBottom: "30px",
          }}
        >
          Begin Your Transformation Journey Today
        </h1>

        <button
          style={{
            padding: "14px 34px",
            borderRadius: "50px",
            border: "none",
            background: "#fff",
            color: "#8a6a2f",
            fontSize: "16px",
            fontWeight: 600,
            cursor: "pointer",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.transform = "translateY(-3px)")
          }
          onMouseOut={(e) =>
            (e.target.style.transform = "translateY(0px)")
          }
        >
          Explore Our Products
        </button>
      </div>
    </section>

    </div>
  );
}

export default ProductsPage;