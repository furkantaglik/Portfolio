// types/index.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  techs: string[];
  image1?: Buffer;
  image2?: Buffer;
  image3?: Buffer;
  source_code_url?: string;
  demo_url?: string;
}
