'use client';

import DeepDive from '@/components/DeepDive';
import {
  AnimatePresence,
  Variants,
  motion,
  useCycle,
  useScroll,
  useTransform,
} from 'framer-motion';
import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const buttonVariants: Variants = {
  initial: {
    opacity: 0,
    x: -30,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.45,
      delay: 0.5,
    },
  },
};

export default function ApplePage() {
  const [temp, setTemp] = useState<string | null>(null);
  const scrollContainer = useRef<HTMLElement>(null);
  const { scrollY } = useScroll({ container: scrollContainer });

  return (
    <motion.main
      ref={scrollContainer}
      className={twMerge(
        'relative w-full max-h-[calc(100%_-_45px)] overflow-x-hidden',
        temp ? 'overflow-y-hidden' : 'overflow-y-auto',
      )}
    >
      <motion.div
        className="max-w-[1200px] mx-auto flex min-h-screen flex-col items-center gap-8 pt-8"
        initial={{ x: 0 }}
        animate={{ x: temp ? '-100vw' : 0 }}
        transition={{ type: 'tween', duration: 1, ease: 'easeOut' }}
      >
        <section className="w-full h-auto grid grid-cols-5 grid-rows-[repeat(2,_250px)] gap-6">
          <article className="relative grid place-items-center bg-white rounded-2xl shadow-md col-[1_/_4] row-[1_/_3]">
            <motion.button
              variants={buttonVariants}
              className="absolute bottom-4 right-4 py-2 px-4 rounded-2xl bg-gray-800 text-white text-xs font-light grid place-items-center hover:bg-gray-700"
              onClick={() => setTemp('1')}
              initial="initial"
              whileInView="show"
            >
              더 알아보기
            </motion.button>
          </article>
          <article className="relative grid place-items-center bg-white rounded-2xl shadow-md col-[4_/_6] row-[1_/_2]">
            <motion.button
              variants={buttonVariants}
              className="absolute bottom-4 right-4 py-2 px-4 rounded-2xl bg-gray-800 text-white text-xs font-light grid place-items-center hover:bg-gray-700"
              onClick={() => setTemp('1')}
              initial="initial"
              whileInView="show"
            >
              더 알아보기
            </motion.button>
          </article>
          <article className="relative grid place-items-center bg-white rounded-2xl shadow-md col-[4_/_6] row-[2_/_3]">
            <motion.button
              variants={buttonVariants}
              className="absolute bottom-4 right-4 py-2 px-4 rounded-2xl bg-gray-800 text-white text-xs font-light grid place-items-center hover:bg-gray-700"
              onClick={() => setTemp('1')}
              initial="initial"
              whileInView="show"
            >
              더 알아보기
            </motion.button>
          </article>
        </section>

        <section className="w-full h-auto grid grid-cols-5 grid-rows-[repeat(2,_250px)] gap-6">
          <article className="relative grid place-items-center bg-white rounded-2xl shadow-md col-[1_/_3]">
            <motion.button
              variants={buttonVariants}
              className="absolute bottom-4 right-4 py-2 px-4 rounded-2xl bg-gray-800 text-white text-xs font-light grid place-items-center hover:bg-gray-700"
              onClick={() => setTemp('1')}
              initial="initial"
              whileInView="show"
            >
              더 알아보기
            </motion.button>
          </article>
          <article className="relative grid place-items-center bg-white rounded-2xl shadow-md col-[3_/_6]">
            <motion.button
              variants={buttonVariants}
              className="absolute bottom-4 right-4 py-2 px-4 rounded-2xl bg-gray-800 text-white text-xs font-light grid place-items-center hover:bg-gray-700"
              onClick={() => setTemp('1')}
              initial="initial"
              whileInView="show"
            >
              더 알아보기
            </motion.button>
          </article>
        </section>
      </motion.div>

      <AnimatePresence initial={false}>
        {temp && (
          <DeepDive scrollY={scrollY} onClose={() => setTemp(null)}>
            <div className="min-w-[100vw] h-full grid place-items-center">
              <h2 className="text-9xl font-extrabold">Deep Dive Page1.</h2>
            </div>

            <div className="min-w-[100vw] h-full grid place-items-center">
              <h2 className="text-9xl font-extrabold">Deep Dive Page2.</h2>
            </div>

            <div className="min-w-[100vw] h-full grid place-items-center">
              <h2 className="text-9xl font-extrabold">Deep Dive Page3.</h2>
            </div>

            <div className="min-w-[100vw] h-full grid place-items-center">
              <h2 className="text-9xl font-extrabold">Deep Dive Page4.</h2>
            </div>
          </DeepDive>
        )}
      </AnimatePresence>
    </motion.main>
  );
}
