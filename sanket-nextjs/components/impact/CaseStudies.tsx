'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Calendar, TrendingUp, Users } from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: 'Transforming Education in Thar Desert',
    location: 'Jaisalmer District, Rajasthan',
    duration: '2019 - Present',
    category: 'Education',
    image: '/images/case-studies/thar-desert-education.jpg',
    challenge: 'Low literacy rates (34%) due to lack of schools, qualified teachers, and cultural barriers to education, especially for girls.',
    solution: 'Established 8 community learning centers, trained 25 local teachers, provided scholarships for girls, and created flexible learning schedules.',
    results: [
      'Literacy rate increased from 34% to 78%',
      'Girl student enrollment increased by 150%',
      '1,200 children and 800 adults educated',
      '95% completion rate in primary education'
    ],
    impact: {
      before: {
        literacy: 34,
        schools: 2,
        teachers: 5,
        girlsEnrolled: 120
      },
      after: {
        literacy: 78,
        schools: 10,
        teachers: 30,
        girlsEnrolled: 300
      }
    },
    testimonial: {
      quote: 'My daughter is now studying to become a teacher. This was impossible before SANKET came to our village.',
      author: 'Kamala Devi, Parent',
      role: 'Village Resident'
    },
    color: 'from-blue-500 to-indigo-500'
  },
  {
    id: 2,
    title: 'Eliminating Malaria in Sundarbans',
    location: 'South 24 Parganas, West Bengal',
    duration: '2017 - 2020',
    category: 'Healthcare',
    image: '/images/case-studies/sundarbans-malaria.jpg',
    challenge: 'High malaria incidence (15 cases per 1000) due to stagnant water, lack of healthcare access, and limited awareness.',
    solution: 'Implemented comprehensive prevention program including water management, community health workers, rapid testing, and health education.',
    results: [
      'Malaria cases reduced by 95%',
      'Zero malaria deaths in 2020',
      '25 community health workers trained',
      '15,000 people covered by prevention program'
    ],
    impact: {
      before: {
        malariaRate: 15,
        healthWorkers: 2,
        clinics: 1,
        coverage: 3000
      },
      after: {
        malariaRate: 0.7,
        healthWorkers: 27,
        clinics: 5,
        coverage: 15000
      }
    },
    testimonial: {
      quote: 'We used to fear the monsoon season because of malaria. Now our children play freely without worry.',
      author: 'Dr. Amit Sarkar',
      role: 'Community Health Coordinator'
    },
    color: 'from-rose-500 to-pink-500'
  },
  {
    id: 3,
    title: 'Reforestation in Himachal Hills',
    location: 'Shimla District, Himachal Pradesh',
    duration: '2018 - Present',
    category: 'Environment',
    image: '/images/case-studies/himachal-reforestation.jpg',
    challenge: 'Severe deforestation (60% forest cover lost) leading to soil erosion, water scarcity, and declining biodiversity.',
    solution: 'Community-based reforestation program with native species, watershed management, and sustainable livelihood alternatives.',
    results: [
      '50,000 trees planted with 85% survival rate',
      'Forest cover increased by 25%',
      'Water table rose by 15 feet',
      '200 families engaged in eco-tourism'
    ],
    impact: {
      before: {
        forestCover: 40,
        treesPlanted: 0,
        waterSources: 8,
        ecoTourism: 0
      },
      after: {
        forestCover: 65,
        treesPlanted: 50000,
        waterSources: 15,
        ecoTourism: 200
      }
    },
    testimonial: {
      quote: 'Our hills are green again, and our children have a future here instead of migrating to cities.',
      author: 'Sunita Sharma',
      role: 'Women\'s Self-Help Group Leader'
    },
    color: 'from-emerald-500 to-teal-500'
  },
  {
    id: 4,
    title: 'Digital Empowerment in Urban Slums',
    location: 'Dharavi, Mumbai',
    duration: '2020 - 2023',
    category: 'Technology',
    image: '/images/case-studies/dharavi-digital.jpg',
    challenge: 'Limited digital literacy (12%) hindering access to government services, job opportunities, and online education during COVID-19.',
    solution: 'Established digital learning centers, provided smartphone training, created local language content, and facilitated online banking access.',
    results: [
      'Digital literacy increased to 68%',
      '2,500 people trained in digital skills',
      '400 women started online businesses',
      '1,000 children accessed online education'
    ],
    impact: {
      before: {
        digitalLiteracy: 12,
        onlineBusinesses: 5,
        bankingAccess: 30,
        onlineEducation: 50
      },
      after: {
        digitalLiteracy: 68,
        onlineBusinesses: 405,
        bankingAccess: 85,
        onlineEducation: 1050
      }
    },
    testimonial: {
      quote: 'I now run my tailoring business online and earn three times more than before.',
      author: 'Priya Nair',
      role: 'Entrepreneur & Program Graduate'
    },
    color: 'from-purple-500 to-violet-500'
  }
];

