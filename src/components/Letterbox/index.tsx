'use client';

import { motion } from 'framer-motion';
import { ComponentProps, PropsWithChildren, useCallback, useState } from 'react';
import { twMerge } from 'tailwind-merge';

interface LetterboxProps extends ComponentProps<'div'> {
  bottomText?: string;
  topText?: string;
}

const FONT_SIZE = 96; // px

const renderRepeatedText = (boxWidth: number, text: string) => {
  return `${text} `.repeat((boxWidth / (text.length * FONT_SIZE)) * 3);
};

export default function Letterbox({
  children,
  className,
  bottomText,
  topText,
  ...rest
}: PropsWithChildren<LetterboxProps>) {
  const [boxWidth, setBoxWidth] = useState(1);

  const handleRenderBox = useCallback((element: HTMLParagraphElement | null) => {
    setBoxWidth(element?.offsetWidth || 1920);
    console.log((element?.offsetWidth || 1920) / ('AAA'.length * FONT_SIZE));
  }, []);

  return (
    <div
      className={twMerge('h-full flex flex-col justify-between items-center', className)}
      {...rest}
    >
      <motion.div
        className="w-full h-28 flex items-center relative bg-black -mt-28 overflow-hidden"
        initial={{ y: 0, opacity: 0 }}
        whileInView={{ y: 112, opacity: 0.85 }}
        transition={{ delay: 0.5, type: 'just' }}
      >
        <motion.p
          ref={handleRenderBox}
          className="w-[200%] h-full flex items-center absolute top-0 left-0 text-clip whitespace-nowrap text-white text-[88px] font-extrabold"
          initial={{ x: '-100%' }}
          animate={{ x: '0' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 24 }}
        >
          {topText ? renderRepeatedText(boxWidth, topText) : null}
        </motion.p>
      </motion.div>

      {children}

      <motion.div
        className="w-full h-28 flex items-center relative bg-black -mt-28 overflow-hidden"
        initial={{ y: 112, opacity: 0 }}
        whileInView={{ y: 0, opacity: 0.85 }}
        transition={{ delay: 0.5, type: 'just' }}
      >
        <motion.p
          className="w-[200%] h-full flex items-center absolute top-0 left-0 text-clip whitespace-nowrap text-white text-[88px] font-extrabold"
          initial={{ x: '0' }}
          animate={{ x: '-100%' }}
          transition={{ ease: 'linear', repeat: Infinity, duration: 24 }}
        >
          {bottomText ? renderRepeatedText(boxWidth, bottomText) : null}
        </motion.p>
      </motion.div>
    </div>
  );
}
