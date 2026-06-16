// // // // import "./AthmaConnect.css";
// // // // import { useEffect, useRef, useState } from "react";

// // // // function AthmaConnect() {
// // // //   const [isVisible, setIsVisible] = useState(false);
// // // //   const [activeStep, setActiveStep] = useState(0);
// // // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // // //   const sectionRef = useRef(null);

// // // //   useEffect(() => {
// // // //     const observer = new IntersectionObserver(
// // // //       ([entry]) => {
// // // //         if (entry.isIntersecting) {
// // // //           setIsVisible(true);
// // // //         }
// // // //       },
// // // //       { threshold: 0.15 }
// // // //     );

// // // //     if (sectionRef.current) {
// // // //       observer.observe(sectionRef.current);
// // // //     }

// // // //     return () => observer.disconnect();
// // // //   }, []);

// // // //   useEffect(() => {
// // // //     const handleMouseMove = (e) => {
// // // //       setMousePos({ x: e.clientX, y: e.clientY });
// // // //     };
// // // //     window.addEventListener("mousemove", handleMouseMove, { passive: true });
// // // //     return () => window.removeEventListener("mousemove", handleMouseMove);
// // // //   }, []);

// // // //   const calcParallax = (depth) => {
// // // //     if (!sectionRef.current) return { x: 0, y: 0 };
// // // //     const rect = sectionRef.current.getBoundingClientRect();
// // // //     const centerX = rect.left + rect.width / 2;
// // // //     const centerY = rect.top + rect.height / 2;
// // // //     return {
// // // //       x: (mousePos.x - centerX) * depth,
// // // //       y: (mousePos.y - centerY) * depth,
// // // //     };
// // // //   };

// // // //   // Auto-rotate steps
// // // //   useEffect(() => {
// // // //     if (!isVisible) return;
// // // //     const interval = setInterval(() => {
// // // //       setActiveStep((prev) => (prev + 1) % 4);
// // // //     }, 4000);
// // // //     return () => clearInterval(interval);
// // // //   }, [isVisible]);

// // // //   const benefits = [
// // // //     { icon: "☉", title: "Self Awareness", desc: "Deep understanding of your inner world" },
// // // //     { icon: "☽", title: "Inner Peace", desc: "Find calm amidst life's chaos" },
// // // //     { icon: "✦", title: "Emotional Clarity", desc: "Navigate feelings with wisdom" },
// // // //     { icon: "◈", title: "Mindfulness", desc: "Present moment awareness" },
// // // //     { icon: "◆", title: "Purpose Discovery", desc: "Uncover your true calling" },
// // // //     { icon: "⬡", title: "Personal Growth", desc: "Evolve into your best self" },
// // // //   ];

// // // //   const steps = [
// // // //     {
// // // //       number: "01",
// // // //       title: "Awaken Awareness",
// // // //       description: "Begin your journey by becoming conscious of your thoughts, emotions, and patterns that shape your reality.",
// // // //       icon: "☉",
// // // //       color: "#3b82f6",
// // // //     },
// // // //     {
// // // //       number: "02",
// // // //       title: "Understand Your Mind",
// // // //       description: "Dive deep into the workings of your consciousness, learning how beliefs and conditioning influence your life.",
// // // //       icon: "☽",
// // // //       color: "#6366f1",
// // // //     },
// // // //     {
// // // //       number: "03",
// // // //       title: "Transform Thought Patterns",
// // // //       description: "Replace limiting beliefs with empowering perspectives through guided practices and spiritual techniques.",
// // // //       icon: "✦",
// // // //       color: "#22c55e",
// // // //     },
// // // //     {
// // // //       number: "04",
// // // //       title: "Live Consciously",
// // // //       description: "Integrate your learnings into daily life, maintaining awareness and continuing your spiritual evolution.",
// // // //       icon: "◈",
// // // //       color: "#14b8a6",
// // // //     },
// // // //   ];

// // // //   return (
// // // //     <section className="athma" ref={sectionRef} id="athma-connect">
// // // //       {/* Background Elements */}
// // // //       <div className="athma-bg">
// // // //         <div
// // // //           className="athma-bg-orb athma-orb-1"
// // // //           style={{
// // // //             transform: `translate(${calcParallax(0.04).x}px, ${calcParallax(0.04).y}px)`,
// // // //           }}
// // // //         />
// // // //         <div
// // // //           className="athma-bg-orb athma-orb-2"
// // // //           style={{
// // // //             transform: `translate(${calcParallax(-0.03).x}px, ${calcParallax(-0.03).y}px)`,
// // // //           }}
// // // //         />
// // // //         <div className="athma-bg-pattern" />
// // // //       </div>

