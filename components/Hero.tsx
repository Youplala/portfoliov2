import React from 'react';
import { PROFILE } from '../constants';

export default function Hero() {
  return <header id="hero" className="personal-intro">
    <img className="github-avatar" src="/avatar-github.png" alt="Elie Brosset GitHub avatar" width="56" height="56" decoding="async" />
    <div>
      <h1>{PROFILE.name}</h1>
      <p className="personal-role">{PROFILE.headline}</p>
      <p className="personal-summary">{PROFILE.subtitle}</p>
    </div>
  </header>;
}
