'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, MapPin } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Education Volunteer',
    location: 'Rural Maharashtra',
    duration: '8 months',
    image: '/images/volunteers/sarah-johnson.jpg',
    rating: 5,
    quote: 'Volunteering with SANKET has been the most rewarding experience of my life. Seeing the children progress from barely knowing the alphabet to reading full sentences is indescribable.',
    story: 'Sarah came to us as a recent college graduate looking to make a difference before starting her career. She worked in three rural schools, helping improve literacy rates by 40%. Her innovative teaching methods are now being replicated across our education programs.',
    impact: 'Taught 120+ children, improved literacy rate by 40%',
    background: 'Recent graduate in Elementary Education',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 2,
    name: 'Dr. Michael Chen',
    role: 'Healthcare Volunteer',
    location: 'Sundarbans, West Bengal',
    duration: '12 months',
    image: '/images/volunteers/michael-chen.jpg',
    rating: 5,
    quote: 'The dedication of the community health workers here inspired me to extend my volunteer period. Together, we\'ve created sustainable health systems that will last for generations.',
    story: 'Dr. Chen took a sabbatical from his practice in the US to volunteer with SANKET. His expertise in community health helped establish three new health clinics and train 25 community health workers. He continues to mentor our health programs remotely.',
    impact: 'Established 3 health clinics, trained 25 health workers',
    background: 'MD in Community Medicine, 15 years experience',
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 3,
    name: 'Priya Sharma',
    role: 'Environmental Coordinator',
    location: 'Himachal Pradesh',
    duration: '6 months',
    image: '/images/volunteers/priya-sharma.jpg',
    rating: 5,
    quote: 'Leading the tree plantation drive in the hills was challenging but incredibly fulfilling. The community\'s enthusiasm for environmental conservation was contagious.',
    story: 'Priya brought her environmental science background to help communities combat deforestation. Her project resulted in planting 20,000 trees and establishing community-managed forest areas. She now works full-time with SANKET as our Environmental Program Manager.',
    impact: '20,000 trees planted, 5 community forests established',
    background: 'MS Environmental Science, sustainability consultant',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 4,
    name: 'Carlos Rodriguez',
    role: 'Digital Literacy Trainer',
    location: 'Urban Delhi',
    duration: '4 months',
    image: '/images/volunteers/carlos-rodriguez.jpg',
    rating: 5,
    quote: 'Teaching basic computer skills to women who had never touched a computer before was magical. Their excitement when they sent their first email was unforgettable.',
    story: 'Carlos, a software engineer from Spain, wanted to use his tech skills for social good. He developed simplified training modules and taught over 300 women basic computer skills, helping many start online businesses or find better jobs.',
    impact: 'Trained 300+ women in digital skills, 60% found better employment',
    background: 'Software Engineer with 10 years experience',
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 5,
    name: 'Aisha Patel',
    role: 'Community Outreach Coordinator',
    location: 'Gujarat Villages',
    duration: '10 months',
    image: '/images/volunteers/aisha-patel.jpg',
    rating: 5,
    quote: 'Building trust with community leaders taught me more about leadership and cultural sensitivity than any corporate training could. This experience changed my perspective on development work.',
    story: 'Aisha left her consulting job to volunteer with SANKET. Her work in community engagement helped expand our programs to 8 new villages. She\'s now pursuing a master\'s in International Development, inspired by her volunteer experience.',
    impact: 'Expanded programs to 8 new villages, engaged 200+ leaders',
    background: 'MBA, former management consultant',
    color: 'from-amber-500 to-orange-500'
  }
];

const volunteerStats = [
  { number: '95%', label: 'Would volunteer again' },
  { number: '88%', label: 'Gained new skills' },
  { number: '92%', label: 'Made lasting friendships' },
  { number: '78%', label: 'Changed career direction' }
];

export default function VolunteerTestimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentVolunteer = testimonials[currentTestimonial];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Volunteer <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Hear from our amazing volunteers about their transformative experiences 
            and the impact they&apos;ve made in communities across India.
          </p>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setCurrentTestimonial(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                currentTestimonial === index
                  ? `bg-gradient-to-r ${testimonial.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {testimonial.name.split(' ')[0]}
            </button>
          ))}
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Volunteer Image/Info */}
            <div className={`bg-gradient-to-br ${currentVolunteer.color} p-8 lg:p-12 text-white`}>
              <div className="text-center">
                <div className="w-32 h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-4xl font-bold text-white">
                    {currentVolunteer.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2">{currentVolunteer.name}</h3>
                <p className="text-white/90 font-medium mb-1">{currentVolunteer.role}</p>
                <p className="text-white/80 text-sm mb-4">{currentVolunteer.background}</p>
                
                <div className="flex items-center justify-center mb-4">
                  {[...Array(currentVolunteer.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-300 fill-yellow-300" size={20} />
                  ))}
                </div>

                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-center">
                    <MapPin size={16} className="mr-2" />
                    {currentVolunteer.location}
                  </div>
                  <div>Duration: {currentVolunteer.duration}</div>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="p-8 lg:p-12">
              {/* Quote */}
              <div className="relative mb-8">
                <Quote className="absolute -top-4 -left-4 text-gray-300" size={40} />
                <blockquote className="text-xl italic text-gray-700 leading-relaxed pl-8">
                  {currentVolunteer.quote}
                </blockquote>
              </div>

              {/* Story */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Their Story</h4>
                <p className="text-gray-600 leading-relaxed">
                  {currentVolunteer.story}
                </p>
              </div>

              {/* Impact */}
              <div className={`bg-gradient-to-r ${currentVolunteer.color} bg-opacity-10 rounded-xl p-6 mb-8`}>
                <h4 className="font-bold text-gray-900 mb-2">Impact Achieved</h4>
                <p className="text-gray-700">{currentVolunteer.impact}</p>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevTestimonial}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <span className="text-gray-500 text-sm">
                  {currentTestimonial + 1} of {testimonials.length}
                </span>
                
                <button
                  onClick={nextTestimonial}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Volunteer Stats */}
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              What Our Volunteers Say
            </h3>
            <p className="text-lg text-gray-600">
              Based on feedback from 200+ volunteers over the past 3 years
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {volunteerStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-700 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Your Story Starts Here
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join hundreds of volunteers who have found purpose, growth, and fulfillment 
              through meaningful service with SANKET. Your journey awaits.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Begin Your Journey
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all">
                Connect with Volunteers
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
