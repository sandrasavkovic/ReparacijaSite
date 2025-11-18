import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../photos/ReparacijaLogo.png";
const Navbar = () => {
    return (
        <nav className="navbar">
             <div className="nav-logo">
                <Link to="/">
                    <img src={Logo} alt="Logo" className="logo-image" />
                </Link>
            </div> 

            <ul className="nav-links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About us</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
