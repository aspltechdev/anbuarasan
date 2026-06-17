// ============================================
// ABOUT - ATHMA SOUL THEME
// Cinematic Hero-Style About Section
// Expressive, immersive, and emotionally connected
// ============================================
// import "./About.css";
// import { useEffect, useRef, useState } from "react";

// function About() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         }
//       },
//       { threshold: 0.15 }
//     );
//     if (sectionRef.current) observer.observe(sectionRef.current);
//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
//     window.addEventListener("mousemove", handleMouseMove, { passive: true });
//     return () => window.removeEventListener("mousemove", handleMouseMove);
//   }, []);

//   const calcParallax = (depth) => {
//     if (!sectionRef.current) return {};
//     const rect = sectionRef.current.getBoundingClientRect();
//     return {
//       transform: `translate3d(${(mousePos.x - rect.left - rect.width / 2) * depth}px, ${(mousePos.y - rect.top - rect.height / 2) * depth}px, 0)`,
//     };
//   };

//   const values = [
//     { symbol: "✦", title: "Clarity", desc: "Seeing life with renewed perspective" },
//     { symbol: "◈", title: "Purpose", desc: "Discovering your unique path" },
//     { symbol: "◆", title: "Awareness", desc: "Living with mindful presence" },
//     { symbol: "⬡", title: "Success", desc: "Achieving sustainable growth" },
//   ];

//   return (
//     <section className="about" ref={sectionRef} id="about">
//       {/* Cinematic Background */}
//       <div className="about-cinematic-bg">
//         <div className="about-glow about-glow-1"></div>
//         <div className="about-glow about-glow-2"></div>
//         <div className="about-glow about-glow-3"></div>
        
//         {/* Animated gradient orbs */}
//         <div className="about-orb about-orb-1"></div>
//         <div className="about-orb about-orb-2"></div>
//         <div className="about-orb about-orb-3"></div>
//       </div>

//       {/* Breath Waves */}
//       <div className="about-breath-waves">
//         <div className="about-breath-wave wave-a"></div>
//         <div className="about-breath-wave wave-b"></div>
//         <div className="about-breath-wave wave-c"></div>
//       </div>

//       {/* Floating Particles */}
//       <div className="about-particles">
//         {[...Array(30)].map((_, i) => (
//           <span
//             key={i}
//             className="about-particle"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${4 + Math.random() * 6}s`,
//               width: `${2 + Math.random() * 4}px`,
//               height: `${2 + Math.random() * 4}px`,
//               background: `radial-gradient(circle, rgba(212, 165, 116, ${0.05 + Math.random() * 0.1}), transparent)`,
//             }}
//           />
//         ))}
//       </div>

//       <div className="about-container">
//         {/* Hero Header */}
//         <div className={`about-hero ${isVisible ? 'visible' : ''}`}>
//           <div className="about-badge">
//             <span className="about-badge-line"></span>
//             <span className="about-tag">✦ The Mission</span>
//             <span className="about-badge-line"></span>
//           </div>
          
//           <h1 className="about-title">
//             <span className="about-title-line">A Journey Towards</span>
//             <span className="about-title-accent">Conscious Living</span>
//           </h1>
          
//           <p className="about-subtitle">
//             Guiding individuals toward self-awareness, mindset mastery, 
//             and holistic wellbeing through transformative practices
//           </p>
//         </div>

//         {/* Cinematic Card */}
//         <div className={`about-cinematic-card ${isVisible ? 'visible' : ''}`}>
//           <div className="about-card-inner">
//             {/* Left: Visual Story */}
//             <div className="about-visual-story" style={calcParallax(0.02)}>
//               <div className="about-story-frame">
//                 <div className="about-story-image">
//                   <img
//                     src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&h=600&fit=crop&crop=face"
//                     alt="Anbuarasan"
//                   />
//                   <div className="about-story-overlay"></div>
//                 </div>
                
//                 {/* Floating decorative elements */}
//                 <div className="about-story-rings">
//                   <div className="about-story-ring about-story-ring-1"></div>
//                   <div className="about-story-ring about-story-ring-2"></div>
//                 </div>
                
//                 <div className="about-story-symbol">◈</div>
//               </div>

//               {/* Stats floating below */}
//               <div className="about-story-stats">
//                 <div className="about-stat-item">
//                   <span className="about-stat-number">500+</span>
//                   <span className="about-stat-label">Lives Transformed</span>
//                 </div>
//                 <div className="about-stat-divider"></div>
//                 <div className="about-stat-item">
//                   <span className="about-stat-number">12+</span>
//                   <span className="about-stat-label">Years of Service</span>
//                 </div>
//                 <div className="about-stat-divider"></div>
//                 <div className="about-stat-item">
//                   <span className="about-stat-number">50+</span>
//                   <span className="about-stat-label">Countries Reached</span>
//                 </div>
//               </div>
//             </div>

//             {/* Right: Content */}
//             <div className="about-story-content">
//               <div className="about-content-inner">
//                 <div className="about-content-header">
//                   <span className="about-content-tag">About Anbuarasan</span>
//                   <h3 className="about-content-title">A Life Dedicated to Transformation</h3>
//                   <div className="about-content-divider"></div>
//                 </div>

//                 <div className="about-content-body">
//                   <p className="about-text">
//                     For years, <span className="about-name">Anbuarasan</span> has dedicated 
//                     his life to guiding individuals toward{" "}
//                     <span className="about-highlight">self-awareness</span>,{" "}
//                     <span className="about-highlight">mindset mastery</span>,{" "}
//                     <span className="about-highlight">financial consciousness</span>, and{" "}
//                     <span className="about-highlight">holistic wellness</span>.
//                   </p>

