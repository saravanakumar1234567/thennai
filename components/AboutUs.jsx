import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Shield, Users, Lightbulb, Award } from "lucide-react";
import aboutUsImage from '../assets/Aboutus.jpg';

const AboutUs = () => {
  const [text, setText] = useState("");
  const fullText = `தென்னை என்பது கிண்டு விவசாயிகளுக்கு உதவுவதற்காக அர்ப்பணிக்கப்பட்ட நிறுவனமாகும். விவசாயத்தை எளிமையாக்க, லாபகரமாக்க மற்றும் எதிர்கால தலைமுறைகளுக்கான தத்துவத்துடன் செயற்கை வழிமுறைகள் மற்றும் ஆவணங்கள் வழங்குவதில் எங்கள் நோக்கம் உள்ளது.`;

  // Define the values array with corresponding icons
  const values = [
    {
      title: "நேர்மையாகத் செயல்படுதல்",
      description: "நாம் செய்வதில் எல்லாம் நேர்மையும், பண்புகளும் மற்றும் வெளிப்படைத்தன்மையும் பெறுதல்.",
      Icon: Shield
    },
    {
      title: "ஒன்றிணைவு",
      description: "கோப்பு மற்றும் அறிவுகளை பகிர்ந்து முன்னேறி வெற்றி பெறுதல்.",
      Icon: Users
    },
    {
      title: "புதியமைப்பு",
      description: "சரியான வழிகளை கண்டறிந்து சிறந்தவர்களாக இருக்கும் புதிய மாற்றங்களை விரும்புதல்.",
      Icon: Lightbulb
    },
    {
      title: "பதில் கூறுதல்",
      description: "எங்களின் பணிகளுக்கும் முடிவுகளுக்கும் பெருமை மற்றும் பொறுப்பை ஏற்றுக் கொள்வது.",
      Icon: Award
    }
  ];

  useEffect(() => {
    let index = 0;
    const words = fullText.split(' ');
    let currentText = '';
    
    const intervalId = setInterval(() => {
      if (index < words.length) {
        currentText = index === 0 
          ? words[index] 
          : currentText + ' ' + words[index];
        setText(currentText);
        index++;
      } else {
        clearInterval(intervalId);
      }
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="flex flex-col lg:flex-row items-start justify-center p-4 lg:p-8 gap-8">
      {/* Left Section: Image */}
      <div className="w-full lg:w-2/5 order-2 lg:order-1 lg:mt-20">
        <img
          src={aboutUsImage}
          alt="About Us"
          className="w-full rounded-lg lg:ml-8 shadow-lg"
        />
      </div>

      {/* Right Section: All Content */}
      <div className="w-full lg:w-3/5 order-1 lg:order-2 lg:pl-16">
        {/* Heading */}
        <h2 className="text-2xl lg:text-3xl text-[#0090E1] mb-6 lg:mb-8 text-center lg:text-left font-bold">
          எங்களை பற்றி
        </h2>

        {/* Main Text */}
        <p className="text-base lg:text-lg leading-relaxed text-[#007A5C] text-center lg:text-left mb-6 lg:mb-8">
          {text}
        </p>

        {/* Values Section */}
        <ul className="space-y-3 md:space-y-4 text-base md:text-lg text-gray-600 mb-6 md:mb-8 px-2 md:px-0">
          {values.map(({ title, description, Icon }, index) => (
            <li
              key={index}
              className="flex items-start md:items-center transition-all duration-300 hover:text-green-600 hover:shadow-lg p-2 md:p-3 rounded group"
            >
              <div className="w-8 h-8 mr-3 flex items-center justify-center rounded-full bg-gray-100 group-hover:bg-green-100 transition-colors duration-300">
                <Icon className="w-5 h-5 text-gray-600 group-hover:text-green-600" />
              </div>
              <div className="flex flex-col md:flex-row md:items-center">
                <span className="font-bold md:mr-1">{title}:</span>
                <span className="text-sm md:text-lg">{description}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <Link to="/aboutus" className="w-full lg:w-auto">
            <button className="w-full lg:w-auto bg-[#007A5C] text-white px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg rounded hover:bg-[#00663D] transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              மேலும் அறிய
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
