import { Target, Eye, Heart, Globe } from 'lucide-react';

const missionItems = [
  {
    icon: Target,
    title: 'Our Mission',
    description: 'To create sustainable positive change in communities through education, environmental conservation, and healthcare initiatives that empower individuals and strengthen society.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description: 'A world where every individual has access to quality education, clean environment, and healthcare services, creating equitable opportunities for all to thrive.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Heart,
    title: 'Our Values',
    description: 'Integrity, compassion, inclusivity, and sustainability guide every action we take. We believe in transparent operations and community-driven solutions.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: Globe,
    title: 'Our Impact',
    description: 'Through collaborative partnerships and innovative programs, we have positively impacted thousands of lives across multiple communities, creating lasting change.',
    color: 'from-amber-500 to-orange-500'
  }
];

export default function Mission() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Purpose</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            SANKET is driven by a fundamental belief that sustainable change comes from within communities. 
            We work alongside local leaders to create lasting solutions that address real needs.
          </p>
        </div>

        {/* Mission Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {missionItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="text-white" size={28} />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {item.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Mission
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Together, we can create meaningful change that lasts. Every contribution, 
              every volunteer hour, and every voice matters in building stronger communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Become a Volunteer
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
