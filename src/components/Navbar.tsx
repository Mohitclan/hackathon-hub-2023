
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X, Shield } from 'lucide-react';

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

  return (
    <header
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500',
        isScrolled
          ? 'py-3 bg-marvel-navy shadow-glow'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-2xl font-bold flex items-center space-x-2">
          <Shield className="w-6 h-6 text-marvel-red animate-pulse-slow" />
          <span className="font-orbitron gradient-text">HACKरण</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {['About', 'Sponsors', 'Prizes', 'Mentors', 'Schedule', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium text-white hover:text-marvel-cyan transition-colors duration-300 marvel-highlight"
            >
              {item}
            </a>
          ))}
          <a
            href="#register"
            className="button-danger"
          >
            Register Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
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

      {/* Mobile Navigation */}
      <div
        className={cn(
          'fixed inset-0 bg-marvel-navy/95 backdrop-blur-lg z-40 transition-transform duration-500 ease-in-out transform md:hidden',
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col h-full pt-20 px-6 space-y-8">
          {['About', 'Sponsors', 'Prizes', 'Mentors', 'Schedule', 'FAQ'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-medium text-xl text-white hover:text-marvel-cyan py-2 border-b border-marvel-grey/30"
              onClick={closeMobileMenu}
            >
              {item}
            </a>
          ))}
          <a
            href="#register"
            className="button-danger text-center mt-8"
            onClick={closeMobileMenu}
          >
            Register Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
