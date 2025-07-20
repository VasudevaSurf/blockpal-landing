"use client";
import React from "react";

const BlockpalWalletAgentSection = () => {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden pt-8 pb-4 sm:pt-6 sm:pb-6 md:pt-8 md:pb-8 lg:pt-12 lg:pb-10 xl:pt-16 xl:pb-12"
      style={{
        backgroundColor: "#090804",
      }}
    >
      {/* Whole Circle Effect - Responsive sizing */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl h-64 sm:h-80 md:h-96 pointer-events-none z-10">
        <img
          src="/wholeCircle.png"
          alt="Whole Circle Effect"
          className="w-full h-full object-contain opacity-40 sm:opacity-50 md:opacity-60"
          style={{
            filter: "brightness(1.3) sm:brightness(1.4) md:brightness(1.5)",
            mixBlendMode: "lighten",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%) sm:radial-gradient(ellipse at center, black 35%, transparent 75%) md:radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%) sm:radial-gradient(ellipse at center, black 35%, transparent 75%) md:radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 min-h-[calc(100vh-6rem)] sm:min-h-[calc(100vh-3rem)] lg:min-h-screen pt-2 sm:pt-4 lg:pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-6 items-center min-h-[calc(100vh-8rem)] sm:min-h-[calc(100vh-6rem)] lg:min-h-screen">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="space-y-3 sm:space-y-4 max-w-md">
              {/* Main Heading - Better mobile sizing */}
              <h1 className="font-heading text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold leading-tight">
                <span className="text-[#EDEDED] font-Nunito">
                  Blockpal Wallet{" "}
                </span>
                <span className="text-[#7D7D7D]">Agent</span>
                <br />
                <span className="text-[#7D7D7D]">for Telegram</span>
              </h1>

              {/* Description - Responsive sizing and spacing */}
              <div className="space-y-3 sm:space-y-4">
                <p className="font-satoshi text-xs sm:text-sm md:text-base text-gray-300/80 leading-relaxed">
                  Blockpal's Wallet Agent brings powerful crypto tools straight
                  to Telegram. Send funds by username, schedule or batch
                  payments, and check balances with simple natural language
                  commands — no wallet addresses required. Designed for speed
                  and security, the agent makes managing your assets as easy as
                  chatting.
                </p>
                <p className="font-satoshi text-xs sm:text-sm md:text-base text-gray-300/80 leading-relaxed">
                  Whether you're handling personal transfers or distributing
                  team rewards, Blockpal Wallet Agent delivers seamless, secure,
                  and intuitive crypto management right inside the world's most
                  familiar messaging.
                </p>
              </div>

              {/* Join Telegram Button - Mobile responsive */}
              <div className="pt-2 sm:pt-3">
                <button className="font-body bg-yellow-400 text-black px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-full font-semibold text-sm sm:text-base hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25 w-full sm:w-auto min-w-[140px]">
                  Join Telegram
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Mobile Photo - Better responsive sizing */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <img
                src="/mobile-interface.png"
                alt="Blockpal Telegram Mobile Interface"
                className="w-64 sm:w-72 md:w-80 lg:w-96 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockpalWalletAgentSection;
