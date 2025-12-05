# 💼 Portfolio Website

> "사용자 중심 사고, 팀워크 중심의 협업, 기술 중심의 완성도"

개발자 정희성의 포트폴리오 사이트입니다.

### 주요 기능

- **실시간 피드백 시스템**: Supabase를 활용한 방문자 피드백 기능
- **날씨 정보**: 실시간 날씨 정보 표시
- **다크 모드**: 라이트/다크 테마 전환 지원
- **애니메이션 효과**: 스크롤 기반 페이드인 애니메이션

## 기술 스택

### Frontend
- **React**
- **TypeScript**
- **Vite**

### Backend & Database
- **Supabase**

### UI/UX
- **Lucide React** 
- **React Loading Skeleton**

## 📂 프로젝트 구조

```
portfolio/
├── public/
│   ├── font/                 # 웹 폰트 (Pretendard)
│   └── img/                  # 프로젝트 이미지 및 동영상
├── src/
│   ├── components/          # React 컴포넌트
│   │   ├── Dialog.tsx       # 프로젝트 상세 모달
│   │   ├── ProjectCard.tsx  # 프로젝트 카드
│   │   ├── FeedbackForm.tsx # 피드백 입력 폼
│   │   ├── FeedbackList.tsx # 피드백 목록
│   │   ├── WeatherBox.tsx   # 날씨 정보
│   │   └── SetTheme.tsx     # 테마 전환
│   ├── data/                # JSON 데이터
│   │   ├── projectlist.json # 프로젝트 정보
│   │   └── animals.json     # 아이콘 데이터
│   ├── hooks/               # Custom Hooks
│   │   └── useAnimation.tsx # 스크롤 애니메이션
│   ├── lib/                 # 라이브러리 함수
│   │   ├── FetchProjects.tsx
│   │   ├── FetchFeedback.tsx
│   │   ├── FetchWeather.tsx
│   │   └── SubmitComment.tsx
│   ├── types/               # TypeScript 타입 정의
│   │   ├── project.ts
│   │   └── weather.ts
│   ├── App.tsx              # 메인 컴포넌트
│   ├── App.css              # 스타일시트
│   └── main.tsx             # 진입점
└── index.html
```

## 📋 주요 프로젝트

### 🚤 요트 관리 플랫폼
- **기간**: 2025.09 - 2025.11
- **기술**: Flutter, Spring Boot, MySQL, FCM, AI Chatting
- **역할**: UI 설계, 프론트엔드 개발
- **특징**: 요트 소유자를 위한 스마트 관리 솔루션

### 🎬 영화 예매 키오스크
- **기간**: 2025.03
- **기술**: Python, PyQT5, Oracle, Matplotlib
- **역할**: UI 설계, 예매 기능 구현
- **특징**: 실제 영화관 키오스크를 모사한 GUI 프로그램
