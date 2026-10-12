import React from 'react';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import FrequentlyAsked from './components/FAQ';

export default function App() {
  return <div className="personal-page">
    <a className="skip-link" href="#main">Skip to content</a>
    <main id="main">
      <Hero />
      <Work />
      <About />
      <FrequentlyAsked />
    </main>
    <Contact />
  </div>;
}
