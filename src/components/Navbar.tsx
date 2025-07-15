'use client'
import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { NavItem } from '../types';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#' },
    { label: 'About', href: '#' },
    { label: 'Services', href: '#' },
    { label: 'Features', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Works', href: '#' },
  ];

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 py-6 max-w-7xl mx-auto relative z-50">
        <div className="text-2xl font-bold text-yellow-400">
          Blockpal
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              className="text-white hover:text-yellow-400 transition-colors duration-300"
            >
              {item.label}
            </a>
          ))}
        </div>
        
        <button className="hidden md:flex bg-yellow-400 text-black px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition-colors duration-300 items-center gap-2">
          <Phone size={18} />
          Contact Us
        </button>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white z-50"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/95 backdrop-blur-lg z-40">
          <div className="flex flex-col space-y-6 px-8 pt-24 pb-6">
            {navItems.map((item) => (
              <a 
                key={item.label}
                href={item.href} 
                className="text-white hover:text-yellow-400 transition-colors duration-300 text-lg"
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