import React from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaBalanceScale, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// Import images
import teamImg from "../assets/team.png";
import missionImg from "../assets/mi.png";
import visionImg from "../assets/vi.png";
import cofounder1Img from "../assets/co1.png";
import cofounder2Img from "../assets/co2.png";

const AboutUs = () => {
  const coFounders = [
    {
      name: "Kalyan P R",
      designation: "Co-Founder - CEO",
      linkedin: "https://www.linkedin.com/in/kalyan-p-r-b99a81223/",
      image: cofounder1Img
    },
    {
      name: "Surendar B",
      designation: "Co-Founder - CTO",
      linkedin: "https://www.linkedin.com/in/surendar1895/",
      image: cofounder2Img
    }
  ];

  return (
    <div className="min-h-screen bg-black-50 font-['Space_Grotesk']">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#4CAF50] to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            About Us
          </motion.h1>
          <motion.p 
            className="text-xl text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            Innovate, Cultivate, Elevate
          </motion.p>
        </div>
      </header>

      {/* About Thennai Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h2 
              className="text-4xl font-bold text-[#0090E1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              About Thennai
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              At <strong>Thennai</strong>, we're dedicated to supporting coconut farmers with the knowledge, tools, and community connections needed to thrive. Our mission is to provide resources and innovative solutions that make farming easier, more profitable, and sustainable for future generations.
            </motion.p>
          </div>
          <motion.div 
            className="rounded-lg overflow-hidden "
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img src={teamImg} alt="Our Team" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={missionImg} alt="Our Mission" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#0090E1]">Our Mission</h2>
            <p className="text-gray-700">
              At <strong>Thennai</strong>, we aim to revolutionize farming by delivering innovative solutions that improve efficiency, increase profitability, and foster sustainability, thereby uplifting agriculture.
            </p>
          </motion.div>
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={visionImg} alt="Our Vision" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#0090E1]">Our Vision</h2>
            <p className="text-gray-700">
              Advancing agricultural innovations by transforming farming through technology-driven solutions for a sustainable future.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0090E1]">Key Values at Thennai</h2>
          <motion.div 
            className="grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[ 
              { icon: FaBalanceScale, title: "Integrity", desc: "Upholding honesty, ethics, and transparency in every action." },
              { icon: FaHandshake, title: "Collaboration", desc: "Sharing knowledge and fostering teamwork to achieve more." },
              { icon: FaLightbulb, title: "Innovation", desc: "Embracing creativity and continuous improvement in our work." },
              { icon: FaUsers, title: "Accountability", desc: "Taking ownership and pride in every task and project." }
            ].map((value, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.1 }}
              >
                <value.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Co-Founders Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0090E1]">Meet our Team</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {coFounders.map((founder, index) => (
              <motion.div 
                key={index} 
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
              >
                <div className="relative">
                  <img src={founder.image} alt={founder.name} className="w-full h-72 object-cover" />
                  <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <a href={founder.linkedin} target="_blank" rel="noopener noreferrer" className="text-white">
                      <FaLinkedin className="w-12 h-12 hover:text-blue-400 transition-colors" />
                    </a>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold mb-2">{founder.name}</h3>
                  <p className="text-gray-600">{founder.designation}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
