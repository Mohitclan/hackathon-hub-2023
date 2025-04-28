import React from 'react';
import { Code, Users, Trophy, Lightbulb, Server, ShieldCheck, Cpu, Heart } from 'lucide-react';
import Transition from './Transition';

const About = () => {
  const features = [
    {
      icon: <Code className="w-6 h-6 text-orange" />,
      title: "AI & Machine Learning",
      description: "Develop innovative solutions using artificial intelligence and machine learning technologies."
    },
    {
      icon: <Server className="w-6 h-6 text-orange" />,
      title: "Cloud Computing",
      description: "Create scalable applications leveraging cloud platforms and services."
    },
    {
      icon: <Cpu className="w-6 h-6 text-orange" />,
      title: "IoT & Smart Automation",
      description: "Build connected devices and automation systems to solve real-world problems."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-orange" />,
      title: "Cybersecurity & Blockchain",
      description: "Design secure applications and explore blockchain technology for various use cases."
    },
    {
      icon: <Lightbulb className="w-6 h-6 text-orange" />,
      title: "Sustainable Tech",
      description: "Develop green solutions addressing environmental challenges through technology."
    },
    {
      icon: <Users className="w-6 h-6 text-orange" />,
      title: "AR/VR Development",
      description: "Create immersive experiences using augmented and virtual reality technologies."
    },
    {
      icon: <Heart className="w-6 h-6 text-orange" />,
      title: "HealthTech",
      description: "Innovate healthcare solutions to improve patient care and medical processes."
    },
    {
      icon: <Trophy className="w-6 h-6 text-orange" />,
      title: "Open Innovation",
      description: "Explore creative solutions beyond the predefined themes with your unique ideas."
    }
  ];

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-marvel-darkred to-marvel-black relative">
      <div className="absolute inset-0 opacity-10 tech-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative">
        <Transition animation="fade-in-up">
          <h2 className="section-heading text-marvel-gold">What is HACKरण?</h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading text-marvel-white/80">
            HACKरण is a 30-hour coding marathon where creativity meets technology.
            Organized by GEEK ROOM at JIMS Engineering Management Technical Campus,
            this event encourages innovation, problem-solving, and collaboration by addressing 
            real-world challenges in an interactive and competitive environment.
          </p>
        </Transition>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          <Transition animation="fade-in-up" delay={300} className="col-span-full">
            <h3 className="text-2xl font-semibold mb-6 text-marvel-gold text-center font-orbitron">Hackathon Themes</h3>
          </Transition>
          
          {features.map((feature, index) => (
            <Transition 
              key={index} 
              animation="fade-in-up" 
              delay={400 + index * 100}
            >
              <div className="bg-black/40 backdrop-blur-sm p-8 rounded-xl border border-marvel-red/20 hover:border-marvel-gold/50 transition-all duration-300 shadow-glow h-full">
                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-marvel-red/10 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-marvel-gold font-orbitron">{feature.title}</h3>
                <p className="text-marvel-white/70">{feature.description}</p>
              </div>
            </Transition>
          ))}
        </div>
        
        <Transition animation="fade-in-up" delay={1000} className="mt-16">
          <div className="bg-gradient-to-r from-charcoal to-charcoal-light p-8 md:p-12 rounded-2xl smooth-shadow border border-orange/10">
            <h3 className="text-2xl font-semibold mb-6 text-white">Event Structure</h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-xl font-semibold text-orange mb-2">Elimination Round</h4>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  <li>Teams will submit a project and presentation on the given problem statements.</li>
                  <li>A panel of experts will review the submissions and shortlist 10 teams for the final round.</li>
                  <li>No limit on the number of participating teams.</li>
                </ul>
              </div>
              <div>
                <h4 className="text-xl font-semibold text-orange mb-2">Final Round</h4>
                <ul className="list-disc pl-5 text-gray-300 space-y-2">
                  <li>Shortlisted teams will have to complete their projects with prototype and present them to the jury.</li>
                  <li>Up to 10 teams will participate in the final round.</li>
                </ul>
              </div>
            </div>
          </div>
        </Transition>
        
        <Transition animation="fade-in-up" delay={1200}>
          <div className="bg-gradient-to-r from-charcoal to-charcoal-light p-8 md:p-12 rounded-2xl smooth-shadow mt-8 border border-orange/10">
            <blockquote className="text-lg md:text-xl text-gray-300 italic text-center">
              "The goal of HACKरण 2025 is to establish JIMS Engineering Management Technical Campus as a leading institution fostering technical creativity and excellence."
            </blockquote>
            <div className="mt-6 text-center">
              <p className="font-semibold text-orange">GEEK ROOM</p>
              <p className="text-sm text-gray-400">Organizing Committee</p>
            </div>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default About;
