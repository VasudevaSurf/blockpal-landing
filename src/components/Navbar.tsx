"use client";
import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import { NavItem } from "../types";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: "Home", href: "#" },
    { label: "About", href: "#" },
    { label: "Services", href: "#" },
    { label: "Features", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "Works", href: "#" },
  ];

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navigation - Updated to match Figma design */}
      <nav className="flex items-center justify-between px-6 sm:px-8 lg:px-12 py-4 max-w-7xl mx-auto relative z-50">
        {/* Logo - Updated styling to match Figma */}
        <div className="text-xl sm:text-2xl font-bold text-yellow-400">
          Blockpal
        </div>

        {/* Desktop Navigation - Updated spacing and styling */}
        <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-yellow-400 transition-colors duration-300 text-sm font-medium"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact Button - Updated to match Figma styling */}
        <button className="hidden lg:flex bg-yellow-400 text-black px-5 py-2.5 rounded-full font-semibold text-sm hover:bg-yellow-300 transition-colors duration-300 items-center gap-2">
          <Phone size={16} />
          Contact Us
        </button>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-white z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-lg z-40">
          <div className="flex flex-col space-y-6 px-8 pt-20 pb-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2 justify-center mt-6">
              <Phone size={18} />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
