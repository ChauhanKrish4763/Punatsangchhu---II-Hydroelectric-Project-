import React from 'react';
import SliderHeroSection from './SliderHeroSection';
import '../styles/Environment.css';

// Import your slider images (same as Overview)
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

const Environment = () => {
  // Define the images array
  const sliderImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11
  ];

  return (
    <div className="environment-container">
      <SliderHeroSection images={sliderImages} />
      
      <main className="environment-main">
        
        {/* Environment Wing Section */}
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Environment Wing</h2>
            <div className="section-content">
              <p>The Environment Wing was established to ensure that environmental concerns and effects are fully taken into account while implementing the mega project. The Environment Wing aims to make sure that the works carried out at the project sites are in line with the EIA report submitted to DECC.</p>
              
              <p>Further, the Environment Wing is also mandated to put in place the necessary controls and ensure compliance of relevant laws and regulations to promote environmental benefits. Coordination among relevant stakeholders and to obtain and issue of environmental clearances are also major function of the Environment Wing.</p>
            </div>
          </div>
        </div>

        {/* Environment Clearance Section */}
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Environment Clearance</h2>
            <div className="section-content">
              <p>The Environment Clearance is pre-requisite for any construction and developmental activities to ensure minimum impacts on the environment. Thus, the Environmental Clearance for construction and operation of 1020MW PHPA-II from the Department of Environment & Climate Change (DECC) was renewed and obtained on <strong>March 14, 2024</strong> with validity till <strong>March 13, 2028</strong>.</p>
              
              <p>The PHPA-II, besides the main package Environmental Clearance have also obtained and issued clearances from different stakeholders/agencies as follows:</p>
              
              <div className="clearance-tables">
                <div className="table-section">
                  <h3 className="table-title">Table A: Total Clearance obtained (Till March, 2024)</h3>
                  <div className="table-container">
                    <table className="clearance-table">
                      <thead>
                        <tr>
                          <th>Agency</th>
                          <th>DoFPS</th>
                          <th>Gewog Adm.</th>
                          <th>DoR</th>
                          <th>BPC</th>
                          <th>DAW</th>
                          <th>NEC</th>
                          <th>Total</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="bold">Total Clearance</td>
                          <td>102</td>
                          <td>84</td>
                          <td>24</td>
                          <td>6</td>
                          <td>82</td>
                          <td>27</td>
                          <td className="bold highlight">325</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="table-section">
                  <h3 className="table-title">Table B: Total In-House Clearance issued (Till March, 2024)</h3>
                  <div className="clearance-summary">
                    <div className="summary-item">
                      <span className="summary-label">In-house clearance issued for different activities</span>
                      <span className="summary-value">118</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Management Section */}
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Environment Management and Mitigation Measures</h2>
            
            {/* Water Environment */}
            <div className="env-subsection">
              <h3 className="subsection-title">Water Environment</h3>
              
              <div className="measure-item">
                <h4 className="measure-title">a) Sanitation facilities</h4>
                <ul className="measure-list">
                  <li>The workers camps were constructed with proper toilets with proper septic tanks and drainage system to ensure that the discharge from each toilet is collected in the tank and no discharge is drained into the surrounding water bodies.</li>
                  <li>The waste generated at each worker camp and work site is collected on daily basis and disposed at landfill site.</li>
                </ul>
              </div>

              <div className="measure-item">
                <h4 className="measure-title">b) Sedimentation tank and drainage system</h4>
                <ul className="measure-list">
                  <li>The sedimentation tanks were constructed at crusher plants/batching plant, auto workshops and at each tunnel to ensure that the wastewater is treated prior to discharge.</li>
                  <li>To avoid increasing of sediments from the muck disposal site, a proper drainage system has been constructed in order to avoid blockage and formation of pool.</li>
                </ul>
              </div>

              <div className="measure-item">
                <h4 className="measure-title">c) Sewage treatment plant</h4>
                <p>The sewage treatment plant was constructed for the project colony at Pheytheykha to treat effluents prior to the discharge.</p>
              </div>

              <div className="measure-item">
                <h4 className="measure-title">d) Water quality monitoring</h4>
                <p>The water quality monitoring is carried out every month in order to ensure that the quality of water is within the standard set by DECC. The result of the water quality monitoring is submitted to DECC every month.</p>
                
                <div className="parameters-box">
                  <strong>The following parameters are considered during the water quality monitoring:</strong>
                  <p>TDS and TSS, BOD, Conductivity, Dissolved Oxygen, pH & Temperature</p>
                </div>
              </div>
            </div>

            {/* Air Environment */}
            <div className="env-subsection">
              <h3 className="subsection-title">Air Environment</h3>
              <ul className="measure-list">
                <li>In order to control the dust emission at project site, two water tankers were deployed for sprinkling water along the highway/road and at project sites.</li>
                <li>Each Contractor deploys water tanker along the project roads and at their respective work site including muck disposal site to suppress dust due to movement of heavy trucks.</li>
                <li>All the project vehicles were subjected to emission test and frequent inspection is being carried out by project officials and RSTA officials to ensure that the emission from all the vehicles deployed for the project purpose are within the set standard.</li>
                <li>The dust emission from the crusher plant is being controlled through installation of water sprinkling system wherever required with regular monitoring and control blasting method is being adopted to ensure minimum dust generation.</li>
                <li>The use of firewood at the workers camp is restricted to prevent and avoid the risk of fire and emission of CO/CO2 into atmosphere.</li>
                <li>In order to minimize the dust emission along the primary national highway due to continuous movement of vehicle, the re-carpeting (black-top) of highway was carried out by the Project from Dam site till Tail Race Tunnel.</li>
              </ul>
            </div>

            {/* Land Environment */}
            <div className="env-subsection">
              <h3 className="subsection-title">Land Environment</h3>
              
              <div className="measure-item">
                <h4 className="measure-title">Compensatory Afforestation</h4>
                <p>As per the Detail Project Report, about 300 ha of forest area will be affected or lost during the construction of 1020MW PHPA-II and it is stated that the compensatory afforestation of twice the area affected or lost should be executed by PHPA-II.</p>
                
                <p>Accordingly, the project has executed the Compensatory Afforestation of 600 ha (300ha X 2) in five neighboring districts of Gasa, Punakha, Wangdue, Dagana and Tsirang through Department of Forest & Park Services (DoFPs) upon signing of Memorandum of Understanding (MoU) with Gross National Happiness Commission (GNHC).</p>
                
                <div className="table-container">
                  <table className="afforestation-table">
                    <thead>
                      <tr>
                        <th>Target</th>
                        <th>Executing agencies</th>
                        <th>Total CA committed</th>
                        <th>CA completed as of 2021</th>
                        <th>Remarks</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td rowSpan="7" className="target-cell">Committed as per DPR (300 X 2) = 600 Ha)</td>
                        <td>Tsirang</td>
                        <td>250 ha</td>
                        <td>250ha</td>
                        <td>As per the MoU of 2014</td>
                      </tr>
                      <tr>
                        <td>Wangdue</td>
                        <td>40 ha</td>
                        <td>40 ha</td>
                        <td rowSpan="2">As per the MoU of 2016</td>
                      </tr>
                      <tr>
                        <td>Punakha</td>
                        <td>74 ha</td>
                        <td>74 ha</td>
                      </tr>
                      <tr>
                        <td>Wangdue</td>
                        <td>70 ha</td>
                        <td>70 ha</td>
                        <td rowSpan="3">As per the MoU of 2018</td>
                      </tr>
                      <tr>
                        <td>Gasa</td>
                        <td>66 ha</td>
                        <td>66 ha</td>
                      </tr>
                      <tr>
                        <td>Dagana</td>
                        <td>50 ha</td>
                        <td>50 ha</td>
                      </tr>
                      <tr>
                        <td>Tsirang</td>
                        <td>50 ha</td>
                        <td>50 ha</td>
                        <td></td>
                      </tr>
                      <tr className="total-row">
                        <td><strong>TOTAL</strong></td>
                        <td><strong>600 ha</strong></td>
                        <td><strong>600 ha</strong></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="measure-item">
                <h4 className="measure-title">Muck disposal sites and rehabilitation</h4>
                <p>There are ten muck disposal sites measuring about 151.036 acres identified for PHPA-II to dump muck and boulders excavated from various tunnelling works. After, the completion of mucking activity, the dump yards should be properly developed with slope stabilization and revegetate to the extent possible with various tree and grass species as per the requirement of Detailed Project Report, Land Lease Agreement and other Environmental obligations.</p>
                
                <p>Accordingly, PHPA-II has completed rehabilitation for 38.5 acres of exhausted muck disposal sites and handed over to the Dzongkhag Administration of Wangdue. All the completed rehabilitation sites have more than 99% survival rate and are well established for natural succession.</p>
                
                <div className="table-container">
                  <table className="muck-table">
                    <thead>
                      <tr>
                        <th>Location under wangdue</th>
                        <th>Total Area as per agreement (acres)</th>
                        <th>Area requiring rehabilitation (acres)</th>
                        <th>Purpose</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Khuma, Bjishokha, Methang, Kamechhu, Dorji wog lum, Dorgarthang & Dogarlum, Pinsa Lum Semtarigang, Pheytakha</td>
                        <td>151.936</td>
                        <td>80.666</td>
                        <td>Muck Disposal</td>
                        <td>Rehabilitation works Completed for various location except for few areas that are still being used by different stack holders.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Conservation Section */}
        <div className="section-card">
          <div className="section-header">
            <h2 className="section-title">Conservation Initiatives</h2>
            
            <div className="conservation-item">
              <h3 className="conservation-title">Conservation of White Bellied Heron (Ardea insignis)</h3>
              <p>In the year 2011, the PHPA-II in coordination with Royal Society of Protection of Nature (RSPN) has initiated a pilot artificial incubation of WBH eggs at Bhumitsawa along the Pochu bank in Punakha. Out of the two eggs that has been collected and incubated, one hatched on 7th May, 2011. The fully grown chick was released on 77th day i.e on 17th September, 2011.</p>
              
              <p>Further, the PHPA-II has signed a MoU with RSPN on 17th November, 2016 for construction of WBH conservation facility at Chanchey under Tsirang Dzongkhag. The following facilities were constructed and handed over to RSPN on 27th November, 2020 for operation & maintenance:</p>
              
              <ul className="facility-list">
                <li>Construction of staff quarter, laboratory and Office</li>
                <li>Fish pond and Aviaries</li>
                <li>Access road</li>
                <li>WBH public information & exhibition center</li>
                <li>Public toilet</li>
              </ul>
            </div>

            <div className="conservation-item">
              <h3 className="conservation-title">Golden Mahseer (Tor putitora)</h3>
              <p>As a part of conservation and mitigation measure, The PHPA-II signed a Letter of Understanding with Department of Livestock (DoL), under Ministry of Agriculture and Forest for construction of Golden Mahseer Hatchery and Conservation Facility at Harachu on 16th March, 2018.</p>
              
              <p>Subsequently, the construction work was awarded to Construction Development Corporation Limited (CDCL) comprising of the following works:</p>
              
              <ul className="facility-list">
                <li>Two bailey bridges across Punatsangchhu and Harachhu</li>
                <li>Approach road and internal roads for hatchery facility and residential blocks</li>
                <li>Construction of two residential buildings</li>
                <li>Construction of hatchery viz office, laboratory, rearing unit, nursing unit and fish ponds</li>
                <li>Chain link fencing and installation of street lights</li>
              </ul>
              
              <p>Upon, completion of all the construction works, the hatchery was handed over to DoL, Ministry of Agriculture & Forest on 24th March, 2021 for operation and maintenance.</p>
            </div>

            <div className="conservation-item">
              <h3 className="conservation-title">Snow Trout Rearing facility at Rabuna, Wangdue</h3>
              <p>As a part of mitigation measures, snow trout rearing facility was set up at Rabuna, Wangdue for conservation of Snow Trout with ultimate aim of restocking the wild population in the main stream. The Snow Trout rearing facility at Rabuna was handed over to the Dzongkhag Livestock Sector under Wangdue Dzongkhag Administration on 30th March, 2018.</p>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
};

export default Environment;
