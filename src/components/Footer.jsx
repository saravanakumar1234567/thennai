import React from "react";
import "../components/Footer.css";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* Logo and About Section */}
        

        {/* Quick Links Section */}
        <div className="footer-section footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
          </ul>
        </div>

        {/* Contact Info Section */}
        <div className="footer-section footer-contact">
          <h3>Contact Us</h3>
          <p>Email: info@thennai.co.in</p>
          <p>Phone: +91 86088 25725 
          </p>
          <p>Address: THENNAI TECH PRIVATE LIMITED 
85, Palaniappan street, 
Pollachi, Coimbatore -642001 </p>
        </div>

        {/* Newsletter Subscription Section */}
        <div className="footer-section footer-newsletter">
          <h3>Subscribe to our Newsletter</h3>
          <form className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Thennai. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
