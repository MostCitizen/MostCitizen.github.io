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
  playStoreUrl?: string;
  appStoreUrl?: string;
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
      company: "마이피티 (팀 프로젝트)",
      role: "Main Developer",
      period: "2025.11 - Present",
      description: [
        "Flutter와 Riverpod을 활용한 팀 프로젝트 기반 운동 관리 서비스 개발 주도",
        "추상화된 Repository 패턴을 설계하여 환경 변수에 따라 Real Server와 Mock Data를 자유롭게 스위칭할 수 있는 아키텍처 구현",
        "flutter_dotenv 패키지를 활용한 유연한 개발 및 테스트 인프라 환경 구축",
        "iOS iPad 전체 화면 대응(UIRequiresFullScreen 설정 최적화) 및 반응형 레이아웃 구현",
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "개발2팀 프리랜서",
      period: "2024.12 - 2025.02",
      description: ["소프트웨어 개발자 주요 직무 수행", "시스템 유지 보수 및 운영 대응"],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "개발2팀 프리랜서",
      period: "2024.06 - 2024.08",
      description: [
        "프래임 워크 버전 업데이트: .net 프레임 워크를 .net6로 버전 올리기",
        ".net6 로 올려 성능 향상과 유지 보수가 좋아짐",
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "개발2팀 프리랜서",
      period: "2024.01 - 2024.02",
      description: [
        "주요 로직 변경: 프로그램 메인 view를 winform에서 wpf로 변경과 동시에 디자인 변경",
        "프로그램 성능 상승: 프로그램 데이터 불러오는 부분 최적화 및 개선, 프로그램 새로고침 로직 개선",
      ],
    },
    {
      company: "전능아이티 (개발2팀)",
      role: "개발2팀 연구원",
      period: "2021.06 - 2023.07",
      description: [
        "고객 관리 프로그램 각종 상황별 화면보기 기능 추가 (예약 현황 등)",
        "S3 적용: 이미지 관리 프로그램과 고객 차트 관리 프로그램 이미지를 비지니스 로직을 추가하여 옵션에 따라 S3로 가져올 수 있게 변경",
        "사용하고 있던 프로그램 레이어 구조가 없어 개발할 때 참조 되어 있는 부분도 많고 변경되는 부분들이 많아 레이어 구조 개편",
        "휴진 기능 추가 및 인센티브 기능 추가",
        "dottrace를 사용하여 느린 부분을 확인 후 속도 개선",
        "신규 수납 기능의 대한 통계 개발",
        "이미지 관리 프로그램 처음 실행 시 속도 개선 및 mmf를 이용한 shared memory를 통해 첫 프로그램 실행 개선",
        "고객 관리 프로그램 티켓 기능 추가",
        "속도 개선을 위해 레거시 코드 리팩터링 및 라이브러리 마이그레이션",
      ],
    },
  ] as Experience[],
  projects: [
    {
      title: "마이피티 - PT 예약·회원관리·AI 피드백",
      description:
        "헬스장 회원과 트레이너를 연결하는 퍼스널 트레이닝 관리 플랫폼입니다. 복잡한 예약 시스템을 자동화하고, AI 기반의 운동 피드백을 통해 체계적인 회원 관리 환경을 제공합니다.",
      techStack: ["Flutter", "Node.js", "MongoDB", "Firebase", "AI Logic"],
      period: "2025.11 - Present",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.routn.mypt",
      appStoreUrl: "https://apps.apple.com/kr/app/id6760650802",
    },
    {
      title: "WinForm to WPF Modernization",
      description:
        "프로그램 메인 View를 WinForm에서 WPF로 전환하며 디자인을 전면 개편하고, 데이터 로딩 최적화 및 새로고침 로직 개선을 통해 프로그램 성능을 대폭 향상시켰습니다.",
      techStack: ["WPF", "XAML", "C#", "UI/UX Design"],
      period: "2024.01 - 2024.02",
    },
    {
      title: "Framework Update (.NET 6)",
      description:
        "기존 .NET Framework 기반 시스템을 .NET 6로 성공적으로 업그레이드하여 시스템 실행 성능을 높이고 유지보수 안정성을 확보했습니다.",
      techStack: [".NET 6", "C#", "Migration", "Backend"],
      period: "2024.06 - 2024.08",
    },
    {
      title: "프로그램 속도 개선 (성능 최적화)",
      description:
        "dottrace 분석을 통해 주기적으로 병목 구간을 진단하고 수정하여 평균 30% 이상의 성능 향상 달성. 비효율적인 Subquery, 잘못된 인덱스 사용, ORM N+1 문제 등을 해결했습니다.",
      techStack: ["dottrace", "C#", "MSSQL", "Query/ORM Optimization"],
      period: "2022.07 - 2023.05",
    },
    {
      title: "티켓 기능 개발",
      description:
        "고객관리 프로그램에서 이벤트 진행 시 수작업으로 관리하던 불편함을 해결하기 위한 자동화 시스템 개발. RDB 테이블 구조 설계 및 EF를 사용한 티켓 생성/수정/환불 처리 기능 구현.",
      techStack: ["C#", "Entity Framework 6", "MSSQL", "알림톡/문자 API"],
      period: "2021.12 - 2022.01",
    },
  ] as Project[],
};
