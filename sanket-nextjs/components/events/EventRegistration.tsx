'use client';

import { useState } from 'react';
import { Calendar, CheckCircle, AlertCircle, User, Mail, Phone } from 'lucide-react';

const registrationSteps = [
  { id: 1, title: 'Personal Details', icon: User },
  { id: 2, title: 'Event Preferences', icon: Calendar },
  { id: 3, title: 'Review & Confirm', icon: CheckCircle }
];

const eventTypes = [
  'Health Camps',
  'Educational Workshops',
  'Environmental Initiatives',
  'Community Development',
  'Youth Programs',
  'Skill Development',
  'Awareness Campaigns'
];

const volunteerRoles = [
  'Event Coordinator',
  'Registration Assistant',
  'Logistics Support',
  'Translation Services',
  'Photography/Documentation',
  'Technical Support',
  'Community Liaison'
];

interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  organization: string;
  designation: string;
  interestedEvents: string[];
  volunteerRoles: string[];
  availability: string;
  experience: string;
  specialSkills: string;
  dietaryRequirements: string;
  newsletterSubscription: boolean;
  eventUpdates: boolean;
  volunteerOpportunities: boolean;
}

interface FormErrors {
  [key: string]: string;
}

export default function EventRegistration() {
  const [currentStep, setCurrentStep] = useState(1);
  const [registrationData, setRegistrationData] = useState<RegistrationData>({
    // Personal Details
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    organization: '',
    designation: '',
    
    // Event Preferences
    interestedEvents: [],
    volunteerRoles: [],
    availability: '',
    experience: '',
    specialSkills: '',
    dietaryRequirements: '',
    
    // Communication
    newsletterSubscription: true,
    eventUpdates: true,
    volunteerOpportunities: true
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const updateField = (field: keyof RegistrationData, value: string | string[] | boolean) => {
    setRegistrationData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const toggleArrayField = (field: keyof RegistrationData, value: string) => {
    const currentArray = registrationData[field] as string[];
    const newArray = currentArray.includes(value)
      ? currentArray.filter((item: string) => item !== value)
      : [...currentArray, value];
    updateField(field, newArray);
  };

  const validateStep = (step: number) => {
    const errors: FormErrors = {};
    
    if (step === 1) {
      if (!registrationData.firstName.trim()) errors.firstName = 'First name is required';
      if (!registrationData.lastName.trim()) errors.lastName = 'Last name is required';
      if (!registrationData.email.trim()) errors.email = 'Email is required';
      else if (!/\S+@\S+\.\S+/.test(registrationData.email)) errors.email = 'Invalid email format';
      if (!registrationData.phone.trim()) errors.phone = 'Phone number is required';
      else if (!/^\d{10}$/.test(registrationData.phone.replace(/\D/g, ''))) errors.phone = 'Invalid phone number';
    }
    
    if (step === 2) {
      if (registrationData.interestedEvents.length === 0) errors.interestedEvents = 'Please select at least one event type';
      if (!registrationData.availability.trim()) errors.availability = 'Please specify your availability';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const submitRegistration = () => {
    if (validateStep(2)) {
      setIsSubmitted(true);
      // Here you would typically send data to your backend
      console.log('Registration data:', registrationData);
    }
  };

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
              <CheckCircle size={40} className="text-white" />
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Registration Successful!
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              Thank you for registering with SANKET! We&apos;ve received your information and will contact you soon 
              with event updates and volunteer opportunities that match your interests.
            </p>

            <div className="bg-gradient-to-r from-indigo-50 to-emerald-50 rounded-2xl p-6 mb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">What&apos;s Next?</h3>
                  <ul className="text-gray-700 space-y-1 text-left">
                    <li>• Email confirmation within 24 hours</li>
                    <li>• Event notifications based on preferences</li>
                    <li>• Volunteer opportunity matches</li>
                    <li>• Monthly impact newsletter</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Your Registration ID</h3>
                  <div className="bg-white rounded-lg p-3">
                    <span className="font-mono text-lg text-indigo-600">#SANKET-{Date.now().toString().slice(-6)}</span>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Save this ID for future reference</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setRegistrationData({
                    firstName: '', lastName: '', email: '', phone: '', organization: '', designation: '',
                    interestedEvents: [], volunteerRoles: [], availability: '', experience: '', specialSkills: '', dietaryRequirements: '',
                    newsletterSubscription: true, eventUpdates: true, volunteerOpportunities: true
                  });
                }}
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
              >
                Register Another Person
              </button>
              <button 
                onClick={() => window.location.href = '/events'}
                className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                Browse Events
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-emerald-50">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Event <span className="bg-gradient-to-r from-indigo-600 to-emerald-600 bg-clip-text text-transparent">Registration</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Join us in making a difference! Register for our events and volunteer opportunities 
            to be part of positive change in communities across India.
          </p>
        </div>

        {/* Progress Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 mb-8">
          <div className="flex items-center justify-between mb-8">
            {registrationSteps.map((step, index) => (
              <div key={step.id} className="flex items-center flex-1">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 ${
                  currentStep >= step.id 
                    ? 'bg-indigo-600 border-indigo-600 text-white' 
                    : 'border-gray-300 text-gray-400'
                }`}>
                  <step.icon size={20} />
                </div>
                <div className={`ml-3 ${currentStep >= step.id ? 'text-gray-900' : 'text-gray-400'}`}>
                  <div className="font-semibold">{step.title}</div>
                </div>
                {index < registrationSteps.length - 1 && (
                  <div className={`flex-1 h-0.5 mx-4 ${
                    currentStep > step.id ? 'bg-indigo-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step 1: Personal Details */}
          {currentStep === 1 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={registrationData.firstName}
                    onChange={(e) => updateField('firstName', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      formErrors.firstName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your first name"
                  />
                  {formErrors.firstName && (
                    <p className="text-red-600 text-sm mt-1">{formErrors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={registrationData.lastName}
                    onChange={(e) => updateField('lastName', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      formErrors.lastName ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="Enter your last name"
                  />
                  {formErrors.lastName && (
                    <p className="text-red-600 text-sm mt-1">{formErrors.lastName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={registrationData.email}
                    onChange={(e) => updateField('email', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      formErrors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="your.email@example.com"
                  />
                  {formErrors.email && (
                    <p className="text-red-600 text-sm mt-1">{formErrors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    value={registrationData.phone}
                    onChange={(e) => updateField('phone', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      formErrors.phone ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="+91 98765 43210"
                  />
                  {formErrors.phone && (
                    <p className="text-red-600 text-sm mt-1">{formErrors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    value={registrationData.organization}
                    onChange={(e) => updateField('organization', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your organization or company"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Designation (Optional)
                  </label>
                  <input
                    type="text"
                    value={registrationData.designation}
                    onChange={(e) => updateField('designation', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Your job title or role"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Event Preferences */}
          {currentStep === 2 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Event Preferences & Availability</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Types of Events You&apos;re Interested In *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {eventTypes.map((type) => (
                      <label key={type} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={registrationData.interestedEvents.includes(type)}
                          onChange={() => toggleArrayField('interestedEvents', type)}
                          className="mr-3 text-indigo-600 rounded focus:ring-indigo-500"
                        />
                        <span className="text-gray-700">{type}</span>
                      </label>
                    ))}
                  </div>
                  {formErrors.interestedEvents && (
                    <p className="text-red-600 text-sm mt-1">{formErrors.interestedEvents}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Volunteer Roles You&apos;re Interested In
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {volunteerRoles.map((role) => (
                      <label key={role} className="flex items-center p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                        <input
                          type="checkbox"
                          checked={registrationData.volunteerRoles.includes(role)}
                          onChange={() => toggleArrayField('volunteerRoles', role)}
                          className="mr-3 text-indigo-600 rounded focus:ring-indigo-500"
                        />
                        <span className="text-gray-700">{role}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Availability *
                  </label>
                  <select
                    value={registrationData.availability}
                    onChange={(e) => updateField('availability', e.target.value)}
                    className={`w-full p-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent ${
                      formErrors.availability ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select your availability</option>
                    <option value="weekends">Weekends Only</option>
                    <option value="evenings">Weekday Evenings</option>
                    <option value="flexible">Flexible Schedule</option>
                    <option value="full-time">Available Full Time</option>
                    <option value="specific">Specific Dates Only</option>
                  </select>
                  {formErrors.availability && (
                    <p className="text-red-600 text-sm mt-1">{formErrors.availability}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Previous Experience (Optional)
                    </label>
                    <textarea
                      value={registrationData.experience}
                      onChange={(e) => updateField('experience', e.target.value)}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Tell us about your previous volunteer experience..."
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Special Skills (Optional)
                    </label>
                    <textarea
                      value={registrationData.specialSkills}
                      onChange={(e) => updateField('specialSkills', e.target.value)}
                      rows={4}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                      placeholder="Any special skills or expertise you can offer..."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Dietary Requirements (Optional)
                  </label>
                  <input
                    type="text"
                    value={registrationData.dietaryRequirements}
                    onChange={(e) => updateField('dietaryRequirements', e.target.value)}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="e.g., Vegetarian, Vegan, Allergies, etc."
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Review & Confirm */}
          {currentStep === 3 && (
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Review & Confirm</h3>
              
              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Personal Information</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div><span className="font-medium">Name:</span> {registrationData.firstName} {registrationData.lastName}</div>
                  <div><span className="font-medium">Email:</span> {registrationData.email}</div>
                  <div><span className="font-medium">Phone:</span> {registrationData.phone}</div>
                  {registrationData.organization && (
                    <div><span className="font-medium">Organization:</span> {registrationData.organization}</div>
                  )}
                </div>
              </div>

              <div className="bg-gray-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Event Preferences</h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium">Interested Events:</span>
                    <div className="mt-1 flex flex-wrap gap-2">
                      {registrationData.interestedEvents.map((event) => (
                        <span key={event} className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full text-xs">
                          {event}
                        </span>
                      ))}
                    </div>
                  </div>
                  {registrationData.volunteerRoles.length > 0 && (
                    <div>
                      <span className="font-medium">Volunteer Roles:</span>
                      <div className="mt-1 flex flex-wrap gap-2">
                        {registrationData.volunteerRoles.map((role) => (
                          <span key={role} className="bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full text-xs">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <div><span className="font-medium">Availability:</span> {registrationData.availability}</div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-900 mb-4">Communication Preferences</h4>
                <div className="space-y-3">
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={registrationData.newsletterSubscription}
                      onChange={(e) => updateField('newsletterSubscription', e.target.checked)}
                      className="mr-3 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">Subscribe to our monthly impact newsletter</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={registrationData.eventUpdates}
                      onChange={(e) => updateField('eventUpdates', e.target.checked)}
                      className="mr-3 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">Receive event updates and reminders</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="checkbox"
                      checked={registrationData.volunteerOpportunities}
                      onChange={(e) => updateField('volunteerOpportunities', e.target.checked)}
                      className="mr-3 text-indigo-600 rounded focus:ring-indigo-500"
                    />
                    <span className="text-gray-700">Get notified about new volunteer opportunities</span>
                  </label>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-6">
                <div className="flex items-start">
                  <AlertCircle size={20} className="text-amber-600 mr-3 mt-0.5 flex-shrink-0" />
                  <div className="text-amber-800">
                    <p className="font-semibold mb-1">Please Note:</p>
                    <ul className="text-sm space-y-1">
                      <li>• You will receive a confirmation email within 24 hours</li>
                      <li>• Event-specific details will be shared closer to the event date</li>
                      <li>• You can update your preferences anytime by contacting us</li>
                      <li>• Volunteer opportunities are matched based on your skills and availability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between pt-6">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
                currentStep === 1
                  ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              Previous Step
            </button>

            {currentStep < 3 ? (
              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Next Step
              </button>
            ) : (
              <button
                onClick={submitRegistration}
                className="bg-gradient-to-r from-indigo-600 to-emerald-600 text-white px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Complete Registration
              </button>
            )}
          </div>
        </div>

        {/* Help Section */}
        <div className="text-center">
          <p className="text-gray-600 mb-4">
            Need help with registration? 
            <a href="mailto:events@sanket.org" className="text-indigo-600 hover:text-indigo-700 ml-1">
              Contact our events team
            </a>
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center">
              <Mail size={16} className="mr-2" />
              events@sanket.org
            </div>
            <div className="flex items-center">
              <Phone size={16} className="mr-2" />
              +91 98765 43210
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
