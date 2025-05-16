'use client';

import { useState, ReactNode } from 'react';
import { useFloating, autoUpdate, offset, flip, shift } from '@floating-ui/react-dom';

import Portal from '@/components/portal';
import { TOOLTIP_PLACEMENTS } from '@/components/tooltip/constants';
import styles from '@/components/tooltip/styles.module.css';

interface TooltipProps {
  children: ReactNode;
  content: string;
  placement?: (typeof TOOLTIP_PLACEMENTS)[keyof typeof TOOLTIP_PLACEMENTS];
}

export default function Tooltip({ children, content, placement = TOOLTIP_PLACEMENTS.BOTTOM }: TooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => setIsOpen(true);
  const handleMouseLeave = () => setIsOpen(false);

  const { refs, floatingStyles } = useFloating({
    placement,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset({
        mainAxis: 4, // 툴팁과 타겟 요소 사이의 수직 간격 (px)
        crossAxis: 0, // 툴팁과 타겟 요소 사이의 수평 간격 (px)
      }),
      flip(), // 화면 경계를 벗어날 경우 반대 방향으로 배치
      shift({ padding: 8 }), // 화면 경계와의 최소 여백 (px)을 유지하며 위치 조정
    ],
  });

  return (
    <>
      <span
        ref={refs.setReference}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={styles.wrapper}
        aria-describedby="tooltip"
        role="tooltip"
        tabIndex={0}
      >
        {children}
      </span>
      <Portal containerId="tooltip-container">
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          data-placement={placement}
          className={`${styles.tooltip} ${isOpen ? styles.show : ''}`}
          role="tooltip"
          id="tooltip"
          aria-hidden={!isOpen}
        >
          <div>{content}</div>
        </div>
      </Portal>
    </>
  );
}
