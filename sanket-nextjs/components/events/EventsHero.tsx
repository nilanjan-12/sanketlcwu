import { Calendar, MapPin, Users, Clock } from 'lucide-react';

const eventStats = [
  {
    icon: Calendar,
    number: '50+',
    label: 'Events This Year',
    description: 'Workshops, camps, and community gatherings',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Users,
    number: '5,000+',
    label: 'Total Attendees',
    description: 'Community members engaged through events',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: MapPin,
    number: '25+',
    label: 'Locations',
    description: 'Cities and villages where we organize events',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: Clock,
    number: '1,000+',
    label: 'Event Hours',
    description: 'Total hours of community engagement',
    color: 'from-amber-500 to-orange-500'
  }
];

const upcomingHighlights = [
  {
    title: 'Annual Fundraising Gala',
    date: 'October 15, 2024',
    location: 'Mumbai',
    attendees: '500+',
    type: 'Fundraising'
  },
  {
    title: 'Volunteer Training Camp',
    date: 'September 28, 2024',
    location: 'Delhi',
    attendees: '100+',
    type: 'Training'
  },
  {
    title: 'Community Health Fair',
    date: 'September 20, 2024',
    location: 'Rural Bengal',
    attendees: '1,000+',
    type: 'Health'
  }
];

export default function EventsHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-emerald-900 mt-20">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/30 to-emerald-600/30" />
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 left-1/6 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/6 w-48 h-48 bg-yellow-300/10 rounded-full blur-2xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-300/10 rounded-full blur-3xl animate-pulse delay-500" />
        
        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M20 20c0 11-9 20-20 20s-20-9-20-20 9-20 20-20 20 9 20 20zm-30-2c-2-2-2-6 2-6s6 4 6 6-4 6-6 6-4-4-2-6z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Community{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Join us for impactful events, workshops, and community gatherings that bring people together 
            for positive change. Every event is an opportunity to learn, connect, and contribute.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View Upcoming Events
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all">
              Register for Updates
            </button>
          </div>
        </div>

        {/* Event Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {eventStats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <stat.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
              <div className="text-white/90 font-semibold mb-2">{stat.label}</div>
              <div className="text-white/70 text-sm">{stat.description}</div>
            </div>
          ))}
        </div>

        {/* Upcoming Events Preview */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Next Big Events
            </h2>
            <p className="text-white/80 text-lg">
              Don&apos;t miss these upcoming opportunities to get involved
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingHighlights.map((event, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="mb-4">
                  <span className="bg-gradient-to-r from-yellow-300 to-orange-300 text-gray-900 px-3 py-1 rounded-full text-xs font-semibold">
                    {event.type}
                  </span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{event.title}</h3>
                
                <div className="space-y-2 text-white/80 text-sm mb-4">
                  <div className="flex items-center justify-center">
                    <Calendar size={16} className="mr-2" />
                    {event.date}
                  </div>
                  <div className="flex items-center justify-center">
                    <MapPin size={16} className="mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center justify-center">
                    <Users size={16} className="mr-2" />
                    {event.attendees} expected
                  </div>
                </div>
                
                <button className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors">
                  Learn More
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
