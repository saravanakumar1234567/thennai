import React from 'react';
import { motion } from 'framer-motion';
import '../components/FromTheBlog.css';

// சரியான இறக்குமதி ஒழுங்கைப் பயன்படுத்தி படங்களை இறக்குமதி செய்யவும்
import coconutFoodImage from '../assets/coconutfood.jpg'; 
import coconutoilImage from '../assets/coconutoil.jpg'; 
import coconutmilkImage from '../assets/coconutmilk.jpg'; 
import coconutcareImage from '../assets/skincare.jpg'; 

// குறைந்த உள்ளடக்கம் கொண்ட மாதிரி வலைப்பதிவு தரவு
const blogPosts = [
  {
    title: "தேங்காய் நீர்: இயற்கையின் சிறந்த குடிநீர்",
    description: "தேங்காய் நீரின் அதிசயமான ஆரோக்கிய பயன்களை அறிந்து கொள்ளுங்கள், உடல்நலத்தை மேம்படுத்துதல் முதல் எளிதாக நீரேற்றம் செய்யும் வரை.",
    image: coconutFoodImage, // இறக்குமதி செய்யப்பட்ட படத்தைப் பயன்படுத்தவும்
    link: "https://medium.com/@thennai/coconut-water-natures-best-drink-206d3b922e10",
  },
  {
    title: "தேங்காய் எண்ணெய் உங்கள் தோல் ஆரோக்கியத்தை எப்படிக் காக்கிறது",
    description: "தேங்காய் எண்ணெய் இயற்கையாக உங்கள் தோல் இளமையாகவும் பிரகாசமாகவும் இருக்க உதவுகிறது என்பதை அறியுங்கள்.",
    image: coconutoilImage, // இறக்குமதி செய்யப்பட்ட படத்தைப் பயன்படுத்தவும்
    link: "https://medium.com/@thennai/how-coconut-oil-supports-your-skin-health-6273573a2b21",
  },
  {
    title: "தேங்காயின் 5 அதிசயமான ஆரோக்கிய பயன்கள்",
    description: "தேங்காய்களில் அவசியமான ஊட்டச்சத்துக்கள் நிறைந்துள்ளன, அவை பல்வேறு வழிகளில் உங்கள் உடல் நலத்தை மேம்படுத்த முடியும்.",
    image: coconutcareImage, // இறக்குமதி செய்யப்பட்ட படத்தைப் பயன்படுத்தவும்
    link: "https://medium.com/@thennai/1-boosts-heart-health-f30b6d4fde51",
  },
  {
    title: "பாரம்பரிய சமையலில் தேங்காயின் பங்கு",
    description: "உலகம் முழுவதும் உள்ள பல்வேறு பாரம்பரிய சமையல்களில் தேங்காயின் பயன்பாட்டை ஆராயுங்கள்.",
    image: coconutmilkImage, // இறக்குமதி செய்யப்பட்ட படத்தைப் பயன்படுத்தவும்
    link: "https://medium.com/@thennai/the-role-of-coconut-in-traditional-cooking-dbad103763c4",
  }
];

const FromTheBlog = () => {
  return (
    <div className="blog-container">
      <h2 className="blog-title">வலைப்பதிவிலிருந்து</h2>
      <h3 className="blog-subtitle">செய்திகள் & கட்டுரைகள்</h3>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <motion.div
            className="blog-post"
            key={index}
            whileHover={{ scale: 1.05 }} // ஹோவரில் அனிமேஷன்
            whileTap={{ scale: 0.95 }} // டாப்பில் அனிமேஷன்
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img className="blog-image" src={post.image} alt={post.title} />
            <div className="blog-content">
              <h4 className="blog-title">{post.title}</h4>
              <p className="blog-description">{post.description}</p>
              <a className="read-more" href={post.link}>மேலும் படிக்க</a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FromTheBlog;
