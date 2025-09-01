'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  {
    src: '/images/about-hero-1.jpg',
    alt: 'SANKET team members in a strategic planning meeting',
    title: 'Our Team',
    description: 'Dedicated individuals working together to create positive change'
  },
  {
    src: '/images/about-hero-2.jpg',
    alt: 'SANKET volunteers conducting a community workshop',
    title: 'Community Engagement',
    description: 'Building stronger communities through education and empowerment'
  },
  {
    src: '/images/about-hero-3.jpg',
    alt: 'SANKET NGO headquarters',
    title: 'Our Home',
    description: 'Where ideas transform into impactful community initiatives'
  }
];

export default function AboutHero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 to-emerald-600 mt-20">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-30' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${image.src})`,
              }}
            />
          </div>
        ))}
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-emerald-600/80" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            About{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              SANKET
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            {heroImages[currentSlide].description}
          </p>

          <div className="text-lg text-white/80 font-medium">
            {heroImages[currentSlide].title}
          </div>
        </div>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-4">
        <button
          onClick={prevSlide}
          className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
          aria-label="Previous image"
        >
          <ChevronLeft size={20} />
        </button>
        
        <div className="flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white' : 'bg-white/40'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        
        <button
          onClick={nextSlide}
          className="p-3 bg-white/20 backdrop-blur-sm text-white rounded-full hover:bg-white/30 transition-all"
          aria-label="Next image"
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
}
