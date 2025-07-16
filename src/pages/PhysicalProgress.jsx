import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import HeroSection from "./HeroSection";
import "../styles/PhysicalProgress.css";
import projectVideo from "../assets/videos/project-authority.mp4";

const data = [
  {
    month: "April",
    "C-1 DAM": 100,
    "C-2 HRT": 100,
    "C-III Power": 98.1,
    "E&M": 94.37,
    Transmission: 100,
    Total: 98.91,
  },
  {
    month: "May",
    "C-1 DAM": 100,
    "C-2 HRT": 98.25,
    "C-III Power": 0,
    "E&M": 95.18,
    Transmission: 100,
    Total: 99.06,
  },
];

const COLORS = {
  "C-1 DAM": "#1f9ece", // Muted Slate Blue
  "C-2 HRT": "#01dda3", // Desaturated Teal Green
  "C-III Power": "#cd1011", // Dusty Olive Green
  "E&M": "#cc731a", // Faded Indigo Blue
  Transmission: "#006218", // Smoky Pine Green
  Total: "#484948", // Desaturated Steel Blue
};

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
        <div className="tooltip-header">{label}</div>
        {payload.map((entry, idx) => (
          <div key={idx} className="tooltip-row">
            <span
              className="tooltip-dot"
              style={{ backgroundColor: entry.color }}
            />
            <span className="tooltip-name">{entry.name}</span>
            <span className="tooltip-value">{entry.value}%</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

const PhysicalProgress = () => (
  <div className="physical-progress-enhanced">
    <HeroSection videoSrc={projectVideo} title="Physical Progress" />

    {/* Physical Progress Table as of May 31, 2025 */}
    <section className="progress-box progress-table-section">
      <h4 className="progress-table-title">
        Physical Progress as of May 31, 2025
      </h4>
      <table className="progress-table">
        <thead>
          <tr>
            <th>Item</th>
            <th>Status (%)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>C-I Dam</td>
            <td className="status-green">100</td>
          </tr>
          <tr>
            <td>C-II HRT (Head Race Tunnel)</td>
            <td className="status-green">100</td>
          </tr>
          <tr>
            <td>C-III Power House</td>
            <td className="status-orange">98.25</td>
          </tr>
          <tr>
            <td>E&M Works (Electr0-mechanical)</td>
            <td className="status-orange">95.18</td>
          </tr>
          <tr>
            <td>Transmission</td>
            <td className="status-green">100.00</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th>TOTAL</th>
            <th className="status-blue">99.06</th>
          </tr>
        </tfoot>
      </table>
    </section>

    <section className="progress-box chart-section-enhanced">
      <div className="chart-header">
        <h4>Physical Progress of April & May, 2025</h4>
      </div>
      <div className="chart-wrapper-enhanced">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            layout="vertical"
            data={data}
            margin={{ top: 20, right: 40, left: 40, bottom: 20 }}
            barCategoryGap="20%"
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="number" domain={[0, 100]} tick={{ fontSize: 14 }} />
            <YAxis
              type="category"
              dataKey="month"
              tick={{ fontSize: 16, fontWeight: 500 }}
              width={80}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" iconType="circle" />
            {Object.keys(COLORS).map((key) => (
              <Bar key={key} dataKey={key} fill={COLORS[key]} maxBarSize={32} />
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  </div>
);

export default PhysicalProgress;
