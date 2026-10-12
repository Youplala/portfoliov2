import React from 'react';
import { FAQ, FAQ_NOTE } from '../constants';
export default function FrequentlyAsked() {
  return <section id="faq" className="px-6 md:px-12 py-24 bg-white"><div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_2fr] gap-12">
    <div><h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6">Fair questions.</h2><p className="text-neutral-600 leading-relaxed">{FAQ_NOTE}</p></div>
    <div>{FAQ.map(item => <details key={item.question} className="faq-item border-t border-neutral-300 py-6"><summary className="text-xl font-semibold cursor-pointer">{item.question}</summary><p className="text-neutral-600 leading-relaxed mt-5">{item.answer}{item.link && <> <a className="text-link" href={item.link.href}>{item.link.label} ↗</a></>}</p></details>)}</div>
  </div></section>;
}
