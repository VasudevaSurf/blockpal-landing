"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background gradient effects - Exact match to Figma */}
      <div className="absolute inset-0">
        {/* Main glowing yellow ellipse - positioned exactly like in Figma */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[1400px] h-[700px] rounded-full bg-gradient-to-br from-yellow-300/40 via-yellow-400/50 to-yellow-500/30 blur-[100px] animate-pulse"></div>
        </div>

        {/* Secondary glow layer */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[1000px] h-[500px] rounded-full bg-gradient-to-r from-yellow-400/30 via-yellow-300/40 to-yellow-200/25 blur-[80px]"></div>
        </div>

        {/* Dark inner ellipse - creates the depth effect */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3">
          <div className="w-[900px] h-[450px] rounded-full bg-black/70 blur-[60px]"></div>
        </div>

        {/* Inner dark core */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/4">
          <div className="w-[600px] h-[300px] rounded-full bg-black/80 blur-[40px]"></div>
        </div>

        {/* Dotted pattern overlay - exactly like in Figma */}
        <div
          className="absolute bottom-0 left-0 w-full h-80 opacity-20"
          style={{
            backgroundImage: `radial-gradient(circle, #404040 1.5px, transparent 1.5px)`,
            backgroundSize: "24px 24px",
            maskImage:
              "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 100%)",
          }}
        />

        {/* Additional subtle dots for texture */}
        <div
          className="absolute bottom-0 right-0 w-1/2 h-60 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, #606060 1px, transparent 1px)`,
            backgroundSize: "18px 18px",
            maskImage:
              "linear-gradient(45deg, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0) 70%)",
          }}
        />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-5xl mx-auto pt-20">
          {/* Main Heading - Exact typography from Figma */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 leading-[1.1] tracking-tight">
            <span className="text-white">Blockpal : </span>
            <span className="text-gray-300">Your All-in-One</span>
            <br />
            <span className="text-gray-300">Crypto Ecosystem</span>
          </h1>

          {/* Description - Exact text from Figma */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            Trade, automate Transactions, research, and connect everything you
            need. Blockpal is your all-in-one crypto ecosystem, empowering you
            to trade, automate transactions, research , and connect with your
            community. No more juggling multiple apps or platforms Blockpal
            brings everything seamlessly under one roof
          </p>

          {/* Call to Action Buttons - Exact styling from Figma */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <button className="bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25 w-full sm:w-auto min-w-[160px]">
              Get Started
            </button>
            <button className="border-2 border-gray-600 text-white px-10 py-4 rounded-full font-semibold text-lg hover:border-yellow-400 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[160px]">
              Try Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
