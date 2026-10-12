import React from 'react';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';
import App from '../App';
import Resume from '../components/Resume';
import { PROFILE, PROJECTS, EXPERIENCES, SKILLS, EDUCATION, SOCIAL_LINKS, RESUME_PATH, FAQ, FAQ_NOTE } from '../constants';

export const ORIGIN = 'https://eliebrosset.com';
const absolute = (path: string) => new URL(path, ORIGIN).href;
export function renderPage(cv = false) {
  const url = absolute(cv ? RESUME_PATH : '/');
  const title = cv ? 'Elie Brosset | CV | AI Product Engineer' : 'Elie Brosset | AI Product Engineer in Paris';
  const description = cv ? 'Read the CV of Elie Brosset, Paris-based AI Product Engineer: 4+ years of engineering, production systems, ML pipelines and personal products.' : "I'm Elie, an AI Product Engineer in Paris. I build software for things I care about: clothes, a changing city, art on walls, and useful tools and systems.";
  const image = absolute('/og-personal-v1.png');
  const imageAlt = "Elie Brosset, AI Product Engineer in Paris. I build software for things I care about.";
  const personId = absolute('/#person');
  const graph = { '@context': 'https://schema.org', '@graph': [
    { '@type': 'Person', '@id': personId, name: PROFILE.name, jobTitle: PROFILE.role, url: absolute('/'), sameAs: [SOCIAL_LINKS.github, SOCIAL_LINKS.linkedin, SOCIAL_LINKS.x], homeLocation: { '@type': 'Place', name: PROFILE.location }, subjectOf: { '@id': absolute(RESUME_PATH) + '#profile' } },
    { '@type': 'WebSite', '@id': absolute('/#website'), url: absolute('/'), name: 'Elie Brosset', inLanguage: 'en', publisher: { '@id': personId } },
    { '@type': 'ProfilePage', '@id': url + '#profile', url, name: title, description, inLanguage: 'en', mainEntity: { '@id': personId }, isPartOf: { '@id': absolute('/#website') } }
  ] };
  const head = renderToStaticMarkup(<>
    <title>{title}</title><meta name="description" content={description} /><meta name="author" content={PROFILE.name} />
    <link rel="canonical" href={url} />
    <link rel="alternate" type="text/markdown" href={absolute('/resume.md')} title="CV in Markdown" />
    <meta property="og:type" content="website" /><meta property="og:url" content={url} /><meta property="og:title" content={title} /><meta property="og:description" content={description} /><meta property="og:image" content={image} /><meta property="og:image:alt" content={imageAlt} /><meta property="og:image:width" content="1200" /><meta property="og:image:height" content="630" />
    <meta name="twitter:card" content="summary_large_image" /><meta name="twitter:url" content={url} /><meta name="twitter:title" content={title} /><meta name="twitter:description" content={description} /><meta name="twitter:image" content={image} /><meta name="twitter:image:alt" content={imageAlt} /><meta name="twitter:creator" content="@eliebrosset" />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(graph).replace(/</g, '\\u003c') }} />
  </>);
  return { head, body: renderToString(cv ? <Resume /> : <App />) };
}
export function textExports() {
  const experience = EXPERIENCES.map(e => `### ${e.company} | ${e.role}\n\n**Paris, France | ${e.period}**\n\n${e.bullets.map(b => `- ${b}`).join('\n')}`).join('\n\n');
  const projects = PROJECTS.map(p => `### ${p.title}\n\n${p.description}\n\n${p.why}\n\nStack: ${p.tags.join(', ')}\n\n${[['Website', p.demoUrl], ['Source code', p.githubUrl], ['App Store', p.appStoreUrl]].filter(([,url]) => url).map(([name,url]) => `- [${name}](${url})`).join('\n')}`).join('\n\n');
  const resume = `# ${PROFILE.name}\n\n**${PROFILE.role}**\n${PROFILE.location}\n\nEmail: [${PROFILE.email}](mailto:${PROFILE.email})\nPortfolio: [eliebrosset.com](${absolute('/')})\nCV: [Current CV and PDF](${SOCIAL_LINKS.resume})\nReadable portfolio CV: [HTML version](${absolute(RESUME_PATH)})\nGitHub: [Youplala](${SOCIAL_LINKS.github})\nLinkedIn: [Elie Brosset](${SOCIAL_LINKS.linkedin})\n\n## Profile\n\n${PROFILE.summary}\n\n## Experience\n\n${experience}\n\n## Selected Products\n\n${projects}\n\n## Skills\n\n${Object.entries(SKILLS).map(([k,v]) => `- **${k}:** ${v.join(', ')}`).join('\n')}\n\n## Education\n\n${EDUCATION.map(e => `- ${e}`).join('\n')}\n`;
  const faq = `## Frequently asked questions\n\n${FAQ_NOTE}\n\n${FAQ.map(f => `### ${f.question}\n\n${f.answer}${f.link ? ` [${f.link.label}](${absolute(f.link.href)})` : ''}`).join('\n\n')}\n`;
  const links = `## Pages\n\n- [Portfolio](${absolute('/')}): Projects, experience and FAQ.\n- [Current CV and PDF](${SOCIAL_LINKS.resume}): Canonical CV on Reactive Resume.\n- [Readable portfolio CV](${absolute(RESUME_PATH)}): Print-friendly HTML export.\n- [CV in Markdown](${absolute('/resume.md')}): Text export of the same public facts.\n- [Full portfolio text](${absolute('/llms-full.txt')}): Experience, projects, skills, education and FAQ.\n`;
  return {
    'resume.md': resume,
    'llms.txt': `# ${PROFILE.name}\n\n> ${PROFILE.role} in ${PROFILE.location}. ${PROFILE.headline}\n\n${PROFILE.summary}\n\n${links}\n## Selected work\n\n${PROJECTS.map(p => `- ${p.title}: ${p.description}`).join('\n')}\n\n## Experience\n\n${experience}\n\n${faq}`,
    'llms-full.txt': `${resume}\n## About the portfolio\n\n${PROFILE.headline}\n\n${PROFILE.about}\n\n${faq}\n${links}`,
    'sitemap.xml': `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url><loc>${absolute('/')}</loc></url>\n  <url><loc>${absolute(RESUME_PATH)}</loc></url>\n</urlset>\n`,
    'robots.txt': `User-agent: *\nAllow: /\n\nSitemap: ${absolute('/sitemap.xml')}\n`
  };
}
