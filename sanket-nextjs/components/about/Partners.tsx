import { Building2, Handshake, Globe, Award } from 'lucide-react';

const partners = [
  {
    category: 'Government Partners',
    icon: Building2,
    color: 'from-blue-500 to-indigo-500',
    organizations: [
      {
        name: 'Ministry of Rural Development',
        description: 'Collaborative programs for rural education and infrastructure development',
        logo: '/images/partners/ministry-rural-development.png'
      },
      {
        name: 'State Education Board',
        description: 'Educational curriculum development and teacher training initiatives',
        logo: '/images/partners/state-education-board.png'
      },
      {
        name: 'Municipal Corporation',
        description: 'Urban sustainability and community health programs',
        logo: '/images/partners/municipal-corporation.png'
      }
    ]
  },
  {
    category: 'Corporate Partners',
    icon: Handshake,
    color: 'from-emerald-500 to-teal-500',
    organizations: [
      {
        name: 'Tech Solutions Ltd.',
        description: 'Digital literacy programs and technology infrastructure support',
        logo: '/images/partners/tech-solutions.png'
      },
      {
        name: 'Green Energy Corp',
        description: 'Renewable energy projects and environmental sustainability initiatives',
        logo: '/images/partners/green-energy.png'
      },
      {
        name: 'Healthcare Foundation',
        description: 'Community health camps and medical equipment support',
        logo: '/images/partners/healthcare-foundation.png'
      }
    ]
  },
  {
    category: 'International Partners',
    icon: Globe,
    color: 'from-purple-500 to-violet-500',
    organizations: [
      {
        name: 'UNESCO',
        description: 'Education for All initiatives and cultural preservation programs',
        logo: '/images/partners/unesco.png'
      },
      {
        name: 'Global Health Alliance',
        description: 'International healthcare standards and capacity building',
        logo: '/images/partners/global-health-alliance.png'
      },
      {
        name: 'Environmental Coalition',
        description: 'Climate change adaptation and biodiversity conservation',
        logo: '/images/partners/environmental-coalition.png'
      }
    ]
  },
  {
    category: 'Academic Partners',
    icon: Award,
    color: 'from-amber-500 to-orange-500',
    organizations: [
      {
        name: 'National University',
        description: 'Research collaboration and student internship programs',
        logo: '/images/partners/national-university.png'
      },
      {
        name: 'Institute of Social Sciences',
        description: 'Social research and policy development initiatives',
        logo: '/images/partners/institute-social-sciences.png'
      },
      {
        name: 'Medical College',
        description: 'Community health research and medical volunteer programs',
        logo: '/images/partners/medical-college.png'
      }
    ]
  }
];

const recognitions = [
  {
    award: 'Excellence in Community Development',
    year: '2023',
    organization: 'National NGO Council',
    description: 'Recognized for outstanding impact in rural education initiatives'
  },
  {
    award: 'Environmental Stewardship Award',
    year: '2022',
    organization: 'Green India Foundation',
    description: 'Acknowledged for innovative environmental conservation programs'
  },
  {
    award: 'Healthcare Innovation Prize',
    year: '2022',
    organization: 'Public Health Association',
    description: 'Honored for community-based healthcare delivery model'
  },
  {
    award: 'Social Impact Award',
    year: '2021',
    organization: 'UN Sustainable Development Goals',
    description: 'Commended for contributions to SDG goals 3, 4, and 15'
  }
];

export default function Partners() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Partners</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We collaborate with diverse organizations to amplify our impact and create sustainable solutions 
            that benefit communities across multiple sectors.
          </p>
        </div>

        {/* Partners by Category */}
        <div className="space-y-16">
          {partners.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 rounded-3xl p-8 md:p-12">
              <div className="flex items-center justify-center mb-8">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center mr-4`}>
                  <category.icon className="text-white" size={28} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {category.organizations.map((org, orgIndex) => (
                  <div
                    key={orgIndex}
                    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                  >
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                        <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded"></div>
                      </div>
                      <h4 className="font-bold text-gray-900">{org.name}</h4>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {org.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Recognition & Awards */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Recognition & Awards
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our work has been recognized by leading organizations and institutions 
              for its impact and innovation in community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recognitions.map((recognition, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-xl p-6 border border-gray-100"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900 mb-1">{recognition.award}</h4>
                    <p className="text-indigo-600 font-semibold text-sm">{recognition.organization}</p>
                  </div>
                  <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-semibold">
                    {recognition.year}
                  </span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {recognition.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Partnership CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Partner With Us
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Join our network of partners and collaborate with us to create meaningful, 
              lasting impact in communities. Together, we can achieve more.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Explore Partnerships
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
