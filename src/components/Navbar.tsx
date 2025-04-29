
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Shield, Home, Medal, Users, Calendar, HelpCircle, FileText } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
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
    { name: 'About', icon: <Home className="w-5 h-5" />, href: '#about' },
    { name: 'Sponsors', icon: <Shield className="w-5 h-5" />, href: '#sponsors' },
    { name: 'Prizes', icon: <Medal className="w-5 h-5" />, href: '#prizes' },
    { name: 'Mentors', icon: <Users className="w-5 h-5" />, href: '#mentors' },
    { name: 'Schedule', icon: <Calendar className="w-5 h-5" />, href: '#schedule' },
    { name: 'FAQ', icon: <HelpCircle className="w-5 h-5" />, href: '#faq' },
  ];

  return (
    <>
      {/* Vertical side navigation bar - desktop only */}
      <div className="fixed left-0 top-0 h-full z-50 hidden md:block">
        <div className={cn(
          "h-full w-16 bg-black flex flex-col items-center py-12 transition-all duration-300",
          isScrolled ? "shadow-md" : ""
        )}>
          {/* Logo */}
          <a href="#" className="mb-12">
            <Shield className="w-8 h-8 text-marvel-blue" />
          </a>
          
          {/* Nav items */}
          <div className="flex flex-col items-center space-y-8">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.href}
                className="text-white/70 hover:text-marvel-blue transition-colors duration-300 group relative"
                title={item.name}
              >
                {/* Icon */}
                <div className="w-10 h-10 flex items-center justify-center">
                  {item.icon}
                </div>
                
                {/* Tooltip */}
                <span className="absolute left-16 bg-black text-white px-2 py-1 rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {item.name}
                </span>
              </a>
            ))}
          </div>
          
          {/* Register button at bottom */}
          <a 
            href="#register" 
            className="mt-auto bg-marvel-blue hover:bg-marvel-blue/90 text-white p-2 rounded-full transition-transform hover:scale-110"
            title="Register Now"
          >
            <FileText className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Mobile header */}
      <header
        className={cn(
          'fixed top-0 left-0 w-full z-50 transition-all duration-500 md:hidden',
          isScrolled
            ? 'py-3 bg-black shadow-md'
            : 'py-5 bg-transparent'
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="#" className="text-2xl font-bold flex items-center space-x-2">
            <Shield className="w-6 h-6 text-marvel-blue animate-pulse-slow" />
            <span className="font-orbitron gradient-text">HackQuanta</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            className="text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-marvel-cyan" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-black/95 backdrop-blur-lg z-40 transition-transform duration-500 ease-in-out transform md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6 space-y-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-xl text-white hover:text-marvel-cyan py-2 border-b border-marvel-grey/30 flex items-center gap-3"
              onClick={closeMobileMenu}
            >
              {item.icon}
              {item.name}
            </a>
          ))}
          <a
            href="#register"
            className="button-danger text-center mt-8 flex items-center justify-center gap-2"
            onClick={closeMobileMenu}
          >
            <FileText className="w-5 h-5" />
            Register Now
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
