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
  name: "이호윤",
  title: "Software Engineer",
  email: "wjsghk1588@gmail.com",
  github: "https://github.com/MostCitizen",
  linkedin: "https://linkedin.com/in/mostcitizen",
  about: "효율적인 코드와 확장 가능한 시스템을 지향합니다. 2년 10개월간의 실무 경험을 통해 C#/.NET 기반의 대규모 시스템 고도화와 성능 최적화를 주도해 왔으며, 최근에는 Node.js와 Flutter를 활용한 모던 웹/앱 개발로 역량을 확장하고 있습니다.",
  skills: [
    { name: "C#", category: "Backend", level: 5 },
    { name: ".NET / .NET Core", category: "Backend", level: 5 },
    { name: "MSSQL", category: "Backend", level: 5 },
    { name: "Node.js (Express)", category: "Backend", level: 4 },
    { name: "Entity Framework", category: "Backend", level: 5 },
    { name: "MongoDB", category: "Backend", level: 3 },
    { name: "WPF / WinForm", category: "Frontend", level: 5 },
    { name: "DevExpress", category: "Frontend", level: 4 },
    { name: "TypeScript / JS", category: "Frontend", level: 4 },
    { name: "Tailwind CSS", category: "Frontend", level: 4 },
    { name: "Flutter", category: "Mobile", level: 4 },
    { name: "AWS S3", category: "DevOps", level: 3 },
    { name: "dottrace", category: "Others", level: 5 },
    { name: "Git", category: "Others", level: 4 },
    { name: "ORM Optimization", category: "Others", level: 5 },
  ] as Skill[],
  experiences: [
    {
      company: "전능아이티 (개발2팀)",
      role: "소프트웨어 개발자 (프리랜서)",
      period: "2024.12 - 2025.02",
      description: [
        "고객 관리 프로그램 예약 현황 등 각종 상황별 화면보기 기능 추가로 사용자 편의성 증대",
        "참조 구조가 복잡한 레거시 코드의 레이어 구조 개편을 통해 개발 생산성 및 유지보수성 향상",
        "신규 수납 통계 모듈 개발로 병원 경영 지표 데이터 시각화 구현",
        "인센티브 산정 및 휴진 관리 등 복잡한 비즈니스 로직 최적화"
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "소프트웨어 개발자 (프리랜서)",
      period: "2024.06 - 2024.08",
      description: [
        "메인 View를 WinForm에서 WPF로 마이그레이션하며 UI 디자인 및 응답 속도 대폭 개선",
        "데이터 페칭 로직 최적화 및 새로고침 프로세스 개선으로 화면 렌더링 지연 현상 해결",
        "MMF(Memory Mapped File)와 Shared Memory 기술을 적용하여 프로그램 초기 실행 속도 개선",
        "레거시 코드 리팩터링 및 최신 라이브러리 마이그레이션을 통한 기술 부채 해소"
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "소프트웨어 개발자 (프리랜서)",
      period: "2024.01 - 2024.02",
      description: [
        ".NET Framework 기반 레거시를 .NET 6로 성공적으로 업그레이드하여 실행 성능 및 보안성 강화",
        "업그레이드 이후 시스템 안정성 향상 및 최신 C# 언어 기능 활용으로 코드 품질 개선",
        "AWS S3 클라우드 스토리지 연동 로직 구현으로 이미지 및 고객 차트 관리 비용 절감 및 안정성 확보"
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "연구원",
      period: "2021.06 - 2023.07",
      description: [
        "dottrace 분석을 통해 병목 구간을 진단하고 Query 및 ORM 코드를 수정하여 전체 성능 30% 이상 향상",
        "ORM(EF)에서 발생하는 과도한 Join, 사용하지 않는 컬럼 조회, N+1 문제 등을 해결하여 DB 부하 경감",
        "비효율적인 Subquery 및 중복 Group By 제거 등 SQL 쿼리 최적화 수행",
        "수작업으로 관리되던 티켓 기능을 RDB 설계부터 자동 알림톡 발송까지 풀스택으로 구현하여 운영 오류 0% 달성"
      ],
    },
  ] as Experience[],
  projects: [
    {
      title: "CRM 티켓 통합 관리 시스템",
      description: "수동 티켓 관리의 오류와 누락을 해결하기 위해 구축된 자동화 시스템입니다. 기획 단계의 UI/UX 피드백부터 DB 설계, 알림톡 연동까지 전 과정을 주도했습니다.",
      techStack: ["C#", ".NET", "MSSQL", "Entity Framework", "알림톡 API"],
      period: "2021.12 - 2022.01",
    },
    {
      title: "전사적 성능 최적화 (Query & ORM)",
      description: "프로그램 속도 저하 이슈를 해결하기 위해 dottrace로 정밀 진단을 수행했습니다. 쿼리 및 ORM 코드 최적화를 통해 평균 30% 이상의 성능 향상을 달성했습니다.",
      techStack: ["dottrace", "C#", "MSSQL", "Query Optimization"],
      period: "2022.07 - 2023.05",
    },
    {
      title: "Legacy View 마이그레이션 (WinForm to WPF)",
      description: "현대적인 UI 환경을 구축하기 위해 메인 뷰를 WPF로 전환했습니다. 비동기 로직과 데이터 최적화를 통해 사용자 체감 속도를 대폭 개선했습니다.",
      techStack: ["WPF", "XAML", ".NET 6", "Async/Await"],
      period: "2024.06 - 2024.08",
    },
    {
      title: "Personal Portfolio Site",
      description: "Next.js 15와 Tailwind CSS를 사용하여 구축한 정적 포트폴리오 사이트입니다. GitHub Actions로 CI/CD를 자동화했습니다.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub Actions"],
      githubUrl: "https://github.com/MostCitizen/MostCitizen.github.io",
      period: "2024.05 - Present",
    },
  ] as Project[],
};
