import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FeaturedBoxes = () => {
  const featuredItems = [
    {
      id: 1,
      title: "Side Table",
      image: "/images/two seaters.png",
      link: "/shop/side-table-1"
    },
    {
      id: 2,
      title: "Side Table",
      image: "/images/table.png",
      link: "/shop/side-table-2"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8">
        {featuredItems.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:scale-105 transition-transform duration-300"
                priority={true}
              />
            </div>
            <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
            <Link 
              href={item.link}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-300"
            >
              View More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedBoxes;