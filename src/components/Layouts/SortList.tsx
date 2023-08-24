'use client';

import { AnimatePresence, Variants, motion, spring } from 'framer-motion';
import { nanoid } from 'nanoid';
import { useMemo, useState } from 'react';
import { BiSortDown, BiSortUp } from 'react-icons/bi';
import { twMerge } from 'tailwind-merge';

interface Item {
  id: string;
  title: string;
  index: number;
}

const titles = [
  'Sacred Boy',
  'The Cracked Return',
  'Waves of Sparks',
  "The Nobody's Swords",
  'The Teacher of the Moon',
  'Servants in the Truth',
];

const renderItems: () => Item[] = () =>
  new Array(titles.length)
    .fill(0)
    .map((_, i) => ({ id: nanoid(), title: titles[i], index: i + 1 }));

const items = renderItems();

const variants: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

function SortList() {
  const [sortType, setSortType] = useState<keyof Item>('title');
  const [sortAsc, setSortAsc] = useState(true);
  const [showIndex, setShowIndex] = useState(true);

  const sortedItems = useMemo(() => {
    let newItems;
    switch (sortType) {
      case 'id':
      case 'title': {
        newItems = items.sort((item1, item2) => item1.title.length - item2.title.length);
        break;
      }
      case 'index':
        newItems = items.sort((item1, item2) => item1.index - item2.index);
        break;
    }

    return sortAsc ? newItems : newItems.reverse();
  }, [sortType, sortAsc]);

  return (
    <motion.ul
      style={{
        background: `linear-gradient(343deg, rgba(255,85,0,1) 0%, rgba(255,196,85,1) 100%)`,
      }}
      className="w-full flex flex-col items-center gap-4 p-8 rounded-2xl"
    >
      <div className="w-[70%] h-[60px] flex items-center">
        <motion.label
          className="bg-gray-800 p-2 rounded-full shadow-xl text-xl text-white mr-2 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => setSortAsc((prevState) => !prevState)}
        >
          {sortAsc ? <BiSortUp /> : <BiSortDown />}
        </motion.label>

        <select
          id="sortType"
          className="rounded-xl bg-none px-2 py-2 bg-gray-800 text-white mr-4"
          onChange={(e) => setSortType(e.target.value as keyof Item)}
        >
          <option value="title">title length</option>
          <option value="index">book index</option>
        </select>

        <label
          htmlFor="showIndex"
          className="rounded-xl bg-none px-3 py-2 bg-gray-800 text-white mr-4"
        >
          Show Index
        </label>
        <div
          onClick={() => setShowIndex((prevState) => !prevState)}
          className={twMerge(
            'w-[100px] h-[40px] grid items-center cursor-pointer bg-white rounded-full px-1.5 py-1.5',
            showIndex && 'justify-end',
          )}
        >
          <motion.div
            layout
            // transition={spring}
            className={twMerge(
              'w-[40px] h-full bg-gray-300 rounded-full transition-colors duration-500',
              showIndex && 'bg-black',
            )}
          ></motion.div>
        </div>
      </div>

      {sortedItems.map((item) => (
        <motion.li
          key={item.id}
          layout
          className="bg-white w-[70%] min-h-[60px] rounded-3xl flex items-center justify-between px-5"
        >
          <h3 className="font-extrabold">{item.title}</h3>

          <AnimatePresence>
            {showIndex && (
              <motion.p
                className="bg-gray-800 text-white font-extralight flex items-center justify-center min-h-[40px] rounded-xl px-4"
                variants={variants}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                index: {item.index}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default SortList;
