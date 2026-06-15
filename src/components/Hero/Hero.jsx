// import "./Hero.css";
// import { useEffect, useRef, useState } from "react";

// function Hero() {
//   const canvasRef = useRef(null);
//   const heroRef = useRef(null);
//   const [scrollY, setScrollY] = useState(0);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;

//     const ctx = canvas.getContext("2d");
//     let animationFrameId;
//     let particles = [];
//     let auraParticles = [];
//     let mouse = { x: null, y: null, radius: 180 };
//     let time = 0;

//     const resizeCanvas = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       initParticles();
//     };

//     // Sacred geometry particle
//     class SacredParticle {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.baseSize = Math.random() * 2 + 0.5;
//         this.size = this.baseSize;
//         this.speedX = (Math.random() - 0.5) * 0.3;
//         this.speedY = (Math.random() - 0.5) * 0.3;
//         this.life = Math.random() * Math.PI * 2;
//         this.lifeSpeed = Math.random() * 0.02 + 0.005;
        
//         // Spiritual color palette
//         const colors = [
//           { r: 255, g: 215, b: 0 },     // Divine Gold
//           { r: 138, g: 43, b: 226 },     // Spiritual Violet
//           { r: 72, g: 209, b: 204 },     // Turquoise (Ajna chakra)
//           { r: 255, g: 255, b: 255 },    // Pure White Light
//           { r: 255, g: 182, b: 193 },    // Soft Pink (Heart)
//         ];
        
//         this.colorObj = colors[Math.floor(Math.random() * colors.length)];
//         this.alpha = Math.random() * 0.6 + 0.2;
//         this.alphaSpeed = Math.random() * 0.01 + 0.003;
//       }

//       update(mouse, time) {
//         this.x += this.speedX + Math.sin(time * 0.001 + this.life) * 0.1;
//         this.y += this.speedY + Math.cos(time * 0.001 + this.life) * 0.1;

//         // Wrap edges
//         if (this.x < -50) this.x = canvas.width + 50;
//         if (this.x > canvas.width + 50) this.x = -50;
//         if (this.y < -50) this.y = canvas.height + 50;
//         if (this.y > canvas.height + 50) this.y = -50;

//         // Mouse interaction - particles drawn to cursor like spiritual energy
//         if (mouse.x && mouse.y) {
//           const dx = this.x - mouse.x;
//           const dy = this.y - mouse.y;
//           const distance = Math.sqrt(dx * dx + dy * dy);
          
//           if (distance < mouse.radius) {
//             const force = (1 - distance / mouse.radius) * 0.03;
//             this.x -= dx * force;
//             this.y -= dy * force;
//             this.alpha = Math.min(1, this.alpha + 0.02);
//           }
//         }

//         // Breathing effect
//         this.life += this.lifeSpeed;
//         this.size = this.baseSize + Math.sin(this.life) * 0.5;
        
//         // Alpha pulsing
//         this.alpha += this.alphaSpeed;
//         if (this.alpha >= 0.8 || this.alpha <= 0.15) {
//           this.alphaSpeed *= -1;
//         }
//       }

//       draw(ctx) {
//         const { r, g, b } = this.colorObj;
        
//         // Outer glow
//         const gradient = ctx.createRadialGradient(
//           this.x, this.y, 0,
//           this.x, this.y, this.size * 4
//         );
//         gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.alpha})`);
//         gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.3})`);
//         gradient.addColorStop(1, 'transparent');
        
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size * 4, 0, Math.PI * 2);
//         ctx.fillStyle = gradient;
//         ctx.fill();

//         // Core light
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
//         ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha})`;
//         ctx.fill();
//       }
//     }

//     const initParticles = () => {
//       const count = Math.min(Math.floor((canvas.width * canvas.height) / 10000), 150);
//       particles = Array.from({ length: count }, () => new SacredParticle());
//     };

//     // Draw sacred geometry lines
//     const drawSacredConnections = (ctx, time) => {
//       const maxDist = 200;
      
