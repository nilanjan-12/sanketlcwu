import { Linkedin, Twitter, Mail } from 'lucide-react';

const leadership = [
  {
    name: 'Dr. Priya Sharma',
    role: 'Founder & Executive Director',
    bio: 'With over 20 years of experience in community development and social work, Dr. Sharma has dedicated her career to empowering marginalized communities through sustainable programs.',
    image: '/images/team/priya-sharma.jpg',
    linkedin: '#',
    twitter: '#',
    email: 'priya@sanket.org'
  },
  {
    name: 'Rajesh Kumar',
    role: 'Director of Programs',
    bio: 'An expert in program design and implementation with 15+ years in the non-profit sector. Rajesh oversees all our education and healthcare initiatives.',
    image: '/images/team/rajesh-kumar.jpg',
    linkedin: '#',
    twitter: '#',
    email: 'rajesh@sanket.org'
  },
  {
    name: 'Dr. Anita Patel',
    role: 'Environmental Program Manager',
    bio: 'Environmental scientist and conservation expert leading our sustainability initiatives. Dr. Patel has published extensively on community-based environmental solutions.',
    image: '/images/team/anita-patel.jpg',
    linkedin: '#',
    twitter: '#',
    email: 'anita@sanket.org'
  }
];

const teamMembers = [
  {
    name: 'Suresh Gupta',
    role: 'Community Outreach Coordinator',
    image: '/images/team/suresh-gupta.jpg'
  },
  {
    name: 'Meera Singh',
    role: 'Education Program Specialist',
    image: '/images/team/meera-singh.jpg'
  },
  {
    name: 'Arjun Reddy',
    role: 'Healthcare Initiatives Lead',
    image: '/images/team/arjun-reddy.jpg'
  },
  {
    name: 'Kavita Joshi',
    role: 'Volunteer Coordination Manager',
    image: '/images/team/kavita-joshi.jpg'
  },
  {
    name: 'Amit Verma',
    role: 'Finance & Operations',
    image: '/images/team/amit-verma.jpg'
  },
  {
    name: 'Sunita Rao',
    role: 'Communications Specialist',
    image: '/images/team/sunita-rao.jpg'
  }
];

const advisors = [
  {
    name: 'Prof. Ramesh Chandra',
    role: 'Strategic Advisor',
    organization: 'Former Dean, Social Work Department, Delhi University'
  },
  {
    name: 'Dr. Lakshmi Iyer',
    role: 'Research Advisor',
    organization: 'Senior Fellow, Centre for Policy Research'
  },
  {
    name: 'Mukesh Ambani Jr.',
    role: 'Sustainability Advisor',
    organization: 'Environmental Policy Institute'
  }
];

export default function Team() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the passionate individuals who drive our mission forward and make our impact possible.
          </p>
        </div>

        {/* Leadership Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-indigo-100 to-emerald-100 rounded-full flex items-center justify-center">
                    <div className="w-28 h-28 bg-gradient-to-br from-indigo-200 to-emerald-200 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-indigo-700">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                  <p className="text-indigo-600 font-semibold mb-4">{leader.role}</p>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-6 text-center">
                  {leader.bio}
                </p>
                
                <div className="flex justify-center space-x-3">
                  <a href={leader.linkedin} className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
                    <Linkedin size={18} />
                  </a>
                  <a href={leader.twitter} className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
                    <Twitter size={18} />
                  </a>
                  <a href={`mailto:${leader.email}`} className="p-2 bg-indigo-50 text-indigo-600 rounded-lg hover:bg-indigo-100 transition-colors">
                    <Mail size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Core Team</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-full flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-emerald-200 to-teal-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-emerald-700">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <h4 className="font-semibold text-gray-900 mb-1 text-sm">{member.name}</h4>
                <p className="text-xs text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Board */}
        <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-3xl p-8 md:p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Advisory Board</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-amber-100 to-orange-100 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-200 to-orange-200 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold text-amber-700">
                      {advisor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                <div className="text-center">
                  <h4 className="font-bold text-gray-900 mb-1">{advisor.name}</h4>
                  <p className="text-sm text-indigo-600 font-semibold mb-2">{advisor.role}</p>
                  <p className="text-xs text-gray-600">{advisor.organization}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Join Our Team
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              We&apos;re always looking for passionate individuals who share our vision of creating positive change. 
              Explore career opportunities and volunteer positions with SANKET.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-indigo-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                View Open Positions
              </button>
              <button className="bg-white/20 backdrop-blur-sm text-white border border-white/30 px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-all">
                Volunteer With Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
