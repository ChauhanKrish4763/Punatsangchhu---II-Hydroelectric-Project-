import "../styles/Authority.css";
//import projectVideo from "../assets/videos/project-authority.mp4";
import HeroSection from "./HeroSection";

const Authority = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection title="Project Authority" />

      {/* Main Content */}
      <main className="project-authority-page">
        <section>
          <h2 className="section-heading">MEMBERS</h2>
          <div className="sub-section">
            <h3 className="sub-heading">Royal Government of Bhutan</h3>
            <ul className="custom-list">
              <li>
                Hon'ble Lyonpo Gem Tshering – Chairman, Minister, Ministry of
                Energy and Natural Resources
              </li>
              <li>
                Dasho Karma Tshering – Secretary, Ministry of Energy and Natural
                Resources
              </li>
              <li>Dasho Leki Wangmo – Secretary, Ministry of Finance</li>
              <li>
                Dasho Tashi Wangmo – Secretary, Ministry of Industry, Commerce &
                Employment
              </li>
              <li>
                Dasho Phub Rinzin – Dzongdag, Dzongkhag Administration,
                Wangduephodrang
              </li>
            </ul>

            <h3 className="sub-heading">Government of India</h3>
            <ul className="custom-list">
              <li>
                Shri Anurag Agarwal – Special Secretary & Financial Advisor,
                Ministry of External Affairs
              </li>
              <li>
                Shri Munu Mahawar – Additional Secretary (North), Ministry of
                External Affairs
              </li>
              <li>
                Shri Mohammad Afzal – Joint Secretary (Hydro), Ministry of Power
              </li>
              <li>
                Shri Rajesh Kumar Chandel – Secretary, MD, Punatsangchhu-II
                Hydroelectric Project Authority (PHPA-II)
              </li>
            </ul>
            <h3 className="sub-heading">Permanent Invitees</h3>
            <ul className="custom-list">
              <li>Ambassador of India to Bhutan</li>
              <li>Ambassador of Bhutan to India</li>
              <li>
                Member (D&R), Central Water Commission, Government of India
              </li>
              <li>
                Member (Hydro), Central Electricity Authority, Government of
                India
              </li>
              <li>Managing Director, Druk Green Power Corporation</li>
              <li>Chief Executive Officer, Bhutan Power Corporation</li>
              <li>Director General, Department of Energy</li>
              <li>Under Secretary (Bhutan), MEA, Government of India</li>
              <li>Jt. Managing Director, PHPA-II</li>
              <li>Director (Technical), PHPA-II</li>
              <li>Director (Finance), PHPA-II</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="section-heading">
            Technical Coordination Committee (TCC)
          </h2>
          <div className="sub-section">
            <ul className="custom-list">
              <li>Member (Hydro), CEA – Chairman</li>
              <li>Member (D&R), CWC – Co-Chairman</li>
              <li>CMD, WAPCOS – Convener</li>
              <li>DG, Department of Energy, Bhutan</li>
              <li>MD, DGPC</li>
              <li>MD, PHPA-II</li>
              <li>Jt. MD, PHPA-II</li>
              <li>Director (Technical), PHPA-II</li>
              <li>Engineer Officer to Hon'ble Chairman, PHPA-II</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="section-heading">The Management</h2>
          <div className="sub-section">
            <ul className="custom-list">
              <li>Managing Director</li>
              <li>Joint Managing Director</li>
              <li>Director (Technical)</li>
              <li>Director (Finance)</li>
            </ul>
          </div>
        </section>

        <section>
          <h2 className="section-heading">Consultants</h2>
          <div className="sub-section">
            <p className="paragraph">
              <strong>WAPCOS Limited</strong>, Ministry of Water Resources,
              Government of India
            </p>
            <p className="paragraph">
              <strong>Their Associates:</strong>
            </p>
            <ul className="custom-list">
              <li>Central Water Commission (CWC)</li>
              <li>Central Electricity Authority (CEA)</li>
              <li>Geological Survey of India (GSI)</li>
              <li>Central Water & Power Research Station (CWPS)</li>
              <li>Central Soil & Materials Research Station (CSMRS)</li>
            </ul>
          </div>
        </section>
      </main>
    </>
  );
};

export default Authority;