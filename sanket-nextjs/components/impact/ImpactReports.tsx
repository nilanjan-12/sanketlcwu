import { Download, FileText, BarChart3, Calendar, Eye, Share2 } from 'lucide-react';

const reports = [
  {
    id: 1,
    title: 'Annual Impact Report 2023',
    type: 'Annual Report',
    year: '2023',
    description: 'Comprehensive overview of our programs, achievements, and financial transparency for the year 2023.',
    pages: 64,
    size: '12.5 MB',
    language: 'English',
    highlights: [
      '50,000+ lives impacted across all programs',
      '₹45M resources mobilized and deployed',
      'UN SDG Partnership milestone achieved',
      'Carbon neutral operations certified'
    ],
    downloadUrl: '/reports/sanket-annual-report-2023.pdf',
    viewUrl: '/reports/view/sanket-annual-report-2023',
    color: 'from-blue-500 to-indigo-500',
    featured: true
  },
  {
    id: 2,
    title: 'Education Program Evaluation 2022-23',
    type: 'Program Report',
    year: '2023',
    description: 'In-depth analysis of education program outcomes, methodologies, and impact measurement.',
    pages: 28,
    size: '8.2 MB',
    language: 'English',
    highlights: [
      '25,000 students educated',
      '78% improvement in literacy rates',
      '45 schools infrastructure enhanced',
      '200 teachers trained'
    ],
    downloadUrl: '/reports/education-program-report-2023.pdf',
    viewUrl: '/reports/view/education-program-report-2023',
    color: 'from-emerald-500 to-teal-500',
    featured: false
  },
  {
    id: 3,
    title: 'Healthcare Impact Assessment 2023',
    type: 'Impact Assessment',
    year: '2023',
    description: 'Detailed assessment of healthcare interventions and their long-term impact on community health.',
    pages: 35,
    size: '10.1 MB',
    language: 'English',
    highlights: [
      '18,000 patients treated',
      '45% reduction in maternal mortality',
      '150+ health camps conducted',
      '120 community health workers trained'
    ],
    downloadUrl: '/reports/healthcare-impact-assessment-2023.pdf',
    viewUrl: '/reports/view/healthcare-impact-assessment-2023',
    color: 'from-rose-500 to-pink-500',
    featured: true
  },
  {
    id: 4,
    title: 'Environmental Conservation Report 2023',
    type: 'Thematic Report',
    year: '2023',
    description: 'Comprehensive report on environmental conservation efforts and measurable ecological impact.',
    pages: 42,
    size: '15.3 MB',
    language: 'English',
    highlights: [
      '100,000+ trees planted',
      '2,500T CO2 equivalent offset',
      '50 communities with waste management',
      '15,000 people with clean water access'
    ],
    downloadUrl: '/reports/environmental-conservation-2023.pdf',
    viewUrl: '/reports/view/environmental-conservation-2023',
    color: 'from-emerald-500 to-teal-500',
    featured: false
  },
  {
    id: 5,
    title: 'Financial Transparency Report 2023',
    type: 'Financial Report',
    year: '2023',
    description: 'Complete financial breakdown showing fund utilization, efficiency ratios, and audit results.',
    pages: 22,
    size: '5.8 MB',
    language: 'English',
    highlights: [
      '92% program expenditure ratio',
      'Clean audit with no major findings',
      'Detailed fund source breakdown',
      'Cost-per-beneficiary analysis'
    ],
    downloadUrl: '/reports/financial-transparency-2023.pdf',
    viewUrl: '/reports/view/financial-transparency-2023',
    color: 'from-amber-500 to-orange-500',
    featured: true
  },
  {
    id: 6,
    title: 'Volunteer Impact Study 2023',
    type: 'Research Report',
    year: '2023',
    description: 'Study on volunteer contributions, satisfaction levels, and the multiplier effect of volunteer engagement.',
    pages: 31,
    size: '9.4 MB',
    language: 'English',
    highlights: [
      '200+ active volunteers',
      '10,000+ volunteer hours contributed',
      '95% volunteer satisfaction rate',
      '3x impact multiplier through volunteers'
    ],
    downloadUrl: '/reports/volunteer-impact-study-2023.pdf',
    viewUrl: '/reports/view/volunteer-impact-study-2023',
    color: 'from-purple-500 to-violet-500',
    featured: false
  }
];

