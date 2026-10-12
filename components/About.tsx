import React from 'react';
import { EXPERIENCES } from '../constants';

export default function About() {
  return <section id="about" className="personal-section experience" aria-labelledby="experience-title">
    <h2 id="experience-title">Experience</h2>
    <ul>{EXPERIENCES.slice(0, 2).map(exp => <li key={exp.company}>
      <div><h3>{exp.company}</h3><p>{exp.role}</p></div>
      <p className="experience-period">{exp.period}</p>
    </li>)}</ul>
  </section>;
}
