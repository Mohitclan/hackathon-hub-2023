
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Shield } from 'lucide-react';
import Transition from './Transition';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer id="contact" className="bg-marvel-navy text-white pt-20 pb-10 relative overflow-hidden">
      {/* Tech pattern background */}
      <div className="absolute inset-0 tech-pattern opacity-10 pointer-events-none"></div>
      
      {/* Glowing orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-marvel-blue/10 rounded-full filter blur-[80px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-marvel-red/5 rounded-full filter blur-[80px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <Transition animation="fade-in-up" delay={100} className="md:col-span-2">
            <div>
              <h2 className="flex items-center text-2xl font-bold mb-6 gradient-text font-orbitron">
                <Shield className="h-6 w-6 mr-2 text-marvel-red" />
                HACKरण
              </h2>
              <p className="text-gray-400 mb-8 max-w-md">
                Join us for an unforgettable 30-hour coding experience where innovation meets collaboration. 
                Build, learn, and compete for amazing prizes.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-marvel-grey/20 flex items-center justify-center hover:bg-marvel-blue/20 hover:text-marvel-cyan transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-marvel-grey/20 flex items-center justify-center hover:bg-marvel-blue/20 hover:text-marvel-cyan transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-marvel-grey/20 flex items-center justify-center hover:bg-marvel-blue/20 hover:text-marvel-cyan transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 rounded-full bg-marvel-grey/20 flex items-center justify-center hover:bg-marvel-blue/20 hover:text-marvel-cyan transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </Transition>
          
          <Transition animation="fade-in-up" delay={200}>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-marvel-cyan">Quick Links</h3>
              <ul className="space-y-4">
                {['About', 'Sponsors', 'Prizes', 'Mentors', 'Schedule', 'FAQ', 'Register'].map((item) => (
                  <li key={item}>
                    <a 
                      href={`#${item.toLowerCase()}`} 
                      className="text-gray-400 hover:text-marvel-cyan transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Transition>
          
          <Transition animation="fade-in-up" delay={300}>
            <div>
              <h3 className="text-lg font-semibold mb-6 text-marvel-cyan">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <Mail className="w-5 h-5 text-marvel-cyan mr-3 mt-0.5" />
                  <span className="text-gray-400">info@hackathonhub.com</span>
                </li>
                <li className="flex items-start">
                  <Phone className="w-5 h-5 text-marvel-cyan mr-3 mt-0.5" />
                  <span className="text-gray-400">+1 (123) 456-7890</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-marvel-cyan mr-3 mt-0.5" />
                  <span className="text-gray-400">
                    JIMSEMTC Campus<br />
                    Greater Noida<br />
                    Uttar Pradesh, India
                  </span>
                </li>
              </ul>
            </div>
          </Transition>
        </div>
        
        <Transition animation="fade-in-up" delay={400}>
          <div className="border-t border-marvel-grey/30 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              &copy; {currentYear} HACKरण. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-marvel-cyan text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-marvel-cyan text-sm">Terms of Service</a>
              <a href="#" className="text-gray-500 hover:text-marvel-cyan text-sm">Code of Conduct</a>
            </div>
          </div>
        </Transition>
      </div>
    </footer>
  );
};

export default Footer;
