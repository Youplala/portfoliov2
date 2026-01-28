
import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group"
    >
      {/* Image Container - Removed Parallax absolute positioning and overflow logic */}
      <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 mb-8 rounded-2xl shadow-sm group-hover:shadow-xl transition-shadow duration-500">
        <img 
          src={project.imageUrl} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        
        {/* Hover Overlay - Show demo or GitHub links if available */}
        {(project.demoUrl || project.githubUrl) && (
          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-black text-[10px] font-bold tracking-widest uppercase rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-black hover:text-white"
              >
                View Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-black text-white text-[10px] font-bold tracking-widest uppercase rounded-full transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-black border border-white"
              >
                GitHub
              </a>
            )}
          </div>
        )}
      </div>
      
      {/* Project Details */}
      <div className="flex flex-col md:flex-row md:justify-between items-start gap-4">
        <div className="max-w-xl">
          <div className="flex items-center gap-4 mb-3">
            <span className="text-[10px] font-bold opacity-20">{project.id}</span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{project.title}</h3>
          </div>
          <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tags.map(tag => (
              <span key={tag} className="text-[9px] font-bold tracking-widest uppercase px-3 py-1.5 bg-neutral-100 border border-neutral-200 rounded-full text-neutral-400">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="text-[10px] font-bold opacity-10 hidden md:block">{project.year}</div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
