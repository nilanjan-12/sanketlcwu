import { GraduationCap, Stethoscope, Leaf, MapPin, Calendar } from 'lucide-react';

const programMetrics = [
  {
    category: 'Education',
    icon: GraduationCap,
    color: 'from-blue-500 to-indigo-500',
    totalBeneficiaries: 25000,
    metrics: [
      { label: 'Students Educated', value: '15,000+', description: 'Primary and secondary students' },
      { label: 'Adult Literacy', value: '8,500+', description: 'Adults who learned to read and write' },
      { label: 'Schools Improved', value: '45', description: 'Schools with enhanced infrastructure' },
      { label: 'Literacy Rate Increase', value: '67%', description: 'Average improvement in partner communities' },
      { label: 'Teacher Training', value: '200+', description: 'Teachers trained in modern methods' },
      { label: 'Scholarship Recipients', value: '1,200', description: 'Students supported financially' }
    ]
  },
  {
    category: 'Healthcare',
    icon: Stethoscope,
    color: 'from-rose-500 to-pink-500',
    totalBeneficiaries: 18000,
    metrics: [
      { label: 'Patients Treated', value: '12,000+', description: 'Individuals who received medical care' },
      { label: 'Health Camps', value: '150+', description: 'Medical camps organized' },
      { label: 'Immunizations', value: '8,000+', description: 'Vaccines administered' },
      { label: 'Maternal Mortality Reduction', value: '45%', description: 'Decrease in partner communities' },
      { label: 'Health Workers Trained', value: '120', description: 'Community health workers certified' },
      { label: 'Nutrition Programs', value: '25', description: 'Malnutrition intervention programs' }
    ]
  },
  {
    category: 'Environment',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-500',
    totalBeneficiaries: 30000,
    metrics: [
      { label: 'Trees Planted', value: '100,000+', description: 'Trees planted across all projects' },
      { label: 'Clean Water Access', value: '15,000', description: 'People with improved water access' },
      { label: 'Waste Management', value: '50', description: 'Communities with waste systems' },
      { label: 'Carbon Offset', value: '2,500T', description: 'CO2 equivalent reduced annually' },
      { label: 'Solar Installations', value: '85', description: 'Solar power systems installed' },
      { label: 'Organic Farms', value: '200+', description: 'Farmers using organic methods' }
    ]
  }
];

const geographicalImpact = [
  {
    state: 'Rajasthan',
    communities: 25,
    beneficiaries: 18000,
    programs: ['Education', 'Healthcare', 'Environment'],
    highlight: 'Desert community transformation'
  },
  {
    state: 'West Bengal',
    communities: 20,
    beneficiaries: 15000,
    programs: ['Healthcare', 'Environment'],
    highlight: 'Sundarbans conservation success'
  },
  {
    state: 'Maharashtra',
    communities: 18,
    beneficiaries: 12000,
    programs: ['Education', 'Healthcare'],
    highlight: 'Rural education excellence'
  },
  {
    state: 'Himachal Pradesh',
    communities: 15,
    beneficiaries: 8000,
    programs: ['Environment', 'Education'],
    highlight: 'Hill community empowerment'
  },
  {
    state: 'Gujarat',
    communities: 12,
    beneficiaries: 10000,
    programs: ['Education', 'Environment'],
    highlight: 'Sustainable development model'
  },
  {
    state: 'Bihar',
    communities: 10,
    beneficiaries: 7000,
    programs: ['Education', 'Healthcare'],
    highlight: 'Women empowerment focus'
  }
];

const timelineMetrics = [
  { year: '2019', education: 8000, healthcare: 6000, environment: 12000 },
  { year: '2020', education: 12000, healthcare: 8000, environment: 15000 },
  { year: '2021', education: 16000, healthcare: 10000, environment: 20000 },
  { year: '2022', education: 20000, healthcare: 14000, environment: 25000 },
  { year: '2023', education: 25000, healthcare: 18000, environment: 30000 }
];

