
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  year: string;
  githubUrl?: string;
  demoUrl?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}
