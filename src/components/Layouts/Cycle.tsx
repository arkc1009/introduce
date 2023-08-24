'use client';

import { motion, useCycle } from 'framer-motion';

const item1 = [1, 2, 4, 3];
const item2 = [4, 1, 3, 2];
const item3 = [3, 4, 2, 1];
const item4 = [2, 3, 1, 4];

function Cycle() {
  const [items, cycleItems] = useCycle(item1, item2, item3, item4);

  return (
    <motion.div
      style={{
        background: `linear-gradient(343deg, rgba(255,209,0,1) 0%, rgba(179,255,70,1) 100%)`,
      }}
      className="relative w-[300px] h-[300px] rounded-2xl p-6 grid grid-cols-2 gap-4"
    >
      {items.map((item, index) => (
        <motion.div
          key={item}
          layout
          className="bg-white rounded-lg cursor-pointer shadow-lg"
          onTap={() => cycleItems()}
        />
      ))}
    </motion.div>
  );
}

export default Cycle;