// // // //       {/* Floating particles */}
// // // //       <div className="athma-particles">
// // // //         {[...Array(15)].map((_, i) => (
// // // //           <div
// // // //             key={i}
// // // //             className="athma-particle"
// // // //             style={{
// // // //               left: `${Math.random() * 100}%`,
// // // //               top: `${Math.random() * 100}%`,
// // // //               animationDelay: `${Math.random() * 6}s`,
// // // //               animationDuration: `${5 + Math.random() * 8}s`,
// // // //             }}
// // // //           />
// // // //         ))}
// // // //       </div>

// // // //       <div className="athma-container">
// // // //         {/* ============================================ */}
// // // //         {/* HERO SECTION */}
// // // //         {/* ============================================ */}
// // // //         <div className={`athma-hero ${isVisible ? 'athma-visible' : ''}`}>
// // // //           <div className="athma-hero-tagline">
// // // //             <span className="athma-hero-tagline-dot" />
// // // //             <span className="athma-hero-tagline-text">Athma Connect Program</span>
// // // //             <span className="athma-hero-tagline-dot" />
// // // //           </div>

// // // //           <h1 className="athma-hero-heading">
// // // //             <span className="athma-hero-line">
// // // //               <span className="athma-hero-word athma-hw-1">Reconnect</span>
// // // //               <span className="athma-hero-word athma-hw-2">With</span>
// // // //               <span className="athma-hero-word athma-hw-3 athma-accent">Your</span>
// // // //             </span>
// // // //             <span className="athma-hero-line">
// // // //               <span className="athma-hero-word athma-hw-4 athma-accent">Soul.</span>
// // // //               <span className="athma-hero-word athma-hw-5">Rediscover</span>
// // // //               <span className="athma-hero-word athma-hw-6">Your</span>
// // // //             </span>
// // // //             <span className="athma-hero-line">
// // // //               <span className="athma-hero-word athma-hw-7 athma-accent">Purpose.</span>
// // // //             </span>
// // // //           </h1>

// // // //           <p className="athma-hero-description">
// // // //             Athma Connect is designed for individuals seeking{" "}
// // // //             <span className="athma-hero-emphasis">deeper meaning</span>,{" "}
// // // //             <span className="athma-hero-emphasis">emotional balance</span>, and{" "}
// // // //             <span className="athma-hero-emphasis">spiritual growth</span>.
// // // //           </p>

// // // //           <div className="athma-hero-actions">
// // // //             <button className="athma-btn-primary">
// // // //               <span>Begin Your Soul Journey</span>
// // // //               <span className="athma-btn-icon">→</span>
// // // //               <span className="athma-btn-shine" />
// // // //             </button>
// // // //             <button className="athma-btn-secondary">
// // // //               <span>Learn More</span>
// // // //               <span className="athma-btn-underline" />
// // // //             </button>
// // // //           </div>
// // // //         </div>

// // // //         {/* ============================================ */}
// // // //         {/* BENEFITS GRID */}
// // // //         {/* ============================================ */}
// // // //         <div className={`athma-benefits-section ${isVisible ? 'athma-visible' : ''}`}>
// // // //           <div className="athma-section-header">
// // // //             <span className="athma-section-tagline">Benefits</span>
// // // //             <h2 className="athma-section-title">
// // // //               What You'll <span className="athma-accent-text">Experience</span>
// // // //             </h2>
// // // //           </div>

// // // //           <div className="athma-benefits-grid">
// // // //             {benefits.map((benefit, index) => (
// // // //               <div
// // // //                 key={benefit.title}
// // // //                 className="athma-benefit-card"
// // // //                 style={{ transitionDelay: `${0.1 + index * 0.07}s` }}
// // // //               >
// // // //                 <div className="athma-benefit-icon-wrap">
// // // //                   <span className="athma-benefit-icon">{benefit.icon}</span>
// // // //                   <div className="athma-benefit-icon-glow" />
// // // //                 </div>
// // // //                 <h3 className="athma-benefit-title">{benefit.title}</h3>
// // // //                 <p className="athma-benefit-desc">{benefit.desc}</p>
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* ============================================ */}
// // // //         {/* PROGRAM JOURNEY */}
// // // //         {/* ============================================ */}
// // // //         <div className={`athma-journey-section ${isVisible ? 'athma-visible' : ''}`}>
// // // //           <div className="athma-section-header">
// // // //             <span className="athma-section-tagline">Program Journey</span>
// // // //             <h2 className="athma-section-title">
// // // //               Your Path to <span className="athma-accent-text">Transformation</span>
// // // //             </h2>
// // // //           </div>

