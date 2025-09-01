'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    quote: "SANKET's women empowerment program changed everything for our village. From a small skill development workshop in 2019, we now run a thriving textile cooperative that exports internationally. We didn't just learn skills - we learned to believe in ourselves.",
    author: "Sunita Devi",
    role: "Rajgarh Women's Cooperative Leader",
    image: "/images/testimonial-1.jpg"
  },
  {
    quote: "Before SANKET's agricultural program, I was considering leaving farming altogether due to droughts. Now with organic methods and water conservation techniques, my farm thrives even in dry years. My children are returning from the city to join our family business.",
    author: "Ramesh Patil",
    role: "Farmer, Marathwada Region",
    image: "/images/testimonial-2.jpg"
  },
  {
    quote: "The digital literacy program completely transformed my life. As the first in my family to use a computer, I'm now studying computer science at university. SANKET showed me that someone from my background could succeed in the tech world.",
    author: "Arjun Kumar",
    role: "SANKET Digital Literacy Graduate",
    image: "/images/testimonial-3.jpg"
  }
];

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What People Say About Us</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-gray-50 rounded-3xl p-8 md:p-12 relative">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  index === currentTestimonial 
                    ? 'opacity-100 transform translate-x-0' 
                    : 'opacity-0 transform translate-x-full absolute inset-0 p-8 md:p-12'
                }`}
              >
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="flex items-center justify-center gap-4">
                  <div
                    className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-emerald-100 rounded-full flex items-center justify-center"
                  >
                    <span className="text-indigo-600 font-bold text-lg">
                      {testimonial.author.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <div className="text-center">
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-gray-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 bg-white text-gray-600 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} />
            </button>
            
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 bg-white text-gray-600 rounded-full shadow-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Dots indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentTestimonial 
                    ? 'bg-indigo-600 scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
