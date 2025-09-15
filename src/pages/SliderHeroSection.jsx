import React, { useState, useEffect } from "react";
import "../styles/SliderHeroSection.css";

const SliderHeroSection = ({ images = [] }) => {
  const [currentImage, setCurrentImage] = useState(0);

  // Default images (fallback if no images passed)
  const defaultImages = [];

  // Use passed images or defaults
  const sliderImages = images.length > 0 ? images : defaultImages;

  useEffect(() => {
    if (sliderImages.length > 0) {
      const interval = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % sliderImages.length);
      }, 5000); // 5 seconds auto-slide
      return () => clearInterval(interval);
    }
  }, [sliderImages.length]);

  const goToSlide = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="slider-hero-container">
      <div className="slider-hero">
        {sliderImages.map((image, index) => (
          <div
            key={index}
            className={`slide-hero ${
              index === currentImage
                ? "active"
                : index === currentImage - 1 ||
                  (currentImage === 0 && index === sliderImages.length - 1)
                ? "prev"
                : "next"
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>

      {/* Manual navigation buttons (transparent icons) */}
      {sliderImages.length > 0 && (
        <div className="manual-buttons-hero">
          <button
            className="nav-button-hero left"
            onClick={() =>
              setCurrentImage(
                (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
              )
            }
            aria-label="Previous slide"
          >
            &#x2039;
          </button>
          <button
            className="nav-button-hero right"
            onClick={() =>
              setCurrentImage((prev) => (prev + 1) % sliderImages.length)
            }
            aria-label="Next slide"
          >
            &#x203a;
          </button>
        </div>
      )}

      {sliderImages.length > 0 && (
        <div className="indicators-hero">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`indicator-hero ${
                index === currentImage ? "active" : ""
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SliderHeroSection;
