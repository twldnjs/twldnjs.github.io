import { PortfolioData } from '@/types/portfolio';

export const portfolioData: PortfolioData = {
  name: '손지원',
  title: '프론트엔드 개발자',
  contact: {
    email: 'jwn032@gmail.com',
    github: 'github.com/twldnjs',
  },
  introduction:
    '안녕하세요, 프론트엔드 개발자 손지원입니다.\n소개글 추후 추가 예정입니다.',
  workExperiences: [
    {
      company: '(주) 티윈',
      position: 'Frontend Engineer',
      period: '2023.02 - 2025.11 (2년 9개월)',
      tagline:
        '대규모 사용자 기반의 LG전자 웹/모바일 앱의 운영/고도화/신규 기능 개발을 담당했습니다.',
      projects: [
        {
          title: 'LG ShopTime TV App',
          period: '2025.06 - 2025.11',
          summary: 'LG 스마트 TV 전용 커머스 앱 운영 및 기능 개발',
          skills: [
            'React',
            'Javascript',
            'Redux(Thunk)',
            'Enact.js(WebOS TV)',
            'CSS Modules',
          ],
          achievements: [
            '상세 페이지 리뉴얼: 복잡한 옵션 조합 처리를 위한 Redux 상태 관리 재설계, 옵션 선택·수량·가격 계산 로직 구현',
            '리뷰 시스템 신규 개발: Enact 기반 리모컨 포커스 제어 로직 적용한 리뷰 작성·조회·정렬 기능 구현',
            '운영 안정화: QA 피드백 기반 UI/로직 개선 및 공통 컴포넌트 유지보수 유지보수 및 오류 케이스 대응',
            'webOS 버전별 운영 이슈 대응',
          ],
          links: [
            // 외부 링크가 있으면
            // { label: '서비스', href: 'https://...' },
          ],
        },
        {
          title: 'LG MyCup App',
          period: '2024.08 - 2025.05',
          summary:
            '텀블러 세척 관리 앱 (Flutter 앱 내 WebView 프론트 영역 운영)',
          skills: [
            'React',
            'Javascript',
            'Recoil',
            'Styled-component',
            'Android Studio/Xcode (build)',
          ],
          achievements: [
            '이벤트 기능 전체 개발: 상세·홈 카드·리스트·팝업·당첨 확인·배송정보 입력 등 사용자 플로우 기반 화면 구현',
            'API 협업: 서버 개발자와 REST API 요청/응답 구조 협의 및 데이터 구조 개선 제안/반영',
            '접근성 대응: 인증기관 피드백(스크린리더, 포커스 흐름) 반영하여 접근성 품질 개선',
            'Android/iOS WebView 환경별 렌더링·인터랙션 이슈 분석/해결',
          ],
          links: [],
        },
        {
          title: 'LG ShopTime TV App 리뉴얼',
          period: '2024.08 - 2025.05',
          summary:
            'LG 스마트 TV 커머스 앱으로 Vue 기반 앱을 React + Enact로 구조로 전환',
          skills: [
            'React',
            'Javascript',
            'Redux(Thunk)',
            'Enact.js(WebOS TV)',
            'CSS Modules',
          ],
          achievements: [
            '주요 페이지 구현: Trending Now(Top100 리스트/VOD), MyPage(최근 본 상품/QnA/Contact), 테마 큐레이션 페이지 설계 및 개발',
            '이벤트 팝업 시스템: 자동 노출·배너 클릭·조건 충족 등 트리거 분기 지원 컴포넌트 구현',
            'TV 특화 UX 개선: Enact Spotlight 기반 리모컨 포커스 이동 규칙 설계 및 QA 피드백 반영으로 네비게이션 흐름 최적화',
            'webOS 호환성 확보: webOS 버전/모델별 지원 기능·웹 엔진 차이로 인한 렌더링/입력(리모컨)/서비스 호출 이슈를 분석하고 분기·폴백 적용',
          ],
          links: [
            // 외부 링크가 있으면
            // { label: '서비스', href: 'https://...' },
          ],
        },
        {
          title: 'LG ThinQ App',
          period: '2023.03 - 2023.12',
          summary: 'LG전자 스마트홈 하이브리드 앱 공통컴포넌트 팀 운영업무',
          skills: [
            'React',
            'Javascript',
            'Recoil',
            'Styled-component',
            'Android Studio/Xcode (build)',
          ],
          achievements: [
            '공통 컴포넌트 안정화: 공통 UI 스타일 수정 및 기능 보완, 레거시 화면 품질 개선',
            '접근성 개선: 웹 접근성 가이드 준수를 위한 CSS 수정 및 시멘틱 마크업 개선',
            '크로스 플랫폼 대응 : Android/iOS 디바이스별 웹뷰 호환성 테스트 및 이슈 분석/해결',
          ],
          links: [
            // 외부 링크가 있으면
            // { label: '서비스', href: 'https://...' },
          ],
        },
      ],
    },
  ],
  projects: [
    {
      name: 'BIDDLY',
      period: '2025. 12 - 2026. 02',
      githubLink: 'https://github.com/twldnjs',
      description:
        '의뢰자가 견적·포트폴리오·메시지를 비교해 업체/개인을 선택하는 경쟁입찰 플랫폼',
      skills: [
        'React Native (Expo),Next.js',
        'Typescript',
        'Zustand',
        'React Query',
        'Supabase',
        'tailwind',
      ],
      features: [
        'Next.js / Typescript / React Native 학습 및 적용',
        'Zustand (UI/Local state) + React Query (Server state) 활용하여 상태관리',
      ],
    },
  ],
  education: [
    {
      institution: '프로그래머스 주관 데브코스 웹 풀스택 9기',
      period: '2025. 12 - 2026. 06',
      decription: 'Node.js·TypeScript 기반 웹 풀스택 부트캠프(과정) 이수 중',
    },
    {
      institution: '가천대학교',
      period: '2013. 03 - 2019. 02',
      decription: '산업디자인과 전공',
    },
  ],
};
