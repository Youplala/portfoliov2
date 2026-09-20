
import { Project, Experience } from './types';

export const SOCIAL_LINKS = {
  github: 'https://github.com/youplala',
  linkedin: 'https://linkedin.com/in/eliebrosset',
  x: 'https://x.com/eliebrosset',
  resume: '/Elie_Brosset_AI_Product_Engineer.docx'
};

export const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Dripin',
    description: 'Turn one outfit photo into a structured digital wardrobe, then get recommendations based on weather, context and wear history.',
    tags: ['Go', 'React Native', 'Gemini', 'PostgreSQL', 'MinIO'],
    imageUrl: '/dripin_screenshot.png',
    year: '2025 - Present',
    demoUrl: 'https://dripin.app'
  },
  {
    id: '02',
    title: 'Kynto',
    description: 'Built the complete AI layer for a recruitment platform, including candidate matching, scoring, document retrieval and recruitment workflows.',
    tags: ['FastAPI', 'LangChain', 'Vertex AI', 'RAG', 'Cloud Run'],
    imageUrl: '/kynto_screenshot.png',
    year: '2026',
    demoUrl: 'https://kyntoai.com'
  },
  {
    id: '03',
    title: 'ChartGPT',
    description: '1st place in Plotly\'s Dash-GPT Challenge. Turns natural-language questions into interactive charts, with 25k+ downloads.',
    tags: ['Python', 'Dash', 'Plotly', 'LLMs', 'HuggingFace'],
    imageUrl: '/chartgpt_screenshot.png',
    year: '2023',
    githubUrl: 'https://github.com/Youplala/chartgpt',
    demoUrl: 'https://chartgpt.brosset.li/'
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: 'Advanced Schema',
    role: 'Software Engineer',
    period: '2023 - Present',
    description: 'Built a production YOLO pipeline, NestJS services processing thousands of files per day, and workflow automation for systems serving 200k employees. Scaled Louis Vuitton\'s Java, Kafka and PostgreSQL transaction repository globally, migrating 170M transactions.'
  },
  {
    company: 'Humanitics.ai',
    role: 'Machine Learning Engineer',
    period: '2022 - 2023',
    description: 'Built ChartGPT, an LLM-powered visualization library with 25k+ downloads and a first-place Plotly Challenge win. Reduced MAPE by 25% on a retail traffic forecasting model for Lacoste.'
  },
  {
    company: 'Learning Planet Institute',
    role: 'Data Science Research Intern',
    period: '2021',
    description: 'Analyzed 400k French PhD theses and built NLP pipelines for concept extraction and domain classification using SVM and deep learning.'
  }
];
