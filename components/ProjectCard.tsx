import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return <article id={`project-${project.id}`} className="project-card">
    <img src={project.imageUrl} alt={`${project.title} application screenshot`}
      className={project.title === 'ChartGPT' ? 'project-preview-contain' : undefined}
      loading={index === 0 ? 'eager' : 'lazy'} decoding="async" />
    <h3>{project.title}</h3>
    <p>{project.cardDescription}</p>
    {(project.appStoreUrl || project.demoUrl || project.githubUrl) && <div className="project-links">
      {project.appStoreUrl && <a href={project.appStoreUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on the App Store`}>App Store ↗</a>}
      {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} website`}>Website ↗</a>}
      {project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} on GitHub`}>GitHub ↗</a>}
    </div>}
  </article>;
};

export default ProjectCard;
