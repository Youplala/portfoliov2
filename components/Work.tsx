import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

export default function Work() {
  return <section id="work" className="personal-section" aria-labelledby="work-title">
    <h2 id="work-title">Selected projects</h2>
    <div className="project-grid">
      {PROJECTS.map((project, index) => <ProjectCard key={project.id} project={project} index={index} />)}
    </div>
  </section>;
}
