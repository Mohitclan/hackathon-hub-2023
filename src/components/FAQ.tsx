
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Transition from './Transition';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Do I need Stark-level tech skills to participate?",
      answer: "While some coding experience is helpful, we welcome participants of all skill levels. If you're new to coding, consider joining a team with more experienced members. We also offer beginner-friendly workshops throughout the event to help you level up your skills."
    },
    {
      question: "Can I form my own Avengers team, or will I be assigned one?",
      answer: "You can participate either way! If you don't have a team, we'll host a team formation session at the beginning of the event where you can meet other participants and form your own Avengers squad. Teams are typically 2-4 people."
    },
    {
      question: "What gear should I bring to the mission?",
      answer: "Bring your laptop, charger, any special hardware you plan to use for your project, and personal items if you're staying overnight. No need to bring your own Iron Man suit – we'll provide food, drinks, and a comfortable workspace for all participants."
    },
    {
      question: "Is there a recruitment fee to join this mission?",
      answer: "No, participation is completely free thanks to our S.H.I.E.L.D. supporters (sponsors). We provide meals, snacks, and beverages throughout the event, as well as a workspace and Wi-Fi."
    },
    {
      question: "What kind of tech can I develop for the multiverse?",
      answer: "You can build any type of software or hardware project that aligns with our Avengers-themed challenges. We encourage innovative solutions that address real-world problems with superhero-level creativity."
    },
    {
      question: "Will there be Infinity Stones for the winners?",
      answer: "Yes! We have exciting rewards for the top projects, including cash prizes, tech gadgets, and potential internship opportunities with our sponsors. Check out the Prizes section for details on our Infinity Rewards."
    },
    {
      question: "Is the S.H.I.E.L.D. base accessible?",
      answer: "Yes, our venue is fully accessible. If you have specific accessibility needs, please let us know in advance and we'll make arrangements to accommodate you faster than Dr. Strange can open a portal."
    },
    {
      question: "Can I start building my project before the event like Tony did with his suits?",
      answer: "No, all projects must be started and built during the hackathon. You can come with ideas, but the actual development must happen during the event to ensure fairness for all participants."
    }
  ];

  const toggleAccordion = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section id="faq" className="section-padding bg-charcoal relative">
      <div className="absolute inset-0 opacity-5 tech-pattern pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <Transition animation="fade-in-up">
          <h2 className="section-heading text-marvel-red">
            <span className="font-marvel">ASK J.A.R.V.I.S.</span>
          </h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            Just A Rather Very Intelligent System is here to answer your questions about our hackathon.
            If you don't see your question, feel free to contact us directly.
          </p>
        </Transition>
        
        <div className="max-w-3xl mx-auto mt-16 space-y-4">
          {faqItems.map((item, index) => (
            <Transition 
              key={index} 
              animation="fade-in-up" 
              delay={300 + index * 100}
            >
              <div className="bg-charcoal-light rounded-xl border border-marvel-red/20 hover:border-marvel-red/30 transition-all duration-300 overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  <h3 className="text-lg font-medium text-white">{item.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    {activeIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-marvel-red" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-400" />
                    )}
                  </span>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="p-6 pt-0 text-gray-300 border-t border-marvel-red/10">
                    {item.answer}
                  </div>
                </div>
              </div>
            </Transition>
          ))}
        </div>
        
        <Transition animation="fade-in-up" delay={900} className="mt-16">
          <div className="bg-charcoal-light p-8 md:p-12 rounded-2xl border border-marvel-red/20 smooth-shadow text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4 text-white font-marvel">NEED ADDITIONAL INTEL?</h3>
            <p className="text-gray-300 mb-8">
              J.A.R.V.I.S. couldn't find what you're looking for? Contact our human support team directly.
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

export default FAQ;