//                   <div className="about-mission-block">
//                     <span className="about-mission-label">✦ His mission is simple</span>
//                     <p className="about-mission-text">
//                       Help people live with greater{" "}
//                       <span className="about-emphasis">clarity</span>, stronger{" "}
//                       <span className="about-emphasis">purpose</span>, deeper{" "}
//                       <span className="about-emphasis">awareness</span>, and sustainable{" "}
//                       <span className="about-emphasis">success</span>.
//                     </p>
//                   </div>

//                   <p className="about-text about-text-secondary">
//                     Through daily transformation programs, spiritual coaching sessions, 
//                     financial awareness initiatives, and wellness education, he continues 
//                     to impact lives globally with compassion and wisdom.
//                   </p>
//                 </div>



//                 {/* CTA */}
//                 <a href="#contact" className="about-cta">
//                   <span>Begin Your Transformation</span>
//                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18">
//                     <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default About;

// ============================================
// ABOUT - ATHMA SOUL THEME
// EduFlex-inspired Hero Layout
// Warm sandy palette, clean card grid
// ============================================
import "./About.css";
import { useEffect, useRef, useState } from "react";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const values = [
    { symbol: "✦", title: "Clarity", desc: "Seeing life with renewed perspective" },
    { symbol: "◈", title: "Purpose", desc: "Discovering your unique path" },
    { symbol: "◆", title: "Awareness", desc: "Living with mindful presence" },
    { symbol: "⬡", title: "Success", desc: "Achieving sustainable growth" },
  ];

  const stats = [
    { number: "500+", label: "Lives Transformed" },
    { number: "12+",  label: "Years of Service"  },
    { number: "50+",  label: "Countries Reached" },
  ];

  const images = [
    {
      src: "https://images.unsplash.com/photo-1545389336-cf090694435e?w=400&h=400&fit=crop&crop=face",
      alt: "Anbuarasan",
      size: "large",
      accent: "gold",
      badge: "✦ Clarity",
    },
    {
      src: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=300&h=300&fit=crop&crop=face",
      alt: "Coaching session",
      size: "small",
      accent: "lavender",
      badge: "◈ Purpose",
    },
    {
      src: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=320&h=320&fit=crop&crop=face",
      alt: "Wellness journey",
      size: "medium",
      accent: "sand",
      badge: "◆ Awareness",
    },
  ];

  return (
    <section className="about" ref={sectionRef} id="about">

      {/* Subtle sparkle dots — EduFlex decorative language */}
      <span className="eduflex-spark spark-1">✦</span>
      <span className="eduflex-spark spark-2">✦</span>
      <span className="eduflex-spark spark-3">◆</span>

      <div className="about-container">

        {/* ── LEFT: Text column ── */}
        <div className={`about-text-col ${isVisible ? "visible" : ""}`}>

          <div className="about-eyebrow">
            <span className="about-eyebrow-line"></span>
            <span className="about-eyebrow-label">✦ The Mission</span>
          </div>

          <h1 className="about-heading">
            A new way to live<br />
            <span className="about-heading-accent">&amp; gain awareness</span>
          </h1>

          <p className="about-body">
            <strong className="about-name">Anbuarasan</strong> is here to guide you
            through <span className="about-hl">self-awareness</span>,{" "}
            <span className="about-hl">mindset mastery</span>,{" "}
            <span className="about-hl">financial consciousness</span>, and{" "}
            <span className="about-hl">holistic wellness</span> — helping you live
            with clarity, purpose, and sustainable success.
          </p>

          <div className="about-cta-row">
            <a href="#programs" className="about-btn-primary">Begin Your Journey</a>
            <a href="#about-more" className="about-btn-ghost">Learn more</a>
          </div>

          {/* Stats row — EduFlex-style stat bar */}
          <div className="about-stats-bar">
            {stats.map((s, i) => (
              <div key={i} className="about-stat-cell">
                {i !== 0 && <div className="about-stat-sep" />}
                <div className="about-stat-num">{s.number}</div>
                <div className="about-stat-lbl">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Image mosaic ── */}
        <div className={`about-mosaic ${isVisible ? "visible" : ""}`}>

          {/* Large card — top-left */}
          <div className="mosaic-card mosaic-large mosaic-gold">
            <img
              src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=480&h=520&fit=crop&crop=face"
              alt="Anbuarasan"
            />
            <span className="mosaic-badge">✦ Clarity</span>
            <span className="mosaic-corner-dot dot-gold"></span>
          </div>

          {/* Top-right — small accent card */}
          <div className="mosaic-card mosaic-small mosaic-lavender">
            <img
              src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=320&h=320&fit=crop&crop=face"
              alt="Coaching"
            />
            <span className="mosaic-badge">◈ Purpose</span>
          </div>

          {/* Bottom-right — medium */}
          <div className="mosaic-card mosaic-medium mosaic-sand">
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=380&h=340&fit=crop&crop=face"
              alt="Wellness"
            />
            <span className="mosaic-badge">◆ Awareness</span>
            <span className="mosaic-corner-dot dot-sand"></span>
          </div>

          {/* Floating value pill */}
          <div className="mosaic-pill">
            <span className="mosaic-pill-icon">⬡</span>
            <span className="mosaic-pill-text">Holistic Growth</span>
          </div>

          {/* Decorative hollow circle */}
          <div className="mosaic-deco-ring"></div>
        </div>

      </div>
    </section>
  );
}

export default About;