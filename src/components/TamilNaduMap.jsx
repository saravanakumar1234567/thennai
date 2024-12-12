import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../components/TamilNaduMap.css";
import tamilNaduImage from "../assets/temple.png";
import keralaImage from "../assets/kerala.png";
import andhraImage from "../assets/ap.png";
import karnatakaImage from "../assets/karnataka.png";

const TamilNaduMap = () => {
  const navigate = useNavigate(); // Initialize navigation

  const states = [
    { name: "Tamil Nadu", image: tamilNaduImage, route: "/tamilnadu" }, // Add route for Tamil Nadu
    { name: "Kerala", image: keralaImage , route: "/kerala" },
    { name: "Karnataka", image: karnatakaImage , route: "/kar" },
    { name: "Andhra Pradesh", image: andhraImage, route: "/ap"  },
  ];

  const handleCardClick = (route) => {
    if (route) navigate(route); // Navigate to the route if defined
  };

  return (
    <div className="realtime-prices-container">
      <h1 className="realtime-header">Real-Time Prices of Coconut Across India</h1>
      <p className="realtime-description">
        Stay updated with the latest coconut prices in major coconut-growing states in India.
      </p>
      <div className="state-cards-container">
        {states.map((state, index) => (
          <div
            className="state-card"
            key={index}
            onClick={() => handleCardClick(state.route)} // Handle click
            style={{ cursor: state.route ? "pointer" : "default" }}
          >
            <img src={state.image} alt={state.name} className="state-icon" />
            <h3 className="state-name">{state.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TamilNaduMap;
