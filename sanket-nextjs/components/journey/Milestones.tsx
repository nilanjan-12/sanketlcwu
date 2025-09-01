import { Trophy, Users, Globe, Heart, Target, Zap } from 'lucide-react';

const milestones = [
  {
    year: '2009',
    icon: Users,
    title: 'First 100 Lives Impacted',
    description: 'Reached our first major milestone by positively impacting 100 individuals through our education and healthcare programs.',
    color: 'from-blue-500 to-indigo-500',
    stats: { primary: '100', secondary: 'Lives Changed' }
  },
  {
    year: '2011',
    icon: Heart,
    title: 'Community Health Revolution',
    description: 'Launched comprehensive healthcare programs that reduced child mortality by 40% in our partner communities.',
    color: 'from-rose-500 to-pink-500',
    stats: { primary: '40%', secondary: 'Mortality Reduction' }
  },
  {
    year: '2013',
    icon: Target,
    title: 'Education Excellence',
    description: 'Achieved 100% literacy rate in our flagship education program, setting a new standard for community education.',
    color: 'from-emerald-500 to-teal-500',
    stats: { primary: '100%', secondary: 'Literacy Rate' }
  },
  {
    year: '2016',
    icon: Globe,
    title: 'Environmental Leadership',
    description: 'Became carbon neutral and launched the largest community-based tree plantation drive in the region.',
    color: 'from-amber-500 to-orange-500',
    stats: { primary: '50K', secondary: 'Trees Planted' }
  },
  {
    year: '2019',
    icon: Trophy,
    title: 'National Recognition',
    description: 'Received the Presidents Award for Excellence in Social Service, recognizing our innovative approaches.',
    color: 'from-purple-500 to-violet-500',
    stats: { primary: '1st', secondary: 'National Award' }
  },
  {
    year: '2022',
    icon: Zap,
    title: 'Digital Transformation',
    description: 'Successfully digitized all programs, reaching remote communities through innovative technology solutions.',
    color: 'from-cyan-500 to-blue-500',
    stats: { primary: '25K', secondary: 'Digital Learners' }
  }
];

const impactMetrics = [
  {
    number: '50,000+',
    label: 'Lives Transformed',
    description: 'Individuals directly impacted through our comprehensive programs'
  },
  {
    number: '100+',
    label: 'Communities Served',
    description: 'Villages and urban areas where we have established programs'
  },
  {
    number: '200+',
    label: 'Dedicated Volunteers',
    description: 'Active volunteers contributing their time and expertise'
  },
  {
    number: '15',
    label: 'Years of Impact',
    description: 'Continuous service to communities across multiple states'
  },
  {
    number: '95%',
    label: 'Program Success Rate',
    description: 'Programs that achieved or exceeded their intended outcomes'
  },
  {
    number: '₹50M+',
    label: 'Resources Mobilized',
    description: 'Total resources deployed for community development'
  }
];

export default function Milestones() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Key <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Milestones</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Celebrating the defining moments that have shaped our organization 
            and marked significant achievements in our mission to create lasting change.
          </p>
        </div>

        {/* Milestones Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="group bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-xl transition-all duration-500 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Accent */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-r ${milestone.color} opacity-10 rounded-bl-full transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500`} />
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${milestone.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <milestone.icon className="text-white" size={28} />
                  </div>
                  <span className="text-2xl font-bold text-gray-400">{milestone.year}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-700 transition-colors">
                  {milestone.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-6">
                  {milestone.description}
                </p>

                {/* Stats */}
                <div className={`bg-gradient-to-r ${milestone.color} rounded-xl p-4 text-white`}>
                  <div className="text-3xl font-bold">{milestone.stats.primary}</div>
                  <div className="text-white/90 text-sm">{milestone.stats.secondary}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Impact Metrics */}
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Cumulative Impact
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These numbers represent more than statistics—they represent lives changed, 
              communities strengthened, and hope restored.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {impactMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center group hover:shadow-md transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-indigo-600 mb-2 group-hover:scale-110 transition-transform duration-300">
                  {metric.number}
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">
                  {metric.label}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievement Timeline Visual */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Achievement Timeline
          </h3>
          
          <div className="relative">
            <div className="flex justify-between items-center mb-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className={`w-4 h-4 bg-gradient-to-r ${milestone.color} rounded-full mb-2`} />
                  <span className="text-sm font-semibold text-gray-600">{milestone.year}</span>
                </div>
              ))}
            </div>
            
            {/* Progress Line */}
            <div className="absolute top-2 left-0 right-0 h-1 bg-gradient-to-r from-indigo-200 via-emerald-200 to-cyan-200 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