//       for (let i = 0; i < particles.length; i++) {
//         for (let j = i + 1; j < particles.length; j++) {
//           const dx = particles[i].x - particles[j].x;
//           const dy = particles[i].y - particles[j].y;
//           const dist = Math.sqrt(dx * dx + dy * dy);
          
//           if (dist < maxDist) {
//             const alpha = (1 - dist / maxDist) * 0.12;
//             const midX = (particles[i].x + particles[j].x) / 2;
//             const midY = (particles[i].y + particles[j].y) / 2;
            
//             // Draw connection with curvature
//             ctx.beginPath();
//             ctx.moveTo(particles[i].x, particles[i].y);
            
//             const cpX = midX + Math.sin(time * 0.0005 + i) * 30;
//             const cpY = midY + Math.cos(time * 0.0005 + j) * 30;
            
//             ctx.quadraticCurveTo(cpX, cpY, particles[j].x, particles[j].y);
            
//             // Color based on connected particles
//             const r1 = particles[i].colorObj.r;
//             const g1 = particles[i].colorObj.g;
//             const b1 = particles[i].colorObj.b;
//             const r2 = particles[j].colorObj.r;
//             const g2 = particles[j].colorObj.g;
//             const b2 = particles[j].colorObj.b;
            
//             const avgR = Math.floor((r1 + r2) / 2);
//             const avgG = Math.floor((g1 + g2) / 2);
//             const avgB = Math.floor((b1 + b2) / 2);
            
//             ctx.strokeStyle = `rgba(${avgR}, ${avgG}, ${avgB}, ${alpha})`;
//             ctx.lineWidth = 0.5;
//             ctx.stroke();
//           }
//         }
//       }
//     };

//     // Aura wave effect
//     const drawAuraWave = (ctx, time) => {
//       const centerX = canvas.width / 2;
//       const centerY = canvas.height / 2;
      
//       for (let i = 0; i < 3; i++) {
//         const radius = 200 + i * 80 + Math.sin(time * 0.0008 + i) * 40;
//         const gradient = ctx.createRadialGradient(
//           centerX, centerY, radius * 0.8,
//           centerX, centerY, radius
//         );
        
//         const colors = [
//           ['rgba(255, 215, 0, 0.05)', 'transparent'],
//           ['rgba(138, 43, 226, 0.04)', 'transparent'],
//           ['rgba(72, 209, 204, 0.04)', 'transparent'],
//         ];
        
//         gradient.addColorStop(0, colors[i][0]);
//         gradient.addColorStop(1, colors[i][1]);
        
//         ctx.beginPath();
//         ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
//         ctx.fillStyle = gradient;
//         ctx.fill();
//       }
//     };

//     const animate = () => {
//       time++;
//       ctx.clearRect(0, 0, canvas.width, canvas.height);

//       // Draw aura waves
//       drawAuraWave(ctx, time);
      
//       // Draw sacred connections
//       drawSacredConnections(ctx, time);

