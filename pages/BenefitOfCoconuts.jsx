import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Heart, Brain, Droplet, Apple, Shield, Scroll, Dumbbell } from 'lucide-react';

const BenefitsOfCoconut = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const benefits = [
    {
      title: "ஊட்டச்சத்து மதிப்பு",
      icon: <Apple className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "மன்கனீசு, தாமிரம் மற்றும் இரும்பு போன்ற முக்கிய கனிமங்கள் நிறைந்தவை (எலும்பு ஆரோக்கியத்திற்கு உதவும்).",
        "அதிக ஆற்றல் மற்றும் மூளை செயல்பாட்டிற்கு ஆதரவாக நடுத்தர-சுழற்சி டிரிகிளிசரைட்களை (MCTs) கொண்டுள்ளது.",
        "அற்புதமான நார்சத்து (குறிஞ்சியில் 7g) ஜீரண ஆரோக்கியத்தையும் சர்க்கரை அளவையும் பராமரிக்க உதவுகிறது.",
        "பொட்டாசியம், மக்னீசியம், மற்றும் சோடியம் போன்ற இயற்கை மினரல்கள் நீர்சத்து சமநிலையை மேம்படுத்துகின்றன.",
        "ஈ மற்றும் K வைட்டமின்களால் ஆன்டி ஆக்ஸிடென்ட் பாதுகாப்பு மற்றும் எலும்பு ஆரோக்கியத்திற்கு உதவுகிறது."
      ],
      details: "தேங்காய் பல ஊட்டச்சத்துக்களை வழங்கும் இயற்கை பொக்கிஷமாகும். இது ஆரோக்கியத்தை மேம்படுத்தும். அதனுடன் உள்ள MCTs உடலுக்குத் திறம்பட ஆற்றல் வழங்குகின்றன மற்றும் புலனறிவு நலனை மேம்படுத்துகின்றன. ஒரு கேப்புக் கூழ் 283 கலோரி, 7g நார்சத்து, 3g புரதம் மற்றும் பல கனிமங்களை கொண்டுள்ளது."
    },
    {
      title: "இதய ஆரோக்கியம்",
      icon: <Heart className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "நல்ல HDL கொழுப்பு அளவுகளை அதிகரிக்க உதவுகிறது மற்றும் LDL அளவை சமநிலைப்படுத்துகிறது.",
        "லாரிக் அமிலம் இரத்த நாளங்களில் வீக்கம் மற்றும் தடுக்குகளை குறைக்க உதவுகிறது.",
        "சீரான இரத்த அழுத்தம் அளவுகளை பராமரிக்க பொட்டாசியம் கொண்டுள்ளது.",
        "ஆண்டி ஆக்ஸிடென்ட்டுகள் இதய செல்களை ஆக்சிடேட்டிவ் அழுத்தத்திலிருந்து பாதுகாக்கின்றன.",
        "சுற்றி வளைத்தல் மற்றும் இதய செயல்பாட்டை மேம்படுத்தும் ஆண்டி-இன்ஃபிளம்மேட்டரி பண்புகள் உள்ளன."
      ],
      details: "தேங்காயில் உள்ள கொழுப்பு அமிலங்கள் சத்தமில்லாதவையாக இருந்தாலும், அதன் தனிப்பட்ட கலவை இதய ஆரோக்கியத்தை மேம்படுத்த உதவுகிறது. குறிப்பாக லாரிக் அமிலம், இது 50% தேங்காய் கொழுப்பில் அடங்கியுள்ளது."
    },
    {
      title: "மூளை செயல்பாடு",
      icon: <Brain className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "மூளை செல்களுக்கு MCTs மிக விரைவான ஆற்றலை அளிக்கிறது.",
        "கேட்டோன்கள் நரம்பியல் கோளாறுகளை தடுப்பதற்கு உதவக்கூடும்.",
        "நரம்பு ஆரோக்கியத்தை ஆதரிக்கும் இயற்கை சேர்மங்கள் அடங்கியுள்ளன.",
        "நினைவாற்றல் மற்றும் கற்றல் திறனை மேம்படுத்துகிறது.",
        "நரம்பு திசுக்களில் வீக்கத்தை குறைத்து புலனறிவு சரிவுகளைத் தடுக்கும்."
      ],
      details: "தேங்காய் மூளை ஆரோக்கியத்தை மேம்படுத்துவதில் MCTs முக்கிய பங்கு வகிக்கின்றன. அது மூளைக்குத் தேவையான ஆற்றலாக விரைவில் மாற்றப்படுகிறது."
    },
    {
      title: "ந immunity (நோய் எதிர்ப்பு)",
      icon: <Shield className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "லாரிக் அமிலம் மோனோலாரின் ஆக மாறி வைரஸ்களைக் கொல்ல உதவுகிறது.",
        "ஆண்டி ஆக்ஸிடென்ட்டுகள் ஆக்சிடேட்டிவ் அழுத்தத்தை குறைக்கின்றன.",
        "வெள்ளை இரத்த அணுக்களின் செயல்பாட்டை மேம்படுத்துகிறது.",
        "பாதுகாப்பற்ற பாக்டீரியா மற்றும் பூஞ்சைகளை அழிக்க உதவும்.",
        "தனது நோய் எதிர்ப்பு சக்தியை வலுப்படுத்துகிறது."
      ],
      details: "தேங்காயின் நோய் எதிர்ப்பு பயன்கள் அதன் லாரிக் அமிலத்தின் மூலம் நிரூபிக்கப்படுகின்றன. இந்த லாரிக் அமிலம் பல வைரஸ் மற்றும் பாக்டீரியாக்களை அழிக்க உதவுகிறது."
    }
    // Add other translations here...
  ];

  const downloadPDF = () => {
    const content = document.getElementById('benefits-content');
    const opt = {
      margin: 1,
      filename: 'coconut-benefits.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };
    html2pdf().set(opt).from(content).save();
  };
  return (
    
      <div className="min-h-screen bg-gray-50 p-8" id="benefits-content">
        <div className="max-w-7xl mx-auto">
          {/* Logo at the top */}
          <div className="text-center mb-12">
            <img
              src="src/assets/logo.png" // Replace with the actual logo path
              alt="Logo"
              className="logo-image w-auto h-auto mx-auto"
            />
          </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#4CAF50] mb-12 text-center font-['Space_Grotesk'] animate-fade-in">
          Benefits of Coconut
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  {benefit.icon}
                  <h2 className="text-2xl font-bold text-[#0090E1] font-['Space_Grotesk']">
                    {benefit.title}
                  </h2>
                </div>
                
                <ul className="space-y-4">
                  {benefit.points.map((point, pointIndex) => (
                    <li 
                      key={pointIndex} 
                      className="flex items-start animate-slide-in"
                      style={{ animationDelay: `${pointIndex * 0.1}s` }}
                    >
                      <span className="text-green-500 mr-2 text-xl">•</span>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>

                <div 
                  className={`mt-6 overflow-hidden transition-all duration-300 ${
                    expandedCard === index ? 'max-h-96' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.details}
                  </p>
                </div>

                <button 
                  className="mt-4 text-[#0090E1] hover:text-[#4CAF50] transition-colors"
                  onClick={() => setExpandedCard(expandedCard === index ? null : index)}
                >
                  {expandedCard === index ? 'Show Less' : 'Learn More'}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={downloadPDF}
            className="bg-[#4CAF50] text-white px-8 py-4 rounded-lg hover:bg-[#45a049] transition-all duration-300 transform hover:scale-105 font-['Space_Grotesk'] font-bold text-lg shadow-md"
          >
            Download PDF
          </button>
        </div>
      </div>
    </div>
  );
};

export default BenefitsOfCoconut;
