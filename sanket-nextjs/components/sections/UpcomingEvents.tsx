import Link from 'next/link';
import { MapPin, Clock } from 'lucide-react';

const events = [
  {
    date: { day: '15', month: 'Sep' },
    title: 'Women Empowerment Workshop',
    location: 'Rajgarh Village, Madhya Pradesh',
    time: '10:00 AM - 3:00 PM'
  },
  {
    date: { day: '22', month: 'Sep' },
    title: 'Mobile Health Camp',
    location: 'Marathwada Region, Maharashtra',
    time: '9:00 AM - 2:00 PM'
  },
  {
    date: { day: '30', month: 'Sep' },
    title: 'Digital Literacy Training',
    location: 'Urban Community Center, Delhi',
    time: '10:00 AM - 4:00 PM'
  }
];

export default function UpcomingEvents() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Upcoming Events</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:-translate-y-2 hover:shadow-lg transition-all duration-200"
            >
              <div className="p-6 flex gap-6">
                <div className="flex-shrink-0 bg-gradient-to-br from-indigo-600 to-emerald-500 text-white p-4 rounded-xl text-center">
                  <div className="text-2xl font-bold">{event.date.day}</div>
                  <div className="text-sm uppercase">{event.date.month}</div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {event.title}
                  </h3>
                  
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {event.time}
                    </div>
                  </div>
                  
                  <Link
                    href="/events"
                    className="inline-block mt-4 text-indigo-600 font-medium hover:text-indigo-800 transition-colors"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/events"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 border-2 border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-indigo-600 hover:text-white hover:border-indigo-600 hover:-translate-y-0.5 hover:shadow-lg transition-all duration-200"
          >
            View All Events
          </Link>
        </div>
      </div>
    </section>
  );
}
