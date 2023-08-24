'use client';

import { PanInfo, Variants, motion, useMotionValue, useTransform } from 'framer-motion';
import { useCallback, useState } from 'react';

interface CardProps {
  front?: boolean;
  onClickCard?: () => void;
  drag?: boolean;
}

const frontVariants: Variants = {
  animate: { y: 0, scale: 1, opacity: 1 },
  exit: (x: number) => ({
    x,
    opacity: 0,
    scale: 0.5,
  }),
};

const backVariants: Variants = {
  initial: {
    y: 115,
    opacity: 0,
    scale: 0,
  },
  animate: {
    y: 45,
    opacity: 0.6,
    scale: 0.75,
  },
};

function Card({ front, drag, onClickCard }: CardProps) {
  const [cardX, setCardX] = useState(0);
  const x = useMotionValue(0);

  const xRange = [-250, 0, 250];

  const rotateRange = [-150, 0, 150];

  const rotate = useTransform(x, xRange, rotateRange, { clamp: false });

  const handleClickCard = useCallback(() => {
    setCardX(250);
    onClickCard?.();
  }, [onClickCard]);

  const handleDragEnd = useCallback(
    (e: MouseEvent | PointerEvent | TouchEvent, { offset, velocity }: PanInfo) => {
      if (offset.x < -100) {
        setCardX(-500);
        onClickCard?.();
      }

      if (offset.x > 100) {
        setCardX(500);
        onClickCard?.();
      }
    },
    [onClickCard],
  );

  return (
    <motion.article
      onClick={!drag ? handleClickCard : undefined}
      className="absolute w-[150px] h-[150px] cursor-grab"
      whileHover={{ scale: 1.05 }}
      whileTap={{ cursor: 'grabbing' }}
      drag={drag ? 'x' : false}
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
      onDragEnd={handleDragEnd}
      variants={front ? frontVariants : backVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={cardX}
      style={{ x, rotate }}
    >
      <motion.div className="w-[150px] h-[150px] bg-white rounded-lg shadow-xl" />
    </motion.article>
  );
}

export default Card;
