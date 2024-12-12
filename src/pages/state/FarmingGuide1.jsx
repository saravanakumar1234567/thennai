import React, { useState } from 'react';
import html2pdf from 'html2pdf.js';
import { Sprout, Droplets, Beaker, Bug, Scissors } from 'lucide-react';

const FarmingGuide1 = () => {
  const [expandedCard, setExpandedCard] = useState(null);

  const farmingSteps = [
    {
      title: "Land Preparation",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "Select well-draining soil with pH levels between 5.5-6.5 for optimal growth",
        "Clear the land of weeds and debris, ensuring proper sunlight exposure",
        "Dig pits of 1m × 1m × 1m size with spacing of 7.5m × 7.5m between pits",
        "Fill pits with topsoil mixed with organic matter and sand for better drainage",
        "Ensure proper slope and drainage systems to prevent waterlogging",
      ],
      details:
        "Proper land preparation is crucial for coconut farming success. The soil should be fertile, well-draining, and properly prepared to support healthy root development. Good drainage is essential as coconut palms are sensitive to waterlogging. The preparation of planting pits with the right soil mixture creates an ideal environment for initial root establishment and growth.",
    },
    {
      title: "Planting",
      icon: <Sprout className="w-8 h-8 text-[#0090E1]" />, // Reusing Sprout icon as Seedling is unavailable
      points: [
        "Select high-quality seedlings from certified nurseries (11-12 months old)",
        "Plant during the start of the rainy season for better establishment",
        "Place seedling at the correct depth ensuring the collar region is at ground level",
        "Provide immediate irrigation and shade for the first few weeks",
        "Maintain proper spacing between plants (7.5m × 7.5m) for optimal growth",
      ],
      details:
        "The planting phase is critical for establishing a productive coconut plantation. Using quality seedlings and proper planting techniques ensures better survival rates and future yields. The timing of planting should coincide with the onset of rains to provide natural irrigation during the critical establishment period.",
    },
    {
      title: "Irrigation",
      icon: <Droplets className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "Implement drip irrigation or basin irrigation systems for efficient water use",
        "Maintain consistent soil moisture without waterlogging",
        "Irrigate more frequently during summer months (15-20 liters per palm)",
        "Reduce irrigation during the rainy season to prevent root rot",
        "Monitor soil moisture regularly and adjust irrigation accordingly",
      ],
      details:
        "Proper irrigation is essential for coconut palm growth and productivity. While coconut palms are drought-tolerant, regular irrigation ensures optimal growth and nut production. The water requirement varies with climate, soil type, and age of the palm. Modern irrigation systems like drip irrigation can significantly improve water use efficiency.",
    },
    {
      title: "Fertilization",
      icon: <Beaker className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "Apply balanced NPK fertilizer (500g N, 320g P2O5, and 1200g K2O per palm/year)",
        "Incorporate organic manure (25-50 kg per palm/year)",
        "Split fertilizer application into 2-3 doses throughout the year",
        "Apply micronutrients based on soil test recommendations",
        "Practice green manuring and mulching for soil health",
      ],
      details:
        "Nutrition management is crucial for sustainable coconut production. A balanced fertilization program including both organic and inorganic fertilizers ensures healthy growth and optimal yield. The fertilizer requirements vary with palm age and soil conditions. Regular soil testing helps in maintaining optimal nutrient levels.",
    },
    {
      title: "Pest Control",
      icon: <Bug className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "Regular monitoring for common pests like rhinoceros beetle and red palm weevil",
        "Implement integrated pest management (IPM) practices",
        "Use pheromone traps and biological control methods",
        "Maintain field sanitation to prevent pest buildup",
        "Apply approved pesticides only when necessary and at recommended doses",
      ],
      details:
        "Pest management in coconut farming requires a systematic approach combining preventive and control measures. Regular monitoring helps in early detection and control of pests. Integrated Pest Management (IPM) practices provide sustainable and environmentally friendly pest control solutions.",
    },
    {
      title: "Harvesting",
      icon: <Scissors className="w-8 h-8 text-[#0090E1]" />,
      points: [
        "Harvest nuts when they are fully mature (11-12 months after spadix opening)",
        "Use trained climbers or mechanical harvesting tools",
        "Harvest at 45-60 day intervals throughout the year",
        "Check for nut maturity by the browning of husk",
        "Handle harvested nuts carefully to prevent damage",
      ],
      details:
        "Proper harvesting techniques ensure good quality nuts and maintain palm health. The timing of harvest is crucial for obtaining maximum copra content. Regular harvesting intervals help in maintaining consistent production and prevent nuts from becoming overripe.",
    },
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
          Farming Guide for Coconuts
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

export default FarmingGuide1;
