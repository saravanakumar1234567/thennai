import React from "react";
import "../components/farmingGuide.css";
import { useNavigate } from "react-router-dom"; 

const FarmingGuide = () => {
  const navigate = useNavigate(); // useNavigate ஐ துவங்குதல்

  const guideSteps = [
    {
      title: "மண் தயார் செய்தல்",
      description: "காட்டுப்பொதுவான தாவரங்களை அகற்றி, சரியான நீரேற்றத்தை உறுதி செய்து மண்ணை தயார் செய்யவும்.",
      icon: "🌱",
    },
    {
      title: "நடைபிடித்தல்",
      description: "உயர்தர தேங்காய் விதைகளைத் தேர்வு செய்து, அவற்றை சரியான இடைவெளியில் நாட்டவும்.",
      icon: "🌴",
    },
    {
      title: "நீர்ப்பாசனம்",
      description: "அரிந்த மாதங்களில் கூட, மஞ்சள் மற்றும் ஆரோக்கிய வளர்ச்சிக்கான போதுமான நீர் வழங்கவும்.",
      icon: "💧",
    },
    {
      title: "உதவி சத்து",
      description: "மீதமுள்ள வளர்ச்சியையும் உற்பத்தியையும் அதிகரிக்க இயற்கை அல்லது ரசாயன உரங்களை பயன்படுத்தவும்.",
      icon: "🌿",
    },
    {
      title: "விளையாட்டு கொள்ளுதல்",
      description: "எரிகின்ற வருவாய் மற்றும் சிவப்பு பாம்புக் கொழும்புகளைப் போன்ற சிறிய உயிரிகளை கண்காணித்து நிர்வகிக்கவும்.",
      icon: "🐛",
    },
    {
      title: "வெளி பொருள்",
      description: "முக்கியமான தேங்காய்களை 45-60 நாட்களுக்கான பழகும் போது திரும்பு.",
      icon: "🥥",
    },
  ];

  return (
    <section className="farming-guide">
      <div className="guide-header">
        <h2>தேங்காய்கள் ஆட்டம் வழிகாட்டி</h2>
        <p>ஆரோக்கியமான தேங்காய் தோட்டங்களை வளர்க்கவும் பராமரிக்கவும் அவசியமான படிகளைக் கற்றுக்கொள்ளுங்கள்.</p>
      </div>
      

{/* "பெரிய பற்றிய மேலும் தெரிந்து கொள்ளும்" பொத்தான் */}

      <div className="guide-steps">
        {guideSteps.map((step, index) => (
          <div className="guide-card" key={index}>
            <div className="guide-icon">{step.icon}</div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </div>
        ))}
      </div>

      {/* "மேலும் தெரிந்து கொள்ளுங்கள்" பொத்தான் */}
      <div className="know-more-btn-container">
        <button
          className="know-more-btn"
          onClick={() => navigate("fg")} // 'fg' பக்கத்திற்கு வழிசெல்
        >
          மேலும் தெரிந்து கொள்ளுங்கள்
        </button>
      </div>
    </section>
  );
};

export default FarmingGuide;
