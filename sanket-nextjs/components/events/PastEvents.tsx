'use client';

import { useState } from 'react';
import { Calendar, MapPin, Users, Play, Image as ImageIcon, FileText } from 'lucide-react';

const pastEvents = [
  {
    id: 1,
    title: 'Annual Impact Summit 2024',
    date: '2024-03-15',
    location: 'Convention Center, Delhi',
    attendees: 800,
    category: 'Conference',
    description: 'Our largest annual gathering brought together stakeholders, beneficiaries, and supporters to celebrate achievements and plan for the future.',
    highlights: [
      '800+ attendees from across India',
      '25+ speakers and panelists',
      'Launch of 3 new program initiatives',
      '₹2.5M raised for upcoming projects'
    ],
    outcomes: [
      'Strengthened partnerships with 15 new organizations',
      'Recruited 50+ new volunteers',
      'Secured funding for rural education expansion',
      'Established mentorship program framework'
    ],
    media: {
      photos: 45,
      videos: 8,
      testimonials: 12
    },
    downloadLinks: [
      { type: 'Event Report', url: '/downloads/annual-summit-2024-report.pdf' },
      { type: 'Photo Gallery', url: '/gallery/annual-summit-2024' },
      { type: 'Video Highlights', url: '/media/annual-summit-2024-highlights' }
    ],
    color: 'from-purple-500 to-violet-500',
    featured: true
  },
  {
    id: 2,
    title: 'Rural Education Workshop Series',
    date: '2024-01-20',
    location: 'Multiple Villages, Rajasthan',
    attendees: 300,
    category: 'Workshop',
    description: 'Five-day intensive workshop series across rural Rajasthan focusing on innovative teaching methods and community engagement.',
    highlights: [
      'Conducted in 8 villages over 5 days',
      'Trained 45 local teachers',
      'Reached 300+ community members',
      'Distributed educational materials to 12 schools'
    ],
    outcomes: [
      'Improved teaching methodologies adopted',
      'Community education committees formed',
      'Parent engagement increased by 60%',
      'Student attendance improved by 25%'
    ],
    media: {
      photos: 120,
      videos: 15,
      testimonials: 8
    },
    downloadLinks: [
      { type: 'Workshop Manual', url: '/downloads/rural-education-workshop-manual.pdf' },
      { type: 'Training Materials', url: '/downloads/teacher-training-materials.zip' },
      { type: 'Impact Assessment', url: '/downloads/workshop-impact-report.pdf' }
    ],
    color: 'from-blue-500 to-indigo-500',
    featured: true
  },
  {
    id: 3,
    title: 'Community Health Camp Marathon',
    date: '2023-11-10',
    location: 'Sundarbans Region, West Bengal',
    attendees: 2500,
    category: 'Health',
    description: 'Week-long health camp series across remote Sundarbans villages, providing free medical care and health education.',
    highlights: [
      '2,500+ patients treated',
      '15 medical specialists participated',
      'Free medicines worth ₹5L distributed',
      'Health awareness sessions for 1,000+ families'
    ],
    outcomes: [
      'Early detection of 50+ chronic conditions',
      'Immunization coverage increased to 95%',
      'Community health worker network established',
      'Telemedicine center launched'
    ],
    media: {
      photos: 200,
      videos: 20,
      testimonials: 25
    },
    downloadLinks: [
      { type: 'Medical Camp Report', url: '/downloads/sundarbans-health-camp-2023.pdf' },
      { type: 'Health Guidelines', url: '/downloads/community-health-guidelines.pdf' },
      { type: 'Patient Stories', url: '/stories/sundarbans-health-transformation' }
    ],
    color: 'from-rose-500 to-pink-500',
    featured: false
  },
  {
    id: 4,
    title: 'Green Himachal Initiative Launch',
    date: '2023-09-22',
    location: 'Shimla Hills, Himachal Pradesh',
    attendees: 500,
    category: 'Environment',
    description: 'Major environmental initiative launch featuring tree plantation, sustainable farming workshops, and eco-tourism development.',
    highlights: [
      '10,000 saplings planted in one day',
      '500 community members participated',
      'Sustainable farming techniques demonstrated',
      'Eco-tourism routes established'
    ],
    outcomes: [
      '85% sapling survival rate achieved',
      'Organic farming adopted by 100+ families',
      'Eco-tourism generated ₹2M revenue',
      'Forest cover increased by 15%'
    ],
    media: {
      photos: 150,
      videos: 12,
      testimonials: 15
    },
    downloadLinks: [
      { type: 'Initiative Report', url: '/downloads/green-himachal-report.pdf' },
      { type: 'Plantation Guide', url: '/downloads/tree-plantation-guide.pdf' },
      { type: 'Eco-tourism Map', url: '/downloads/himachal-eco-routes.pdf' }
    ],
    color: 'from-emerald-500 to-teal-500',
    featured: false
  },
  {
    id: 5,
    title: 'Digital Skills for Women Bootcamp',
    date: '2023-08-05',
    location: 'Urban Learning Centers, Mumbai',
    attendees: 200,
    category: 'Technology',
    description: 'Intensive 3-day bootcamp teaching digital skills to women from low-income communities, focusing on entrepreneurship and online business.',
    highlights: [
      '200 women trained in digital skills',
      '50+ micro-businesses launched',
      'Partnership with 10 local organizations',
      'Job placement support for 150 participants'
    ],
    outcomes: [
      '80% participants started online businesses',
      'Average income increased by 150%',
      'Digital literacy rate improved to 90%',
      'Ongoing mentorship program established'
    ],
    media: {
      photos: 80,
      videos: 10,
      testimonials: 20
    },
    downloadLinks: [
      { type: 'Training Curriculum', url: '/downloads/digital-skills-curriculum.pdf' },
      { type: 'Success Stories', url: '/stories/women-digital-entrepreneurs' },
      { type: 'Business Templates', url: '/downloads/business-templates.zip' }
    ],
    color: 'from-cyan-500 to-blue-500',
    featured: false
  },
  {
    id: 6,
    title: 'Youth Leadership Conclave',
    date: '2023-06-12',
    location: 'University Campus, Bangalore',
    attendees: 400,
    category: 'Leadership',
    description: 'Two-day intensive leadership development program for youth aged 18-25, focusing on social entrepreneurship and community leadership.',
    highlights: [
      '400 young leaders from 15 states',
      '20+ successful social entrepreneurs as mentors',
      'Pitch competition with ₹50K prizes',
      'Formation of 25 youth leadership circles'
    ],
    outcomes: [
      '15 social ventures launched by participants',
      'Youth leadership network established',
      'Mentorship matches for 200+ participants',
      'Follow-up funding secured for 8 ventures'
    ],
    media: {
      photos: 100,
      videos: 12,
      testimonials: 18
    },
    downloadLinks: [
      { type: 'Leadership Handbook', url: '/downloads/youth-leadership-handbook.pdf' },
      { type: 'Venture Pitches', url: '/media/youth-venture-pitches' },
      { type: 'Networking Directory', url: '/downloads/youth-network-directory.pdf' }
    ],
    color: 'from-amber-500 to-orange-500',
    featured: false
  }
];

