import { GraduationCap, Stethoscope, Leaf, Code, Camera, Megaphone, Calendar, MapPin } from 'lucide-react';

const opportunities = [
  {
    id: 1,
    title: 'Education Volunteer',
    category: 'Education',
    icon: GraduationCap,
    color: 'from-blue-500 to-indigo-500',
    duration: '3-6 months',
    location: 'Rural Schools',
    commitment: '10-15 hours/week',
    description: 'Help teach basic literacy, numeracy, and life skills to children and adults in rural communities.',
    requirements: [
      'Bachelor\'s degree in any field',
      'Good communication skills',
      'Patience and empathy',
      'Basic Hindi/local language preferred'
    ],
    responsibilities: [
      'Conduct literacy classes for children and adults',
      'Develop educational materials',
      'Support existing teachers',
      'Organize educational activities'
    ],
    impact: 'Directly impact 30-50 students per volunteer'
  },
  {
    id: 2,
    title: 'Healthcare Assistant',
    category: 'Healthcare',
    icon: Stethoscope,
    color: 'from-rose-500 to-pink-500',
    duration: '6-12 months',
    location: 'Community Health Centers',
    commitment: '15-20 hours/week',
    description: 'Support community health workers in providing basic healthcare services and health education.',
    requirements: [
      'Medical/nursing background preferred',
      'First aid certification',
      'Strong interpersonal skills',
      'Willingness to work in rural areas'
    ],
    responsibilities: [
      'Assist in health camps and screenings',
      'Provide health education sessions',
      'Support vaccination drives',
      'Maintain health records'
    ],
    impact: 'Serve 200-300 community members monthly'
  },
  {
    id: 3,
    title: 'Environmental Coordinator',
    category: 'Environment',
    icon: Leaf,
    color: 'from-emerald-500 to-teal-500',
    duration: '4-8 months',
    location: 'Multiple Communities',
    commitment: '12-18 hours/week',
    description: 'Lead environmental conservation projects including tree plantation, waste management, and sustainability education.',
    requirements: [
      'Environmental science background',
      'Project management skills',
      'Physical fitness for outdoor work',
      'Leadership experience'
    ],
    responsibilities: [
      'Organize tree plantation drives',
      'Implement waste management systems',
      'Conduct environmental awareness programs',
      'Monitor project progress'
    ],
    impact: 'Plant 1000+ trees and train 100+ families'
  },
  {
    id: 4,
    title: 'Digital Literacy Trainer',
    category: 'Technology',
    icon: Code,
    color: 'from-purple-500 to-violet-500',
    duration: '2-4 months',
    location: 'Digital Learning Centers',
    commitment: '8-12 hours/week',
    description: 'Teach basic computer skills, internet usage, and digital literacy to community members.',
    requirements: [
      'Computer science/IT background',
      'Teaching experience preferred',
      'Patience for beginners',
      'Ability to simplify complex concepts'
    ],
    responsibilities: [
      'Conduct computer training sessions',
      'Develop digital learning materials',
      'Troubleshoot technical issues',
      'Track student progress'
    ],
    impact: 'Train 50-75 individuals in digital skills'
  },
  {
    id: 5,
    title: 'Content Creator',
    category: 'Communications',
    icon: Camera,
    color: 'from-amber-500 to-orange-500',
    duration: '3-6 months',
    location: 'Field & Remote',
    commitment: '10-15 hours/week',
    description: 'Document our programs through photography, videography, and storytelling to help spread awareness.',
    requirements: [
      'Photography/videography skills',
      'Creative writing ability',
      'Social media experience',
      'Own equipment preferred'
    ],
    responsibilities: [
      'Document program activities',
      'Create social media content',
      'Write success stories',
      'Maintain content calendar'
    ],
    impact: 'Reach 10,000+ people through content'
  },
  {
    id: 6,
    title: 'Community Outreach Coordinator',
    category: 'Outreach',
    icon: Megaphone,
    color: 'from-cyan-500 to-blue-500',
    duration: '6-12 months',
    location: 'Multiple Communities',
    commitment: '15-25 hours/week',
    description: 'Build relationships with community leaders and help expand our programs to new areas.',
    requirements: [
      'Strong communication skills',
      'Cultural sensitivity',
      'Networking abilities',
      'Local language proficiency'
    ],
    responsibilities: [
      'Engage with community leaders',
      'Conduct needs assessments',
      'Facilitate community meetings',
      'Support program implementation'
    ],
    impact: 'Expand reach to 3-5 new communities'
  }
];

const skillsNeeded = [
  'Teaching & Training',
  'Healthcare & Medical',
  'Project Management',
  'Communication & Writing',
  'Photography & Design',
  'Technology & IT',
  'Social Work',
  'Environmental Science',
  'Marketing & PR',
  'Finance & Administration'
];

export default function OpportunitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Volunteer <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Opportunities</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Find the perfect opportunity that matches your skills, interests, and availability. 
            Every role makes a meaningful difference in our communities.
          </p>
        </div>

        {/* Opportunities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {opportunities.map((opportunity) => (
            <div
              key={opportunity.id}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              {/* Header */}
              <div className={`bg-gradient-to-r ${opportunity.color} p-6 text-white`}>
                <div className="flex items-center justify-between mb-4">
                  <opportunity.icon size={32} />
                  <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                    {opportunity.category}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{opportunity.title}</h3>
                <p className="text-white/90 text-sm">{opportunity.description}</p>
              </div>

              {/* Details */}
              <div className="p-6">
                {/* Quick Info */}
                <div className="grid grid-cols-1 gap-3 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-medium mr-2">Duration:</span>
                    {opportunity.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin size={16} className="mr-2" />
                    <span className="font-medium mr-2">Location:</span>
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar size={16} className="mr-2" />
                    <span className="font-medium mr-2">Commitment:</span>
                    {opportunity.commitment}
                  </div>
                </div>

                {/* Impact */}
                <div className={`bg-gradient-to-r ${opportunity.color} bg-opacity-10 rounded-lg p-4 mb-6`}>
                  <h4 className="font-semibold text-gray-900 mb-2">Expected Impact</h4>
                  <p className="text-gray-700 text-sm">{opportunity.impact}</p>
                </div>

                {/* Requirements Preview */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Key Requirements</h4>
                  <div className="space-y-2">
                    {opportunity.requirements.slice(0, 2).map((req, index) => (
                      <div key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{req}</span>
                      </div>
                    ))}
                    {opportunity.requirements.length > 2 && (
                      <div className="text-sm text-indigo-600 font-medium">
                        +{opportunity.requirements.length - 2} more requirements
                      </div>
                    )}
                  </div>
                </div>

                {/* Apply Button */}
                <button className={`w-full bg-gradient-to-r ${opportunity.color} text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity`}>
                  Apply for This Role
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Skills We Need */}
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Skills We Need
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We welcome volunteers with diverse skills and backgrounds. Here are some areas where we especially need support.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {skillsNeeded.map((skill, index) => (
              <span
                key={index}
                className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition-opacity">
              Submit Your Skills Profile
            </button>
          </div>
        </div>

        {/* Custom Volunteering */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don&apos;t See Your Perfect Match?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We&apos;re always looking for new ways to leverage volunteer talents. 
              If you have unique skills or ideas for how you&apos;d like to contribute, let&apos;s talk!
            </p>
            <button className="bg-indigo-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-indigo-700 transition-colors">
              Propose Custom Opportunity
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
