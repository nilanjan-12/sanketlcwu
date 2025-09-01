'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Heart, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';

const heroImages = [
  {
    src: '/images/hero-1.jpg',
    alt: 'SANKET community development work - volunteers working with local communities',
  },
  {
    src: '/images/hero-2.jpg',
    alt: 'SANKET education program - children in learning activities',
  },
  {
    src: '/images/hero-3.jpg',
    alt: 'SANKET health and wellness initiatives - community health camp',
  },
];

export default function Hero() {
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
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-600 to-indigo-800">
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
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/80 to-indigo-800/80" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Welcome to{' '}
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              SANKET
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            Transforming lives through education, healthcare, environmental sustainability, 
            and community empowerment across India. Join us in leading change from within.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-3 bg-white text-indigo-600 px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:-translate-y-1 hover:shadow-2xl hover:scale-105 group"
            >
              <Heart size={20} className="group-hover:scale-110 transition-transform" />
              Volunteer With Us
            </Link>
            
            <Link
              href="/impact"
              className="inline-flex items-center gap-3 bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-200 hover:bg-white hover:text-indigo-600 hover:-translate-y-1 hover:shadow-2xl group"
            >
              <TrendingUp size={20} className="group-hover:scale-110 transition-transform" />
              See Our Impact
            </Link>
          </div>
        </div>

        {/* Statistics */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">15+</div>
            <div className="text-white/80 text-sm uppercase tracking-wider">Years of Impact</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">12</div>
            <div className="text-white/80 text-sm uppercase tracking-wider">States Across India</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-white mb-2">2500+</div>
            <div className="text-white/80 text-sm uppercase tracking-wider">Active Volunteers</div>
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8">
        <div className="flex flex-col items-center space-y-2 text-white/60">
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
