
import { Project, Experience } from './types';

export const SOCIAL_LINKS = {
  github: 'https://github.com/youplala',
  linkedin: 'https://linkedin.com/in/eliebrosset',
  x: 'https://x.com/eliebrosset',
  resume: '/ai-engineer.pdf'
};

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'dripin',
    description: 'AI wardrobe app — snap an outfit photo, AI extracts every item with descriptions and tags, then recommends daily outfits based on weather and wear history.',
    tags: ['Go', 'React Native', 'Gemini', 'PostgreSQL', 'MinIO'],
    imageUrl: '/dripin_screenshot.png',
    year: '2025',
    demoUrl: 'https://dripin.app'
  },
  {
    id: '02',
    title: 'CVPilot',
    description: 'Paste a job listing, get a tailored CV in seconds. 100% client-side — your data never leaves the browser. Multi-resume support with comparative scoring.',
    tags: ['React', 'TypeScript', 'Gemini API', 'pdf-lib'],
    imageUrl: '/cvpilot_screenshot.png',
    year: '2025',
    githubUrl: 'https://github.com/Youplala/cvpilot',
    demoUrl: 'https://youplala.github.io/cvpilot/'
  },
  {
    id: '03',
    title: 'ChartGPT',
    description: '🏆 1st place — Plotly Dash-GPT Challenge. Natural language to interactive charts, 25k+ downloads. Deployed on HuggingFace Spaces.',
    tags: ['Python', 'Dash', 'Plotly', 'LLMs', 'HuggingFace'],
    imageUrl: '/chartgpt_screenshot.png',
    year: '2023',
    githubUrl: 'https://github.com/Youplala/chartgpt',
    demoUrl: 'https://chartgpt.brosset.li/'
  },
  {
    id: '04',
    title: 'Kynto',
    description: 'AI recruitment assistant — automates job posting, candidate sourcing across 600M+ profiles, AI-powered screening, and interview scheduling.',
    tags: ['TypeScript', 'NestJS', 'LLMs', 'PostgreSQL'],
    imageUrl: '/kynto_screenshot.png',
    year: '2026',
    demoUrl: 'https://kyntoai.com'
  },
  {
    id: '05',
    title: 'On mange où ?',
    description: 'Real-time voting app to help teams decide where to eat. Swipe to vote, live leaderboard, integrated chat.',
    tags: ['Next.js', 'TypeScript', 'Socket.io', 'Tailwind'],
    imageUrl: '/onmangeou_screenshot.png',
    year: '2023',
    githubUrl: 'https://github.com/Youplala/onmangeou',
    demoUrl: 'https://onmangeou.brosset.li/'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Advanced Schema · LVMH',
    role: 'Software Engineer',
    period: '2023 — Present',
    description: 'Production ML pipeline (YOLO) for retail product recognition. NestJS microservices processing thousands of documents daily on GCP. Data pipelines handling 50k+ real-time transactions/day for Louis Vuitton.'
  },
  {
    company: 'Humanitics.ai',
    role: 'Machine Learning Engineer',
    period: '2022 — 2023',
    description: 'Built ChartGPT — an LLM-powered visualization library (25k+ downloads, 1st place Plotly Challenge). Designed end-to-end ML deployment workflows with +25% accuracy improvement.'
  },
  {
    company: 'Learning Planet Institute',
    role: 'Data Science Research Intern',
    period: '2021',
    description: 'NLP-based concept extraction from thesis abstracts. Domain classification using SVM and deep learning techniques.'
  }
];
