
import React from 'react';
import { Code, Users, Trophy, Lightbulb } from 'lucide-react';
import Transition from './Transition';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: 'Innovative Coding',
      description: 'Push the boundaries of what's possible with code. Develop cutting-edge solutions to real-world problems.'
    },
    {
      icon: <Users className="w-6 h-6 text-primary" />,
      title: 'Team Collaboration',
      description: 'Form teams of up to 4 people and combine your unique skills to create something amazing together.'
    },
    {
      icon: <Trophy className="w-6 h-6 text-primary" />,
      title: 'Amazing Prizes',
      description: 'Win incredible rewards including cash prizes, the latest tech gadgets, and exclusive career opportunities.'
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-primary" />,
      title: 'Learning Opportunities',
      description: 'Gain invaluable experience, learn from industry experts, and enhance your technical and soft skills.'
    }
  ];

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <Transition animation="fade-in-up">
          <h2 className="section-heading">What is HackathonHub?</h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            HackathonHub is a 48-hour coding marathon where creativity meets technology. 
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
              className="feature-card"
            >
              <div className="bg-white p-8 rounded-xl border border-gray-100 smooth-shadow hover-scale h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-primary/10 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </Transition>
          ))}
        </div>
        
        <Transition animation="fade-in-up" delay={700} className="mt-16">
          <div className="bg-gradient-to-r from-primary/5 to-blue-400/5 p-8 md:p-12 rounded-2xl smooth-shadow">
            <blockquote className="text-lg md:text-xl text-gray-700 italic text-center">
              "Participating in last year's hackathon was a game-changer for me. 
              Not only did I learn new technologies, but I also made connections 
              that led to my current job. It's an experience I'll never forget."
            </blockquote>
            <div className="mt-6 text-center">
              <p className="font-semibold">Emma Williams</p>
              <p className="text-sm text-gray-500">Previous Participant, Now Software Engineer at TechGiant</p>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default About;
