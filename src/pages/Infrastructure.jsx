import React from "react";
import SliderHeroSection from "./SliderHeroSection";
import "../styles/Boards.css";

// Import main packages images
import img1 from "../assets/images/main_packages_images/1.jpg";
import img2 from "../assets/images/main_packages_images/2.jpg";
import img3 from "../assets/images/main_packages_images/3.jpg";
import img4 from "../assets/images/main_packages_images/4.jpg";

const Infrastructure = () => {
  const infrastructureImages = [img1, img2, img3, img4];

  return (
    <div className="infrastructure-page">
      <SliderHeroSection images={infrastructureImages} />

      <div className="infrastructure-content">
        <div className="board-tables">
          {/* Local Contractors Summary */}
          <section className="section">
            <h2 className="section-title">Local Contractors Summary</h2>
            <p
              style={{
                marginBottom: "1.5rem",
                color: "#666",
                fontSize: "1rem",
              }}
            >
              Local contractors involved in both civil and electrical works of
              Punatsangchhu-II Hydroelectric Project Authority
            </p>
            <table className="table">
              <thead>
                <tr>
                  <th>Total No. of Local Contractors, Completed Works</th>
                  <th>Total No. of Local Contractors, On going works</th>
                  <th>Total</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>88</td>
                  <td>0</td>
                  <td>88</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Residential Complex */}
          <section className="section">
            <h2 className="section-title">I. Residential Complex</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Sl.No.</th>
                  <th>Name of Work</th>
                  <th>Detail of the Work</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Package #R-I</td>
                  <td>
                    Construction of D-Type (2 units x 1 Block), E-Type (4units x
                    2 Blocks), F-Type (4 units x 6 Blocks) and allied work for
                    PHEP-II colony
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Package #R-II</td>
                  <td>
                    Construction of G-Type (6units x 8 Blocks) and allied work
                    for PHEP-II colony
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Package #R-III</td>
                  <td>
                    Construction of G-Type (6 units x 5 Blocks) and H-Type (6
                    units x 7 Blocks) and allied work for PHEP-II colony
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Package #R-IV</td>
                  <td>
                    Construction of H-Type (6units x 9 Blocks) and allied work
                    for PHEP-II colony
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>RNR Staff Quarter</td>
                  <td>
                    Construction of Double Storey (4 units) RNR Staff quarter at
                    Kamichu
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Lineman Quarter</td>
                  <td>Construction of Lineman Accommodation at Dogarthang</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Residential unit acquired from cost sharing (P-1)</td>
                  <td>
                    Construction of B-Type (2 units), C-Type (4 units), D-Type
                    (9 units), E-Type (9 units), F-Type (2 units), G-Type(68
                    units) and H-Type(26 units)
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Police Station</td>
                  <td>Construction of Police Station for RBP at Zhawakha</td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Non-residential Complex */}
          <section className="section">
            <h2 className="section-title">II. Non-residential Complex</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name of the Work</th>
                  <th>Detail of the Work</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Quality Lab</td>
                  <td>
                    Construction of additional hall and store in the existing
                    site office
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Fire station</td>
                  <td>Construction of Quality Control Lab at Dogarthang</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Nersery</td>
                  <td>Construction of Caretaker quarter at Nursery, Bajo</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Curing Shed</td>
                  <td>
                    Construction of curing shed for QC wing and other Misc.
                    works at Dogarthang complex
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Site Office</td>
                  <td>Construction of site office project colony of PHEP-II</td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Quality Control Lab</td>
                  <td>
                    Construction of Approach Road, Bench Development and Quality
                    Control Lab
                  </td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Transit Camp</td>
                  <td>
                    Construction of Transit Camp for E&M Workshop at Dogarthang
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Central Store</td>
                  <td>
                    Construction of Central Store building for E & M wing at
                    Dogarthang
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Security Check Post</td>
                  <td>
                    Security Check post and Bus shed for project colony of
                    PHPA-II at Pheytakha
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Golden Mahseer Hatchery(P-1)</td>
                  <td>
                    Construction of Golden Mahseer Hatchery and Conservation
                    facility at Harachu.(P-I)
                  </td>
                </tr>
                <tr>
                  <td>11</td>
                  <td>Fire Station</td>
                  <td>
                    Construction of fire station with allied works for project
                    colony of PHPA-II at Pheytakha
                  </td>
                </tr>
                <tr>
                  <td>12</td>
                  <td>Primary School</td>
                  <td>
                    Construction of Primary School building for PHPA-II colony
                    at Pheytakha
                  </td>
                </tr>
                <tr>
                  <td>13</td>
                  <td>Club & Commercial</td>
                  <td>
                    Construction Officers Club and Commercial Complex for
                    Project Colony of PHPA-II at Pheytakha.(NR Package-I)
                  </td>
                </tr>
                <tr>
                  <td>14</td>
                  <td>Golden Mahseer Hatchery(P2)</td>
                  <td>
                    Construction of Golden Mahseer Hatchery and Conservation
                    facility at Harachu.(P-II)
                  </td>
                </tr>
                <tr>
                  <td>15</td>
                  <td>White Bellied Heron</td>
                  <td>
                    White-Bellied Heron (WBH) Conservation Facility at
                    Chanchey,Tsirang
                  </td>
                </tr>
                <tr>
                  <td>16</td>
                  <td>MPH</td>
                  <td>
                    Construction of MPH, Principal's and Caretakers Quarter for
                    Primary School at PHPA-II colony
                  </td>
                </tr>
                <tr>
                  <td>17</td>
                  <td>Neykhang</td>
                  <td>
                    Construction of MPH, Principal's and Caretakers Quarter for
                    Primary School at PHPA-II colony
                  </td>
                </tr>
                <tr>
                  <td>18</td>
                  <td>Statues</td>
                  <td>Sculpture of various statues for Neykhang at Kamichhu</td>
                </tr>
                <tr>
                  <td>19</td>
                  <td>Statues</td>
                  <td>Sculpture of various statues for Neykhang at Kamichhu</td>
                </tr>
                <tr>
                  <td>20</td>
                  <td>Depri</td>
                  <td>
                    Mural Painting(Depri),Gold Gilding of Statue faces and
                    Bhutanese painting on Timber structure for Neykhang at
                    Kamichhu
                  </td>
                </tr>
              </tbody>
            </table>
          </section>

          {/* Roads and Bridges */}
          <section className="section">
            <h2 className="section-title">III. Roads and Bridges</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Sl. No.</th>
                  <th>Name of the Work</th>
                  <th>Detail of the Work</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Bailley Bridge</td>
                  <td>Construction of bridge for project colony</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Road</td>
                  <td>
                    Strengthening and recarpeting of Wangdue-Taksha highway from
                    RD 23.90 km to RD 29.40 km(Package I)
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Road</td>
                  <td>
                    Strengthening and recarpeting of Wangdue-Taksha highway from
                    RD 29.40 km to RD 35.00 km (Package II)
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>Colony Road</td>
                  <td>
                    Construction of approach road on upstream side (1000m) in
                    Project Colony of PHEP-II at Pheytakha
                  </td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>Crash Barrier</td>
                  <td>
                    Metal Crash Barriers along Wangdue-Taksha PNH from RD 24.4km
                    to RD 35.00 km
                  </td>
                </tr>
                <tr>
                  <td>6</td>
                  <td>Road Maintenance</td>
                  <td>Routine maintenance of Road</td>
                </tr>
                <tr>
                  <td>7</td>
                  <td>Nursery Road</td>
                  <td>
                    Maintenance of Existing Approach road to Project Nursery
                  </td>
                </tr>
                <tr>
                  <td>8</td>
                  <td>Black topping of colony internal road</td>
                  <td>
                    Construction of black topping of colony internal roads and
                    other allied works for PHPA-II at Pheytakha(M/s Lotus
                    const.)
                  </td>
                </tr>
                <tr>
                  <td>9</td>
                  <td>Open surface box drain</td>
                  <td>
                    Construction of Open Surface Box Drain and Boulder Trap from
                    ch.35.15km to ch.35.5km
                  </td>
                </tr>
                <tr>
                  <td>10</td>
                  <td>Black topping of flood affected</td>
                  <td>
                    Re-alignment and black topping of (flood affected PNH
                    stretch,Phelreychu) and other allied works
                  </td>
                </tr>
              </tbody>
            </table>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;
