import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <div 
      className="min-h-[80vh] w-full flex items-center font-poppins" 
      style={{ backgroundColor: 'rgba(251, 235, 181, 1)' }}
    >
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text Content */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-semibold text-black">
              Rocket Single Seater
            </h1>
            <p className="text-black text-lg md:text-xl">
              Experience comfort and style with our premium single seater sofa
            </p>
            <Link
              href="/shop" 
              className="inline-block px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-700 transition-colors duration-300"
            >
              Shop Now
            </Link>
          </div>

          {/* Right side - Image */}
          <div className="order-first md:order-last">
            <Image
              src="/images/Rocket single seater 1.png" 
              alt="Rocket Single Seater Sofa" 
              className="w-full h-auto object-cover "
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default HeroSection;