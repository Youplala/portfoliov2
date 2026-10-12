import React from 'react';
import { SOCIAL_LINKS, PROFILE } from '../constants';

export default function Contact() {
  return <footer id="contact" className="personal-footer">
    <a className="contact-email" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a>
    <nav aria-label="Contact and CV">
      <a href={SOCIAL_LINKS.github}>GitHub ↗</a>
      <a href={SOCIAL_LINKS.linkedin}>LinkedIn ↗</a>
      <a href={SOCIAL_LINKS.x}>X ↗</a>
      <a href={SOCIAL_LINKS.resume}>CV ↗</a>
    </nav>
  </footer>;
}
