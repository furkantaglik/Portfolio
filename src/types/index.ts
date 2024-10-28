export type Project = {
  id: number;
  title: string;
  description: string;
  techs: string[];
  images: string[];
  sourceCodeUrl?: string;
  demoUrl?: string;
};

export type Education = {
  id: number;
  school: string;
  section: string;
  imageUrl: string;
  year: string;
};

export type Certificate = {
  id: number;
  title: string;
  company: string;
  date: string;
  imageUrl: string;
  source: string;
};

export type Experience = {
  id: number;
  company: string;
  imageUrl: string;
  date: string;
  role: string;
};
