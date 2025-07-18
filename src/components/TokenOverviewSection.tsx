"use client";
import React from "react";

const TokenOverviewSection: React.FC = () => {
  return (
    <div
      className="min-h-screen text-white relative py-16 sm:py-20 lg:py-24"
      style={{
        backgroundColor: "#090804",
      }}
    >
      {/* Top left edge fade effect - bright with perfect dissolution */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 1200px 900px at -400px -400px, rgba(226, 175, 25, 0.50) 0%, rgba(226, 175, 25, 0.45) 8%, rgba(226, 175, 25, 0.38) 15%, rgba(226, 175, 25, 0.30) 25%, rgba(226, 175, 25, 0.22) 35%, rgba(226, 175, 25, 0.15) 45%, rgba(226, 175, 25, 0.10) 55%, rgba(226, 175, 25, 0.06) 65%, rgba(226, 175, 25, 0.03) 75%, rgba(226, 175, 25, 0.015) 85%, rgba(226, 175, 25, 0.005) 95%, transparent 100%)",
        }}
      ></div>

      {/* Right middle fade effect - bright with perfect dissolution */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
        style={{
          background:
            "radial-gradient(ellipse 900px 1200px at calc(100% + 400px) 50%, rgba(226, 175, 25, 0.50) 0%, rgba(226, 175, 25, 0.45) 8%, rgba(226, 175, 25, 0.38) 15%, rgba(226, 175, 25, 0.30) 25%, rgba(226, 175, 25, 0.22) 35%, rgba(226, 175, 25, 0.15) 45%, rgba(226, 175, 25, 0.10) 55%, rgba(226, 175, 25, 0.06) 65%, rgba(226, 175, 25, 0.03) 75%, rgba(226, 175, 25, 0.015) 85%, rgba(226, 175, 25, 0.005) 95%, transparent 100%)",
        }}
      ></div>

      {/* Union.png Background for RGB and Circle Area */}
      <div
        className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden"
        style={{
          backgroundImage: "url('/union.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.3, // Adjust opacity as needed
          mixBlendMode: "overlay", // This creates a nice blend effect
        }}
      ></div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-10 lg:mb-12">
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            <span className="text-[#EDEDED] font-satoshi">Token </span>
            <span className="text-[#7D7D7D] font-satoshi">Overview</span>
          </h2>
        </div>

        {/* Token Distribution Chart */}
        <div className="flex justify-center mb-8 sm:mb-10 lg:mb-12">
          <div
            className="relative w-[400px] h-[320px] sm:w-[480px] sm:h-[360px] lg:w-[560px] lg:h-[400px]"
            style={{
              backgroundImage: "url('/union.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.4,
            }}
          >
            {/* Main Circle Container - Above background */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 sm:w-84 sm:h-84 z-10 relative">
              {/* SVG Circle Chart - Enhanced brightness */}
              <svg
                className="w-full h-full transform -rotate-85"
                viewBox="0 0 200 200"
              >
                {/* Top segment - 25% (Blue) - Enhanced brightness */}
                <circle
                  cx="100"
                  cy="100"
                  r="75"
                  fill="none"
                  stroke="#335FFF"
                  strokeWidth="6"
                  strokeDasharray={`${25 * 4.01 - 10} ${471}`}
                  strokeDashoffset={`${12 * -0.81 - 3}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                  style={{
                    filter: "drop-shadow(0 0 12px rgba(51, 95, 255, 0.8))",
                  }}
                />

                {/* Right segment - 25% (Yellow) - Enhanced brightness */}
                <circle
                  cx="100"
                  cy="100"
                  r="75"
                  fill="none"
                  stroke="#E2AF19"
                  strokeWidth="6"
                  strokeDasharray={`${25 * 4.71 - 10} ${471}`}
                  strokeDashoffset={`${-(24 * 4.91) - 2}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                  style={{
                    filter: "drop-shadow(0 0 12px rgba(226, 175, 25, 0.8))",
                  }}
                />

                {/* Bottom segment - 25% (Orange) - Enhanced brightness */}
                <circle
                  cx="100"
                  cy="100"
                  r="75"
                  fill="none"
                  stroke="#FF5B2F"
                  strokeWidth="6"
                  strokeDasharray={`${24 * 4.65 - 10} ${471}`}
                  strokeDashoffset={`${-(51 * 4.71) - 5}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                  style={{
                    filter: "drop-shadow(0 0 12px rgba(255, 91, 47, 0.8))",
                  }}
                />

                {/* Left segment - 25% (Green) - Enhanced brightness */}
                <circle
                  cx="100"
                  cy="100"
                  r="75"
                  fill="none"
                  stroke="#32FF7A"
                  strokeWidth="6"
                  strokeDasharray={`${25 * 4.71 - 10} ${471}`}
                  strokeDashoffset={`${-(75 * 4.71) - 10}`}
                  strokeLinecap="round"
                  className="transition-all duration-1000"
                  style={{
                    filter: "drop-shadow(0 0 12px rgba(50, 255, 122, 0.8))",
                  }}
                />
              </svg>

              {/* Reference Lines and Labels */}
              {/* Top Left - Ecosystem */}
              <div className="absolute -top-1 -left-20">
                <div className="flex items-start">
                  <div className="text-left">
                    <div className="text-white text-xs font-satoshi font-semibold">
                      Ecosystem
                    </div>
                    <div className="text-white text-xs font-satoshi font-semibold">
                      10%
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="110"
                    height="64"
                    viewBox="0 0 138 95"
                    fill="none"
                    className="mt-1"
                    style={{
                      filter:
                        "brightness(1.5) drop-shadow(0 0 8px rgba(17, 231, 94, 0.6))",
                    }}
                  >
                    <g filter="url(#filter0_d_100_30)">
                      <path
                        d="M123.023 79.5372L75.0503 31.5641C66.8722 23.386 62.7831 19.2969 57.5833 17.1431C52.3835 14.9893 46.6007 14.9893 35.0351 14.9893H14.7066"
                        stroke="#11E75E"
                        strokeWidth="2.65266"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_100_30"
                        x="0.116962"
                        y="0.399555"
                        width="137.496"
                        height="93.7273"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.63164" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.196078 0 0 0 0 1 0 0 0 0 0.478431 0 0 0 0.95 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_100_30"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_100_30"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Top Right - Team */}
              <div className="absolute -top-0.5 -right-14">
                <div className="flex items-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="110"
                    height="64"
                    viewBox="0 0 139 95"
                    fill="none"
                    className="mt-1"
                    style={{
                      filter:
                        "brightness(1.5) drop-shadow(0 0 8px rgba(51, 95, 255, 0.6))",
                    }}
                  >
                    <g filter="url(#filter0_d_100_31)">
                      <path
                        d="M15.2109 79.5372L63.1841 31.5641C71.3622 23.386 75.4513 19.2969 80.6511 17.1431C85.8509 14.9893 91.6337 14.9893 103.199 14.9893H123.528"
                        stroke="#335FFF"
                        strokeWidth="2.65266"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_100_31"
                        x="0.621357"
                        y="0.399555"
                        width="137.496"
                        height="93.7273"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.63164" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.2 0 0 0 0 0.372549 0 0 0 0 1 0 0 0 0.95 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_100_31"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_100_31"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div className="text-left">
                    <div className="text-white text-xs font-satoshi font-semibold">
                      Team
                    </div>
                    <div className="text-white text-xs font-satoshi font-semibold">
                      10%
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Left - Marketing */}
              <div className="absolute -bottom-3 -left-16">
                <div className="flex items-end">
                  <div className="text-left">
                    <div className="text-white text-xs font-satoshi font-semibold">
                      Marketing
                    </div>
                    <div className="text-white text-xs font-satoshi font-semibold">
                      15%
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="110"
                    height="64"
                    viewBox="0 0 139 95"
                    fill="none"
                    className="mb-1"
                    style={{
                      filter:
                        "brightness(1.5) drop-shadow(0 0 8px rgba(252, 91, 50, 0.6))",
                    }}
                  >
                    <g filter="url(#filter0_d_100_29)">
                      <path
                        d="M123.668 15.452L75.6948 63.4252C67.5167 71.6033 63.4276 75.6923 58.2278 77.8462C53.028 80 47.2452 80 35.6796 80H15.3511"
                        stroke="#FC5B32"
                        strokeWidth="2.65266"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_100_29"
                        x="0.761494"
                        y="0.862446"
                        width="137.496"
                        height="93.7273"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.63164" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.988235 0 0 0 0 0.356863 0 0 0 0 0.196078 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_100_29"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_100_29"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
              </div>

              {/* Bottom Right - Open Market */}
              <div className="absolute -bottom-3 -right-19">
                <div className="flex items-end">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="110"
                    height="64"
                    viewBox="0 0 138 95"
                    fill="none"
                    className="mb-1"
                    style={{
                      filter:
                        "brightness(1.5) drop-shadow(0 0 8px rgba(255, 174, 44, 0.6))",
                    }}
                  >
                    <g filter="url(#filter0_d_100_28)">
                      <path
                        d="M14.668 15.452L62.6411 63.4252C70.8192 71.6033 74.9083 75.6923 80.1081 77.8462C85.3079 80 91.0907 80 102.656 80H122.985"
                        stroke="#FFAE2C"
                        strokeWidth="2.65266"
                        strokeLinecap="round"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_100_28"
                        x="0.0783882"
                        y="0.862446"
                        width="137.496"
                        height="93.7273"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="6.63164" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 1 0 0 0 0 0.682353 0 0 0 0 0.172549 0 0 0 0.95 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_100_28"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_100_28"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                  <div className="text-left">
                    <div className="text-white text-xs font-satoshi font-semibold">
                      Open Market
                    </div>
                    <div className="text-white text-xs font-satoshi font-semibold">
                      65%
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Content with smaller bubble for more margin */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <div
                  className="text-center flex flex-col items-center justify-center rounded-full border border-white/10 w-48 h-48 sm:w-52 sm:h-52 p-4"
                  style={{
                    background: "rgba(255, 255, 255, 0.04)",
                  }}
                >
                  <div className="text-base sm:text-lg lg:text-xl font-satoshi text-white mb-1">
                    10,00,000 <span className="text-yellow-400">$BKPL</span>
                  </div>
                  <div className="text-xs text-white font-satoshi">
                    Total Supply
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-7 gap-4 lg:gap-6 max-w-6xl mx-auto">
          {/* Taxation Card - Medium */}
          <div
            className="rounded-xl p-4 border border-gray-700/30 lg:col-span-2"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <h3 className="font-heading text-sm sm:text-base font-satoshi text-[#EDEDED] mb-3">
              Taxation
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span className="text-[#EEE] font-satoshi text-xs">
                  Buy Tax →
                </span>
                <span className="text-[#EEE] font-satoshi text-xs">5%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span className="text-[#EEE] font-satoshi text-xs">
                  Sell Tax →
                </span>
                <span className="text-[#EEE] font-satoshi text-xs">5%</span>
              </div>
            </div>
          </div>

          {/* Tax Allocation Card - Medium */}
          <div
            className="rounded-xl p-4 border border-gray-700/30 lg:col-span-2"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <h3 className="font-heading text-sm sm:text-base font-satoshi text-[#EDEDED] mb-3">
              Tax Allocation
            </h3>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span className="text-[#EEE] font-satoshi text-xs">
                  Development →
                </span>
                <span className="text-[#EEE] font-satoshi text-xs">40%</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                <span className="text-[#EEE] font-satoshi text-xs">
                  Marketing →
                </span>
                <span className="text-[#EEE] font-satoshi text-xs">60%</span>
              </div>
            </div>
          </div>

          {/* Token Utility Card - Large */}
          <div
            className="rounded-xl p-3 border border-gray-700/30 lg:col-span-3"
            style={{
              background: "rgba(255, 255, 255, 0.05)",
            }}
          >
            <h3 className="font-heading text-sm sm:text-base font-satoshi text-[#EDEDED] mb-3">
              Token Utility
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              <div className="flex items-start gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-2 h-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-[#EEE] font-satoshi text-xs leading-relaxed">
                  Revenue Share
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-2 h-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-[#EEE] font-satoshi text-xs leading-relaxed">
                  Special Governance Rights
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-2 h-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-[#EEE] font-satoshi text-xs leading-relaxed">
                  Unlimited Premium Feature Access
                </span>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-3 h-3 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg
                    className="w-2 h-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-[#EEE] font-satoshi text-xs leading-relaxed">
                  Gasless Transactions
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TokenOverviewSection;
