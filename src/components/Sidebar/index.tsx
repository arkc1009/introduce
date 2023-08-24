'use client';

import { AnimatePresence, Variants, motion, useTime, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';

interface Menu {
  title: string;
  href?: string;
  icon?: React.ReactNode;
}

const menus: Menu[] = [
  { title: 'Home', icon: '🎮', href: '/' },
  { title: 'Scroll', icon: '🎧', href: '/scroll' },
  { title: 'Layout', icon: '🏆', href: '/layout' },
  { title: 'Effects', icon: '🎸', href: '/effects' },
  { title: 'menu512421421', icon: '📢' },
];

const areaVariants: Variants = {
  initial: { x: -5 },
  enter: { x: '-4rem', transition: { duration: 0.65, type: 'spring' } },
};

const listVariants: Variants = {
  initial: { x: '-4rem', opacity: 0, zIndex: 0 },
  enter: {
    x: 0,
    opacity: 1,
    zIndex: 20,
  },
};

const menuVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  enter: (index: number) => ({
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      delay: index * 0.5,
    },
  }),
  hover: {
    x: 10,
  },
};

const titleVariants: Variants = {
  initial: { scale: 0, opacity: 0 },
  hover: { scale: 1, opacity: 1, transition: { type: 'spring', duration: 0.6 } },
};

const MotionLink = motion(Link);

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="fixed top-[calc(50%_-_12rem)] left-0 w-16 h-96 flex items-center z-10 cursor-pointer"
      initial="initial"
      whileHover="enter"
      onHoverStart={() => setOpen(true)}
      onHoverEnd={() => setOpen(false)}
    >
      <motion.div
        className="w-full h-full border-2 border-dashed border-gray-700 border-l-0 rounded-lg"
        variants={areaVariants}
      />

      <AnimatePresence initial={false}>
        {open && (
          <motion.ul
            className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center gap-2 ml-2 cursor-default"
            variants={listVariants}
            initial="initial"
            animate="enter"
          >
            {menus.map(({ title, icon, href }, index) => (
              <MotionLink
                href={href || '#'}
                key={title}
                className="relative w-auto h-12 z-30 cursor-pointer"
                custom={index}
                variants={menuVariants}
                initial="initial"
                animate="enter"
                whileHover="hover"
              >
                <div className="w-12 h-12 rounded-full bg-white grid place-items-center">
                  {icon}
                </div>

                <motion.div
                  className="absolute top-0 left-14 h-full origin-left flex items-center"
                  variants={titleVariants}
                >
                  <p className="min-w-[60px] h-[75%] px-2 bg-gray-900 bg-opacity-90 text-white text-xs font-light rounded-xl grid place-items-center">
                    {title}
                  </p>
                </motion.div>
              </MotionLink>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default Sidebar;
