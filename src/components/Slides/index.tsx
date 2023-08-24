'use client';

import { AnimatePresence, PanInfo, Variants, motion } from 'framer-motion';
import React, { PropsWithChildren, useCallback, useMemo, useReducer, useState } from 'react';
import { twMerge } from 'tailwind-merge';

import useSlide, { SlideDirection } from '@lib/hooks/useSlide';

interface SlideProps {
  drag?: boolean;
}

const variants: Variants = {
  enter: (direction: SlideDirection) => ({
    x: direction === 'next' ? '100%' : '-100%',
    opacity: 0,
  }),
  current: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: SlideDirection) => ({
    x: direction === 'next' ? '-100%' : '100%',
    opacity: 0,
  }),
};

const SWIPE_THRESHOLD = 50000;

const Slides = ({ children, drag = true }: PropsWithChildren<SlideProps>) => {
  const _children = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return child;
    }
  });

  const { direction, page, paginate } = useSlide();

  const ableNext = useMemo(() => _children && _children.length - 1 > page, [_children, page]);

  const ablePrev = useMemo(() => _children && page > 0, [_children, page]);

  const handleClickNext = useCallback(() => {
    if (!ableNext) return;

    paginate(1);
  }, [ableNext, paginate]);

  const handleClickPrev = useCallback(() => {
    if (!ablePrev) return;

    paginate(-1);
  }, [ablePrev, paginate]);

  const handleDragEnd = useCallback(
    (event: MouseEvent | PointerEvent | TouchEvent, { offset, velocity }: PanInfo) => {
      const swipe = Math.abs(offset.x) * velocity.x;

      if (ableNext && swipe < -SWIPE_THRESHOLD) {
        paginate(1);
        return;
      }

      if (ablePrev && swipe > SWIPE_THRESHOLD) {
        paginate(-1);
        return;
      }
    },
    [paginate, ablePrev, ableNext],
  );

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.article
          custom={direction}
          key={page}
          className="absolute w-full h-full grid place-items-center z-[2] cursor-grab"
          variants={variants}
          initial="enter"
          animate="current"
          exit="exit"
          transition={{ x: { duration: 0.6 } }}
          drag={drag ? 'x' : undefined}
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={1}
          onDragEnd={handleDragEnd}
          whileDrag={{ cursor: 'grabbing' }}
        >
          {_children?.[page]}
        </motion.article>
      </AnimatePresence>

      <div className="absolute bottom-4 left-0 w-full flex items-center justify-center gap-1 z-10">
        {_children?.map((child, index) => (
          <div
            key={`dot_${index}`}
            className={twMerge(
              'w-4 h-4 border border-red-300 rounded-full cursor-pointer',
              index === page && 'bg-red-300',
            )}
            onClick={() => paginate(index - page)}
          />
        ))}
      </div>

      <div
        onClick={handleClickPrev}
        className={twMerge(
          'absolute top-1/2 left-4 w-8 h-8 cursor-pointer select-none z-10 grid place-items-center bg-green-200 rounded-full scale-[-1]',
          !ablePrev && 'cursor-default opacity-30',
        )}
      >
        ▶
      </div>

      <div
        onClick={handleClickNext}
        className={twMerge(
          'absolute top-1/2 right-4 w-8 h-8 cursor-pointer select-none z-10 grid place-items-center bg-green-200 rounded-full',
          !ableNext && 'cursor-default opacity-30',
        )}
      >
        ▶
      </div>
    </div>
  );
};

export default Slides;
