'use client';

import { AnimatePresence, Variants, motion, useMotionValue, useTransform } from 'framer-motion';
import { useCallback, useState } from 'react';

import Card from './Card';

interface StacksProps {
  drag?: boolean;
}

function Stacks({ drag }: StacksProps) {
  const [index, setIndex] = useState(0);

  const addIndex = useCallback(() => {
    setIndex((prevIndex) => prevIndex + 1);
  }, []);

  return (
    <div className="relative w-full h-full bg-red-100 grid place-items-center">
      <AnimatePresence initial={false}>
        <Card key={index + 1} />
        <Card drag={drag} key={index} onClickCard={addIndex} front />
      </AnimatePresence>
      {/* <AnimatePresence initial={false}>
        <Card key={index} onClickCard={addIndex} front />
        <Card key={index + 1} />
      </AnimatePresence> */}
    </div>
  );
}

export default Stacks;
