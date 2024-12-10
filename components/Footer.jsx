import React from "react";
import "../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* லோகோ மற்றும் பற்றி பகுதி */}
        

        {/* விரைவு இணைப்புகள் பகுதி */}
        <div className="footer-section footer-links">
          <h3>விரைவு இணைப்புகள்</h3>
          <ul>
            <li><a href="#about">எங்களைப் பற்றி</a></li>
            <li><a href="#services">சேவைகள்</a></li>
            <li><a href="#contact">தொடர்பு</a></li>
            <li><a href="#careers">பணியிடம்</a></li>
            <li><a href="#blog">பிளாக்</a></li>
          </ul>
        </div>

        {/* தொடர்பு தகவல் பகுதி */}
        <div className="footer-section footer-contact">
          <h3>எங்களுடன் தொடர்பு கொள்ளவும்</h3>
          <p>மின்னஞ்சல்: info@thennai.co.in</p>
          <p>தொலைபேசி: +91 86088 25725</p>
          <p>முகவரி: THENNAI TECH PRIVATE LIMITED
85, பாலணியப்பன் தெரு,
பொள்ளாட்சி, கோயம்புத்தூர் -642001</p>
        </div>

        {/* செய்திகள் சந்தா பகுதி */}
        <div className="footer-section footer-newsletter">
          <h3>எங்கள் செய்தி பத்திரிகைக்கு சந்தா செய்யவும்</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="உங்கள் மின்னஞ்சலை உள்ளிடவும்"
              required
            />
            <button type="submit">சந்தா செய்யவும்</button>
          </form>
        </div>
      </div>

      {/* அடிக்கடி பகுதி */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Thennai. எல்லா உரிமைகளும் பாதுகாக்கபட்டுள்ளன.</p>
      </div>
    </footer>
  );
};

export default Footer;
