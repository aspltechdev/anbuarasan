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

import "./About.css";
import { useEffect, useRef, useState } from "react";
import creamImg from "../../assets/cream.png";
import yogaImg from "../../assets/yoga.png";
import cryptoImg from "../../assets/crypto.png";
import bgVideo from "../../assets/about.mp4";
import bgImg from "../../assets/bg.png";

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);
  const sectionVidRef = useRef(null);
  const [secVidIndex, setSecVidIndex] = useState(0);

  const sectionVideos = [
    "https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4",
    "https://videos.pexels.com/video-files/3045163/3045163-uhd_2560_1440_25fps.mp4",
    "https://videos.pexels.com/video-files/7579476/7579476-hd_1920_1080_25fps.mp4",
    "https://videos.pexels.com/video-files/3875977/3875977-hd_1280_720_25fps.mp4",
  ];

  const handleSectionVideoEnd = () => {
    setSecVidIndex((prev) => (prev + 1) % sectionVideos.length);
  };

  useEffect(() => {
    if (sectionVidRef.current) {
      sectionVidRef.current.load();
      sectionVidRef.current.play();
    }
  }, [secVidIndex]);

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

  useEffect(() => {
    const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const calcParallax = (depth) => {
    if (!sectionRef.current) return {};
    const rect = sectionRef.current.getBoundingClientRect();
    return {
      transform: `translate3d(${
        (mousePos.x - rect.left - rect.width / 2) * depth
      }px, ${(mousePos.y - rect.top - rect.height / 2) * depth}px, 0)`,
    };
  };

  return (
    <section className="about" ref={sectionRef} id="about">

      {/* ── FULL SECTION CYCLING BG VIDEO ── */}
      <div className="about-bg-video-wrap">
       <img
    className="about-bg-video"
    src={bgImg}
    alt=""
  />
        <div className="about-bg-video-shade" />
      </div>

      {/* ── Ambient section background ── */}
      <div className="about-cinematic-bg">
        <div className="about-glow about-glow-1"></div>
        <div className="about-glow about-glow-2"></div>
        <div className="about-glow about-glow-3"></div>
        <div className="about-orb about-orb-1"></div>
        <div className="about-orb about-orb-2"></div>
        <div className="about-orb about-orb-3"></div>
      </div>

      <div className="about-breath-waves">
        <div className="about-breath-wave wave-a"></div>
        <div className="about-breath-wave wave-b"></div>
        <div className="about-breath-wave wave-c"></div>
      </div>

      <div className="about-particles">
        {[...Array(24)].map((_, i) => (
          <span
            key={i}
            className="about-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`,
              width: `${2 + Math.random() * 4}px`,
              height: `${2 + Math.random() * 4}px`,
              background: `radial-gradient(circle, rgba(212, 165, 116, ${
                0.05 + Math.random() * 0.1
              }), transparent)`,
            }}
          />
        ))}
      </div>

      <div className="about-container">

        {/* ── Section header ── */}
        <div className={`about-hero ${isVisible ? "visible" : ""}`}>
          <div className="about-badge">
            <span className="about-badge-line"></span>
            <span className="about-tag">✦ The Mission</span>
            <span className="about-badge-line"></span>
          </div>
          <h1 className="about-title">
            <span className="about-title-line">A Journey Towards</span>
            <span className="about-title-accent">Conscious Living</span>
          </h1>
          <p className="about-subtitle">
            Guiding individuals toward self-awareness, mindset mastery,
            and holistic wellbeing through transformative practices
          </p>
        </div>

        {/* ── Main cinematic card ── */}
        <div className={`about-cinematic-card ${isVisible ? "visible" : ""}`}>
          <div className="about-card-inner">

            {/* ════ LEFT PANEL — video bg + frost + mosaic ════ */}
            <div className="about-visual-panel">

              <video
                className="about-panel-video"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={bgVideo} type="video/mp4" />
              </video>

              <div className="about-frost-grain"></div>
              <div className="about-frost-tint"></div>
              <div className="about-frost-shine"></div>
              <div className="about-frost-vignette"></div>

              {/* ── MOSAIC CARDS (float above frost) ── */}
              <div className="about-mosaic" style={calcParallax(0.012)}>
                <div className="about-mosaic-bg"></div>

                Large — top-left
                <div className="about-mosaic-card about-mosaic-card-lg">
                  <img src={yogaImg} alt="Anbuarasan yoga" />
                  <div className="about-mosaic-chip about-chip-arrow">↗</div>
                </div>

                {/* Small — top-right */}
                {/* <div className="about-mosaic-card about-mosaic-card-sm">
                  <img src={cryptoImg} alt="Coaching" />
                </div> */}

                {/* Medium — bottom-centre-right */}
                {/* <div className="about-mosaic-card about-mosaic-card-md">
                  <img src={creamImg} alt="Wellness" />
                </div> */}

                <span className="about-mosaic-sparkle about-sparkle-1">✦</span>
                <span className="about-mosaic-sparkle about-sparkle-2">✦</span>
              </div>

              {/* Right-edge separator line */}
              <div className="about-panel-sep"></div>
            </div>

            {/* ════ RIGHT PANEL — content ════ */}
            <div className="about-story-content">
              <div className="about-content-inner">

                <div className="about-content-header">
                  <span className="about-content-tag">About Anbuarasan</span>
                  <h3 className="about-content-title">
                    A Life Dedicated to Transformation
                  </h3>
                  <div className="about-content-divider"></div>
                </div>

                <div className="about-content-body">
                  <p className="about-text">
                    For years,{" "}
                    <span className="about-name">Anbuarasan</span> has dedicated
                    his life to guiding individuals toward{" "}
                    <span className="about-highlight">self-awareness</span>,{" "}
                    <span className="about-highlight">mindset mastery</span>,{" "}
                    <span className="about-highlight">financial consciousness</span>
                    , and{" "}
                    <span className="about-highlight">holistic wellness</span>.
                  </p>

                  <div className="about-mission-block">
                    <span className="about-mission-label">✦ His mission is simple</span>
                  </div>

                  <p className="about-text about-text-secondary">
                    Through daily transformation programs, spiritual coaching
                    sessions, financial awareness initiatives, and wellness
                    education, he continues to impact lives globally with
                    compassion and wisdom.
                  </p>
                </div>

                <a href="#contact" className="about-cta">
                  <span>Begin Your Transformation</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" width="18" height="18">
                    <path
                      d="M5 12h14M12 5l7 7-7 7"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default About;