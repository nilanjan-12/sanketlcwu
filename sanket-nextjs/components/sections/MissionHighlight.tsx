import Link from 'next/link';

export default function MissionHighlight() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Mission Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              SANKET works across 12 states in India, focusing on sustainable community development 
              through education programs, healthcare initiatives, environmental conservation, women 
              empowerment, and digital literacy. We believe in creating lasting change by empowering 
              individuals and communities with resources, skills, and opportunities.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-indigo-600 font-semibold hover:text-indigo-800 transition-colors"
            >
              Learn More
              <span className="w-6 h-px bg-gradient-to-r from-indigo-600 to-emerald-500 transition-all group-hover:w-8"></span>
            </Link>
          </div>

          {/* Mission Stats */}
          <div className="flex gap-6 flex-wrap lg:flex-col">
            {[
              { number: '15+', text: 'Years of Impact' },
              { number: '12', text: 'States Across India' },
              { number: '2500+', text: 'Active Volunteers' },
            ].map((stat, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl border border-gray-200 text-center min-w-[160px] hover:-translate-y-2 hover:shadow-lg transition-all duration-200"
              >
                <div className="text-4xl font-bold text-indigo-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600 uppercase tracking-wide">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
