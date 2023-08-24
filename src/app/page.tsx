'use client';

import ReOrder from '@/components/ReOrder';
import Refresh from '@/components/Refresh';
import Section from '@/components/Section';
import Slides from '@/components/Slides';
import Stacks from '@/components/Stacks';
import IFrameSection from '@/containers/sections/IframeSection';
import OverviewSection from '@/containers/sections/OverviewSection';
import TitleSection from '@/containers/sections/TitleSection';
import { AnimatePresence, Variants, motion, spring } from 'framer-motion';
import { nanoid } from 'nanoid';
import { useCallback, useState } from 'react';
import { ClassNameValue, twMerge } from 'tailwind-merge';

interface TabData {
  id: string;
  title: string;
  color: ClassNameValue;
}

const tabDatas: TabData[] = [
  { id: '1', title: 'A1', color: 'bg-red-200' },
  { id: '2', title: 'B2', color: 'bg-orange-200' },
  { id: '3', title: 'C3', color: 'bg-green-100' },
];

export default function Home() {
  const [isOn, setIsOn] = useState(false);
  const [selectedId, setSelectedId] = useState('1');
  const [elPosition, setElPosition] = useState(0);

  const positionVariant: Variants = {
    initial: {
      x: 0,
      y: 0,
    },
    move: (position: number) => ({
      x: position,
    }),
  };

  const handleSwitch = useCallback(() => {
    setIsOn((prevState) => !prevState);
  }, []);

  const handleClickTab = useCallback((id: string) => {
    setSelectedId(id);
  }, []);

  return (
    <main className="max-w-[1200px] mx-auto flex min-h-screen flex-col items-center gap-8 pt-8">
      <h1 className="text-2xl font-semibold">Switch</h1>
      <div
        onClick={handleSwitch}
        className={twMerge(
          'w-[100px] h-[50px] grid items-center cursor-pointer bg-white rounded-full px-2.5 py-2.5',
          isOn && 'justify-end',
        )}
      >
        <motion.div
          layout
          transition={spring}
          className={twMerge(
            'w-[40px] h-full bg-black rounded-full transition-colors duration-500',
            isOn && 'bg-red-400',
          )}
        ></motion.div>
      </div>

      <hr className="w-full border-slate-700" />

      <h1 className="text-2xl font-semibold">Tabs</h1>
      <section className="w-[700px] border-2 border-slate-600">
        <ul className="w-full h-[100px] bg-slate-50 flex">
          {tabDatas.map(({ id, title, color }) => (
            <li
              key={id}
              onClick={() => handleClickTab(id)}
              className={twMerge('relative grid place-items-center grow cursor-pointer', color)}
            >
              <h3>{title}</h3>
              <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white" />

              {selectedId === id && (
                <motion.div
                  className="UL absolute bottom-0 left-0 w-full h-[2px] z-10 bg-black"
                  layoutId="UL"
                />
              )}
            </li>
          ))}
        </ul>

        <div className="w-full h-[300px] border-t-0 bg-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedId}
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              className="w-full h-full grid place-items-center text-2xl font-bold"
            >
              {selectedId}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <hr className="w-full border-slate-700" />

      <h1 className="text-2xl font-semibold">Slide</h1>
      <section className="w-full h-[500px]">
        <Slides>
          <p className="w-full h-full grid place-items-center bg-red-200">1</p>
          <p className="w-full h-full grid place-items-center bg-blue-200">2</p>
          <p className="w-full h-full grid place-items-center bg-green-200">3</p>
          <p className="w-full h-full grid place-items-center bg-purple-200">4</p>
          <p className="w-full h-full grid place-items-center bg-orange-200">5</p>
        </Slides>
      </section>

      <hr className="w-full border-slate-700" />

      <h1 className="text-2xl font-semibold">Stacks</h1>
      <section className="w-full h-[500px] flex justify-center items-center gap-4">
        <div className="w-1/2 h-full text-center">
          <h2>Click</h2>
          <Stacks />
        </div>
        <div className="w-1/2 h-full text-center">
          <h2>Drag</h2>
          <Stacks drag />
        </div>
      </section>

      <hr className="w-full border-slate-700" />

      <h1 className="text-2xl font-semibold">Refresh</h1>
      <section className="w-full h-[500px] flex justify-center items-center gap-8">
        <Refresh onRefresh={() => console.log('Refresh!!')}>
          <ul className="w-[300px] p-4 flex flex-col gap-2">
            <li className="py-2 px-4 rounded-md border-2 border-slate-600">Item 1</li>
            <li className="py-2 px-4 rounded-md border-2 border-slate-600">Item 2</li>
            <li className="py-2 px-4 rounded-md border-2 border-slate-600">Item 3</li>
            <li className="py-2 px-4 rounded-md border-2 border-slate-600">Item 4</li>
            <li className="py-2 px-4 rounded-md border-2 border-slate-600">Item 5</li>
          </ul>
        </Refresh>

        <Refresh onRefresh={() => console.log('Refresh!!')}>
          <div className="w-[300px] py-16 grid place-items-center bg-red-100">
            Hello! I am Content.
          </div>
        </Refresh>
      </section>

      <hr className="w-full border-slate-700" />

      <h1 className="text-2xl font-semibold bg-red-400">ReOrder</h1>
      <section className="w-full h-[500px]">
        <ReOrder />
      </section>

      <hr className="w-full border-slate-700" />

      <h1 className="text-2xl font-semibold">Scroll</h1>
      <section className="w-full h-[500px]">
        <div className="w-full h-full flex flex-col gap-8 overflow-y-auto">
          {new Array(12).fill(0).map(() => (
            <p key={nanoid()}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, commodi ab officia
              illum accusantium vitae delectus numquam repellat, magni ipsum expedita possimus eius
              amet quae exercitationem eaque nostrum voluptatibus atque.
            </p>
          ))}
        </div>
      </section>

      <hr className="w-full border-slate-700" />
    </main>
  );
}