const impactCategories = ['All', 'Education', 'Healthcare', 'Environment', 'Technology'];

export default function CaseStudies() {
  const [currentStudy, setCurrentStudy] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredStudies = selectedCategory === 'All' 
    ? caseStudies 
    : caseStudies.filter(study => study.category === selectedCategory);

  const nextStudy = () => {
    setCurrentStudy((prev) => (prev + 1) % filteredStudies.length);
  };

  const prevStudy = () => {
    setCurrentStudy((prev) => (prev - 1 + filteredStudies.length) % filteredStudies.length);
  };

  const currentStudyData = filteredStudies[currentStudy] || caseStudies[0];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Case <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Studies</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            In-depth analysis of our most successful interventions, showcasing the methodology, 
            challenges overcome, and lasting impact created in communities.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {impactCategories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setCurrentStudy(0);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-indigo-600 to-emerald-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Case Study Image/Visual */}
            <div className={`bg-gradient-to-br ${currentStudyData.color} p-8 lg:p-12 text-white relative`}>
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <div className="mb-8">
                  <span className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold">
                    {currentStudyData.category}
                  </span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                  {currentStudyData.title}
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center">
                    <MapPin size={20} className="mr-3" />
                    {currentStudyData.location}
                  </div>
                  <div className="flex items-center">
                    <Calendar size={20} className="mr-3" />
                    {currentStudyData.duration}
                  </div>
                </div>

                {/* Key Results */}
                <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-4">Key Results</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {currentStudyData.results.slice(0, 4).map((result, index) => (
                      <div key={index} className="flex items-start">
                        <TrendingUp size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Case Study Content */}
            <div className="p-8 lg:p-12">
              {/* Challenge */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">The Challenge</h4>
                <p className="text-gray-600 leading-relaxed">
                  {currentStudyData.challenge}
                </p>
              </div>

              {/* Solution */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Solution</h4>
                <p className="text-gray-600 leading-relaxed">
                  {currentStudyData.solution}
                </p>
              </div>

              {/* Impact Numbers */}
              <div className="mb-8">
                <h4 className="text-xl font-bold text-gray-900 mb-4">Before & After</h4>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-red-50 rounded-xl p-4">
                    <h5 className="font-semibold text-red-700 mb-3">Before</h5>
                    <div className="space-y-2 text-sm">
                      {Object.entries(currentStudyData.impact.before).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                          <span className="font-semibold text-red-700">{value}{typeof value === 'number' && value < 100 ? '%' : ''}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="bg-emerald-50 rounded-xl p-4">
                    <h5 className="font-semibold text-emerald-700 mb-3">After</h5>
                    <div className="space-y-2 text-sm">
                      {Object.entries(currentStudyData.impact.after).map(([key, value]) => (
                        <div key={key} className="flex justify-between">
                          <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}:</span>
                          <span className="font-semibold text-emerald-700">{value}{typeof value === 'number' && value < 100 ? '%' : ''}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-full flex items-center justify-center mr-4">
                    <Users className="text-white" size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900">{currentStudyData.testimonial.author}</h5>
                    <p className="text-gray-600 text-sm">{currentStudyData.testimonial.role}</p>
                  </div>
                </div>
                <blockquote className="text-gray-700 italic leading-relaxed">
                  &quot;{currentStudyData.testimonial.quote}&quot;
                </blockquote>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevStudy}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Previous case study"
                >
                  <ChevronLeft size={20} />
                </button>
                
                <span className="text-gray-500 text-sm">
                  {currentStudy + 1} of {filteredStudies.length}
                </span>
                
                <button
                  onClick={nextStudy}
                  className="p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors"
                  aria-label="Next case study"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredStudies.map((study, index) => (
            <button
              key={study.id}
              onClick={() => setCurrentStudy(index)}
              className={`text-left bg-white rounded-xl p-6 shadow-sm border transition-all duration-300 hover:shadow-lg ${
                currentStudy === index ? 'border-indigo-300 shadow-lg' : 'border-gray-100'
              }`}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center mb-4`}>
                <MapPin className="text-white" size={20} />
              </div>
              <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">{study.title}</h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{study.location}</p>
              <span className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                {study.category}
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
