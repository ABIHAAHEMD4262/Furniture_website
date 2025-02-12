"use client"
import Link from 'next/link';
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
            <Link href="/" className="text-black hover:scale-105 hover:font-semibold transition-transform duration-300 text-xl">Home</Link>
            <Link href="/shop" className="text-black hover:scale-105 hover:font-semibold transition-transform duration-300 text-xl">Shop</Link>
            <Link href="/about" className="text-black hover:scale-105 hover:font-semibold transition-transform duration-300 text-xl">About</Link>
            <Link href="/contact" className="text-black hover:scale-105 hover:font-semibold transition-transform duration-300 text-xl">Contact</Link>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <Search className="h-6 w-6 cursor-pointer  hover:scale-105  transition-transform duration-300" />
            <Heart className="h-6 w-6 cursor-pointer  hover:scale-105  transition-transform duration-300" />
            <ShoppingCart className="h-6 w-6 cursor-pointer  hover:scale-105  transition-transform duration-300" />
            <User className="h-6 w-6 cursor-pointer  hover:scale-105  transition-transform duration-300" />
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
            <Link href="/" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link href="/shop" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
              Shop
            </Link>
            <Link href="/about" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
              About
            </Link>
            <Link href="/contact" className="block px-3 py-2 text-gray-800 hover:text-blue-600 font-medium">
              Contact
            </Link>
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