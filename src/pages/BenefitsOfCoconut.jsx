import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Heart, Brain, Droplet, Apple, Shield, Scroll,  Dumbbell } from 'lucide-react';


const BenefitsOfCoconut = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const benefits = [
    {
      title: "Nutritional Value",
      icon: <Apple className="w-8 h-8  text-[#0090E1]" />,
      points: [
        "Rich source of essential minerals including manganese (supporting bone health), copper (vital for red blood cell formation), and iron (crucial for oxygen transport)",
        "Contains unique medium-chain triglycerides (MCTs) that provide quick energy and support brain function",
        "Excellent fiber content (7g per cup) promoting digestive health and maintaining steady blood sugar levels",
        "Natural electrolytes including potassium, magnesium, and sodium for hydration balance",
        "Abundant in vitamins E (antioxidant protection) and K (bone health and blood clotting)"
      ],
      details: "Coconuts are nature's nutritional powerhouse, packed with essential nutrients that support overall health. The medium-chain triglycerides (MCTs) are particularly unique, as they're metabolized differently than other fats, providing quick energy and potential cognitive benefits. One cup of coconut meat contains 283 calories, 7g fiber, 3g protein, and various minerals that fulfill a significant portion of daily requirements."
    },
    {
      title: "Heart Health",
      icon: <Heart className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "Significantly increases good HDL cholesterol levels while maintaining healthy LDL balance",
        "Lauric acid content helps reduce inflammation in blood vessels and prevent plaque formation",
        "Regular consumption may help maintain healthy blood pressure levels through potassium content",
        "Contains antioxidants that protect heart cells from oxidative stress and damage",
        "Supports healthy circulation and cardiovascular function through anti-inflammatory properties"
      ],
      details: "Despite being high in saturated fats, coconut's unique composition actually supports heart health. The lauric acid, which makes up about 50% of coconut's fat content, has been shown to have beneficial effects on heart health markers. Studies suggest that populations consuming traditional coconut-rich diets have lower rates of heart disease."
    },
    {
      title: "Brain Function",
      icon: <Brain className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "MCTs provide rapid energy source for brain cells, enhancing cognitive performance",
        "Ketones produced from MCTs may help prevent and treat neurodegenerative diseases",
        "Contains neuroprotective compounds that support long-term brain health",
        "Improves memory and learning capabilities through enhanced neurotransmitter function",
        "Reduces inflammation in neural tissue, potentially lowering risk of cognitive decline"
      ],
      details: "The brain-boosting benefits of coconut are primarily linked to its MCT content. These fats are quickly converted to ketones, which serve as an efficient energy source for brain cells. Research suggests that ketones may help protect against various neurological disorders and improve cognitive function, especially in older adults."
    },
    {
      title: "Immune System",
      icon: <Shield className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "Lauric acid converts to monolaurin, which has strong antiviral and antibacterial properties",
        "Rich in antioxidants that combat free radicals and reduce oxidative stress",
        "Supports the production and function of white blood cells",
        "Contains compounds that help fight various pathogenic bacteria and fungi",
        "Strengthens the body's natural defense mechanisms against infections"
      ],
      details: "Coconut's immune-boosting properties are well-documented, with lauric acid being a key component. When digested, lauric acid forms monolaurin, a compound that can kill harmful pathogens including bacteria, viruses, and fungi. This makes coconut an excellent natural immune system supporter."
    },
    {
      title: "Skin Health",
      icon: <Droplet className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "Deep moisturizing properties that penetrate multiple skin layers",
        "Natural antimicrobial properties help combat acne and skin infections",
        "Contains vitamin E and antioxidants that protect against premature aging",
        "Promotes collagen production for skin elasticity and healing",
        "Provides protection against harmful UV radiation damage"
      ],
      details: "Coconut oil's benefits for skin health are attributed to its unique fatty acid composition and antioxidant content. Its molecular structure allows it to penetrate deep into the skin, providing lasting moisture and protection. The antimicrobial properties make it effective against various skin conditions."
    },
    {
      title: "Athletic Performance",
      icon: <Dumbbell className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "Provides quickly accessible energy through MCTs for enhanced performance",
        "Helps maintain electrolyte balance during intense physical activity",
        "Supports muscle recovery and reduces exercise-induced inflammation",
        "Improves endurance and stamina during prolonged physical activity",
        "Natural source of carbohydrates for sustained energy release"
      ],
      details: "Athletes can benefit significantly from coconut consumption. The MCTs provide quick energy without the insulin spike associated with carbohydrates, while the electrolytes help maintain proper hydration. Studies show that coconut water is as effective as sports drinks for rehydration during intense exercise."
    }
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

