import React, { useState } from "react";
import "../styles/HeroSection.css";

const HeroSection = ({ videoSrc, title }) => {
  const [videoReady, setVideoReady] = useState(false);

  return (
    <section className="hero-container">
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
        onCanPlayThrough={() => setVideoReady(true)}
        style={{ display: videoReady ? "block" : "none" }}
      >
        <source src={videoSrc} type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <h1 className="hero-heading">{title}</h1>
      </div>
    </section>
  );
};

export default HeroSection;
