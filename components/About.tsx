import React from 'react';
import { EXPERIENCES, INTERESTS, PROFILE, SOCIAL_LINKS } from '../constants';

export default function About() {
  return <section id="about" className="py-24 px-6 md:px-12 bg-neutral-50/90">
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 mb-20">
        <div><p className="eyebrow mb-6">About / The person behind the tabs</p><h2 className="text-4xl md:text-6xl font-bold tracking-tighter">Different subjects.<br /><span className="font-serif italic font-normal">Same pair of hands.</span></h2></div>
        <div className="text-lg text-neutral-600 leading-relaxed space-y-6"><p>{PROFILE.summary}</p><p>{PROFILE.about}</p><a href={SOCIAL_LINKS.resume} className="text-link inline-block">The full CV ↗</a></div>
      </div>
      <div className="border-t border-neutral-300 pt-10 mb-24">
        <h3 className="text-2xl font-semibold mb-8">A few things I keep coming back to</h3>
        <div className="grid md:grid-cols-3 gap-10">{INTERESTS.map(item => <div key={item.title}><a href={`#project-${item.project}`} className="font-serif italic text-3xl text-link">{item.title}</a><p className="mt-4 text-neutral-600 leading-relaxed">{item.text}</p></div>)}</div>
      </div>
      <h3 className="text-3xl font-bold tracking-tight mb-10">On the job description</h3>
      <div className="space-y-10">{EXPERIENCES.map(exp => <article key={exp.company + exp.role} className="grid md:grid-cols-[1fr_2fr] gap-5 border-t border-neutral-200 pt-8">
        <div><h4 className="text-lg font-semibold">{exp.role}</h4><p>{exp.company}</p><p className="text-sm text-neutral-600 mt-2">{exp.period}</p></div>
        <ul className="space-y-3 text-neutral-600 leading-relaxed">{exp.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>
      </article>)}</div>
    </div>
  </section>;
}
