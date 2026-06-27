import "./ProductsPage.css";
import creambg from "../assets/cr.png";
import creambg1 from "../assets/c.png";
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
    minHeight: "70vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: `url(${creambg1}) center/cover no-repeat`,
    overflow: "hidden",
  }}
>
  {/* Dark Gradient Overlay */}
  <div
    style={{
      position: "absolute",
      inset: 0,
      background:
        "linear-gradient(90deg, rgba(20,20,20,.55), rgba(20,20,20,.15))",
    }}
  />

  {/* Content */}
  <div
    style={{
      position: "relative",
      width: "90%",
      maxWidth: "1200px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "60px",
      flexWrap: "wrap",
    }}
  >
    {/* Left */}
    <div style={{ flex: 1, minWidth: "320px" }}>
      <span
        style={{
          display: "inline-block",
          padding: "8px 18px",
          borderRadius: "30px",
          background: "rgba(255,255,255,.15)",
          color: "#fff",
          letterSpacing: "2px",
          fontSize: "13px",
          marginBottom: "25px",
          backdropFilter: "blur(10px)",
        }}
      >
        PREMIUM WELLNESS
      </span>

      <h1
        style={{
          color: "#fff",
          fontSize: "clamp(42px,6vw,72px)",
          lineHeight: 1.1,
          fontWeight: "700",
          marginBottom: "25px",
        }}
      >
        Begin Your
        <br />
        Transformation
        <br />
        Journey
      </h1>

      <p
        style={{
          color: "rgba(255,255,255,.85)",
          maxWidth: "500px",
          fontSize: "18px",
          lineHeight: "32px",
          marginBottom: "35px",
        }}
      >
        Discover premium wellness products crafted to enhance your health,
        confidence, and everyday lifestyle.
      </p>

      <button
        style={{
          padding: "16px 36px",
          borderRadius: "50px",
          background: "#b88b3d",
          color: "#fff",
          border: "none",
          fontSize: "17px",
          fontWeight: "600",
          cursor: "pointer",
          boxShadow: "0 15px 35px rgba(184,139,61,.35)",
        }}
      >
        Explore Products →
      </button>
    </div>

    {/* Right Card */}
    <div
      style={{
        width: "330px",
        padding: "35px",
        borderRadius: "30px",
        background: "rgba(255,255,255,.12)",
        backdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,.25)",
        color: "#fff",
      }}
    >
      <h3
        style={{
          marginBottom: "18px",
          fontSize: "28px",
        }}
      >
        Why Choose Us?
      </h3>

      <div style={{ marginBottom: "18px" }}>
        ✓ Premium Ingredients
      </div>

      <div style={{ marginBottom: "18px" }}>
        ✓ Trusted Wellness Solutions
      </div>

      <div style={{ marginBottom: "18px" }}>
        ✓ Fast Nationwide Delivery
      </div>

      <div>
        ✓ Thousands of Happy Customers
      </div>
    </div>
  </div>
</section>

    </div>
  );
}

export default ProductsPage;