import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import logo from "../assets/images/p2logo.png";

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const getNavbarColor = () => {
    return isHome ? "transparent" : "#27ae60";
  };

  return (
    <nav
      className={`navbar ${
        isHome ? "navbar-home" : "navbar-default compact-navbar"
      }`}
      style={{ backgroundColor: getNavbarColor() }}
    >
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="nav-links">
        <div className="nav-item">
          <Link to="/">ABOUT</Link>
          <div className="dropdown-menu">
            <div className="nav-sub-item">
              <Link to="/">About us</Link>
              <div className="sub-dropdown-menu">
                <Link to="/about/authority">Authority</Link>
                <Link to="/about/honor_board">Honor Board</Link>
                <Link to="/about/overview">Overview</Link>
                <Link to="/about/salient_feature">Salient Feature</Link>
                <Link to="/about/consultants">Consultants</Link>
                <Link to="/about/contact_us">Contact Us</Link>
              </div>
            </div>
            <Link to="/about/environment">Environment</Link>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/">SERVICES</Link>
          <div className="dropdown-menu">
            <div className="nav-sub-item">
              <Link to="/services/main_packages">Main Packages</Link>
              <div className="sub-dropdown-menu">
                <Link to="/main_packages/c-i_dam">C-I DAM</Link>
                <Link to="/main_packages/c-ii_hrt">C-II HRT</Link>
                <Link to="/main_packages/c-iii_ph">C-III Power House</Link>
                <Link to="/main_packages/electro_mechanical">
                  Electro Mechanical
                </Link>
                <Link to="/main_packages/infrastructure">Infrastructure</Link>
                <Link to="/main_packages/physical_progress">
                  Physical Progress
                </Link>
              </div>
            </div>
            <div className="nav-sub-item">
              <Link to="/services/units">Units</Link>
              <div className="sub-dropdown-menu">
                <Link to="/services/units/unit_1">Unit - 1</Link>
                <Link to="/services/units/unit_2">Unit - 2</Link>
                <Link to="/services/units/unit_3">Unit - 3</Link>
                <Link to="/services/units/unit_4">Unit - 4</Link>
                <Link to="/services/units/unit_5">Unit - 5</Link>
                <Link to="/services/units/unit_6">Unit - 6</Link>
              </div>
            </div>
            <Link to="/services/tender">Tender</Link>
          </div>
        </div>
        <div className="nav-item">
          <Link to="/">CAREERS</Link>
          <div className="dropdown-menu">
            <Link to="/careers/vacancy">Vacacny</Link>
            <div className="nav-sub-item open-left">
              <Link to="/careers">Employees</Link>
              <div className="sub-dropdown-menu">
                <Link to="/">Primavera P6</Link>
                <Link to="/">SAP Fiori Login</Link>
                <Link to="/">WEBMAIL LOGIN</Link>
                <Link to="/">More...</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
