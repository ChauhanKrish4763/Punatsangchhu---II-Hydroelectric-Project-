import React from 'react';
import { Zap, Users, Calendar, Building } from 'lucide-react';
import CountUp from 'react-countup';
import SliderHeroSection from './SliderHeroSection';
import '../styles/Overview.css';

// Import your slider images
import img1 from "../assets/images/slider_images/117_national_day.jpg";
import img2 from "../assets/images/slider_images/dam_reservoir.jpg";
import img3 from "../assets/images/slider_images/dam_top_view_phep_II.jpg";
import img4 from "../assets/images/slider_images/inauguration_of_unit_I.jpg";
import img5 from "../assets/images/slider_images/inauguration_of_unit_II.jpg";
import img6 from "../assets/images/slider_images/machine_hall_power_house.jpg";
import img7 from "../assets/images/slider_images/marchang_offering.jpg";
import img8 from "../assets/images/slider_images/pothead_yard.jpg";
import img9 from "../assets/images/slider_images/transmission_line.jpg";
import img10 from "../assets/images/slider_images/unit_I_to_unit_III.jpg";
import img11 from "../assets/images/slider_images/wangduephodrang_dzong.jpg";

const Overview = () => {
  // Define the images array
  const sliderImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
  ];

  return (
    <div className="overview-container">
      <SliderHeroSection images={sliderImages} />
      
      <main className="overview-main">
        {/* Stats Grid */}
        <div className="stats-grid">
          <div className="stat-card">
            <div className="stat-card-content">
              <Zap className="stat-icon blue" />
              <div>
                <div className="stat-label">Capacity</div>
                <div className="stat-value">
                  <CountUp end={1020} duration={2} />MW
                </div>
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-card-content">
              <Users className="stat-icon green" />
              <div>
                <div className="stat-label">Total Staff</div>
                <div className="stat-value">
                  <CountUp end={567} duration={2} />
                </div>
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-card-content">
              <Calendar className="stat-icon purple" />
              <div>
                <div className="stat-label">Started</div>
                <div className="stat-value">Dec 2010</div>
              </div>
            </div>
          </div>
          
          <div className="stat-card">
            <div className="stat-card-content">
              <Building className="stat-icon orange" />
              <div>
                <div className="stat-label">Investment</div>
                <div className="stat-value">₹9,115 Cr</div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Background */}
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Project Background</h2>
            <div className="section-content">
              <p>In the Punatsangchhu basin, seventeen Hydro Power projects with a total capacity of 8,035 MW were identified in the Power System Master Plan (PSMP) of Bhutan-1993. Two projects namely, Punatsangchhu-I and Punatsangchhu-II were selected for the formulation of PSMP-2003.</p>
              
              <p>Punatsangchhu-I (1,200 MW) & Punatsangchhu-II (1,020 MW) are the two first projects taken up for development towards the result of the 10,000 MW by 2020 initiative taken by Royal Government of Bhutan (RGoB) and Government of India (GoI) in May 2008.</p>
              
              <p>The project is located on the right bank of Punatsangchhu river along the Wangdue-Tsirang highway between 20 km and 35 km downstream of Wangdue Bridge. The Dam site is about 94 km from Thimphu along the highway.</p>
            </div>
          </div>
        </div>

        {/* Location & Access */}
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Location & Access</h2>
            <div className="location-grid">
              <div>
                <h3 className="location-subtitle">Project Location</h3>
                <p className="location-text">The project is strategically positioned on the right bank of Punatsangchhu river, utilizing the natural topography for optimal hydroelectric generation.</p>
              </div>
              <div>
                <h3 className="location-subtitle">Access Routes</h3>
                <ul className="access-list">
                  <li className="access-item">
                    <div className="access-bullet"></div>
                    <span>94 km from Thimphu via Wangdue-Tsirang highway</span>
                  </li>
                  <li className="access-item">
                    <div className="access-bullet"></div>
                    <span>20-35 km downstream of Wangdue Bridge</span>
                  </li>
                  <li className="access-item">
                    <div className="access-bullet"></div>
                    <span>Direct highway connectivity for logistics</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Project Timeline</h2>
            <div className="timeline-container">
              <div className="timeline-item blue">
                <h3 className="timeline-title">Bilateral Agreement Signing</h3>
                <p className="timeline-text">The Bilateral Agreement between the Royal Government of Bhutan (RGoB) and Government of Republic of India (GoI) was signed by:</p>
                <ul className="timeline-list">
                  <li>His Excellency Lyonpo Khandu Wangchuk, Hon'ble Minister for Economic Affairs, RGoB</li>
                  <li>His Excellency Shri Pranab Mukherjee, Hon'ble Minister for External Affairs, GoI</li>
                </ul>
              </div>
              
              <div className="timeline-item green">
                <h3 className="timeline-title">Foundation Stone Ceremony</h3>
                <p className="timeline-text">Foundation stone laid jointly by H.E. Jigme Y. Thinley, Hon'ble Prime Minister of Bhutan and H.E. Dr. Manmohan Singh, Hon'ble Prime Minister of India.</p>
              </div>
              
              <div className="timeline-item orange">
                <h3 className="timeline-title">Project Implementation</h3>
                <p className="timeline-text">Project implementation started with an ambitious completion schedule of 7 years including 2 years of infrastructure development.</p>
                <p className="timeline-text">The "Constitution" of the Authority was approved with effect from May 1, 2010, drafted in line with the provisions of the Bilateral Agreement.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Funding Structure */}
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Funding Structure</h2>
            <div className="funding-grid">
              <div className="funding-content">
                <div className="funding-total">
                  <span className="funding-total-label">Total Investment</span>
                  <span className="funding-total-amount">₹9,115 Crores</span>
                </div>
                
                <div className="funding-split">
                  <div className="funding-item green">
                    <div className="funding-percentage green">30%</div>
                    <div className="funding-label">Grant from GoI</div>
                  </div>
                  <div className="funding-item orange">
                    <div className="funding-percentage orange">70%</div>
                    <div className="funding-label">Loan at 10% interest</div>
                  </div>
                </div>
                
                <p className="funding-note">Loan repayable in 30 equated semi-annual installments commencing one year after the mean date of operation.</p>
              </div>
              
              <div>
                <h3 className="location-subtitle">Key Project Features</h3>
                <div className="features-list">
                  <div className="feature-item">
                    <div className="feature-bullet blue"></div>
                    <div>
                      <div className="feature-title">Capacity Revision</div>
                      <div className="feature-description">Initially 990 MW, later revised to 1,020 MW</div>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet green"></div>
                    <div>
                      <div className="feature-title">Power Export</div>
                      <div className="feature-description">All surplus power to be exported to India</div>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet purple"></div>
                    <div>
                      <div className="feature-title">Project Handover</div>
                      <div className="feature-description">Authority to be dissolved within 2 years after commissioning</div>
                    </div>
                  </div>
                  <div className="feature-item">
                    <div className="feature-bullet orange"></div>
                    <div>
                      <div className="feature-title">Ownership</div>
                      <div className="feature-description">Project to be handed over to Royal Government of Bhutan</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Distribution */}
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Staff Distribution</h2>
            <div className="staff-grid">
              <div className="staff-stats">
                <div className="staff-stat-item blue">
                  <span className="staff-stat-label">Total Staff</span>
                  <span className="staff-stat-value large blue">567</span>
                </div>
                <div className="staff-stat-item green">
                  <span className="staff-stat-label">Bhutanese Staff</span>
                  <span className="staff-stat-value medium green">558</span>
                </div>
                <div className="staff-stat-item orange">
                  <span className="staff-stat-label">Indian Staff</span>
                  <span className="staff-stat-value medium orange">9</span>
                </div>
              </div>
              
              <div className="table-container">
                <table className="staff-table">
                  <thead className="table-header">
                    <tr>
                      <th>Nationality</th>
                      <th>Deputation</th>
                      <th>Contract</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody className="table-body">
                    <tr className="table-row">
                      <td className="table-cell bold dark">Bhutanese</td>
                      <td className="table-cell blue">75</td>
                      <td className="table-cell blue">483</td>
                      <td className="table-cell bold blue">558</td>
                    </tr>
                    <tr className="table-row gray">
                      <td className="table-cell bold dark">Indian</td>
                      <td className="table-cell gray">3</td>
                      <td className="table-cell gray">6</td>
                      <td className="table-cell bold gray">9</td>
                    </tr>
                    <tr className="table-row blue">
                      <td className="table-cell bold dark">Total</td>
                      <td className="table-cell bold dark">78</td>
                      <td className="table-cell bold dark">489</td>
                      <td className="table-cell bold dark">567</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Overview;
