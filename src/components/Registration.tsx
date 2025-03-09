import React, { useState } from 'react';
import { Check, User, Mail, Users, Briefcase, Code } from 'lucide-react';
import Transition from './Transition';
import { useToast } from '@/hooks/use-toast';

const Registration = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({
    name: '',
    email: '',
    teamName: '',
    experience: '',
    specialRequests: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast({
        title: "Registration Successful!",
        description: "You've successfully registered for the hackathon. Check your email for confirmation.",
        variant: "default",
      });
    }, 1500);
  };

  return (
    <section id="register" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <Transition animation="fade-in-up">
          <h2 className="section-heading">Register Now</h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            Secure your spot at this exciting hackathon event. Fill out the form below to register.
            Registration is free and includes meals, workspace, and all activities.
          </p>
        </Transition>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <Transition animation="fade-in-up" delay={300}>
                <div className="bg-primary/5 p-8 rounded-xl smooth-shadow h-full flex flex-col">
                  <h3 className="text-2xl font-semibold mb-6">Why Register?</h3>
                  
                  <div className="space-y-6 flex-grow">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">Prize Pool</h4>
                        <p className="text-gray-600 text-sm mt-1">First: ₹12,000 | Second: ₹8,000 | Third: ₹6,000 | Special: ₹4,000</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">Network</h4>
                        <p className="text-gray-600 text-sm mt-1">Connect with students from across India and potential employers.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">Two-Stage Competition</h4>
                        <p className="text-gray-600 text-sm mt-1">Elimination round followed by an exciting 30-hour final hackathon.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium">Organized by GEEK ROOM</h4>
                        <p className="text-gray-600 text-sm mt-1">JIMS Engineering Management Technical Campus's premier tech club.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Registration closes on <span className="font-semibold">September 10, 2025</span>.
                      Limited spots available, so register early!
                    </p>
                  </div>
                </div>
              </Transition>
            </div>
            
            <div className="md:col-span-3">
              <Transition animation="fade-in-up" delay={400}>
                <div className="bg-white p-8 rounded-xl border border-gray-100 smooth-shadow">
                  {!submitted ? (
                    <form onSubmit={handleSubmit}>
                      <div className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Full Name *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <User className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              id="name"
                              name="name"
                              value={form.name}
                              onChange={handleChange}
                              required
                              className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-primary focus:border-primary p-3"
                              placeholder="John Doe"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Mail className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="email"
                              id="email"
                              name="email"
                              value={form.email}
                              onChange={handleChange}
                              required
                              className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-primary focus:border-primary p-3"
                              placeholder="john@example.com"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="teamName" className="block text-sm font-medium text-gray-700 mb-1">
                            Team Name *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Users className="h-5 w-5 text-gray-400" />
                            </div>
                            <input
                              type="text"
                              id="teamName"
                              name="teamName"
                              value={form.teamName}
                              onChange={handleChange}
                              required
                              className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-primary focus:border-primary p-3"
                              placeholder="Your team name"
                            />
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                            Preferred Theme *
                          </label>
                          <div className="relative">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                              <Code className="h-5 w-5 text-gray-400" />
                            </div>
                            <select
                              id="experience"
                              name="experience"
                              value={form.experience}
                              onChange={handleChange}
                              required
                              className="pl-10 w-full rounded-lg border border-gray-300 focus:ring-primary focus:border-primary p-3 appearance-none"
                            >
                              <option value="">Select your preferred theme</option>
                              <option value="AI">AI & Machine Learning</option>
                              <option value="Cloud">Cloud Computing</option>
                              <option value="IoT">IoT & Smart Automation</option>
                              <option value="Security">Cybersecurity & Blockchain</option>
                              <option value="Sustainability">Sustainable Tech & Green Solutions</option>
                              <option value="AR/VR">AR/VR Development</option>
                              <option value="HealthTech">HealthTech</option>
                              <option value="Open">Open Innovation</option>
                            </select>
                          </div>
                        </div>
                        
                        <div>
                          <label htmlFor="specialRequests" className="block text-sm font-medium text-gray-700 mb-1">
                            Special Requests or Accommodations (optional)
                          </label>
                          <textarea
                            id="specialRequests"
                            name="specialRequests"
                            value={form.specialRequests}
                            onChange={handleChange}
                            rows={4}
                            className="w-full rounded-lg border border-gray-300 focus:ring-primary focus:border-primary p-3"
                            placeholder="Any dietary restrictions, accessibility needs, or other requirements"
                          ></textarea>
                        </div>
                        
                        <div className="mt-8">
                          <button
                            type="submit"
                            className="w-full button-primary flex items-center justify-center"
                            disabled={loading}
                          >
                            {loading ? (
                              <div className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                            ) : null}
                            {loading ? "Processing..." : "Submit Registration"}
                          </button>
                        </div>
                      </div>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full mx-auto flex items-center justify-center mb-6">
                        <Check className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-semibold mb-4">Registration Complete!</h3>
                      <p className="text-gray-600 mb-8">
                        Thank you for registering for our hackathon! We've sent a confirmation email with all the details.
                      </p>
                      <button
                        type="button"
                        onClick={() => {
                          setSubmitted(false);
                          setForm({
                            name: '',
                            email: '',
                            teamName: '',
                            experience: '',
                            specialRequests: ''
                          });
                        }}
                        className="button-outline"
                      >
                        Register Another Participant
                      </button>
                    </div>
                  )}
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
