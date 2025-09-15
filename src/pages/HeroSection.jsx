import React, { useState } from "react";
import "../styles/HeroSection.css";
import transmissionLineImg from "../assets/images/slider_images/transmission_line.jpg";

const HeroSection = ({ videoSrc, title }) => {
  const [mediaReady, setMediaReady] = useState(false);

  // Determine if the source is a video or image based on file extension
  const mediaSrc = videoSrc || transmissionLineImg;
  const isVideo =
    mediaSrc &&
    (mediaSrc.includes(".mp4") ||
      mediaSrc.includes(".webm") ||
      mediaSrc.includes(".ogg"));

  return (
    <section className="hero-container">
      {isVideo ? (
        <video
          className="hero-bg-video"
          autoPlay
          muted
          loop
          playsInline
          onCanPlayThrough={() => setMediaReady(true)}
          style={{ display: mediaReady ? "block" : "none" }}
        >
          <source src={mediaSrc} type="video/mp4" />
        </video>
      ) : (
        <img
          className="hero-bg-image"
          src={mediaSrc}
          alt="Hero background"
          onLoad={() => setMediaReady(true)}
          style={{ display: mediaReady ? "block" : "none" }}
        />
      )}

      <div className="hero-overlay">
        <h1 className="hero-heading">{title}</h1>
      </div>
    </section>
  );
};

export default HeroSection;
