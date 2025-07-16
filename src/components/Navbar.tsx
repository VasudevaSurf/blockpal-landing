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
        {/* Logo - Using name.png image */}
        <div className="flex items-center">
          <img
            src="/name.png"
            alt="Blockpal"
            className="h-4 w-20 sm:h-5 sm:w-24 md:h-6 md:w-28 object-contain"
          />
        </div>

        {/* Desktop Navigation - Using Satoshi font */}
        <div className="hidden md:flex lg:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-white hover:text-yellow-400 transition-colors duration-300 text-xs sm:text-sm lg:text-sm font-medium whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact Button - Using Satoshi font */}
        <button className="font-body hidden md:flex bg-yellow-400 text-black px-2.5 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-full font-semibold text-xs hover:bg-yellow-300 transition-colors duration-300 items-center gap-1 sm:gap-1.5 whitespace-nowrap">
          <Phone size={12} className="sm:w-3.5 sm:h-3.5" />
          Contact Us
        </button>

        {/* Mobile menu button */}
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

      {/* Mobile Navigation - Using Satoshi font */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-lg z-40">
          <div className="flex flex-col space-y-4 sm:space-y-6 px-6 sm:px-8 pt-16 sm:pt-20 pb-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-white hover:text-yellow-400 transition-colors duration-300 text-base sm:text-lg font-medium"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button className="font-body bg-yellow-400 text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-1.5 justify-center mt-4 sm:mt-6 text-sm">
              <Phone size={14} className="sm:w-4 sm:h-4" />
              Contact Us
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
