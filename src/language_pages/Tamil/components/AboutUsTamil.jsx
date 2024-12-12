import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Shield, Users, Lightbulb, Award } from "lucide-react";
import aboutUsImage from '../../../assets/Aboutus.jpg';

const AboutUsTamil = () => {
  const [text, setText] = useState("");
  const fullText = `தென்னை என்பது விவசாயிகளுக்கு உதவுவதற்காக அர்ப்பணிக்கப்பட்ட நிறுவனம். 
விவசாயத்தை எளிமையாக்க, லாபகரமாக்க மற்றும் எதிர்கால தலைமுறைகளுக்கான தத்துவத்துடன் செயற்கை வழிமுறைகள் 
மற்றும் ஆவணங்கள் வழங்குவதில் எங்கள் நோக்கம் உள்ளது.`;

  const values = [
    {
      title: "ஒருமைப்பாடு",
      description: "நேர்மை, நெறிமுறை மற்றும் தெளிவுடன் செயல்படுதல்.",
      Icon: Shield
    },
    {
      title: "ஒத்துழைப்பு",
      description: "திறன்கள் மற்றும் அறிவுகளைப் பகிர்ந்து வளர்ச்சி மற்றும் வெற்றிக்கு வழிவகுத்தல்.",
      Icon: Users
    },
    {
      title: "புதுமை",
      description: "புதுமை மற்றும் தொடர்ந்து முன்னேறுவதன் மூலம் முன்னேறுதல்.",
      Icon: Lightbulb
    },
    {
      title: "பெறுப்புத்தன்மை",
      description: "எங்கள் செயல்கள் மற்றும் முடிவுகளை பெருமையுடன் ஏற்றுக்கொள்வது.",
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
              <div className="flex flex-col md:flex-row md:items-start">
                <span className="font-bold md:mr-2 mb-1 md:mb-0">{title}:</span>
                <span className="text-sm md:text-lg">{description}</span>
              </div>
            </li>
          ))}
        </ul>

        {/* Button */}
        <div className="flex justify-center lg:justify-start">
          <Link to="/Aboutustamil" className="w-full lg:w-auto">
            <button className="w-full lg:w-auto bg-[#007A5C] text-white px-6 lg:px-8 py-2 lg:py-3 text-base lg:text-lg rounded hover:bg-[#00663D] transition-colors duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              மேலும் தெரிந்து கொள்ளுங்கள்
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutUsTamil;