// // // //           <div className="athma-journey-layout">
// // // //             {/* Steps Navigation */}
// // // //             <div className="athma-steps-nav">
// // // //               {steps.map((step, index) => (
// // // //                 <button
// // // //                   key={step.number}
// // // //                   className={`athma-step-nav-item ${activeStep === index ? 'athma-step-active' : ''}`}
// // // //                   onClick={() => setActiveStep(index)}
// // // //                 >
// // // //                   <span className="athma-step-nav-number">{step.number}</span>
// // // //                   <span className="athma-step-nav-title">{step.title}</span>
// // // //                   <span
// // // //                     className="athma-step-nav-progress"
// // // //                     style={{
// // // //                       transform: activeStep === index ? 'scaleX(1)' : 'scaleX(0)',
// // // //                     }}
// // // //                   />
// // // //                 </button>
// // // //               ))}
// // // //             </div>

// // // //             {/* Active Step Display */}
// // // //             <div className="athma-step-display">
// // // //               <div
// // // //                 className="athma-step-card"
// // // //                 key={activeStep}
// // // //                 style={{ '--step-color': steps[activeStep].color }}
// // // //               >
// // // //                 <div className="athma-step-card-header">
// // // //                   <span className="athma-step-card-icon">{steps[activeStep].icon}</span>
// // // //                   <span className="athma-step-card-number">{steps[activeStep].number}</span>
// // // //                 </div>
// // // //                 <h3 className="athma-step-card-title">{steps[activeStep].title}</h3>
// // // //                 <p className="athma-step-card-desc">{steps[activeStep].description}</p>
// // // //                 <div className="athma-step-card-indicators">
// // // //                   {steps.map((_, index) => (
// // // //                     <span
// // // //                       key={index}
// // // //                       className={`athma-step-dot ${activeStep === index ? 'athma-step-dot-active' : ''}`}
// // // //                       onClick={() => setActiveStep(index)}
// // // //                     />
// // // //                   ))}
// // // //                 </div>
// // // //               </div>
// // // //             </div>
// // // //           </div>

// // // //           {/* Progress Track */}
// // // //           <div className="athma-progress-track">
// // // //             {steps.map((step, index) => (
// // // //               <div
// // // //                 key={step.number}
// // // //                 className={`athma-progress-node ${index <= activeStep ? 'athma-progress-completed' : ''}`}
// // // //               >
// // // //                 <div className="athma-progress-circle">
// // // //                   <span className="athma-progress-number">{step.number}</span>
// // // //                   <span className="athma-progress-check">✓</span>
// // // //                 </div>
// // // //                 <span className="athma-progress-label">{step.title}</span>
// // // //                 {index < steps.length - 1 && (
// // // //                   <div className={`athma-progress-line ${index < activeStep ? 'athma-progress-line-filled' : ''}`} />
// // // //                 )}
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* ============================================ */}
// // // //         {/* CTA SECTION */}
// // // //         {/* ============================================ */}
// // // //         <div className={`athma-cta-section ${isVisible ? 'athma-visible' : ''}`}>
// // // //           <div className="athma-cta-card">
// // // //             <div className="athma-cta-glow" />
// // // //             <div className="athma-cta-content">
// // // //               <span className="athma-cta-icon-large">☉</span>
// // // //               <h2 className="athma-cta-heading">
// // // //                 Ready to <span className="athma-accent-text">Transform</span> Your Life?
// // // //               </h2>
// // // //               <p className="athma-cta-text">
// // // //                 Join Athma Connect and begin your journey toward conscious living today.
// // // //               </p>
// // // //               <button className="athma-btn-primary athma-btn-large">
// // // //                 <span>Start Your Transformation</span>
// // // //                 <span className="athma-btn-icon">→</span>
// // // //                 <span className="athma-btn-shine" />
// // // //               </button>
// // // //             </div>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // export default AthmaConnect;

// // // import "./AthmaConnect.css";
// // // import { useEffect, useRef, useState } from "react";

// // // function AthmaConnect() {
// // //   const [isVisible, setIsVisible] = useState(false);
// // //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// // //   const sectionRef = useRef(null);

// // //   useEffect(() => {
// // //     const observer = new IntersectionObserver(
// // //       ([entry]) => {
// // //         if (entry.isIntersecting) setIsVisible(true);
// // //       },
// // //       { threshold: 0.2 }
// // //     );
// // //     if (sectionRef.current) observer.observe(sectionRef.current);
// // //     return () => observer.disconnect();
// // //   }, []);

