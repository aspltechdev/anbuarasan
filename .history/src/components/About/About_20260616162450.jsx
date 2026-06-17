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
// Outer structure 100% unchanged.
// Inner left = EduFlex exact mosaic layout.
// ============================================
.about {
  position: relative;
  min-height: 100vh;
  padding: 5rem 2rem;
  background: linear-gradient(160deg, #fcf8f4 0%, #f5ede6 40%, #efe4da 100%);
  font-family: 'Inter', 'Segoe UI', sans-serif;
  color: #3d342c;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.about-cinematic-bg,
.about-breath-waves,
.about-particles {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
}

.about-glow,
.about-orb,
.about-breath-wave,
.about-particle {
  position: absolute;
}

.about-glow {
  border-radius: 50%;
  filter: blur(120px);
  opacity: 0.12;
}

.about-glow-1 {
  width: 60vw;
  height: 60vw;
  top: -20%;
  right: -20%;
  background: radial-gradient(circle, rgba(212, 165, 116, 0.15), transparent 70%);
  animation: aboutGlowFloat 12s ease-in-out infinite alternate;
}

.about-glow-2 {
  width: 50vw;
  height: 50vw;
  bottom: -20%;
  left: -20%;
  background: radial-gradient(circle, rgba(201, 184, 160, 0.12), transparent 70%);
  animation: aboutGlowFloat 15s ease-in-out infinite alternate-reverse;
}

.about-glow-3 {
  width: 40vw;
  height: 40vw;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, rgba(213, 196, 176, 0.08), transparent 70%);
}

@keyframes aboutGlowFloat {
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(30px, -30px) scale(1.2); }
}

.about-orb {
  border-radius: 50%;
  filter: blur(80px);
  opacity: 0.04;
  animation: aboutOrbFloat 20s ease-in-out infinite;
}

