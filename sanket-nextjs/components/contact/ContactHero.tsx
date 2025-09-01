import { Mail, Phone, MapPin, Clock, MessageCircle, Heart } from 'lucide-react';

export default function ContactHero() {
  return (
    <section className="relative py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-emerald-900 text-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl">
              <MessageCircle size={48} className="text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Get in{' '}
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Touch
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Ready to make a difference? We&apos;d love to hear from you. Whether you want to volunteer, 
            partner with us, or simply learn more about our work, let&apos;s connect.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Clock size={20} className="mr-2" />
              <span>Response within 24 hours</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <Heart size={20} className="mr-2" />
              <span>Always here to help</span>
            </div>
          </div>
        </div>

        {/* Quick Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-emerald-500/20 p-3 rounded-xl mr-4">
                <Mail size={24} className="text-emerald-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Email Us</h3>
                <p className="text-white/70 text-sm">Quick response guaranteed</p>
              </div>
            </div>
            <p className="text-white font-medium">contact@sanket.org</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-blue-500/20 p-3 rounded-xl mr-4">
                <Phone size={24} className="text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Call Us</h3>
                <p className="text-white/70 text-sm">Mon-Fri, 9 AM - 6 PM</p>
              </div>
            </div>
            <p className="text-white font-medium">+91 98765 43210</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
            <div className="flex items-center mb-4">
              <div className="bg-purple-500/20 p-3 rounded-xl mr-4">
                <MapPin size={24} className="text-purple-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white">Visit Us</h3>
                <p className="text-white/70 text-sm">Central Delhi location</p>
              </div>
            </div>
            <p className="text-white font-medium">Connaught Place, New Delhi</p>
          </div>
        </div>
      </div>
    </section>
  );
}
