'use client';

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from 'framer-motion';
import { RefObject, useCallback, useEffect, useMemo, useState } from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';
import { useElementSize } from 'usehooks-ts';

export interface NavigatorOptions {
  className?: ClassNameValue;
  onFocusOutView?: React.ReactElement;
}

interface NavigatorProps {
  targetRef: RefObject<HTMLDivElement>;
  title: string;
  index: number;
  options?: NavigatorOptions;
}

function Navigator({
  targetRef,
  title,
  index,
  options = { className: 'text-white bg-gray-900' },
}: NavigatorProps) {
  const { scrollY } = useScroll({
    target: targetRef,
  });
  const [isFocus, setIsFocus] = useState(index === 0);

  const [_ref, { height }] = useElementSize();

  const [start, end] = [
    index !== 0 ? (targetRef.current?.offsetTop || 28) - 500 : 0,
    (targetRef.current?.offsetTop || 28) + height - 500,
  ];

  const _height = useMemo(() => (height <= 400 ? 100 : height * 0.25), [height]);

  const circleY = useTransform(scrollY, [start, end], [16, _height - 20]);

  const moveScroll = useCallback(() => {
    window.scrollTo({ top: (targetRef.current?.offsetTop || 0) - 16, behavior: 'instant' });
  }, [targetRef]);

  useEffect(() => {
    _ref(targetRef.current);
  }, [_ref, targetRef, index]);

  useMotionValueEvent(scrollY, 'change', (value) => {
    if (value >= start && value <= end) {
      setIsFocus(true);
    } else {
      setIsFocus(false);
    }
  });

  return (
    <motion.li
      style={{ minHeight: isFocus ? _height : 100 }}
      className={twMerge(
        'relative w-full min-h-[100px] flex flex-col justify-between px-4 py-4 bg-gray-900 border border-inherit text-white rounded-2xl transition-all delay-150',
        options.className,
        !isFocus && 'cursor-pointer hover:bg-transparent hover:text-gray-900 hover:border-gray-900',
      )}
      onClick={moveScroll}
    >
      <p className="text-sm">{index.toString().padStart(2, '0')}</p>
      <h3 className="font-semibold">{title}</h3>

      <AnimatePresence initial={false}>
        {isFocus && (
          <motion.article
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute top-0 right-3 w-2 h-2 rounded-full bg-white origin-top"
            style={{ y: circleY }}
          />
        )}
      </AnimatePresence>
    </motion.li>
  );
}

export default Navigator;
