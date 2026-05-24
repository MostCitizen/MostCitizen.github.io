export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "DevOps" | "Others";
  level: number; // 1-5
}

export interface Project {
  title: string;
  description: string;
  thumbnail?: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  period: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const portfolioData = {
  name: "MostCitizen",
  title: "Software Engineer",
  email: "mostcitizen@example.com", // Replace with actual email
  github: "https://github.com/MostCitizen",
  linkedin: "https://linkedin.com/in/mostcitizen", // Replace with actual LinkedIn
  about: "안녕하세요! 끊임없이 학습하고 성장하는 소프트웨어 엔지니어 MostCitizen입니다.",
  skills: [
    { name: "React", category: "Frontend", level: 5 },
    { name: "Next.js", category: "Frontend", level: 5 },
    { name: "TypeScript", category: "Frontend", level: 4 },
    { name: "Tailwind CSS", category: "Frontend", level: 5 },
    { name: "Flutter", category: "Mobile", level: 4 },
    { name: "Node.js", category: "Backend", level: 3 },
  ] as Skill[],
  experiences: [
    {
      company: "자유 프로젝트 (Personal Projects)",
      role: "Lead Developer",
      period: "2023.01 - Present",
      description: [
        "React와 Next.js를 활용한 웹 서비스 개발",
        "Flutter를 이용한 크로스 플랫폼 모바일 앱 출시",
      ],
    },
  ] as Experience[],
  projects: [
    {
      title: "Personal Portfolio",
      description: "Next.js와 Tailwind CSS를 활용한 개인 포트폴리오 사이트",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      githubUrl: "https://github.com/MostCitizen/MostCitizen.github.io",
      period: "2024.05 - 2024.05",
    },
  ] as Project[],
};
