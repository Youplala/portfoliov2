
import { Project, Experience } from './types';

export const SOCIAL_LINKS = {
  github: 'https://github.com/youplala',
  linkedin: 'https://linkedin.com/in/eliebrosset',
  x: 'https://x.com/eliebrosset',
  resume: 'https://storage.rxresu.me/clp9g022gck4a9hun5yo3nwor/resumes/ai-engineer.pdf'
};

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'dripin',
    description: 'I built an AI-powered wardrobe organizer with fashion recommendations and virtual try-on capabilities.',
    tags: ['Vite', 'TypeScript', 'Tailwind', 'HuggingFace', 'Gemini'],
    imageUrl: '/dripin_screenshot.png',
    year: '2024',
    demoUrl: 'https://dripin.app'
  },
  {
    id: '02',
    title: 'ChartGPT',
    description: 'I created this app that won the Dash-GPT Challenge by Plotly. It uses LLMs to generate interactive charts from natural language.',
    tags: ['Python', 'Dash', 'Plotly', 'LLMs', 'HuggingFace'],
    imageUrl: '/chartgpt_screenshot.png',
    year: '2024',
    githubUrl: 'https://github.com/Youplala/chartgpt',
    demoUrl: 'https://chartgpt.brosset.li/'
  },
  {
    id: '03',
    title: 'On mange où ?',
    description: 'I developed a real-time voting app to help friends decide where to eat together.',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Socket.io'],
    imageUrl: '/onmangeou_screenshot.png',
    year: '2023',
    githubUrl: 'https://github.com/Youplala/onmangeou',
    demoUrl: 'https://onmangeou.brosset.li/'
  },
  {
    id: '04',
    title: 'FishWatch',
    description: 'I built ML models to predict illegal fishing activities using publicly available data and classical algorithms.',
    tags: ['Python', 'Random Forest', 'KNN', 'Scikit-learn'],
    imageUrl: '/WorldMap.png',
    year: '2022',
    githubUrl: 'https://github.com/Youplala/FishWatch'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Advanced Schema',
    role: 'Data Engineer',
    period: '2023 — Present',
    description: 'I consult for Louis Vuitton, building high-performance data pipelines and real-time APIs for luxury retail operations.'
  },
  {
    company: 'Humanitics.ai',
    role: 'Machine Learning Engineer',
    period: '2022 — 2023',
    description: 'I built interactive dashboards and a recommendation engine for retail store managers across France.'
  },
  {
    company: 'Humanitics.ai',
    role: 'Data Science Intern',
    period: '2021',
    description: 'I developed ML models for predictive analysis and clustering on retail sales data for boutiques nationwide.'
  }
];
