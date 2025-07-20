"use client";
import React, { useState } from "react";
import { Phone, Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

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
      {/* Navigation - Enhanced Mobile Responsive */}
      <nav className="flex items-center justify-between px-3 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-2 sm:py-3 md:py-4 max-w-7xl mx-auto relative z-50">
        {/* Logo - Increased sizing across all resolutions */}
        <div className="flex items-center">
          <img
            src="/name1.png"
            alt="Blockpal"
            className="h-5 w-24 xs:h-6 xs:w-28 sm:h-7 sm:w-32 md:h-8 md:w-36 lg:h-9 lg:w-40 xl:h-10 xl:w-44 object-contain"
          />
        </div>

        {/* Desktop Navigation - Enhanced spacing */}
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6 2xl:space-x-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-body text-white hover:text-yellow-400 transition-colors duration-300 text-sm xl:text-base font-medium whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Contact Button - Enhanced responsive sizing */}
        <button className="font-body hidden lg:flex bg-yellow-400 text-black px-3 xl:px-4 py-1.5 xl:py-2 rounded-full font-semibold text-sm hover:bg-yellow-300 transition-colors duration-300 items-center gap-1.5 whitespace-nowrap">
          <Phone size={14} className="xl:w-4 xl:h-4" />
          Contact Us
        </button>

        {/* Mobile menu button - Enhanced responsive */}
        <button
          className="lg:hidden text-white z-50 p-1 touch-target"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          style={{ minHeight: "44px", minWidth: "44px" }}
        >
          {isMobileMenuOpen ? (
            <X size={18} className="sm:w-5 sm:h-5" />
          ) : (
            <Menu size={18} className="sm:w-5 sm:h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation - Enhanced mobile experience */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-lg z-40">
          <div className="flex flex-col space-y-3 sm:space-y-4 px-4 sm:px-6 pt-14 sm:pt-16 pb-6 h-full overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="font-body text-white hover:text-yellow-400 transition-colors duration-300 text-lg sm:text-xl font-medium py-2 border-b border-gray-800/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <button
              className="font-body bg-yellow-400 text-black px-4 sm:px-6 py-3 sm:py-4 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 flex items-center gap-2 justify-center mt-6 text-base sm:text-lg touch-target"
              style={{ minHeight: "48px" }}
            >
              <Phone size={16} className="sm:w-5 sm:h-5" />
              Contact Us
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .touch-target {
          -webkit-tap-highlight-color: transparent;
        }

        @media (max-width: 374px) {
          .xs\\:h-6 {
            height: 1.5rem;
          }
          .xs\\:w-28 {
            width: 7rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;
