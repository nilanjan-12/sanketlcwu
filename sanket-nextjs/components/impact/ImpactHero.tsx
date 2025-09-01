import { TrendingUp, Target, BarChart3, Award } from 'lucide-react';

const impactHighlights = [
  {
    icon: TrendingUp,
    number: '50,000+',
    label: 'Lives Directly Impacted',
    description: 'Individuals who have benefited from our programs',
    color: 'from-blue-500 to-indigo-500',
    growth: '+25% this year'
  },
  {
    icon: Target,
    number: '95%',
    label: 'Program Success Rate',
    description: 'Programs that met or exceeded their objectives',
    color: 'from-emerald-500 to-teal-500',
    growth: '15% improvement'
  },
  {
    icon: BarChart3,
    number: '₹50M+',
    label: 'Resources Mobilized',
    description: 'Total value of resources deployed for impact',
    color: 'from-amber-500 to-orange-500',
    growth: '+40% increase'
  },
  {
    icon: Award,
    number: '12',
    label: 'Recognition Awards',
    description: 'National and international awards received',
    color: 'from-purple-500 to-violet-500',
    growth: '3 new awards'
  }
];

const sdgGoals = [
  { number: 3, title: 'Good Health and Well-being', progress: 85 },
  { number: 4, title: 'Quality Education', progress: 92 },
  { number: 5, title: 'Gender Equality', progress: 78 },
  { number: 6, title: 'Clean Water and Sanitation', progress: 70 },
  { number: 13, title: 'Climate Action', progress: 88 },
  { number: 15, title: 'Life on Land', progress: 82 }
];

export default function ImpactHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-800 via-indigo-900 to-emerald-900 mt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-emerald-500/20" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '60px 60px'
        }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight">
            Measuring Our{' '}
            <span className="bg-gradient-to-r from-yellow-300 via-orange-300 to-red-300 bg-clip-text text-transparent">
              Impact
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
            Transparency, accountability, and measurable outcomes drive everything we do. 
            Here&apos;s how we&apos;re creating lasting change in communities across India.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg">
              View Detailed Reports
            </button>
            <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all">
              Download Impact Summary
            </button>
          </div>
        </div>

        {/* Impact Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {impactHighlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group"
            >
              <div className={`w-16 h-16 bg-gradient-to-r ${highlight.color} rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <highlight.icon className="text-white" size={28} />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">{highlight.number}</div>
              <div className="text-white/90 font-semibold mb-2">{highlight.label}</div>
              <div className="text-white/70 text-sm mb-3">{highlight.description}</div>
              <div className="text-green-300 text-xs font-medium">{highlight.growth}</div>
            </div>
          ))}
        </div>

        {/* SDG Alignment */}
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              UN Sustainable Development Goals Alignment
            </h2>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Our work directly contributes to multiple UN SDGs. Here&apos;s our progress toward each goal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sdgGoals.map((goal, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mr-3">
                      <span className="text-white font-bold">{goal.number}</span>
                    </div>
                    <div className="text-white font-semibold text-sm">{goal.title}</div>
                  </div>
                  <div className="text-white font-bold">{goal.progress}%</div>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-emerald-400 to-teal-400 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${goal.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
