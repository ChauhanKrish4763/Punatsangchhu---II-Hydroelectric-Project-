import React from "react";
import SliderHeroSection from "./SliderHeroSection";
import "../styles/C3PowerHouse.css";

// Import main packages images
import img1 from "../assets/images/main_packages_images/1.jpg";
import img2 from "../assets/images/main_packages_images/2.jpg";
import img3 from "../assets/images/main_packages_images/3.jpg";
import img4 from "../assets/images/main_packages_images/4.jpg";

const C3PowerHouse = () => {
  const heroImages = [img1, img2, img3, img4];

  return (
    <div className="c3-powerhouse-page">
      {/* Hero Section with Main Packages Images */}
      <SliderHeroSection images={heroImages} />

      {/* Main Content */}
      <div className="c3-powerhouse-content">
        <div className="content-container">
          <header className="page-header">
            <h1>C-III Power House</h1>
            <p className="page-subtitle">
              Construction Of Power House Complex and Associated Infrastructure
            </p>
          </header>

          <section className="contract-overview">
            <div className="overview-card">
              <h2>Contract Package Overview</h2>
              <div className="contract-details">
                <div className="detail-item">
                  <strong>Contract Package #:</strong> C-3
                </div>
                <div className="detail-item">
                  <strong>Project Description:</strong> Construction Of Headrace
                  Tunnel (from Surge Shaft end), Surge Shaft, Butterfly Valve
                  Chamber, Pressure Shafts, Power House and Tailrace Tunnel
                  including Hydro-Mechanical works
                </div>
                <div className="detail-item">
                  <strong>Contractor:</strong> M/s Jaiprakash Associates Limited
                </div>
                <div className="detail-item">
                  <strong>Award Date:</strong> June 26, 2011
                </div>
              </div>
            </div>
          </section>

          <section className="package-components">
            <h2>Contract Package C-3 Components</h2>
            <div className="components-grid">
              <div className="component-card primary">
                <h3>Head Race Tunnel</h3>
                <ul>
                  <li>Diameter: 11 m finished</li>
                  <li>Length: 2 km from Surge Shaft end</li>
                  <li>Connection to main HRT system</li>
                </ul>
              </div>

              <div className="component-card primary">
                <h3>Surge Shaft</h3>
                <ul>
                  <li>Diameter: 31 m finished</li>
                  <li>Height: 137 m</li>
                  <li>Type: Open to sky design</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Butterfly Valve Chamber</h3>
                <ul>
                  <li>Length: 124.55 m</li>
                  <li>Width: 12 m</li>
                  <li>Height: 22.5 m</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Ferrule Erection Chamber</h3>
                <ul>
                  <li>Length: 120 m</li>
                  <li>Width: 12 m</li>
                  <li>Height: 12 m</li>
                </ul>
              </div>

              <div className="component-card highlight">
                <h3>Pressure Shafts & Penstocks</h3>
                <ul>
                  <li>3 Nos Steel Lined Pressure Shafts</li>
                  <li>Diameter: 5.5 m, Length: 1453.342 m</li>
                  <li>6 Nos Penstocks of 3.86 m diameter</li>
                </ul>
              </div>

              <div className="component-card highlight">
                <h3>Power House Cavern</h3>
                <ul>
                  <li>Length: 240.7 m</li>
                  <li>Width: 23 m</li>
                  <li>Height: 51 m</li>
                  <li>Capacity: Six generation units</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Transformer Hall Cavern</h3>
                <ul>
                  <li>Length: 215.7 m</li>
                  <li>Width: 14 m</li>
                  <li>Height: 26.5 m</li>
                </ul>
              </div>

              <div className="component-card primary">
                <h3>D/S Surge Chamber</h3>
                <ul>
                  <li>Length: 314 m</li>
                  <li>Width: 18 m</li>
                  <li>Height: 58.5/48.5 m</li>
                  <li>Type: Underground</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Tail Race Tunnels</h3>
                <ul>
                  <li>7.8 m finished dia, 356 m length</li>
                  <li>11 m finished dia, 2.87 km length</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Cable & Bus Duct Tunnels</h3>
                <ul>
                  <li>Cable Tunnel: 283.26 m long, 7.0 m x 7.5 m D-shaped</li>
                  <li>3 Nos Bus Duct Tunnel: 11 m x 8 m D-Shaped</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Additional Infrastructure</h3>
                <ul>
                  <li>6 Nos Draft Tube Tunnels</li>
                  <li>Pot Head Yard</li>
                  <li>Main Access Tunnel to Power House</li>
                  <li>Connected Adits and Tunnels</li>
                </ul>
              </div>

              <div className="component-card">
                <h3>Hydro-Mechanical Works</h3>
                <ul>
                  <li>3 Nos Pressure Shafts</li>
                  <li>6 Nos Draft Tubes</li>
                  <li>2 Nos TRT Outfall Gates</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="special-features">
            <h2>Special Features & Uniqueness</h2>
            <div className="features-list">
              <div className="feature-item">
                <div className="feature-icon">🏢</div>
                <div className="feature-content">
                  <h3>Largest Underground Surge Chamber</h3>
                  <p>
                    The underground Down Stream Surge Chamber is the biggest in
                    the Country.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div className="feature-icon">⚡</div>
                <div className="feature-content">
                  <h3>Deepest Surge Shaft</h3>
                  <p>
                    Diameter (31 m) & 137 m depth of Surge Shaft is the
                    largest/deepest designed & constructed in the Country.
                  </p>
                </div>
              </div>

              <div className="feature-item">
                <div class="feature-icon">🚇</div>
                <div className="feature-content">
                  <h3>Largest Diameter Tunnels</h3>
                  <p>
                    Diameter (11 m) of Head Race Tunnel & 11 m dia, Tail Race
                    Tunnel is the biggest in the country.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="technical-specs">
            <h2>Technical Specifications</h2>
            <div className="specs-grid">
              <div className="spec-item">
                <div className="spec-number">6</div>
                <div className="spec-label">Generation Units</div>
              </div>
              <div className="spec-item">
                <div className="spec-number">1,020</div>
                <div className="spec-label">MW Total Capacity</div>
              </div>
              <div className="spec-item">
                <div className="spec-number">31m</div>
                <div className="spec-label">Surge Shaft Diameter</div>
              </div>
              <div className="spec-item">
                <div className="spec-number">137m</div>
                <div className="spec-label">Surge Shaft Depth</div>
              </div>
              <div className="spec-item">
                <div className="spec-number">51m</div>
                <div className="spec-label">Power House Height</div>
              </div>
              <div className="spec-item">
                <div className="spec-number">2.87km</div>
                <div className="spec-label">Tail Race Length</div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default C3PowerHouse;