// // //   useEffect(() => {
// // //     const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
// // //     window.addEventListener("mousemove", handleMouseMove, { passive: true });
// // //     return () => window.removeEventListener("mousemove", handleMouseMove);
// // //   }, []);

// // //   const calcParallax = (depth) => {
// // //     if (!sectionRef.current) return { x: 0, y: 0 };
// // //     const rect = sectionRef.current.getBoundingClientRect();
// // //     return {
// // //       x: (mousePos.x - (rect.left + rect.width / 2)) * depth,
// // //       y: (mousePos.y - (rect.top + rect.height / 2)) * depth,
// // //     };
// // //   };

// // //   const floatingItems = [
// // //     { icon: "☉", label: "Self Awareness", x: 15, y: 15, delay: 0 },
// // //     { icon: "☽", label: "Inner Peace", x: 82, y: 12, delay: 0.4 },
// // //     { icon: "✦", label: "Emotional Clarity", x: 8, y: 72, delay: 0.8 },
// // //     { icon: "◈", label: "Mindfulness", x: 88, y: 68, delay: 1.2 },
// // //     { icon: "◆", label: "Purpose Discovery", x: 48, y: 5, delay: 0.2 },
// // //     { icon: "⬡", label: "Personal Growth", x: 52, y: 88, delay: 0.6 },
// // //   ];

// // //   return (
// // //     <section className="athma" ref={sectionRef} id="athma-connect">
// // //       {/* Background Image */}
// // //       <div
// // //         className="athma-bg-img"
// // //         style={{
// // //           backgroundImage: 'url(https://images.unsplash.com/photo-1545389336-cf090694435e?w=1920&q=80)',
// // //           transform: `scale(1.1) translate(${calcParallax(0.01).x}px, ${calcParallax(0.01).y}px)`,
// // //         }}
// // //       />

// // //       {/* Overlays */}
// // //       <div className="athma-overlay" />
// // //       <div className="athma-overlay-gradient" />

// // //       {/* Light Rays */}
// // //       <div className="athma-rays">
// // //         <div className="athma-ray athma-ray-1" />
// // //         <div className="athma-ray athma-ray-2" />
// // //         <div className="athma-ray athma-ray-3" />
// // //       </div>

// // //       {/* Floating Particles */}
// // //       <div className="athma-dust">
// // //         {[...Array(20)].map((_, i) => (
// // //           <span
// // //             key={i}
// // //             className="athma-dust-particle"
// // //             style={{
// // //               left: `${Math.random() * 100}%`,
// // //               animationDelay: `${Math.random() * 5}s`,
// // //               animationDuration: `${4 + Math.random() * 6}s`,
// // //             }}
// // //           />
// // //         ))}
// // //       </div>

// // //       <div className="athma-container">
// // //         {/* Floating Items Around Center */}
// // //         {floatingItems.map((item, i) => (
// // //           <div
// // //             key={item.label}
// // //             className={`athma-float-item ${isVisible ? 'athma-float-visible' : ''}`}
// // //             style={{
// // //               left: `${item.x}%`,
// // //               top: `${item.y}%`,
// // //               transitionDelay: `${item.delay}s`,
// // //               transform: `translate(${calcParallax(0.02).x}px, ${calcParallax(0.02).y}px)`,
// // //             }}
// // //           >
// // //             <span className="athma-float-icon">{item.icon}</span>
// // //             <span className="athma-float-label">{item.label}</span>
// // //           </div>
// // //         ))}

// // //         {/* Center Content */}
// // //         <div className={`athma-center ${isVisible ? 'athma-center-visible' : ''}`}>
// // //           {/* Central Image - Person Meditating */}
// // //           <div className="athma-center-image-wrap">
// // //             <div
// // //               className="athma-center-image"
// // //               style={{
// // //                 transform: `translate(${calcParallax(0.03).x}px, ${calcParallax(0.03).y}px)`,
// // //               }}
// // //             >
// // //               <img
// // //                 src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&q=80"
// // //                 alt="Meditation"
// // //                 className="athma-person-img"
// // //               />
// // //             </div>
            
// // //             {/* Orbiting Rings */}
// // //             <div className="athma-orbit-ring athma-orbit-1" />
// // //             <div className="athma-orbit-ring athma-orbit-2" />
// // //             <div className="athma-orbit-ring athma-orbit-3" />
            
// // //             {/* Center Glow */}
// // //             <div className="athma-center-glow" />
// // //           </div>

// // //           {/* Text Content */}
// // //           <div className="athma-text-block">
// // //             <span className="athma-badge">Athma Connect</span>
            
