'use client';

import { MapPin, Navigation, ExternalLink, Phone, Clock } from 'lucide-react';

interface Location {
  id: number;
  name: string;
  address: string;
  type: string;
  phone: string;
  hours: string;
  coordinates: { lat: number; lng: number };
  description: string;
  facilities: string[];
  transport: string[];
  color: string;
}

const locations: Location[] = [
  {
    id: 1,
    name: 'SANKET Foundation - Main Office',
    address: 'Block A, Connaught Place, New Delhi - 110001',
    type: 'Headquarters',
    phone: '+91 98765 43210',
    hours: 'Mon-Fri: 9 AM - 6 PM, Sat: 10 AM - 4 PM',
    coordinates: { lat: 28.6315, lng: 77.2167 },
    description: 'Our main administrative office and volunteer coordination center.',
    facilities: ['Meeting Rooms', 'Volunteer Training Center', 'Resource Library', 'Community Hall'],
    transport: ['Rajiv Chowk Metro Station (5 min walk)', 'Multiple bus routes available', 'Parking available'],
    color: 'from-indigo-500 to-purple-600'
  },
  {
    id: 2,
    name: 'SANKET Community Center - South Delhi',
    address: 'Sector 15, Dwarka, New Delhi - 110075',
    type: 'Community Center',
    phone: '+91 98765 43216',
    hours: 'Mon-Sat: 8 AM - 7 PM, Sun: 10 AM - 5 PM',
    coordinates: { lat: 28.5921, lng: 77.0460 },
    description: 'Community programs, skill development workshops, and health camps.',
    facilities: ['Training Rooms', 'Computer Lab', 'Health Clinic', 'Children\'s Area'],
    transport: ['Dwarka Mor Metro Station (10 min)', 'Regular bus connectivity', 'Two-wheeler parking'],
    color: 'from-emerald-500 to-teal-600'
  },
  {
    id: 3,
    name: 'SANKET Rural Outreach Hub',
    address: 'Village Sector, Gurgaon, Haryana - 122001',
    type: 'Rural Hub',
    phone: '+91 98765 43217',
    hours: 'Mon-Sat: 9 AM - 5 PM',
    coordinates: { lat: 28.4595, lng: 77.0266 },
    description: 'Coordination center for our rural development programs and agricultural initiatives.',
    facilities: ['Storage Warehouse', 'Vehicle Depot', 'Field Office', 'Training Ground'],
    transport: ['Highway access', 'Bus route available', 'Large vehicle parking'],
    color: 'from-amber-500 to-orange-600'
  }
];

export default function LocationMap() {
  const openInGoogleMaps = (location: Location) => {
    const query = encodeURIComponent(location.address);
    window.open(`https://www.google.com/maps/search/?api=1&query=${query}`, '_blank');
  };

  const getDirections = (location: Location) => {
    const query = encodeURIComponent(location.address);
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${query}`, '_blank');
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Visit <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Us</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have multiple locations across the region to serve communities better. 
            Find the one nearest to you and come visit us.
          </p>
        </div>

        {/* Interactive Map Placeholder */}
        <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 mb-16 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MapPin size={48} className="text-white" />
            </div>
            
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Interactive Map</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Our interactive map feature is coming soon! For now, you can use the location details below 
              to find us on Google Maps or your preferred navigation app.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => window.open('https://www.google.com/maps/search/SANKET+Foundation+New+Delhi', '_blank')}
                className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center"
              >
                <ExternalLink size={20} className="mr-2" />
                View on Google Maps
              </button>
              <button
                onClick={() => window.open('https://maps.apple.com/?q=SANKET+Foundation+New+Delhi', '_blank')}
                className="bg-gradient-to-r from-gray-700 to-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center"
              >
                <Navigation size={20} className="mr-2" />
                View on Apple Maps
              </button>
            </div>
          </div>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <div key={location.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
              {/* Header */}
              <div className={`bg-gradient-to-r ${location.color} p-6 text-white`}>
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {location.type}
                  </div>
                  <MapPin size={24} className="text-white/80" />
                </div>
                
                <h3 className="text-xl font-bold mb-2">{location.name}</h3>
                <p className="text-white/90 text-sm leading-relaxed">{location.description}</p>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Address */}
                <div className="mb-6">
                  <div className="flex items-start mb-2">
                    <MapPin size={20} className="text-gray-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-gray-900">Address</p>
                      <p className="text-gray-600 text-sm">{location.address}</p>
                    </div>
                  </div>
                </div>

                {/* Contact & Hours */}
                <div className="grid grid-cols-1 gap-4 mb-6">
                  <div className="flex items-center">
                    <Phone size={16} className="text-gray-400 mr-3" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Phone</p>
                      <a href={`tel:${location.phone}`} className="text-indigo-600 hover:text-indigo-700 text-sm">
                        {location.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock size={16} className="text-gray-400 mr-3 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">Hours</p>
                      <p className="text-gray-600 text-sm">{location.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Facilities */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Facilities</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.facilities.map((facility, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs">
                        {facility}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Transportation */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 mb-3">Transportation</h4>
                  <ul className="space-y-1">
                    {location.transport.map((option, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{option}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => openInGoogleMaps(location)}
                    className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-medium hover:bg-gray-200 transition-colors text-center flex items-center justify-center"
                  >
                    <ExternalLink size={16} className="mr-2" />
                    View Map
                  </button>
                  <button
                    onClick={() => getDirections(location)}
                    className={`flex-1 bg-gradient-to-r ${location.color} text-white py-2 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity text-center flex items-center justify-center`}
                  >
                    <Navigation size={16} className="mr-2" />
                    Get Directions
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Planning to Visit?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to meet you in person! For the best experience, we recommend calling ahead 
            to ensure someone from our team is available to assist you properly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Call Ahead</h4>
              <p className="text-gray-600 text-sm">
                Let us know you&apos;re coming so we can prepare for your visit and assign a team member to assist you.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Check Hours</h4>
              <p className="text-gray-600 text-sm">
                Our locations have different operating hours. Check the specific timings before your visit.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin size={24} className="text-white" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Easy Access</h4>
              <p className="text-gray-600 text-sm">
                All our locations are accessible by public transport and have parking facilities available.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
