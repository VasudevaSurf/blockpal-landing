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
        className="text-white relative pt-16 sm:pt-24 md:pt-32 lg:pt-40 xl:pt-48 hide-scrollbar"
        style={{
          backgroundColor: "#090804",
          overflowX: "hidden",
          overflowY: "auto",
          scrollbarWidth: "none" /* Firefox */,
          msOverflowStyle: "none" /* IE and Edge */,
          minHeight: "100vh", // Mobile compact, desktop will use natural height
        }}
      >
        {/* Corner frame images - Keep for all screens but scale better */}
        {/* Top Left Frame */}
        <div className="absolute top-0 left-0 w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[30rem] 2xl:w-[40rem] h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[40rem] pointer-events-none z-30">
          <img
            src="/frameLeft.png"
            alt="Left frame decoration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Top Right Frame */}
        <div className="absolute top-0 right-0 w-48 sm:w-64 md:w-80 lg:w-96 xl:w-[30rem] 2xl:w-[40rem] h-48 sm:h-64 md:h-80 lg:h-96 xl:h-[30rem] 2xl:h-[40rem] pointer-events-none z-30">
          <img
            src="/frameRight.png"
            alt="Right frame decoration"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Hero Content - Responsive positioning with space above and content pushed down */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] sm:min-h-[calc(100vh-5rem)] lg:min-h-[calc(100vh-6rem)] px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-5xl mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-28 xl:pt-36 relative">
            {/* Background with responsive wave image - brought closer to heading */}
            <div className="absolute top-[-10rem] sm:top-[-8rem] md:top-[-10rem] lg:top-[-12rem] xl:top-[-14rem] left-1/2 transform -translate-x-1/2 w-[200%] sm:w-[180%] md:w-[160%] lg:w-[140%] xl:w-[120%] h-[12rem] sm:h-[16rem] md:h-[18rem] lg:h-[20rem] xl:h-[24rem] pointer-events-none z-0">
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

            {/* Container 1: Heading and Caption with proper spacing for mobile */}
            <div
              className="flex flex-col items-center relative"
              style={{ gap: "20px" }}
            >
              {/* Main Heading - Using Nunito font - adjusted positioning */}
              <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-bold leading-[1.1] tracking-tight relative z-10 px-2 mt-2 sm:mt-0">
                <span className="text-white">Blockpal : </span>
                <span className="text-gray-200">Your All-in-One</span>
                <br />
                <span className="text-gray-200">Crypto Ecosystem</span>
              </h1>

              {/* Caption/Description with dotted background - Using Satoshi font */}
              <div className="relative max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto">
                {/* Union.png background positioned behind caption - more visible on mobile */}
                <div className="absolute -top-4 sm:-top-12 md:-top-16 lg:-top-20 xl:-top-24 2xl:-top-28 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center pointer-events-none z-0">
                  <img
                    src="/Union.png"
                    alt="Dotted background decoration"
                    className="w-full h-auto object-contain opacity-70 sm:opacity-80"
                    style={{
                      minWidth: "300px", // Better for mobile
                      width: "clamp(300px, 200vw, 1400px)", // Wider on mobile
                      maxHeight: "none",
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

            {/* 40px gap between containers - responsive */}
            <div className="h-6 sm:h-8 md:h-10 lg:h-12 xl:h-16"></div>

            {/* Union.png background for mobile buttons and image section */}
            <div className="relative sm:contents">
              {/* Union background for mobile only - positioned behind buttons and main image */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full flex items-center justify-center pointer-events-none z-0 sm:hidden">
                <img
                  src="/Union.png"
                  alt="Mobile background decoration"
                  className="w-full h-auto object-contain opacity-50"
                  style={{
                    minWidth: "350px",
                    width: "clamp(350px, 180vw, 600px)",
                    maxHeight: "none",
                  }}
                />
              </div>

              {/* Container 2: Buttons with 12px horizontal gap - smaller buttons with Satoshi font */}
              <div className="flex flex-col sm:flex-row justify-center items-center relative z-10 gap-3 sm:gap-4 md:gap-3 lg:gap-3 xl:gap-3">
                <button className="font-body bg-yellow-400 text-black px-4 sm:px-3 md:px-4 lg:px-4 xl:px-4 py-2 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 rounded-full font-semibold text-sm sm:text-xs md:text-sm lg:text-sm hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25 w-full sm:w-auto min-w-[120px] sm:min-w-[85px] md:min-w-[95px]">
                  Get Started
                </button>
                <button className="font-body border border-gray-500 text-white px-4 sm:px-3 md:px-4 lg:px-4 xl:px-4 py-2 sm:py-1.5 md:py-2 lg:py-2 xl:py-2 rounded-full font-semibold text-sm sm:text-xs md:text-sm lg:text-sm hover:border-yellow-400 hover:text-yellow-400 hover:shadow-lg hover:shadow-yellow-400/10 transition-all duration-300 transform hover:scale-105 w-full sm:w-auto min-w-[120px] sm:min-w-[85px] md:min-w-[95px]">
                  Try Demo
                </button>
              </div>

              {/* Mobile-only gap between buttons and main image */}
              <div className="h-8 sm:h-0"></div>

              {/* Negative gap to move image up and overlap slightly - responsive */}
              <div className="mt-0 sm:mt-[-80px] md:mt-[-100px] lg:mt-[-115px] xl:mt-[-115px]"></div>

              {/* Container 3: Main Page Image */}
              <div className="relative z-10 flex justify-center items-center px-2 sm:px-0">
                <div className="relative w-full max-w-sm sm:max-w-lg md:max-w-2xl lg:max-w-3xl xl:max-w-4xl">
                  <img
                    src="/mainPage.png"
                    alt="Blockpal Main Interface"
                    className="w-full h-auto object-contain rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl xl:rounded-2xl"
                    style={{
                      filter:
                        "drop-shadow(0 15px 35px rgba(0, 0, 0, 0.4)) sm:drop-shadow(0 20px 40px rgba(0, 0, 0, 0.5)) md:drop-shadow(0 22px 45px rgba(0, 0, 0, 0.55)) lg:drop-shadow(0 25px 50px rgba(0, 0, 0, 0.6))",
                      maskImage:
                        "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
                      WebkitMaskImage:
                        "linear-gradient(to bottom, black 0%, black 70%, transparent 100%)",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Mobile: no spacing, Desktop: proper spacing */}
            <div className="h-0 sm:h-6 md:h-8 lg:h-10 xl:h-12"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
