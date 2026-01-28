
import React, { Suspense, lazy } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Work from './components/Work';
import About from './components/About';
import Contact from './components/Contact';
import SocialDock from './components/SocialDock';

// Lazy load the heavy 3D background component
const InteractiveBackground = lazy(() => import('./components/InteractiveBackground'));

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative selection:bg-black selection:text-white">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[100] origin-left"
        style={{ scaleX }}
      />

      <Suspense fallback={null}>
        <InteractiveBackground />
      </Suspense>
      <Navbar />
      <SocialDock />

      <main className="relative z-10">
        <Hero />
        <Work />
        <About />
        <Contact />
      </main>
    </div>
  );
};

export default App;
