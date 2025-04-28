
import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Sponsors from '../components/Sponsors';
import Prizes from '../components/Prizes';
import Mentors from '../components/Mentors';
import Schedule from '../components/Schedule';
import FAQ from '../components/FAQ';
import Registration from '../components/Registration';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = 'HACKरण 2025 - Join the Ultimate Hackathon Challenge';
  }, []);

  return (
    <div className="overflow-x-hidden bg-gradient-to-b from-marvel-navy to-marvel-navy/90">
      <div className="tech-pattern fixed inset-0 z-0 pointer-events-none opacity-20"></div>
      <Navbar />
      <Hero />
      <About />
      <Sponsors />
      <Prizes />
      <Mentors />
      <Schedule />
      <FAQ />
      <Registration />
      <Footer />
    </div>
  );
};

export default Index;
