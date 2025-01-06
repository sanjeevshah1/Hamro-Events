'use client';
import React, { useState, useEffect, useCallback, memo } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Separate ServiceCard component for better performance
const ServiceCard = memo(({ service } : {
    service : {
        id: number,
        title: string,
        description: string,
        image: string,
        category: string
    }
}) => (
  <div className="w-full flex-shrink-0">
    <div className="p-4">
      <div className="bg-mainColor/80 rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.02] group">
        <div className="relative">
          <img 
            src={service.image} 
            alt={service.title}
            className="w-full h-72 md:h-[400px] object-cover"
            loading="lazy" // Add lazy loading
          />
          <div className="absolute top-4 left-4">
            <span className="px-4 py-2 bg-white/90 rounded-full text-sm font-medium text-blue-600">
              {service.category}
            </span>
          </div>
        </div>
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-3 group-hover:text-blue-600 transition-colors">
            {service.title}
          </h3>
          <p className="text-gray-600 leading-relaxed">
            {service.description}
          </p>
          <button className="mt-6 inline-flex  items-center text-blue-600 font-medium hover:text-blue-700">
            Learn more
            <ChevronRight className="w-4 h-4 ml-1" />
          </button>
        </div>
      </div>
    </div>
  </div>
));
ServiceCard.displayName = "ServiceCard";

// Navigation button component
const NavButton = memo(({ direction, onClick, children }: {
    direction : 'left' | 'right',
    onClick: () => void,
    children: React.ReactNode
}) => (
  <button 
    onClick={onClick}
    className={`absolute ${direction === 'left' ? 'left-4' : 'right-4'} top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full shadow-lg hover:bg-white transition-transform hover:scale-110 backdrop-blur-sm`}
  >
    {children}
  </button>
));

const FeaturedServices = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const services = [
    {
      id: 1,
      title: "Wedding Catering Services",
      description: "Serving a variety of traditional and fusion dishes for weddings and celebrations across India and Nepal.",
      image: "food.jpg",
      category: "Foods"
    },
    {
      id: 2,
      title: "Event Photography and Videography",
      description: "Capturing your special moments with professional photography and videography services for weddings, festivals, and events.",
      image: "camera.jpg",
      category: "Photography"
    },
    {
      id: 3,
      title: "Sound and DJ Systems for Events",
      description: "Providing high-quality sound systems for weddings, parties, and cultural events, ensuring a lively atmosphere.",
      image: "sound.jpg",
      category: "Entertainment"
    },
    {
      id: 4,
      title: "Wedding and Event Planning",
      description: "Expert wedding planners offering complete solutions for your special day, including venue selection, decorations, and coordination.",
      image: "weddingPlanner.jpg",
      category: "Organizing"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => prev === services.length - 1 ? 0 : prev + 1);
  }, [services.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => prev === 0 ? services.length - 1 : prev - 1);
  }, [services.length]);

  useEffect(() => {
    if (isHovered) return;
    
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [isHovered, nextSlide]);

  return (
    <div className="w-full bg-mainColor mt-12 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Featured Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our comprehensive range of services designed to help your business thrive in the digital age
          </p>
        </div>
        
        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out will-change-transform"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {services.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </div>

          <NavButton direction="left" onClick={prevSlide}>
            <ChevronLeft className="w-4 h-4 text-blue-600" />
          </NavButton>
          <NavButton direction="right" onClick={nextSlide}>
            <ChevronRight className="w-4 h-4 text-blue-600" />
          </NavButton>

          <div className="mt-2 max-w-2xl mx-auto px-8">
            <div className="h-1 bg-gray-200 rounded-full">
              <div 
                className="h-full bg-blue-600 rounded-full transition-width duration-700 "
                style={{ width: `${((currentIndex + 1) / services.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedServices;