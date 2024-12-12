import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../components/TamilNaduMap.css";
import tamilNaduImage from "../../../assets/temple.png";
import keralaImage from "../../../assets/kerala.png";
import andhraImage from "../../../assets/ap.png";
import karnatakaImage from "../../../assets/karnataka.png";

const TamilNaduMapTamil = () => {
  const navigate = useNavigate(); // வழிசெலுத்தலை தொடங்குங்கள்

  const states = [
    { name: "தமிழ்நாடு", image: tamilNaduImage, route: "/tamilnadu" }, // தமிழ்நாட்டிற்கான வழி
    { name: "கேரளா", image: keralaImage , route: "/kerala" },
    { name: "கர்நாடகா", image: karnatakaImage , route: "/kar" },
    { name: "ஆந்திரப்பிரதேசம்", image: andhraImage, route: "/ap"  },
  ];

  const handleCardClick = (route) => {
    if (route) navigate(route); // வழியை அமைத்திருந்தால் அதில் செல்லவும்
  };

  return (
    <div className="realtime-prices-container">
      <h1 className="realtime-header">இந்தியாவிலுள்ள தேங்காய் விலை நேரடி பாவனை</h1>
      <p className="realtime-description">
        இந்தியாவில் தேங்காய் விளைவிக்கும் முக்கிய மாநிலங்களில் தற்போதைய தேங்காய் விலைகளைப் பற்றிய தகவலுக்கு எப்பொழுதும் புதுப்பிக்கவும்.
      </p>
      <div className="state-cards-container">
        {states.map((state, index) => (
          <div
            className="state-card"
            key={index}
            onClick={() => handleCardClick(state.route)} // கிளிக்கை கையாளவும்
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

export default TamilNaduMapTamil;
