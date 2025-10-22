import Link from 'next/link';
import { GraduationCap, Heart, Leaf } from 'lucide-react';

const programs = [
  {
    icon: GraduationCap,
    title: 'MANTHAN',
    description: 'SANKET originated MANTHAN to unify its ideas and activities related to exploring and nurturing hidden potentials of the people from cornered sections of society, especially in the children and youth. The word MANTHAN is a Sanskrit term which refers to the process of churning. All our activities dedicated to the said purpose are now under MANTHAN.',
    link: '/impact'
  },
  {
    icon: Heart,
    title: 'Family Support Programme:',
    description: ' The concept of family has been changing rapidly. The most unique epitome of living affectionately together is called a Family. With changing times, family became an unavoidable necessity, and then it has become a choice of living. This programme is a new addition to SANKET’s activities',
    link: '/impact'
  },
  {
    icon: Leaf,
    title: 'Capacity Building Workshops:',
    description: ' The term ‘capacity’ always indicates the hold of persons on their particular skill/s for coping with life and for unfolding potentialities. Having child-centered focus, the path always demands equal attention, attention also about the parents, the adults around children towards achieving the objectives. Engaging children in understanding their potential helps them cope with daily constraints, daily chores in the family. With this thought we continue to fetch objectives also by engaging the adults as much as possible in exploring their children, by practicing adaptable discourse with children and more such. We hope that both the aspects of child-friendly nature of parents and increasing adaptability in children can serve the purpose of inclusive development of children.',
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