// // //             <h2 className="athma-heading">
// // //               <span className="athma-heading-line">Reconnect With</span>
// // //               <span className="athma-heading-line">
// // //                 <span className="athma-heading-accent">Your Soul.</span>
// // //                 <span>Rediscover</span>
// // //               </span>
// // //               <span className="athma-heading-line">
// // //                 <span className="athma-heading-accent">Your Purpose.</span>
// // //               </span>
// // //             </h2>

// // //             <p className="athma-desc">
// // //               For those seeking deeper meaning, emotional balance, and spiritual growth.
// // //             </p>

// // //             <div className="athma-steps-mini">
// // //               <span className="athma-step-mini">Awaken →</span>
// // //               <span className="athma-step-mini">Understand →</span>
// // //               <span className="athma-step-mini">Transform →</span>
// // //               <span className="athma-step-mini">Live Consciously</span>
// // //             </div>

// // //             <button className="athma-cta">
// // //               <span>Begin Your Soul Journey</span>
// // //               <span className="athma-cta-arrow">→</span>
// // //               <span className="athma-cta-shine" />
// // //             </button>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default AthmaConnect;

// // import "./AthmaConnect.css";
// // import { useEffect, useRef, useState } from "react";

// // function AthmaConnect() {
// //   const [isVisible, setIsVisible] = useState(false);
// //   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
// //   const sectionRef = useRef(null);
// //   const canvasRef = useRef(null);

// //   useEffect(() => {
// //     const observer = new IntersectionObserver(
// //       ([entry]) => {
// //         if (entry.isIntersecting) setIsVisible(true);
// //       },
// //       { threshold: 0.15 }
// //     );
// //     if (sectionRef.current) observer.observe(sectionRef.current);
// //     return () => observer.disconnect();
// //   }, []);

// //   useEffect(() => {
// //     const handleMouseMove = (e) => setMousePos({ x: e.clientX, y: e.clientY });
// //     window.addEventListener("mousemove", handleMouseMove, { passive: true });
// //     return () => window.removeEventListener("mousemove", handleMouseMove);
// //   }, []);

// //   // Canvas - Twinkling Stars
// //   useEffect(() => {
// //     const canvas = canvasRef.current;
// //     if (!canvas) return;
// //     const ctx = canvas.getContext("2d");
// //     let animId;
// //     let stars = [];

// //     const resize = () => {
// //       canvas.width = canvas.offsetWidth;
// //       canvas.height = canvas.offsetHeight;
// //     };

// //     class Star {
// //       constructor() {
// //         this.reset();
// //       }
// //       reset() {
// //         this.x = Math.random() * canvas.width;
// //         this.y = Math.random() * canvas.height;
// //         this.size = Math.random() * 1.5 + 0.3;
// //         this.baseAlpha = Math.random() * 0.5 + 0.2;
// //         this.alpha = this.baseAlpha;
// //         this.twinkleSpeed = Math.random() * 0.02 + 0.005;
// //         this.twinkleOffset = Math.random() * Math.PI * 2;
// //         this.hue = Math.random() > 0.7 ? 220 : Math.random() > 0.5 ? 160 : 260;
// //       }
// //       draw(ctx, time) {
// //         this.alpha = this.baseAlpha + Math.sin(time * this.twinkleSpeed + this.twinkleOffset) * 0.3;
// //         this.alpha = Math.max(0.05, Math.min(0.8, this.alpha));
// //         ctx.beginPath();
// //         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
// //         ctx.fillStyle = `hsla(${this.hue}, 70%, 70%, ${this.alpha})`;
// //         ctx.fill();
// //         if (this.size > 1 && this.alpha > 0.5) {
// //           ctx.beginPath();
// //           ctx.arc(this.x, this.y, this.size * 3, 0, Math.PI * 2);
// //           ctx.fillStyle = `hsla(${this.hue}, 70%, 70%, ${this.alpha * 0.15})`;
// //           ctx.fill();
// //         }
// //       }
// //     }

// //     const initStars = () => {
// //       stars = Array.from({ length: 120 }, () => new Star());
// //     };

// //     let time = 0;
// //     const animate = () => {
// //       time++;
// //       ctx.clearRect(0, 0, canvas.width, canvas.height);
// //       stars.forEach(star => star.draw(ctx, time));
// //       animId = requestAnimationFrame(animate);
// //     };

// //     resize();
// //     initStars();
// //     animate();
// //     window.addEventListener("resize", resize);
// //     return () => {
// //       cancelAnimationFrame(animId);
// //       window.removeEventListener("resize", resize);
// //     };
// //   }, []);

