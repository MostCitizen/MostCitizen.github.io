# MostCitizen Portfolio

Next.js와 Tailwind CSS를 활용한 개인 포트폴리오 사이트입니다. GitHub Pages를 통해 `MostCitizen.github.io`에 호스팅됩니다.

## 🚀 기술 스택

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **Theming:** next-themes (Light/Dark Mode)
- **Animation:** Framer Motion
- **Icons:** Lucide React & Custom SVGs
- **Deployment:** GitHub Actions

## 🛠️ 시작하기

### 로컬 개발

```bash
npm install
npm run dev
```

### 빌드 및 정적 내보내기

```bash
npm run build
```

결과물은 `out` 디렉토리에 생성됩니다.

## 📁 구조

- `src/data/portfolio.ts`: 모든 포트폴리오 데이터(기술, 프로젝트, 이력 등)를 관리하는 중앙 파일입니다.
- `src/components/sections`: 각 화면 섹션별 컴포넌트들입니다.
- `src/components/theme-provider.tsx`: 다크 모드 지원을 위한 테마 프로바이더입니다.

## 🚢 배포

`main` 브랜치에 코드를 푸시하면 GitHub Actions가 자동으로 빌드하여 `gh-pages` 브랜치로 배포합니다.
현재 `MostCitizen.github.io` 리포지토리 설정에서 Pages 배포 소스를 "GitHub Actions"로 설정해야 합니다.
