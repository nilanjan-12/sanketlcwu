'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Heart, Users, Leaf, GraduationCap } from 'lucide-react';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'about Us', href: '/about', current: false },
  { name: 'Journey So Far', href: '/journey', current: false },
  { name: 'Volunteering', href: '/volunteer', current: false },
  { name: 'SANKET for Us', href: '/impact', current: false },
  { name: 'Upcoming Events', href: '/events', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50'
          : 'bg-white/90 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 lg:py-6">
          {/* Logo */}
          <Link href="/" className="flex flex-col group">
            <h1 className="text-2xl lg:text-3xl font-bold text-gray-900 tracking-tight transition-colors group-hover:text-indigo-600">
              SANKET
            </h1>
            <p className="text-xs lg:text-sm text-gray-600 uppercase tracking-wider font-medium -mt-1">
              Leads to a Change Within Us
            </p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-gray-900 font-medium text-sm transition-colors relative group py-2"
              >
                {item.name}
                <span className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-indigo-600 to-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform" />
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/volunteer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-200 hover:from-indigo-700 hover:to-indigo-800 hover:-translate-y-0.5 hover:shadow-lg"
            >
              <Heart size={16} />
              Join Us
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileMenuOpen(false)}
          />
          
          {/* Menu panel */}
          <div className="fixed top-0 right-0 z-50 w-full max-w-sm h-full bg-white shadow-xl lg:hidden transform transition-transform">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex flex-col">
                <h2 className="text-xl font-bold text-gray-900">SANKET</h2>
                <p className="text-xs text-gray-600 uppercase tracking-wider">
                  Menu
                </p>
              </div>
              <button
                type="button"
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="px-6 py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              <div className="pt-4 border-t border-gray-200">
                <Link
                  href="/volunteer"
                  className="flex items-center gap-2 w-full bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-4 py-3 rounded-xl font-semibold text-sm transition-all duration-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Heart size={16} />
                  Join Us
                </Link>
              </div>
            </div>
            
            {/* Quick stats */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gray-50 border-t border-gray-200">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="flex justify-center mb-1">
                    <Users size={16} className="text-indigo-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">2500+</div>
                  <div className="text-xs text-gray-600">Volunteers</div>
                </div>
                <div>
                  <div className="flex justify-center mb-1">
                    <GraduationCap size={16} className="text-emerald-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">12</div>
                  <div className="text-xs text-gray-600">States</div>
                </div>
                <div>
                  <div className="flex justify-center mb-1">
                    <Leaf size={16} className="text-green-600" />
                  </div>
                  <div className="text-lg font-bold text-gray-900">15+</div>
                  <div className="text-xs text-gray-600">Years</div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}
