
import { Project, Experience } from './types';

export const RESUME_PATH = '/resume.html';

export const SOCIAL_LINKS = {
  github: 'https://github.com/youplala',
  linkedin: 'https://linkedin.com/in/eliebrosset',
  x: 'https://x.com/eliebrosset',
  resume: 'https://rxresu.me/eliebrosset/ai-product-engineer-portfolio'
};

export const PROJECTS: Project[] = [
  {
    id: '01',
    why: 'To make clothes easier to organise and work with.',
    title: 'Dripin',
    cardDescription: 'An iOS wardrobe app with outfit recommendations and AI styling. Finally, another place to organise the clothes on your chair.',
    description: 'A solo-built iOS wardrobe app on the App Store. Built with TypeScript, React Native, Go, PostgreSQL and Gemini, with memory, tool use and analytics. Runs on self-hosted infrastructure with MinIO.',
    tags: ['TypeScript', 'React Native', 'Go', 'PostgreSQL', 'Gemini'],
    imageUrl: '/dripin_screenshot.png',
    year: '2025 - Present',
    demoUrl: 'https://dripin.app',
    appStoreUrl: 'https://apps.apple.com/fr/app/dripin-dressing-styliste-ia/id6788119955'
  },
  {
    id: '02',
    why: 'To put a changing Paris side by side with its past.',
    title: 'Paris GO',
    cardDescription: 'An open-source iOS app to revisit Paris photographs from 1970, recreate the views and compare then with now.',
    description: 'An open-source iOS app for finding viewpoints photographed across Paris in 1970, recreating them today and comparing the city across time.',
    tags: ['React Native', 'Expo', 'TypeScript', 'Maps', 'Open Data'],
    imageUrl: '/paris-go_screenshot.png',
    year: '2026',
    githubUrl: 'https://github.com/Youplala/reprise'
  },
  {
    id: '03',
    why: 'To preview art on your wall before hanging it.',
    title: 'HomeARt',
    cardDescription: 'Preview art at true scale on your walls, try different frames and arrange a gallery wall in augmented reality.',
    description: 'A native iOS app for previewing art at true scale on your own walls, customizing frames and composing gallery walls in augmented reality.',
    tags: ['SwiftUI', 'RealityKit', 'ARKit', 'LiDAR', 'iOS'],
    imageUrl: '/homeart_screenshot.png',
    year: '2026'
  },
  {
    id: '04',
    why: 'To connect candidate and job information inside recruitment workflows.',
    title: 'Kynto',
    cardDescription: 'An AI layer for recruitment workflows, built as Lead Developer in an unpaid, part-time venture from January to August 2026.',
    description: 'Lead Developer in an unpaid, part-time venture, January to August 2026. Built an AI layer with FastAPI, RAG, Vertex AI, LangChain, tool use, SSE, testing and observability.',
    tags: ['FastAPI', 'LangChain', 'Vertex AI', 'RAG', 'Cloud Run'],
    imageUrl: '/kynto_screenshot.png',
    year: '2026',
    demoUrl: 'https://kyntoai.com'
  },
  {
    id: '05',
    why: 'To turn a question about data into an interactive chart.',
    title: 'ChartGPT',
    cardDescription: 'Natural-language questions into interactive charts. Winner of Plotly\'s Dash-GPT Challenge, with 33.8k downloads.',
    description: '1st place in Plotly\'s Dash-GPT Challenge. Turns natural-language questions into interactive charts, with 33.8k downloads.',
    tags: ['Python', 'Dash', 'Plotly', 'LLMs', 'HuggingFace'],
    imageUrl: '/chartgpt_screenshot.png',
    year: '2023',
    githubUrl: 'https://github.com/Youplala/chartgpt',
    demoUrl: 'https://chartgpt.brosset.li/'
  }
];

