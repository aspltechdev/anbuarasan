import { useState } from "react";
import "./SocialWall.css";
import { InstagramEmbed } from "react-social-media-embed";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa6";
// import socialWallBg from "../assets/bg.png";

const instagramPosts = [
  "https://www.instagram.com/p/DaSvuCPiVuY/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/DUIi6g3E_Ne/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
  "https://www.instagram.com/p/B6-A4NUFD_x/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
];

const facebookPosts = [
  "https://www.facebook.com/permalink.php?story_fbid=pfbid02snyLJSERh8QXgzJJHG1qtnky8BpZPVVfU8PUQMNUchKk9iEUJocMFmb3dpzCF5VVl&id=61591229948970",
  "https://www.facebook.com/permalink.php?story_fbid=122102782593374331&id=61591229948970&substory_index=1337628821680595",
];

const linkedinPosts = [
  "https://www.linkedin.com/posts/anbarasan-official_anbarasanofficial-mindbodywealth-personalgrowth-activity-7478446422217097216-sZkx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAGZbNX0Bw49Rv45brtLfwtwsAqfON9LIPqM",
  "PASTE_SECOND_LINKEDIN_URL_HERE",
];

const fillLoop = (arr) => {
  if (arr.length === 0) return [];
  const times = Math.ceil(4 / arr.length);
  const filled = Array.from({ length: times }, () => arr).flat();
  return [...filled, ...filled];
};

export default function SocialWall() {
  const [activeTab, setActiveTab] = useState("instagram");

  return (
    <section className="sw-section">
      <div className="sw-bg-overlay"></div>

      <div className="sw-container">
        <div className="sw-header">
          <div className="sw-header-music-bg" aria-hidden="true">
            <svg viewBox="0 0 800 250" preserveAspectRatio="xMidYMid meet" className="sw-header-svg">
              <circle cx="150" cy="70" r="1.5" fill="rgba(201, 160, 61, 0.55)" />
              <circle cx="280" cy="120" r="2" fill="rgba(201, 160, 61, 0.45)" />
              <circle cx="380" cy="80" r="1.2" fill="rgba(201, 160, 61, 0.6)" />
              <circle cx="500" cy="60" r="2" fill="rgba(201, 160, 61, 0.55)" />
              <circle cx="640" cy="130" r="1.5" fill="rgba(201, 160, 61, 0.45)" />
            </svg>
          </div>

          <div className="sw-badge">
            <span className="sw-badge-dot"></span>
            <span className="sw-badge-text">FOLLOW OUR JOURNEY</span>
            <span className="sw-badge-dot"></span>
          </div>

          <h2 className="sw-title">
            <span className="sw-title-light">Moments &</span>
            <span className="sw-title-gold"> Milestones</span>
          </h2>

          <div className="sw-title-decor">
            <span className="sw-decor-line"></span>
            <span className="sw-decor-diamond">◈</span>
            <span className="sw-decor-line"></span>
          </div>

          <p className="sw-subtitle">
            Discover inspiring insights, entrepreneurial ventures,
            spiritual perspectives, and the latest updates from
            Anbuarasan's journey.
          </p>

          <div className="sw-tabs">
            <button
              id="sw-tab-instagram"
              className={`sw-tab-btn ${activeTab === "instagram" ? "sw-tab-active" : ""}`}
              onClick={() => setActiveTab("instagram")}
            >
              <FaInstagram size={20} />
              <span className="sw-tab-text">Instagram</span>
            </button>

            <button
              id="sw-tab-facebook"
              className={`sw-tab-btn ${activeTab === "facebook" ? "sw-tab-active" : ""}`}
              onClick={() => setActiveTab("facebook")}
            >
              <FaFacebook size={20} />
              <span className="sw-tab-text">Facebook</span>
            </button>

            <button
              id="sw-tab-linkedin"
              className={`sw-tab-btn ${activeTab === "linkedin" ? "sw-tab-active" : ""}`}
              onClick={() => setActiveTab("linkedin")}
            >
              <FaLinkedin size={20} />
              <span className="sw-tab-text">LinkedIn</span>
            </button>
          </div>
        </div>
      </div>

      <div className="sw-marquee">
        <div className="sw-track">
          {activeTab === "instagram" &&
            fillLoop(instagramPosts).map((url, index) => (
              <div key={`ig-${index}`} className="sw-card">
                <div className="sw-card-top sw-card-top--instagram">
                  <FaInstagram size={16} />
                  <span>ANBUARASAN</span>
                </div>
                <div className="sw-embed-wrapper">
                  <InstagramEmbed url={url} width="100%" />
                </div>
              </div>
            ))}

          {activeTab === "facebook" &&
            facebookPosts.map((url, index) => {
              const fbSrc = "https://www.facebook.com/plugins/post.php?href=" + encodeURIComponent(url) + "&show_text=true&width=480";
              return (
                <div key={`fb-${index}`} className="sw-card sw-card--wide">
                  <div className="sw-card-top sw-card-top--facebook">
                    <FaFacebook size={16} />
                    <span>ANBUARASAN</span>
                  </div>
                  <div className="sw-embed-wrapper sw-embed-facebook">
                    <iframe
                      src={fbSrc}
                      width="100%"
                      height="500"
                      style={{ border: "none", overflow: "hidden", display: "block" }}
                      scrolling="no"
                      allowFullScreen={true}
                      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                      loading="lazy"
                      title={"Facebook Post " + index}
                    />
                  </div>
                </div>
              );
            })}

          {activeTab === "linkedin" &&
            fillLoop(linkedinPosts).map((url, index) => (
              <div key={`li-${index}`} className="sw-card sw-card--wide">
                <div className="sw-card-top sw-card-top--linkedin">
                  <FaLinkedin size={16} />
                  <span>ANBUARASAN</span>
                </div>
                <a href={url} target="_blank" rel="noopener noreferrer" className="sw-embed-wrapper sw-linkedin-card">
                  <FaLinkedin size={40} />
                  <p>View this post on LinkedIn</p>
                  <span className="sw-linkedin-btn">Open Post</span>
                </a>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}