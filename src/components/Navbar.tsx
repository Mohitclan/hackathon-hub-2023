
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Home, Info, Shield, Medal, Users, Calendar, HelpCircle, FileText, ExternalLink } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  // External registration URL - You'll replace this with your Unstop registration link
  const registrationUrl = "https://unstop.com/your-hackathon-registration-link";
  
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      
      // Update active section based on scroll position - Fix TypeScript errors
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY - 100;
        const sectionHeight = section.getBoundingClientRect().height;
        const sectionId = section.getAttribute('id');
        
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId || 'home');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Navigation items with icons
  const navItems = [
    { name: 'Home', icon: <Home className="w-5 h-5" />, href: '#home' },
    { name: 'About', icon: <Info className="w-5 h-5" />, href: '#about' },
    { name: 'Sponsors', icon: <Shield className="w-5 h-5" />, href: '#sponsors' },
    { name: 'Prizes', icon: <Medal className="w-5 h-5" />, href: '#prizes' },
    { name: 'Mentors', icon: <Users className="w-5 h-5" />, href: '#mentors' },
    { name: 'Schedule', icon: <Calendar className="w-5 h-5" />, href: '#schedule' },
    { name: 'FAQ', icon: <HelpCircle className="w-5 h-5" />, href: '#faq' },
  ];

  return (
    <>
      {/* Main Navigation - Desktop */}
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500',
          isScrolled
            ? 'py-2 bg-black/80 backdrop-blur-md border-b border-marvel-blue/20 shadow-lg'
            : 'py-4 bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="text-xl font-bold flex items-center gap-2">
            <Shield className="w-6 h-6 text-marvel-blue animate-pulse-slow" />
            <span className="font-marvel gradient-text">HackQuanta</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.name}>
                    <a 
                      href={item.href} 
                      className={cn(
                        "group flex items-center px-3 py-2 text-sm font-medium rounded-md transition-all duration-300",
                        activeSection === item.href.replace('#', '') 
                          ? "bg-marvel-blue/10 text-marvel-blue" 
                          : "text-white hover:text-marvel-blue hover:bg-marvel-blue/5"
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {item.icon}
                        {item.name}
                      </span>
                      <span 
                        className={cn(
                          "block h-0.5 bg-marvel-blue mt-0.5 transition-all duration-300",
                          activeSection === item.href.replace('#', '')
                            ? "w-full" 
                            : "w-0 group-hover:w-full"
                        )}
                      ></span>
                    </a>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Register Button - Desktop - Updated to use external URL */}
          <div className="hidden md:block">
            <a
              href={registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-6 py-2 overflow-hidden font-medium text-white transition-all duration-300 ease-out bg-marvel-red rounded-md group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-marvel-red group-hover:translate-x-0 ease">
                <ExternalLink className="w-5 h-5" />
              </span>
              <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Register Now</span>
              <span className="relative invisible">Register Now</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none relative w-10 h-10"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <div className={cn(
              "absolute w-6 h-0.5 bg-white transition-all duration-300 transform",
              isMobileMenuOpen ? "top-5 rotate-45" : "top-4"
            )}></div>
            <div className={cn(
              "absolute w-6 h-0.5 bg-white transition-all duration-300",
              isMobileMenuOpen ? "opacity-0" : "top-5"
            )}></div>
            <div className={cn(
              "absolute w-6 h-0.5 bg-white transition-all duration-300 transform",
              isMobileMenuOpen ? "top-5 -rotate-45" : "top-6"
            )}></div>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/95 backdrop-blur-xl z-40 transition-transform duration-500 ease-in-out transform md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6 space-y-4">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="flex items-center gap-3 py-3 text-lg font-medium text-white hover:text-marvel-blue transition-colors duration-200 border-b border-marvel-blue/20"
              onClick={closeMobileMenu}
            >
              <div className="bg-marvel-blue/10 p-2 rounded-full">
                {item.icon}
              </div>
              {item.name}
            </a>
          ))}
          {/* Mobile Register button - Updated to use external URL */}
          <a
            href={registrationUrl}
            target="_blank"
            rel="noopener noreferrer" 
            className="mt-6 bg-marvel-red hover:bg-marvel-red/90 text-white font-medium py-4 rounded-md flex items-center justify-center gap-2 transition-colors"
            onClick={closeMobileMenu}
          >
            <ExternalLink className="w-5 h-5" />
            Register Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
