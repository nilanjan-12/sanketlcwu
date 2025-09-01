import { UserPlus, FileText, Phone, CheckCircle, Users, Zap } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Apply Online',
    description: 'Fill out our comprehensive volunteer application form with your skills, interests, and availability.',
    details: [
      'Complete online application',
      'Upload your resume/CV',
      'Specify your interests and skills',
      'Indicate your availability'
    ],
    color: 'from-blue-500 to-indigo-500',
    duration: '10-15 minutes'
  },
  {
    number: '02',
    icon: Phone,
    title: 'Interview & Orientation',
    description: 'Participate in a virtual or in-person interview followed by a comprehensive orientation session.',
    details: [
      'One-on-one interview with team lead',
      'Discuss expectations and goals',
      'Learn about SANKET\'s mission and values',
      'Complete mandatory orientation training'
    ],
    color: 'from-emerald-500 to-teal-500',
    duration: '2-3 hours'
  },
  {
    number: '03',
    icon: FileText,
    title: 'Background Check',
    description: 'Complete necessary background verification and documentation for the safety of our communities.',
    details: [
      'Submit required documents',
      'Background verification process',
      'Reference checks',
      'Health clearance (if required)'
    ],
    color: 'from-amber-500 to-orange-500',
    duration: '3-5 days'
  },
  {
    number: '04',
    icon: CheckCircle,
    title: 'Placement & Training',
    description: 'Get matched with the perfect opportunity and receive role-specific training before you begin.',
    details: [
      'Matched with suitable opportunity',
      'Role-specific training program',
      'Meet your team and supervisor',
      'Set goals and expectations'
    ],
    color: 'from-purple-500 to-violet-500',
    duration: '1-2 weeks'
  },
  {
    number: '05',
    icon: Users,
    title: 'Start Volunteering',
    description: 'Begin your volunteer journey with full support from our team and ongoing mentorship.',
    details: [
      'Start your assigned role',
      'Regular check-ins with supervisor',
      'Ongoing support and guidance',
      'Access to volunteer resources'
    ],
    color: 'from-rose-500 to-pink-500',
    duration: 'Ongoing'
  },
  {
    number: '06',
    icon: Zap,
    title: 'Growth & Recognition',
    description: 'Grow your skills, take on new challenges, and receive recognition for your contributions.',
    details: [
      'Skill development opportunities',
      'Leadership roles available',
      'Regular appreciation events',
      'Certificate of service'
    ],
    color: 'from-cyan-500 to-blue-500',
    duration: 'Continuous'
  }
];

const requirements = [
  {
    category: 'Age Requirements',
    items: [
      'Minimum 18 years old',
      'Special programs for 16-17 year olds with parent consent',
      'Senior volunteer programs (55+) available'
    ]
  },
  {
    category: 'Time Commitment',
    items: [
      'Minimum 3 months commitment',
      'Flexible scheduling options',
      '5-25 hours per week depending on role'
    ]
  },
  {
    category: 'Skills & Qualifications',
    items: [
      'Relevant education or experience',
      'Strong communication skills',
      'Cultural sensitivity and adaptability'
    ]
  },
  {
    category: 'Personal Qualities',
    items: [
      'Genuine desire to help others',
      'Patience and empathy',
      'Reliability and commitment'
    ]
  }
];

export default function VolunteerProcess() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How to <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Get Started</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our streamlined process ensures you&apos;re well-prepared and perfectly matched 
            for your volunteer experience. Here&apos;s what to expect on your journey with us.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-200 to-emerald-200 rounded-full" />
          
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${
                  index % 2 === 0 ? 'lg:text-right lg:pr-12' : 'lg:text-left lg:pl-12'
                }`}>
                  <div className="bg-gray-50 rounded-2xl p-8 hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mr-4`}>
                        <step.icon className="text-white" size={24} />
                      </div>
                      <div>
                        <span className="text-2xl font-bold text-gray-400">#{step.number}</span>
                        <div className="text-sm text-gray-500">{step.duration}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{step.description}</p>
                    
                    <div className="space-y-2">
                      {step.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="flex items-start">
                          <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Center Icon */}
                <div className="hidden lg:flex relative z-10 w-2/12 justify-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.color} rounded-full flex items-center justify-center border-4 border-white shadow-lg`}>
                    <step.icon className="text-white" size={28} />
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12" />
              </div>
            ))}
          </div>
        </div>

        {/* Requirements */}
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Volunteer Requirements
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We welcome volunteers from all backgrounds. Here are our basic requirements 
              to ensure a safe and productive experience for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {requirements.map((requirement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <h4 className="text-xl font-bold text-gray-900 mb-4">{requirement.category}</h4>
                <div className="space-y-3">
                  {requirement.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start">
                      <CheckCircle className="text-emerald-500 mr-3 mt-0.5 flex-shrink-0" size={16} />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Make a Difference?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Your journey to creating positive change starts with a single step. 
              Join our community of dedicated volunteers today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                Start Application Process
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all">
                Download Info Package
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
