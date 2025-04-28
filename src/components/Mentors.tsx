import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { MENTORS } from '@/assets';
import Transition from './Transition';

const Mentors = () => {
  return (
    <section id="mentors" className="section-padding bg-gradient-to-b from-marvel-black to-marvel-darkred relative">
      <div className="absolute inset-0 opacity-10 tech-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative">
        <Transition animation="fade-in-up">
          <h2 className="section-heading text-marvel-gold">Meet Our Mentors</h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            Our mentors are industry experts ready to guide you throughout the hackathon.
            They'll provide technical support, feedback, and help you refine your ideas.
          </p>
        </Transition>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {MENTORS.map((mentor, index) => (
            <Transition 
              key={index} 
              animation="fade-in-up" 
              delay={300 + index * 100}
            >
              <div className="bg-black/40 backdrop-blur-sm rounded-xl border border-marvel-red/20 hover:border-marvel-gold/50 transition-all duration-300 shadow-glow overflow-hidden h-full">
                <div className="relative h-64 sm:h-56 md:h-64 overflow-hidden">
                  <img 
                    src={mentor.image} 
                    alt={mentor.name} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1 text-white">{mentor.name}</h3>
                  <p className="text-orange font-medium mb-2">{mentor.role}</p>
                  <p className="text-gray-400 text-sm mb-4">{mentor.company}</p>
                  
                  <div className="flex space-x-3">
                    <a href="#" className="text-gray-400 hover:text-orange transition-colors" aria-label={`${mentor.name}'s LinkedIn`}>
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-orange transition-colors" aria-label={`${mentor.name}'s Twitter`}>
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-orange transition-colors" aria-label={`${mentor.name}'s GitHub`}>
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </Transition>
          ))}
        </div>
        
        <Transition animation="fade-in-up" delay={700} className="mt-16">
          <div className="bg-charcoal-light p-8 md:p-12 rounded-2xl border border-gray-700 smooth-shadow text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-white">Become a Mentor</h3>
            <p className="text-gray-300 mb-8">
              Are you an industry expert who'd like to share your knowledge with our participants?
              Join our team of mentors and help shape the next generation of tech innovators.
            </p>
            <a href="#contact" className="button-outline">
              Apply as Mentor
            </a>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Mentors;
