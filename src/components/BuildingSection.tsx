"use client";
import React from "react";

const BuildingSection: React.FC = () => {
  return (
    <div
      className="min-h-screen text-white relative py-6 sm:py-8 lg:py-12"
      style={{
        backgroundColor: "#090804",
        fontFamily: "Satoshi, sans-serif",
      }}
    >
      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-left mb-6 sm:mb-8 lg:mb-10">
          <h2
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold leading-tight"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            <span className="text-[#EDEDED]">
              Blockpal is Building the Future{" "}
            </span>
            <span className="text-[#7D7D7D]">of an</span>
            <br />
            <span className="text-[#7D7D7D]">all-in-one Crypto Ecosystem</span>
          </h2>
        </div>

        {/* Development Phases Flow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Union.png Background Image - Positioned in the middle */}
          <div
            className="absolute inset-0 flex items-center justify-center pointer-events-none z-0"
            style={{
              backgroundImage: "url('/union.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              opacity: 0.3, // Adjust opacity as needed
            }}
          ></div>

          {/* Central Timeline Line - Now Dotted */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-[2px] h-full hidden lg:block z-1"
            style={{
              background: `repeating-linear-gradient(
                to bottom,
                #FBBF24CC 0px,
                #FBBF24CC 2px,
                transparent 2px,
                transparent 4px
              )`,
            }}
          ></div>

          {/* Connecting Lines Container */}
          <div className="absolute inset-0 pointer-events-none z-1">
            {/* Center to Phase 1 (Left) - Dotted line left from center */}
            <svg
              className="absolute top-[80px] left-1/2 transform -translate-x-1/2 w-[250px] h-[2px] hidden lg:block"
              viewBox="0 0 250 2"
            >
              <line
                x1="125"
                y1="1"
                x2="0"
                y2="1"
                stroke="#E2AF19"
                strokeWidth="2"
                strokeDasharray="2,2"
                opacity="0.8"
              />
            </svg>

            {/* Center to Phase 2 (Right) - Dotted line right from center */}
            <svg
              className="absolute top-[240px] left-1/2 transform -translate-x-1/2 w-[250px] h-[2px] hidden lg:block"
              viewBox="0 0 250 2"
            >
              <line
                x1="125"
                y1="1"
                x2="250"
                y2="1"
                stroke="#E2AF19"
                strokeWidth="2"
                strokeDasharray="2,2"
                opacity="0.8"
              />
            </svg>

            {/* Center to Phase 3 (Left) - Dotted line left from center */}
            <svg
              className="absolute top-[410px] left-1/2 transform -translate-x-1/2 w-[250px] h-[2px] hidden lg:block"
              viewBox="0 0 250 2"
            >
              <line
                x1="125"
                y1="1"
                x2="0"
                y2="1"
                stroke="#E2AF19"
                strokeWidth="2"
                strokeDasharray="2,2"
                opacity="0.8"
              />
            </svg>

            {/* Center to Phase 4 (Right) - Dotted line right from center */}
            <svg
              className="absolute top-[575px] left-1/2 transform -translate-x-1/2 w-[250px] h-[2px] hidden lg:block"
              viewBox="0 0 250 2"
            >
              <line
                x1="125"
                y1="1"
                x2="250"
                y2="1"
                stroke="#E2AF19"
                strokeWidth="2"
                strokeDasharray="2,2"
                opacity="0.8"
              />
            </svg>

            {/* Center to Phase 5 (Left) - Dotted line left from center */}
            <svg
              className="absolute top-[730px] left-1/2 transform -translate-x-1/2 w-[250px] h-[2px] hidden lg:block"
              viewBox="0 0 250 2"
            >
              <line
                x1="125"
                y1="1"
                x2="0"
                y2="1"
                stroke="#E2AF19"
                strokeWidth="2"
                strokeDasharray="2,2"
                opacity="0.8"
              />
            </svg>
          </div>

          {/* Phase 1 - Foundation Core Features (Left) */}
          <div className="relative z-10 mb-5 lg:mb-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
              <div className="w-full lg:w-[300px] order-2 lg:order-1">
                <div
                  className="p-4 relative overflow-hidden"
                  style={{
                    borderRadius: "16px",
                    border: "1px solid rgba(226, 175, 25, 0.40)",
                    background: "rgba(34, 34, 34, 0.30)",
                    backdropFilter: "blur(12px)",
                    fontFamily: "Satoshi, sans-serif",
                  }}
                >
                  {/* Small brightness glow on right side */}
                  <div
                    className="absolute top-1/2 right-0 transform -translate-y-1 pointer-events-none w-32 h-36 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 150% 200% at 70% 50%, rgba(226, 175, 25, 0.025) 0%, rgba(226, 175, 25, 0.012) 10%, rgba(226, 175, 25, 0.006) 20%, rgba(226, 175, 25, 0.003) 35%, transparent 60%)",
                      filter: "blur(20px)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-1 transform -translate-y-1 pointer-events-none w-24 h-32 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 140% 180% at 60% 50%, rgba(251, 191, 36, 0.018) 0%, rgba(245, 158, 11, 0.010) 20%, rgba(226, 175, 25, 0.004) 40%, transparent 65%)",
                      filter: "blur(12px)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1 pointer-events-none w-16 h-24 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 120% 160% at 50% 50%, rgba(251, 191, 36, 0.015) 0%, rgba(245, 158, 11, 0.006) 30%, transparent 60%)",
                      filter: "blur(6px)",
                    }}
                  ></div>
                  {/* Phase Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {/* Bright glowing background circle */}
                      <div
                        className="absolute inset-0 w-10 h-10 rounded-full blur-sm"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.2) 30%, rgba(249, 115, 22, 0.1) 60%, transparent 100%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 w-10 h-10 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(253, 224, 71, 0.3) 0%, rgba(245, 158, 11, 0.15) 50%, transparent 100%)",
                        }}
                      ></div>

                      {/* Gradient Border Circle */}
                      <svg
                        className="absolute inset-0 z-10"
                        width="40"
                        height="40"
                        viewBox="0 0 54 55"
                        fill="none"
                      >
                        <circle
                          cx="27"
                          cy="27.5"
                          r="26.5"
                          stroke="url(#paint0_linear_100_452)"
                          strokeOpacity="0.7"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_100_452"
                            x1="27"
                            y1="-1"
                            x2="27"
                            y2="60"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="0.346297"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.5"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.625191"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Robot Icon */}
                      <svg
                        className="relative z-20"
                        width="18"
                        height="19"
                        viewBox="0 0 26 27"
                        fill="none"
                      >
                        <path
                          d="M12.9974 9.16634V4.83301H8.66406"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.16406 15.667H4.33073"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.6641 15.667H23.8307"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.499 9.16699C20.6955 9.16717 21.665 10.1375 21.665 11.334V20C21.665 21.1965 20.6955 22.1668 19.499 22.167H6.49902C5.30241 22.167 4.33203 21.1966 4.33203 20V11.334C4.33203 10.1374 5.30241 9.16699 6.49902 9.16699H19.499ZM9.75 13.583C9.19772 13.583 8.75 14.0307 8.75 14.583V16.75C8.75018 17.3021 9.19782 17.75 9.75 17.75C10.3022 17.75 10.7498 17.3021 10.75 16.75V14.583C10.75 14.0307 10.3023 13.583 9.75 13.583ZM16.25 13.583C15.6977 13.583 15.25 14.0307 15.25 14.583V16.75C15.2502 17.3021 15.6978 17.75 16.25 17.75C16.8022 17.75 17.2498 17.3021 17.25 16.75V14.583C17.25 14.0307 16.8023 13.583 16.25 13.583Z"
                          fill="#F0F0F2"
                        />
                      </svg>
                    </div>
                    <div>
                      <div
                        className="inline-block px-2 py-1 text-xs text-gray-300 mb-1"
                        style={{
                          borderRadius: "999px",
                          background: "rgba(240, 240, 242, 0.07)",
                          border: "1px solid rgba(240, 240, 242, 0.12)",
                          fontFamily: "Satoshi, sans-serif",
                        }}
                      >
                        Phase 1
                      </div>
                      <h3
                        className="text-base font-bold text-white leading-tight"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Foundation Core Features
                      </h3>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M10.0026 2.13821C9.37127 1.93991 8.6994 1.83301 8.0026 1.83301C4.3207 1.83301 1.33594 4.81777 1.33594 8.49967C1.33594 12.1815 4.3207 15.1663 8.0026 15.1663C11.6845 15.1663 14.6693 12.1815 14.6693 8.49967C14.6693 7.80287 14.5623 7.13103 14.3641 6.49967"
                          stroke="#EEEEEE"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.66406 6.83333L7.9974 9.16667L13.9975 2.5"
                          stroke="#EEEEEE"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Launch of Blockpal DEX
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M10.0026 2.13821C9.37127 1.93991 8.6994 1.83301 8.0026 1.83301C4.3207 1.83301 1.33594 4.81777 1.33594 8.49967C1.33594 12.1815 4.3207 15.1663 8.0026 15.1663C11.6845 15.1663 14.6693 12.1815 14.6693 8.49967C14.6693 7.80287 14.5623 7.13103 14.3641 6.49967"
                          stroke="#EEEEEE"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.66406 6.83333L7.9974 9.16667L13.9975 2.5"
                          stroke="#EEEEEE"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Security Audits
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M10.0026 2.13821C9.37127 1.93991 8.6994 1.83301 8.0026 1.83301C4.3207 1.83301 1.33594 4.81777 1.33594 8.49967C1.33594 12.1815 4.3207 15.1663 8.0026 15.1663C11.6845 15.1663 14.6693 12.1815 14.6693 8.49967C14.6693 7.80287 14.5623 7.13103 14.3641 6.49967"
                          stroke="#EEEEEE"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.66406 6.83333L7.9974 9.16667L13.9975 2.5"
                          stroke="#EEEEEE"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Mobile App Launch
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty space for alignment on desktop */}
              <div className="hidden lg:block lg:w-[350px] order-1 lg:order-2"></div>
            </div>
          </div>

          {/* Phase 2 - Automation & Efficiency (Right) */}
          <div className="relative z-10 mb-5 lg:mb-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
              {/* Empty space for alignment on desktop */}
              <div className="hidden lg:block lg:w-[350px] order-1"></div>

              <div className="w-full lg:w-[300px] order-2 lg:ml-auto">
                <div
                  className="p-4 relative overflow-hidden"
                  style={{
                    borderRadius: "16px",
                    border: "1px solid rgba(226, 175, 25, 0.40)",
                    background: "rgba(34, 34, 34, 0.30)",
                    backdropFilter: "blur(12px)",
                    fontFamily: "Satoshi, sans-serif",
                  }}
                >
                  {/* Small brightness glow on right side */}
                  <div
                    className="absolute top-1/2 right-0 transform -translate-y-1 pointer-events-none w-32 h-36 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 150% 200% at 70% 50%, rgba(226, 175, 25, 0.025) 0%, rgba(226, 175, 25, 0.012) 10%, rgba(226, 175, 25, 0.006) 20%, rgba(226, 175, 25, 0.003) 35%, transparent 60%)",
                      filter: "blur(20px)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-1 transform -translate-y-1 pointer-events-none w-24 h-32 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 140% 180% at 60% 50%, rgba(251, 191, 36, 0.018) 0%, rgba(245, 158, 11, 0.010) 20%, rgba(226, 175, 25, 0.004) 40%, transparent 65%)",
                      filter: "blur(12px)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1 pointer-events-none w-16 h-24 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 120% 160% at 50% 50%, rgba(251, 191, 36, 0.015) 0%, rgba(245, 158, 11, 0.006) 30%, transparent 60%)",
                      filter: "blur(6px)",
                    }}
                  ></div>
                  {/* Phase Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {/* Bright glowing background circle */}
                      <div
                        className="absolute inset-0 w-10 h-10 rounded-full blur-sm"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.2) 30%, rgba(249, 115, 22, 0.1) 60%, transparent 100%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 w-10 h-10 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(253, 224, 71, 0.3) 0%, rgba(245, 158, 11, 0.15) 50%, transparent 100%)",
                        }}
                      ></div>

                      {/* Gradient Border Circle */}
                      <svg
                        className="absolute inset-0 z-10"
                        width="40"
                        height="40"
                        viewBox="0 0 54 55"
                        fill="none"
                      >
                        <circle
                          cx="27"
                          cy="27.5"
                          r="26.5"
                          stroke="url(#paint0_linear_100_453)"
                          strokeOpacity="0.7"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_100_453"
                            x1="27"
                            y1="-1"
                            x2="27"
                            y2="60"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="0.346297"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.5"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.625191"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Robot Icon */}
                      <svg
                        className="relative z-20"
                        width="18"
                        height="19"
                        viewBox="0 0 26 27"
                        fill="none"
                      >
                        <path
                          d="M12.9974 9.16634V4.83301H8.66406"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.16406 15.667H4.33073"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.6641 15.667H23.8307"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.499 9.16699C20.6955 9.16717 21.665 10.1375 21.665 11.334V20C21.665 21.1965 20.6955 22.1668 19.499 22.167H6.49902C5.30241 22.167 4.33203 21.1966 4.33203 20V11.334C4.33203 10.1374 5.30241 9.16699 6.49902 9.16699H19.499ZM9.75 13.583C9.19772 13.583 8.75 14.0307 8.75 14.583V16.75C8.75018 17.3021 9.19782 17.75 9.75 17.75C10.3022 17.75 10.7498 17.3021 10.75 16.75V14.583C10.75 14.0307 10.3023 13.583 9.75 13.583ZM16.25 13.583C15.6977 13.583 15.25 14.0307 15.25 14.583V16.75C15.2502 17.3021 15.6978 17.75 16.25 17.75C16.8022 17.75 17.2498 17.3021 17.25 16.75V14.583C17.25 14.0307 16.8023 13.583 16.25 13.583Z"
                          fill="#F0F0F2"
                        />
                      </svg>
                    </div>
                    <div>
                      <div
                        className="inline-block px-2 py-1 text-xs text-gray-300 mb-1"
                        style={{
                          borderRadius: "999px",
                          background: "rgba(240, 240, 242, 0.07)",
                          border: "1px solid rgba(240, 240, 242, 0.12)",
                          fontFamily: "Satoshi, sans-serif",
                        }}
                      >
                        Phase 2
                      </div>
                      <h3
                        className="text-base font-bold text-white leading-tight"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Automation & Efficiency
                      </h3>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M10.0026 2.13821C9.37127 1.93991 8.6994 1.83301 8.0026 1.83301C4.3207 1.83301 1.33594 4.81777 1.33594 8.49967C1.33594 12.1815 4.3207 15.1663 8.0026 15.1663C11.6845 15.1663 14.6693 12.1815 14.6693 8.49967C14.6693 7.80287 14.5623 7.13103 14.3641 6.49967"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.66406 6.83333L7.9974 9.16667L13.9975 2.5"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        DeFi Integration Tools
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M10.0026 2.13821C9.37127 1.93991 8.6994 1.83301 8.0026 1.83301C4.3207 1.83301 1.33594 4.81777 1.33594 8.49967C1.33594 12.1815 4.3207 15.1663 8.0026 15.1663C11.6845 15.1663 14.6693 12.1815 14.6693 8.49967C14.6693 7.80287 14.5623 7.13103 14.3641 6.49967"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.66406 6.83333L7.9974 9.16667L13.9975 2.5"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        API Gateway Launch
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 3 - Intelligence & Smart Tools (Left) */}
          <div className="relative z-10 mb-5 lg:mb-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
              <div className="w-full lg:w-[300px] order-2 lg:order-1">
                <div
                  className="p-4 relative overflow-hidden"
                  style={{
                    borderRadius: "16px",
                    border: "1px solid rgba(226, 175, 25, 0.40)",
                    background: "rgba(34, 34, 34, 0.30)",
                    backdropFilter: "blur(12px)",
                    fontFamily: "Satoshi, sans-serif",
                  }}
                >
                  {/* Small brightness glow on right side */}
                  <div
                    className="absolute top-1/2 right-0 transform -translate-y-1 pointer-events-none w-32 h-36 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 150% 200% at 70% 50%, rgba(226, 175, 25, 0.025) 0%, rgba(226, 175, 25, 0.012) 10%, rgba(226, 175, 25, 0.006) 20%, rgba(226, 175, 25, 0.003) 35%, transparent 60%)",
                      filter: "blur(20px)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-1 transform -translate-y-1 pointer-events-none w-24 h-32 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 140% 180% at 60% 50%, rgba(251, 191, 36, 0.018) 0%, rgba(245, 158, 11, 0.010) 20%, rgba(226, 175, 25, 0.004) 40%, transparent 65%)",
                      filter: "blur(12px)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1 pointer-events-none w-16 h-24 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 120% 160% at 50% 50%, rgba(251, 191, 36, 0.015) 0%, rgba(245, 158, 11, 0.006) 30%, transparent 60%)",
                      filter: "blur(6px)",
                    }}
                  ></div>
                  {/* Phase Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {/* Bright glowing background circle */}
                      <div
                        className="absolute inset-0 w-10 h-10 rounded-full blur-sm"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.2) 30%, rgba(249, 115, 22, 0.1) 60%, transparent 100%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 w-10 h-10 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(253, 224, 71, 0.3) 0%, rgba(245, 158, 11, 0.15) 50%, transparent 100%)",
                        }}
                      ></div>

                      {/* Gradient Border Circle */}
                      <svg
                        className="absolute inset-0 z-10"
                        width="40"
                        height="40"
                        viewBox="0 0 54 55"
                        fill="none"
                      >
                        <circle
                          cx="27"
                          cy="27.5"
                          r="26.5"
                          stroke="url(#paint0_linear_100_454)"
                          strokeOpacity="0.7"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_100_454"
                            x1="27"
                            y1="-1"
                            x2="27"
                            y2="60"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="0.346297"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.5"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.625191"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Robot Icon */}
                      <svg
                        className="relative z-20"
                        width="18"
                        height="19"
                        viewBox="0 0 26 27"
                        fill="none"
                      >
                        <path
                          d="M12.9974 9.16634V4.83301H8.66406"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.16406 15.667H4.33073"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.6641 15.667H23.8307"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.499 9.16699C20.6955 9.16717 21.665 10.1375 21.665 11.334V20C21.665 21.1965 20.6955 22.1668 19.499 22.167H6.49902C5.30241 22.167 4.33203 21.1966 4.33203 20V11.334C4.33203 10.1374 5.30241 9.16699 6.49902 9.16699H19.499ZM9.75 13.583C9.19772 13.583 8.75 14.0307 8.75 14.583V16.75C8.75018 17.3021 9.19782 17.75 9.75 17.75C10.3022 17.75 10.7498 17.3021 10.75 16.75V14.583C10.75 14.0307 10.3023 13.583 9.75 13.583ZM16.25 13.583C15.6977 13.583 15.25 14.0307 15.25 14.583V16.75C15.2502 17.3021 15.6978 17.75 16.25 17.75C16.8022 17.75 17.2498 17.3021 17.25 16.75V14.583C17.25 14.0307 16.8023 13.583 16.25 13.583Z"
                          fill="#F0F0F2"
                        />
                      </svg>
                    </div>
                    <div>
                      <div
                        className="inline-block px-2 py-1 text-xs text-gray-300 mb-1"
                        style={{
                          borderRadius: "999px",
                          background: "rgba(240, 240, 242, 0.07)",
                          border: "1px solid rgba(240, 240, 242, 0.12)",
                          fontFamily: "Satoshi, sans-serif",
                        }}
                      >
                        Phase 3
                      </div>
                      <h3
                        className="text-base font-bold text-white leading-tight"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Intelligence & Smart Tools
                      </h3>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M10.0026 2.13821C9.37127 1.93991 8.6994 1.83301 8.0026 1.83301C4.3207 1.83301 1.33594 4.81777 1.33594 8.49967C1.33594 12.1815 4.3207 15.1663 8.0026 15.1663C11.6845 15.1663 14.6693 12.1815 14.6693 8.49967C14.6693 7.80287 14.5623 7.13103 14.3641 6.49967"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.66406 6.83333L7.9974 9.16667L13.9975 2.5"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Risk Assessment Tools
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M10.0026 2.13821C9.37127 1.93991 8.6994 1.83301 8.0026 1.83301C4.3207 1.83301 1.33594 4.81777 1.33594 8.49967C1.33594 12.1815 4.3207 15.1663 8.0026 15.1663C11.6845 15.1663 14.6693 12.1815 14.6693 8.49967C14.6693 7.80287 14.5623 7.13103 14.3641 6.49967"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.66406 6.83333L7.9974 9.16667L13.9975 2.5"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Smart Trading Alerts
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty space for alignment on desktop */}
              <div className="hidden lg:block lg:w-[350px] order-1 lg:order-2"></div>
            </div>
          </div>

          {/* Phase 4 - Privacy & Control (Right) */}
          <div className="relative z-10 mb-5 lg:mb-6">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
              {/* Empty space for alignment on desktop */}
              <div className="hidden lg:block lg:w-[350px] order-1"></div>

              <div className="w-full lg:w-[300px] order-2 lg:ml-auto">
                <div
                  className="p-4 relative overflow-hidden"
                  style={{
                    borderRadius: "16px",
                    border: "1px solid rgba(226, 175, 25, 0.40)",
                    background: "rgba(34, 34, 34, 0.30)",
                    backdropFilter: "blur(12px)",
                    fontFamily: "Satoshi, sans-serif",
                  }}
                >
                  {/* Small brightness glow on right side */}
                  <div
                    className="absolute top-1/2 right-0 transform -translate-y-1 pointer-events-none w-32 h-36 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 150% 200% at 70% 50%, rgba(226, 175, 25, 0.025) 0%, rgba(226, 175, 25, 0.012) 10%, rgba(226, 175, 25, 0.006) 20%, rgba(226, 175, 25, 0.003) 35%, transparent 60%)",
                      filter: "blur(20px)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-1 transform -translate-y-1 pointer-events-none w-24 h-32 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 140% 180% at 60% 50%, rgba(251, 191, 36, 0.018) 0%, rgba(245, 158, 11, 0.010) 20%, rgba(226, 175, 25, 0.004) 40%, transparent 65%)",
                      filter: "blur(12px)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1 pointer-events-none w-16 h-24 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 120% 160% at 50% 50%, rgba(251, 191, 36, 0.015) 0%, rgba(245, 158, 11, 0.006) 30%, transparent 60%)",
                      filter: "blur(6px)",
                    }}
                  ></div>
                  {/* Phase Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {/* Bright glowing background circle */}
                      <div
                        className="absolute inset-0 w-10 h-10 rounded-full blur-sm"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.2) 30%, rgba(249, 115, 22, 0.1) 60%, transparent 100%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 w-10 h-10 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(253, 224, 71, 0.3) 0%, rgba(245, 158, 11, 0.15) 50%, transparent 100%)",
                        }}
                      ></div>

                      {/* Gradient Border Circle */}
                      <svg
                        className="absolute inset-0 z-10"
                        width="40"
                        height="40"
                        viewBox="0 0 54 55"
                        fill="none"
                      >
                        <circle
                          cx="27"
                          cy="27.5"
                          r="26.5"
                          stroke="url(#paint0_linear_100_455)"
                          strokeOpacity="0.7"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_100_455"
                            x1="27"
                            y1="-1"
                            x2="27"
                            y2="60"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="0.346297"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.5"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.625191"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Robot Icon */}
                      <svg
                        className="relative z-20"
                        width="18"
                        height="19"
                        viewBox="0 0 26 27"
                        fill="none"
                      >
                        <path
                          d="M12.9974 9.16634V4.83301H8.66406"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.16406 15.667H4.33073"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.6641 15.667H23.8307"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.499 9.16699C20.6955 9.16717 21.665 10.1375 21.665 11.334V20C21.665 21.1965 20.6955 22.1668 19.499 22.167H6.49902C5.30241 22.167 4.33203 21.1966 4.33203 20V11.334C4.33203 10.1374 5.30241 9.16699 6.49902 9.16699H19.499ZM9.75 13.583C9.19772 13.583 8.75 14.0307 8.75 14.583V16.75C8.75018 17.3021 9.19782 17.75 9.75 17.75C10.3022 17.75 10.7498 17.3021 10.75 16.75V14.583C10.75 14.0307 10.3023 13.583 9.75 13.583ZM16.25 13.583C15.6977 13.583 15.25 14.0307 15.25 14.583V16.75C15.2502 17.3021 15.6978 17.75 16.25 17.75C16.8022 17.75 17.2498 17.3021 17.25 16.75V14.583C17.25 14.0307 16.8023 13.583 16.25 13.583Z"
                          fill="#F0F0F2"
                        />
                      </svg>
                    </div>
                    <div>
                      <div
                        className="inline-block px-2 py-1 text-xs text-gray-300 mb-1"
                        style={{
                          borderRadius: "999px",
                          background: "rgba(240, 240, 242, 0.07)",
                          border: "1px solid rgba(240, 240, 242, 0.12)",
                          fontFamily: "Satoshi, sans-serif",
                        }}
                      >
                        Phase 4
                      </div>
                      <h3
                        className="text-base font-bold text-white leading-tight"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Privacy & Control
                      </h3>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M10.0026 2.13821C9.37127 1.93991 8.6994 1.83301 8.0026 1.83301C4.3207 1.83301 1.33594 4.81777 1.33594 8.49967C1.33594 12.1815 4.3207 15.1663 8.0026 15.1663C11.6845 15.1663 14.6693 12.1815 14.6693 8.49967C14.6693 7.80287 14.5623 7.13103 14.3641 6.49967"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.66406 6.83333L7.9974 9.16667L13.9975 2.5"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Multi-Signature Wallet Support
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M10.0026 2.13821C9.37127 1.93991 8.6994 1.83301 8.0026 1.83301C4.3207 1.83301 1.33594 4.81777 1.33594 8.49967C1.33594 12.1815 4.3207 15.1663 8.0026 15.1663C11.6845 15.1663 14.6693 12.1815 14.6693 8.49967C14.6693 7.80287 14.5623 7.13103 14.3641 6.49967"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.66406 6.83333L7.9974 9.16667L13.9975 2.5"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Decentralized Identity Management
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Phase 5 - Community & Social (Left) */}
          <div className="relative z-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-4 lg:gap-6">
              <div className="w-full lg:w-[300px] order-2 lg:order-1">
                <div
                  className="p-4 relative overflow-hidden"
                  style={{
                    borderRadius: "16px",
                    border: "1px solid rgba(226, 175, 25, 0.40)",
                    background: "rgba(34, 34, 34, 0.30)",
                    backdropFilter: "blur(12px)",
                    fontFamily: "Satoshi, sans-serif",
                  }}
                >
                  {/* Small brightness glow on right side */}
                  <div
                    className="absolute top-1/2 right-0 transform -translate-y-1 pointer-events-none w-32 h-36 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 150% 200% at 70% 50%, rgba(226, 175, 25, 0.025) 0%, rgba(226, 175, 25, 0.012) 10%, rgba(226, 175, 25, 0.006) 20%, rgba(226, 175, 25, 0.003) 35%, transparent 60%)",
                      filter: "blur(20px)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-1 transform -translate-y-1 pointer-events-none w-24 h-32 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 140% 180% at 60% 50%, rgba(251, 191, 36, 0.018) 0%, rgba(245, 158, 11, 0.010) 20%, rgba(226, 175, 25, 0.004) 40%, transparent 65%)",
                      filter: "blur(12px)",
                    }}
                  ></div>
                  <div
                    className="absolute top-1/2 right-3 transform -translate-y-1 pointer-events-none w-16 h-24 rounded-full"
                    style={{
                      background:
                        "radial-gradient(ellipse 120% 160% at 50% 50%, rgba(251, 191, 36, 0.015) 0%, rgba(245, 158, 11, 0.006) 30%, transparent 60%)",
                      filter: "blur(6px)",
                    }}
                  ></div>
                  {/* Phase Header */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="relative w-10 h-10 flex items-center justify-center flex-shrink-0">
                      {/* Bright glowing background circle */}
                      {/* Bright glowing background circle */}
                      <div
                        className="absolute inset-0 w-10 h-10 rounded-full blur-sm"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(251, 191, 36, 0.4) 0%, rgba(251, 191, 36, 0.2) 30%, rgba(249, 115, 22, 0.1) 60%, transparent 100%)",
                        }}
                      ></div>
                      <div
                        className="absolute inset-0 w-10 h-10 rounded-full"
                        style={{
                          background:
                            "radial-gradient(circle, rgba(253, 224, 71, 0.3) 0%, rgba(245, 158, 11, 0.15) 50%, transparent 100%)",
                        }}
                      ></div>
                      {/* Gradient Border Circle */}
                      <svg
                        className="absolute inset-0 z-10"
                        width="40"
                        height="40"
                        viewBox="0 0 54 55"
                        fill="none"
                      >
                        <circle
                          cx="27"
                          cy="27.5"
                          r="26.5"
                          stroke="url(#paint0_linear_100_456)"
                          strokeOpacity="0.7"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_100_456"
                            x1="27"
                            y1="-1"
                            x2="27"
                            y2="60"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopColor="white" />
                            <stop
                              offset="0.346297"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.5"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop
                              offset="0.625191"
                              stopColor="white"
                              stopOpacity="0"
                            />
                            <stop offset="1" stopColor="white" />
                          </linearGradient>
                        </defs>
                      </svg>

                      {/* Robot Icon */}
                      <svg
                        className="relative z-20"
                        width="18"
                        height="19"
                        viewBox="0 0 26 27"
                        fill="none"
                      >
                        <path
                          d="M12.9974 9.16634V4.83301H8.66406"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M2.16406 15.667H4.33073"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M21.6641 15.667H23.8307"
                          stroke="#F0F0F2"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M19.499 9.16699C20.6955 9.16717 21.665 10.1375 21.665 11.334V20C21.665 21.1965 20.6955 22.1668 19.499 22.167H6.49902C5.30241 22.167 4.33203 21.1966 4.33203 20V11.334C4.33203 10.1374 5.30241 9.16699 6.49902 9.16699H19.499ZM9.75 13.583C9.19772 13.583 8.75 14.0307 8.75 14.583V16.75C8.75018 17.3021 9.19782 17.75 9.75 17.75C10.3022 17.75 10.7498 17.3021 10.75 16.75V14.583C10.75 14.0307 10.3023 13.583 9.75 13.583ZM16.25 13.583C15.6977 13.583 15.25 14.0307 15.25 14.583V16.75C15.2502 17.3021 15.6978 17.75 16.25 17.75C16.8022 17.75 17.2498 17.3021 17.25 16.75V14.583C17.25 14.0307 16.8023 13.583 16.25 13.583Z"
                          fill="#F0F0F2"
                        />
                      </svg>
                    </div>
                    <div>
                      <div
                        className="inline-block px-2 py-1 text-xs text-gray-300 mb-1"
                        style={{
                          borderRadius: "999px",
                          background: "rgba(240, 240, 242, 0.07)",
                          border: "1px solid rgba(240, 240, 242, 0.12)",
                          fontFamily: "Satoshi, sans-serif",
                        }}
                      >
                        Phase 5
                      </div>
                      <h3
                        className="text-base font-bold text-white leading-tight"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Community & Social
                      </h3>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M10.0026 2.13821C9.37127 1.93991 8.6994 1.83301 8.0026 1.83301C4.3207 1.83301 1.33594 4.81777 1.33594 8.49967C1.33594 12.1815 4.3207 15.1663 8.0026 15.1663C11.6845 15.1663 14.6693 12.1815 14.6693 8.49967C14.6693 7.80287 14.5623 7.13103 14.3641 6.49967"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.66406 6.83333L7.9974 9.16667L13.9975 2.5"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Community Groups Launch
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg
                        width="10"
                        height="11"
                        viewBox="0 0 16 17"
                        fill="none"
                      >
                        <path
                          d="M10.0026 2.13821C9.37127 1.93991 8.6994 1.83301 8.0026 1.83301C4.3207 1.83301 1.33594 4.81777 1.33594 8.49967C1.33594 12.1815 4.3207 15.1663 8.0026 15.1663C11.6845 15.1663 14.6693 12.1815 14.6693 8.49967C14.6693 7.80287 14.5623 7.13103 14.3641 6.49967"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                        />
                        <path
                          d="M5.66406 6.83333L7.9974 9.16667L13.9975 2.5"
                          stroke="#666666"
                          strokeOpacity="0.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span
                        className="text-gray-300 text-xs"
                        style={{ fontFamily: "Satoshi, sans-serif" }}
                      >
                        Ecosystem Partnerships
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Empty space for alignment on desktop */}
              <div className="hidden lg:block lg:w-[350px] order-1 lg:order-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuildingSection;
