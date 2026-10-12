
import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

const Work: React.FC = () => {
  return (
    <section id="work" className="py-24 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={false}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">ON MY <br />WORKBENCH</h2>
          <div className="text-xs font-bold tracking-widest uppercase opacity-40 mb-2">Personal projects + work</div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 md:gap-y-24">
          {PROJECTS.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Work;
