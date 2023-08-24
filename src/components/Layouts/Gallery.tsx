'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import { GrFormClose } from 'react-icons/gr';
import { ClassNameValue, twMerge } from 'tailwind-merge';

const ids: string[] = ['1', '2', '3', '4'];

const gridAreas: ClassNameValue[] = ['col-[1_/_3]', 'col-[3_/_4]', 'col-[1_/_2]', 'col-[2_/_4]'];

function Gallery() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section
      className="relative w-full h-[500px] rounded-3xl p-8 grid grid-cols-3 gap-4"
      style={{
        background: `linear-gradient(342deg, rgba(255,42,0,1) 0%, rgba(240,120,80,1) 100%)`,
      }}
    >
      {ids.map((id, index) => (
        <motion.div
          key={id}
          className={twMerge(
            'p-4 grid place-items-center bg-white shadow-lg rounded-lg cursor-pointer col-[1_/_3]',
            gridAreas[index],
          )}
          onClick={() => setSelectedId((prevId) => (prevId ? null : id))}
          layoutId={id}
        >
          2
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <motion.div
            className={twMerge(
              'absolute w-[85%] h-[85%] inset-0 mx-auto my-auto z-[1] p-4 flex flex-col bg-white shadow-lg rounded-lg',
            )}
            layoutId={selectedId}
          >
            <div className="w-full flex items-center justify-end">
              <article
                className="w-8 h-8 rounded-full bg-red-300 grid place-items-center shadow-lg cursor-pointer"
                onClick={() => setSelectedId(null)}
              >
                <GrFormClose />
              </article>
            </div>
            Content
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default Gallery;
