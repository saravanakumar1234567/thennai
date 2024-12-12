// WhatsAppButton.jsx
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa'; // Import the WhatsApp icon


const WhatsAppButtonTamil = () => {
  // Function to open WhatsApp help bot link
  const openWhatsApp = () => {
    const phoneNumber = "8608825725"; // Replace with your WhatsApp phone number
    const message = "Hello! How can I assist you today?"; // The message that the bot receives

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank"); // Open WhatsApp in a new tab
  };

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        backgroundColor: '#25D366', // WhatsApp green color
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

export default WhatsAppButtonTamil;
