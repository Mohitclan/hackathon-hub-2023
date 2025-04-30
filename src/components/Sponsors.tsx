
import React from 'react';
import { SPONSORS } from '@/assets';
import Transition from './Transition';
import { Shield } from 'lucide-react';

const Sponsors = () => {
  return (
    <section id="sponsors" className="section-padding bg-gradient-to-b from-marvel-navy to-black relative">
      <div className="absolute inset-0 opacity-10 tech-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative">
        <Transition animation="fade-in-up">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Shield className="w-8 h-8 text-marvel-red" />
            <h2 className="section-heading text-marvel-red">
              <span className="font-marvel">S.H.I.E.L.D. HQ SUPPORTERS</span>
            </h2>
          </div>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            Our mission is supported by these powerful allies who believe in fostering the next 
            generation of tech superheroes.
          </p>
        </Transition>
        
        <div className="mt-12">
          <h3 
            className="text-xl font-medium text-center mb-10 text-marvel-red font-marvel"
          >
            DIRECTOR-LEVEL SPONSORS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SPONSORS.main.map((sponsor, index) => (
              <Transition key={index} animation="fade-in-up" delay={300 + index * 100}>
                <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-marvel-red/20 hover:border-marvel-red/50 transition-all duration-300 flex items-center justify-center h-40 hover:shadow-marvel">
                  <img 
                    src={sponsor} 
                    alt={`Sponsor ${index + 1}`} 
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Subtle highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Transition>
            ))}
          </div>
        </div>
        
        <div className="mt-16">
          <h3 
            className="text-xl font-medium text-center mb-10 text-marvel-red font-marvel"
          >
            AGENT-LEVEL SPONSORS
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {SPONSORS.supporting.map((partner, index) => (
              <Transition key={index} animation="fade-in-up" delay={500 + index * 100}>
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-marvel-red/20 hover:border-marvel-red/50 transition-all duration-300 flex items-center justify-center h-32 w-48 hover:shadow-marvel">
                  <img 
                    src={partner} 
                    alt={`Partner ${index + 1}`} 
                    className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
                  />
                  
                  {/* Subtle highlight effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </Transition>
            ))}
          </div>
        </div>
        
        <Transition animation="fade-in-up" delay={800}>
          <div className="bg-black/40 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-marvel-red/20 hover:border-marvel-red/50 transition-all duration-300 text-center max-w-3xl mx-auto mt-20">
            <h3 className="text-2xl font-semibold mb-4 text-marvel-red font-marvel">
              JOIN THE ALLIANCE
            </h3>
            <p className="text-marvel-white/80 mb-8">
              Support the next generation of tech superheroes and gain exposure to Avenger-level talent. 
              Showcase your brand at one of the most exciting hackathon events of the year.
            </p>
            <a href="#contact" className="bg-marvel-red text-white py-3 px-8 rounded hover:bg-marvel-red/90 transition-all duration-300 flex items-center justify-center gap-2 hover:shadow-marvel inline-block">
              Contact Us
            </a>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Sponsors;
