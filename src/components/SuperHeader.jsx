import React, { useState, useEffect } from "react";
import video from '../assets/header_video.mp4'

const SuperHeader = () => {
  const [offsetY, setOffsetY] = useState(0);

  const handleScroll = () => {
    setOffsetY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative w-screen h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <video
          src={video}
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 w-[calc(100%-1rem)] md:w-[calc(100%-6rem)] lg:w-[calc(100%-100px)] h-[80%] object-cover rounded-lg brightness-90 left-2 md:left-12 lg:left-[50px]"
          style={{
            transform: 'translateY(-50%)',
          }}
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center text-white p-4 md:p-12 lg:p-24 flex flex-col justify-center h-full">
        {/* Content Wrapper */}
        <div className="px-4 py-8 md:py-0 md:px-0">
          {/* Heading with Parallax */}
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[44px] font-bold mb-4 md:mb-7 lg:mb-8"
            style={{
              transform: `translateY(${offsetY * 0.2}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            <span className="block md:inline">Helping </span>
            <span className="text-orange-500">Coconut Farmers</span>
            <span className="block md:inline"> Grow with Smart Solutions</span>
            <br className="hidden md:block" />
            <span className="block mt-2 md:mt-0">and Community Support!</span>
          </h1>

          {/* Paragraph with Parallax */}
          <p
            className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 leading-relaxed max-w-[800px] mx-auto text-white"
            style={{
              transform: `translateY(${offsetY * 0.15}px)`,
              transition: "transform 0.1s ease-out",
            }}
          >
            Empowering farmers with cutting-edge tools and resources. Discover guides, live market
            prices, and a thriving community designed to help you grow.
          </p>

          {/* Call to Action with Parallax */}
          <a
  className="inline-block bg-[#0090E1] text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl font-bold shadow-lg hover:bg-[#007bc2] transition-all duration-300 mt-4 md:mt-6 lg:mt-8"
  style={{
    transform: `translateY(${offsetY * 0.2}px)`,
    transition: "transform 0.1s ease-out, background-color 0.3s ease, box-shadow 0.3s ease",
    willChange: "transform",
  }}
  onClick={() => {
    window.scrollBy({
      top: 700, // Scrolls down by 100px
      left: 0,   // No horizontal scroll
      behavior: 'smooth', // Smooth scrolling animation
    });
  }}
  onMouseEnter={(e) => {
    e.target.style.transform = `translateY(${offsetY * 0.1}px)`;
  }}
  onMouseLeave={(e) => {
    e.target.style.transform = `translateY(${offsetY * 0.1}px)`;
  }}
>
  Get Started
</a>

        </div>
      </div>
    </section>
  );
};

export default SuperHeader;