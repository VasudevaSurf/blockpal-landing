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
      {/* Navigation - Responsive design */}
      <nav className="flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 max-w-7xl mx-auto relative z-50">
        {/* Logo - Responsive sizing */}
        <div className="text-lg sm:text-xl md:text-2xl font-bold text-yellow-400">
          Blockpal
        </div>

        {/* Desktop Navigation - Responsive spacing */}
        <div className="hidden md:flex lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-white hover:text-yellow-400 transition-colors duration-300 text-xs sm:text-sm lg:text-sm font-medium whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact Button - Responsive sizing */}
        <button className="hidden md:flex bg-yellow-400 text-black px-3 sm:px-4 lg:px-5 py-2 sm:py-2.5 rounded-full font-semibold text-xs sm:text-sm hover:bg-yellow-300 transition-colors duration-300 items-center gap-1.5 sm:gap-2 whitespace-nowrap">
          <Phone size={14} className="sm:w-4 sm:h-4" />
          Contact Us
        </button>

        {/* Mobile menu button - Responsive sizing */}
        <button
          className="md:hidden text-white z-50 p-1"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <X size={20} className="sm:w-6 sm:h-6" />
          ) : (
            <Menu size={20} className="sm:w-6 sm:h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation - Responsive design */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-lg z-40">
          <div className="flex flex-col space-y-4 sm:space-y-6 px-6 sm:px-8 pt-16 sm:pt-20 pb-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-white hover:text-yellow-400 transition-colors duration-300 text-base sm:text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="bg-yellow-400 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2 justify-center mt-4 sm:mt-6 text-sm sm:text-base">
              <Phone size={16} className="sm:w-[18px] sm:h-[18px]" />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
