'use client';

import { PanInfo, motion, useAnimationControls, useMotionValue, useTransform } from 'framer-motion';
import { PropsWithChildren, useCallback, useRef } from 'react';
import { IoIosRefresh } from 'react-icons/io';

interface RefreshProps {
  onRefresh?: () => void;
}

function Refresh({ children, onRefresh }: PropsWithChildren<RefreshProps>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const progress = useMotionValue(0);

  const progressRange = [0, 75];
  // scale, opacity
  const scaleRange = [0, 1];
  const opacityRange = [0, 1];
  const rotateRange = [0, 360];
  const yRange = [0, 10];

  const scale = useTransform(progress, progressRange, scaleRange);
  const opacity = useTransform(progress, progressRange, opacityRange);
  const rotate = useTransform(progress, progressRange, rotateRange);
  const y = useTransform(progress, progressRange, yRange);

  const controls = useAnimationControls();
  const controls2 = useAnimationControls();

  const handleDragEnd = useCallback(
    (_: Event, info: PanInfo) => {
      if (y.get() >= 10) {
        controls2.stop();
        controls.start({ rotate: 360 * 2, transition: { duration: 0.4 } }).then(() => {
          onRefresh?.();
          controls2.start({ y: 0, transition: { duration: 0.5 } });
        });
      }
    },
    [controls, controls2, y, onRefresh],
  );

  return (
    <div className="relative" ref={containerRef}>
      <motion.div
        className="absolute top-2 left-[calc(50%_-_1rem)] w-8 h-8 rounded-full bg-white text-slate-500 shadow-xl"
        initial={{ scale: 0, opacity: 0 }}
        style={{ scale, opacity, y }}
        transition={{ duration: 0.7 }}
      >
        <motion.article
          className="w-full h-full grid place-items-center"
          animate={controls}
          style={{ rotate }}
        >
          <IoIosRefresh />
        </motion.article>
      </motion.div>

      <motion.div
        className="w-full h-full"
        whileTap={{ cursor: 'grabbing' }}
        style={{ y: progress }}
        drag="y"
        dragConstraints={containerRef}
        dragElastic={0.3}
        onDragEnd={handleDragEnd}
        animate={controls2}
      >
        {children}
      </motion.div>
    </div>
  );
}

export default Refresh;
