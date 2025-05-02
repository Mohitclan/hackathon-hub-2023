import React, { useState } from 'react';
import { Check, User, Mail, Users, Briefcase, Code, Shield, Star, ExternalLink } from 'lucide-react';
import Transition from './Transition';
import { useToast } from '@/hooks/use-toast';

const Registration = () => {
  // External registration URL - Replace with your Unstop hackathon link
  const registrationUrl = "https://unstop.com/your-hackathon-registration-link";
  
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

  // This function is kept for reference but won't be used directly
  // since we're redirecting to Unstop instead
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm(prevForm => ({
      ...prevForm,
      [name]: value
    }));
  };

  // Instead of submitting the form, we'll show info about redirecting to Unstop
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(registrationUrl, '_blank', 'noopener,noreferrer');
    
    toast({
      title: "Redirecting to Registration",
      description: "You're being redirected to our official registration page on Unstop.",
      variant: "default",
    });
  };

  return (
    <section id="register" className="section-padding bg-marvel-navy relative">
      {/* Tech pattern background */}
      <div className="absolute inset-0 tech-pattern opacity-10 pointer-events-none"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-marvel-blue/10 rounded-full filter blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-marvel-red/5 rounded-full filter blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <Transition animation="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Shield className="h-8 w-8 text-marvel-red animate-pulse-slow" />
            <h2 className="section-heading inline-block">Register Now</h2>
          </div>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            Secure your spot at this exciting hackathon event on Unstop. 
            Click the button below to be redirected to our official registration page.
          </p>
        </Transition>
        
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="md:col-span-2">
              <Transition animation="fade-in-up" delay={300}>
                <div className="marvel-card p-8 h-full flex flex-col border border-marvel-grey/30">
                  <h3 className="text-2xl font-semibold mb-6 font-orbitron text-marvel-cyan">Why Register?</h3>
                  
                  <div className="space-y-6 flex-grow">
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-marvel-red/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-marvel-red" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Prize Pool</h4>
                        <p className="text-gray-400 text-sm mt-1">First: ₹12,000 | Second: ₹8,000 | Third: ₹6,000 | Special: ₹4,000</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-marvel-blue/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-marvel-blue" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Network</h4>
                        <p className="text-gray-400 text-sm mt-1">Connect with students from across India and potential employers.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-marvel-cyan/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-marvel-cyan" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Two-Stage Competition</h4>
                        <p className="text-gray-400 text-sm mt-1">Elimination round followed by an exciting 30-hour final hackathon.</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="w-8 h-8 rounded-full bg-marvel-captain/20 flex items-center justify-center">
                          <Check className="w-5 h-5 text-marvel-captain" />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-medium text-white">Organized by GEEK ROOM</h4>
                        <p className="text-gray-400 text-sm mt-1">JIMS Engineering Management Technical Campus's premier tech club.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-8 pt-6 border-t border-marvel-grey/30">
                    <p className="text-sm text-gray-400">
                      Registration closes on <span className="font-semibold text-marvel-cyan">September 10, 2025</span>.
                      Limited spots available, so register early!
                    </p>
                  </div>
                </div>
              </Transition>
            </div>
            
            <div className="md:col-span-3">
              <Transition animation="fade-in-up" delay={400}>
                <div className="marvel-card p-8 border border-marvel-grey/30 text-center">
                  <div className="py-12 flex flex-col items-center">
                    <div className="w-20 h-20 bg-marvel-blue/20 text-marvel-cyan rounded-full mx-auto flex items-center justify-center mb-8 shadow-glow">
                      <ExternalLink className="w-10 h-10" />
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-4 font-orbitron">Register on Unstop</h3>
                    <p className="text-gray-300 mb-8 max-w-md mx-auto">
                      Our hackathon registration is hosted on Unstop platform. Click the button below to navigate to our official registration page.
                    </p>
                    
                    <a 
                      href={registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="button-danger flex items-center justify-center gap-2 px-8 py-3 text-lg"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Register on Unstop
                    </a>
                    
                    <p className="text-gray-400 mt-6 text-sm">
                      You'll be redirected to our official Unstop registration page where you can complete the registration process.
                    </p>
                  </div>
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
