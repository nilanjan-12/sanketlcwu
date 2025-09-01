'use client';

import { useState } from 'react';
import { Send, User, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';

const inquiryTypes = [
  'General Information',
  'Volunteer Opportunities',
  'Partnership & Collaboration',
  'Donation & Funding',
  'Event Registration',
  'Media & Press',
  'Careers',
  'Other'
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  organization: string;
  inquiryType: string;
  subject: string;
  message: string;
  subscribe: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    organization: '',
    inquiryType: '',
    subject: '',
    message: '',
    subscribe: true
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const updateField = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    else if (formData.message.length < 10) newErrors.message = 'Message should be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    console.log('Form submitted:', formData);
  };

  if (isSubmitted) {
    return (
      <section className="bg-white py-20 px-6 lg:px-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
            <CheckCircle size={40} className="text-white" />
          </div>
          
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Message Sent Successfully!
          </h2>
          
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Thank you for reaching out to SANKET. We&apos;ve received your message and our team 
            will get back to you within 24 hours. We appreciate your interest in our mission.
          </p>

          <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-2xl p-6 mb-8">
            <h3 className="font-semibold text-gray-900 mb-3">What happens next?</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Our team reviews your inquiry</li>
              <li>• You&apos;ll receive a personalized response</li>
              <li>• We&apos;ll schedule a call if needed</li>
              <li>• Follow-up actions will be planned</li>
            </ul>
          </div>

          <button 
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '', email: '', phone: '', organization: '', 
                inquiryType: '', subject: '', message: '', subscribe: true
              });
            }}
            className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Send Another Message
          </button>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-20 px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Send Us a Message
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Personal Information */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <User size={20} className="mr-2" />
              Personal Information
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.name ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateField('phone', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="+91 98765 43210"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization (Optional)
                </label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => updateField('organization', e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your organization or company"
                />
              </div>
            </div>
          </div>

          {/* Inquiry Details */}
          <div className="bg-blue-50 rounded-2xl p-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <MessageSquare size={20} className="mr-2" />
              Inquiry Details
            </h3>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Inquiry *
                </label>
                <select
                  value={formData.inquiryType}
                  onChange={(e) => updateField('inquiryType', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.inquiryType ? 'border-red-500' : 'border-gray-300'
                  }`}
                >
                  <option value="">Select inquiry type</option>
                  {inquiryTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                {errors.inquiryType && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.inquiryType}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => updateField('subject', e.target.value)}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.subject ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Brief subject of your inquiry"
                />
                {errors.subject && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.subject}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => updateField('message', e.target.value)}
                  rows={6}
                  className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                    errors.message ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Please provide details about your inquiry..."
                />
                <div className="flex justify-between items-center mt-2">
                  {errors.message ? (
                    <p className="text-red-600 text-sm flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.message}
                    </p>
                  ) : (
                    <p className="text-gray-500 text-sm">
                      {formData.message.length} characters (minimum 10)
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter Subscription */}
          <div className="bg-emerald-50 rounded-xl p-4">
            <label className="flex items-start cursor-pointer">
              <input
                type="checkbox"
                checked={formData.subscribe}
                onChange={(e) => updateField('subscribe', e.target.checked)}
                className="mt-1 mr-3 text-emerald-600 rounded focus:ring-emerald-500"
              />
              <div>
                <span className="font-medium text-gray-900">Subscribe to our newsletter</span>
                <p className="text-gray-600 text-sm mt-1">
                  Get updates about our programs, events, and impact stories delivered to your inbox monthly.
                </p>
              </div>
            </label>
          </div>

          {/* Submit Button */}
          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center justify-center mx-auto transition-all ${
                isSubmitting 
                  ? 'opacity-75 cursor-not-allowed' 
                  : 'hover:opacity-90 hover:scale-105'
              }`}
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                  Sending Message...
                </>
              ) : (
                <>
                  <Send size={20} className="mr-3" />
                  Send Message
                </>
              )}
            </button>
            
            <p className="text-gray-500 text-sm mt-4">
              We typically respond within 24 hours during business days.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}
