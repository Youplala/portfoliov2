
import React from 'react';
import { motion } from 'framer-motion';
import { SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.4em] uppercase text-gray-400 mb-8 block">
            Software Developer
          </span>
          <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-bold tracking-tighter leading-[0.85] mb-12">
            ELIE <br />
            <span className="font-serif italic font-light text-neutral-300">BROSSET</span>
          </h1>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-lg md:text-2xl text-gray-500 leading-relaxed mb-10"
            >
              Data engineer specializing in AI/ML applications. Building data pipelines for Louis Vuitton and developing dripin, an AI wardrobe organizer.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <div className="hidden md:block">
                {/* Visual anchor for the 3D background interaction */}
                <div className="w-1 h-1 bg-black rounded-full animate-ping mb-2" />
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="hidden lg:flex flex-col items-center gap-4 py-4"
          >
            <span className="text-[10px] font-bold tracking-widest uppercase opacity-20 rotate-90 origin-left translate-x-4">Scroll to Explore</span>
            <div className="w-px h-24 bg-black/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
