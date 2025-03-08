
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import Transition from './Transition';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Do I need coding experience to participate?",
      answer: "While some coding experience is helpful, we welcome participants of all skill levels. If you're new to coding, consider joining a team with more experienced members. We also offer beginner-friendly workshops throughout the event."
    },
    {
      question: "Can I participate as an individual, or do I need a team?",
      answer: "You can participate either way! If you don't have a team, we'll host a team formation session at the beginning of the event where you can meet other participants and form teams. Teams are typically 2-4 people."
    },
    {
      question: "What should I bring to the hackathon?",
      answer: "You should bring your laptop, charger, any hardware you plan to use for your project, and personal items like toiletries if you're staying overnight. We'll provide food, drinks, and a comfortable workspace."
    },
    {
      question: "Is there a cost to participate?",
      answer: "No, participation is completely free thanks to our generous sponsors. We provide meals, snacks, and beverages throughout the event, as well as a workspace and Wi-Fi."
    },
    {
      question: "What kind of projects can I build?",
      answer: "You can build any type of software or hardware project that aligns with the hackathon theme, which will be announced at the opening ceremony. We encourage innovative solutions that address real-world problems."
    },
    {
      question: "Will there be prizes for the winners?",
      answer: "Yes! We have exciting prizes for the top projects, including cash prizes, tech gadgets, and potential internship opportunities with our sponsors. Check out the Prizes section for more details."
    },
    {
      question: "Is the venue accessible?",
      answer: "Yes, our venue is fully accessible. If you have specific accessibility needs, please let us know in advance and we'll make arrangements to accommodate you."
    },
    {
      question: "Can I start working on my project before the hackathon?",
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
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container mx-auto px-6">
        <Transition animation="fade-in-up">
          <h2 className="section-heading">Frequently Asked Questions</h2>
        </Transition>
        
        <Transition animation="fade-in-up" delay={200}>
          <p className="section-subheading">
            Got questions about our hackathon? Find answers to the most common questions below.
            If you don't see your question, feel free to contact us.
          </p>
        </Transition>
        
        <div className="max-w-3xl mx-auto mt-16 space-y-4">
          {faqItems.map((item, index) => (
            <Transition 
              key={index} 
              animation="fade-in-up" 
              delay={300 + index * 100}
            >
              <div className="bg-white rounded-xl border border-gray-100 smooth-shadow overflow-hidden">
                <button
                  className="w-full p-6 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeIndex === index}
                >
                  <h3 className="text-lg font-medium">{item.question}</h3>
                  <span className="ml-6 flex-shrink-0">
                    {activeIndex === index ? (
                      <ChevronUp className="w-5 h-5 text-primary" />
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
                  <div className="p-6 pt-0 text-gray-600">
                    {item.answer}
                  </div>
                </div>
              </div>
            </Transition>
          ))}
        </div>
        
        <Transition animation="fade-in-up" delay={900} className="mt-16">
          <div className="bg-white p-8 md:p-12 rounded-2xl border border-gray-100 smooth-shadow text-center max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-8">
              Can't find the answer you're looking for? Feel free to reach out to our team directly.
            </p>
            <a href="#contact" className="button-primary">
              Contact Us
            </a>
          </div>
        </Transition>
      </div>
    </section>
  );
};

export default FAQ;
