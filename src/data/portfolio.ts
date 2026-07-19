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
  longDescription?: string;
  keyAchievements?: string[];
  challenges?: string;
  role?: string;
  contribution?: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}

export const portfolioData = {
  name: "LeeHoYoon",
  title: "Software Engineer",
  email: "wjsghk1588@gmail.com",
  github: "https://github.com/MostCitizen",
  about:
    "효율적인 코드와 확장 가능한 시스템을 지향합니다. 2년 10개월간의 실무 경험을 통해 C#/.NET 기반의 시스템 고도화와 성능 최적화를 주도해 왔으며, 최근에는 Node.js와 Flutter를 활용한 모던 앱 개발로 역량을 확장하고 있습니다.",
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
      role: "클라이언트 메인 개발자 (Flutter Lead) & 백엔드 개발 기여",
      period: "2025.11 - Present",
      description: [
        "Flutter (90%) 및 Node.js 백엔드 (30%) 환경에서 크로스플랫폼 운동 관리 서비스 아키텍처 설계 및 제품 개발",
        "Riverpod 기반 MVVM 클라이언트 구조 수립, Socket.io 실시간 채팅 및 백그라운드 토큰 자동 갱신 소켓 재연결 파이프라인 구현",
        "Google Calendar API 연동 예약 동기화 개발 및 Express 기반 PT 패키지 정산/예약 서버 비즈니스 로직 구현",
        "Repository 패턴 및 환경변수 분기 설계를 통한 오프라인 Mock 데이터 병렬 개발 생산성 극대화 및 양대 스토어 마켓 출시"
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
        "트레이너와 회원 간의 스케줄 관리, 당일 운동 기록 및 피드백 공유를 체계화하여 수업 관리 효율을 높여주는 플랫폼입니다.",
      techStack: ["Flutter", "Node.js", "MongoDB", "Firebase"],
      period: "2025.11 - Present",
      playStoreUrl: "https://play.google.com/store/apps/details?id=com.routn.mypt",
      appStoreUrl: "https://apps.apple.com/kr/app/id6760650802",
      role: "클라이언트 개발자 (Flutter)",
      contribution: "클라이언트(Flutter) 설계 및 개발 90% 주도, 백엔드(Node.js/API) 개발 30% 기여",
      longDescription:
        "기존 1:1 PT 수업 후 회원이 운동 내용을 쉽게 망각하거나 단발성 운동에 그치는 한계를 극복하고, 트레이너의 피드백 작성에 따르는 과도한 업무 부하를 해결하기 위해 개발된 플랫폼입니다. 회원이 당일 수행한 운동 내용을 직관적으로 기록 및 관리할 수 있는 환경을 제공하고, 트레이너의 피드백 정리를 도움으로써 지속적인 운동 관리 환경을 조성하고 운영 효율성을 개선했습니다.",
      keyAchievements: [
        "Flutter와 Riverpod을 기반으로 MVVM 구조를 구축하여 비즈니스 로직과 UI 컴포넌트 간 단일 책임 분리 및 테스트 용이성 극대화",
        "Socket.io를 활용하여 실시간 채팅, 상대방 타이핑 상태(isTyping), 룸 진입/이탈(Join/Leave) 관리 기능 설계 및 구현",
        "네트워크 단절 대비 자동 재연결(Reconnection Backoff) 전략과 백그라운드 JWT 만료 감지(auth:unauthorized 발생 시 자동으로 토큰 갱신 후 재연결)를 통합해 끊김 없는 연결 안정성 확보",
        "Google Calendar API와의 단방향 연동을 설계하여 앱 내에서 PT 일정을 예약/등록하면 사용자의 외부 구글 캘린더에 자동으로 동기화 및 등록되는 캘린더 자동화 기능 구현",
        "Firebase Cloud Messaging(FCM) 기반 실시간 푸시 알림 인프라 구축 및 앱 안정성 모니터링을 위한 Firebase Crashlytics 연동",
        "백엔드(Node.js/Express) 단에서 수업 예약 관련 핵심 API 개발 및 트레이너/회원용 PT 패키지(이용권) 관리 비즈니스 로직 구현",
        "알림(Notification) 및 구글 캘린더 연동 관리 백엔드 개발 및 서버 코드 오류 수정",
        "추상화된 Repository 패턴을 설계하여 환경 변수에 따라 Real Server API와 로컬 Mock Data를 코드 변경 없이 상호 스위칭할 수 있는 테스트 아키텍처 수립",
        "Google Play Store 및 Apple App Store 정식 등록 완료 및 지속적 업데이트 진행"
      ],
      challenges:
        "가장 큰 문제는 안정적인 백그라운드 음성 녹음 기능 구현과 전화 수신 등 OS 오디오 인터럽트 대응이었습니다. Android 14+의 백그라운드 마이크 권한 제약을 극복하기 위해 Foreground Service를 도입하여 백그라운드 상태에서도 무중단 녹음을 보장했으며, 전화 수신 시 AudioSession의 인터럽트 스트림을 감지하여 안드로이드에서는 일시 정지 후 자동 재개(Auto-Resume), iOS에서는 안전한 세션 저장 후 정지되도록 플랫폼별 분기 처리를 구현했습니다. 또한 메모리 오버헤드와 디바이스 리소스를 막기 위해 녹음 데이터를 raw PCM 바이트 스트림으로 파일에 직접 쓰기(File Streaming) 방식으로 처리하고, 녹음 종료 시 수동으로 44바이트 WAV RIFF 헤더를 결합한 뒤 FlutterAudioToolkit을 통해 AAC(.m4a) 32kbps로 압축·변환하여 배포함으로써 네트워크 대역폭과 디바이스 리소스를 최적화했습니다."
    },
    {
      title: "Framework Update (.NET 6)",
      description:
        "기존 .NET Framework 기반 시스템을 .NET 6로 성공적으로 업그레이드하여 시스템 실행 성능을 높이고 유지보수 안정성을 확보했습니다.",
      techStack: [".NET 6", "C#", "Migration"],
      period: "2024.06 - 2024.08",
      role: "소프트웨어 개발자",
      contribution: "기여도 100% (이관 작업 전담)",
      longDescription:
        "노후화된 기존 .NET Framework 버전을 .NET 6 환경으로 마이그레이션한 성능 현대화 프로젝트입니다.",
      keyAchievements: [
        "구버전 외부 종속 DLL 패키지의 호환성을 분석하여 대체 라이브러리를 적용하는 작업을 주도함으로써 라이브러리 마이그레이션 완수",
      ],
    },
    {
      title: "WinForm to WPF Modernization",
      description:
        "프로그램 메인 View를 WinForm에서 WPF로 전환하며, 데이터 로딩 최적화 및 새로고침 로직 개선을 통해 프로그램 성능을 향상시켰습니다.",
      techStack: ["WPF", "XAML", "C#"],
      period: "2024.01 - 2024.02",
      role: "소프트웨어 개발자",
      contribution: "기여도 100% (설계 및 개발 전담)",
      longDescription:
        "기존 Windows Forms 기반으로 구축되었던 의료 고객 관리용 설치형 데스크톱 프로그램을 WPF(Windows Presentation Foundation) 아키텍처로 변경한 프로젝트입니다.",
      keyAchievements: [
        "비즈니스 로직과 UI 강결합을 MVVM 아키텍처 도입을 통해 격리하여 유지보수 용이성 확보",
        "MMF(Memory Mapped File) 기반 Shared Memory 방식을 통해 다중 실행을 차단하고 첫 실행 부팅 성능 최적화"
      ],
    },
    {
      title: "프로그램 속도 개선 (성능 최적화)",
      description:
        "dottrace 분석을 통해 주기적으로 병목 구간을 진단하고 수정하여 평균 30% 이상의 성능 향상 달성. 비효율적인 Subquery, 잘못된 인덱스 사용, ORM N+1 문제 등을 해결했습니다.",
      techStack: ["dottrace", "C#", "MSSQL", "Query/ORM Optimization"],
      period: "2022.07 - 2023.05",
      role: "소프트웨어 개발자",
      contribution: "기여도 100% (병목 분석 및 데이터베이스 튜닝 전담)",

      longDescription:
        "사용자가 빈번히 요청하는 주요 통계 및 예약 보기 화면의 지연을 해결하기 위해, 프로파일러 분석과 데이터베이스 튜닝을 동원하여 성능 장벽을 낮춘 성능 튜닝 특화 프로젝트입니다.",
      keyAchievements: [
        "JetBrains dottrace 메모리/성능 프로파일러 분석을 통해 UI 스레드를 블로킹하는 동기 예약 조회 메서드를 색출 및 리팩터링",
        "EF 사용 시 빈번하던 N+1 쿼리 문제를 SQL 추적기를 통해 파악하고 Eager Loading(Include) 및 Select 프로젝션 적용으로 로딩 속도 30% 단축",
      ]
    },
    {
      title: "티켓 기능 개발",
      description:
        "고객관리 프로그램에서 이벤트 진행 시 수작업으로 관리하던 불편함을 해결하기 위한 시스템 개발. RDB 테이블 구조 설계 및 EF를 사용한 티켓 생성/수정/환불 처리 기능 구현.",
      techStack: ["C#", "Entity Framework 6", "MSSQL", "알림톡/문자 API"],
      period: "2021.12 - 2022.01",
      role: "소프트웨어 개발자",
      contribution: "개발 기여도 100% (비즈니스 로직 및 DB 설계 전담)",
      longDescription:
        "고객관리 프로그램에서 이벤트 진행 시 별도의 티켓 기능이 없어, 고객 티켓 발급 및 사용 내역을 수작업으로 관리해야 하는 불편함과 그에 따른 정보 누락 오류를 해결하기 위해 구축된 티켓 전산화 시스템 개발 프로젝트입니다.",
      keyAchievements: [
        "기획 및 디자인 시안 단계에서 개발 가능성과 UI/UX 개선안에 대한 기술적 검토 및 피드백 제공",
        "티켓 관리 체계 구축을 위해 데이터의 정합성을 보장하는 RDB 테이블 구조 설계 및 관계 정립(고객, 티켓, Log, 상태 등)",
        "C# 환경에서 Entity Framework를 적극 활용하여 티켓 생성, 삭제, 수정, 검색 비즈니스 로직 개발",
        "실무 비즈니스 프로세스에 맞춘 티켓 예약, 사용, 구매, 수정, 환불 처리 기능 세부 설계 및 구현",
        "티켓 기능이 기존 고객관리 시스템의 기존 기능들과 마찰 없이 작동하도록 연동 설계",
        "티켓 도입에 따른 기존 기능 성능 저하를 최소화하기 위한 SQL 쿼리 튜닝 및 인덱스 최적화",
        "고객별 티켓 상태 변화(사용, 만료 예고, 구매 등)에 반응하여 발송되는 알림톡 및 문자 API 연동 구현",
        "코드 결합도를 낮춘 아키텍처 설계를 적용하여 향후 기능 확장 및 변경 요구사항에 유연하게 대응할 수 있도록 유지보수성 확보"
      ]
    }
  ] as Project[],
};
