import React from "react";
import "../styles/UnitDetails.css";

const units = [
  {
    name: "Unit 1",
    designCapacity: "300 MW",
    launchDate: "Jan 2024",
    cod: "Feb 2024",
    generatedMW: "1200 MW",
  },
  {
    name: "Unit 2",
    designCapacity: "300 MW",
    launchDate: "Feb 2024",
    cod: "Mar 2024",
    generatedMW: "1100 MW",
  },
  {
    name: "Unit 3",
    designCapacity: "140 MW",
    launchDate: "Mar 2024",
    cod: "Apr 2024",
    generatedMW: "900 MW",
  },
  {
    name: "Unit 4",
    designCapacity: "140 MW",
    launchDate: "Apr 2024",
    cod: "May 2024",
    generatedMW: "--",
  },
  {
    name: "Unit 5",
    designCapacity: "70 MW",
    launchDate: "May 2024",
    cod: "--",
    generatedMW: "--",
  },
  {
    name: "Unit 6",
    designCapacity: "70 MW",
    launchDate: "Jun 2024",
    cod: "--",
    generatedMW: "--",
  },
];

function UnitDetails({ selected: selectedProp }) {
  const [selected, setSelected] = React.useState(selectedProp ?? 0);

  return (
    <div className="unit-details-container">
      <div className="unit-dropdown">
        <select
          value={selected}
          onChange={(e) => setSelected(Number(e.target.value))}
        >
          {units.map((unit, idx) => (
            <option key={unit.name} value={idx}>
              {unit.name}
            </option>
          ))}
        </select>
      </div>
      <div className="unit-details-card">
        <h2>{units[selected].name}</h2>
        <div className="unit-detail-row">
          <span>Design Capacity:</span>{" "}
          <span>{units[selected].designCapacity}</span>
        </div>
        <div className="unit-detail-row">
          <span>Launched Date:</span> <span>{units[selected].launchDate}</span>
        </div>
        <div className="unit-detail-row">
          <span>COD (Commercial Operation Date):</span>{" "}
          <span>{units[selected].cod}</span>
        </div>
        <div className="unit-detail-row">
          <span>Generated MW till date:</span>{" "}
          <span>{units[selected].generatedMW}</span>
        </div>
      </div>
    </div>
  );
}

export default UnitDetails;
