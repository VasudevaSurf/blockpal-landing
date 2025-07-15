"use client";
import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const BlockPalLanding: React.FC = () => {
  return (
    <div className="relative">
      {/* Navbar positioned over the hero section */}
      <div className="absolute top-0 left-0 right-0 z-50">
        <Navbar />
      </div>

      {/* Hero Section with background */}
      <HeroSection />
    </div>
  );
};

export default BlockPalLanding;
