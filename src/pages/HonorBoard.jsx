import React from "react";
import "../styles/Boards.css";
import HeroSection from "./HeroSection";
//import projectVideo from "../assets/videos/project-authority.mp4";

const sections = [
  {
    title: "Chairman",
    columns: ["Name", "Designation", "From", "To"],
    rows: [
      [
        "His Excellency Lyonpo Khandu Wangchuk",
        "Minister (Ministry of Economic Affairs)",
        "01.04.2008",
        "01.04.2013",
      ],
      [
        "His Excellency Lyonpo Norbu Wangchuk",
        "Minister (Ministry of Economic Affairs)",
        "27.07.2013",
        "06.04.2016",
      ],
      [
        "His Excellency Lyonpo Lekey Dorji",
        "Minister (Ministry of Economic Affairs)",
        "06.04.2016",
        "09.08.2018",
      ],
      [
        "His Excellency Lyonpo Loknath Sharma",
        "Minister (Ministry of Economic Affairs)",
        "07.11.2018",
        "31.09.2023",
      ],
      [
        "Dasho Karma Y Raydi",
        "Interim Advisor, Ministry of Energy & Natural Resource",
        "011.10.2023",
        "28.01.2024",
      ],
      [
        "His Excellency Lyonpo Gem Tshering",
        "Minister (Ministry of Energy & Natural Resources)",
        "28.01.2024",
        "-",
      ],
    ],
  },
  {
    title: "Managing Director",
    columns: ["Name", "Designation", "From", "To"],
    rows: [
      [
        "Mr. R.N Khazanchi (Druk Thugsey)",
        "Managing Director",
        "30.06.2010",
        "30.04.2018",
      ],
      ["Mr. Amresh Kumar", "Managing Director", "30.04.2018", "05.09.2021"],
      [
        "Mr. Naven Chander Bansal",
        "Managing Director",
        "06.09.2021",
        "11.02.2022",
      ],
      [
        "Mr. Rajesh Kumar Chandel",
        "Managing Director",
        "04.01.2022",
        "31.03.2025",
      ],
      [
        "Mr. Sanjay Kumar Yadav",
        "Managing Director",
        "31.03.2025",
        "28.05.2025",
      ],
      ["Mr. Prakash Chand Upadhyaya", "Managing Director", "28.05.2025", "-"],
    ],
  },
  {
    title: "Joint Managing Director",
    columns: ["Name", "Designation", "From", "To"],
    rows: [
      [
        "Dasho Phuntso Norbu",
        "Jt. Managing Director",
        "30.06.2010",
        "25.09.2016",
      ],
      [
        "Mr. Dorji Pavo Phuntshok",
        "Jt. Managing Director",
        "09.09.2016",
        "11.04.2019",
      ],
      [
        "Mr. Thinley Dorji",
        "Jt. Managing Director",
        "11.03.2019",
        "31.06.2025",
      ],
      ["Mr. Rinzin Gyeltshen", "Jt. Managing Director", "11.06.2025", "-"],
    ],
  },
  {
    title: "Director (Technical)",
    columns: ["Name", "Designation", "From", "To"],
    rows: [
      ["Mr. Y.K Sharma", "Director (Technical)", "29.12.2010", "28.12.2017"],
      ["Mr. R.P Sharma", "Director (Technical)", "29.12.2017", "05.04.2019"],
      ["Mr. R.K Chaudhary", "Director (Technical)", "05.04.2019", "1011.2022"],
      ["Mr. Ajay Kumar", "Director (Technical)", "23.11.2022", "-"],
    ],
  },
  {
    title: "Director (Finance)",
    columns: ["Name", "Designation", "From", "To"],
    rows: [
      ["Mr. V.K Choubey", "Director (Finance)", "01.04.2009", "30.09.2014"],
      [
        "Mr. Sandeep Tarachand Uke",
        "Director (Finance)",
        "15.12.2014",
        "29.10.2015",
      ],
      [
        "Mr. Praveen Nandwana",
        "Director (Finance)",
        "30.10.2016",
        "28.05.2017",
      ],
      [
        "Mr. Pranav Kumar Mallick",
        "Director (Finance)",
        "29.05.2017",
        "01.12.2017",
      ],
      ["Mr. Bhupal Nanda", "Director (Finance)", "01.12.2017", "28.08.2020"],
      ["Mr. Niranjan Kumar", "Director (Finance)", "29.08.2020", "31.12.2024"],
      [
        "Mr. Ram Darash Chouhan",
        "Director (Finance)",
        "31.12.2024",
        "09.05.2025",
      ],
      ["Mr. Sakesh Prasad Singh", "Director (Finance)", "09.05.2025", "-"],
    ],
  },
];

const HonorBoard = () => (
  <div className="board-page">
    <HeroSection title="Honor Board" />
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

export default HonorBoard;
