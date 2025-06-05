import { useState, useEffect } from 'react';
import './App.css';
import logo from './assets/images/p2logo.png';
import chairmanImg from './assets/images/chairman_img.png';
import mdImg from './assets/images/md_img.jpg';
import jmdImg from './assets/images/jmd_img.jpg';
import dtImg from './assets/images/dt_img.jpg';
import dfImg from './assets/images/df_img.jpg';
import img1 from './assets/images/slider_images/117_national_day.jpg';
import img2 from './assets/images/slider_images/dam_reservoir.jpg';
import img3 from './assets/images/slider_images/dam_top_view_phep_II.jpg';
import img4 from './assets/images/slider_images/inauguration_of_unit_I.jpg';
import img5 from './assets/images/slider_images/inauguration_of_unit_II.jpg';
import img6 from './assets/images/slider_images/machine_hall_power_house.jpg';
import img7 from './assets/images/slider_images/marchang_offering.jpg';
import img8 from './assets/images/slider_images/pothead_yard.jpg';
import img9 from './assets/images/slider_images/transmission_line.jpg';
import img10 from './assets/images/slider_images/unit_I_to_unit_III.jpg';
import img11 from './assets/images/slider_images/wangduephodrang_dzong.jpg';
import { Link } from 'react-router-dom';





function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const sliderImages = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11
  ];
  const quotes = [
    {
      text: "117th National Day",
    },
    {
      text: "DAM Reservoir",
    },
    {
      text: "DAM Top View, PHEP-II",
    },
    {
      text: "Inauguration of Unit-I",
    },
    {
      text: "Inauguration of of Unit-II",
    },
    {
      text: "Machine Hall, Power House.",
    },
    {
      text: "Marchang Offering",
    },
    {
      text: "Pothead Yard",
    },
    {
      text: "Transmission Line",
    },
    {
      text: "Unit-I to Unit-III",
    },
    {
      text: "Wangduephodrang Dzong",
    },
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
          <nav className="navbar">
            <div className="logo-container">
              <img src={logo} alt="Logo" className="logo" />
              <span className="project-title">Punatsangchhu - II Hydroelectric Project Authority</span>
            </div>
            <div className="nav-links">
              <a href="home">HOME</a>
              <a href="#about">ABOUT</a>
              <a href="#media">EMPLOYEES</a>
            </div>
          </nav>
        <div className="slider">
          {
            sliderImages.map((img, index) => (
              <div
                key={index}
                className={`slide ${index === currentImage ? 'active' : index < currentImage ? 'prev' : 'next'}`}
                style={{ backgroundImage: `url(${img})` }}
              />
            ))

          }
        </div>

        <div className="manual-buttons">
          <button className="nav-button left" onClick={() => setCurrentImage((prev) => (prev - 1 + sliderImages.length) % sliderImages.length)}>
            ‹
          </button>
          <button className="nav-button right" onClick={() => setCurrentImage((prev) => (prev + 1) % sliderImages.length)}>
            ›
          </button>
        </div>

        {/* Quote */}
        <div className="quote-overlay">
          <blockquote
            key={currentImage}
            className="centered-quote"
          >
            <p>{quotes[currentImage].text}</p>
          </blockquote>
        </div>

        {/* Indicators */}
        <div className="indicators">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentImage ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}

        </div>
      </section>

      {/* Content Section */}
      <section className="content-section">
        <div className="content-wrapper">
          <div className="text-content">
            <div className="heading-container">
              <h1>
              Harnessing Rivers, Powering Nations:{' '}
                <span className="highlight"> The Punatsangchhu-II Project</span>
              </h1>
              <div className="paragraph-text">
                <p className="side-text">
                  The Punatsangchhu-II Hydroelectric Project (PHEP-II) is a 1,020 MW
                  run-of-the-river project in Bhutan, where the Phochhu and Mochhu rivers
                  converge at Punakha to form the Punatsangchhu river. The project's
                  diversion dam is located about 20 km downstream of Wangduephodrang Bridge,
                  with an underground powerhouse at Kamechu. Jointly implemented by the
                  Governments of Bhutan and India, the project is overseen by a Technical
                  Coordination Committee for efficient technical management.
                </p>
                <Link to="/read_more" className="read-more-link">
                  Read More <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Management Section */}
      <section className="our-management-section">
        <h1>Our Management</h1>
        <div className="management-cards-row-1">
          <div className="card">
            <img src={chairmanImg} alt="Chairman" />
            <div className="card-label">Chairman</div>
          </div>
          <div className="card">
            <img src={mdImg} alt="Managing Director" />
            <div className="card-label">Managing Director</div>
          </div>
          <div className="card">
            <img src={jmdImg} alt="Joint Managing Director" />
            <div className="card-label">Joint Managing Director</div>
          </div>
        </div>
        <div className="management-cards-row-2">
          <div className="card">
            <img src={dtImg} alt="Director Technical" />
            <div className="card-label">Director Technical</div>
          </div>
          <div className="card">
            <img src={dfImg} alt="Director Finance" />
            <div className="card-label">Director Finance</div>
          </div>
        </div>
      </section>



    </div>
  );
}

export default App;