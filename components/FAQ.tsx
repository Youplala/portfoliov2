import React from 'react';
import { FAQ } from '../constants';

export default function FrequentlyAsked() {
  return <section id="faq" className="personal-section" aria-labelledby="faq-title">
    <h2 id="faq-title">Two fair questions</h2>
    {FAQ.map(item => <details key={item.question} className="faq-item">
      <summary>{item.question}</summary><p>{item.answer}</p>
    </details>)}
  </section>;
}