// //   const calcParallax = (depth) => {
// //     if (!sectionRef.current) return { x: 0, y: 0 };
// //     const rect = sectionRef.current.getBoundingClientRect();
// //     return {
// //       x: (mousePos.x - (rect.left + rect.width / 2)) * depth,
// //       y: (mousePos.y - (rect.top + rect.height / 2)) * depth,
// //     };
// //   };

// //   const soulPillars = [
// //     { icon: "☉", label: "Self Awareness", desc: "Know thy inner universe", color: "#60a5fa" },
// //     { icon: "☽", label: "Inner Peace", desc: "Stillness among the stars", color: "#818cf8" },
// //     { icon: "✦", label: "Emotional Clarity", desc: "Light through the cosmos", color: "#c084fc" },
// //     { icon: "◈", label: "Mindfulness", desc: "Present in every moment", color: "#34d399" },
// //     { icon: "◆", label: "Purpose Discovery", desc: "Your cosmic calling", color: "#fbbf24" },
// //     { icon: "⬡", label: "Personal Growth", desc: "Expand beyond limits", color: "#f472b6" },
// //   ];

// //   const journeySteps = [
// //     "Awaken Awareness",
// //     "Understand Your Mind",
// //     "Transform Patterns",
// //     "Live Consciously",
// //   ];

// //   return (
// //     <section className="athma-universe" ref={sectionRef} id="athma-connect">
// //       {/* Star Canvas */}
// //       <canvas ref={canvasRef} className="athma-stars-canvas" />

// //       {/* Background Nebula */}
// //       <div className="athma-nebula">
// //         <div className="athma-nebula-cloud nebula-1" />
// //         <div className="athma-nebula-cloud nebula-2" />
// //         <div className="athma-nebula-cloud nebula-3" />
// //       </div>

// //       {/* Cosmic Dust */}
// //       <div className="athma-cosmic-dust">
// //         {[...Array(30)].map((_, i) => (
// //           <span
// //             key={i}
// //             className="athma-dust-speck"
// //             style={{
// //               left: `${Math.random() * 100}%`,
// //               top: `${Math.random() * 100}%`,
// //               animationDelay: `${Math.random() * 8}s`,
// //               animationDuration: `${6 + Math.random() * 10}s`,
// //               width: `${1 + Math.random() * 3}px`,
// //               height: `${1 + Math.random() * 3}px`,
// //             }}
// //           />
// //         ))}
// //       </div>

// //       <div className="athma-universe-container">
// //         {/* Floating Soul Pillars */}
// //         {soulPillars.map((pillar, i) => (
// //           <div
// //             key={pillar.label}
// //             className={`athma-soul-pillar ${isVisible ? 'athma-pillar-visible' : ''}`}
// //             style={{
// //               left: `${8 + i * 14.5}%`,
// //               top: i < 3 ? `${8 + (i % 3) * 5}%` : `${78 + ((i - 3) % 3) * 5}%`,
// //               transitionDelay: `${0.15 + i * 0.1}s`,
// //               '--pillar-color': pillar.color,
// //             }}
// //           >
// //             <div className="athma-pillar-aura" />
// //             <span className="athma-pillar-icon">{pillar.icon}</span>
// //             <span className="athma-pillar-label">{pillar.label}</span>
// //             <span className="athma-pillar-desc">{pillar.desc}</span>
// //           </div>
// //         ))}

// //         {/* Center Universe */}
// //         <div className={`athma-cosmic-center ${isVisible ? 'athma-cosmic-visible' : ''}`}>
// //           {/* Outer Galaxy Ring */}
// //           <div className="athma-galaxy-ring galaxy-ring-1">
// //             <div className="galaxy-ring-glow" />
// //           </div>
// //           <div className="athma-galaxy-ring galaxy-ring-2">
// //             <div className="galaxy-ring-glow" />
// //           </div>
// //           <div className="athma-galaxy-ring galaxy-ring-3">
// //             <div className="galaxy-ring-glow" />
// //           </div>

// //           {/* Orbiting Planets */}
// //           <div className="athma-planet planet-1">
// //             <div className="planet-core" />
// //           </div>
// //           <div className="athma-planet planet-2">
// //             <div className="planet-core" />
// //           </div>
// //           <div className="athma-planet planet-3">
// //             <div className="planet-core" />
// //           </div>

// //           {/* Central Yoga Figure */}
// //           <div className="athma-yoga-figure">
// //             <div className="athma-yoga-glow yoga-glow-outer" />
// //             <div className="athma-yoga-glow yoga-glow-inner" />
// //             <div className="athma-yoga-glow yoga-glow-core" />
            
