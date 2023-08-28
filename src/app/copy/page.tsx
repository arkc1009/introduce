'use client';

import DeepDive from '@/components/DeepDive';
import { AnimatePresence, motion, useCycle, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';

export default function CopyPage() {
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
          <article className="grid place-items-center bg-white rounded-2xl shadow-md col-[1_/_4] row-[1_/_3]">
            <button
              className="py-2 px-4 rounded-2xl bg-gray-800 text-white text-xs font-light grid place-items-center hover:bg-gray-700"
              onClick={() => setTemp('1')}
            >
              클릭하세요.
            </button>
          </article>
          <article className="grid place-items-center bg-white rounded-2xl shadow-md col-[4_/_6] row-[1_/_2]">
            <button
              className="py-2 px-4 rounded-2xl bg-gray-800 text-white text-xs font-light grid place-items-center hover:bg-gray-700"
              onClick={() => setTemp('1')}
            >
              클릭하세요.
            </button>
          </article>
          <article className="grid place-items-center bg-white rounded-2xl shadow-md col-[4_/_6] row-[2_/_3]">
            <button
              className="py-2 px-4 rounded-2xl bg-gray-800 text-white text-xs font-light grid place-items-center hover:bg-gray-700"
              onClick={() => setTemp('1')}
            >
              클릭하세요.
            </button>
          </article>
        </section>

        <section className="w-full h-auto grid grid-cols-5 grid-rows-[repeat(2,_250px)] gap-6">
          <article className="grid place-items-center bg-white rounded-2xl shadow-md col-[1_/_3]">
            <button
              className="py-2 px-4 rounded-2xl bg-gray-800 text-white text-xs font-light grid place-items-center hover:bg-gray-700"
              onClick={() => setTemp('1')}
            >
              클릭하세요.
            </button>
          </article>
          <article className="grid place-items-center bg-white rounded-2xl shadow-md col-[3_/_6]">
            <button
              className="py-2 px-4 rounded-2xl bg-gray-800 text-white text-xs font-light grid place-items-center hover:bg-gray-700"
              onClick={() => setTemp('1')}
            >
              클릭하세요.
            </button>
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
