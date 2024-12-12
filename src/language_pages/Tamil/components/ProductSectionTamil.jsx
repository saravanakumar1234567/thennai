import React, { useEffect, useState } from "react";
import "../components/product.css";

// Import the .webp image
import ProductGif from "../../../assets/giphy.webp";

// Loading spinner component
const LoadingSpinner = () => (
  <div
    style={{
      border: "4px solid #f3f3f3",
      borderTop: "4px solid #4CAF50",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      animation: "spin 2s linear infinite",
    }}
  />
);

const ProductSectionTamil = () => {
  const [isVisible, setIsVisible] = useState(false);

  // ஸ்க்ரோல் கையாளல் மற்றும் பிரிவின் தோற்றம் கண்டறிதல்
  const handleScroll = () => {
    const section = document.getElementById("product-section");
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < window.innerHeight) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const products = [
    "தென்னை மரம் அறுவடை செய்யும் கருவி",
    "ஆக்ரோ-EV",
    "பொருள் 3",
  ];

  return (
    <section
      id="product-section"
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "60px 20px",
        flexWrap: "wrap",
        textAlign: "center",
      }}
    >
      {/* தலைப்பு மற்றும் பரிசோதனை */}
      <div style={{ width: "100%", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#0090E1",
          }}
        >
          முக்கிய பொருட்கள்
        </h2>

        <p style={{ fontSize: "18px", color: "#555" }}>
          நாங்கள் வழங்கும் பலவகை தேங்காய் சார்ந்த பொருட்களை ஆராய்க
        </p>
      </div>

      {/* பொருள் அட்டைகள் */}
      {products.map((product, index) => (
        <div
          key={index}
          className="product-card"
          style={{
            width: "300px",
            height: "400px",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
            textAlign: "center",
            padding: "20px",
            marginBottom: "20px",
            transform: isVisible ? "translateX(0)" : "translateX(-200px)",
            opacity: isVisible ? 1 : 0,
            transition: "all 1s ease-in-out",
            perspective: "1000px", // 3D விளைவுக்கான
          }}
        >
          <div
            style={{
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              transformStyle: "preserve-3d", // 3D இடத்தை பராமரிக்க
              transition: "transform 0.6s", // மாறுதல் விளைவுக்கான காலக்கெடு
            }}
            className="card-inner"
          >
            {/* முன் முகம் */}
            <div
              style={{
                position: "absolute",
                backfaceVisibility: "hidden",
                width: "100%",
                height: "100%",
              }}
            >
              <LoadingSpinner />
            </div>

            {/* பின்பக்கம் .webp படம் உடன் */}
            <div
              style={{
                position: "absolute",
                backfaceVisibility: "hidden",
                width: "100%",
                height: "100%",
                transform: "rotateY(180deg)", // மாறுதல் விளைவுக்கான மாறுதல்
              }}
            >
              <img
                src={ProductGif}
                alt="பொருள் அனிமேஷன்"
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>

          <h3 style={{ fontSize: "24px", marginBottom: "10px" }}>{product}</h3>
          <p style={{ color: "#555", fontSize: "16px" }}>எதிர்வரும்</p>
        </div>
      ))}
    </section>
  );
};
export default ProductSectionTamil;
