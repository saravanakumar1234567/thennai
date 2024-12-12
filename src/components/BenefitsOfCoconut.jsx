import React from 'react';
import { FaLeaf, FaHeart, FaWater, FaSeedling, FaBacon, FaSmile, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../components/BenifitsOfCoconut.css';

const BenefitsOfCoconut = () => {
  const benefits = [
    {
      icon: <FaLeaf />,
      title: "Rich in Nutrients",
      description: "Coconut is packed with essential vitamins and minerals that contribute to overall health.",
      color: "#4CAF50", // Green
    },
    {
      icon: <FaHeart />,
      title: "Heart Health",
      description: "Coconut helps improve cholesterol levels and supports heart health.",
      color: "#FF5722", // Red
    },
    {
      icon: <FaWater />,
      title: "Hydration",
      description: "Coconut water is a natural hydrating beverage, perfect for maintaining fluid balance.",
      color: "#2196F3", // Blue
    },
    {
      icon: <FaSeedling />,
      title: "Boosts Immunity",
      description: "Coconut contains antioxidants that can help strengthen the immune system.",
      color: "#8BC34A", // Light Green
    },
    {
      icon: <FaBacon />,
      title: "Supports Weight Loss",
      description: "Coconut can help with weight management due to its healthy fats and metabolism-boosting properties.",
      color: "#FFC107", // Yellow
    },
    {
      icon: <FaSmile />,
      title: "Improves Skin Health",
      description: "Coconut oil has moisturizing and anti-inflammatory properties that are great for skin health.",
      color: "#9C27B0", // Purple
    },
    {
      icon: <FaShieldAlt />,
      title: "Strengthens Hair",
      description: "Coconut oil nourishes the scalp, strengthens hair follicles, and promotes healthy hair growth.",
      color: "#3F51B5", // Indigo
    },
    {
      icon: <FaCogs />,
      title: "Supports Digestion",
      description: "Coconut aids digestion by promoting healthy gut flora and relieving constipation.",
      color: "#FF9800", // Orange
    }
  ];

  return (
    <div className="benefits-container">
      <h2 className="benefits-title">Benefits of Coconut</h2>
      
      <div className="benefits-cards">
        {benefits.map((benefit, index) => (
          <motion.div
            className="benefit-card"
            key={index}
            whileHover={{ scale: 1.05 }} // Hover effect for interactivity
            whileTap={{ scale: 0.95 }}  // Tap effect for better touch interaction
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="icon" style={{ color: benefit.color }}>
              {benefit.icon}
            </div>
            <h3 className="card-title">{benefit.title}</h3>
            <p className="card-description">{benefit.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Know More Button */}
      <div className="know-more-button-container">
        <Link to="/BenefitsOfCoconut" className="know-more-button">
          Know More
        </Link>
      </div>
    </div>
  );
};

export default BenefitsOfCoconut;
