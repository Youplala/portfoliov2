
export interface Project {
  id: string;
  title: string;
  description: string;
  cardDescription: string;
  tags: string[];
  why: string;
  imageUrl: string;
  year: string;
  githubUrl?: string;
  demoUrl?: string;
  appStoreUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}