const reportYears = ['2023', '2022', '2021', '2020', '2019'];
const reportTypes = ['All Reports', 'Annual Report', 'Program Report', 'Impact Assessment', 'Financial Report', 'Research Report'];

const quickStats = [
  { label: 'Total Reports', value: '25+', icon: FileText },
  { label: 'Years Documented', value: '15', icon: Calendar },
  { label: 'Total Downloads', value: '50K+', icon: Download },
  { label: 'Languages Available', value: '3', icon: Share2 }
];

export default function ImpactReports() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Impact <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Reports</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Access detailed reports documenting our impact, methodologies, and financial transparency. 
            We believe in complete openness about our work and results.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-gradient-to-br from-indigo-50 to-emerald-50 rounded-xl p-6 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-white" size={24} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {reportTypes.map((type) => (
              <button
                key={type}
                className="px-4 py-2 rounded-full text-sm font-medium bg-gray-100 text-gray-600 hover:bg-indigo-100 hover:text-indigo-700 transition-colors"
              >
                {type}
              </button>
            ))}
          </div>
          
          <div className="flex flex-wrap justify-center gap-2">
            {reportYears.map((year) => (
              <button
                key={year}
                className="px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700 hover:bg-emerald-200 transition-colors"
              >
                {year}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Reports */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Featured Reports</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {reports.filter(report => report.featured).slice(0, 2).map((report) => (
              <div key={report.id} className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow">
                <div className={`bg-gradient-to-r ${report.color} p-6 text-white`}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <span className="bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
                        {report.type}
                      </span>
                    </div>
                    <span className="text-white/80 text-sm">{report.year}</span>
                  </div>
                  <h4 className="text-2xl font-bold mb-3">{report.title}</h4>
                  <p className="text-white/90 text-sm leading-relaxed">{report.description}</p>
                </div>
                
                <div className="p-6">
                  {/* Report Details */}
                  <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-bold text-gray-900">{report.pages}</div>
                      <div className="text-gray-600 text-xs">Pages</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-bold text-gray-900">{report.size}</div>
                      <div className="text-gray-600 text-xs">File Size</div>
                    </div>
                    <div className="bg-gray-50 rounded-lg p-3">
                      <div className="font-bold text-gray-900">{report.language}</div>
                      <div className="text-gray-600 text-xs">Language</div>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="mb-6">
                    <h5 className="font-semibold text-gray-900 mb-3">Key Highlights</h5>
                    <div className="space-y-2">
                      {report.highlights.slice(0, 3).map((highlight, index) => (
                        <div key={index} className="flex items-start">
                          <BarChart3 className="text-indigo-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-700 text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <button className={`flex-1 bg-gradient-to-r ${report.color} text-white py-3 px-4 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center`}>
                      <Download size={18} className="mr-2" />
                      Download PDF
                    </button>
                    <button className="flex-1 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors flex items-center justify-center">
                      <Eye size={18} className="mr-2" />
                      Preview Online
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* All Reports Grid */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">All Reports</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <div key={report.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${report.color} rounded-lg flex items-center justify-center`}>
                    <FileText className="text-white" size={20} />
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">{report.type}</span>
                    <div className="text-xs text-gray-500 mt-1">{report.year}</div>
                  </div>
                </div>
                
                <h4 className="font-bold text-gray-900 mb-2 line-clamp-2">{report.title}</h4>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">{report.description}</p>
                
                <div className="flex items-center justify-between text-xs text-gray-500 mb-4">
                  <span>{report.pages} pages</span>
                  <span>{report.size}</span>
                  <span>{report.language}</span>
                </div>
                
                <div className="flex gap-2">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center">
                    <Download size={14} className="mr-1" />
                    Download
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors flex items-center justify-center">
                    <Eye size={14} className="mr-1" />
                    Preview
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-indigo-600 to-emerald-600 rounded-3xl p-8 md:p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Stay Updated on Our Impact
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Subscribe to receive our latest impact reports, program updates, and insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-full text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button className="bg-white text-indigo-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-white/70 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