const eventCategories = ['All Events', 'Conference', 'Workshop', 'Health', 'Environment', 'Technology', 'Leadership'];

export default function PastEvents() {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = selectedCategory === 'All Events' 
    ? pastEvents 
    : pastEvents.filter(event => event.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Past <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explore our successful events and their lasting impact on communities. 
            Each event represents a step forward in our mission to create positive change.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {eventCategories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
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

        {/* Impact Summary Stats */}
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Cumulative Event Impact
            </h3>
            <p className="text-lg text-gray-600">
              The collective results of our past events and their ongoing influence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-4xl font-bold text-indigo-600 mb-2">
                {pastEvents.reduce((sum, event) => sum + event.attendees, 0).toLocaleString()}
              </div>
              <div className="text-gray-600 font-medium">Total Attendees</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-4xl font-bold text-emerald-600 mb-2">
                {pastEvents.reduce((sum, event) => sum + event.media.photos, 0)}
              </div>
              <div className="text-gray-600 font-medium">Photos Captured</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-4xl font-bold text-rose-600 mb-2">
                {pastEvents.reduce((sum, event) => sum + event.media.videos, 0)}
              </div>
              <div className="text-gray-600 font-medium">Videos Produced</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="text-4xl font-bold text-amber-600 mb-2">
                {pastEvents.reduce((sum, event) => sum + event.media.testimonials, 0)}
              </div>
              <div className="text-gray-600 font-medium">Testimonials</div>
            </div>
          </div>
        </div>

        {/* Featured Past Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Past Events</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${event.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {event.category}
                    </span>
                    <span className="text-white/80 text-sm">{formatDate(event.date)}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{event.title}</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2" />
                      {event.attendees.toLocaleString()} attendees
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                  
                  {/* Key Highlights */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Highlights</h5>
                    <div className="space-y-2">
                      {event.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Media Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-center mb-2">
                        <ImageIcon size={20} className="text-gray-600" />
                      </div>
                      <div className="font-bold text-gray-900">{event.media.photos}</div>
                      <div className="text-gray-600 text-xs">Photos</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-center mb-2">
                        <Play size={20} className="text-gray-600" />
                      </div>
                      <div className="font-bold text-gray-900">{event.media.videos}</div>
                      <div className="text-gray-600 text-xs">Videos</div>
                    </div>
                    <div className="text-center bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center justify-center mb-2">
                        <Users size={20} className="text-gray-600" />
                      </div>
                      <div className="font-bold text-gray-900">{event.media.testimonials}</div>
                      <div className="text-gray-600 text-xs">Stories</div>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={() => setSelectedEvent(event)}
                      className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                      View Full Report
                    </button>
                    <button className={`flex-1 bg-gradient-to-r ${event.color} text-white py-2 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                      View Media
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Past Events Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Past Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-lg flex items-center justify-center`}>
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{event.category}</span>
                    <div className="text-xs text-gray-500 mt-1">{formatDate(event.date)}</div>
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">{event.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-1" />
                    {event.location.split(',')[0]}
                  </div>
                  <div className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {event.attendees.toLocaleString()}
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="flex-1 bg-indigo-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
                  >
                    View Report
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                    Media Gallery
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Detail Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className={`bg-gradient-to-r ${selectedEvent.color} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">{selectedEvent.title}</h3>
                    <div className="flex items-center space-x-4 text-white/90">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-2" />
                        {formatDate(selectedEvent.date)}
                      </div>
                      <div className="flex items-center">
                        <MapPin size={16} className="mr-2" />
                        {selectedEvent.location}
                      </div>
                      <div className="flex items-center">
                        <Users size={16} className="mr-2" />
                        {selectedEvent.attendees.toLocaleString()} attendees
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-white/80 hover:text-white text-3xl leading-none"
                  >
                    ×
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Column */}
                  <div>
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Event Overview</h4>
                      <p className="text-gray-700 leading-relaxed">{selectedEvent.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Key Highlights</h4>
                      <ul className="space-y-2">
                        {selectedEvent.highlights.map((highlight, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Media Coverage</h4>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <ImageIcon className="mx-auto mb-2 text-gray-600" size={24} />
                          <div className="font-bold text-gray-900">{selectedEvent.media.photos}</div>
                          <div className="text-gray-600 text-sm">Photos</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <Play className="mx-auto mb-2 text-gray-600" size={24} />
                          <div className="font-bold text-gray-900">{selectedEvent.media.videos}</div>
                          <div className="text-gray-600 text-sm">Videos</div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-4 text-center">
                          <Users className="mx-auto mb-2 text-gray-600" size={24} />
                          <div className="font-bold text-gray-900">{selectedEvent.media.testimonials}</div>
                          <div className="text-gray-600 text-sm">Stories</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div>
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Measurable Outcomes</h4>
                      <ul className="space-y-2">
                        {selectedEvent.outcomes.map((outcome, index) => (
                          <li key={index} className="flex items-start">
                            <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">Downloads & Resources</h4>
                      <div className="space-y-3">
                        {selectedEvent.downloadLinks.map((link, index) => (
                          <a
                            key={index}
                            href={link.url}
                            className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                          >
                            <FileText className="text-gray-600 mr-3" size={20} />
                            <div>
                              <div className="font-medium text-gray-900">{link.type}</div>
                              <div className="text-gray-600 text-sm">Click to download</div>
                            </div>
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6 flex gap-4">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </button>
                  <button className={`flex-1 bg-gradient-to-r ${selectedEvent.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                    View Full Media Gallery
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
