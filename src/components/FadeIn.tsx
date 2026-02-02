'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

/**
 * FadeIn 컴포넌트
 * 스크롤 시 아래에서 위로 올라오면서 페이드인되는 애니메이션
 *
 * 작동 방식:
 * 1. 초기 상태: 투명하고 아래에 위치 (opacity: 0, y: 20)
 * 2. 화면에 보이면: 완전히 나타나고 원래 위치로 (opacity: 1, y: 0)
 *
 * @param children - 애니메이션을 적용할 자식 요소
 * @param delay - 애니메이션 시작 지연 (기본값: 0초)
 * @param duration - 애니메이션 지속 시간 (기본값: 0.5초)
 * @param className - 추가 CSS 클래스
 *
 * 사용 예시:
 * <FadeIn delay={0.2}>
 *   <h1>제목</h1>
 * </FadeIn>
 */
export function FadeIn({
  children,
  delay = 0, // 기본값: 지연 없음
  duration = 0.5, // 기본값: 0.5초 동안 애니메이션
  className = '',
}: FadeInProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
