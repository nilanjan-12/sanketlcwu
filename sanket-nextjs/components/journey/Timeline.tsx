'use client';

import { useState } from 'react';
import { Calendar, Users, Award, Rocket, Heart, Globe } from 'lucide-react';

const timelineEvents = [
  {
    year: '2008',
    title: 'The Beginning',
    description: 'SANKET was founded with a simple mission: to create positive change in underserved communities through education and healthcare.',
    icon: Rocket,
    color: 'from-blue-500 to-indigo-500',
    achievements: [
      'Established first community center',
      'Launched literacy program for 50 adults',
      'Started mobile healthcare clinic'
    ],
    image: '/images/journey/2008-founding.jpg'
  },
  {
    year: '2010',
    title: 'Expanding Reach',
    description: 'Our programs began to show measurable impact, leading to expansion into three more communities and the launch of our environmental initiatives.',
    icon: Globe,
    color: 'from-emerald-500 to-teal-500',
    achievements: [
      'Served 4 communities',
      'Planted 10,000 trees',
      'Educated 500+ children',
      'Provided healthcare to 2,000 people'
    ],
    image: '/images/journey/2010-expansion.jpg'
  },
  {
    year: '2012',
    title: 'Recognition & Growth',
    description: 'Received our first national recognition for excellence in community development, marking a significant milestone in our journey.',
    icon: Award,
    color: 'from-amber-500 to-orange-500',
    achievements: [
      'National Excellence Award',
      'Partnership with 5 schools',
      'Launched vocational training center',
      'Established scholarship program'
    ],
    image: '/images/journey/2012-recognition.jpg'
  },
  {
    year: '2015',
    title: 'Digital Innovation',
    description: 'Embraced technology to enhance our programs, launching digital literacy initiatives and online learning platforms.',
    icon: Rocket,
    color: 'from-purple-500 to-violet-500',
    achievements: [
      'Digital learning centers in 10 locations',
      'Online courses for 1,000+ students',
      'Mobile app for health tracking',
      'Technology training for 500 women'
    ],
    image: '/images/journey/2015-digital.jpg'
  },
  {
    year: '2018',
    title: 'Sustainable Impact',
    description: 'Achieved a major milestone by demonstrating sustainable, long-term impact in our core communities, with several becoming self-sufficient.',
    icon: Heart,
    color: 'from-rose-500 to-pink-500',
    achievements: [
      '20+ communities transformed',
      'Zero dropout rate in partner schools',
      'Clean water access for 15,000 people',
      'Carbon neutral operations achieved'
    ],
    image: '/images/journey/2018-sustainable.jpg'
  },
  {
    year: '2020',
    title: 'Crisis Response',
    description: 'During the global pandemic, we rapidly adapted our programs to provide emergency support while maintaining our long-term commitments.',
    icon: Users,
    color: 'from-cyan-500 to-blue-500',
    achievements: [
      'Emergency relief to 5,000 families',
      'Online education platform launched',
      'Telemedicine services established',
      'Mental health support programs'
    ],
    image: '/images/journey/2020-crisis.jpg'
  },
  {
    year: '2023',
    title: 'Global Recognition',
    description: 'Our innovative approach to community development gained international attention, leading to partnerships with global organizations.',
    icon: Globe,
    color: 'from-indigo-500 to-purple-500',
    achievements: [
      'UN SDG Partnership',
      'International Excellence Award',
      '50,000+ lives impacted',
      'Replication model in 3 countries'
    ],
    image: '/images/journey/2023-global.jpg'
  }
];

export default function Timeline() {
  const [selectedYear, setSelectedYear] = useState('2008');

  const selectedEvent = timelineEvents.find(event => event.year === selectedYear) || timelineEvents[0];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A journey through the years, showcasing key milestones, achievements, 
            and moments that have shaped SANKET into the organization it is today.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Timeline</h3>
              <div className="space-y-4">
                {timelineEvents.map((event) => (
                  <button
                    key={event.year}
                    onClick={() => setSelectedYear(event.year)}
                    className={`w-full text-left p-4 rounded-xl transition-all duration-300 ${
                      selectedYear === event.year
                        ? 'bg-gradient-to-r from-indigo-100 to-emerald-100 border-l-4 border-indigo-500'
                        : 'bg-white hover:bg-gray-50 border border-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-lg flex items-center justify-center mr-4`}>
                        <event.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <div className={`font-bold ${
                          selectedYear === event.year ? 'text-indigo-700' : 'text-gray-900'
                        }`}>
                          {event.year}
                        </div>
                        <div className={`text-sm ${
                          selectedYear === event.year ? 'text-indigo-600' : 'text-gray-600'
                        }`}>
                          {event.title}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Event Details */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
              {/* Event Image */}
              <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className={`w-20 h-20 bg-gradient-to-r ${selectedEvent.color} rounded-2xl flex items-center justify-center`}>
                  <selectedEvent.icon className="text-white" size={40} />
                </div>
              </div>

              {/* Event Content */}
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedEvent.color} rounded-xl flex items-center justify-center mr-4`}>
                    <selectedEvent.icon className="text-white" size={24} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900">{selectedEvent.year}</h3>
                    <p className="text-xl text-indigo-600 font-semibold">{selectedEvent.title}</p>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-lg mb-8">
                  {selectedEvent.description}
                </p>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Key Achievements</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedEvent.achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className="flex items-center p-3 bg-gray-50 rounded-lg border border-gray-100"
                      >
                        <div className={`w-8 h-8 bg-gradient-to-r ${selectedEvent.color} rounded-lg flex items-center justify-center mr-3`}>
                          <Calendar className="text-white" size={16} />
                        </div>
                        <span className="text-gray-700 font-medium">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Visual */}
        <div className="mt-20">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-indigo-200 to-emerald-200 rounded-full" />
            
            {/* Timeline Points */}
            <div className="space-y-16">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{event.year}</h4>
                      <h5 className="text-lg font-semibold text-indigo-600 mb-2">{event.title}</h5>
                      <p className="text-gray-600 text-sm">{event.description}</p>
                    </div>
                  </div>
                  
                  {/* Center Point */}
                  <div className="relative z-10">
                    <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-full flex items-center justify-center border-4 border-white shadow-lg`}>
                      <event.icon className="text-white" size={20} />
                    </div>
                  </div>
                  
                  <div className="w-5/12" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
