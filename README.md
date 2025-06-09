# 🍽️ Eatmoji Frontend

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" height="40"><img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" height="40"><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" height="40">
</div>

> 감정을 이모지로 표현하고, 그 이모지에 어울리는 음식을 추천해주는 감성 기반 메뉴 추천 서비스 **Eatmoji**의 프론트엔드 레포지토리입니다.

</br>

## 📌 소개

Eatmoji는 감정 상황을 이모지로 선택하면, 이어 맞는 음식을 추천해주는 **감성 기반 메뉴 추천 서비스**입니다.
추천 결과는 레시피로 직접 만들어보거나, 지역 기반 맛집 정보를 통해 먹으러 가는 두 가지 방식으로 이어집니다.

이 저장소는 Eatmoji 서비스의 **프론트엔드 클라이언트**로, 사용자와 상호작용하는 모든 화면을 담당합니다.

</br>

## ⚙️ 주요 기능

* 🔐 사용자 로그인/회원가입 및 토큰 기반 인증
* 😊 감정 이모지 선택을 통한 메뉴 추천 흉법
* 🍽️ 추천받은 음식의 레시피 및 주변 맛집 정보 확인
* 📍 Kakao Map 기반 지역 맛집 검색 기능
* ⭐ 추천 결과 좋아요 및 상세 페이지 기능
* 🔄 추천 기록 무한 스크롤 조회 기능
* 🧱 사용자 경험을 고려한 반응형 UI

</br>

## 🚀 배포 링크
🐸`https://eatmoji.vercel.app`

</br>

## 🧑‍💻 설치 및 실행 방법

```bash
# 1. 레포지트리 클론해오기
git clone https://github.com/EATMOJI-DionysOS/Eatmoji_FE.git
cd Eatmoji_FE

# 2. 의존성 설치
npm install

# 3. 개발 서버 실행
npm run dev

# 4. 빌드
npm run build

# 5. 환경 변수 (.env) 구성 예시
NEXT_PUBLIC_API_URL=https://api.example.com
```

> 기본 포트는 `http://localhost:3000` 입니다.

</br>

## 📁 폴더 구조

```
EATMOJI/
├── .next/                  # Next.js 빌드 결과물 (생성됨)
├── node_modules/           # 설치된 패키지들
├── public/                 # 정적 파일 (이미지 등)
├── src/                    # 소스 코드 폴더
│   ├── components/         # 재사용 가능한 컴포넌트
│   ├── data/               # 정적 데이터 파일
│   ├── lib/                # API 호출 및 유틸리티 함수
│   ├── mock/               # API 목 데이터
│   ├── pages/              # Next.js 페이지
│   ├── store/              # 상태 관리 (Zustand 등)
│   ├── styles/             # 전역 및 모듈 스타일
│   └── types/              # 타입 정의 (TypeScript)
├── .env                    # 환경 변수 설정
├── .gitignore              # Git 무시 파일 목록
├── build.sh                # 프로젝트 빌드 스크립트
├── eslint.config.mjs       # ESLint 설정
├── next-env.d.ts           # Next.js 타입 지원 파일
├── package.json            # 프로젝트 메타정보 및 스크립트
├── package-lock.json       # 의존성 고정 파일
├── tsconfig.json           # TypeScript 설정
└── README.md               # 프로젝트 문서

```

</br>

## 🛠️ 기술 스택

  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /><img src="https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB" /><img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" /><img src="https://img.shields.io/badge/Zustand-000000?style=for-the-badge&logo=Zustand&logoColor=white" /><img src="https://img.shields.io/badge/SWR-000000?style=for-the-badge&logo=vercel&logoColor=white" />

### 🎨 스타일링 및 UI

  <img src="https://img.shields.io/badge/Tailwind CSS-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white" /><img src="https://img.shields.io/badge/PostCSS-DD3A0A?style=for-the-badge&logo=postcss&logoColor=white" /><img src="https://img.shields.io/badge/React Icons-E91E63?style=for-the-badge&logo=react&logoColor=white" />

### ⚙️ 개발 및 배포 환경
  <img src="https://img.shields.io/badge/ESLint-4B32C3?style=for-the-badge&logo=eslint&logoColor=white" /><img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />

</br>

## 🤝 기억 가이드

* Pull Request 전에는 반드시 [CONTRIBUTING.md](../Eatmoji_FE/blob/develop/CONTRIBUTING.md)를 확인해주세요.
* 커밋 메시지는 [Conventional Commits](https://www.conventionalcommits.org/) 형식을 권장합니다.
* 브랜치 전략 및 PR 리뷰 프로세스는 Wiki에 설명되어 있습니다.

</br>

## 📄 라이선스

번 프로젝트는 [MIT License](../Eatmoji_FE/blob/develop/LICENSE)에 따라 오픈소스로 공개되어 있습니다.

</br>

## 📚 더 아는 길

* [🔗 GitHub Wiki 바로가기](https://github.com/EATMOJI-DionysOS/Eatmoji_FE/wiki)
* [📦 Backend Repository](https://github.com/EATMOJI-DionysOS/Eatmoji_BE)

</br>
</br>

> Made with ❤️ by Team DionysOS – 2025  
> This project was created as part of the **Open Source Software Project** course.
> 
