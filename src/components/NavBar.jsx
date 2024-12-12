import React, { useState } from 'react';
import './NavBar.css';
import logo from '../assets/logo.png' ;

const NavBar = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  

  return (
    <div>
      {/* Navbar */}
      <nav className="navbar">
        {/* Left Section: Logo */}
        <div className="navbar-logo">
          <img
            src={logo} // Replace with the actual logo path
            alt="Logo"
            className="logo-image"
          />
        <span className="logo-text"></span>
        </div>

        {/* Middle Section: Navigation Links for Larger Screens */}
        <div className="nav-links">
          <a href="/farming-community">Home</a>
          <a href="/products">About Us</a>
          <a href="/products">Products</a>
          <a href="/farming-guide">Farming Guide</a>
          <a href="/live-prices">Live Prices</a>
          
        </div>

        {/* Right Section: Contact Us Button */}
        <div className="contact-btn">
          <a href="/contact">Contact Us</a>
        </div>

        {/* Toggle Button for Mobile */}
        <div className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <ul className="sidebar-links">
          <li>
            <a href="/farming-community">Farming Community</a>
          </li>
          <li>
            <a href="/farming-guide">Farming Guide</a>
          </li>
          <li>
            <a href="/live-prices">Live Prices</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/contact">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
