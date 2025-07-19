"use client";
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import SafeSection from "./SafeSection";
import TokenOverviewSection from "./TokenOverviewSection";
import GreatMindsSection from "./GreatMindsSection";
import BlockpalWalletAgentSection from "./BlockpalWalletAgentSection";

const BlockPalLanding = () => {
  return (
    <div className="relative">
      {/* Navbar positioned over the hero section */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section with background */}
      <HeroSection />
      <SafeSection />
      <TokenOverviewSection />
      <BlockpalWalletAgentSection />
      <GreatMindsSection />
    </div>
  );
};

export default BlockPalLanding;
