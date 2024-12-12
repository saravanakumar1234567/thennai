import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Sprout, Droplets, Beaker, Bug, Scissors } from 'lucide-react';

const FarmingGuideTamil2 = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const farmingSteps = [
    {
      title: "நிலம் தயாரித்தல்",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "நன்கு நீரேற்றும் மண் தேர்வு செய்யவும், pH நிலை 5.5-6.5 இடையே இருக்க வேண்டும்.",
        "களைகளை நீக்கி, சூரியஒளி பாயும் விதமாக நிலத்தை சுத்தம் செய்யவும்.",
        "1மீ × 1மீ × 1மீ அளவிலான குழிகளை 7.5மீ × 7.5மீ இடைவெளியுடன் தோண்டவும்.",
        "குழிகளை மேல்மண், உயர் உயிரியல் அம்சங்கள் மற்றும் மணலை சேர்த்துக் களிமண்ணில் நிரப்பவும்.",
        "நீர்ச்சரிவு மற்றும் நீர்சேதம் தவிர்க்க சரியான சாய்வு மற்றும் நீர்நிலைகளை உறுதி செய்யவும்.",
      ],
      details:
        "தேங்காய் விவசாய வெற்றிக்கு நிலம் தயாரிப்பு மிகவும் முக்கியமானது. தரநிலை மண், சரியான நீரேற்றம் மற்றும் அடிப்படை ஆக்கத்திற்காக நல்ல சூழல் உருவாக்குவதற்கு மண் தயாரிப்பு அவசியம்."
    },
    {
      title: "நடுதல்",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />, 
      points: [
        "உயர்தர நடவு விதைகளை நம்பகமான நர்சரிகளில் இருந்து தேர்வு செய்யவும் (11-12 மாதங்கள் பழையவை).",
        "மழைக்காலத்தின் தொடக்கத்தில் நடுவதன் மூலம் சிறந்த வேரூன்றி வளர்வதை உறுதி செய்யவும்.",
        "கொடியின் அடிவயிற்றுப் பகுதி தரை மட்டத்தில் இருக்கும் அளவிற்கு நடவும்.",
        "முதல் சில வாரங்களில் உடனடி நீர்ப்பாசனமும் நிழலும் வழங்கவும்.",
        "தாவரங்களுக்கு இடையில் 7.5மீ இடைவெளியைப் பின்பற்றி வளரும் இடத்தை உறுதி செய்யவும்."
      ],
      details:
        "நடுதல் கட்டம் முக்கியமானது. தரமான விதைகளும், சரியான நடுதல் முறைகளும் நல்ல உயிர்ச்செறிவு விகிதங்களையும், எதிர்கால விளைவுகளையும் உறுதி செய்கின்றன."
    },
    {
      title: "நீர்ப்பாசனம்",
      icon: <Droplets className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "நீரை மேம்பட்ட முறையில் பயன்படுத்த சுரம் நீர்ப்பாசனம் அல்லது தொட்டி நீர்ப்பாசனம் முறைகளை செயல்படுத்தவும்.",
        "நீர்சேதம் தவிர்த்து நிலத்தின் ஈரத்தை நிரந்தரமாக வைத்திருங்கள்.",
        "கோடை காலங்களில் அதிகமாக (15-20 லிட்டர் தாவரத்திற்கு) நீர்ப்பாசனம் செய்யவும்.",
        "மழைக்காலத்தில் நீர்ப்பாசனத்தை குறைத்து வேர்ப்பூச்சிக் கோளாறுகளை தவிர்க்கவும்.",
        "நிலத்தின் ஈரத்தை முறைப்படி கண்காணித்து, நீர்ப்பாசனத்தை அதன்படி சரிசெய்யவும்."
      ],
      details:
        "தேங்காய்த் தோட்ட வளர்ச்சிக்கும், விளைச்சலுக்கும் சரியான நீர்ப்பாசனம் அத்தியாவசியமாகும். இளநிலை பராமரிப்பு காலங்களில் தொடர்ச்சியான நீர்ப்பாசனம் அவசியம்."
    },
    {
      title: "உரமிடுதல்",
      icon: <Beaker className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "சமநிலையான NPK உரங்களை கையாளவும் (500g N, 320g P2O5, மற்றும் 1200g K2O).",
        "உயிரியல் உரம் (25-50 கிலோ) ஆண்டிற்கு ஒரு தாவரத்திற்கு சேர்க்கவும்.",
        "உரமிடுதல் இரண்டு அல்லது மூன்று தவணைகளில் பிரித்து செய்வது சிறந்தது.",
        "மண்ணின் பரிசோதனை பரிந்துரைகளின் அடிப்படையில் மைக்ரோநியூட்ரியன்டுகளை பயன்படுத்தவும்.",
        "சேதனப்பயிர்செய்கையும், மண் ஆரோக்கியத்திற்காக பசுமைத்தேவையும் பின்பற்றவும்."
      ],
      details:
        "உரமிடுதல் பொறுப்புணர்வுடன் செயல் படுத்துவதன் மூலம் நிலையான தேங்காய் உற்பத்தியை உறுதி செய்யலாம்."
    },
    {
      title: "சோற்று கட்டுப்பாடு",
      icon: <Bug className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "பயனளிக்கும் பூச்சிகளை வெள்ளை முட்டை மற்றும் குருட்டுப் பூச்சிகளை தொடர்ந்து கண்காணிக்கவும்.",
        "ஒருங்கிணைந்த பூச்சி மேலாண்மை (IPM) முறைகளை பயன்படுத்தவும்.",
        "பெரிய பூச்சி வலைகள் மற்றும் உயிரியல் கட்டுப்பாட்டுக் கலைகளை பயன்படுத்தவும்.",
        "பயிர்த் துறையை சுத்தமாக பராமரிக்கவும்.",
        "தேவையான போது மட்டுமே அங்கீகரிக்கப்பட்ட பூச்சிக்கொல்லிகள் பயன்படுத்தவும்."
      ],
      details:
        "பூச்சி மேலாண்மை முறைகள் சீரான வேளாண் பழக்கவழக்கங்களைக் கொண்டு செயல்படுவதை உறுதி செய்கின்றன."
    },
    {
      title: "விளைச்சல்",
      icon: <Scissors className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "வெப்பமாக்கிய விளைச்சலின் போது (11-12 மாதங்கள் பின்னர்) தேங்காய்களைப் பொறுத்துக் கொள்வது.",
        "பயிற்சிபெற்ற ஏறுதல் தொழில்நுட்பம் அல்லது இயந்திரங்களை பயன்படுத்தவும்.",
        "45-60 நாட்கள் இடைவெளியில் விளைச்சலைத் தொடரவும்.",
        "தேங்காய் முழுவதுமாக பழுத்துவிட்டதா என்பதை உறுதிசெய்ய ஓட்டை நிறத்தைப் பார்க்கவும்.",
        "விளைச்சலின் போது தேங்காய்களை நுட்பமாக கையாளவும்."
      ],
      details:
        "சரியான விளைச்சல் முறைகள் நல்ல தரமான தேங்காய்களை வழங்குகின்றன."
    }
  ];

  const downloadPDF = () => {
    const content = document.getElementById('farming-guide-content');
    const opt = {
      margin: 1,
      filename: 'coconut-farming-guide.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    };
    html2pdf().set(opt).from(content).save();
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8" id="farming-guide-content">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-[#4CAF50] mb-12 text-center font-['Space_Grotesk']">
          தேங்காய் விவசாயக் கையேடு
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {farmingSteps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => setExpandedCard(expandedCard === index ? null : index)}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-6">
                  {step.icon}

                  <h2 className="text-2xl font-bold text-[#0090E1] font-['Space_Grotesk']">
                    {step.title}
                  </h2>
                </div>
                <ul className="space-y-4">
                  {step.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="flex items-start">
                      <span className="text-green-500 mr-2 text-xl">•</span>
                      <span className="text-gray-700 leading-relaxed">{point}</span>
                    </li>
                  ))}
                </ul>
                {expandedCard === index && (
                  <div className="mt-6">
                    <p className="text-gray-600 leading-relaxed">{step.details}</p>
                  </div>
                )}
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

export default FarmingGuideTamil2;
