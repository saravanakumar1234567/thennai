import React from "react";
import "../components/farmingGuide.css";
import { useNavigate } from "react-router-dom"; 

const FarmingGuide = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const guideSteps = [
    {
      title: "Land Preparation",
      description: "Prepare the soil by clearing weeds and ensuring proper drainage.",
      icon: "🌱",
    },
    {
      title: "Planting",
      description: "Select high-quality coconut seedlings and plant them at appropriate spacing.",
      icon: "🌴",
    },
    {
      title: "Irrigation",
      description: "Provide sufficient water, especially during dry months, to ensure healthy growth.",
      icon: "💧",
    },
    {
      title: "Fertilization",
      description: "Use organic or chemical fertilizers to boost plant growth and yield.",
      icon: "🌿",
    },
    {
      title: "Pest Control",
      description: "Monitor and manage pests like rhinoceros beetles and red palm weevils.",
      icon: "🐛",
    },
    {
      title: "Harvesting",
      description: "Harvest mature coconuts every 45-60 days for optimal yield.",
      icon: "🥥",
    },
  ];

  return (
    <section className="farming-guide">
      {/* Header Section */}
      <div className="guide-header">
        <h2>Farming Guide for Coconuts</h2>
        <p>Learn the essential steps to grow and maintain healthy coconut plantations.</p>
      </div>

      {/* Steps Section */}
      <div className="guide-steps">
        {/* First Group: Top 3 Cards */}
        <div className="top-row">
          {guideSteps.slice(0, 3).map((step, index) => (
            <div className="guide-card" key={index}>
              <div className="guide-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>

        {/* Second Group: Bottom 3 Cards */}
        <div className="bottom-row">
          {guideSteps.slice(3).map((step, index) => (
            <div className="guide-card" key={index}>
              <div className="guide-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* "Know More" Button */}
      <div className="know-more-btn-container">
        <button
          className="know-more-btn"
          onClick={() => navigate("fg")} // Navigate to the 'fg' page
        >
          Know More
        </button>
      </div>
    </section>
  );
};

export default FarmingGuide;