// //             <div className="athma-yoga-silhouette">
// //               <img
// //                 src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=600&q=80"
// //                 alt="Meditation under the cosmos"
// //                 className="athma-yoga-img"
// //               />
// //             </div>

// //             {/* Chakra Points */}
// //             <div className="athma-chakra chakra-crown" />
// //             <div className="athma-chakra chakra-third-eye" />
// //             <div className="athma-chakra chakra-heart" />
// //             <div className="athma-chakra chakra-solar" />
// //             <div className="athma-chakra chakra-root" />

// //             {/* Energy Lines */}
// //             <div className="athma-energy-line energy-line-1" />
// //             <div className="athma-energy-line energy-line-2" />
// //             <div className="athma-energy-line energy-line-3" />
// //           </div>
// //         </div>

// //         {/* Text Content */}
// //         <div className={`athma-universe-text ${isVisible ? 'athma-text-visible' : ''}`}>
// //           <div className="athma-cosmic-badge">
// //             <span className="cosmic-badge-star">✧</span>
// //             <span>Athma Connect</span>
// //             <span className="cosmic-badge-star">✧</span>
// //           </div>

// //           <h2 className="athma-universe-heading">
// //             <span className="universe-heading-line">
// //               <span>Reconnect With</span>
// //             </span>
// //             <span className="universe-heading-line">
// //               <span className="universe-accent">Your Soul.</span>
// //               <span>Rediscover</span>
// //             </span>
// //             <span className="universe-heading-line">
// //               <span className="universe-accent">Your Purpose.</span>
// //             </span>
// //           </h2>

// //           <p className="athma-universe-desc">
// //             For those seeking <span className="universe-emphasis">deeper meaning</span>,{" "}
// //             <span className="universe-emphasis">emotional balance</span>, and{" "}
// //             <span className="universe-emphasis">spiritual growth</span> — 
// //             journey through the cosmos of your inner self.
// //           </p>

// //           {/* Journey Steps */}
// //           <div className="athma-journey-steps">
// //             {journeySteps.map((step, i) => (
// //               <div key={step} className="athma-journey-step" style={{ transitionDelay: `${0.5 + i * 0.15}s` }}>
// //                 <span className="journey-step-number">0{i + 1}</span>
// //                 <span className="journey-step-name">{step}</span>
// //                 {i < journeySteps.length - 1 && (
// //                   <span className="journey-step-connector">→</span>
// //                 )}
// //               </div>
// //             ))}
// //           </div>

// //           {/* CTA */}
// //           <button className="athma-universe-cta">
// //             <span className="universe-cta-text">Begin Your Soul Journey</span>
// //             <span className="universe-cta-icon">→</span>
// //             <span className="universe-cta-ripple" />
// //           </button>

// //           <p className="athma-universe-quote">
// //             "The universe is not outside of you. Look inside yourself; everything that you want, you already are."
// //           </p>
// //           <span className="athma-quote-author">— Rumi</span>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // export default AthmaConnect;

// import "./AthmaConnect.css";
// import { useEffect, useRef, useState } from "react";

// function AthmaConnect() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) setIsVisible(true);
//       },
//       { threshold: 0.2 }
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
//       transform: `translate(${(mousePos.x - rect.left - rect.width / 2) * depth}px, ${(mousePos.y - rect.top - rect.height / 2) * depth}px)`,
//     };
//   };

//   const pillars = [
//     { title: "Self Awareness", desc: "Deep understanding of your inner world" },
//     { title: "Inner Peace", desc: "Find stillness amidst the chaos" },
//     { title: "Emotional Clarity", desc: "Navigate feelings with wisdom" },
//     { title: "Mindfulness", desc: "Present moment awareness" },
//     { title: "Purpose Discovery", desc: "Uncover your true calling" },
//     { title: "Personal Growth", desc: "Evolve into your highest self" },
//   ];

//   return (
//     <section className="ac" ref={sectionRef} id="athma-connect">
//       {/* Background */}
//       <div className="ac-bg">
//         <div className="ac-bg-image" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1532798442725-41036acc7489?w=1920&q=80)' }} />
//         <div className="ac-bg-overlay" />
//       </div>

//       <div className="ac-container">
//         <div className={`ac-grid ${isVisible ? 'ac-visible' : ''}`}>
//           {/* Left - Image */}
//           <div className="ac-visual">
//             <div className="ac-image-wrap" style={calcParallax(0.025)}>
//               <div className="ac-image-frame">
//                 <img
//                   src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=800&q=80"
//                   alt="Meditation"
//                   className="ac-image"
//                 />
//               </div>
//               <div className="ac-image-accent" />
//             </div>
//           </div>

