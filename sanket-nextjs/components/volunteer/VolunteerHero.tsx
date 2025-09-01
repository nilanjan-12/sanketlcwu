import { Users, Heart, Globe, Clock } from 'lucide-react';

const stats = [
  {
    icon: Users,
    value: '200+',
    label: 'Active Volunteers',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Heart,
    value: '10,000+',
    label: 'Volunteer Hours',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: Globe,
    value: '50+',
    label: 'Projects Completed',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Clock,
    value: '5',
    label: 'Hours/Week Average',
    color: 'from-amber-500 to-orange-500'
  }
];

const benefits = [
  'Make a real difference in communities',
  'Gain valuable skills and experience',
  'Meet like-minded individuals',
  'Professional development opportunities',
  'Flexible scheduling options',
  'Certificate of appreciation'
];

export default function VolunteerHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-600 via-indigo-600 to-emerald-600 mt-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-white/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-rose-300/10 rounded-full blur-3xl animate-pulse delay-500" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
              Volunteer with{' '}
              <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
                SANKET
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Join our community of changemakers and help us create lasting impact 
              in education, healthcare, and environmental conservation.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
                Start Volunteering Today
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all">
                Explore Opportunities
              </button>
            </div>

            {/* Benefits List */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-4">Why Volunteer with Us?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white/90">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-yellow-300 rounded-full mr-3" />
                    <span className="text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Stats */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="text-white" size={28} />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-white/80 text-sm font-medium">{stat.label}</div>
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
