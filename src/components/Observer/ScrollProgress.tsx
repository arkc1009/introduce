'use client';

import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { MouseEventHandler, useCallback, useEffect } from 'react';

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '90%']);

  const scrollPage: MouseEventHandler<HTMLElement> = useCallback((event) => {
    const bodyEl = document.querySelector('body');
    if (!bodyEl) return;

    const bodyHeight = Math.max(bodyEl.offsetHeight, bodyEl.scrollHeight);
    const mouseY = event.clientY - event.currentTarget.offsetTop;

    const ratio = 350 / mouseY;

    window.scrollTo({ top: bodyHeight / ratio, behavior: 'smooth' });
  }, []);

  return (
    <motion.div
      className="fixed top-[300px] right-[32px] flex flex-col w-[120px] h-[350px] shadow-lg bg-white bg-opacity-20 rounded-xl overflow-hidden cursor-pointer"
      onClick={scrollPage}
      //   onTouchStart={(e) => console.log(e)}
    >
      <motion.article className="absolute top-0 left-0 w-full h-full" style={{ y }}>
        <div className="w-full h-[10%] rounded-md bg-black bg-opacity-20 shadow-md cursor-default" />
      </motion.article>
    </motion.div>
  );
}

export default ScrollProgress;
