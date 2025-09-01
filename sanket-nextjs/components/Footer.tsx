import Link from 'next/link';
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin,
  Globe,
  Heart,
  Users,
  Leaf,
  GraduationCap
} from 'lucide-react';

const quickLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Journey So Far', href: '/journey' },
  { name: 'Volunteering', href: '/volunteer' },
  { name: 'SANKET for Us', href: '/impact' },
  { name: 'Upcoming Events', href: '/events' },
  { name: 'Contact Us', href: '/contact' },
];

const programs = [
  { name: 'Education & Digital Literacy', href: '/impact', icon: GraduationCap },
  { name: 'Healthcare & Wellness', href: '/impact', icon: Heart },
  { name: 'Environmental Sustainability', href: '/impact', icon: Leaf },
  { name: 'Women Empowerment', href: '/impact', icon: Users },
  { name: 'Sustainable Agriculture', href: '/impact', icon: Leaf },
  { name: 'Youth Leadership', href: '/impact', icon: Users },
];

const socialLinks = [
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <div className="flex flex-col mb-6">
              <h2 className="text-2xl font-bold text-white mb-2">SANKET</h2>
              <p className="text-sm text-gray-400 uppercase tracking-wider font-medium mb-4">
                Leads to a Change Within Us
              </p>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              SANKET is a non-governmental organization operating across 12 states in India, 
              dedicated to creating sustainable social change through community empowerment, 
              education, healthcare, environmental conservation, and sustainable development initiatives.
            </p>
            
            {/* Social links */}
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-center w-10 h-10 bg-gray-800 text-gray-400 rounded-lg hover:bg-indigo-600 hover:text-white transition-all duration-200"
                  aria-label={item.name}
                >
                  <item.icon size={18} />
                </Link>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin size={16} className="text-indigo-400 mt-1 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Operations across 12 states in India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Globe size={16} className="text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Headquarters: New Delhi, India
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+91 98765 43210</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-indigo-400 flex-shrink-0" />
                <span className="text-gray-400 text-sm">connect@sanket-ngo.org</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Programs section */}
        <div className="py-8 border-t border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-6">Our Programs</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {programs.map((program) => (
              <Link
                key={program.name}
                href={program.href}
                className="flex flex-col items-center text-center p-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 transition-all duration-200 group"
              >
                <program.icon 
                  size={24} 
                  className="text-indigo-400 group-hover:text-indigo-300 mb-2" 
                />
                <span className="text-xs text-gray-400 group-hover:text-gray-300 leading-tight">
                  {program.name}
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom section */}
        <div className="py-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-400 text-sm">
            © 2025 SANKET NGO. All Rights Reserved. | Transforming Communities Since 2010
          </p>
          <div className="flex space-x-6">
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
              Annual Reports
            </Link>
          </div>
        </div>

        {/* Newsletter signup */}
        <div className="py-8 border-t border-gray-800">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-lg font-semibold text-white mb-2">Stay Updated</h3>
            <p className="text-gray-400 text-sm mb-6">
              Subscribe to our newsletter for updates on activities, events, and impact stories.
            </p>
            <form className="flex gap-3">
              <input
                type="email"
                placeholder="Your Email Address"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-indigo-500 focus:bg-gray-700 transition-all"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white rounded-lg font-semibold hover:from-indigo-700 hover:to-indigo-800 transition-all duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
}
