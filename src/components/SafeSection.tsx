"use client";
import React from "react";

const SafeSection: React.FC = () => {
  return (
    <div
      className="min-h-screen text-white relative py-6 sm:py-8 lg:py-10"
      style={{
        backgroundColor: "#090804",
      }}
    >
      {/* Main Content Container */}
      <div className="max-w-5xl mx-auto px-3 sm:px-4 lg:px-6">
        {/* Header Section */}
        <div className="text-center mb-6 sm:mb-8 lg:mb-10">
          <h2 className="font-body text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-white">Think your wallet is safe? </span>
            <span className="text-gray-400">think</span>
            <br />
            <span className="text-gray-400">again check the facts</span>
          </h2>
        </div>

        {/* Features Grid - Custom Layout */}
        <div className="max-w-5xl mx-auto mb-6">
          {/* Row 1 - 2 boxes with specific dimensions */}
          <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 mb-3 lg:mb-4">
            {/* Blockpal DEX - First Box */}
            <div
              className="rounded-[24px] border border-white/10 p-3 lg:p-4"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.00) 100%)",
                width: "550px",
                flexShrink: 0,
              }}
            >
              <div
                className="mb-3 flex justify-center items-center"
                style={{ minHeight: "220px" }}
              >
                {/* DEX Interface Image - Slightly smaller and centered */}
                <div className="rounded-lg overflow-hidden relative w-5/6 max-w-md h-57">
                  <img
                    src="/dex-interface.png"
                    alt="Blockpal DEX Interface"
                    className="w-full h-full object-cover"
                  />
                  {/* Enhanced bottom fade overlay - more pronounced */}
                  <div
                    className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(transparent 0%, rgba(9, 8, 4, 0.1) 20%, rgba(9, 8, 4, 0.3) 40%, rgba(9, 8, 4, 0.5) 60%, rgba(9, 8, 4, 0.7) 80%, rgba(9, 8, 4, 0.9) 100%)",
                    }}
                  ></div>
                </div>
              </div>
              <h3 className=" text-xs lg:text-lg font satoshi text-[#EDEDED] mb-1">
                Blockpal DEX
              </h3>
              <p className="font-satoshi text-xs text-[#EEEEEECC] leading-relaxed">
                Blockpal DEX is a secure, user-friendly decentralized exchange
                that lets you swap, buy, and sell crypto while keeping full
                control of your funds—no intermediaries, just fast, seamless
                trading.
              </p>
            </div>

            {/* Automated Payments - Second Box */}
            <div
              className="flex-1 flex flex-col justify-end rounded-[24px] border border-white/10 p-3"
              style={{
                background:
                  "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.00) 100%)",
              }}
            >
              {/* Automated Payments Image */}
              <div className="relative w-full mb-4">
                <img
                  src="/automated-payments.png"
                  alt="Automated Payments Network"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>

              <div>
                <h3 className=" text-xs lg:text-lg font satoshi text-[#EDEDED] mb-1 px-2">
                  Automated Payments
                </h3>
                <p className="font-satoshi text-xs text-[#EEEEEECC] leading-relaxed px-2">
                  Blockpal's Automated Payments let you schedule recurring
                  transfers, subscriptions, and more—directly from your wallet.
                  Powered by smart contracts, it ensures secure, transparent,
                  and error-free transactions.
                </p>
              </div>
            </div>
          </div>

          {/* Row 2 - 3 boxes */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 lg:gap-4">
            {/* Web3 Wallet */}
            <div
              className="backdrop-blur-sm rounded-[24px] p-3 sm:p-4 border border-gray-700/30 overflow-hidden relative"
              style={{
                backgroundColor: "#0D0C06",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Spark effect positioned at top middle */}
              <div className="rounded-[24px] absolute -top-16 left-1/2 transform -translate-x-1/2 z-10">
                <img
                  src="/spark.png"
                  alt="Spark Effect"
                  className="w-40 h-40 object-contain"
                />
              </div>

              <div className="flex-1">
                {/* Web3 Wallet Image - positioned with padding */}
                <div className="rounded-[24px] overflow-hidden p-1">
                  <img
                    src="/web3-wallet.png"
                    alt="Web3 Wallet Security"
                    className="w-full h-auto object-cover rounded-[24px]"
                  />
                </div>
              </div>

              {/* Content positioned at bottom */}
              <div style={{ marginTop: "auto" }}>
                <h3 className=" text-xs lg:text-lg font satoshi text-[#EDEDED] mb-1 px-1.5">
                  Batch Payments
                </h3>
                <p className="font-satoshi text-xs text-[#EEEEEECC] leading-relaxed px-1.5">
                  Batch Payments lets you send multiple transfers in one
                  transaction—saving gas, streamlining operations, and creating
                  a clear on-chain record. Ideal for DAOs, teams, and projects
                  handling rewards or high-volume payouts.
                </p>
              </div>
            </div>

            {/* Batch Payments */}
            <div
              className="backdrop-blur-sm rounded-[24px] p-3 sm:p-4 border border-gray-700/30 overflow-hidden"
              style={{
                backgroundColor: "#0D0C06",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="flex-1">
                {/* Batch Payments Image - positioned edge to edge */}
                <div className="rounded-[24px] overflow-hidden -mx-2 sm:-mx-3 -mt-2 sm:-mt-3">
                  <img
                    src="/batch-payments.png"
                    alt="Batch Payments Interface"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content positioned at bottom */}
              <div style={{ marginTop: "auto" }}>
                <h3 className=" text-xs lg:text-lg font satoshi text-[#EDEDED] mb-1 px-1.5">
                  Blockpal Agent
                </h3>
                <p className="font-satoshi text-xs text-[#EEEEEECC] leading-relaxed px-1.5">
                  Blockpal Agent is your AI-powered crypto co-pilot helping you
                  create smart contracts, analyze tokens, audit securely, and
                  get real-time insights. With natural language support and
                  multi-chain access, it simplifies crypto research for
                  everyone.
                </p>
              </div>
            </div>

            {/* Blockpal Agent */}
            <div
              className="backdrop-blur-sm rounded-[24px] p-3 sm:p-4 border border-gray-700/30 overflow-hidden"
              style={{
                backgroundColor: "#0D0C06",
                minHeight: "280px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div className="flex-1">
                {/* Blockpal Agent Image - positioned edge to edge */}
                <div className="rounded-lg overflow-hidden -mx-2 sm:-mx-3 -mt-2 sm:-mt-3">
                  <img
                    src="/5thImage.png"
                    alt="Blockpal Agent Interface"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Content positioned at bottom */}
              <div style={{ marginTop: "auto" }}>
                <h3 className=" text-xs lg:text-lg font satoshi text-[#EDEDED] mb-1 ">
                  Web3 Wallet
                </h3>
                <p className="font-satoshi text-xs text-[#EEEEEECC] leading-relaxed ">
                  Blockpal Web3 Wallet lets you securely store, send, and
                  receive crypto while keeping full control of your keys—an
                  intuitive, self‑custodied solution with advanced security and
                  zero third‑party exposure.
                </p>
              </div>
            </div>
          </div>

          {/* Row 3 - Private Transactions (single box) */}
        </div>
        <div className="flex flex-col lg:flex-row gap-3 lg:gap-4 mb-3 lg:mb-4">
          {/* First Container with Image and Content */}
          <div
            className="flex-1 flex flex-col justify-end rounded-[24px] border border-white/10 "
            style={{
              background:
                "linear-gradient(180deg, rgba(255, 255, 255, 0.02) 0%, rgba(255, 255, 255, 0.00) 100%)",
            }}
          >
            {/* Image positioned to the right end */}
            <div className="relative w-full flex justify-end mb-2">
              <div className="w-4/5 max-w-sm">
                <img
                  src="/3row1stImage.png"
                  alt="Private Transactions Network"
                  className="w-full h-auto object-cover rounded-[24px]"
                />
                {/* Fade overlay only at the bottom of the image */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-8 rounded-b-lg pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(transparent 0%, rgba(9, 8, 4, 0.7) 50%, rgba(9, 8, 4, 0.9) 100%)",
                  }}
                ></div>
              </div>
            </div>

            {/* Content starts immediately after image */}
            <div className="px-3 mb-3">
              <h3 className=" text-xs lg:text-lg font satoshi text-[#EDEDED] mb-1 px-1.5">
                Private Transactions
              </h3>
              <p className="font-satoshi text-xs text-[#EEEEEECC] leading-relaxed px-1.5">
                Blockpal's Private Transactions protect your financial privacy
                by making on-chain transfers anonymous and secure, keeping your
                balances and payments confidential.
              </p>
            </div>
          </div>

          {/* Second Container - Community Groups */}
          <div
            className="rounded-[24px] border border-white/10 p-3 lg:p-4 relative overflow-hidden"
            style={{
              background:
                "linear-gradient(180deg, rgba(14, 14, 16, 0.00) 0%, #0D0C06 44.4%)",
              width: "550px",
              flexShrink: 0,
            }}
          >
            {/* Spark 1 - Top Left */}
            <div className="absolute -top-16 -left-16 z-20">
              <img
                src="/spark1.png"
                alt="Spark Effect 1"
                className="w-60 h-60 object-contain brightness-[2.5] contrast-125 saturate-150"
              />
            </div>

            {/* Spark 2 - Top Right */}
            <div className="absolute -top-16 -right-16 z-20">
              <img
                src="/spark2.png"
                alt="Spark Effect 2"
                className="w-60 h-60 object-contain brightness-[2.5] contrast-125 saturate-150"
              />
            </div>

            <div
              className="mb-2 flex justify-center items-center relative"
              style={{ minHeight: "180px" }}
            >
              {/* Dotted background - extends beyond padding but not on content */}
              <div
                className="absolute top-0 left-0 right-0 -mx-3 lg:-mx-4 -mt-3 lg:-mt-4 rounded-t-[24px] overflow-hidden"
                style={{
                  height: "calc(100% + 12px)",
                  backgroundImage: "url('/dotted.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              >
                {/* Enhanced fade overlay for dotted background */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(transparent 0%, rgba(13, 12, 6, 0.2) 20%, rgba(13, 12, 6, 0.5) 40%, rgba(13, 12, 6, 0.8) 70%, rgba(13, 12, 6, 1) 100%)",
                  }}
                ></div>
              </div>

              {/* DEX Interface Image - Much larger size */}
              <div className="rounded-[lg] overflow-hidden relative w-full max-w-2xl z-10">
                <img
                  src="/lastImage.png"
                  alt="Blockpal DEX Interface"
                  className="w-full h-full object-cover relative"
                />
                {/* Enhanced bottom fade overlay for main image - smoother dissolve to eliminate harsh line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-48 pointer-events-none"
                  style={{
                    background:
                      "linear-gradient(to bottom, transparent 0%, rgba(13, 12, 6, 0.1) 15%, rgba(13, 12, 6, 0.3) 30%, rgba(13, 12, 6, 0.6) 50%, rgba(13, 12, 6, 0.9) 80%, rgba(13, 12, 6, 1) 100%)",
                  }}
                ></div>
              </div>
            </div>
            <h3 className="font-satoshi text-xs lg:text-sm font-bold text-[#EDEDED]">
              Community Groups
            </h3>
            <p className="font-satoshi text-xs text-[#EEEEEECC] leading-relaxed">
              Blockpal's Community Groups let you chat, share, and collaborate
              on crypto projects within a secure Web3-powered platform—combining
              social connection with asset management seamlessly.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeSection;
