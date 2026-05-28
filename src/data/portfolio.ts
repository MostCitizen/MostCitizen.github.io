export interface Skill {
  name: string;
  category: "Frontend" | "Backend" | "Mobile" | "DevOps" | "Others" | "Database";
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
  about:
    "효율적인 코드와 확장 가능한 시스템을 지향합니다. 2년 10개월간의 실무 경험을 통해 C#/.NET 기반의 대규모 시스템 고도화와 성능 최적화를 주도해 왔으며, 최근에는 Node.js와 Flutter를 활용한 모던 앱 개발로 역량을 확장하고 있습니다.",
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
      company: "MYPT (팀 프로젝트)",
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
      role: "개발2팀 프리랜서",
      period: "2024.12 - 2025.02",
      description: ["소프트웨어 개발 및 유지 보수", "고객 관리 프로그램 각종 상황별 화면보기 기능 추가 (예약 현황 등)"],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "개발2팀 프리랜서",
      period: "2024.06 - 2024.08",
      description: [
        "프로그램 메인 View를 WinForm에서 WPF로 변경과 동시에 디자인 변경",
        "프로그램 데이터 불러오는 부분 최적화 및 개선, 프로그램 새로고침 로직 개선",
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "개발2팀 프리랜서",
      period: "2024.01 - 2024.02",
      description: [
        ".net 프레임 워크를 .net6로 버전 올리기",
        ".net6 로 올려 성능 향상과 유지 보수가 좋아짐",
        "AWS S3 적용을 통한 데이터 관리 프로세스 개선",
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "개발2팀 연구원",
      period: "2021.06 - 2023.07",
      description: [
        "S3 적용: 이미지 관리 프로그램과 고객 차트 관리 프로그램 이미지를 비지니스 로직을 추가하여 옵션에 따라 S3로 가져올 수 있게 변경",
        "레이어 구조 개편: 기존 프로그램 레이어 구조 부재로 인한 참조 및 변경 이슈 해결을 위한 구조 개편",
        "휴진 및 인센티브 기능 추가",
        "dottrace를 사용하여 느린 부분을 확인 후 속도 개선",
        "신규 수납 기능에 대한 통계 개발",
        "이미지 관리 프로그램 처음 실행 시 속도 개선 및 mmf를 이용한 shared memory를 통해 첫 프로그램 실행 개선",
        "메신저 프로그램 개선",
        "리펙터링 및 마이그레이션: 속도 개선을 위해 레거시 코드 리팩터링 및 라이브러리 마이그레이션",
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
      title: "티켓 기능 개발",
      description:
        "고객관리 프로그램에서 이벤트 진행 시 수작업으로 관리하던 불편함을 해결하기 위한 자동화 시스템 개발. RDB 테이블 구조 설계 및 EF를 사용한 티켓 생성/수정/환불 처리 기능 구현.",
      techStack: ["C#", "Entity Framework", "MSSQL", "알림톡/문자 API"],
      period: "2021.12 - 2022.01",
    },
    {
      title: "프로그램 속도 개선",
      description:
        "dottrace를 이용해 주기적으로 느린 부분을 확인 후 수정하여 평균 30% 이상의 성능 향상 달성. 비효율적인 Subquery, 다수의 Group By, N+1 문제 등을 ORM 및 쿼리 수준에서 해결.",
      techStack: ["dottrace", "C#", "MSSQL", "ORM/Query Optimization"],
      period: "2022.07 - 2023.05",
    },
    {
      title: "WinForm to WPF UI/UX 마이그레이션",
      description:
        "메인 뷰를 WinForm에서 WPF로 전환하며 디자인을 개선하고, 데이터 호출 및 새로고침 로직 최적화를 통해 프로그램 성능을 강화했습니다.",
      techStack: ["WPF", "XAML", ".NET 6", "WinForm"],
      period: "2024.06 - 2024.08",
    },
    {
      title: "Personal Portfolio Site",
      description:
        "Next.js와 Tailwind CSS를 사용하여 구축한 정적 포트폴리오 사이트입니다. GitHub Actions로 CI/CD를 자동화했습니다.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "GitHub Actions"],
      githubUrl: "https://github.com/MostCitizen/MostCitizen.github.io",
      period: "2024.05 - Present",
    },
  ] as Project[],
};
