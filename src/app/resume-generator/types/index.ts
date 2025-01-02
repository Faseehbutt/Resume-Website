export interface BasicInfo {
  name: string;
  email: string;
  phone: string;
  objective: string;
  image?: string;
}
export interface Education {
  id: string;
  school: string;
  degree: string;
  year: string;
}
export interface Experience {
  id: string;
  company: string;
  position: string;
  duration: string;
  description: string;
}

export interface ResumeData {
  basic: {
    name: string;
    email: string;
    phone: string;
    objective: string;
    image?: string;
  };
  education: {
    id: string;
    school: string;
    degree: string;
    year: string;
  }[];
  skills: string[];
  experience: {
    id: string;
    company: string;
    position: string;
    duration: string;
    description: string;
  }[];
}
