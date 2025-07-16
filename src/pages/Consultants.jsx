import React from "react";
import "../styles/Boards.css";
import HeroSection from "./HeroSection";
import projectVideo from "../assets/videos/project-authority.mp4";

const sections = [
  {
    title: "WAPCOS LIMITED",
    columns: ["Office", "Location", "Key officers"],
    rows: [
      ["Head Office", "New Delhi", "Executive Director (Hydropower)"],
      ["Branch Office", "Wangduephodrang", "Project Director"],
      ["Branch Office", "Wangduephodrang", "Chief Engineer (Designs)"],
      ["Branch Office", "Wangduephodrang", "Project Manager/ Manager Admn"],
      ["Branch Office", "Phuntsholing", "Project Manager"],
    ],
  },
  {
    title: "Their Associates",
    columns: ["Sl. No.", "Organization/Department", "Ministry"],
    rows: [
      [
        "1",
        "Central Water Commission (CWC)",
        "Ministry of Water Resources, River Development & Ganga Rejuvenation",
      ],
      [
        "2",
        "Central Electricity Authority (CEA)",
        "Ministry of Power",
      ],
      [
        "3",
        "Geological Survey of India (GSI)",
        "Ministry of Mines, River Development & Ganga Rejuvenation",
      ],
      [
        "4",
        "Central Water & Power Research Station (CWRPS)",
        "Ministry of Water Resources, River Development & Ganga Rejuvenation",
      ],
      [
        "5",
        "Central Soil & Materials Research Station (CSMRS)",
        "Ministry of Water Resources, River Development & Ganga Rejuvenation",
      ],
    ],
  },
];

const introText = (
  <p style={{ marginBottom: "2rem", color: "#374151", fontSize: "1.08rem" }}>
    <strong>WAPCOS Ltd</strong>, Ministry of Water Resources, Government of India is design and engineering consultant to the Authority. The expertise of premier/apex organizations of Government of India. Namely, Central Electricity Authority, Central Water Commission, Central Water & Power Research Station, Central Soil & Materials Research Station, Geological Survey of India is made available to the project through WAPCOS Ltd.
  </p>
);

const Consultants = () => (
  <div className="board-page">
    <HeroSection videoSrc={projectVideo} title="Project Consultants" />
    <div className="board-tables">
      {introText}
      {sections.map((section, idx) => (
        <div className="section" key={idx}>
          <h2 className="section-title">{section.title}</h2>
          <table className="table">
            <thead>
              <tr>
                {section.columns.map((col, i) => (
                  <th key={i}>{col}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {section.rows.map((row, j) => (
                <tr key={j}>
                  {row.map((cell, k) => (
                    <td key={k}>{cell}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  </div>
);

export default Consultants;
