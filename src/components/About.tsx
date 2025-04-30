
import React from 'react';
import { Shield, Rocket, Code, Users, Trophy, Lightbulb, Server, ShieldCheck, Cpu, Heart } from 'lucide-react';
import Transition from './Transition';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-marvel-red" />,
      title: "Vision's AI Challenge",
      description: "Develop artificial intelligence solutions that process information like the Mind Stone.",
      character: "Vision"
    },
    {
      icon: <Server className="w-6 h-6 text-marvel-ironman" />,
      title: "Stark Tech Innovation",
      description: "Build next-gen apps using cutting-edge technology worthy of Stark Industries.",
      character: "Iron Man"
    },
    {
      icon: <Cpu className="w-6 h-6 text-marvel-hulk" />,
      title: "Banner's Data Science",
      description: "Harness massive datasets with the analytical precision of Bruce Banner.",
      character: "Hulk"
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-marvel-captain" />,
      title: "Rogers' Security Protocol",
      description: "Create unhackable systems that would make Captain America proud.",
      character: "Captain America"
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-marvel-thor" />,
      title: "Asgardian Clean Energy",
      description: "Develop sustainable tech solutions with the power of Thor's lightning.",
      character: "Thor"
    },
    {
      icon: <Users className="w-6 h-6 text-marvel-red" />,
      title: "Wakandan User Experience",
      description: "Design interfaces with the elegance and innovation of Wakandan technology.",
      character: "Black Panther"
    },
    {
      icon: <Heart className="w-6 h-6 text-marvel-red" />,
      title: "Avengers Healthcare",
      description: "Create solutions that heal and protect, inspired by Dr. Strange's mystical medicine.",
      character: "Dr. Strange"
    },
    {
      icon: <Rocket className="w-6 h-6 text-marvel-ironman" />,
      title: "Guardians' Space Tech",
      description: "Take your innovation beyond Earth with interplanetary technology concepts.",
      character: "Star-Lord"
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-black to-marvel-navy relative">
      <div className="absolute inset-0 opacity-10 tech-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative">
        <Transition animation="fade-in-up">
          <h2 className="section-heading text-marvel-red">
            <span className="font-marvel">CODE FOR THE MULTIVERSE</span>
          </h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading text-marvel-white/80">
            Join the ultimate coding battle where innovation meets superhero spirit.
            Organized by GEEK ROOM at JIMS Engineering Management Technical Campus,
            this Avengers-themed hackathon encourages you to build solutions with the creativity of 
            Tony Stark, the precision of Black Widow, and the strength of the Hulk.
          </p>
        </Transition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <Transition animation="fade-in-up" delay={300} className="col-span-full">
            <h3 className="text-2xl font-semibold mb-6 text-marvel-red text-center font-marvel">MISSION OBJECTIVES</h3>
          </Transition>
          
          {features.map((feature, index) => (
            <Transition 
              key={index} 
              animation="fade-in-up" 
              delay={400 + index * 100}
            >
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-marvel-red/20 hover:border-marvel-red/50 transition-all duration-300 shadow-marvel h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-marvel-red/10 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white font-marvel">{feature.title}</h3>
                <p className="text-marvel-white/70 mb-2">{feature.description}</p>
                <span className="inline-block px-3 py-1 text-xs bg-marvel-red/20 text-white rounded-full">
                  Inspired by {feature.character}
                </span>
              </div>
            </Transition>
          ))}
        </div>
        
        <Transition animation="fade-in-up" delay={1000} className="mt-16">
          <div className="bg-gradient-to-r from-charcoal to-charcoal-light p-8 md:p-12 rounded-2xl smooth-shadow border border-marvel-red/10">
            <h3 className="text-2xl font-semibold mb-6 text-white font-marvel">S.H.I.E.L.D. MISSION STRUCTURE</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-marvel-red mb-2 font-marvel">PHASE ONE: RECRUITMENT</h4>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  <li>Teams will submit a project and presentation on the given problem statements.</li>
                  <li>Director Fury (our panel of experts) will review the submissions and shortlist 10 teams.</li>
                  <li>No limit on the number of participating teams in Phase One.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-marvel-red mb-2 font-marvel">PHASE TWO: DEPLOYMENT</h4>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  <li>Shortlisted teams will complete their projects with prototype and present to the Council.</li>
                  <li>Up to 10 teams will participate in the final assembly.</li>
                </ul>
              </div>
            </div>
          </div>
        </Transition>
        
        <Transition animation="fade-in-up" delay={1200}>
          <div className="bg-gradient-to-r from-charcoal to-charcoal-light p-8 md:p-12 rounded-2xl smooth-shadow mt-8 border border-marvel-red/10">
            <blockquote className="text-lg md:text-xl text-gray-300 italic text-center">
              "HackQuanta was formed to bring together remarkable people. This hackathon exists to do the same with remarkable coders."
            </blockquote>
            <div className="mt-6 text-center">
              <p className="font-semibold text-marvel-red font-marvel">GEEK ROOM</p>
              <p className="text-sm text-gray-400">Strategic Homeland Intervention, Enforcement and Logistics Division</p>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default About;
