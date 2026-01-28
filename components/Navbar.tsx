
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Account for fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navLinks = [
    { label: "Selected Projects", id: 'work' },
    { label: "About Me", id: 'about' },
    { label: "Connect", id: 'contact' },
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-6 md:px-12 pointer-events-none"
      >
        <div className="text-2xl font-bold tracking-tighter pointer-events-auto">
          <button
            onClick={() => scrollTo('hero')}
            className="hover:opacity-50 transition-all"
          >
            <span className="text-black">EB</span>
          </button>
        </div>
        
        <div className="hidden md:flex space-x-12 text-[10px] font-bold tracking-[0.2em] uppercase pointer-events-auto">
          {navLinks.map((link) => (
            <button 
              key={link.id}
              onClick={() => scrollTo(link.id)} 
              className="hover:opacity-40 transition-all relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-black transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        <div className="md:hidden pointer-events-auto">
           <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-[10px] font-bold tracking-widest uppercase bg-black text-white px-5 py-2.5 rounded-full shadow-lg"
           >
            {isOpen ? 'Close' : 'Menu'}
           </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md flex flex-col justify-center items-center p-6 md:hidden"
          >
            <div className="flex flex-col space-y-10 text-center">
              {navLinks.map((link) => (
                <button 
                  key={link.id}
                  onClick={() => scrollTo(link.id)} 
                  className="text-4xl font-bold tracking-tighter"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
