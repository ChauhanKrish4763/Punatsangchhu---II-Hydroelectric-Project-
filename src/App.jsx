import { useState, useEffect } from "react";
import "./App.css";
import chairmanImg from "./assets/images/chairman_img.png";
import mdImg from "./assets/images/md_img.jpg";
import jmdImg from "./assets/images/jmd_img.jpg";
import dtImg from "./assets/images/dt_img.jpg";
import dfImg from "./assets/images/df_img.jpg";

// Slider Images (check order)
import img1 from "./assets/images/slider_images/117_national_day.jpg";
import img5 from "./assets/images/slider_images/inauguration_of_unit_II.jpg";
import img2 from "./assets/images/slider_images/dam_reservoir.jpg";
import img3 from "./assets/images/slider_images/dam_top_view_phep_II.jpg";
import img4 from "./assets/images/slider_images/inauguration_of_unit_I.jpg";
import img6 from "./assets/images/slider_images/machine_hall_power_house.jpg";
import img7 from "./assets/images/slider_images/marchang_offering.jpg";
import img8 from "./assets/images/slider_images/pothead_yard.jpg";
import img9 from "./assets/images/slider_images/transmission_line.jpg";
import img10 from "./assets/images/slider_images/unit_I_to_unit_III.jpg";
import img11 from "./assets/images/slider_images/wangduephodrang_dzong.jpg";

import { Link } from "react-router-dom";

function App() {
  const [currentImage, setCurrentImage] = useState(0);

  const sliderImages = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
  ];

  const quotes = [
    { text: "117th National Day" },
    { text: "Dam Reservoir" },
    { text: "Dam Down Stream" },
    { text: "Intake Structure" },
    { text: "Inauguration of UNIT-V" },
    { text: "UNIT-I to UNIT-V" },
    { text: "UNIT-V" },
    { text: "Wangduephodrang" },
    { text: "Transmission Line" },
    { text: "Unit-I to Unit-III" },
    { text: "Wangduephodrang Dzong" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % sliderImages.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [sliderImages.length]);

  const goToSlide = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="slider">
          {sliderImages.map((img, index) => (
            <div
              key={index}
              className={`slide ${
                index === currentImage
                  ? "active"
                  : index < currentImage
                  ? "prev"
                  : "next"
              }`}
              style={{ backgroundImage: `url(${img})` }} // ✅ FIXED
            />
          ))}
        </div>

        <div className="manual-buttons">
          <button
            className="nav-button left"
            onClick={() =>
              setCurrentImage(
                (prev) => (prev - 1 + sliderImages.length) % sliderImages.length
              )
            }
          >
            ‹
          </button>
          <button
            className="nav-button right"
            onClick={() =>
              setCurrentImage((prev) => (prev + 1) % sliderImages.length)
            }
          >
            ›
          </button>
        </div>

        {/* Quote */}
        <div className="quote-overlay">
          <blockquote key={currentImage} className="centered-quote">
            <p>{quotes[currentImage].text}</p>
          </blockquote>
        </div>

        {/* Indicators */}
        <div className="indicators">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentImage ? "active" : ""}`} // ✅ FIXED
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`} // ✅ FIXED
            />
          ))}
        </div>
      </section>

      {/* Content Section */}

      {/* Content Section */}
      <section className="content-section">
        <div className="content-wrapper">
          <div className="content-layout">
            <div className="title-section">
              <h1 className="main-title">
                Punatsangchhu Hydroelectric Project - II
              </h1>
            </div>
            <div className="text-section">
              <p className="description-text">
                The Punatsangchhu-II Hydroelectric Project (PHEP-II) is a 1,020
                MW run-of-the-river project in Bhutan, where the Phochhu and
                Mochhu rivers converge at Punakha to form the Punatsangchhu
                river. The project's diversion dam is located about 20 km
                downstream of Wangduephodrang Bridge, with an underground
                powerhouse at Kamechu. Jointly implemented by the Governments of
                Bhutan and India, the project is overseen by a Technical
                Coordination Committee for efficient technical management.
              </p>
              <Link to="/read_more" className="read-more-link">
                Read More <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="our-management-section">
        <h1>Our Management</h1>
        <div className="management-cards-row-1">
          <Link
            to="/chairman"
            className="card"
            state={{
              title: "CHAIRMAN",
              imageSrc: chairmanImg,
              imageAlt: "Chairman",
              paragraphs: [
                "<strong>His Excellency Lyonpo Gem Tshering</strong>",
                "Chairman, Minister, Ministry of Energy and Natural Resources.",
              ],
            }}
          >
            <img src={chairmanImg} alt="Chairman" />
            <div className="card-label">Chairman</div>
          </Link>
          <Link
            to="/managing_director"
            className="card"
            state={{
              title: "MANAGING DIRECTOR",
              imageSrc: mdImg,
              imageAlt: "Managing Director",
              paragraphs: [
                "<strong>Mr. Sanjay Kumar Yadav</strong>",
                "Managing Director of 1,020 MW Punatsangchhu-II Hydroelectric Project Authorities.",
              ],
            }}
          >
            <img src={mdImg} alt="Managing Director" />
            <div className="card-label">Managing Director</div>
          </Link>
          <Link
            to="/joint_managing_director"
            className="card"
            state={{
              title: "JOINT MANAGING DIRECTOR",
              imageSrc: jmdImg,
              imageAlt: "Joint Managing Director",
              paragraphs: [
                "<strong>Mr. Rinzin Gyeltshen</strong>",
                "Joint Managing Director of 1,020 MW Punatsangchhu-II Hydroelectric Project Authorities.",
              ],
            }}
          >
            <img src={jmdImg} alt="Joint Managing Director" />
            <div className="card-label">Joint Managing Director</div>
          </Link>
        </div>

        <div className="management-cards-row-2">
          <Link
            to="/director_technical"
            className="card"
            state={{
              title: "DIRECTOR TECHNICAL",
              imageSrc: dtImg,
              imageAlt: "Director Technical",
              paragraphs: [
                "<strong>Mr. Ajay Kumar</strong>",
                "Mr. Ajay Kumar, took over the responsibility of Director Technical, PHPA on 23rd November 2022.",
              ],
            }}
          >
            <img src={dtImg} alt="Director Technical" />
            <div className="card-label">Director Technical</div>
          </Link>
          <Link
            to="/director_finance"
            className="card"
            state={{
              title: "DIRECTOR FINANCE",
              imageSrc: dfImg,
              imageAlt: "Director Finance",
              paragraphs: [
                "<strong>Shri Sakesh Prasad Singh, (ICAS 1995)</strong>",
                "Director (Finance), of 1,020 MW Punatsangchhu-II Hydroelectric Project Authority.",
              ],
            }}
          >
            <img src={dfImg} alt="Director Finance" />
            <div className="card-label">Director Finance</div>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default App;