export default function ImpactMetrics() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Impact by <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Detailed metrics showing the reach and effectiveness of our work across education, 
            healthcare, and environmental conservation programs.
          </p>
        </div>

        {/* Program Metrics */}
        <div className="space-y-16 mb-20">
          {programMetrics.map((program, index) => (
            <div key={index} className="bg-white rounded-3xl shadow-lg border border-gray-100 overflow-hidden">
              <div className={`bg-gradient-to-r ${program.color} p-8 text-white`}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <program.icon size={40} className="mr-4" />
                    <div>
                      <h3 className="text-3xl font-bold">{program.category}</h3>
                      <p className="text-white/90">Total Beneficiaries: {program.totalBeneficiaries.toLocaleString()}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold">{program.totalBeneficiaries.toLocaleString()}</div>
                    <div className="text-white/90">Lives Impacted</div>
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {program.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-6 bg-gray-50 rounded-xl">
                      <div className="text-3xl font-bold text-gray-900 mb-2">{metric.value}</div>
                      <div className="text-lg font-semibold text-gray-800 mb-2">{metric.label}</div>
                      <div className="text-sm text-gray-600">{metric.description}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Geographical Impact */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Geographical Impact
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our work spans across multiple states in India, with programs tailored to local needs and contexts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {geographicalImpact.map((location, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">{location.state}</h4>
                  <MapPin className="text-indigo-600" size={24} />
                </div>
                
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">{location.communities}</div>
                    <div className="text-sm text-gray-600">Communities</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-emerald-600">{location.beneficiaries.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Beneficiaries</div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <div className="text-sm font-semibold text-gray-800 mb-2">Active Programs:</div>
                  <div className="flex flex-wrap gap-2">
                    {location.programs.map((program, programIndex) => (
                      <span key={programIndex} className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-xs font-medium">
                        {program}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-sm text-gray-600 italic">{location.highlight}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Growth Timeline */}
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Impact Growth Over Time
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our reach and impact have grown consistently year over year, 
              demonstrating sustainable and scalable program delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Timeline Chart */}
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Beneficiaries by Year</h4>
              <div className="space-y-4">
                {timelineMetrics.map((year, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-16 text-sm font-semibold text-gray-600">{year.year}</div>
                    <div className="flex-1 ml-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-full bg-gray-200 rounded-full h-6 flex overflow-hidden">
                          <div 
                            className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full flex items-center justify-center text-white text-xs font-semibold"
                            style={{ width: `${(year.education / 30000) * 100}%` }}
                          >
                            {year.education > 5000 && 'Edu'}
                          </div>
                          <div 
                            className="bg-gradient-to-r from-rose-500 to-pink-500 h-full flex items-center justify-center text-white text-xs font-semibold"
                            style={{ width: `${(year.healthcare / 30000) * 100}%` }}
                          >
                            {year.healthcare > 5000 && 'Health'}
                          </div>
                          <div 
                            className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full flex items-center justify-center text-white text-xs font-semibold"
                            style={{ width: `${(year.environment / 30000) * 100}%` }}
                          >
                            {year.environment > 5000 && 'Env'}
                          </div>
                        </div>
                        <div className="text-sm font-semibold text-gray-800">
                          {(year.education + year.healthcare + year.environment).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-6 space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded mr-2" />
                  Education
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded mr-2" />
                  Healthcare
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-500 rounded mr-2" />
                  Environment
                </div>
              </div>
            </div>

            {/* Key Achievements */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-gray-900">Key Achievements by Year</h4>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-indigo-600 mr-2" size={20} />
                    <span className="font-semibold">2023</span>
                  </div>
                  <p className="text-sm text-gray-600">UN SDG Partnership established, reaching 73,000 total beneficiaries</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-emerald-600 mr-2" size={20} />
                    <span className="font-semibold">2022</span>
                  </div>
                  <p className="text-sm text-gray-600">Carbon neutral operations achieved, 59,000 lives impacted</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-rose-600 mr-2" size={20} />
                    <span className="font-semibold">2021</span>
                  </div>
                  <p className="text-sm text-gray-600">Digital transformation completed during pandemic, 46,000 beneficiaries</p>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="flex items-center mb-2">
                    <Calendar className="text-amber-600 mr-2" size={20} />
                    <span className="font-semibold">2020</span>
                  </div>
                  <p className="text-sm text-gray-600">Crisis response programs launched, maintained 35,000 program participants</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
