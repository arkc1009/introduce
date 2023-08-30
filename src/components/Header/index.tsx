'use client';

import { AnimatePresence, Variants, motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { twMerge } from 'tailwind-merge';

import { menus } from '@lib/constants';

const ExHeaderVariants: Variants = {
  hide: {
    opacity: 0,
    scaleY: 0,
  },
  show: {
    opacity: 1,
    scaleY: 1,
  },
};

const MotionAiOutlineArrowUp = motion(AiOutlineArrowUp);

function Header() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  const [isHide, setIsHide] = useState(false);

  const detailMenu = useMemo(() => {
    if (!hoveredMenu) return;

    return menus.find((menu) => menu.title === hoveredMenu);
  }, [hoveredMenu]);

  return (
    <motion.header className="relative w-full min-h-[45px] h-auto">
      <motion.div
        className="absolute top-4 left-4 cursor-pointer"
        animate={{ rotate: isHide ? 180 : 0, transition: { duration: 0.6, type: 'spring' } }}
        whileHover={{
          y: [0, isHide ? 5 : -5, 0],
          transition: {
            repeat: Infinity,
            repeatType: 'reverse',
            repeatDelay: 0.3,
            ease: 'easeInOut',
          },
        }}
        onClick={() => setIsHide((prevHide) => !prevHide)}
      >
        <AiOutlineArrowUp className="w-6 h-6" />
      </motion.div>

      <nav
        className={twMerge(
          'max-w-[1200px] mx-auto flex items-center transition-all',
          isHide && 'h-0 overflow-hidden',
        )}
      >
        <ul
          className={twMerge(
            'w-full h-[45px] flex justify-center items-center gap-8 text-xs z-[9997] transition-colors duration-700',
            hoveredMenu ? 'text-white' : 'text-black',
          )}
        >
          {menus.map((menu) => (
            <li
              key={menu.title}
              className="cursor-pointer px-1"
              onPointerOver={() => setHoveredMenu(menu.title)}
            >
              <Link href={menu.href || '#'} onClick={() => setHoveredMenu(null)}>
                {menu.title}
              </Link>
            </li>
          ))}
        </ul>

        <AnimatePresence initial={false}>
          {hoveredMenu && (
            <motion.div
              variants={ExHeaderVariants}
              initial="hide"
              animate="show"
              exit="hide"
              transition={{ type: 'tween', delay: 0.2, duration: 0.35, ease: 'easeInOut' }}
              className="absolute top-0 left-0 bg-gray-800 w-full min-h-[350px] pt-[45px] origin-top z-[9996]"
              onPointerLeave={() => setHoveredMenu(null)}
            >
              <motion.ul
                className="max-w-[1200px] h-full mx-auto flex text-white"
                key={hoveredMenu}
                initial={{ opacity: 0.3 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0.3 }}
                transition={{ duration: 0.2 }}
              >
                <li className="h-full flex flex-col flex-1">
                  <h3 className="text-sm text-gray-400 mb-2">Shortcuts</h3>
                  <ul className="flex flex-col gap-2 font-semibold">
                    {detailMenu?.subs?.map((subMenu) => (
                      <li key={subMenu}>
                        <Link
                          href={`${detailMenu.href}#${subMenu}`}
                          onClick={() => setHoveredMenu(null)}
                        >
                          {subMenu}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <AnimatePresence>
        {hoveredMenu && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.2, duration: 0.2, ease: 'easeInOut' }}
            className="fixed inset-0 w-screen h-screen backdrop-blur-lg bg-white bg-opacity-20 z-[9995]"
          />
        )}
      </AnimatePresence>
    </motion.header>
  );
}

export default Header;
