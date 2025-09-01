'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, MapPin, Calendar } from 'lucide-react';

const stories = [
  {
    id: 1,
    title: 'From Dropout to Teacher',
    category: 'Education',
    location: 'Rajasthan Village, India',
    date: '2015 - 2020',
    image: '/images/stories/ravi-teacher.jpg',
    quote: 'SANKET didn\'t just educate me, they showed me that education could transform entire communities.',
    person: {
      name: 'Ravi Kumar',
      age: 28,
      role: 'Community Teacher & SANKET Graduate'
    },
    story: 'Ravi dropped out of school at age 12 to work in the fields and support his family. When SANKET arrived in his village in 2015, they didn\'t just offer him classes—they understood his family\'s economic needs and created a flexible learning program. Today, Ravi is not only literate but has become a certified teacher, running three adult literacy classes in his village and neighboring areas.',
    impact: {
      before: 'School dropout, working in fields, unable to read or write',
      after: 'Certified teacher, educated 200+ adults, community leader'
    },
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 2,
    title: 'The Village That Beat Malaria',
    category: 'Healthcare',
    location: 'Sundarbans, West Bengal',
    date: '2017 - 2019',
    image: '/images/stories/sundarbans-health.jpg',
    quote: 'We went from losing children every monsoon to being declared malaria-free by the state government.',
    person: {
      name: 'Dr. Meera Patel',
      age: 45,
      role: 'Village Health Coordinator'
    },
    story: 'The remote village of Madhyamgram in the Sundarbans was losing 2-3 children to malaria every year. SANKET\'s healthcare team worked with the community to implement a comprehensive prevention program including water management, mosquito control, health education, and rapid response protocols. The transformation was so successful that it became a model for other regions.',
    impact: {
      before: 'High child mortality, limited healthcare access, frequent disease outbreaks',
      after: 'Malaria-free status, trained health workers, preventive healthcare system'
    },
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 3,
    title: 'The Green Revolution',
    category: 'Environment',
    location: 'Himachal Pradesh Hills',
    date: '2018 - Present',
    image: '/images/stories/himachal-green.jpg',
    quote: 'Our barren hills are now green, our water sources are recharged, and our children have a future.',
    person: {
      name: 'Sunita Devi',
      age: 52,
      role: 'Women\'s Self-Help Group Leader'
    },
    story: 'Deforestation and climate change had turned the once-lush hills around Sunita\'s village into barren land. SANKET introduced sustainable agriculture practices, tree plantation drives, and water conservation techniques. Sunita led the women\'s group that planted over 15,000 trees and created a sustainable livelihood through organic farming and eco-tourism.',
    impact: {
      before: 'Deforested land, water scarcity, agricultural decline, youth migration',
      after: '15,000 trees planted, increased rainfall, sustainable farming, eco-tourism revenue'
    },
    color: 'from-amber-500 to-orange-500'
  },
  {
    id: 4,
    title: 'Digital Dreams Realized',
    category: 'Technology',
    location: 'Urban Slum, Mumbai',
    date: '2020 - 2023',
    image: '/images/stories/mumbai-digital.jpg',
    quote: 'From selling newspapers on the street to developing mobile apps—SANKET made the impossible possible.',
    person: {
      name: 'Arjun Sharma',
      age: 22,
      role: 'Software Developer & Entrepreneur'
    },
    story: 'Arjun grew up in Mumbai\'s largest slum, selling newspapers to support his family. When SANKET launched their digital literacy center in 2020, Arjun was among the first students. His natural aptitude for technology, combined with SANKET\'s mentorship program, led to a scholarship at a coding bootcamp. Today, he runs a small tech startup that employs five people from his community.',
    impact: {
      before: 'Street vendor, no formal education, limited opportunities',
      after: 'Software developer, startup founder, community employer'
    },
    color: 'from-purple-500 to-violet-500'
  },
  {
    id: 5,
    title: 'Breaking Generational Cycles',
    category: 'Women Empowerment',
    location: 'Rural Bihar',
    date: '2014 - Present',
    image: '/images/stories/bihar-women.jpg',
    quote: 'My daughters will never face the limitations I did. Education is their birthright, not a privilege.',
    person: {
      name: 'Kamala Singh',
      age: 38,
      role: 'Village Council Member & Entrepreneur'
    },
    story: 'Kamala was married at 16 and never attended school. When SANKET introduced adult education and micro-finance programs in her village, she seized the opportunity. Learning to read and write opened new worlds—she started a tailoring business, joined the village council, and ensured all her three daughters completed their education. Her eldest daughter is now studying to become a doctor.',
    impact: {
      before: 'Illiterate, economically dependent, limited decision-making power',
      after: 'Literate, successful entrepreneur, village leader, daughters in higher education'
    },
    color: 'from-rose-500 to-pink-500'
  }
];

