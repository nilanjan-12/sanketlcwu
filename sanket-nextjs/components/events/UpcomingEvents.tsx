'use client';

import { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Tag, ExternalLink } from 'lucide-react';

const upcomingEvents = [
  {
    id: 1,
    title: 'Annual Fundraising Gala 2024',
    date: '2024-10-15',
    time: '7:00 PM - 11:00 PM',
    location: 'The Grand Ballroom, Mumbai',
    address: 'Marine Drive, Nariman Point, Mumbai, Maharashtra',
    category: 'Fundraising',
    type: 'Gala',
    capacity: 500,
    registered: 342,
    price: 'Free (By Invitation)',
    image: '/images/events/fundraising-gala-2024.jpg',
    description: 'Join us for an elegant evening of celebration, networking, and fundraising to support our ongoing programs. The gala will feature keynote speakers, cultural performances, and an auction.',
    highlights: [
      'Keynote by renowned social entrepreneur',
      'Cultural performances by local artists',
      'Silent auction with exclusive items',
      'Networking with changemakers and donors'
    ],
    agenda: [
      { time: '7:00 PM', activity: 'Registration & Welcome Drinks' },
      { time: '7:30 PM', activity: 'Opening Ceremony & Welcome Address' },
      { time: '8:00 PM', activity: 'Keynote Speech' },
      { time: '8:30 PM', activity: 'Cultural Performances' },
      { time: '9:00 PM', activity: 'Dinner & Networking' },
      { time: '10:00 PM', activity: 'Silent Auction Results' },
      { time: '11:00 PM', activity: 'Closing & Thank You' }
    ],
    speakers: [
      'Dr. Radhika Menon - Social Entrepreneur',
      'Mr. Anil Sharma - SANKET Founder',
      'Ms. Priya Nair - Impact Beneficiary'
    ],
    registrationUrl: '/events/register/fundraising-gala-2024',
    color: 'from-purple-500 to-violet-500',
    featured: true
  },
  {
    id: 2,
    title: 'Volunteer Training Camp',
    date: '2024-09-28',
    time: '9:00 AM - 5:00 PM',
    location: 'SANKET Training Center, Delhi',
    address: 'Sector 12, Dwarka, New Delhi, Delhi',
    category: 'Training',
    type: 'Workshop',
    capacity: 100,
    registered: 67,
    price: 'Free',
    image: '/images/events/volunteer-training-2024.jpg',
    description: 'Comprehensive training program for new and existing volunteers. Learn about our programs, methodologies, and how to maximize your impact in communities.',
    highlights: [
      'Interactive training sessions',
      'Hands-on skill development',
      'Networking with experienced volunteers',
      'Certificate of completion'
    ],
    agenda: [
      { time: '9:00 AM', activity: 'Registration & Breakfast' },
      { time: '9:30 AM', activity: 'Welcome & SANKET Overview' },
      { time: '10:30 AM', activity: 'Program Deep Dives' },
      { time: '12:30 PM', activity: 'Lunch & Networking' },
      { time: '1:30 PM', activity: 'Hands-on Workshop Sessions' },
      { time: '3:30 PM', activity: 'Q&A with Experienced Volunteers' },
      { time: '4:30 PM', activity: 'Next Steps & Certificate Ceremony' },
      { time: '5:00 PM', activity: 'Wrap-up & Refreshments' }
    ],
    speakers: [
      'SANKET Program Directors',
      'Senior Volunteer Mentors',
      'Community Representatives'
    ],
    registrationUrl: '/events/register/volunteer-training-2024',
    color: 'from-emerald-500 to-teal-500',
    featured: true
  },
  {
    id: 3,
    title: 'Community Health Fair',
    date: '2024-09-20',
    time: '8:00 AM - 4:00 PM',
    location: 'Rural Health Center, West Bengal',
    address: 'Village Madhyamgram, South 24 Parganas, West Bengal',
    category: 'Health',
    type: 'Community Event',
    capacity: 1000,
    registered: 756,
    price: 'Free',
    image: '/images/events/health-fair-2024.jpg',
    description: 'Free health screening, awareness sessions, and medical consultations for rural communities. Multiple specialty doctors and health experts will be present.',
    highlights: [
      'Free health screenings',
      'Specialist doctor consultations',
      'Health awareness sessions',
      'Free medicines and supplies'
    ],
    agenda: [
      { time: '8:00 AM', activity: 'Setup & Registration Opens' },
      { time: '9:00 AM', activity: 'Opening Ceremony' },
      { time: '9:30 AM', activity: 'Health Screening Stations Open' },
      { time: '10:00 AM', activity: 'Specialist Consultations Begin' },
      { time: '11:00 AM', activity: 'Health Awareness Sessions' },
      { time: '1:00 PM', activity: 'Lunch Break' },
      { time: '2:00 PM', activity: 'Afternoon Screening Sessions' },
      { time: '3:30 PM', activity: 'Community Health Training' },
      { time: '4:00 PM', activity: 'Closing & Distribution of Supplies' }
    ],
    speakers: [
      'Dr. Amit Gupta - General Medicine',
      'Dr. Sunita Roy - Pediatrics',
      'Health Educator Team'
    ],
    registrationUrl: '/events/register/health-fair-2024',
    color: 'from-rose-500 to-pink-500',
    featured: false
  },
  {
    id: 4,
    title: 'Environmental Awareness Workshop',
    date: '2024-10-05',
    time: '10:00 AM - 3:00 PM',
    location: 'Green Campus, Pune',
    address: 'Hinjewadi Phase 2, Pune, Maharashtra',
    category: 'Environment',
    type: 'Workshop',
    capacity: 200,
    registered: 145,
    price: '₹500 per person',
    image: '/images/events/environment-workshop-2024.jpg',
    description: 'Learn about sustainable practices, climate change mitigation, and how to implement environmental conservation in your community.',
    highlights: [
      'Expert sessions on climate change',
      'Hands-on sustainable living demos',
      'Tree plantation activity',
      'Take-home sustainability kit'
    ],
    agenda: [
      { time: '10:00 AM', activity: 'Registration & Welcome Coffee' },
      { time: '10:30 AM', activity: 'Climate Change Overview' },
      { time: '11:30 AM', activity: 'Sustainable Living Practices' },
      { time: '12:30 PM', activity: 'Lunch (Organic & Local)' },
      { time: '1:30 PM', activity: 'Hands-on Workshops' },
      { time: '2:30 PM', activity: 'Community Tree Plantation' },
      { time: '3:00 PM', activity: 'Closing & Kit Distribution' }
    ],
    speakers: [
      'Dr. Kavita Sharma - Environmental Scientist',
      'Mr. Rajesh Gupta - Sustainability Expert',
      'Community Green Champions'
    ],
    registrationUrl: '/events/register/environment-workshop-2024',
    color: 'from-emerald-500 to-teal-500',
    featured: false
  },
  {
    id: 5,
    title: 'Youth Leadership Summit',
    date: '2024-11-12',
    time: '9:00 AM - 6:00 PM',
    location: 'Conference Hall, Bangalore',
    address: 'UB City Mall, Vittal Mallya Road, Bangalore, Karnataka',
    category: 'Leadership',
    type: 'Summit',
    capacity: 300,
    registered: 198,
    price: '₹200 per person',
    image: '/images/events/youth-summit-2024.jpg',
    description: 'Inspiring young leaders to drive social change. Interactive sessions, panel discussions, and networking opportunities for youth aged 18-30.',
    highlights: [
      'Inspiring keynote speakers',
      'Interactive leadership workshops',
      'Peer networking sessions',
      'Action planning for social impact'
    ],
    agenda: [
      { time: '9:00 AM', activity: 'Registration & Networking Breakfast' },
      { time: '9:45 AM', activity: 'Opening Keynote' },
      { time: '10:45 AM', activity: 'Leadership Workshop - Session 1' },
      { time: '12:00 PM', activity: 'Panel: Young Changemakers' },
      { time: '1:00 PM', activity: 'Lunch & Networking' },
      { time: '2:00 PM', activity: 'Workshop - Session 2' },
      { time: '3:30 PM', activity: 'Action Planning Session' },
      { time: '5:00 PM', activity: 'Presentations & Closing' },
      { time: '6:00 PM', activity: 'Networking Dinner' }
    ],
    speakers: [
      'Ms. Anjali Pichai - Young Entrepreneur',
      'Mr. Rahul Dravid - Youth Mentor',
      'Panel of Young Social Entrepreneurs'
    ],
    registrationUrl: '/events/register/youth-summit-2024',
    color: 'from-blue-500 to-indigo-500',
    featured: false
  },
  {
    id: 6,
    title: 'Digital Literacy Boot Camp',
    date: '2024-10-22',
    time: '10:00 AM - 4:00 PM',
    location: 'Community Center, Chennai',
    address: 'T. Nagar, Chennai, Tamil Nadu',
    category: 'Technology',
    type: 'Boot Camp',
    capacity: 80,
    registered: 52,
    price: 'Free',
    image: '/images/events/digital-bootcamp-2024.jpg',
    description: 'Intensive training program to teach basic digital skills to adults and seniors. Covers smartphone usage, internet safety, and online banking.',
    highlights: [
      'Hands-on device training',
      'Internet safety education',
      'Online banking tutorials',
      'One-on-one support available'
    ],
    agenda: [
      { time: '10:00 AM', activity: 'Registration & Device Setup' },
      { time: '10:30 AM', activity: 'Smartphone Basics' },
      { time: '11:30 AM', activity: 'Internet & Apps Introduction' },
      { time: '12:30 PM', activity: 'Lunch Break' },
      { time: '1:30 PM', activity: 'Online Safety & Privacy' },
      { time: '2:30 PM', activity: 'Digital Banking Basics' },
      { time: '3:30 PM', activity: 'Practice Session & Q&A' },
      { time: '4:00 PM', activity: 'Certificates & Next Steps' }
    ],
    speakers: [
      'Tech Trainers from SANKET',
      'Digital Banking Experts',
      'Cyber Security Specialists'
    ],
    registrationUrl: '/events/register/digital-bootcamp-2024',
    color: 'from-cyan-500 to-blue-500',
    featured: false
  }
];

