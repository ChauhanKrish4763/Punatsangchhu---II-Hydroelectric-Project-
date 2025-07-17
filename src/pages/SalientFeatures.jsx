import React from "react";
import "../styles/Boards.css";
import HeroSection from "./HeroSection";
//import projectVideo from "../assets/videos/project-authority.mp4";

const salientFeatures = [
  ["Diversion Tunnel", "12 m diameter, 888 m length"],
  ["Concrete Dam", "91 m height, 214 m length"],
  ["Power Intake Tunnels", "4 Nos, 6.4 m diameter, 1.93 km length"],
  ["4 Desilting Chambers", "420 m length, 19 m width & 24.7 m depth"],
  ["Headrace Tunnel", "11 m diameter, 8.58 km length"],
  ["Surge Shaft", "31 m diameter, 137 m height"],
  ["3 Pressure Shafts", "5.5 m diameter, 997 m length"],
  ["Power House Cavern", "236 m length, 23 m width & 51 m height"],
  ["Transformer Cavern", "215.4 m length, 14 m width & 26.5 m height"],
  ["Down Stream Surge Gallery", "314 m length, 18 m width and 58.5 m depth"],
  ["Tailrace Tunnel", "11 m diameter, 3k m length"],
  ["Generating Plant", "6 Units of 170 MW each"],
  ["Transmission System", "1 Double Circuit 400 kV of 65 km length"],
  ["", "1 Double Circuit 400 kV LILO of PHEP-I"],
  ["Net Head", "241 m"],
  ["Design Discharge", "466.02 m³/s"],
  ["Annual Generation", "4,357 GWh"],
];

const sections = [
  {
    title: "Salient Features",
    columns: ["Feature", "Specification"],
    rows: salientFeatures,
  },
];

const SalientFeatures = () => (
  <div className="board-page">
    <HeroSection title="Salient Features" />
    <div className="board-tables">
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

export default SalientFeatures;
