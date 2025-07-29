import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Impact from './components/Impact';
import Technology from './components/Technology';
import Pricing from './components/Pricing';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Impact />
      <Technology />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
