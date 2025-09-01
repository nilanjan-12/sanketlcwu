import Link from 'next/link';
import { GraduationCap, Heart, Leaf } from 'lucide-react';

const programs = [
  {
    icon: GraduationCap,
    title: 'Education & Digital Literacy',
    description: 'From rural learning centers to digital literacy programs, we\'re bridging the education gap and preparing communities for the digital future.',
    link: '/impact'
  },
  {
    icon: Heart,
    title: 'Healthcare & Wellness',
    description: 'Mobile health camps, health awareness programs, and community health initiatives bringing healthcare access to remote areas across India.',
    link: '/impact'
  },
  {
    icon: Leaf,
    title: 'Environmental & Agricultural Sustainability',
    description: 'River restoration projects, sustainable farming techniques, and climate-resilient agriculture helping communities adapt to environmental challenges.',
    link: '/impact'
  }
];

export default function FeaturedPrograms() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Featured Programs</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-emerald-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:-translate-y-3 hover:shadow-xl hover:border-indigo-200 transition-all duration-200 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-100 to-emerald-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <program.icon size={32} className="text-indigo-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {program.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                {program.description}
              </p>
              
              <Link
                href={program.link}
                className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors group"
              >
                View Impact Stories
                <span className="w-4 h-px bg-gradient-to-r from-indigo-600 to-emerald-500 group-hover:w-6 transition-all"></span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
