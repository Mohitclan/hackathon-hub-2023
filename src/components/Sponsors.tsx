import React from 'react';
import { SPONSORS } from '@/assets';
import Transition from './Transition';

const Sponsors = () => {
  return (
    <section id="sponsors" className="section-padding bg-gradient-to-b from-marvel-black to-marvel-darkred relative">
      <div className="absolute inset-0 opacity-10 tech-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative">
        <Transition animation="fade-in-up">
          <h2 className="section-heading text-marvel-gold">Our Amazing Sponsors</h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            We're proud to partner with leading companies who share our vision of fostering innovation and supporting the next generation of tech talent.
          </p>
        </Transition>
        
        <div className="mt-12">
          <h3 className="text-xl font-medium text-center mb-10 text-marvel-gold font-orbitron">Platinum Sponsors</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SPONSORS.main.map((sponsor, index) => (
              <Transition key={index} animation="fade-in-up" delay={300 + index * 100}>
                <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-marvel-red/20 hover:border-marvel-gold/50 transition-all duration-300 shadow-glow flex items-center justify-center h-40">
                  <img src={sponsor} alt={`Sponsor ${index + 1}`} className="max-h-full max-w-full object-contain" />
                </div>
              </Transition>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-medium text-center mb-10 text-marvel-gold font-orbitron">Gold Sponsors</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {SPONSORS.supporting.map((partner, index) => (
              <Transition key={index} animation="fade-in-up" delay={500 + index * 100}>
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-marvel-red/20 hover:border-marvel-gold/50 transition-all duration-300 shadow-glow flex items-center justify-center h-32 w-48">
                  <img src={partner} alt={`Partner ${index + 1}`} className="max-h-full max-w-full object-contain" />
                </div>
              </Transition>
            ))}
          </div>
        </div>
        
        <Transition animation="fade-in-up" delay={800}>
          <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-marvel-red/20 hover:border-marvel-gold/50 transition-all duration-300 text-center max-w-3xl mx-auto mt-20">
            <h3 className="text-2xl font-semibold mb-4 text-marvel-gold font-orbitron">Become a Sponsor</h3>
            <p className="text-marvel-white/80 mb-8">
              Support the next generation of innovators and gain exposure to top tech talent. 
              Showcase your brand at one of the most exciting hackathon events of the year.
            </p>
            <a href="#contact" className="button-outline">Contact Us</a>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Sponsors;
