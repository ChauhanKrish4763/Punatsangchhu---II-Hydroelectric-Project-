import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import ReadMore from "./pages/ReadMore";
import Navbar from "./pages/Navbar";
import Management from "./pages/Management";
import Authority from "./pages/Authority.jsx";
import Overview from "./pages/Overview.jsx";
import PhysicalProgress from "./pages/PhysicalProgress.jsx";
import HonorBoard from "./pages/HonorBoard.jsx";
import SalientFeatures from "./pages/SalientFeatures.jsx";
import Consultants from "./pages/Consultants.jsx";
import Infrastructure from "./pages/Infrastructure.jsx";
import Tender from "./pages/Tenders.jsx";
import Environment from "./pages/Environment.jsx";
import UnitDetails from "./pages/UnitDetails";
import C1Dam from "./pages/C1Dam.jsx";
import C2HRT from "./pages/C2HRT.jsx";
import C3PowerHouse from "./pages/C3PowerHouse.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/read_more" element={<ReadMore />} />
        <Route path="/chairman" element={<Management />} />
        <Route path="/managing_director" element={<Management />} />
        <Route path="/joint_managing_director" element={<Management />} />
        <Route path="/director_technical" element={<Management />} />
        <Route path="/director_finance" element={<Management />} />
        <Route path="/about/authority" element={<Authority />} />
        <Route path="/about/overview" element={<Overview />} />
        <Route
          path="/main_packages/physical_progress"
          element={<PhysicalProgress />}
        />
        <Route path="/about/honor_board" element={<HonorBoard />} />
        <Route path="/about/salient_feature" element={<SalientFeatures />} />
        <Route path="/about/consultants" element={<Consultants />} />
        <Route
          path="/main_packages/infrastructure"
          element={<Infrastructure />}
        />
        <Route path="/services/tender" element={<Tender />} />
        <Route path="/about/environment" element={<Environment />} />
        <Route path="/main_packages/c-i_dam" element={<C1Dam />} />
        <Route path="/main_packages/c-ii_hrt" element={<C2HRT />} />
        <Route path="/main_packages/c-iii_ph" element={<C3PowerHouse />} />
        <Route
          path="/services/units/unit_1"
          element={<UnitDetails selected={0} />}
        />
        <Route
          path="/services/units/unit_2"
          element={<UnitDetails selected={1} />}
        />
        <Route
          path="/services/units/unit_3"
          element={<UnitDetails selected={2} />}
        />
        <Route
          path="/services/units/unit_4"
          element={<UnitDetails selected={3} />}
        />
        <Route
          path="/services/units/unit_5"
          element={<UnitDetails selected={4} />}
        />
        <Route
          path="/services/units/unit_6"
          element={<UnitDetails selected={5} />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

/*

tasks:
1. align items to the left in dropdown menu
2. units section below main packages and tender
3. environment section
4. hover image in authority page 
UNIT-I 
short page details as follows on each UNITs: 
Design Capacity : launched dated / COD Commercial Operation date : 
Generated MW till date : 
Some Pictures :


UNIT-II
UNIT-III
UNIT-IV   
till 
UNIT- VI

*/
