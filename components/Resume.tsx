import React from 'react';
import { PROFILE, EXPERIENCES, PROJECTS, SKILLS, EDUCATION, SOCIAL_LINKS } from '../constants';
export default function Resume() {
  return <main id="main" className="resume-page">
    <nav aria-label="CV navigation" className="resume-nav"><a href="/">← Back to portfolio</a><a href={`mailto:${PROFILE.email}`}>Contact Elie</a></nav>
    <header className="resume-header"><p className="eyebrow">Curriculum vitae</p><h1>{PROFILE.name}</h1><p className="text-xl font-semibold">{PROFILE.role} / {PROFILE.location}</p><p className="mt-4"><a href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></p><div className="flex flex-wrap gap-5 mt-3"><a href={SOCIAL_LINKS.github}>GitHub</a><a href={SOCIAL_LINKS.linkedin}>LinkedIn</a><a href="https://eliebrosset.com/">eliebrosset.com</a></div></header>
    <p className="resume-intro">{PROFILE.summary}</p>
    <p className="print-hint">A readable portfolio export. <a href={SOCIAL_LINKS.resume}>View the current CV and download its PDF on Reactive Resume</a>. You can also print this page.</p>
    <section><h2>Experience</h2>{EXPERIENCES.map(exp => <article key={exp.company + exp.role}><h3>{exp.company} | {exp.role}</h3><p className="resume-meta">Paris, France | {exp.period}</p><ul>{exp.bullets.map(b => <li key={b}>{b}</li>)}</ul></article>)}</section>
    <section><h2>Selected products</h2>{PROJECTS.map(project => <article key={project.id}><h3>{project.title}{project.title === 'Kynto' ? ' | Lead Developer (unpaid, part-time)' : ''}</h3><p>{project.description}</p><p className="resume-meta">{project.tags.join(', ')}</p><div className="flex flex-wrap gap-5">{project.demoUrl && <a href={project.demoUrl}>{project.demoUrl.replace('https://', '')}</a>}{project.githubUrl && <a href={project.githubUrl}>Source code</a>}{project.appStoreUrl && <a href={project.appStoreUrl}>App Store</a>}</div></article>)}</section>
    <section><h2>Skills</h2>{Object.entries(SKILLS).map(([label, values]) => <p key={label}><strong>{label}:</strong> {values.join(', ')}</p>)}</section>
    <section><h2>Education</h2>{EDUCATION.map(item => <p key={item}>{item}</p>)}</section>
    <footer className="resume-nav"><a href="/">Back to portfolio</a><a href={`mailto:${PROFILE.email}`}>Contact Elie</a></footer>
  </main>;
}
