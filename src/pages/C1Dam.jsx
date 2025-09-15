import React from "react";
import SliderHeroSection from "./SliderHeroSection";
import "../styles/C1Dam.css";

// Import environment images
import envImg1 from "../assets/images/main_packages_images/1.jpg";
import envImg2 from "../assets/images/main_packages_images/2.jpg";
import envImg3 from "../assets/images/main_packages_images/3.jpg";
import envImg4 from "../assets/images/main_packages_images/4.jpg";

const C1Dam = () => {
  const environmentImages = [envImg1, envImg2, envImg3, envImg4];

  return (
    <div className="c1-dam-page">
      {/* Hero Section with Environment Images */}
      <SliderHeroSection images={environmentImages} />

      {/* Main Content */}
      <div className="c1-dam-content">
        <div className="content-container">
          <header className="page-header">
            <h1>C-1 DAM</h1>
            <p className="page-subtitle">
              Main Civil Works/Packages Including Hydro-Mechanical (HM) Works
            </p>
          </header>

          <section className="contract-overview">
            <div className="overview-card">
              <h2>Contract Package Overview</h2>
              <div className="contract-details">
                <div className="detail-item">
                  <strong>Contract Package #:</strong> C-1
                </div>
                <div className="detail-item">
                  <strong>Project Description:</strong> Construction of
                  Diversion Tunnel, Dam, Intake and Desilting Arrangement
                  including Hydro-Mechanical works and Highway Tunnel
                </div>
                <div className="detail-item">
                  <strong>Contractor:</strong> M/s Jaiprakash Associates Ltd.
                </div>
                <div className="detail-item">
                  <strong>Award Date:</strong> June 26, 2011
                </div>
              </div>
            </div>
          </section>

          <section className="package-components">
            <h2>Contract Package C-1 Components</h2>
            <div className="components-grid">
              <div className="component-card">
                <h3>Diversion Tunnel</h3>
                <ul>
                  <li>1 No. Diversion Tunnel</li>
                  <li>Diameter: 12 m</li>
                  <li>Length: 877.46 m</li>
                  <li>Design Discharge: 1118 Cumec</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Dam Structure</h3>
                <ul>
                  <li>Concrete Gravity Dam</li>
                  <li>Height: 91 m</li>
                  <li>Length: 223.8 m</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Coffer Dams</h3>
                <ul>
                  <li>U/s Coffer Dam: 168.75 m length × 22 m height</li>
                  <li>D/s Coffer Dam: 102.02 m length × 13.5 m height</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Spillways</h3>
                <ul>
                  <li>Chute with Gates type Auxiliary Spillway (1 No. gate)</li>
                  <li>Sluice Spillway with 7 Nos. Gates</li>
                  <li>Gate Size: 8 m × 13.20 m each</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Intake Tunnels</h3>
                <ul>
                  <li>4 Nos. Intake Tunnels</li>
                  <li>Diameter: 6.4 m each</li>
                  <li>Total Length: 1926.78 m</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Desilting Chambers</h3>
                <ul>
                  <li>4 Nos. underground Desilting Chambers</li>
                  <li>Dimensions: 420 m (L) × 17/19 m (W) × 24.74 m (H)</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Silt Flushing Tunnel</h3>
                <ul>
                  <li>D-shaped tunnel</li>
                  <li>
                    Size: 3.6 m (W) × 2.96 m (H) to 8.6 m (W) × 4.675 m (H)
                  </li>
                  <li>Length: 495 m</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Highway Tunnel</h3>
                <ul>
                  <li>Diameter: 11 m</li>
                  <li>Length: 1522 m</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="special-features">
            <h2>Special Features & Uniqueness</h2>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">🏗️</div>
                <div className="feature-content">
                  <h3>Largest Diversion Tunnel</h3>
                  <p>
                    Diversion Tunnels (with 12 M dia) constructed is the largest
                    in the sub-continent.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🏢</div>
                <div className="feature-content">
                  <h3>Biggest Desilting Chambers</h3>
                  <p>
                    Desilting Chambers are the biggest in size in the country.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">🛣️</div>
                <div className="feature-content">
                  <h3>First Highway Tunnel</h3>
                  <p>
                    First ever Highway Tunnel (1.5 KM) constructed in Bhutan on
                    the National Highway.
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

export default C1Dam;
