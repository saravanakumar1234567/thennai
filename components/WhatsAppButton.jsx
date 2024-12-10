// WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // வாட்ஸ்அப் ஐகானை இறக்குமதி செய்க

const WhatsAppButton = () => {
  // வாட்ஸ்அப் ஹெல்ப் போட் லிங்கை திறக்கும் செயல்பாடு
  const openWhatsApp = () => {
    const phoneNumber = "8608825725"; // உங்கள் வாட்ஸ்அப் தொலைபேசி எண்ணை மாற்றவும்
    const message = "வணக்கம்! நான் இன்று உங்களுக்கு எப்படி உதவ முடியும்?"; // போட் பெறும் செய்தி

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank"); // புதிய தாவலில் வாட்ஸ்அப்பை திறக்கவும்
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366', // வாட்ஸ்அப் பச்சை வண்ணம்
        borderRadius: '50%',
        padding: '15px',
        boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.2)',
        cursor: 'pointer',
      }}
      onClick={openWhatsApp}
    >
      <FaWhatsapp size={30} color="white" />
    </div>
  );
};

export default WhatsAppButton;
