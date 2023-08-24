'use client';

import { Variants, motion } from 'framer-motion';
import { PropsWithChildren } from 'react';

type Direction = 'right-left' | 'left-right';

interface StickyCardProps {
  background: string;
  direction?: Direction;
}

const variant: Variants = {
  initial: (direction: Direction) => ({
    rotate: direction === 'right-left' ? 15 : -15,
    x: direction === 'right-left' ? 400 : -400,
    y: 30,
    opacity: 0,
    scale: 0.5,
  }),
  enter: (direction: Direction) => ({
    rotate: direction === 'right-left' ? 3 : -3,
    x: direction === 'right-left' ? 5 : -5,
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 2,
    },
  }),
};

function StickyCard({
  background,
  children,
  direction = 'right-left',
}: PropsWithChildren<StickyCardProps>) {
  console.log('direction', direction);

  return (
    <motion.article
      className="w-[400px] h-[400px] relative grid place-items-center overflow-hidden"
      initial="initial"
      whileInView="enter"
      viewport={{ once: true }}
    >
      <div
        className="w-[400px] h-[400px] absolute top-0 right-0 rounded-3xl"
        style={{
          background,
          scale: direction === 'right-left' ? '1 1' : `-1 1`,
          clipPath: `polygon(100% 0%, 100% 54.77%, 100% 100%, 56% 100%, 37.75% 100%, 36.75% 94%, 38.25% 83.5%, 42.5% 71.25%, 50% 54.25%, 55% 30.25%, 55.5% 22.5%, 55.75% 15.25%, 57.25% 7.75%, 60% 2.75%, 63.75% 0%)`,
        }}
      />
      <motion.div
        className="w-[340px] h-[200px] bg-white rounded-xl shadow-xl grid place-items-center"
        variants={variant}
        custom={direction}
      >
        <motion.div>{children}</motion.div>
      </motion.div>
    </motion.article>
  );
}

export default StickyCard;
