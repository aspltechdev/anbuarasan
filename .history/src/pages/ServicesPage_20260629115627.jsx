import "./ServicesPage.css";
import bgVideo from '../assets/about.mp4';
import { useNavigate } from "react-router-dom";
import creambg1 from "../assets/serv.png";
import yogaImg from "../assets/yoga.png";
import rhythmImg from "../assets/rhythm.png";
import f1 from "../assets/F1.jpg";
import f2 from "../assets/F2.jpg";
import f3 from "../assets/F3.jpg";
import f4 from "../assets/F4.jpg";
import cryptoImg from "../assets/cryptoteach.png";
import ethereumImg from "../assets/ethereum.png";
import beldexImg from "../assets/beldex.png";
import webImg from "../assets/web.png";

function ServicesPage() {
  return (
    <div className="services-page">

      <section
        className="services-hero"
        style={{ backgroundImage: `url(${creambg1})` }}
      >
        {/* ... unchanged ... */}
      </section>

      {/* Service 1 */}
      <section className="service-section">
        <div className="service-image">
          <img src={yogaImg} alt="Athma Connect" />
        </div>
        {/* ... */}
      </section>

      {/* Service 2 */}
      <section className="service-section reverse">
        <div className="service-image">
          <img src={rhythmImg} alt="Brahma Muhurta" />
        </div>
        {/* ... */}
      </section>

      {/* Service 3 */}
      <section className="service-finance">
        {/* ... */}
        <div className="service-finance-grid">
          {[
            { title: "Financial Planning", desc: "...", image: f1, accent: "#d4a574" },
            { title: "Insurance Awareness", desc: "...", image: f2, accent: "#c9b8a0" },
            { title: "Loan Guidance", desc: "...", image: f3, accent: "#d5c4b0" },
            { title: "Wealth Creation", desc: "...", image: f4, accent: "#d4a574" },
          ].map((card) => (
            <div key={card.title} className="svc-fin-card" style={{ backgroundImage: `url(${card.image})` }}>
              {/* ... */}
            </div>
          ))}
        </div>

        <div className="service-finance-grid digital-grid">
          {[
            { title: "Bitcoin", desc: "...", image: cryptoImg, accent: "#c9b8a0" },
            { title: "Ethereum", desc: "...", image: ethereumImg, accent: "#d5c4b0" },
            { title: "Beldex", desc: "...", image: beldexImg, accent: "#d4a574" },
            { title: "Blockchain & Web3", desc: "...", image: webImg, accent: "#c9b8a0" },
          ].map((card) => (
            <div key={card.title} className="svc-fin-card" style={{ backgroundImage: `url(${card.image})` }}>
              {/* ... */}
            </div>
          ))}
        </div>
      </section>

      {/* rest unchanged */}
    </div>
  );
}

export default ServicesPage;