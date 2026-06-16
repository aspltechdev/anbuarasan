// // ============================================
// // FINANCIAL EDUCATION - ATHMA SOUL THEME
// // Cinematic design with emotional connection
// // No literal icons - uses visual cards with expressive elements
// // ============================================
// import "./Finance.css";
// import { useEffect, useRef, useState } from "react";

// function FinancialEducation() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeTab, setActiveTab] = useState("financial");
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.15 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const tabs = [
//     { id: "financial", label: "Financial Awareness", symbol: "◆", color: "#d4a574" },
//     { id: "digital", label: "Digital Assets", symbol: "◈", color: "#c9b8a0" },
//   ];

//   const financialTopics = [
//     {
//       title: "Financial Planning",
//       desc: "Understanding budgeting, savings, and long-term financial goal setting for a secure future.",
//       gradient: "linear-gradient(145deg, #fdf6f0, #f0e0d0)",
//       borderColor: "#d4a574",
//       symbol: "◈"
//     },
//     {
//       title: "Insurance Awareness",
//       desc: "Protecting what matters through informed insurance decisions and risk management.",
//       gradient: "linear-gradient(145deg, #f8f2ea, #ede3d6)",
//       borderColor: "#c9b8a0",
//       symbol: "◆"
//     },
//     {
//       title: "Loan Guidance",
//       desc: "Understanding responsible borrowing, financial commitments, and debt management.",
//       gradient: "linear-gradient(145deg, #faf3ec, #efe5d9)",
//       borderColor: "#d5c4b0",
//       symbol: "⬡"
//     },
//     {
//       title: "Wealth Creation",
//       desc: "Developing sustainable habits and principles for long-term financial growth.",
//       gradient: "linear-gradient(145deg, #fdf6f0, #f0e0d0)",
//       borderColor: "#d4a574",
//       symbol: "✦"
//     },
//   ];

//   const digitalTopics = [
//     {
//       title: "Bitcoin",
//       desc: "Understanding the world's first decentralized digital currency and its underlying technology.",
//       gradient: "linear-gradient(145deg, #f8f2ea, #ede3d6)",
//       borderColor: "#c9b8a0",
//       symbol: "⟐"
//     },
//     {
//       title: "Ethereum",
//       desc: "Exploring smart contracts, decentralized applications, and the Ethereum ecosystem.",
//       gradient: "linear-gradient(145deg, #faf3ec, #efe5d9)",
//       borderColor: "#d5c4b0",
//       symbol: "◇"
//     },
//     {
//       title: "Beldex",
//       desc: "Learning about privacy-focused blockchain technology and decentralized solutions.",
//       gradient: "linear-gradient(145deg, #fdf6f0, #f0e0d0)",
//       borderColor: "#d4a574",
//       symbol: "⬡"
//     },
//     {
//       title: "Blockchain & Web3",
//       desc: "Understanding distributed ledger technology and the next generation of the internet.",
//       gradient: "linear-gradient(145deg, #f8f2ea, #ede3d6)",
//       borderColor: "#c9b8a0",
//       symbol: "◈"
//     },
//   ];

//   const activeTopics = activeTab === "financial" ? financialTopics : digitalTopics;

//   return (
//     <section className="fin-edu" ref={sectionRef} id="financial-education">
//       {/* Background Atmosphere */}
//       <div className="fin-edu-bg">
//         <div className="fin-edu-glow fin-edu-glow-1"></div>
//         <div className="fin-edu-glow fin-edu-glow-2"></div>
//         <div className="fin-edu-glow fin-edu-glow-3"></div>
//       </div>

//       {/* Breath Waves */}
//       <div className="fin-edu-breath-waves">
//         <div className="fin-edu-breath-wave wave-a"></div>
//         <div className="fin-edu-breath-wave wave-b"></div>
//         <div className="fin-edu-breath-wave wave-c"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="fin-edu-particles">
//         {[...Array(25)].map((_, i) => (
//           <span
//             key={i}
//             className="fin-edu-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${4 + Math.random() * 6}s`,
//               width: `${3 + Math.random() * 5}px`,
//               height: `${3 + Math.random() * 5}px`,
//               background: `radial-gradient(circle, rgba(212, 165, 116, ${0.05 + Math.random() * 0.1}), transparent)`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="fin-edu-container">
//         {/* Header */}
//         <div className={`fin-edu-header ${isVisible ? 'visible' : ''}`}>
//           <div className="fin-edu-badge">
//             <span className="fin-edu-badge-line"></span>
//             <span className="fin-edu-tag">✦ Knowledge & Awareness</span>
//             <span className="fin-edu-badge-line"></span>
//           </div>
//           <h2 className="fin-edu-title">
//             Financial Education For{" "}
//             <span className="fin-edu-title-accent">A Secure Future</span>
//             <span className="fin-edu-title-dot">.</span>
//           </h2>
//           <p className="fin-edu-subtitle">
//             Empowering your financial journey with clarity, wisdom, and informed choices
//           </p>
//         </div>

//         {/* Tabs */}
//         <div className={`fin-edu-tabs ${isVisible ? 'visible' : ''}`}>
//           {tabs.map((tab) => (
//             <button
//               key={tab.id}
//               className={`fin-edu-tab ${activeTab === tab.id ? 'fin-edu-tab-active' : ''}`}
//               onClick={() => setActiveTab(tab.id)}
//               style={activeTab === tab.id ? { '--tab-color': tab.color } : {}}
//             >
//               <span className="fin-edu-tab-symbol">{tab.symbol}</span>
//               <span className="fin-edu-tab-label">{tab.label}</span>
//               <div className="fin-edu-tab-line"></div>
//             </button>
//           ))}
//         </div>

//         {/* Topics Grid */}
//         <div className={`fin-edu-grid ${isVisible ? 'visible' : ''}`}>
//           {activeTopics.map((topic, i) => (
//             <div
//               key={topic.title}
//               className="fin-edu-card"
//               style={{ 
//                 transitionDelay: `${i * 0.08}s`,
//                 background: topic.gradient,
//                 borderColor: topic.borderColor,
//               }}
//             >
//               <div className="fin-edu-card-decoration">
//                 <div className="fin-edu-card-symbol" style={{ color: topic.borderColor }}>
//                   {topic.symbol}
//                 </div>
//                 <div className="fin-edu-card-ring" style={{ borderColor: topic.borderColor }}></div>
//               </div>
//               <h3 className="fin-edu-card-title">{topic.title}</h3>
//               <div className="fin-edu-card-divider" style={{ background: topic.borderColor }}></div>
//               <p className="fin-edu-card-desc">{topic.desc}</p>
//               <div className="fin-edu-card-connection">
//                 <span className="fin-edu-card-dot" style={{ background: topic.borderColor }}></span>
//                 <span className="fin-edu-card-dot" style={{ background: topic.borderColor }}></span>
//                 <span className="fin-edu-card-dot" style={{ background: topic.borderColor }}></span>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Disclaimer */}
//         <div className={`fin-edu-disclaimer ${isVisible ? 'visible' : ''}`}>
//           <div className="fin-edu-disclaimer-inner">
//             <div className="fin-edu-disclaimer-symbol">⬡</div>
//             <div className="fin-edu-disclaimer-line"></div>
//             <p className="fin-edu-disclaimer-text">
//               <strong>Educational guidance only.</strong> No guarantees or investment promises. 
//               All information is provided for educational and awareness purposes. Individuals 
//               should conduct their own research before making any financial decisions.
//             </p>
//             <div className="fin-edu-disclaimer-line"></div>
//             <div className="fin-edu-disclaimer-symbol">⬡</div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default FinancialEducation;

// ============================================
// FINANCIAL EDUCATION - ATHMA SOUL THEME
// Cinematic Card Layout with Image Overlays
// Expressive visual storytelling through imagery
// ============================================
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
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const tabs = [
    { id: "financial", label: "Financial Awareness", symbol: "◆", color: "#d4a574" },
    { id: "digital", label: "Digital Assets", symbol: "◈", color: "#c9b8a0" },
  ];

  const financialTopics = [
    {
      title: "Financial Planning",
      desc: "Understanding budgeting, savings, and long-term financial goal setting for a secure future.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&h=600&fit=crop",
      gradient: "linear-gradient(145deg, rgba(61, 52, 44, 0.7), rgba(212, 165, 116, 0.3))",
      borderColor: "#d4a574",
      symbol: "◈",
      accentColor: "#d4a574"
    },
    {
      title: "Insurance Awareness",
      desc: "Protecting what matters through informed insurance decisions and risk management.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&h=600&fit=crop",
      gradient: "linear-gradient(145deg, rgba(61, 52, 44, 0.7), rgba(201, 184, 160, 0.3))",
      borderColor: "#c9b8a0",
      symbol: "◆",
      accentColor: "#c9b8a0"
    },
    {
      title: "Loan Guidance",
      desc: "Understanding responsible borrowing, financial commitments, and debt management.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop",
      gradient: "linear-gradient(145deg, rgba(61, 52, 44, 0.7), rgba(213, 196, 176, 0.3))",
      borderColor: "#d5c4b0",
      symbol: "⬡",
      accentColor: "#d5c4b0"
    },
    {
      title: "Wealth Creation",
      desc: "Developing sustainable habits and principles for long-term financial growth.",
      image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
      gradient: "linear-gradient(145deg, rgba(61, 52, 44, 0.7), rgba(212, 165, 116, 0.3))",
      borderColor: "#d4a574",
      symbol: "✦",
      accentColor: "#d4a574"
    },
  ];

  const digitalTopics = [
    {
      title: "Bitcoin",
      desc: "Understanding the world's first decentralized digital currency and its underlying technology.",
      image: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?w=800&h=600&fit=crop",
      gradient: "linear-gradient(145deg, rgba(61, 52, 44, 0.7), rgba(201, 184, 160, 0.3))",
      borderColor: "#c9b8a0",
      symbol: "⟐",
      accentColor: "#c9b8a0"
    },
    {
      title: "Ethereum",
      desc: "Exploring smart contracts, decentralized applications, and the Ethereum ecosystem.",
      image: "https://images.unsplash.com/photo-1622630998477-20aa696ecb05?w=800&h=600&fit=crop",
      gradient: "linear-gradient(145deg, rgba(61, 52, 44, 0.7), rgba(213, 196, 176, 0.3))",
      borderColor: "#d5c4b0",
      symbol: "◇",
      accentColor: "#d5c4b0"
    },
    {
      title: "Beldex",
      desc: "Learning about privacy-focused blockchain technology and decentralized solutions.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f6bb0f8?w=800&h=600&fit=crop",
      gradient: "linear-gradient(145deg, rgba(61, 52, 44, 0.7), rgba(212, 165, 116, 0.3))",
      borderColor: "#d4a574",
      symbol: "⬡",
      accentColor: "#d4a574"
    },
    {
      title: "Blockchain & Web3",
      desc: "Understanding distributed ledger technology and the next generation of the internet.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f6bb0f8?w=800&h=600&fit=crop",
      gradient: "linear-gradient(145deg, rgba(61, 52, 44, 0.7), rgba(201, 184, 160, 0.3))",
      borderColor: "#c9b8a0",
      symbol: "◈",
      accentColor: "#c9b8a0"
    },
  ];

  const activeTopics = activeTab === "financial" ? financialTopics : digitalTopics;

  return (
    <section className="fin-edu" ref={sectionRef} id="financial-education">
      {/* Background Atmosphere */}
      <div className="fin-edu-bg">
        <div className="fin-edu-glow fin-edu-glow-1"></div>
        <div className="fin-edu-glow fin-edu-glow-2"></div>
        <div className="fin-edu-glow fin-edu-glow-3"></div>
      </div>

      {/* Breath Waves */}
      <div className="fin-edu-breath-waves">
        <div className="fin-edu-breath-wave wave-a"></div>
        <div className="fin-edu-breath-wave wave-b"></div>
        <div className="fin-edu-breath-wave wave-c"></div>
      </div>

      {/* Floating Particles */}
      <div className="fin-edu-particles">
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="fin-edu-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              width: `${3 + Math.random() * 5}px`,
              height: `${3 + Math.random() * 5}px`,
              background: `radial-gradient(circle, rgba(212, 165, 116, ${0.05 + Math.random() * 0.1}), transparent)`,
            }}
          />
        ))}
      </div>

      <div className="fin-edu-container">
        {/* Header */}
        <div className={`fin-edu-header ${isVisible ? 'visible' : ''}`}>
          <div className="fin-edu-badge">
            <span className="fin-edu-badge-line"></span>
            <span className="fin-edu-tag">✦ Knowledge & Awareness</span>
            <span className="fin-edu-badge-line"></span>
          </div>
          <h2 className="fin-edu-title">
            Financial Education For{" "}
            <span className="fin-edu-title-accent">A Secure Future</span>
            <span className="fin-edu-title-dot">.</span>
          </h2>
          <p className="fin-edu-subtitle">
            Empowering your financial journey with clarity, wisdom, and informed choices
          </p>
        </div>

        {/* Tabs */}
        <div className={`fin-edu-tabs ${isVisible ? 'visible' : ''}`}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`fin-edu-tab ${activeTab === tab.id ? 'fin-edu-tab-active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              style={activeTab === tab.id ? { '--tab-color': tab.color } : {}}
            >
              <span className="fin-edu-tab-symbol">{tab.symbol}</span>
              <span className="fin-edu-tab-label">{tab.label}</span>
              <div className="fin-edu-tab-line"></div>
            </button>
          ))}
        </div>

        {/* Topics Grid - Cinematic Cards with Images */}
        <div className={`fin-edu-grid ${isVisible ? 'visible' : ''}`}>
          {activeTopics.map((topic, i) => (
            <div
              key={topic.title}
              className="fin-edu-card"
              style={{ 
                transitionDelay: `${i * 0.08}s`,
                backgroundImage: `url(${topic.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            >
              {/* Card Overlay */}
              <div className="fin-edu-card-overlay" style={{ background: topic.gradient }}></div>
              
              {/* Card Content */}
              <div className="fin-edu-card-content">
                <div className="fin-edu-card-decoration">
                  <span className="fin-edu-card-symbol" style={{ color: topic.accentColor }}>
                    {topic.symbol}
                  </span>
                  <div className="fin-edu-card-ring" style={{ borderColor: topic.accentColor }}></div>
                </div>
                <h3 className="fin-edu-card-title">{topic.title}</h3>
                <div className="fin-edu-card-divider" style={{ background: topic.accentColor }}></div>
                <p className="fin-edu-card-desc">{topic.desc}</p>
                <div className="fin-edu-card-connection">
                  <span className="fin-edu-card-dot" style={{ background: topic.accentColor }}></span>
                  <span className="fin-edu-card-dot" style={{ background: topic.accentColor }}></span>
                  <span className="fin-edu-card-dot" style={{ background: topic.accentColor }}></span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className={`fin-edu-disclaimer ${isVisible ? 'visible' : ''}`}>
          <div className="fin-edu-disclaimer-inner">
            <div className="fin-edu-disclaimer-symbol">⬡</div>
            <div className="fin-edu-disclaimer-line"></div>
            <p className="fin-edu-disclaimer-text">
              <strong>Educational guidance only.</strong> No guarantees or investment promises. 
              All information is provided for educational and awareness purposes. Individuals 
              should conduct their own research before making any financial decisions.
            </p>
            <div className="fin-edu-disclaimer-line"></div>
            <div className="fin-edu-disclaimer-symbol">⬡</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FinancialEducation;