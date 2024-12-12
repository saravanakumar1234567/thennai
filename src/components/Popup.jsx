import React, { useState, useEffect } from "react";
import "./Popup.css";

const Popup = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check localStorage for the popup flag
    const hasSeenPopup = localStorage.getItem("hasSeenPopup");
    if (!hasSeenPopup) {
      setIsVisible(true); // Show popup if not previously seen
    }
  }, []);

  const handleLanguageClick = (language) => {
    setIsVisible(false);
    localStorage.setItem("hasSeenPopup", "true"); // Set the popup as seen
    // Navigate to the selected language page
    window.location.href = `/${language}`;
  };

  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-container animate-popup">
          <h2 className="popup-heading">Choose Your Language</h2>
          <div className="language-options">
            <button onClick={() => handleLanguageClick("/")}>English</button>
            <button onClick={() => handleLanguageClick("Homepagetamil")}>தமிழ்</button>
            <button onClick={() => handleLanguageClick("malayalam")}>മലയാളം</button>
            <button onClick={() => handleLanguageClick("telugu")}>తెలుగు</button>
          </div>
        </div>
      </div>
    )
  );
};

export default Popup;