export const PROFILE = {
  name: 'Elie Brosset',
  role: 'AI Product Engineer',
  location: 'Paris, France',
  email: 'jobs@eliebrosset.com',
  headline: 'AI Product Engineer · Paris',
  subtitle: 'I build apps, backend systems and applied AI products.',
  summary: 'AI Product Engineer with 4+ years of engineering experience. I build production systems and complete AI products with Python, TypeScript and Go, from backend services and ML pipelines to mobile applications.',
  about: 'My work moves between the interface and the systems behind it. At Advanced Schema, that includes transaction data, invoice processing and computer vision. In my own projects, it means taking care of the app, the backend and the AI together. The subject changes; the need to make the whole thing work stays.',
};

export const EXPERIENCES: Experience[] = [
  {
    company: 'Advanced Schema', role: 'Software Engineer', period: 'October 2023 to present',
    bullets: [
      "Scaled Louis Vuitton's Java, Kafka and PostgreSQL transaction repository from China to global operations, migrating 170M transactions and increasing ingestion volume 10x. Worked directly with the product manager.",
      'Developed NestJS services on Google Cloud Run processing thousands of invoice files per day for Auchan.',
      'Built a YOLO-based product recognition pipeline for Pierre Fabre, automating training workflows and deploying real-time segmentation models.',
      'Automated business workflows with Python and TypeScript, reducing processing time by 90% for systems serving 200k employees.'
    ]
  },
  {
    company: 'Humanitics.ai, acquired by YOOBIC', role: 'Machine Learning Engineer', period: 'September 2022 to September 2023',
    bullets: [
      "Built and deployed ChartGPT, an LLM-powered data visualization library with 33.8k downloads that won Plotly's Dash-GPT Challenge.",
      'Designed ML deployment workflows covering evaluation, versioning and production serving.'
    ]
  },
  {
    company: 'Humanitics.ai', role: 'Data Science Intern', period: 'February 2022 to July 2022',
    bullets: [
      'Built a time-series forecasting model for Lacoste retail traffic, improving prediction MAPE by 25% to support staffing decisions.',
      "Improved a Dash application's performance and deployed a shared JupyterLab research environment."
    ]
  },
  {
    company: 'Learning Planet Institute', role: 'Data Science Research Intern', period: 'April 2021 to July 2021',
    bullets: ['Built NLP pipelines for concept extraction and research-domain classification using SVM and deep learning.']
  }
];

export const SKILLS = {
  Languages: ['Python', 'TypeScript', 'Go', 'Java', 'SQL'],
  'AI and ML': ['LLM applications', 'Gemini', 'OpenAI', 'Claude', 'LangChain', 'RAG', 'YOLO', 'computer vision', 'NLP'],
  'Backend and platform': ['NestJS', 'FastAPI', 'PostgreSQL', 'Kafka', 'REST APIs', 'Docker', 'GCP', 'Cloud Run', 'GitHub Actions'],
  Product: ['React', 'React Native', 'Expo', 'self-hosted infrastructure']
};
export const EDUCATION = [
  'MSc Computer Science, Artificial Intelligence | CY Tech | 2022 to 2023',
  'BSc Data Science and Modeling | CY Cergy Paris University | 2018 to 2022'
];
export const INTERESTS = [
  { title: 'Clothes', text: 'Dripin brings a wardrobe into software: garments, outfits and recommendations.', project: '01' },
  { title: 'A changing Paris', text: 'Paris GO uses photographs from 1970 to compare the same city across time.', project: '02' },
  { title: 'Art on walls', text: 'HomeARt makes scale and placement something you can preview in your own room.', project: '03' }
];
export const FAQ_NOTE = 'Two fair questions.';
export const FAQ = [
  { question: 'Why is Elie the perfect hire?', answer: 'There is no universal perfect hire. I fit work that connects product, backend engineering and applied AI. The CV has the evidence; the adjective is negotiable.' },
  { question: 'Does a personal website need an FAQ?', answer: 'Probably not. Apparently every website has one now. This one stops at two questions.' }
];
