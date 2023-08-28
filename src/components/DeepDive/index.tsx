'use client';

import { MotionValue, motion, useMotionTemplate, useScroll, useTransform } from 'framer-motion';
import { PropsWithChildren, useMemo, useRef } from 'react';
import { IoIosClose } from 'react-icons/io';
import { useElementSize, useWindowSize } from 'usehooks-ts';

interface DeepDiveProps {
  onClose: () => void;
  scrollY: MotionValue<number>;
}

function DeepDive({ children, scrollY, onClose }: PropsWithChildren<DeepDiveProps>) {
  const deepDiveRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: deepDiveProgress } = useScroll({
    container: deepDiveRef,
  });

  const { width: windowWidth, height: windowHeight } = useWindowSize();
  const [elementRef, { width: elementWidth }] = useElementSize();

  const overflowRatio = useMemo(() => {
    if (!elementWidth) return 1;

    return elementWidth / windowWidth;
  }, [elementWidth, windowWidth]);

  const deepDiveX = useTransform(deepDiveProgress, [0, 1], [0, -(elementWidth - windowWidth)]);

  const closeButtonWidth = useTransform(deepDiveProgress, () =>
    deepDiveProgress.get() >= 1 ? 64 : 32,
  );
  const closeButtonBackgroundOpacity = useTransform(deepDiveProgress, () =>
    deepDiveProgress.get() >= 1 ? 1 : 0.4,
  );
  const closeButtonBackground = useMotionTemplate`rgba(255,255,255,${closeButtonBackgroundOpacity})`;

  return (
    <motion.div
      initial={{ x: '100%', y: scrollY.get() }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'tween', duration: 1, ease: 'easeOut' }}
      className="absolute top-0 left-0 w-screen h-[calc(100dvh_-_45px)]"
    >
      <motion.div
        className="h-full overflow-y-auto overflow-x-hidden bg-gray-900 text-white"
        ref={deepDiveRef}
      >
        <motion.section
          className="sticky top-0 left-0 w-fit h-full flex items-center"
          style={{ x: deepDiveX }}
          ref={elementRef}
        >
          {children}
        </motion.section>

        <motion.div style={{ height: (overflowRatio - 1) * windowHeight }}></motion.div>
      </motion.div>

      {overflowRatio > 1 && (
        <motion.div
          className="absolute bottom-12 left-0 w-full flex justify-center items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="w-[50%] flex items-center">
            <div className="w-[90%] h-1 bg-white bg-opacity-40">
              <motion.div
                style={{ scaleX: deepDiveProgress }}
                className="w-full h-full origin-left bg-white"
              />
            </div>

            <motion.article
              className="w-8 h-8 rounded-full flex justify-center items-center cursor-pointer overflow-hidden transition-all hover:opacity-75"
              style={{ width: closeButtonWidth, backgroundColor: closeButtonBackground }}
              onClick={() => onClose()}
            >
              <IoIosClose className="w-6 h-6" />
            </motion.article>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default DeepDive;
