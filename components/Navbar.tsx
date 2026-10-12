import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export default function Navbar() {
  return <nav aria-label="Main navigation" className="site-nav">
    <a href="#hero" aria-label="Elie Brosset, back to top" className="text-2xl font-bold tracking-tighter">EB</a>
    <div className="flex flex-wrap items-center justify-end gap-x-5 gap-y-2 text-xs font-semibold">
      <a href="#work">Work</a><a href="#about">About</a><a href="#faq">FAQ</a><a href="#contact">Contact</a><a href={SOCIAL_LINKS.resume}>CV ↗</a>
    </div>
  </nav>;
}
