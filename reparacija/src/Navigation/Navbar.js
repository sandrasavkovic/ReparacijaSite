import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Logo from "../photos/ReparacijaLogo.png";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if(window.innerWidth > 768) setMenuOpen(false); // zatvori meni ako je desktop
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="/">
          <img src={Logo} alt="Logo" className="logo-image" />
        </Link>
      </div>

      {isMobile ? (
        <>
          <button className="navbar-toggle" onClick={toggleMenu}>☰</button>
          {menuOpen && (
            <ul className="nav-links-mobile">
              <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
              <li><Link to="/about" onClick={toggleMenu}>About us</Link></li>
              <li><Link to="/contact" onClick={toggleMenu}>Contact</Link></li>
            </ul>
          )}
        </>
      ) : (
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About us</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