export default function Stories() {
  const [currentStory, setCurrentStory] = useState(0);

  const nextStory = () => {
    setCurrentStory((prev) => (prev + 1) % stories.length);
  };

  const prevStory = () => {
    setCurrentStory((prev) => (prev - 1 + stories.length) % stories.length);
  };

  const currentStoryData = stories[currentStory];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Real stories of transformation, resilience, and hope from the communities 
            we serve. These narratives showcase the human impact behind our mission.
          </p>
        </div>

        {/* Story Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {stories.map((story, index) => (
            <button
              key={story.id}
              onClick={() => setCurrentStory(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                currentStory === index
                  ? `bg-gradient-to-r ${story.color} text-white shadow-lg`
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {story.category}
            </button>
          ))}
        </div>

        {/* Featured Story */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Story Image */}
            <div className="relative h-80 lg:h-auto">
              <div className={`absolute inset-0 bg-gradient-to-br ${currentStoryData.color} opacity-20`} />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-32 h-32 bg-gradient-to-r ${currentStoryData.color} rounded-full flex items-center justify-center`}>
                  <Quote className="text-white" size={40} />
                </div>
              </div>
            </div>

            {/* Story Content */}
            <div className="p-8 lg:p-12">
              {/* Story Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className={`px-3 py-1 bg-gradient-to-r ${currentStoryData.color} text-white text-sm font-semibold rounded-full`}>
                  {currentStoryData.category}
                </span>
                <div className="flex items-center text-gray-600 text-sm">
                  <MapPin size={16} className="mr-1" />
                  {currentStoryData.location}
                </div>
                <div className="flex items-center text-gray-600 text-sm">
                  <Calendar size={16} className="mr-1" />
                  {currentStoryData.date}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                {currentStoryData.title}
              </h3>

              {/* Quote */}
              <div className="relative mb-8">
                <Quote className="absolute -top-2 -left-2 text-gray-300" size={32} />
                <blockquote className="text-lg italic text-gray-700 pl-8 leading-relaxed">
                  {currentStoryData.quote}
                </blockquote>
              </div>

              {/* Person Info */}
              <div className="flex items-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${currentStoryData.color} rounded-full flex items-center justify-center mr-4`}>
                  <span className="text-white font-bold text-lg">
                    {currentStoryData.person.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">{currentStoryData.person.name}</h4>
                  <p className="text-gray-600 text-sm">{currentStoryData.person.role}</p>
                  <p className="text-gray-500 text-xs">Age: {currentStoryData.person.age}</p>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between">
                <button
                  onClick={prevStory}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Previous story"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <span className="text-gray-500 text-sm">
                  {currentStory + 1} of {stories.length}
                </span>
                
                <button
                  onClick={nextStory}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Next story"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Story Details */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Full Story */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">The Full Story</h4>
            <p className="text-gray-700 leading-relaxed">
              {currentStoryData.story}
            </p>
          </div>

          {/* Impact Comparison */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h4 className="text-2xl font-bold text-gray-900 mb-6">Transformation Impact</h4>
            
            <div className="space-y-6">
              <div>
                <h5 className="font-semibold text-red-600 mb-3">Before SANKET</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {currentStoryData.impact.before}
                </p>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h5 className="font-semibold text-emerald-600 mb-3">After SANKET</h5>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {currentStoryData.impact.after}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Be Part of the Next Success Story
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Every story you&apos;ve read started with someone who believed in change. 
              Your support can help us write many more stories of transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Support Our Cause
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all">
                Share Your Story
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
