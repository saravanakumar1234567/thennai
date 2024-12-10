import React from 'react';
import { FaLeaf, FaHeart, FaWater, FaSeedling, FaBacon, FaSmile, FaShieldAlt, FaCogs } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // வழிமுறை அனுப்பி வைப்பதற்கான Link ஐ இறக்குமதி செய்க
import '../components/BenifitsOfCoconut.css';

const BenefitsOfCoconut = () => {
  const benefits = [
    {
      icon: <FaLeaf />,
      title: "பொதுவாக ஊட்டச்சத்துகளுக்குள் நிறைந்தது",
      description: "துறையில் ஆரோக்கியத்திற்கு உதவுமான முக்கிய வைட்டமின்கள் மற்றும் கனிமங்கள் கொண்டு பருப்பானது.",
      color: "#4CAF50", // பச்சை
    },
    {
      icon: <FaHeart />,
      title: "இதய ஆரோக்கியம்",
      description: "துறையில் கொழுப்பு அளவுகளை மேம்படுத்த உதவுகிறது மற்றும் இதய ஆரோக்கியத்தை ஆதரிக்கிறது.",
      color: "#FF5722", // சிவப்பு
    },
    {
      icon: <FaWater />,
      title: "தண்ணீர் பரிமாறுதல்",
      description: "துறையில் தண்ணீர் ஒரு இயற்கை பரிமாறும் பானமாக உள்ளது, உடலின் திரவ நிலையை பராமரிப்பதற்கு சிறந்தது.",
      color: "#2196F3", // நீலம்
    },
    {
      icon: <FaSeedling />,
      title: "பாதுகாப்பு சக்தி அதிகரிக்கும்",
      description: "துறையில் உள்ள ஆன்டி ஆக்சிடன்ட் பொருட்கள் உங்கள் பாதுகாப்பு மண்டலத்தை வலுப்படுத்த உதவக்கூடும்.",
      color: "#8BC34A", // வெளிர் பச்சை
    },
    {
      icon: <FaBacon />,
      title: "எடை குறைவுக்கு ஆதரவு",
      description: "துறையில் உள்ள ஆரோக்கியமான கொழுப்புகள் மற்றும் உடலின் மையத்தை அதிகரிக்கும் பண்புகளால் எடை நிர்வகிப்பதில் உதவுகிறது.",
      color: "#FFC107", // மஞ்சள்
    },
    {
      icon: <FaSmile />,
      title: "சிறந்த தோல் ஆரோக்கியம்",
      description: "துறையில் உள்ள எண்ணெய் பராமரிப்பு மற்றும் எதிர்ப்பு பண்புகளை கொண்டுள்ளது, இது தோல் ஆரோக்கியத்திற்கு சிறந்தது.",
      color: "#9C27B0", // செம்மைய
    },
    {
      icon: <FaShieldAlt />,
      title: "முடி வலுவூட்டுகிறது",
      description: "துறையில் உள்ள எண்ணெய் முடியின் வளையங்களை ஊட்டுகிறது, முடி தோல் புறங்களை வலுப்படுத்துகிறது மற்றும் ஆரோக்கியமான முடி வளர்ச்சிக்கு உதவுகிறது.",
      color: "#3F51B5", // இண்டிகோ
    },
    {
      icon: <FaCogs />,
      title: "சரியான செரிமானத்திற்கு ஆதரவு",
      description: "துறையில் உள்ள எண்ணெய் செரிமானத்தை மேம்படுத்த உதவுகிறது, மேலும் காம்பார்ந்த குடல் பாகங்களை ஊக்குவிக்கும் மற்றும் மலம் இழப்பு பிரச்சனைகளை சரி செய்ய உதவுகிறது.",
      color: "#FF9800", // ஆரஞ்சு
    }
  ];

  return (
    <div className="benefits-container">
      <h2 className="benefits-title">தேங்காய் பயன்கள்</h2>
      
      <div className="benefits-cards">
        {benefits.map((benefit, index) => (
          <motion.div
            className="benefit-card"
            key={index}
            whileHover={{ scale: 1.05 }} // இடுப்புகள் பார்வை அல்லது அழுத்தம் அடையும்போது
            whileTap={{ scale: 0.95 }}  // தொட்டபோது அசைவிற்கு மாற்றம்
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

      {/* மேலும் அறிய பொத்தான் */}
      <div className="know-more-button-container">
        <Link to="/BenefitsOfCoconut" className="know-more-button">
          மேலும் அறிய
        </Link>
      </div>
    </div>
  );
};

export default BenefitsOfCoconut;
