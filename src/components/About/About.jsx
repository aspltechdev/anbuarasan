// import "./About.css";
// import { useEffect, useRef, useState } from "react";

// function About() {
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

//   const values = [
//     { icon: "✦", title: "Clarity", desc: "Seeing life with renewed perspective and understanding" },
//     { icon: "◈", title: "Purpose", desc: "Discovering your unique path and deeper meaning" },
//     { icon: "◆", title: "Awareness", desc: "Living consciously with mindful presence every day" },
//     { icon: "⬡", title: "Success", desc: "Achieving sustainable growth in all areas of life" },
//   ];

//   const stats = [
//     { value: "500+", label: "Lives Transformed" },
//     { value: "12+", label: "Years of Service" },
//     { value: "50+", label: "Countries Reached" },
//     { value: "∞", label: "Infinite Impact" },
//   ];

//   return (
//     <section className="about-cosmic" ref={sectionRef} id="about">
//       {/* Starfield */}
//       <div className="cosmic-stars">
//         {[...Array(50)].map((_, i) => (
//           <span
//             key={i}
//             className="cosmic-star"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 3}s`,
//               animationDuration: `${2 + Math.random() * 3}s`,
//               width: `${0.5 + Math.random() * 2}px`,
//               height: `${0.5 + Math.random() * 2}px`,
//             }}
//           />
//         ))}
//       </div>

//       {/* Nebula */}
//       <div className="cosmic-nebula cosmic-nebula-1" />
//       <div className="cosmic-nebula cosmic-nebula-2" />

//       <div className="cosmic-container">
//         {/* Section Header */}
//         <div className={`cosmic-header ${isVisible ? 'cosmic-visible' : ''}`}>
//           <div className="cosmic-eyebrow">
//             <span className="cosmic-eyebrow-dot" />
//             <span>The Mission</span>
//             <span className="cosmic-eyebrow-dot" />
//           </div>

//           <h2 className="cosmic-heading">
//             A Journey Towards
//             <span className="cosmic-heading-accent"> Conscious Living</span>
//           </h2>
//         </div>

//         {/* Main Grid */}
//         <div className={`cosmic-grid ${isVisible ? 'cosmic-visible' : ''}`}>
//           {/* Left - Image */}
//           <div className="cosmic-visual">
//             <div className="cosmic-image-wrap" style={calcParallax(0.02)}>
//               {/* Orbit Ring */}
//               <div className="cosmic-image-orbit" />
              
//               {/* Floating dots on orbit */}
//               <div className="cosmic-image-dot cosmic-dot-1" />
//               <div className="cosmic-image-dot cosmic-dot-2" />
//               <div className="cosmic-image-dot cosmic-dot-3" />

//               {/* Image Frame */}
//               <div className="cosmic-image-frame">
//                 <div className="cosmic-image-glow" />
//                 <img
//                   src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
//                   alt="Anbuarasan"
//                   className="cosmic-image"
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Right - Content */}
//           <div className="cosmic-content">
//             <p className="cosmic-text">
//               For years, <span className="cosmic-name">Anbuarasan</span> has dedicated 
//               his life to guiding individuals toward{" "}
//               <span className="cosmic-highlight">self-awareness</span>,{" "}
//               <span className="cosmic-highlight">mindset mastery</span>,{" "}
//               <span className="cosmic-highlight">financial consciousness</span>, and{" "}
//               <span className="cosmic-highlight">wellness</span>.
//             </p>

//             {/* Mission Card */}
//             <div className="cosmic-mission">
//               <span className="cosmic-mission-label">His mission is simple:</span>
//               <p className="cosmic-mission-text">
//                 Help people live with greater{" "}
//                 <span className="cosmic-emphasis">clarity</span>, stronger{" "}
//                 <span className="cosmic-emphasis">purpose</span>, deeper{" "}
//                 <span className="cosmic-emphasis">awareness</span>, and sustainable{" "}
//                 <span className="cosmic-emphasis">success</span>.
//               </p>
//             </div>

//             <p className="cosmic-text">
//               Through daily transformation programs, spiritual coaching sessions, 
//               financial awareness initiatives, and wellness education, he continues 
//               to impact lives globally.
//             </p>

//             {/* Values Grid */}
//             <div className="cosmic-values">
//               {values.map((v, i) => (
//                 <div key={v.title} className="cosmic-value" style={{ transitionDelay: `${i * 0.1}s` }}>
//                   <span className="cosmic-value-icon">{v.icon}</span>
//                   <div>
//                     <span className="cosmic-value-title">{v.title}</span>
//                     <span className="cosmic-value-desc">{v.desc}</span>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Stats */}
//             <div className="cosmic-stats">
//               {stats.map((s, i) => (
//                 <div key={s.label} className="cosmic-stat" style={{ transitionDelay: `${0.3 + i * 0.1}s` }}>
//                   <span className="cosmic-stat-value">{s.value}</span>
//                   <span className="cosmic-stat-label">{s.label}</span>
//                 </div>
//               ))}
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

