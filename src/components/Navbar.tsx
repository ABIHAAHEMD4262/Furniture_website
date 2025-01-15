"use client";
import React, { useState } from 'react';
import { ShoppingCart, Heart, Search, User, Menu, X } from 'lucide-react';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50" style={{ backgroundColor: 'rgba(251, 235, 181, 1)' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold">FurniCraft</h1>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-800 hover:text-blue-600 font-medium">Home</a>
            <a href="/shop" className="text-gray-800 hover:text-blue-600 font-medium">Shop</a>
            <a href="/about" className="text-gray-800 hover:text-blue-600 font-medium">About</a>
            <a href="/contact" className="text-gray-800 hover:text-blue-600 font-medium">Contact</a>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-6 w-6 cursor-pointer hover:text-blue-600" />
            <Heart className="h-6 w-6 cursor-pointer hover:text-blue-600" />
            <ShoppingCart className="h-6 w-6 cursor-pointer hover:text-blue-600" />
            <User className="h-6 w-6 cursor-pointer hover:text-blue-600" />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <ShoppingCart className="h-6 w-6 cursor-pointer" />
            <button onClick={toggleMenu} className="focus:outline-none">
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a href="/" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
              Home
            </a>
            <a href="/shop" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
              Shop
            </a>
            <a href="/about" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
              About
            </a>
            <a href="/contact" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
              Contact
            </a>
            <div className="flex items-center space-x-4 px-3 py-2">
              <Search className="h-6 w-6 cursor-pointer" />
              <Heart className="h-6 w-6 cursor-pointer" />
              <User className="h-6 w-6 cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;