import "./Finance.css";
import { useEffect, useRef, useState } from "react";

function FinancialEducation() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("financial");
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: "financial", label: "Financial Awareness", icon: "◆" },
    { id: "digital", label: "Digital Assets", icon: "◈" },
  ];

  const financialTopics = [
    {
      icon: "📊",
      title: "Financial Planning",
      desc: "Understanding budgeting, savings, and long-term financial goal setting for a secure future.",
    },
    {
      icon: "🛡️",
      title: "Insurance Awareness",
      desc: "Protecting what matters through informed insurance decisions and risk management.",
    },
    {
      icon: "💡",
      title: "Loan Guidance",
      desc: "Understanding responsible borrowing, financial commitments, and debt management.",
    },
    {
      icon: "🌱",
      title: "Wealth Creation",
      desc: "Developing sustainable habits and principles for long-term financial growth.",
    },
  ];

  const digitalTopics = [
    {
      icon: "₿",
      title: "Bitcoin",
      desc: "Understanding the world's first decentralized digital currency and its underlying technology.",
    },
    {
      icon: "Ξ",
      title: "Ethereum",
      desc: "Exploring smart contracts, decentralized applications, and the Ethereum ecosystem.",
    },
    {
      icon: "⟐",
      title: "Beldex",
      desc: "Learning about privacy-focused blockchain technology and decentralized solutions.",
    },
    {
      icon: "🔗",
      title: "Blockchain & Web3",
      desc: "Understanding distributed ledger technology and the next generation of the internet.",
    },
  ];

  const activeTopics = activeTab === "financial" ? financialTopics : digitalTopics;

  return (
    <section className="fin-edu" ref={sectionRef} id="financial-education">
      {/* Background */}
      <div className="fin-edu-bg">
        <div className="fin-edu-glow fin-edu-glow-1"></div>
        <div className="fin-edu-glow fin-edu-glow-2"></div>
        <div className="fin-edu-grid"></div>
      </div>

      {/* Subtle Particles */}
      <div className="fin-edu-particles">
        {[...Array(8)].map((_, i) => (
          <span
            key={i}
            className="fin-edu-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          />
        ))}
      </div>

      <div className="fin-edu-container">
        {/* Header */}
        <div className={`fin-edu-header ${isVisible ? 'visible' : ''}`}>
          <span className="fin-edu-tag">Knowledge & Awareness</span>
          <h2 className="fin-edu-title">
            Financial Education For{" "}
            <span className="fin-edu-title-accent">A Secure Future</span>
          </h2>
          <p className="fin-edu-subtitle">
            Educational guidance designed to help individuals make informed decisions
          </p>
        </div>

        {/* Tabs */}
        <div className={`fin-edu-tabs ${isVisible ? 'visible' : ''}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`fin-edu-tab ${activeTab === tab.id ? 'fin-edu-tab-active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
            >
              <span className="fin-edu-tab-icon">{tab.icon}</span>
              <span className="fin-edu-tab-label">{tab.label}</span>
              <div className="fin-edu-tab-line"></div>
            </button>
          ))}
        </div>

        {/* Topics Grid */}
        <div className={`fin-edu-grid ${isVisible ? 'visible' : ''}`}>
          {activeTopics.map((topic, i) => (
            <div
              key={topic.title}
              className="fin-edu-card"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <div className="fin-edu-card-icon-wrap">
                <span className="fin-edu-card-icon">{topic.icon}</span>
                <div className="fin-edu-card-icon-glow"></div>
              </div>
              <h3 className="fin-edu-card-title">{topic.title}</h3>
              <p className="fin-edu-card-desc">{topic.desc}</p>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className={`fin-edu-disclaimer ${isVisible ? 'visible' : ''}`}>
          <div className="fin-edu-disclaimer-inner">
            <span className="fin-edu-disclaimer-icon">ℹ️</span>
            <p className="fin-edu-disclaimer-text">
              <strong>Educational guidance only.</strong> No guarantees or investment promises. 
              All information is provided for educational and awareness purposes. Individuals 
              should conduct their own research before making any financial decisions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialEducation;