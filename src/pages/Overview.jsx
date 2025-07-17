import React from 'react';
import { Zap, Users, Calendar, Building } from 'lucide-react';
import CountUp from 'react-countup';
import HeroSection from './HeroSection';
import '../styles/Overview.css';
//import projectVideo from "../assets/videos/project-authority.mp4";

const Overview = () => {
  return (
    <div className="overview-container fadeUp">
      <HeroSection title="Overview" />
      
      <div className="overview-main fadeUp">
        {/* Key Stats */}
        <div className="stats-grid">
          <div className="stat-card fadeUp" style={{ animationDelay: '0.1s' }}>
            <div className="stat-card-content">
              <Zap className="stat-icon blue" />
              <div>
                <p className="stat-label">Capacity</p>
                <p className="stat-value">
                  <CountUp end={1020} duration={1.5} separator="," /> MW
                </p>
              </div>
            </div>
          </div>
          
          <div className="stat-card fadeUp" style={{ animationDelay: '0.2s' }}>
            <div className="stat-card-content">
              <Users className="stat-icon green" />
              <div>
                <p className="stat-label">Total Staff</p>
                <p className="stat-value">
                  <CountUp end={601} duration={1.5} separator="," />
                </p>
              </div>
            </div>
          </div>
          
          <div className="stat-card fadeUp" style={{ animationDelay: '0.3s' }}>
            <div className="stat-card-content">
              <Calendar className="stat-icon purple" />
              <div>
                <p className="stat-label">Started</p>
                <p className="stat-value">Dec 2010</p>
              </div>
            </div>
          </div>
          
          <div className="stat-card fadeUp" style={{ animationDelay: '0.4s' }}>
            <div className="stat-card-content">
              <Building className="stat-icon orange" />
              <div>
                <p className="stat-label">Investment</p>
                <p className="stat-value">
                  ₹<CountUp end={37778} duration={1.5} separator="," />M
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Project Background */}
        <div className="section-card fadeUp" style={{ animationDelay: '0.5s' }}>
          <div className="section-header">
            <h2 className="section-title">
              Project Background
            </h2>
            <div className="section-content">
              <p>
                In the Punatsangchhu basin, seventeen Hydro Power projects with a total capacity of 8,035 MW were identified in the Power System Master Plan (PSMP) of Bhutan-1993. Two projects namely, Punatsangchhu-I and Punatsangchhu-II were selected for the formulation of PSMP-2003.
              </p>
              <p>
                Punatsangchhu-I (1,200 MW) & Punatsangchhu-II (1,020 MW) are the two first projects taken up for development towards the result of the 10,000 MW by 2020 initiative taken by Royal Government of Bhutan (RGoB) and Government of India (GoI) in May 2008.
              </p>
            </div>
          </div>
        </div>

        {/* Location Details */}
        <div className="section-card fadeUp" style={{ animationDelay: '0.6s' }}>
          <div className="section-header">
            <h2 className="section-title">
              Location & Accessibility
            </h2>
            <div className="location-grid">
              <div>
                <h3 className="location-subtitle">Project Location</h3>
                <p className="location-text">
                  The project is located on the right bank of Punatsangchhu river along the Wangdue-Tsirang highway between 20 km and 35 km downstream of Wangdue Bridge. The Dam site is about 94 km from Thimphu along the highway.
                </p>
              </div>
              <div>
                <h3 className="location-subtitle">Access Points</h3>
                <ul className="access-list">
                  <li className="access-item">
                    <span className="access-bullet"></span>
                    Paro Airport: 125 km away
                  </li>
                  <li className="access-item">
                    <span className="access-bullet"></span>
                    Hasimara Railway Station (NEF Railway)
                  </li>
                  <li className="access-item">
                    <span className="access-bullet"></span>
                    Bagdogra Airport near Siliguri
                  </li>
                  <li className="access-item">
                    <span className="access-bullet"></span>
                    Via Phuentsholing-Semtokha-Dochula (440 km)
                  </li>
                  <li className="access-item">
                    <span className="access-bullet"></span>
                    From Gelephu border town
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Timeline */}
        <div className="section-card fadeUp" style={{ animationDelay: '0.7s' }}>
          <div className="section-header">
            <h2 className="section-title">
              Project Implementation
            </h2>
            <div className="timeline-container">
              <div className="timeline-item blue">
                <h3 className="timeline-title">Bilateral Agreement - July 30, 2010</h3>
                <p className="timeline-text">
                  The Bilateral Agreement between the Royal Government of Bhutan (RGoB) and Government of Republic of India (GoI) was signed by:
                </p>
                <ul className="timeline-list">
                  <li>H.E. Lyonpo Khandu Wangchuk, Hon'ble Minister for Economic Affairs (RGoB)</li>
                  <li>H.E. Shri S.M. Krishna, Hon'ble Minister for External Affairs (GoI)</li>
                </ul>
                <p className="timeline-text mt-2">
                  Foundation stone laid jointly by H.E. Jigme Y. Thinley, Hon'ble Prime Minister of Bhutan and H.E. Dr. Manmohan Singh, Hon'ble Prime Minister of India.
                </p>
              </div>
              
              <div className="timeline-item green">
                <h3 className="timeline-title">Project Commencement - December 17, 2010</h3>
                <p className="timeline-text">
                  Project implementation started with an ambitious completion schedule of 7 years including 2 years of infrastructure development.
                </p>
              </div>
              
              <div className="timeline-item orange">
                <h3 className="timeline-title">Authority Constitution - December 31, 2010</h3>
                <p className="timeline-text">
                  The "Constitution" of the Authority was approved with effect from May 1, 2010, drafted in line with the provisions of the Bilateral Agreement.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Funding Structure & Features */}
        <div className="funding-grid">
          <div className="section-card fadeUp" style={{ animationDelay: '0.8s' }}>
            <div className="section-header">
              <h2 className="section-title">Funding Structure</h2>
              <div className="funding-content">
                <div className="funding-total">
                  <span className="funding-total-label">Total Project Cost</span>
                  <span className="funding-total-amount">₹37,778 Million</span>
                </div>
                <div className="funding-split">
                  <div className="funding-item green">
                    <p className="funding-percentage green">30%</p>
                    <p className="funding-label">Grant from GoI</p>
                  </div>
                  <div className="funding-item orange">
                    <p className="funding-percentage orange">70%</p>
                    <p className="funding-label">Loan at 10% interest</p>
                  </div>
                </div>
                <p className="funding-note">
                  Loan repayable in 30 equated semi-annual installments commencing one year after the mean date of operation.
                </p>
              </div>
            </div>
          </div>
          <div className="section-card fadeUp" style={{ animationDelay: '0.9s' }}>
            <div className="section-header">
              <h2 className="section-title">Key Project Features</h2>
              <div className="features-list">
                <div className="feature-item">
                  <span className="feature-bullet blue"></span>
                  <div>
                    <p className="feature-title">Capacity Revision</p>
                    <p className="feature-description">Initially 990 MW, later revised to 1,020 MW</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-bullet green"></span>
                  <div>
                    <p className="feature-title">Power Export</p>
                    <p className="feature-description">All surplus power to be exported to India</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-bullet purple"></span>
                  <div>
                    <p className="feature-title">Project Handover</p>
                    <p className="feature-description">Authority to be dissolved within 2 years after commissioning</p>
                  </div>
                </div>
                <div className="feature-item">
                  <span className="feature-bullet orange"></span>
                  <div>
                    <p className="feature-title">Ownership</p>
                    <p className="feature-description">Project to be handed over to Royal Government of Bhutan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Staff Strength */}
        <div className="section-card fadeUp" style={{ animationDelay: '1.0s' }}>
          <div className="section-header">
            <h2 className="section-title">
              Project Staff Strength (as of April 30, 2025)
            </h2>
            
            <div className="staff-grid">
              <div>
                <h3 className="location-subtitle">Overall Statistics</h3>
                <div className="staff-stats">
                  <div className="staff-stat-item blue">
                    <span className="staff-stat-label">Total Staff</span>
                    <span className="staff-stat-value large blue">601</span>
                  </div>
                  <div className="staff-stat-item green">
                    <span className="staff-stat-label">Bhutanese Staff</span>
                    <span className="staff-stat-value medium green">590</span>
                  </div>
                  <div className="staff-stat-item orange">
                    <span className="staff-stat-label">Indian Nationals</span>
                    <span className="staff-stat-value medium orange">11</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="location-subtitle">Staff Distribution</h3>
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
                        <td className="table-cell medium dark">Bhutanese</td>
                        <td className="table-cell gray">75</td>
                        <td className="table-cell gray">483</td>
                        <td className="table-cell bold dark">558</td>
                      </tr>
                      <tr className="table-row gray">
                        <td className="table-cell medium dark">Indian</td>
                        <td className="table-cell gray">3</td>
                        <td className="table-cell gray">6</td>
                        <td className="table-cell bold dark">9</td>
                      </tr>
                      <tr className="table-row blue">
                        <td className="table-cell bold dark">Total</td>
                        <td className="table-cell bold dark">78</td>
                        <td className="table-cell bold dark">489</td>
                        <td className="table-cell bold blue">567</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;