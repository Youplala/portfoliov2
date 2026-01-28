
import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 md:px-12 bg-neutral-50/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-12">MY STORY</h2>
          <div className="space-y-12">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="border-t border-black/5 pt-8 group">
                <div className="flex justify-between items-baseline mb-4">
                  <div>
                    <h4 className="text-xl font-bold">{exp.role}</h4>
                    <span className="text-sm text-gray-400 font-medium uppercase tracking-widest">{exp.company}</span>
                  </div>
                  <span className="text-xs font-bold opacity-30">{exp.period}</span>
                </div>
                <p className="text-gray-500 leading-relaxed max-w-lg">{exp.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
          className="relative flex flex-col justify-center"
        >
          <div className="bg-[#1a1a1a] p-12 text-white rounded-3xl shadow-2xl shadow-black/10">
            <h3 className="text-3xl font-serif italic mb-8">My take on things</h3>
            <p className="text-xl leading-relaxed text-gray-400 mb-12">
              I build tools that help humans make sense of messy data—whether it's compliance-friendly pipelines for luxury fashion or interactive charts that write themselves. I keep a relentless bias toward shipping fast.
            </p>
            <div className="flex gap-12">
               <div>
                 <div className="text-3xl font-bold mb-1">05+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Years experience</div>
               </div>
               <div>
                 <div className="text-3xl font-bold mb-1">20+</div>
                 <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">Projects shipped</div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
