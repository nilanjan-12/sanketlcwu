import { Mail, Phone, MapPin, Clock, Calendar, Users, Award, Globe, MessageCircle, Send } from 'lucide-react';

const contactMethods = [
  {
    icon: Mail,
    title: 'Email',
    description: 'Send us a message anytime',
    primary: 'contact@sanket.org',
    secondary: 'volunteer@sanket.org',
    color: 'from-blue-500 to-indigo-600'
  },
  {
    icon: Phone,
    title: 'Phone',
    description: 'Call us during business hours',
    primary: '+91 98765 43210',
    secondary: '+91 98765 43211 (Emergency)',
    color: 'from-emerald-500 to-green-600'
  },
  {
    icon: MapPin,
    title: 'Address',
    description: 'Visit our main office',
    primary: 'SANKET Foundation',
    secondary: 'Block A, Connaught Place, New Delhi - 110001',
    color: 'from-purple-500 to-pink-600'
  }
];

const officeHours = [
  { day: 'Monday - Friday', time: '9:00 AM - 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM - 4:00 PM' },
  { day: 'Sunday', time: 'Closed (Emergency only)' }
];

const departments = [
  {
    name: 'Volunteer Coordination',
    email: 'volunteer@sanket.org',
    phone: '+91 98765 43212',
    description: 'Join our volunteer community'
  },
  {
    name: 'Partnerships & Donations',
    email: 'partners@sanket.org',
    phone: '+91 98765 43213',
    description: 'Corporate partnerships and funding'
  },
  {
    name: 'Programs & Impact',
    email: 'programs@sanket.org',
    phone: '+91 98765 43214',
    description: 'Our programs and their outcomes'
  },
  {
    name: 'Media & Communications',
    email: 'media@sanket.org',
    phone: '+91 98765 43215',
    description: 'Press inquiries and media relations'
  }
];

const quickStats = [
  { icon: Users, label: 'Team Members', value: '50+' },
  { icon: Award, label: 'Years of Impact', value: '12+' },
  { icon: Globe, label: 'States Reached', value: '15+' },
  { icon: Calendar, label: 'Events This Year', value: '200+' }
];

export default function ContactInfo() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-indigo-50 py-20 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Multiple ways to reach us. Choose what works best for you.
          </p>
        </div>

        {/* Primary Contact Methods */}
        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-start">
                <div className={`bg-gradient-to-r ${method.color} p-3 rounded-xl mr-4 text-white`}>
                  <method.icon size={24} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 mb-1">{method.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                  <div className="space-y-1">
                    <p className="font-medium text-gray-900">{method.primary}</p>
                    <p className="text-gray-600 text-sm">{method.secondary}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office Hours */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-12">
          <div className="flex items-center mb-4">
            <div className="bg-gradient-to-r from-amber-500 to-orange-500 p-3 rounded-xl mr-4 text-white">
              <Clock size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Office Hours</h3>
              <p className="text-gray-600 text-sm">When you can reach us</p>
            </div>
          </div>
          
          <div className="space-y-3">
            {officeHours.map((schedule, index) => (
              <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                <span className="text-gray-700 font-medium">{schedule.day}</span>
                <span className="text-gray-600">{schedule.time}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
            <p className="text-amber-800 text-sm">
              <strong>Note:</strong> Emergency calls are accepted 24/7 for urgent volunteer coordination and crisis response.
            </p>
          </div>
        </div>

        {/* Department Contacts */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-12">
          <div className="flex items-center mb-6">
            <div className="bg-gradient-to-r from-teal-500 to-cyan-500 p-3 rounded-xl mr-4 text-white">
              <MessageCircle size={24} />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">Department Contacts</h3>
              <p className="text-gray-600 text-sm">Direct lines to specific teams</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="p-4 bg-gray-50 rounded-xl">
                <h4 className="font-medium text-gray-900 mb-2">{dept.name}</h4>
                <p className="text-gray-600 text-sm mb-3">{dept.description}</p>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm">
                  <div className="flex items-center text-gray-600">
                    <Mail size={16} className="mr-2" />
                    <a href={`mailto:${dept.email}`} className="text-indigo-600 hover:text-indigo-700">
                      {dept.email}
                    </a>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Phone size={16} className="mr-2" />
                    <a href={`tel:${dept.phone}`} className="text-emerald-600 hover:text-emerald-700">
                      {dept.phone}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-2xl p-6 text-white mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold mb-2">SANKET at a Glance</h3>
            <p className="text-white/90">Our impact in numbers</p>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {quickStats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon size={24} className="text-white/80" />
                </div>
                <div className="text-2xl font-bold mb-1">{stat.value}</div>
                <div className="text-white/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <h3 className="font-semibold text-gray-900 mb-4 text-center">Quick Actions</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="mailto:volunteer@sanket.org?subject=Volunteer Interest"
              className="flex items-center justify-center bg-gradient-to-r from-emerald-500 to-green-500 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Users size={20} className="mr-2" />
              Volunteer With Us
            </a>
            <a
              href="mailto:partners@sanket.org?subject=Partnership Inquiry"
              className="flex items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-500 text-white py-3 px-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
            >
              <Send size={20} className="mr-2" />
              Partner With Us
            </a>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-8 p-4 bg-red-50 border border-red-200 rounded-xl">
          <div className="flex items-start">
            <div className="bg-red-500 p-2 rounded-lg mr-3 text-white">
              <Phone size={20} />
            </div>
            <div>
              <h4 className="font-semibold text-red-900 mb-1">Emergency Contact</h4>
              <p className="text-red-800 text-sm mb-2">
                For urgent matters requiring immediate attention, call our emergency line 24/7.
              </p>
              <p className="font-bold text-red-900">+91 98765 43211</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
