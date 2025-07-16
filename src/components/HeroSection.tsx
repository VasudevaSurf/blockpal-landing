"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background with horizontally stretched wave image */}
      <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-[32rem]">
        <img
          src="/bgAbove.png"
          alt="Background wave design"
          className="w-full h-full object-cover"
          style={{
            maskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage:
              "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 35%, rgba(0,0,0,0.6) 65%, rgba(0,0,0,0) 100%)",
          }}
        />
      </div>

      {/* Hero Content - Positioned slightly inside the wave */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-4xl mx-auto pt-40">
          {/* Main Heading - Slightly smaller font size */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="text-white">Blockpal : </span>
            <span className="text-gray-200">Your All-in-One</span>
            <br />
            <span className="text-gray-200">Crypto Ecosystem</span>
          </h1>

          {/* Description - Slightly smaller font size */}
          <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed font-normal px-4">
            Trade, automate Transactions, research, and connect everything you
            need. Blockpal is your all-in-one crypto ecosystem, empowering you
            to trade, automate transactions, research , and connect with your
            community. No more juggling multiple apps or platforms Blockpal
            brings everything seamlessly under one roof
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-yellow-400 text-black px-8 py-3 rounded-full font-semibold text-base hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25 w-full sm:w-auto min-w-[130px]">
              Get Started
            </button>
            <button className="border border-gray-500 text-white px-8 py-3 rounded-full font-semibold text-base hover:border-yellow-400 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[130px]">
              Try Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
