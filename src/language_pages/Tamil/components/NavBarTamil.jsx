import React, { useState } from 'react';
import './NavBar.css';
import logo from '../../../assets/logo.png' ;

const NavBarTamil = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  
    const toggleSidebar = () => {
      setSidebarOpen(!isSidebarOpen);
    };
  

  return (
    <div>
      {/* நாவ்பார் */}
      <nav className="navbar">
        {/* இடது பகுதி: லோகோ */}
        <div className="navbar-logo">
          <img
            src={logo} // உண்மையான லோகோ பாதையை இங்கு மாற்றவும்
            alt="Logo"
            className="logo-image"
          />
        <span className="logo-text"></span>
        </div>

        {/* நடுவண் பகுதி: பெரிய திரைகளுக்கான நாவிகேஷன் இணைப்புகள் */}
        <div className="nav-links">
          <a href="/farming-community">முகப்பு</a>
          <a href="/products">எங்களை பற்றி</a>
          <a href="/products">பொருட்கள்</a>
          <a href="/farming-guide">விவசாய வழிகாட்டி</a>
          <a href="/live-prices">செய்தி விலை</a>
          
        </div>

        {/* வலது பகுதி: எங்களை தொடர்பு கொள்ளும் பொத்தான் */}
        <div className="contact-btn">
          <a href="/contact">எங்களை தொடர்பு கொள்ள</a>
        </div>

        {/* மொபைலுக்கான சுவிட்ச் பொத்தான் */}
        <div className="toggle-btn" onClick={toggleSidebar}>
          ☰
        </div>
      </nav>

      {/* பக்கப் பட்டியல் */}
      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <button className="close-btn" onClick={toggleSidebar}>
          ✖
        </button>
        <ul className="sidebar-links">
          <li>
            <a href="/farming-community">விவசாய சமூகம்</a>
          </li>
          <li>
            <a href="/farming-guide">விவசாய வழிகாட்டி</a>
          </li>
          <li>
            <a href="/live-prices">செய்தி விலை</a>
          </li>
          <li>
            <a href="/products">பொருட்கள்</a>
          </li>
          <li>
            <a href="/contact">எங்களை தொடர்பு கொள்ள</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default NavBarTamil;
