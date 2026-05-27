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
  about:
    "효율적인 코드와 확장 가능한 시스템을 지향합니다. 2년 10개월간의 실무 경험을 통해 C#/.NET 기반의 대규모 시스템 고도화와 성능 최적화를 주도해 왔으며, 최근에는 Node.js와 Flutter를 활용한 모던 웹/앱 개발로 역량을 확장하고 있습니다.",
  skills: [
    { name: "C#", category: "Backend", level: 5 },
    { name: ".NET Core", category: "Backend", level: 5 },
    { name: "Node.js (Express)", category: "Backend", level: 4 },
    { name: "TypeScript / JS", category: "Backend", level: 4 },
    { name: "Entity Framework", category: "Backend", level: 5 },
    { name: "C#", category: "Frontend", level: 5 },
    { name: ".NET", category: "Frontend", level: 5 },
    { name: "WPF / WinForm", category: "Frontend", level: 5 },
    { name: "DevExpress", category: "Frontend", level: 4 },
    { name: "TypeScript / JS", category: "Frontend", level: 4 },
    { name: "Flutter", category: "Mobile", level: 4 },
    { name: "MSSQL", category: "Database", level: 5 },
    { name: "MongoDB", category: "Database", level: 4 },
    { name: "dottrace", category: "Others", level: 5 },
    { name: "Git", category: "Others", level: 4 },
    { name: "ORM Optimization", category: "Others", level: 5 },
  ] as Skill[],
  experiences: [
    {
      company: "MYPT (개인 프로젝트)",
      role: "Lead Developer",
      period: "2024.03 - Present",
      description: [
        "Flutter와 Riverpod을 활용한 크로스 플랫폼 운동 관리 애플리케이션 개발",
        "추상화된 레포지토리 패턴과 Riverpod을 결합하여 Real/Mock 데이터 환경을 자유롭게 전환할 수 있는 시스템 설계",
        "flutter_dotenv를 이용한 환경 변수 기반의 서버 인프라 스위칭 로직 구현",
        "iOS iPad 전체 화면 대응 및 다양한 스크린 사이즈를 고려한 반응형 UI 구현",
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "소프트웨어 개발자 (프리랜서)",
      period: "2024.12 - 2025.02",
      description: [
        "고객 관리 프로그램 각종 상황별 화면보기 기능 추가 (예약 현황 등)",
        "기존 프로그램의 레이어 구조 개편을 통한 가독성 및 유지보수성 향상",
        "신규 수납 기능에 대한 통계 모듈 개발 및 데이터 분석",
        "dottrace를 사용하여 병목 지점 확인 및 로직 개선으로 속도 최적화",
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "소프트웨어 개발자 (프리랜서)",
      period: "2024.06 - 2024.08",
      description: [
        "프로그램 메인 View 마이그레이션 (WinForm → WPF) 및 디자인 전면 개편",
        "데이터 로딩 최적화 및 새로고침 로직 개선을 통해 프로그램 성능 및 반응 속도 향상",
        "MMF(Memory Mapped File) 기반 Shared Memory 기술을 적용하여 이미지 관리 프로그램 초기 실행 속도 개선",
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "소프트웨어 개발자 (프리랜서)",
      period: "2024.01 - 2024.02",
      description: [
        "시스템 프레임워크 버전 업그레이드 (.NET Framework → .NET 6)",
        ".NET 6 마이그레이션을 통해 전반적인 시스템 실행 성능 향상 및 유지보수 효율 증대",
        "AWS S3 연동 비즈니스 로직 추가로 이미지 및 고객 차트 관리 프로세스 최적화",
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "연구원",
      period: "2021.06 - 2023.07",
      description: [
        "고객관리 프로그램 티켓 시스템 개발 주도 (RDB 설계, EF 기반 CRUD 구현, 기여도 100%)",
        "dottrace 정밀 분석을 통한 쿼리 및 ORM 코드 최적화로 평균 30% 이상의 성능 향상 달성",
        "비효율적인 Subquery, 다수의 Group By, 불필요한 테이블 조회 등 SQL 쿼리 최적화",
        "ORM(EF)에서 발생하는 과도한 Join, N+1 문제 해결 및 사용하지 않는 컬럼 조회 제거",
        "알림톡 및 문자 발송 연동을 통한 티켓 관리 자동화 시스템 구축",
      ],
    },
  ] as Experience[],
  projects: [
    {
      title: "MYPT - Smart Workout Assistant",
      description:
        "사용자의 운동 루틴을 관리하고 진행 상황을 추적하는 모바일 앱입니다. 클린 아키텍처 지향 및 테스트 용이성을 위한 Mock 시스템이 핵심입니다.",
      techStack: ["Flutter", "Riverpod", "Firebase", "Clean Architecture"],
      period: "2024.03 - Present",
    },
    {
      title: "CRM 티켓 통합 관리 시스템",
      description:
        "수동 티켓 관리의 오류와 누락을 해결하기 위해 구축된 자동화 시스템입니다. 기획 단계의 UI/UX 피드백부터 DB 설계, 알림톡 연동까지 전 과정을 주도했습니다.",
      techStack: ["C#", ".NET", "MSSQL", "Entity Framework", "알림톡 API"],
      period: "2021.12 - 2022.01",
    },
    {
      title: "전사적 성능 최적화 (Query & ORM)",
      description:
        "프로그램 속도 저하 이슈를 해결하기 위해 dottrace로 정밀 진단을 수행했습니다. 쿼리 및 ORM 코드 최적화를 통해 평균 30% 이상의 성능 향상을 달성했습니다.",
      techStack: ["dottrace", "C#", "MSSQL", "Query Optimization"],
      period: "2022.07 - 2023.05",
    },
    {
      title: "Legacy View 마이그레이션 (WinForm to WPF)",
      description:
        "현대적인 UI 환경을 구축하기 위해 메인 뷰를 WPF로 전환했습니다. 비동기 로직과 데이터 최적화를 통해 사용자 체감 속도를 대폭 개선했습니다.",
      techStack: ["WPF", "XAML", ".NET 6", "Async/Await"],
      period: "2024.06 - 2024.08",
    },
    {
      title: "Personal Portfolio Site",
      description:
        "Next.js 15와 Tailwind CSS를 사용하여 구축한 정적 포트폴리오 사이트입니다. GitHub Actions로 CI/CD를 자동화했습니다.",
      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "GitHub Actions",
      ],
      githubUrl: "https://github.com/MostCitizen/MostCitizen.github.io",
      period: "2024.05 - Present",
    },
  ] as Project[],
};