function About() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
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
      { threshold: 0.2 }
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
      transform: `translate(${(mousePos.x - rect.left - rect.width / 2) * depth}px, ${(mousePos.y - rect.top - rect.height / 2) * depth}px)`,
    };
  };

  const values = [
    { icon: "✦", title: "Clarity", desc: "Seeing life with renewed perspective" },
    { icon: "◈", title: "Purpose", desc: "Discovering your unique path" },
    { icon: "◆", title: "Awareness", desc: "Living with mindful presence" },
    { icon: "⬡", title: "Success", desc: "Achieving sustainable growth" },
  ];

  const stats = [
    { value: "500+", label: "Lives Transformed" },
    { value: "12+", label: "Years of Service" },
    { value: "50+", label: "Countries Reached" },
    { value: "∞", label: "Infinite Impact" },
  ];

  return (
    <section className="about-cosmic" ref={sectionRef} id="about">
      {/* Galaxy Video Background */}
      <div className="cosmic-video-wrap">
        <video
          ref={videoRef}
          className="cosmic-video"
          muted
          loop
          playsInline
          preload="auto"
          poster="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg"
        >
          <source src="https://cdn.coverr.co/videos/coverr-stars-in-the-night-sky-5449/1080p.mp4" type="video/mp4" />
        </video>
        <div className="cosmic-video-overlay" />
      </div>

      {/* Cinematic Light Rays */}
      <div className="cosmic-rays">
        <div className="cosmic-ray cosmic-ray-1" />
        <div className="cosmic-ray cosmic-ray-2" />
        <div className="cosmic-ray cosmic-ray-3" />
      </div>

      {/* Floating Star Particles */}
      <div className="cosmic-stars">
        {[...Array(60)].map((_, i) => (
          <span
            key={i}
            className="cosmic-star"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
              animationDuration: `${2 + Math.random() * 4}s`,
              width: `${0.5 + Math.random() * 2.5}px`,
              height: `${0.5 + Math.random() * 2.5}px`,
            }}
          />
        ))}
      </div>

      {/* Drifting Cosmic Dust */}
      <div className="cosmic-dust">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="cosmic-dust-particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Nebula Glows */}
      <div className="cosmic-nebula cosmic-nebula-1" />
      <div className="cosmic-nebula cosmic-nebula-2" />
      <div className="cosmic-nebula cosmic-nebula-3" />

      <div className="cosmic-container">
        {/* Section Header */}
        <div className={`cosmic-header ${isVisible ? 'cosmic-visible' : ''}`}>
          <div className="cosmic-eyebrow">
            <span className="cosmic-eyebrow-line" />
            <span>The Mission</span>
            <span className="cosmic-eyebrow-line" />
          </div>

          <h2 className="cosmic-heading">
            A Journey Towards
            <span className="cosmic-heading-accent"> Conscious Living</span>
          </h2>
        </div>

        {/* Main Grid */}
        <div className={`cosmic-grid ${isVisible ? 'cosmic-visible' : ''}`}>
          {/* Left - Image with Orbit */}
          <div className="cosmic-visual">
            <div className="cosmic-image-wrap" style={calcParallax(0.025)}>
              {/* Outer Orbit Ring */}
              <div className="cosmic-orbit cosmic-orbit-outer" />
              <div className="cosmic-orbit cosmic-orbit-inner" />
              
              {/* Orbiting Energy Dots */}
              <div className="cosmic-orbiter cosmic-orbiter-1" />
              <div className="cosmic-orbiter cosmic-orbiter-2" />
              <div className="cosmic-orbiter cosmic-orbiter-3" />
              <div className="cosmic-orbiter cosmic-orbiter-4" />

              {/* Image Frame */}
              <div className="cosmic-image-frame">
                <div className="cosmic-image-aura" />
                <img
                  src="https://images.unsplash.com/photo-1545389336-cf090694435e?w=800&q=80"
                  alt="Anbuarasan"
                  className="cosmic-image"
                />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="cosmic-content">
            <p className="cosmic-text">
              For years, <span className="cosmic-name">Anbuarasan</span> has dedicated 
              his life to guiding individuals toward{" "}
              <span className="cosmic-highlight">self-awareness</span>,{" "}
              <span className="cosmic-highlight">mindset mastery</span>,{" "}
              <span className="cosmic-highlight">financial consciousness</span>, and{" "}
              <span className="cosmic-highlight">wellness</span>.
            </p>

            <div className="cosmic-mission">
              <span className="cosmic-mission-label">His mission is simple:</span>
              <p className="cosmic-mission-text">
                Help people live with greater{" "}
                <span className="cosmic-emphasis">clarity</span>, stronger{" "}
                <span className="cosmic-emphasis">purpose</span>, deeper{" "}
                <span className="cosmic-emphasis">awareness</span>, and sustainable{" "}
                <span className="cosmic-emphasis">success</span>.
              </p>
            </div>

            <p className="cosmic-text">
              Through daily transformation programs, spiritual coaching sessions, 
              financial awareness initiatives, and wellness education, he continues 
              to impact lives globally.
            </p>

            {/* Values */}
            <div className="cosmic-values">
              {values.map((v, i) => (
                <div key={v.title} className="cosmic-value" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <span className="cosmic-value-icon">{v.icon}</span>
                  <div>
                    <span className="cosmic-value-title">{v.title}</span>
                    <span className="cosmic-value-desc">{v.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            {/* <div className="cosmic-stats">
              {stats.map((s, i) => (
                <div key={s.label} className="cosmic-stat" style={{ transitionDelay: `${0.3 + i * 0.1}s` }}>
                  <span className="cosmic-stat-value">{s.value}</span>
                  <span className="cosmic-stat-label">{s.label}</span>
                </div>
              ))}
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;