'use client';

import { IoMdInformationCircleOutline } from 'react-icons/io';

import { SAMPLE_TEXT } from '@/app/_components/home/constants';

import Tooltip from '@/components/tooltip';
import { TOOLTIP_PLACEMENTS } from '@/components/tooltip/constants';
import styles from '@/app/_components/home/styles.module.css';

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>툴팁 포지션 예시</h1>

      <h2>TOP</h2>
      <Tooltip content={SAMPLE_TEXT} placement={TOOLTIP_PLACEMENTS.TOP}>
        <IoMdInformationCircleOutline />
      </Tooltip>

      <h2>RIGHT</h2>
      <Tooltip content={SAMPLE_TEXT} placement={TOOLTIP_PLACEMENTS.RIGHT}>
        <IoMdInformationCircleOutline />
      </Tooltip>

      <h2>BOTTOM</h2>
      <Tooltip content={SAMPLE_TEXT} placement={TOOLTIP_PLACEMENTS.BOTTOM}>
        <IoMdInformationCircleOutline />
      </Tooltip>

      <h2>LEFT</h2>
      <Tooltip content={SAMPLE_TEXT} placement={TOOLTIP_PLACEMENTS.LEFT}>
        <IoMdInformationCircleOutline />
      </Tooltip>
    </main>
  );
}
