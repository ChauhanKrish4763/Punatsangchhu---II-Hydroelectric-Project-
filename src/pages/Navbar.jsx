import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/images/p2logo.png';

const Navbar = () => {
    const location = useLocation();
    
    const getNavbarColor = () => {
        switch (location.pathname) {
            case '/':
                return 'transparent';
            case '/read_more':
                return '#27ae60';
            default:
                return '#ffffff';
        }
    };

    return (
        <nav 
            className="navbar" 
            style={{ backgroundColor: getNavbarColor() }}
        >
            <div className="logo-container">
                <img src={logo} alt="Logo" className="logo" />
                <span className="project-title">Punatsangchhu - II Hydroelectric Project Authority</span>
            </div>
            <div className="nav-links">
                <Link to="/">HOME</Link>
                <a href="#about">ABOUT</a>
                <a href="#media">EMPLOYEES</a>
            </div>
        </nav>
    );
}

export default Navbar;