//           {/* Right - Content */}
//           <div className="ac-content">
//             <span className="ac-eyebrow">Athma Connect Program</span>

//             <h2 className="ac-heading">
//               Reconnect with your
//               <span className="ac-heading-em"> soul.</span>
//               <br />
//               Rediscover your
//               <span className="ac-heading-em"> purpose.</span>
//             </h2>

//             <p className="ac-desc">
//               A transformative journey for those seeking deeper meaning, 
//               emotional balance, and lasting spiritual growth.
//             </p>

//             {/* Pillars Grid */}
//             <div className="ac-pillars">
//               {pillars.map((p, i) => (
//                 <div key={p.title} className="ac-pillar" style={{ transitionDelay: `${i * 0.08}s` }}>
//                   <span className="ac-pillar-title">{p.title}</span>
//                   <span className="ac-pillar-desc">{p.desc}</span>
//                 </div>
//               ))}
//             </div>

//             {/* Journey Steps */}
//             <div className="ac-steps">
//               <span className="ac-steps-label">The Journey</span>
//               <div className="ac-steps-row">
//                 {["Awaken", "Understand", "Transform", "Live Consciously"].map((step, i) => (
//                   <span key={step} className="ac-step" style={{ transitionDelay: `${0.4 + i * 0.1}s` }}>
//                     {step}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             <button className="ac-cta">
//               Begin Your Soul Journey
//               <span className="ac-cta-arrow">→</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// export default AthmaConnect;

import "./AthmaConnect.css";
import { useEffect, useRef, useState } from "react";

function AthmaConnect() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(0);
  const sectionRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (videoRef.current) videoRef.current.play().catch(() => {});
        } else {
          if (videoRef.current) videoRef.current.pause();
        }
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  const orbitingCards = [
    { icon: "☉", title: "Self Awareness", desc: "Know your inner universe", color: "#818cf8" },
    { icon: "☽", title: "Inner Peace", desc: "Stillness among stars", color: "#a78bfa" },
    { icon: "✦", title: "Emotional Clarity", desc: "Light through cosmos", color: "#c084fc" },
    { icon: "◈", title: "Mindfulness", desc: "Present every moment", color: "#34d399" },
    { icon: "◆", title: "Purpose Discovery", desc: "Your cosmic calling", color: "#fbbf24" },
    { icon: "⬡", title: "Personal Growth", desc: "Expand beyond limits", color: "#f472b6" },
  ];

  const journeySteps = [
    { num: "01", title: "Awaken Awareness" },
    { num: "02", title: "Understand Your Mind" },
    { num: "03", title: "Transform Patterns" },
    { num: "04", title: "Live Consciously" },
  ];

  return (
    <section className="galaxy" ref={sectionRef} id="athma-connect">
      {/* Galaxy Video Background */}
      <div className="galaxy-video-wrap">
        <video
          ref={videoRef}
          className="galaxy-video"
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=1920&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-stars-in-the-night-sky-5449/1080p.mp4" type="video/mp4" />
        </video>
        <div className="galaxy-video-overlay" />
      </div>

      {/* Star Particles */}
      <div className="galaxy-stars">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="galaxy-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`,
            }}
          />
        ))}
      </div>

      {/* Subtle Nebula Glows */}
      <div className="galaxy-nebula galaxy-nebula-1" />
      <div className="galaxy-nebula galaxy-nebula-2" />

      <div className="galaxy-container">
   

        {/* Bottom Content */}
        <div className={`galaxy-content ${isVisible ? 'galaxy-content-visible' : ''}`}>
          <div className="galaxy-badge">
            <span>Athma Connect Program</span>
          </div>

          <h2 className="galaxy-heading">
            Reconnect with your
            <span className="galaxy-heading-accent"> soul.</span>
            <br />
            Rediscover your
            <span className="galaxy-heading-accent"> purpose.</span>
          </h2>

          <p className="galaxy-desc">
            A transformative journey for those seeking deeper meaning, 
            emotional balance, and lasting spiritual growth.
          </p>

          {/* Journey Steps */}
          <div className="galaxy-journey">
            {journeySteps.map((step, i) => (
              <div key={step.num} className="galaxy-journey-step" style={{ transitionDelay: `${0.5 + i * 0.1}s` }}>
                <span className="galaxy-journey-num">{step.num}</span>
                <span className="galaxy-journey-title">{step.title}</span>
              </div>
            ))}
          </div>

          <button className="galaxy-cta">
            <span>Begin Your Soul Journey</span>
            <span className="galaxy-cta-arrow">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default AthmaConnect;