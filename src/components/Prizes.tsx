
import React from 'react';
import { Award, Gift, Star, Zap } from 'lucide-react';
import { PRIZES } from '@/assets';
import Transition from './Transition';

const Prizes = () => {
  const prizeDetails = [
    {
      title: "First Prize",
      image: PRIZES.first,
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      prize: "$10,000",
      description: "Cash prize, mentorship opportunities with industry leaders, and the latest tech gadgets."
    },
    {
      title: "Second Prize",
      image: PRIZES.second,
      icon: <Star className="w-8 h-8 text-gray-500" />,
      prize: "$5,000",
      description: "Cash prize and premium software subscriptions for your future projects."
    },
    {
      title: "Third Prize",
      image: PRIZES.third,
      icon: <Gift className="w-8 h-8 text-orange-500" />,
      prize: "$2,500",
      description: "Cash prize and exclusive access to coding bootcamps and workshops."
    },
    {
      title: "Innovation Award",
      image: PRIZES.special,
      icon: <Zap className="w-8 h-8 text-purple-500" />,
      prize: "$1,500",
      description: "Special recognition for the most innovative solution, plus career networking opportunities."
    }
  ];

  return (
    <section id="prizes" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <Transition animation="fade-in-up">
          <h2 className="section-heading">Exciting Prizes Await!</h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            Our generous sponsors have provided amazing prizes for the top projects. 
            Showcase your skills and creativity to win these incredible rewards.
          </p>
        </Transition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {prizeDetails.map((prize, index) => (
            <Transition 
              key={index} 
              animation="fade-in-up" 
              delay={300 + index * 100}
            >
              <div className="bg-white rounded-xl border border-gray-100 smooth-shadow overflow-hidden hover-scale h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/30 z-10"></div>
                  <img 
                    src={prize.image} 
                    alt={prize.title} 
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 bg-white rounded-full p-2 z-20">
                    {prize.icon}
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold mb-2">{prize.title}</h3>
                  <div className="text-2xl font-bold text-primary mb-4">{prize.prize}</div>
                  <p className="text-gray-600 mb-auto">{prize.description}</p>
                </div>
              </div>
            </Transition>
          ))}
        </div>
        
        <Transition animation="fade-in-up" delay={700} className="mt-16">
          <div className="bg-primary/5 p-8 md:p-12 rounded-2xl smooth-shadow text-center">
            <h3 className="text-2xl font-semibold mb-4">Special Mentions & Swag</h3>
            <p className="text-gray-600 mb-4">
              All participants will receive exclusive hackathon swag, certificates of participation, and special mentions across our social media channels.
            </p>
            <p className="text-gray-600">
              Additional surprise prizes will be announced during the event!
            </p>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default Prizes;
