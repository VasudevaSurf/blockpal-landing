"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer
      className="text-white pt-8 pb-0 sm:pt-16 sm:pb-0 md:pt-24 md:pb-0 lg:pt-32 lg:pb-0 xl:pt-40 xl:pb-0 relative overflow-hidden"
      style={{
        backgroundColor: "#090804",
        backgroundImage: "url('/union1.png')",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "80% auto, 60% auto",
        backgroundPositionY: "calc(100% - 100px), calc(100% - 200px)",
      }}
    >
      {/* Whole Circle Effect - Responsive sizing */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl sm:max-w-5xl lg:max-w-6xl h-48 sm:h-64 md:h-80 lg:h-96 pointer-events-none z-10">
        <img
          src="/wholeCircle.png"
          alt="Whole Circle Effect"
          className="w-full h-full object-contain opacity-40 sm:opacity-50 md:opacity-60"
          style={{
            filter: "brightness(1.2) sm:brightness(1.3) md:brightness(1.5)",
            mixBlendMode: "lighten",
            maskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%) sm:radial-gradient(ellipse at center, black 35%, transparent 75%) md:radial-gradient(ellipse at center, black 40%, transparent 80%)",
            WebkitMaskImage:
              "radial-gradient(ellipse at center, black 30%, transparent 70%) sm:radial-gradient(ellipse at center, black 35%, transparent 75%) md:radial-gradient(ellipse at center, black 40%, transparent 80%)",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 transform scale-90 sm:scale-95 lg:scale-90 origin-top w-full relative z-20">
        {/* Hero Content */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16 pt-6 sm:pt-8 md:pt-12">
          <h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 sm:mb-6 leading-tight"
            style={{ fontFamily: "Nunito, sans-serif" }}
          >
            Built for What Comes Next.
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-sm md:max-w-md mx-auto leading-relaxed font-Satoshi px-2">
            Trade, automate Transactions, research, and connect everything you
            need.
          </p>
          <button className="bg-yellow-400 text-black px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-base sm:text-lg hover:bg-yellow-300 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 w-full sm:w-auto max-w-xs sm:max-w-none">
            Get Started
          </button>
        </div>

        {/* Main Footer Content */}
        <div className="flex flex-col lg:flex-row justify-between gap-6 sm:gap-8 lg:gap-16">
          {/* Left Side - Logo and Description */}
          <div className="flex flex-col items-start max-w-md">
            <div className="mb-3 sm:mb-4">
              <img
                src="/name.png"
                alt="Blockpal"
                className="h-5 w-28 sm:h-6 sm:w-32 md:h-7 md:w-36 object-contain"
              />
            </div>
            <p className="font-satoshi text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 sm:mb-6">
              Trade, automate Transactions, research, and connect everything you
              need.
            </p>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 lg:gap-12">
            {/* Column 1 */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="#"
                className="font-satoshi text-xs sm:text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#"
                className="font-satoshi text-xs sm:text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#"
                className="font-satoshi text-xs sm:text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                Services
              </a>
              <a
                href="#"
                className="font-satoshi text-xs sm:text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                Features
              </a>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="#"
                className="font-satoshi text-xs sm:text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                Pricing
              </a>
              <a
                href="#"
                className="font-satoshi text-xs sm:text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                Contact Us
              </a>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-2 sm:gap-3">
              <a
                href="#"
                className="font-satoshi text-xs sm:text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                Terms of Services
              </a>
              <a
                href="#"
                className="font-satoshi text-xs sm:text-sm text-gray-300 hover:text-yellow-400 transition-colors duration-300"
              >
                Privacy Policy
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row - Copyright and Social Icons */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full mt-6 sm:mt-8 gap-4 sm:gap-0">
          {/* Copyright - Left aligned on desktop, centered on mobile */}
          <p className="font-satoshi text-xs sm:text-sm text-gray-400 text-center sm:text-left">
            ©2025 Blockpal. All rights reserved.
          </p>

          {/* Social Media Buttons - Responsive layout */}
          <div className="flex flex-wrap justify-center sm:justify-end gap-2 sm:gap-3">
            {/* Facebook Button */}
            <button
              className="px-3 sm:px-4 py-2 flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-satoshi text-xs sm:text-sm"
              style={{
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                background: "rgba(255, 255, 255, 0.04)",
              }}
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 32 32"
                fill="none"
                className="sm:w-4 sm:h-4"
              >
                <path
                  d="M17.6026 17.4492H19.8883L20.8026 13.6092H17.6026V11.6892C17.6026 10.7004 17.6026 9.76918 19.4312 9.76918H20.8026V6.54358C20.5046 6.5023 19.3791 6.40918 18.1905 6.40918C15.7082 6.40918 13.9455 7.9999 13.9455 10.9212V13.6092H11.2026V17.4492H13.9455V25.6092H17.6026V17.4492Z"
                  fill="currentColor"
                />
              </svg>
              <span className="hidden sm:inline">Facebook</span>
            </button>

            {/* Twitter/X Button */}
            <button
              className="px-3 sm:px-4 py-2 flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-satoshi text-xs sm:text-sm"
              style={{
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                background: "rgba(255, 255, 255, 0.04)",
              }}
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 32 32"
                fill="none"
                className="sm:w-4 sm:h-4"
              >
                <path
                  d="M20.6 8H23.0537L17.6937 14.0991L24 22.4H19.0629L15.1931 17.3666L10.7703 22.4H8.31429L14.0469 15.8741L8 8.00113H13.0629L16.5554 12.601L20.6 8ZM19.7371 20.9382H21.0971L12.32 9.38575H10.8617L19.7371 20.9382Z"
                  fill="currentColor"
                />
              </svg>
              <span className="hidden sm:inline">Twitter</span>
            </button>

            {/* Instagram Button */}
            <button
              className="px-3 sm:px-4 py-2 flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-satoshi text-xs sm:text-sm"
              style={{
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                background: "rgba(255, 255, 255, 0.04)",
              }}
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 28 27"
                fill="none"
                className="sm:w-3.5 sm:h-3.5"
              >
                <path
                  d="M19.5606 9.44564C20.4811 9.44564 21.2273 8.69945 21.2273 7.77897C21.2273 6.8585 20.4811 6.1123 19.5606 6.1123C18.6401 6.1123 17.8939 6.8585 17.8939 7.77897C17.8939 8.69945 18.6401 9.44564 19.5606 9.44564Z"
                  fill="currentColor"
                />
                <path
                  d="M18.4425 3.33105C21.5092 3.33105 23.998 5.81994 23.998 8.88661V17.7755C23.998 20.8422 21.5092 23.3311 18.4425 23.3311H9.5536C6.48694 23.3311 3.99805 20.8422 3.99805 17.7755V8.88661C3.99805 5.81994 6.48694 3.33105 9.5536 3.33105H13.998H18.4425Z"
                  stroke="currentColor"
                  strokeWidth="1.30435"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13.9944 8.8877C16.4499 8.8877 18.4388 10.8766 18.4388 13.3321C18.4388 15.7877 16.4499 17.7766 13.9944 17.7766C11.5388 17.7766 9.54993 15.7877 9.54993 13.3321C9.54993 10.8766 11.5388 8.8877 13.9944 8.8877Z"
                  stroke="currentColor"
                  strokeWidth="1.30435"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden sm:inline">Instagram</span>
            </button>

            {/* Telegram Button */}
            <button
              className="px-3 sm:px-4 py-2 flex items-center gap-1.5 sm:gap-2 text-gray-300 hover:text-yellow-400 transition-colors duration-300 font-satoshi text-xs sm:text-sm"
              style={{
                borderRadius: "8px",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                background: "rgba(255, 255, 255, 0.04)",
              }}
              aria-label="Telegram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 16 16"
                fill="none"
                className="sm:w-4 sm:h-4"
              >
                <path
                  d="M7.99287 10.2722L10.1538 12.7291C10.9544 13.6393 11.3547 14.0944 11.7737 13.9836C12.1927 13.8728 12.3365 13.2739 12.6238 12.0759L14.2179 5.4306C14.6605 3.58555 14.8817 2.66303 14.3898 2.208C13.8979 1.75298 13.0453 2.0915 11.34 2.76855L3.42845 5.90966C2.06456 6.45116 1.38261 6.72193 1.33932 7.1872C1.33489 7.2348 1.33481 7.28273 1.3391 7.33033C1.38097 7.7958 2.06208 8.06887 3.42431 8.61487C4.04153 8.86227 4.35014 8.986 4.57141 9.22293C4.59629 9.24953 4.62021 9.27713 4.64313 9.3056C4.84699 9.55893 4.934 9.8914 5.10799 10.5563L5.43363 11.8007C5.60294 12.4477 5.6876 12.7712 5.90933 12.8153C6.13105 12.8594 6.32411 12.5911 6.71021 12.0546L7.99287 10.2722ZM7.99287 10.2722L7.781 10.0514C7.53987 9.80006 7.41934 9.67447 7.41934 9.51833C7.41934 9.3622 7.53987 9.23653 7.781 8.9852L10.163 6.50273"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="hidden sm:inline">Telegram</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
