import { Shield, Users, Lightbulb, Recycle, HandHeart, CheckCircle } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with complete transparency and honesty in all our interactions.',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: HandHeart,
    title: 'Compassion',
    description: 'Every decision we make is guided by empathy and genuine care for those we serve.',
    color: 'from-rose-500 to-pink-500'
  },
  {
    icon: Users,
    title: 'Inclusivity',
    description: 'We embrace diversity and ensure everyone has a voice in our community initiatives.',
    color: 'from-purple-500 to-violet-500'
  },
  {
    icon: Recycle,
    title: 'Sustainability',
    description: 'Our solutions are designed to create lasting positive impact for future generations.',
    color: 'from-emerald-500 to-teal-500'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We continuously seek creative and effective approaches to community challenges.',
    color: 'from-amber-500 to-orange-500'
  },
  {
    icon: CheckCircle,
    title: 'Excellence',
    description: 'We are committed to delivering high-quality programs and measurable outcomes.',
    color: 'from-cyan-500 to-blue-500'
  }
];

const principles = [
  {
    title: 'Community-Driven Solutions',
    description: 'We believe the best solutions come from within communities themselves. Our role is to facilitate, support, and amplify local voices and initiatives.'
  },
  {
    title: 'Collaborative Partnerships',
    description: 'We work hand-in-hand with local organizations, government bodies, and international partners to maximize our collective impact and avoid duplication of efforts.'
  },
  {
    title: 'Evidence-Based Approach',
    description: 'Our programs are grounded in research and best practices, with continuous monitoring and evaluation to ensure effectiveness and continuous improvement.'
  },
  {
    title: 'Long-term Commitment',
    description: 'We focus on sustainable, long-term solutions rather than quick fixes, building capacity within communities to continue the work independently.'
  }
];

export default function Values() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These core values shape our culture, guide our decisions, and define how we approach every project and partnership.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300 border border-gray-100"
              >
                <div className={`w-14 h-14 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="text-white" size={24} />
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Principles Section */}
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Guiding Principles
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles inform our methodology and ensure that our work creates meaningful, lasting impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {principle.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-12">
            Our Impact in Numbers
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 mb-2">15+</div>
              <div className="text-gray-600">Years of Service</div>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">50,000+</div>
              <div className="text-gray-600">Lives Impacted</div>
            </div>
            <div className="bg-gradient-to-br from-rose-50 to-pink-50 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-rose-600 mb-2">200+</div>
              <div className="text-gray-600">Active Volunteers</div>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
              <div className="text-3xl md:text-4xl font-bold text-amber-600 mb-2">100+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
