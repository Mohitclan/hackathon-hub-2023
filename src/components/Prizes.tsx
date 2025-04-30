
import React, { useEffect, useRef } from 'react';
import { Award, Gift, Star, Zap } from 'lucide-react';
import { PRIZES } from '@/assets';
import Transition from './Transition';

const Prizes = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const stones = document.querySelectorAll('.infinity-stone');
      stones.forEach((stone, index) => {
        const rect = stone.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
        
        if (isVisible) {
          const scrollPosition = window.scrollY;
          const rotateY = ((scrollPosition - rect.top) / 100) % 360;
          const translateZ = Math.sin(scrollPosition / 500) * 20;
          
          // Apply 3D rotation effect
          (stone as HTMLElement).style.transform = 
            `perspective(1000px) rotateY(${rotateY * 0.1}deg) translateZ(${translateZ}px)`;
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const infinityStones = [
    {
      title: "Power Stone",
      position: "First Prize",
      image: PRIZES.first,
      color: "bg-purple-600",
      icon: <Award className="w-8 h-8 text-white" />,
      prize: "₹12,000",
      description: "Harness the power of creation with a MacBook Pro, premium software subscriptions, and direct mentorship from industry leaders."
    },
    {
      title: "Reality Stone",
      position: "Second Prize",
      image: PRIZES.second,
      color: "bg-red-600",
      icon: <Star className="w-8 h-8 text-white" />,
      prize: "₹8,000",
      description: "Bend reality with a powerful tablet, cloud credits, and exclusive software licenses to bring your visions to life."
    },
    {
      title: "Space Stone",
      position: "Third Prize",
      image: PRIZES.third,
      color: "bg-blue-600",
      icon: <Gift className="w-8 h-8 text-white" />,
      prize: "₹6,000",
      description: "Transport your ideas beyond boundaries with smart gadgets, learning resources, and startup mentorship sessions."
    },
    {
      title: "Mind Stone",
      position: "Innovation Award",
      image: PRIZES.special,
      color: "bg-yellow-500",
      icon: <Zap className="w-8 h-8 text-white" />,
      prize: "₹4,000",
      description: "Enhance your intellect with premium courses, books, and networking opportunities with leading tech innovators."
    }
  ];

  return (
    <section id="prizes" className="section-padding bg-black relative" ref={sectionRef}>
      <div className="absolute inset-0 opacity-10 tech-pattern pointer-events-none"></div>
      
      {/* Captain America Shield (floating in background) */}
      <div className="captain-america-shield"></div>
      
      {/* Spider Web Top Right */}
      <div className="spider-web spider-web-top-right"></div>
      
      {/* Spider Web Bottom Left */}
      <div className="spider-web spider-web-bottom-left"></div>
      
      <div className="container mx-auto px-6 relative">
        <Transition animation="fade-in-up">
          <h2 className="section-heading text-marvel-red">
            <span className="font-marvel">INFINITY REWARDS</span>
          </h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            Like the Infinity Stones, these prizes hold immense power for those who can harness their potential.
            Showcase your skills and creativity to claim these cosmic rewards.
          </p>
        </Transition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {infinityStones.map((stone, index) => (
            <Transition key={index} animation="fade-in-up" delay={300 + index * 100}>
              <div 
                className={`rounded-xl overflow-hidden h-full flex flex-col clip-path-stone infinity-stone ${stone.color} transform-gpu`}
                style={{
                  transition: "transform 0.6s ease-out",
                  boxShadow: `0 10px 25px ${index === 0 ? 'rgba(147, 51, 234, 0.5)' : 
                              index === 1 ? 'rgba(225, 29, 72, 0.5)' : 
                              index === 2 ? 'rgba(37, 99, 235, 0.5)' : 
                              'rgba(234, 179, 8, 0.5)'}`
                }}
              >
                <div className="p-1">
                  <div className="bg-black/90 rounded-lg overflow-hidden h-full flex flex-col">
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 z-10"></div>
                      <img 
                        src={stone.image} 
                        alt={stone.title}
                        className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                        style={{objectFit: "cover"}}
                      />
                      <div className="absolute top-4 left-4 bg-black rounded-full p-2 z-20">
                        {stone.icon}
                      </div>
                      <div className="absolute bottom-4 left-4 z-20">
                        <h4 className="text-lg font-marvel text-white">{stone.position}</h4>
                      </div>
                    </div>
                    
                    <div className="p-6 flex-grow flex flex-col">
                      <h3 className="text-xl font-semibold mb-2 text-white font-marvel">{stone.title}</h3>
                      <div className="text-2xl font-bold text-marvel-red mb-4">{stone.prize}</div>
                      <p className="text-gray-300 mb-auto">{stone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          ))}
        </div>
        
        <Transition animation="fade-in-up" delay={700} className="mt-16">
          <div className="bg-black/50 p-8 md:p-12 rounded-2xl border border-marvel-red/20 smooth-shadow text-center">
            <h3 className="text-2xl font-semibold mb-4 text-white font-marvel">COSMIC SWAG & RECOGNITION</h3>
            <p className="text-gray-300 mb-4">
              All participants will receive exclusive Avengers-themed hackathon merch, certificates of participation, and special mentions across our universe of social media.
            </p>
            <p className="text-gray-300">
              Additional surprise rewards will be announced during the event by Director Fury himself!
            </p>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Prizes;
