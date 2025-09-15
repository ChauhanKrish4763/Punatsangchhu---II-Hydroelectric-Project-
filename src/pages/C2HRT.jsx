import React from "react";
import SliderHeroSection from "./SliderHeroSection";
import "../styles/C2HRT.css";

// Import main packages images
import img1 from "../assets/images/main_packages_images/1.jpg";
import img2 from "../assets/images/main_packages_images/2.jpg";
import img3 from "../assets/images/main_packages_images/3.jpg";
import img4 from "../assets/images/main_packages_images/4.jpg";

const C2HRT = () => {
  const heroImages = [img1, img2, img3, img4];

  return (
    <div className="c2-hrt-page">
      {/* Hero Section with Main Packages Images */}
      <SliderHeroSection images={heroImages} />

      {/* Main Content */}
      <div className="c2-hrt-content">
        <div className="content-container">
          <header className="page-header">
            <h1>C-2 HRT</h1>
            <p className="page-subtitle">Head Race Tunnel Construction</p>
          </header>

          <section className="contract-overview">
            <div className="overview-card">
              <h2>Contract Package Overview</h2>
              <div className="contract-details">
                <div className="detail-item">
                  <strong>Contract Package #:</strong> C-2 HRT
                </div>
                <div className="detail-item">
                  <strong>Project Description:</strong> Construction of HRT
                  (Head Race Tunnel)
                </div>
                <div className="detail-item">
                  <strong>Contractor:</strong> M/s Gammon India Limited
                </div>
                <div className="detail-item">
                  <strong>Contract Amount:</strong> INR/Nu 3,983.27 Million
                </div>
                <div className="detail-item">
                  <strong>Award Date:</strong> June 26, 2011
                </div>
              </div>
            </div>
          </section>

          <section className="tunnel-specifications">
            <h2>Head Race Tunnel Specifications</h2>
            <div className="specs-grid">
              <div className="spec-card highlight">
                <div className="spec-icon">🔵</div>
                <div className="spec-content">
                  <h3>Tunnel Diameter</h3>
                  <p className="spec-value">11 m</p>
                  <p className="spec-desc">Circular finished</p>
                </div>
              </div>

              <div className="spec-card highlight">
                <div className="spec-icon">📏</div>
                <div className="spec-content">
                  <h3>Total Length</h3>
                  <p className="spec-value">8,514 m</p>
                  <p className="spec-desc">Complete HRT length</p>
                </div>
              </div>

              <div className="spec-card">
                <div className="spec-icon">🌊</div>
                <div className="spec-content">
                  <h3>Design Discharge</h3>
                  <p className="spec-value">466 Cumec</p>
                  <p className="spec-desc">Water flow capacity</p>
                </div>
              </div>

              <div className="spec-card">
                <div className="spec-icon">🏗️</div>
                <div className="spec-content">
                  <h3>C-2 Package Length</h3>
                  <p className="spec-value">6,514 m</p>
                  <p className="spec-desc">Out of total 8,514 m</p>
                </div>
              </div>

              <div className="spec-card">
                <div className="spec-icon">🏢</div>
                <div className="spec-content">
                  <h3>C-3 Package Length</h3>
                  <p className="spec-value">2,000 m</p>
                  <p className="spec-desc">Powerhouse Complex</p>
                </div>
              </div>

              <div className="spec-card progress">
                <div className="spec-icon">📊</div>
                <div className="spec-content">
                  <h3>Overall Progress</h3>
                  <p className="spec-value">65.14%</p>
                  <p className="spec-desc">C-2 Package completion</p>
                </div>
              </div>
            </div>
          </section>

          <section className="construction-method">
            <h2>Construction Methodology</h2>
            <div className="method-cards">
              <div className="method-card">
                <h3>Adit Construction</h3>
                <div className="adit-details">
                  <div className="adit-item">
                    <strong>Number of Adits:</strong> 2
                  </div>
                  <div className="adit-item">
                    <strong>Size:</strong> 7.5 m × 7.5 m D-shaped
                  </div>
                  <div className="adit-item">
                    <strong>Adit-I Length:</strong> 600 m
                    <span className="completion-date">
                      (Completed: April 30, 2013)
                    </span>
                  </div>
                  <div className="adit-item">
                    <strong>Adit-II Length:</strong> 546 m
                    <span className="completion-date">
                      (Completed: August 10, 2012)
                    </span>
                  </div>
                </div>
              </div>

              <div className="method-card">
                <h3>Excavation Process</h3>
                <div className="process-steps">
                  <div className="step">
                    <div className="step-number">1</div>
                    <div className="step-content">
                      <strong>Two-Stage Excavation</strong>
                      <p>Heading and Benching method</p>
                    </div>
                  </div>
                  <div className="step">
                    <div className="step-number">2</div>
                    <div className="step-content">
                      <strong>Drilling & Blasting</strong>
                      <p>Conventional method used</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="method-card">
                <h3>Concrete Lining</h3>
                <div className="lining-details">
                  <div className="lining-item">
                    <strong>Type:</strong> PCC/RCC Concrete Lined
                  </div>
                  <div className="lining-item">
                    <strong>Thickness Range:</strong> 550 mm to 725 mm
                  </div>
                  <div className="lining-item">
                    <strong>Purpose:</strong> Structural integrity and water
                    flow optimization
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="project-highlights">
            <h2>Project Highlights</h2>
            <div className="highlights-grid">
              <div className="highlight-item">
                <div className="highlight-icon">🚇</div>
                <div className="highlight-content">
                  <h3>Large Scale Tunneling</h3>
                  <p>
                    One of the largest diameter tunnels in the region with
                    advanced construction techniques.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">⚡</div>
                <div className="highlight-content">
                  <h3>Critical Infrastructure</h3>
                  <p>
                    Essential component for the 1,020 MW hydroelectric project
                    connecting dam to powerhouse.
                  </p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🔧</div>
                <div className="highlight-content">
                  <h3>Advanced Engineering</h3>
                  <p>
                    Sophisticated construction methodology with dual adit
                    approach for efficient execution.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default C2HRT;
