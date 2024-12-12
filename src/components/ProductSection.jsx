import React, { useEffect, useState } from "react";
import "../components/product.css";

// Import the .webp image
import ProductGif from "../assets/giphy.webp";

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

const ProductSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Handle scroll and detect if the section is visible
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
    "Palm tree harvesting tool",
    "Agro-EV (multi-purpose)",
    "Product 3",
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
      {/* Heading and Paragraph */}
      <div style={{ width: "100%", marginBottom: "40px" }}>
        <h2
          style={{
            fontSize: "36px",
            fontWeight: "bold",
            marginBottom: "20px",
            color: "#0090E1",
          }}
        >
          Featured Products
        </h2>

        <p style={{ fontSize: "18px", color: "#555" }}>
          Discover our wide range of coconut-based products
        </p>
      </div>

      {/* Product Cards */}
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
            perspective: "1000px", // For 3D effect
          }}
        >
          <div
            style={{
              height: "200px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
              transformStyle: "preserve-3d", // Preserve 3D space for the flip
              transition: "transform 0.6s", // Duration for flip effect
            }}
            className="card-inner"
          >
            {/* Front face */}
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

            {/* Back face with .webp image */}
            <div
              style={{
                position: "absolute",
                backfaceVisibility: "hidden",
                width: "100%",
                height: "100%",
                transform: "rotateY(180deg)", // Rotate for flip effect
              }}
            >
              <img
                src={ProductGif}
                alt="Product Animation"
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
          <p style={{ color: "#555", fontSize: "16px" }}>Coming Soon</p>
        </div>
      ))}
    </section>
  );
};

export default ProductSection;
