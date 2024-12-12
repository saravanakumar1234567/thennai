import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { Shield, Users, Lightbulb, Award } from "lucide-react";
import { useInView } from "react-intersection-observer"; // Lazy Hydration
import aboutUsImage from '../assets/Aboutus.jpg';

const AboutUs = () => {
  const [text, setText] = useState("");
  const fullText = `At Thennai, we're dedicated to supporting coconut 
farmers with the knowledge, tools, and community 
connections needed to thrive. Our mission is to provide 
resources and innovative solutions that make farming 
easier, more profitable and sustainable for future 
generations.`;

  // Lazy hydration states
  const { ref: contentRef, inView: isContentInView } = useInView({
    triggerOnce: true, // Hydrate only once
    threshold: 0.1,    // Trigger when 10% of the component is in view
  });

  // Define the values array with corresponding icons
  const values = [
    {
      title: "Integrity",
      description: "Upholding honesty, ethics, and transparency  in all we do.",
      Icon: Shield
    },
    {
      title: "Collaboration",
      description: "Sharing skills and knowledge to grow and succeed together.",
      Icon: Users
    },
    {
      title: "Innovation",
      description: "Embracing creativity and continuous improvement to stay ahead.",
      Icon: Lightbulb
    },
    {
      title: "Accountability",
      description: "Taking pride and responsibility for our work and outcomes.",
      Icon: Award
    }
  ];

  useEffect(() => {
    if (isContentInView) {
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
    }
  }, [isContentInView]);

  return (
    <section
      className="flex flex-col lg:flex-row items-start justify-center p-4 lg:p-8 gap-8"
      ref={contentRef}
    >
      {isContentInView && (
        <>
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
              About Us
            </h2>

            {/* Main Text */}
            <p className="text-base lg:text-lg leading-relaxed text-[#007A5C] text-center lg:text-left mb-6 lg:mb-8 flex justify-text ">
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
                  Know More
                </button>
              </Link>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default AboutUs;