const eventCategories = ['All Events', 'Fundraising', 'Training', 'Health', 'Environment', 'Leadership', 'Technology'];

export default function UpcomingEvents() {
  const [selectedCategory, setSelectedCategory] = useState('All Events');
  const [selectedEvent, setSelectedEvent] = useState(null);

  const filteredEvents = selectedCategory === 'All Events' 
    ? upcomingEvents 
    : upcomingEvents.filter(event => event.category === selectedCategory);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Upcoming <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Events</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us for meaningful events that create lasting impact. From training workshops 
            to community gatherings, find the perfect opportunity to get involved.
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

        {/* Featured Events */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Events</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredEvents.filter(event => event.featured).map((event) => (
              <div key={event.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${event.color} p-6 text-white relative`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {event.category}
                      </span>
                    </div>
                    <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                      {event.type}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{event.title}</h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-2" />
                      {formatDate(event.date)}
                    </div>
                    <div className="flex items-center">
                      <Clock size={16} className="mr-2" />
                      {event.time}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users size={16} className="mr-2" />
                      {event.registered}/{event.capacity} registered
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">{event.description}</p>
                  
                  {/* Progress Bar */}
                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">Registration Progress</span>
                      <span className="text-sm text-gray-500">
                        {Math.round((event.registered / event.capacity) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-gradient-to-r ${event.color} h-2 rounded-full transition-all duration-500`}
                        style={{ width: `${(event.registered / event.capacity) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Price and Registration */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Tag className="text-gray-400 mr-2" size={16} />
                      <span className="font-semibold text-gray-900">{event.price}</span>
                    </div>
                    <div className="flex gap-3">
                      <button
                        onClick={() => setSelectedEvent(event)}
                        className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                      >
                        View Details
                      </button>
                      <a
                        href={event.registrationUrl}
                        className={`bg-gradient-to-r ${event.color} text-white px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center`}
                      >
                        Register Now
                        <ExternalLink size={16} className="ml-2" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Events Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Upcoming Events</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${event.color} rounded-lg flex items-center justify-center`}>
                    <Calendar className="text-white" size={20} />
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{event.category}</span>
                    <div className="text-xs text-gray-500 mt-1">{event.type}</div>
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">{event.title}</h4>
                
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <div className="flex items-center">
                    <Calendar size={14} className="mr-2" />
                    {formatDate(event.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock size={14} className="mr-2" />
                    {event.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={14} className="mr-2" />
                    {event.location}
                  </div>
                </div>
                
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="font-medium text-gray-900">{event.price}</span>
                  <span className="text-gray-500">{event.registered}/{event.capacity} spots</span>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedEvent(event)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    Details
                  </button>
                  <a
                    href={event.registrationUrl}
                    className="flex-1 bg-indigo-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors text-center"
                  >
                    Register
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Event Details Modal */}
        {selectedEvent && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className={`bg-gradient-to-r ${selectedEvent.color} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold">{selectedEvent.title}</h3>
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="text-white/80 hover:text-white text-2xl leading-none"
                  >
                    ×
                  </button>
                </div>
                <p className="text-white/90 mb-4">{selectedEvent.description}</p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center">
                    <Calendar size={16} className="mr-2" />
                    {formatDate(selectedEvent.date)}
                  </div>
                  <div className="flex items-center">
                    <Clock size={16} className="mr-2" />
                    {selectedEvent.time}
                  </div>
                  <div className="col-span-2 flex items-start">
                    <MapPin size={16} className="mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div>{selectedEvent.location}</div>
                      <div className="text-white/80 text-xs">{selectedEvent.address}</div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Event Highlights</h4>
                  <ul className="space-y-2">
                    {selectedEvent.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Agenda */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Event Agenda</h4>
                  <div className="space-y-3">
                    {selectedEvent.agenda.map((item, index) => (
                      <div key={index} className="flex items-start">
                        <div className="bg-gray-100 px-3 py-1 rounded-full text-sm font-medium mr-4 flex-shrink-0">
                          {item.time}
                        </div>
                        <span className="text-gray-700">{item.activity}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Speakers */}
                <div className="mb-6">
                  <h4 className="font-bold text-gray-900 mb-3">Speakers & Facilitators</h4>
                  <ul className="space-y-1">
                    {selectedEvent.speakers.map((speaker, index) => (
                      <li key={index} className="text-gray-700">{speaker}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-4">
                  <button
                    onClick={() => setSelectedEvent(null)}
                    className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                  >
                    Close
                  </button>
                  <a
                    href={selectedEvent.registrationUrl}
                    className={`flex-1 bg-gradient-to-r ${selectedEvent.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity text-center`}
                  >
                    Register for Event
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
