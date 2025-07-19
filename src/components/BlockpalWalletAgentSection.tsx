"use client";
import React from "react";

const BlockpalWalletAgentSection = () => {
  return (
    <div
      className="min-h-screen text-white relative overflow-hidden"
      style={{
        backgroundColor: "#090804",
      }}
    >
      {/* Whole Circle Effect */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-6xl h-96 pointer-events-none z-10">
        <img
          src="/wholeCircle.png"
          alt="Whole Circle Effect"
          className="w-full h-full object-contain opacity-60"
          style={{
            filter: "brightness(1.5)",
            mixBlendMode: "lighten",
          }}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen pt-5">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center min-h-screen">
          {/* Left Side - Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            <div className="space-y-4 max-w-md">
              {/* Main Heading */}
              <h1 className="font-heading text-xl sm:text-xl lg:text-4xl font-bold leading-tight">
                <span className="text-[#EDEDED] font-Nunito">
                  Blockpal Wallet{" "}
                </span>
                <span className="text-[#7D7D7D]">Agent</span>
                <br />
                <span className="text-[#7D7D7D]">for Telegram</span>
              </h1>

              {/* Description - Responsive */}
              <p className="font-satoshi text-xs sm:text-sm text-gray-300/80 leading-relaxed">
                Blockpal's Wallet Agent brings powerful crypto tools straight to
                Telegram. Send funds by username, schedule or batch payments,
                and check balances with simple natural language commands — no
                wallet addresses required. Designed for speed and security, the
                agent makes managing your assets as easy as chatting.
              </p>
              <p className="font-satoshi text-xs sm:text-sm text-gray-300/80 leading-relaxed">
                Whether you're handling personal transfers or distributing team
                rewards, Blockpal Wallet Agent delivers seamless, secure, and
                intuitive crypto management right inside the world's most
                familiar messaging.
              </p>

              {/* Join Telegram Button */}
              <div className="pt-2">
                <button className="font-body bg-yellow-400 text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-yellow-400/25">
                  Join Telegram
                </button>
              </div>
            </div>
          </div>

          {/* Right Side - Mobile Photo */}
          <div className="flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              <img
                src="/mobile-interface.png"
                alt="Blockpal Telegram Mobile Interface"
                className="w-72 sm:w-80 lg:w-96 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockpalWalletAgentSection;
