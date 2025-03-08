
import React from 'react';
import { Code, Users, Trophy, Lightbulb } from 'lucide-react';
import Transition from './Transition';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-orange" />,
      title: 'Innovative Coding',
      description: "Push the boundaries of what's possible with code. Develop cutting-edge solutions to real-world problems."
    },
    {
      icon: <Users className="w-6 h-6 text-orange" />,
      title: 'Team Collaboration',
      description: "Form teams of up to 4 people and combine your unique skills to create something amazing together."
    },
    {
      icon: <Trophy className="w-6 h-6 text-orange" />,
      title: 'Amazing Prizes',
      description: "Win incredible rewards including cash prizes, the latest tech gadgets, and exclusive career opportunities."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-orange" />,
      title: 'Learning Opportunities',
      description: "Gain invaluable experience, learn from industry experts, and enhance your technical and soft skills."
    }
  ];

  return (
    <section id="about" className="section-padding bg-charcoal-dark">
      <div className="container mx-auto px-6">
        <Transition animation="fade-in-up">
          <h2 className="section-heading text-white">What is HACKरण?</h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading text-gray-300">
            HACKरण is a 48-hour coding marathon where creativity meets technology. 
            Participants form teams to solve challenges and develop innovative solutions, 
            with mentorship from industry experts and exciting prizes for the winners.
          </p>
        </Transition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {features.map((feature, index) => (
            <Transition 
              key={index} 
              animation="fade-in-up" 
              delay={300 + index * 100}
            >
              <div className="bg-charcoal p-8 rounded-xl border border-orange/10 smooth-shadow hover-scale h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange/10 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            </Transition>
          ))}
        </div>
        
        <Transition animation="fade-in-up" delay={700}>
          <div className="bg-gradient-to-r from-charcoal to-charcoal-light p-8 md:p-12 rounded-2xl smooth-shadow mt-16 border border-orange/10">
            <blockquote className="text-lg md:text-xl text-gray-300 italic text-center">
              "Participating in last year's hackathon was a game-changer for me. 
              Not only did I learn new technologies, but I also made connections 
              that led to my current job. It's an experience I'll never forget."
            </blockquote>
            <div className="mt-6 text-center">
              <p className="font-semibold text-orange">Emma Williams</p>
              <p className="text-sm text-gray-400">Previous Participant, Now Software Engineer at TechGiant</p>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default About;
