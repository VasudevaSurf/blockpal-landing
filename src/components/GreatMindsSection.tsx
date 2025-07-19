"use client";
import React from "react";

const GreatMindsSection: React.FC = () => {
  const teamMembers = [
    {
      image: "/person1.png",
    },
    {
      image: "/person2.png",
    },
    {
      image: "/person3.png",
    },
    {
      image: "/person4.png",
    },
  ];

  return (
    <div
      className="min-h-screen text-white relative py-2 sm:py-6 lg:py-10 overflow-hidden"
      style={{
        backgroundColor: "#090804",
      }}
    >
      {/* Background image positioned behind the team photos - stable like HeroSection */}
      <div className="absolute top-18 sm:top-30 lg:top-42 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center pointer-events-none z-0">
        <img
          src="/greadMindsBg.png"
          alt="Great Minds background"
          className="w-full h-auto object-contain opacity-20"
          style={{
            minWidth: "800px",
            width: "clamp(800px, 120vw, 1200px)",
            filter: "brightness(0.6)",
            mixBlendMode: "overlay",
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.9) 80%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,0.3) 95%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 70%, rgba(0,0,0,0.9) 80%, rgba(0,0,0,0.7) 90%, rgba(0,0,0,0.3) 95%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">The Great Minds </span>
            <span className="text-gray-400">Behind</span>
            <br />
            <span className="text-gray-400">Our Work.</span>
          </h2>
        </div>

        {/* Team Members Grid - Staggered Layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`flex flex-col items-center group ${
                index % 2 === 0 ? "lg:mt-0" : "lg:mt-2"
              }`}
            >
              {/* Profile Image Container */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-yellow-400/20 to-yellow-600/20 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>

                {/* Image container with border */}
                <div
                  className="relative w-40 h-48 sm:w-44 sm:h-52 lg:w-48 lg:h-56 rounded-2xl overflow-hidden border border-white/10 group-hover:border-yellow-400/30 transition-all duration-500"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)",
                  }}
                >
                  <img
                    src={member.image}
                    alt={`Team member ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Subtle overlay for better visual effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GreatMindsSection;
