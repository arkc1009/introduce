'use client';

import { AnimatePresence, Variants, motion } from 'framer-motion';
import { useMemo } from 'react';

interface CircleWaveProps {
  size?: number | string;
  color?: string;
  waveCount?: number;
}

interface WaveCustom {
  index: number;
  waveCount: number;
}

const borderVariants: Variants = {
  initial: {
    scale: 0.9,
    opacity: 1,
  },
  wave: ({ index, waveCount }: WaveCustom) => ({
    scale: 2,
    opacity: [1, 0.7, 0],
    transition: {
      times: [0, 0.4, 1],
      delay: 0.35 * index,
      repeat: Infinity,
      repeatDelay: 0.35 * waveCount + 0.6,
      duration: 0.7,
      ease: 'easeOut',
    },
  }),
};

function CircleWave({ size: sizeProps = '1.5rem', color, waveCount = 3 }: CircleWaveProps) {
  const _size = useMemo(() => {
    if (!sizeProps) return '0px';
    if (typeof sizeProps === 'string') return sizeProps;
    return `${sizeProps}px`;
  }, [sizeProps]);

  const waves = useMemo(() => new Array(waveCount).fill(0), [waveCount]);

  return (
    <motion.div
      style={{ width: _size, height: _size, backgroundColor: color || 'salmon' }}
      className="relative rounded-full"
    >
      {waves.map((_, index) => (
        <motion.div
          key={index}
          style={{ borderColor: color || 'salmon' }}
          className="absolute w-full h-full inset-0 border rounded-full bg-none "
          variants={borderVariants}
          initial="initial"
          animate="wave"
          custom={{ index, waveCount }}
        />
      ))}
    </motion.div>
  );
}

export default CircleWave;
