"use client";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      <div
        className="text-white relative pt-16 sm:pt-20 lg:pt-24 hide-scrollbar"
        style={{
          backgroundColor: "#090804",
          overflowX: "hidden",
          overflowY: "auto",
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE and Edge */,
          minHeight: "120vh", // Allow scrolling to show complete union
        }}
      >
        {/* Corner frame images */}
        {/* Top Left Frame */}
        <div className="absolute top-0 left-0 w-96 sm:w-[30rem] lg:w-[40rem] h-96 sm:h-[30rem] lg:h-[40rem] pointer-events-none z-30">
          <img
            src="/frameLeft.png"
            alt="Left frame decoration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Right Frame */}
        <div className="absolute top-0 right-0 w-96 sm:w-[30rem] lg:w-[40rem] h-96 sm:h-[30rem] lg:h-[40rem] pointer-events-none z-30">
          <img
            src="/frameRight.png"
            alt="Right frame decoration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content - Responsive positioning with space above and content pushed down */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto pt-20 sm:pt-28 lg:pt-36 relative">
            {/* Background with responsive wave image - moved further down */}
            <div className="absolute top-[-10rem] sm:top-[-12rem] lg:top-[-14rem] left-1/2 transform -translate-x-1/2 w-[160%] sm:w-[140%] lg:w-[120%] h-[16rem] sm:h-[20rem] lg:h-[24rem] pointer-events-none z-0">
              <img
                src="/bgAbove.png"
                alt="Background wave design"
                className="w-full h-full object-cover object-center"
                style={{
                  maskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.03) 85%, rgba(0,0,0,0.01) 95%, rgba(0,0,0,0) 100%)",
                  WebkitMaskImage:
                    "linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 20%, rgba(0,0,0,0.8) 35%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.25) 65%, rgba(0,0,0,0.1) 75%, rgba(0,0,0,0.03) 85%, rgba(0,0,0,0.01) 95%, rgba(0,0,0,0) 100%)",
                }}
              />
            </div>

            {/* Container 1: Heading and Caption with 20px gap */}
            <div
              className="flex flex-col items-center relative"
              style={{ gap: "20px" }}
            >
              {/* Main Heading - Using Nunito font */}
              <h1 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight relative z-10">
                <span className="text-white">Blockpal : </span>
                <span className="text-gray-200">Your All-in-One</span>
                <br />
                <span className="text-gray-200">Crypto Ecosystem</span>
              </h1>

              {/* Caption/Description with dotted background - Using Satoshi font */}
              <div className="relative max-w-3xl lg:max-w-4xl mx-auto">
                {/* Union.png background positioned behind caption - fully visible when scrolling */}
                <div className="absolute -top-16 sm:-top-20 md:-top-24 lg:-top-28 xl:-top-32 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center pointer-events-none z-0">
                  <img
                    src="/union.png"
                    alt="Dotted background decoration"
                    className="w-full h-auto object-contain opacity-80"
                    style={{
                      minWidth: "1000px",
                      width: "clamp(1000px, 150vw, 1400px)",
                      maxHeight: "none", // Allow full height
                    }}
                  />
                </div>

                <p className="font-body text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 mx-auto leading-relaxed font-normal px-2 sm:px-4 relative z-10">
                  Trade, automate Transactions, research, and connect everything
                  you need. Blockpal is your all-in-one crypto ecosystem,
                  empowering you to trade, automate transactions, research , and
                  connect with your community. No more juggling multiple apps or
                  platforms Blockpal brings everything seamlessly under one roof
                </p>
              </div>
            </div>

            {/* 40px gap between containers */}
            <div style={{ height: "40px" }}></div>

            {/* Container 2: Buttons with 12px horizontal gap - smaller buttons with Satoshi font */}
            <div
              className="flex flex-col sm:flex-row justify-center items-center relative z-10"
              style={{ gap: "12px" }}
            >
              <button className="font-body bg-yellow-400 text-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25 w-full sm:w-auto min-w-[85px] sm:min-w-[95px]">
                Get Started
              </button>
              <button className="font-body border border-gray-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs hover:border-yellow-400 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[85px] sm:min-w-[95px]">
                Try Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