//       // Update and draw particles
//       particles.forEach(particle => {
//         particle.update(mouse, time);
//         particle.draw(ctx);
//       });

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     const handleMouseMove = (e) => {
//       mouse.x = e.clientX;
//       mouse.y = e.clientY;
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleMouseLeave = () => {
//       mouse.x = null;
//       mouse.y = null;
//     };

//     resizeCanvas();
//     initParticles();
//     animate();

//     window.addEventListener("resize", resizeCanvas);
//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseleave", handleMouseLeave);

//     return () => {
//       cancelAnimationFrame(animationFrameId);
//       window.removeEventListener("resize", resizeCanvas);
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseleave", handleMouseLeave);
//     };
//   }, []);

//   // Parallax and scroll effects
//   useEffect(() => {
//     const handleScroll = () => {
//       setScrollY(window.pageYOffset);
//     };
    
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Mantra words for floating effect
//   const mantraWords = ["ॐ", "Peace", "Love", "Light", "Shanti", "Ananda", "Shakti"];

//   return (
//     <section className="hero-spiritual" ref={heroRef}>
//       {/* Sacred geometry canvas */}
//       <canvas ref={canvasRef} className="sacred-canvas" />

//       {/* Divine light rays */}
//       <div className="divine-light">
//         <div className="light-ray ray-1" />
//         <div className="light-ray ray-2" />
//         <div className="light-ray ray-3" />
//         <div className="light-ray ray-4" />
//         <div className="light-ray ray-5" />
//       </div>

//       {/* Floating mantra words */}
//       <div className="mantra-field">
//         {mantraWords.map((word, index) => (
//           <span
//             key={index}
//             className="mantra-word"
//             style={{
//               left: `${15 + (index * 12)}%`,
//               top: `${20 + Math.sin(index * 1.5) * 30}%`,
//               animationDelay: `${index * 0.7}s`,
//               fontSize: `${1.2 + Math.random() * 0.8}rem`,
//               opacity: 0.08 + Math.random() * 0.07,
//             }}
//           >
//             {word}
//           </span>
//         ))}
//       </div>

//       {/* Chakra energy orbs */}
//       <div className="chakra-orbs">
//         <div className="chakra-orb sahasrara" data-parallax="0.4" />
//         <div className="chakra-orb ajna" data-parallax="0.35" />
//         <div className="chakra-orb anahata" data-parallax="0.3" />
//       </div>

//       {/* Main content */}
//       <div className="spiritual-content">
//         {/* OM symbol */}
//         <div className="om-symbol" data-parallax="0.15">
//           <svg viewBox="0 0 100 100" className="om-svg">
//             <path
//               d="M50 10 C30 10, 10 30, 10 50 C10 65, 20 75, 35 75 C45 75, 50 70, 50 60 C50 50, 45 45, 40 45 C35 45, 33 50, 35 55 C37 58, 40 60, 45 60 M50 10 C70 10, 90 30, 90 50 C90 65, 80 75, 65 75 C55 75, 50 70, 50 60 M50 10 L50 25 M50 40 L50 60 M50 60 C55 55, 60 55, 62 58 C65 62, 63 68, 58 72 C53 76, 50 78, 50 80 M50 60 C45 55, 40 55, 38 58 C35 62, 37 68, 42 72 C47 76, 50 78, 50 80"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="1.5"
//               strokeLinecap="round"
//             />
//           </svg>
//           <div className="om-glow" />
//         </div>

//         {/* Sacred badge */}
//         <div className="sacred-badge" data-parallax="0.1">
//           <div className="badge-aura" />
//           <div className="badge-content">
//             <span className="badge-bindu">•</span>
//             <span className="badge-label">आत्मिक जागरण</span>
//             <span className="badge-subtitle">Spiritual Awakening</span>
//             <span className="badge-bindu">•</span>
//           </div>
//         </div>

//         {/* Hero headline with divine typography */}
//         <h1 className="spiritual-headline">
//           <div className="headline-line" data-parallax="0.2">
//             <span className="word-divine word-1">Empower</span>
//             <span className="word-divine word-2">Your</span>
//           </div>
//           <div className="headline-line highlight-line" data-parallax="0.25">
//             <span className="word-divine word-3 highlight">Atma</span>
//             <span className="word-divine word-4 highlight">Shakti</span>
//           </div>
//           <div className="headline-line" data-parallax="0.3">
//             <span className="word-divine word-5">Transform</span>
//             <span className="word-divine word-6">Your</span>
//             <span className="word-divine word-7 highlight-gold">Destiny</span>
//           </div>
//         </h1>

//         {/* Soul description */}
//         <div className="soul-description" data-parallax="0.2">
//           <div className="description-border top-border" />
//           <p className="description-text">
//             <span className="text-highlight">Anbuarasan</span> — Spiritual Mentor 
//             &amp; Atma Guide, illuminating the sacred path to 
//             <span className="text-emphasis"> inner peace</span>, 
//             <span className="text-emphasis"> divine abundance</span>, and 
//             <span className="text-emphasis"> soul liberation</span>. 
//             Awaken your highest consciousness through ancient wisdom 
//             and transformative spiritual practice.
//           </p>
//           <div className="description-border bottom-border" />
//         </div>

//         {/* Divine CTA buttons */}
//         <div className="divine-actions" data-parallax="0.15">
//           <button className="btn-soul-primary">
//             <span className="btn-soul-bg" />
//             <span className="btn-soul-content">
//               <svg className="btn-lotus" viewBox="0 0 24 24" fill="currentColor">
//                 <path d="M12 2C8 2 4 6 4 10C4 14 8 18 12 22C16 18 20 14 20 10C20 6 16 2 12 2ZM12 16C10 16 8 14 8 12C8 10 10 8 12 8C14 8 16 10 16 12C16 14 14 16 12 16Z"/>
//               </svg>
//               Begin Your Spiritual Journey
//               <span className="btn-spark">✨</span>
//             </span>
//             <div className="btn-divine-glow" />
//           </button>

//           <button className="btn-soul-secondary">
//             <span className="btn-soul-content">
//               <svg className="btn-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor">
//                 <circle cx="12" cy="12" r="5"/>
//                 <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
//               </svg>
//               Join Brahma Muhurta
//               <span className="btn-icon-divine">🌅</span>
//             </span>
//             <div className="btn-soft-aura" />
//           </button>
//         </div>

//         {/* Spiritual stats */}
//         <div className="spiritual-stats" data-parallax="0.1">
//           <div className="stat-sacred">
//             <div className="stat-circle">
//               <span className="stat-value">500+</span>
//             </div>
//             <span className="stat-essence">Atma Awakened</span>
//           </div>

//           <div className="stat-divider-sacred">
//             <span className="divider-symbol">॥</span>
//           </div>

//           <div className="stat-sacred">
//             <div className="stat-circle">
//               <span className="stat-value">12+</span>
//             </div>
//             <span className="stat-essence">Years of Sadhana</span>
//           </div>

//           <div className="stat-divider-sacred">
//             <span className="divider-symbol">॥</span>
//           </div>

//           <div className="stat-sacred">
//             <div className="stat-circle">
//               <span className="stat-value">∞</span>
//             </div>
//             <span className="stat-essence">Infinite Potential</span>
//           </div>
//         </div>
//       </div>

//       {/* Corner sacred geometry */}
//       <div className="sacred-corners">
//         <svg className="corner-svg top-left" viewBox="0 0 100 100">
//           <path d="M0 50 Q0 0, 50 0" fill="none" stroke="currentColor" strokeWidth="0.5"/>
//           <circle cx="50" cy="0" r="2" fill="currentColor"/>
//           <circle cx="0" cy="50" r="2" fill="currentColor"/>
//         </svg>
//         <svg className="corner-svg top-right" viewBox="0 0 100 100">
//           <path d="M100 50 Q100 0, 50 0" fill="none" stroke="currentColor" strokeWidth="0.5"/>
//           <circle cx="50" cy="0" r="2" fill="currentColor"/>
//           <circle cx="100" cy="50" r="2" fill="currentColor"/>
//         </svg>
//         <svg className="corner-svg bottom-left" viewBox="0 0 100 100">
//           <path d="M0 50 Q0 100, 50 100" fill="none" stroke="currentColor" strokeWidth="0.5"/>
//           <circle cx="50" cy="100" r="2" fill="currentColor"/>
//           <circle cx="0" cy="50" r="2" fill="currentColor"/>
//         </svg>
//         <svg className="corner-svg bottom-right" viewBox="0 0 100 100">
//           <path d="M100 50 Q100 100, 50 100" fill="none" stroke="currentColor" strokeWidth="0.5"/>
//           <circle cx="50" cy="100" r="2" fill="currentColor"/>
//           <circle cx="100" cy="50" r="2" fill="currentColor"/>
//         </svg>
//       </div>

//       {/* Divine scroll indicator */}
//       <div className="scroll-sacred">
//         <div className="scroll-lotus">
//           <svg viewBox="0 0 24 24" fill="currentColor">
//             <path d="M12 2L8 8h8L12 2zM12 22l4-6H8l4 6z"/>
//           </svg>
//         </div>
//         <span className="scroll-mantra">Explore the Divine</span>
//       </div>
//     </section>
//   );
// }

// export default Hero;

import "./Hero.css";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrameId;
    let particles = [];
    let mouse = { x: null, y: null, radius: 200 };
    let time = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Universal energy particle
    class EnergyParticle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseSize = Math.random() * 1.8 + 0.3;
        this.size = this.baseSize;
        this.speedX = (Math.random() - 0.5) * 0.4;
        this.speedY = (Math.random() - 0.5) * 0.4;
        this.life = Math.random() * Math.PI * 2;
        this.lifeSpeed = Math.random() * 0.015 + 0.004;

        // Universal energy colors - warm and inviting
        const colors = [
          { r: 255, g: 215, b: 0 },     // Warm Gold
          { r: 168, g: 85, b: 247 },     // Rich Purple
          { r: 45, g: 212, b: 191 },     // Teal
          { r: 255, g: 255, b: 255 },    // Pure White
          { r: 251, g: 146, b: 60 },     // Warm Orange
          { r: 96, g: 165, b: 250 },     // Soft Blue
        ];

        this.colorObj = colors[Math.floor(Math.random() * colors.length)];
        this.alpha = Math.random() * 0.5 + 0.15;
        this.alphaSpeed = Math.random() * 0.008 + 0.002;
        this.connectionRadius = 180;
      }

      update(mouse, time) {
        // Natural flow movement
        this.x += this.speedX + Math.sin(time * 0.0008 + this.life) * 0.15;
        this.y += this.speedY + Math.cos(time * 0.0008 + this.life) * 0.15;

        // Smooth edge wrapping
        if (this.x < -60) this.x = canvas.width + 60;
        if (this.x > canvas.width + 60) this.x = -60;
        if (this.y < -60) this.y = canvas.height + 60;
        if (this.y > canvas.height + 60) this.y = -60;

        // Gentle mouse attraction
        if (mouse.x && mouse.y) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            const force = (1 - distance / mouse.radius) * 0.02;
            this.x -= dx * force;
            this.y -= dy * force;
            this.alpha = Math.min(0.9, this.alpha + 0.015);
          }
        }

        // Breathing life
        this.life += this.lifeSpeed;
        this.size = this.baseSize + Math.sin(this.life) * 0.4;

        // Gentle alpha pulse
        this.alpha += this.alphaSpeed;
        if (this.alpha >= 0.7 || this.alpha <= 0.12) {
          this.alphaSpeed *= -1;
        }
      }

      draw(ctx) {
        const { r, g, b } = this.colorObj;

        // Soft outer glow
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size * 5
        );
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.alpha})`);
        gradient.addColorStop(0.3, `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.4})`);
        gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${this.alpha * 0.1})`);
        gradient.addColorStop(1, 'transparent');

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 5, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Bright core
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${this.alpha * 0.9})`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      const count = Math.min(
        Math.floor((canvas.width * canvas.height) / 8000),
        180
      );
      particles = Array.from({ length: count }, () => new EnergyParticle());
    };

    // Draw energy connections
    const drawEnergyConnections = (ctx, time) => {
      const maxDist = 200;

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.08;

            // Create flowing connection
            const midX = (particles[i].x + particles[j].x) / 2;
            const midY = (particles[i].y + particles[j].y) / 2;

            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);

            // Soft curve for organic feel
            const cpX = midX + Math.sin(time * 0.0003 + i) * 25;
            const cpY = midY + Math.cos(time * 0.0003 + j) * 25;

            ctx.quadraticCurveTo(cpX, cpY, particles[j].x, particles[j].y);

            // Blend colors
            const avgR = Math.floor(
              (particles[i].colorObj.r + particles[j].colorObj.r) / 2
            );
            const avgG = Math.floor(
              (particles[i].colorObj.g + particles[j].colorObj.g) / 2
            );
            const avgB = Math.floor(
              (particles[i].colorObj.b + particles[j].colorObj.b) / 2
            );

            ctx.strokeStyle = `rgba(${avgR}, ${avgG}, ${avgB}, ${alpha})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        }
      }
    };

    // Draw expanding energy waves
    const drawEnergyWaves = (ctx, time) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      for (let i = 0; i < 3; i++) {
        const baseRadius = 180 + i * 100;
        const radius = baseRadius + Math.sin(time * 0.0006 + i) * 50;

        const gradient = ctx.createRadialGradient(
          centerX, centerY, radius * 0.7,
          centerX, centerY, radius
        );

        const waveColors = [
          ['rgba(255, 215, 0, 0.04)', 'transparent'],
          ['rgba(168, 85, 247, 0.03)', 'transparent'],
          ['rgba(45, 212, 191, 0.03)', 'transparent'],
        ];

        gradient.addColorStop(0, waveColors[i][0]);
        gradient.addColorStop(1, waveColors[i][1]);

        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    };

    const animate = () => {
      time++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw expanding waves
      drawEnergyWaves(ctx, time);

      // Draw energy connections
      drawEnergyConnections(ctx, time);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(mouse, time);
        particle.draw(ctx);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Parallax and scroll effects
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Universal inspirational words
  const floatingWords = [
    "Clarity",
    "Purpose",
    "Growth",
    "Balance",
    "Peace",
    "Wisdom",
    "Abundance",
    "Harmony",
  ];

  return (
    <section className="hero-universal" ref={heroRef}>
      {/* Energy canvas */}
      <canvas ref={canvasRef} className="energy-canvas" />

      {/* Light rays from center */}
      <div className="light-rays">
        <div className="ray ray-1" />
        <div className="ray ray-2" />
        <div className="ray ray-3" />
        <div className="ray ray-4" />
        <div className="ray ray-5" />
        <div className="ray ray-6" />
      </div>

      {/* Floating inspirational words */}
      <div className="floating-words-field">
        {floatingWords.map((word, index) => (
          <span
            key={index}
            className="floating-word"
            style={{
              left: `${10 + (index * 11)}%`,
              top: `${15 + Math.sin(index * 1.3) * 35}%`,
              animationDelay: `${index * 0.8}s`,
              fontSize: `${0.9 + Math.random() * 0.7}rem`,
              opacity: 0.04 + Math.random() * 0.05,
            }}
          >
            {word}
          </span>
        ))}
      </div>

      {/* Ambient energy orbs */}
      <div className="energy-orbs">
        <div className="energy-orb hero-orb-1" data-parallax="0.4" />
        <div className="energy-orb hero-orb-2" data-parallax="0.35" />
        <div className="energy-orb hero-orb-3" data-parallax="0.3" />
      </div>

      {/* Main content */}
      <div className="universal-content">
        {/* Subtle icon */}
        <div className="awareness-icon" data-parallax="0.15">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="awareness-svg">
            <circle cx="12" cy="12" r="3" strokeWidth="1.2" />
            <circle cx="12" cy="12" r="9" strokeWidth="0.8" opacity="0.3" />
            <circle cx="12" cy="12" r="6" strokeWidth="0.6" opacity="0.5" />
            <path
              strokeWidth="0.8"
              d="M12 1v3M12 20v3M1 12h3M20 12h3"
              opacity="0.4"
            />
          </svg>
          <div className="awareness-glow" />
        </div>

        {/* Elegant badge */}
        <div className="universal-badge" data-parallax="0.1">
          <div className="badge-glow-universal" />
          <div className="badge-inner-universal">
            <span className="badge-accent">✦</span>
            <span className="badge-text-universal">Conscious Transformation</span>
            <span className="badge-accent">✦</span>
          </div>
        </div>

        {/* Hero headline */}
        <h1 className="universal-headline">
          <div className="headline-row" data-parallax="0.2">
            <span className="word-reveal-universal word-1">Empowering</span>
            <span className="word-reveal-universal word-2">People</span>
            <span className="word-reveal-universal word-3">to</span>
          </div>
          <div className="headline-row highlight-row" data-parallax="0.25">
            <span className="word-reveal-universal word-4 gradient-text-universal">
              Transform
            </span>
            <span className="word-reveal-universal word-5 gradient-text-universal">
              Their
            </span>
          </div>
          <div className="headline-row" data-parallax="0.3">
            <span className="word-reveal-universal word-6 text-gold">Mind,</span>
            <span className="word-reveal-universal word-7">Energy,</span>
            <span className="word-reveal-universal word-8 text-gold">Wealth</span>
            <span className="word-reveal-universal word-9">&amp;</span>
            <span className="word-reveal-universal word-10">Life</span>
          </div>
        </h1>

        {/* Description */}
        <div className="universal-description" data-parallax="0.2">
          <div className="description-line-universal top-line" />
          <p className="description-text-universal">
            <span className="text-accent-universal">Anbuarasan</span> is a
            Spiritual Mentor, Thought Process Coach, Vibrance Intelligence
            Practitioner, Financial Awareness Educator, and Wellness Advocate
            helping individuals unlock
            <span className="text-emphasis-universal"> clarity</span>,{" "}
            <span className="text-emphasis-universal"> purpose</span>,{" "}
            <span className="text-emphasis-universal"> prosperity</span>, and{" "}
            <span className="text-emphasis-universal"> holistic well-being</span>.
          </p>
          <div className="description-line-universal bottom-line" />
        </div>

        {/* CTA Buttons */}
        <div className="cta-group-universal" data-parallax="0.15">
          <button className="cta-primary-universal">
            <span className="cta-bg-universal" />
            <span className="cta-content-universal">
              <svg className="cta-icon-svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13 3l8 8-8 8M21 11H3" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
              Start Your Transformation
            </span>
            <div className="cta-glow-effect" />
          </button>

          <button className="cta-secondary-universal">
            <span className="cta-content-universal">
              <svg className="cta-icon-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="4" strokeWidth="1.5" />
                <path d="M12 2v3M12 19v3M2 12h3M19 12h3" strokeWidth="1.5" />
              </svg>
              Join Brahma Muhurta
              <span className="cta-spark">🌅</span>
            </span>
            <div className="cta-hover-glow" />
          </button>
        </div>

        {/* Impact stats */}
        <div className="impact-stats" data-parallax="0.1">
          <div className="impact-stat-item">
            <div className="impact-stat-circle">
              <span className="impact-stat-number">500+</span>
            </div>
            <span className="impact-stat-label">Lives Transformed</span>
          </div>

          <div className="impact-stat-divider">
            <span className="divider-accent">•</span>
          </div>

          <div className="impact-stat-item">
            <div className="impact-stat-circle">
              <span className="impact-stat-number">12+</span>
            </div>
            <span className="impact-stat-label">Years Experience</span>
          </div>

          <div className="impact-stat-divider">
            <span className="divider-accent">•</span>
          </div>

          <div className="impact-stat-item">
            <div className="impact-stat-circle">
              <span className="impact-stat-number">∞</span>
            </div>
            <span className="impact-stat-label">Infinite Potential</span>
          </div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="corner-accents">
        <svg className="corner-accent top-left-accent" viewBox="0 0 100 100">
          <path d="M0 40 Q0 0, 40 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="40" cy="0" r="1.5" fill="currentColor" />
          <circle cx="0" cy="40" r="1.5" fill="currentColor" />
        </svg>
        <svg className="corner-accent top-right-accent" viewBox="0 0 100 100">
          <path d="M100 40 Q100 0, 60 0" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="0" r="1.5" fill="currentColor" />
          <circle cx="100" cy="40" r="1.5" fill="currentColor" />
        </svg>
        <svg className="corner-accent bottom-left-accent" viewBox="0 0 100 100">
          <path d="M0 60 Q0 100, 40 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="40" cy="100" r="1.5" fill="currentColor" />
          <circle cx="0" cy="60" r="1.5" fill="currentColor" />
        </svg>
        <svg className="corner-accent bottom-right-accent" viewBox="0 0 100 100">
          <path d="M100 60 Q100 100, 60 100" fill="none" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="60" cy="100" r="1.5" fill="currentColor" />
          <circle cx="100" cy="60" r="1.5" fill="currentColor" />
        </svg>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator-universal">
        <div className="scroll-icon-wrapper">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="scroll-icon">
            <path d="M12 5v14M5 12l7 7 7-7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span className="scroll-text-universal">Discover More</span>
      </div>
    </section>
  );
}

export default Hero;