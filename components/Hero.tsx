import React from 'react';
import { PROFILE, SOCIAL_LINKS } from '../constants';

export default function Hero() {
  return <section id="hero" className="min-h-screen flex flex-col justify-center px-6 md:px-12 pt-32 pb-20">
    <div className="max-w-7xl mx-auto w-full">
      <p className="eyebrow mb-10">Elie Brosset / A personal workshop</p>
      <h1 className="hero-title font-bold tracking-tighter mb-10">I'm Elie.{' '}<br />I build software{' '}<br />for things I <span className="font-serif italic font-normal">care about.</span></h1>
      <div className="flex flex-col md:flex-row justify-between items-start gap-8">
        <p className="max-w-xl text-lg md:text-xl text-neutral-600 leading-relaxed">{PROFILE.subtitle}</p>
        <div className="flex gap-6 text-sm font-semibold pt-2"><a className="text-link" href="#work">See what I build ↓</a><a className="text-link" href={SOCIAL_LINKS.resume}>Read my CV ↗</a></div>
      </div>
    </div>
  </section>;
}
