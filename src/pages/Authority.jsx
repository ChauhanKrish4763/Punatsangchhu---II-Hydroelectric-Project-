import "../styles/Authority.css";
import HeroSection from "./HeroSection";
import { useState, useRef, useEffect } from "react";
import chairmanImg from "../assets/images/chairman_img.png"; // Import the image

// Member data with images and descriptions
const memberData = {
  "Hon'ble Lyonpo Gem Tshering": {
    image: chairmanImg, // Use the imported image variable
    description: "Chairman and Minister of Energy and Natural Resources, leading Bhutan's sustainable energy initiatives."
  },
  "Dasho Karma Tshering": {
    image: chairmanImg, // Use the imported image variable
    description: "Secretary at Ministry of Energy and Natural Resources, overseeing policy implementation."
  },
  "Dasho Leki Wangmo": {
    image: chairmanImg, // Use the imported image variable
    description: "Secretary at Ministry of Finance, managing financial aspects of hydroelectric projects."
  },
  "Dasho Tashi Wangmo": {
    image: chairmanImg, // Use the imported image variable
    description: "Secretary at Ministry of Industry, Commerce & Employment, coordinating industrial development."
  },
  "Dasho Phub Rinzin": {
    image: chairmanImg, // Use the imported image variable
    description: "Dzongdag of Wangduephodrang Dzongkhag Administration, overseeing local governance."
  },
  "Shri Anurag Agarwal": {
    image: chairmanImg, // Use the imported image variable
    description: "Special Secretary & Financial Advisor at Ministry of External Affairs, India."
  },
  "Shri Munu Mahawar": {
    image: chairmanImg, // Use the imported image variable
    description: "Additional Secretary (North) at Ministry of External Affairs, India."
  },
  "Shri Mohammad Afzal": {
    image: chairmanImg, // Use the imported image variable
    description: "Joint Secretary (Hydro) at Ministry of Power, India."
  },
  "Shri Rajesh Kumar Chandel": {
    image: chairmanImg, // Use the imported image variable
    description: "Secretary, MD at Punatsangchhu-II Hydroelectric Project Authority (PHPA-II)."
  }
};

const Authority = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isExiting, setIsExiting] = useState(false);
  const [memberDetailsTop, setMemberDetailsTop] = useState(0);
  const contentWrapperRef = useRef(null);
  const firstSubSectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (firstSubSectionRef.current) {
        const rect = firstSubSectionRef.current.getBoundingClientRect();
        const minTop = Math.max(rect.top, 40);
        setMemberDetailsTop(minTop);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMemberClick = (memberName) => {
    if (selectedMember && selectedMember.name === memberName) {
      handleClose();
    } else {
      setIsExiting(false);
      setSelectedMember(memberData[memberName] ? {
        name: memberName,
        ...memberData[memberName]
      } : null);
    }
  };

  const handleClose = () => {
    setIsExiting(true);
    setTimeout(() => {
      setSelectedMember(null);
      setIsExiting(false);
    }, 300);
  };

  return (
    <>
      {/* Hero Section */}
      <HeroSection title="Project Authority" />

      {/* Main Content */}
      <main className="project-authority-page">
        <div className="content-wrapper" ref={contentWrapperRef}>
          <div className="members-list">
            <section>
              <h2 className="section-heading">MEMBERS</h2>
              <div className="sub-section" ref={firstSubSectionRef}>
                <h3 className="sub-heading">Royal Government of Bhutan</h3>
                <ul className="custom-list">
                  <li onClick={() => handleMemberClick("Hon'ble Lyonpo Gem Tshering")}>
                    Hon'ble Lyonpo Gem Tshering – Chairman, Minister, Ministry of
                    Energy and Natural Resources
                  </li>
                  <li onClick={() => handleMemberClick("Dasho Karma Tshering")}>
                    Dasho Karma Tshering – Secretary, Ministry of Energy and Natural
                    Resources
                  </li>
                  <li onClick={() => handleMemberClick("Dasho Leki Wangmo")}>Dasho Leki Wangmo – Secretary, Ministry of Finance</li>
                  <li onClick={() => handleMemberClick("Dasho Tashi Wangmo")}>
                    Dasho Tashi Wangmo – Secretary, Ministry of Industry, Commerce &
                    Employment
                  </li>
                  <li onClick={() => handleMemberClick("Dasho Phub Rinzin")}>
                    Dasho Phub Rinzin – Dzongdag, Dzongkhag Administration,
                    Wangduephodrang
                  </li>
                </ul>

                <h3 className="sub-heading">Government of India</h3>
                <ul className="custom-list">
                  <li onClick={() => handleMemberClick("Shri Anurag Agarwal")}>
                    Shri Anurag Agarwal – Special Secretary & Financial Advisor,
                    Ministry of External Affairs
                  </li>
                  <li onClick={() => handleMemberClick("Shri Munu Mahawar")}>
                    Shri Munu Mahawar – Additional Secretary (North), Ministry of
                    External Affairs
                  </li>
                  <li onClick={() => handleMemberClick("Shri Mohammad Afzal")}>
                    Shri Mohammad Afzal – Joint Secretary (Hydro), Ministry of Power
                  </li>
                  <li onClick={() => handleMemberClick("Shri Rajesh Kumar Chandel")}>
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
          </div>
          {selectedMember && (
            <div 
              className={`member-details ${isExiting ? 'exit' : ''}`}
              style={{ top: `${memberDetailsTop}px` }}
            >
              <div className="member-card" onClick={handleClose}>
                <img 
                  src={selectedMember.image || 'https://via.placeholder.com/400x300?text=Photo+Not+Available'} 
                  alt={selectedMember.name} 
                  className="member-image" 
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x300?text=Photo+Not+Available';
                  }}
                />
                <h3>{selectedMember.name}</h3>
                <p>{selectedMember.description}</p>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default Authority;
