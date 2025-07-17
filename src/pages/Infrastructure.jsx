import React from "react";
import "../styles/Boards.css";
import HeroSection from "./HeroSection";
//import projectVideo from "../assets/videos/project-authority.mp4";

const summaryTable = {
  columns: [
    "Total No. of Local Contractors, Completed Works.",
    "Total No. of Local Contractors, On going works.",
    "Total",
  ],
  rows: [["126", "01", "127"]],
};

const residentialComplex = {
  title: "I. Residential Complex",
  columns: ["Sl.No.", "Name of Work", "Detail of the Work"],
  rows: [
    [
      "1",
      "Package #R-I",
      "Construction of D-type (2 Units x 1 Block), E-type (4 Units x 2 Blocks) & F-type (4 Units x 6 Blocks)",
    ],
    [
      "2",
      "Package #R-II",
      "Construction of G-Type (6 Units x 8 Blocks)",
    ],
    [
      "3",
      "Package #R-III",
      "Construction of G-Type (6 units x 5 Blocks) & H-Type (6 Units x 7 Blocks)",
    ],
    [
      "4",
      "Package #R-IV",
      "Construction of H-Type (6 Units x 9 Blocks)",
    ],
  ],
};

const nonResidentialComplex = {
  title: "II. Non-residential Complex",
  columns: ["Sl. No.", "Name of the Work", "Detail of the Work"],
  rows: [
    [
      "1.",
      "NR Package-I",
      "Construction of Officers Club & Commercial Complex for Project Colony of PHEP-II.",
    ],
    [
      "2.",
      "Fire station",
      "Construction of fire station with allied works for Project colony of PHPA-II",
    ],
    [
      "3.",
      "Primary School",
      "Construction of Primary School building for PHPA-II Colony.",
    ],
    [
      "4.",
      "WTP",
      "Construction of Water Treatment Plant for Project Colony of PHPA-II",
    ],
    [
      "5.",
      "Auto Workshop",
      "Construction of Temporary Auto workshop for PHPA-II",
    ],
    [
      "6.",
      "Quality Control Lab",
      "Construction of Approach Road, Bench Development and Quality Control Lab.",
    ],
    [
      "7.",
      "Transit Camp",
      "Construction of Transit Camp for E&M Workshop.",
    ],
    [
      "8.",
      "Police Station for RBP",
      "Construction of Police Station for Royal Bhutan Police.",
    ],
    [
      "9.",
      "RNR Staff Quarters",
      "Construction of double storey (4 Units) RNR Staff quarters.",
    ],
  ],
};

const Infrastructure = () => (
  <div className="board-page">
    <HeroSection title="Infrastructure" />
    <div className="board-tables">
      <div style={{ marginBottom: "1.5rem", color: "#374151", fontSize: "1.08rem" }}>
        Local contractors, involved in both civil and electrical works as of March 30, 2023:
      </div>
      <div className="section" style={{ marginBottom: "2.5rem" }}>
        <table className="table" style={{ marginBottom: 0 }}>
          <thead>
            <tr>
              {summaryTable.columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {summaryTable.rows.map((row, j) => (
              <tr key={j}>
                {row.map((cell, k) => (
                  <td key={k} style={{ fontWeight: "bold", textAlign: "center" }}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="section-title">{residentialComplex.title}</h2>
        <table className="table">
          <thead>
            <tr>
              {residentialComplex.columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {residentialComplex.rows.map((row, j) => (
              <tr key={j}>
                {row.map((cell, k) => (
                  <td key={k}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="section">
        <h2 className="section-title">{nonResidentialComplex.title}</h2>
        <table className="table">
          <thead>
            <tr>
              {nonResidentialComplex.columns.map((col, i) => (
                <th key={i}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {nonResidentialComplex.rows.map((row, j) => (
              <tr key={j}>
                {row.map((cell, k) => (
                  <td key={k}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default Infrastructure;
