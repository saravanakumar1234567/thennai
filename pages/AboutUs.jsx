// React காம்போனெண்ட் கோப்பு - AboutUs.js

import React from "react";
import { FaHandshake, FaLightbulb, FaUsers, FaBalanceScale, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

// படங்களை இறக்குமதி செய்க
import teamImg from "../assets/team.png";
import missionImg from "../assets/mi.png";
import visionImg from "../assets/vi.png";
import cofounder1Img from "../assets/co1.png";
import cofounder2Img from "../assets/co2.png";

const AboutUs = () => {
  const coFounders = [
    {
      name: "கல்யாண் பி ஆர்",
      designation: "இணைநிறுவனர் - தலைமை நிர்வாக அதிகாரி",
      linkedin: "https://www.linkedin.com/in/kalyan-p-r-b99a81223/",
      image: cofounder1Img,
    },
    {
      name: "சுரேந்தர் பி",
      designation: "இணைநிறுவனர் - தொழில்நுட்பத் தலைவர்",
      linkedin: "https://www.linkedin.com/in/surendar1895/",
      image: cofounder2Img,
    },
  ];

  return (
    <div className="min-h-screen bg-black-50 font-['Space_Grotesk']">
      {/* தலைப்பு பகுதி */}
      <header className="bg-gradient-to-r from-[#4CAF50] to-green-800 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            எங்கள் பற்றி
          </motion.h1>
          <motion.p
            className="text-xl text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            புதுமை, வளர்ச்சி, உயர்வு
          </motion.p>
        </div>
      </header>

      {/* தென்னை பற்றி */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <motion.h2
              className="text-4xl font-bold text-[#0090E1]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              தென்னை பற்றி
            </motion.h2>
            <motion.p
              className="text-lg text-gray-700 leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
            >
              <strong>தென்னை</strong>யில், நாங்கள் தேங்காய் விவசாயிகளுக்கு
              அறிவு, கருவிகள் மற்றும் சமூகத் தொடர்புகளை வழங்க உறுதியாக இருக்கிறோம். நமது
              இலக்கு விவசாயத்தை எளிமையாக்கி, லாபகரமாகவும் நிலைத்தன்மையாகவும் மாற்றுவதாகும்.
            </motion.p>
          </div>
          <motion.div
            className="rounded-lg overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <img src={teamImg} alt="நமது குழு" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      {/* இலக்கு மற்றும் பார்வை */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <img src={missionImg} alt="எங்கள் இலக்கு" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#0090E1]">எங்கள் இலக்கு</h2>
            <p className="text-gray-700">
              <strong>தென்னை</strong>யின் மூலம் விவசாயத்தை வளர்ச்சியடையவும், லாபகரமாகவும், மற்றும்
              நிலைத்தன்மையாகவும் மாற்ற தொழில்நுட்ப தீர்வுகளை வழங்குவதே எங்கள் குறிக்கோளாகும்.
            </p>
          </motion.div>
          <motion.div
            className="bg-white rounded-lg shadow-lg p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <img src={visionImg} alt="எங்கள் பார்வை" className="w-full h-48 object-cover rounded-lg mb-6" />
            <h2 className="text-3xl font-bold mb-4 text-[#0090E1]">எங்கள் பார்வை</h2>
            <p className="text-gray-700">
              விவசாயத்திற்கு தொழில்நுட்ப தீர்வுகள் மூலம் புதுமையோடு நிலைத்த வருங்காலத்தை உருவாக்குவது எங்கள் நோக்கம்.
            </p>
          </motion.div>
        </div>
      </section>

      {/* முக்கிய மதிப்புகள் */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0090E1]">
            தென்னையின் முக்கியமான மதிப்புகள்
          </h2>
          <motion.div
            className="grid md:grid-cols-4 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {[
              {
                icon: FaBalanceScale,
                title: "நேர்மை",
                desc: "ஒவ்வொரு செயலிலும் நேர்மை, நெறிமுறைகள் மற்றும் வெளிப்பாட்டை பாதுகாத்தல்.",
              },
              {
                icon: FaHandshake,
                title: "ஒத்துழைப்பு",
                desc: "அறிவை பகிர்ந்து கொண்டு, குழுப் பணியை மேம்படுத்தல்.",
              },
              {
                icon: FaLightbulb,
                title: "புதுமை",
                desc: "நமது பணிகளில் படைப்பாற்றலை எப்போதும் வளர்த்தல்.",
              },
              {
                icon: FaUsers,
                title: "பெறுப்பேற்பு",
                desc: "ஒவ்வொரு பணிக்கும் உரிமையுடன் அணுகுதல்.",
              },
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

      {/* நிறுவனர் குழு */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#0090E1]">நமது குழுவை சந்திக்கவும்</h2>
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
                    <a
                      href={founder.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white"
                    >
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
