export interface ContactInfo {
  email: string;
  github: string;
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  tagline?: string;
  projects: WorkProject[];
}

export type WorkProject = {
  title: string;
  period: string;
  summary: string;
  skills?: string[];
  achievements?: string[];
  links?: { label: string; href: string }[];
};

export interface Project {
  name: string;
  period: string;
  githubLink: string;
  description: string;
  skills: string[];
  features: string[];
}

export interface Education {
  institution: string;
  period: string;
  decription?: string;
}

export interface PortfolioData {
  name: string;
  title: string;
  contact: ContactInfo;
  introduction: string;
  workExperiences: WorkExperience[];
  projects: Project[];
  education: Education[];
}