.about-orb-1 { width: 300px; height: 300px; top: 10%; left: 10%; background: #d4a574; animation-delay: 0s; }
.about-orb-2 { width: 400px; height: 400px; bottom: 10%; right: 10%; background: #c9b8a0; animation-delay: -7s; }
.about-orb-3 { width: 250px; height: 250px; top: 50%; left: 50%; transform: translate(-50%, -50%); background: #d5c4b0; animation-delay: -14s; }

@keyframes aboutOrbFloat {
  0%, 100% { transform: translate(0, 0) scale(1); }
  25% { transform: translate(30px, -40px) scale(1.1); }
  50% { transform: translate(-20px, 30px) scale(0.9); }
  75% { transform: translate(40px, 20px) scale(1.05); }
}

.about-breath-wave {
  border-radius: 50%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.6);
  background: radial-gradient(circle at center, rgba(212, 165, 116, 0.03), transparent 70%);
  animation: aboutBreath 8s ease-in-out infinite alternate;
}

.wave-a { width: 80vw; height: 80vw; animation-duration: 10s; }
.wave-b { width: 110vw; height: 110vw; animation-duration: 14s; animation-delay: -3s; background: radial-gradient(circle at center, rgba(201, 184, 160, 0.025), transparent 70%); }
.wave-c { width: 140vw; height: 140vw; animation-duration: 18s; animation-delay: -6s; background: radial-gradient(circle at center, rgba(213, 196, 176, 0.02), transparent 70%); }

@keyframes aboutBreath {
  0% { transform: translate(-50%, -50%) scale(0.4); opacity: 0.08; }
  50% { transform: translate(-50%, -50%) scale(1.2); opacity: 0.3; }
  100% { transform: translate(-50%, -50%) scale(0.4); opacity: 0.08; }
}

.about-particle {
  border-radius: 50%;
  animation: aboutFloat linear infinite alternate;
  opacity: 0.2;
}

@keyframes aboutFloat {
  0% { transform: translate(0, 0) scale(0.8); opacity: 0.03; }
  100% { transform: translate(40px, -40px) scale(1.6); opacity: 0.2; }
}

.about-container {
  position: relative;
  z-index: 2;
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;
}

.about-hero {
  text-align: center;
  margin-bottom: 3.5rem;
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 1.2s ease, transform 1.2s ease;
}

.about-hero.visible {
  opacity: 1;
  transform: translateY(0);
}

.about-badge {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.about-badge-line {
  width: 40px;
  height: 1px;
  background: linear-gradient(90deg, transparent, rgba(212, 165, 116, 0.3));
  animation: aboutBadgeLine 3s ease-in-out infinite alternate;
}

.about-badge-line:last-child {
  background: linear-gradient(90deg, rgba(212, 165, 116, 0.3), transparent);
}

@keyframes aboutBadgeLine {
  0% { transform: scaleX(0.6); opacity: 0.3; }
  100% { transform: scaleX(1.2); opacity: 0.8; }
}

.about-tag {
  font-size: 0.75rem;
  letter-spacing: 5px;
  text-transform: uppercase;
  color: rgba(61, 52, 44, 0.35);
  font-weight: 400;
  white-space: nowrap;
}

.about-title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: clamp(2.8rem, 6vw, 4.5rem);
  font-weight: 400;
  line-height: 1.1;
  margin-bottom: 1rem;
  letter-spacing: -1px;
  color: #3d342c;
}

.about-title-line {
  display: block;
  font-size: 0.6em;
  font-weight: 300;
  letter-spacing: 4px;
  color: rgba(61, 52, 44, 0.3);
  margin-bottom: 0.2rem;
}

.about-title-accent {
  background: linear-gradient(135deg, #8b7355, #c9a87c, #d4a574);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  font-weight: 500;
  display: block;
}

.about-subtitle {
  font-size: 1.05rem;
  font-weight: 300;
  color: rgba(61, 52, 44, 0.45);
  letter-spacing: 0.5px;
  max-width: 550px;
  margin: 0 auto;
  line-height: 1.7;
}

.about-cinematic-card {
  opacity: 0;
  transform: translateY(40px) scale(0.98);
  transition: opacity 1s ease 0.3s, transform 1s ease 0.3s;
}

.about-cinematic-card.visible {
  opacity: 1;
  transform: translateY(0) scale(1);
}

.about-card-inner {
  display: grid;
  grid-template-columns: 1fr 1.25fr;
  gap: 0;
  background: rgba(255, 252, 248, 0.5);
  backdrop-filter: blur(12px);
  border-radius: 40px;
  border: 1px solid rgba(212, 165, 116, 0.06);
  overflow: hidden;
  box-shadow: 0 30px 80px -20px rgba(0, 0, 0, 0.06);
}

.about-mosaic {
  position: relative;
  min-height: 360px;
  padding: 1.5rem;
  background: linear-gradient(145deg, rgba(212, 165, 116, 0.03), rgba(201, 184, 160, 0.02));
  overflow: hidden;
  will-change: transform;
  transition: transform 0.1s ease-out;
}

.about-mosaic-bg {
  position: absolute;
  inset: 0;
  background: radial-gradient(circle at 30% 20%, rgba(212, 165, 116, 0.12), transparent 35%),
              radial-gradient(circle at 80% 30%, rgba(196, 189, 232, 0.12), transparent 30%),
              radial-gradient(circle at 45% 80%, rgba(226, 201, 168, 0.12), transparent 35%);
  opacity: 0.8;
}

.about-mosaic-card {
  position: absolute;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 8px 30px -6px rgba(61, 52, 44, 0.1);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
}

.about-mosaic-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 20px 50px -10px rgba(61, 52, 44, 0.15);
}

.about-mosaic-card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.about-mosaic-card-lg {
  width: 52%;
  height: 58%;
  top: 5%;
  left: 6%;
  z-index: 3;
  background: rgba(212, 165, 116, 0.15);
  animation: aboutFloat1 7s ease-in-out infinite alternate;
}

.about-mosaic-card-sm {
  width: 38%;
  height: 40%;
  top: 8%;
  right: 6%;
  z-index: 2;
  background: rgba(196, 189, 232, 0.22);
  animation: aboutFloat2 9s ease-in-out infinite alternate;
}

.about-mosaic-card-md {
  width: 48%;
  height: 42%;
  bottom: 8%;
  right: 14%;
  z-index: 4;
  background: rgba(226, 201, 168, 0.22);
  animation: aboutFloat3 8s ease-in-out infinite alternate;
}

@keyframes aboutFloat1 { 0% { transform: translateY(0); } 100% { transform: translateY(-10px); } }
@keyframes aboutFloat2 { 0% { transform: translateY(-5px); } 100% { transform: translateY(9px); } }
@keyframes aboutFloat3 { 0% { transform: translateY(5px); } 100% { transform: translateY(-8px); } }

.about-mosaic-chip {
  position: absolute;
  z-index: 10;
  backdrop-filter: blur(6px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.about-chip-arrow {
  top: 0.75rem;
  right: 0.75rem;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: rgba(212, 165, 116, 0.25);
  border: 1px solid rgba(212, 165, 116, 0.35);
  font-size: 0.85rem;
  color: #8b7355;
}

.about-chip-badge {
  bottom: 0.75rem;
  left: 0.75rem;
  padding: 0.25rem 0.7rem;
  border-radius: 50px;
  background: rgba(255, 252, 248, 0.8);
  border: 1px solid rgba(212, 165, 116, 0.2);
  font-size: 0.75rem;
  color: rgba(61, 52, 44, 0.5);
  letter-spacing: 2px;
}

.about-mosaic-pill {
  position: absolute;
  top: 44%;
  right: 22%;
  width: 110px;
  height: 34px;
  border-radius: 999px;
  background: rgba(196, 189, 232, 0.3);
  border: 1px solid rgba(212, 165, 116, 0.08);
  z-index: 1;
}

.about-mosaic-circle {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
}

.about-circle-1 {
  width: 16px;
  height: 16px;
  top: 11%;
  right: 38%;
  border: 2.5px solid rgba(196, 189, 232, 0.6);
  animation: aboutCirclePulse 5s ease-in-out infinite alternate;
}

.about-circle-2 {
  width: 12px;
  height: 12px;
  bottom: 16%;
  left: 6%;
  border: 2px solid rgba(212, 165, 116, 0.45);
  animation: aboutCirclePulse 6s ease-in-out infinite alternate-reverse;
}

@keyframes aboutCirclePulse {
  0% { transform: scale(0.8); opacity: 0.4; }
  100% { transform: scale(1.4); opacity: 1; }
}

.about-mosaic-sparkle {
  position: absolute;
  pointer-events: none;
  animation: aboutSparklePulse 4s ease-in-out infinite alternate;
  z-index: 5;
  font-size: 0.85rem;
}

.about-sparkle-1 {
  color: #d4a574;
  opacity: 0.35;
  top: 40%;
  left: 54%;
}

.about-sparkle-2 {
  color: #c4bde8;
  opacity: 0.45;
  bottom: 26%;
  left: 60%;
  font-size: 0.65rem;
  animation-delay: -2s;
}

@keyframes aboutSparklePulse {
  0% { transform: scale(0.7) rotate(0deg); opacity: 0.15; }
  100% { transform: scale(1.5) rotate(45deg); opacity: 0.5; }
}

.about-story-content {
  padding: 2.4rem 2.4rem;
  display: flex;
  align-items: center;
}

.about-content-inner {
  width: 100%;
}

.about-content-header {
  margin-bottom: 1.5rem;
}

.about-content-tag {
  display: inline-block;
  font-size: 0.6rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(212, 165, 116, 0.3);
  font-weight: 400;
  margin-bottom: 0.3rem;
}

.about-content-title {
  font-family: 'Georgia', 'Times New Roman', serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: #3d342c;
  margin-bottom: 0.5rem;
  letter-spacing: -0.5px;
}

.about-content-divider {
  width: 40px;
  height: 2px;
  background: linear-gradient(90deg, rgba(212, 165, 116, 0.3), transparent);
  border-radius: 2px;
}

.about-content-body {
  margin-bottom: 1.5rem;
}

.about-text {
  font-size: 0.92rem;
  font-weight: 300;
  line-height: 1.8;
  color: rgba(61, 52, 44, 0.65);
  margin-bottom: 1rem;
}

.about-text-secondary {
  margin-bottom: 0;
}

.about-name {
  font-weight: 500;
  color: #3d342c;
}

.about-highlight {
  color: #d4a574;
  font-weight: 400;
}

.about-mission-block {
  background: rgba(212, 165, 116, 0.03);
  border-left: 2px solid rgba(212, 165, 116, 0.12);
  padding: 0.8rem 1.2rem;
  border-radius: 4px;
  margin-bottom: 1rem;
}

.about-mission-label {
  display: block;
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 3px;
  color: rgba(61, 52, 44, 0.2);
  margin-bottom: 0.2rem;
}

.about-mission-text {
  font-size: 0.95rem;
  font-weight: 400;
  line-height: 1.6;
  color: #3d342c;
}

.about-emphasis {
  color: #d4a574;
  font-weight: 500;
}

.about-values-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.5rem 1rem;
  margin: 1.5rem 0;
}

.about-value-item {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  opacity: 0;
  transform: translateX(-10px);
  animation: aboutValueSlide 0.5s ease forwards;
}

.about-value-item:nth-child(1) { animation-delay: 0.1s; }
.about-value-item:nth-child(2) { animation-delay: 0.2s; }
.about-value-item:nth-child(3) { animation-delay: 0.3s; }
.about-value-item:nth-child(4) { animation-delay: 0.4s; }

@keyframes aboutValueSlide {
  0% { opacity: 0; transform: translateX(-10px); }
  100% { opacity: 1; transform: translateX(0); }
}

.about-value-symbol {
  font-size: 0.8rem;
  opacity: 0.2;
  flex-shrink: 0;
}

.about-value-title {
  font-size: 0.8rem;
  font-weight: 500;
  color: #3d342c;
  display: block;
}

.about-value-desc {
  font-size: 0.65rem;
  font-weight: 300;
  color: rgba(61, 52, 44, 0.35);
  display: block;
}

.about-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 0.7rem 2rem;
  border-radius: 50px;
  background: linear-gradient(135deg, #d4a574, #c9a87c);
  border: none;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 0.82rem;
  font-weight: 400;
  cursor: pointer;
  transition: all 0.4s ease;
  text-decoration: none;
  letter-spacing: 0.5px;
  width: fit-content;
}

.about-cta:hover {
  transform: translateY(-3px) scale(1.01);
  box-shadow: 0 12px 40px -10px rgba(212, 165, 116, 0.35);
}

.about-cta:active {
  transform: scale(0.97);
}

.about-cta svg {
  transition: transform 0.3s ease;
}

.about-cta:hover svg {
  transform: translateX(5px);
}

@media (max-width: 992px) {
  .about-card-inner {
    grid-template-columns: 1fr;
    border-radius: 30px;
  }

  .about-mosaic {
    min-height: 320px;
  }

  .about-story-content {
    padding: 1.5rem 2rem 2rem;
  }

  .about-content-title {
    font-size: 1.4rem;
  }
}

@media (max-width: 768px) {
  .about {
    padding: 3rem 1rem;
  }

  .about-badge {
    gap: 0.8rem;
  }

  .about-badge-line {
    width: 20px;
  }

  .about-tag {
    font-size: 0.65rem;
    letter-spacing: 3px;
  }

  .about-card-inner {
    border-radius: 24px;
  }

  .about-story-content {
    padding: 1.2rem 1.2rem 1.5rem;
  }

  .about-content-title {
    font-size: 1.2rem;
  }

  .about-values-grid {
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem 0.8rem;
  }

  .about-mosaic {
    min-height: 280px;
  }

  .about-mosaic-card-lg { width: 50%; height: 56%; }
  .about-mosaic-card-sm { width: 36%; height: 38%; }
  .about-mosaic-card-md { width: 46%; height: 40%; }
}

@media (max-width: 480px) {
  .about-title {
    font-size: clamp(2rem, 6vw, 2.6rem);
  }

  .about-title-line {
    font-size: 0.5em;
  }

  .about-subtitle {
    font-size: 0.9rem;
  }

  .about-story-content {
    padding: 1rem 1rem 1.5rem;
  }

  .about-values-grid {
    grid-template-columns: 1fr;
    gap: 0.3rem;
  }

  .about-content-title {
    font-size: 1.1rem;
  }

  .about-text {
    font-size: 0.85rem;
  }

  .about-mission-text {
    font-size: 0.88rem;
  }

  .about-cta {
    font-size: 0.78rem;
    padding: 0.6rem 1.5rem;
    width: 100%;
    justify-content: center;
  }

  .about-mosaic {
    min-height: 240px;
  }

  .about-mosaic-card-lg { width: 52%; height: 54%; }
  .about-mosaic-card-sm { width: 38%; height: 36%; }
  .about-mosaic-card-md { width: 48%; height: 38%; }
}