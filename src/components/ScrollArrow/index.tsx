"use client";

import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

export interface ScrollArrowProps {
  id?: string;
}

export default function ScrollArrow({ id }: ScrollArrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      whileHover={{ opacity: 1, transition: { delay: 0 } }}
      transition={{ delay: 1.5 }}
      className="animate-bounce absolute bottom-8 left-0 w-full h-fit z-10 flex justify-center"
    >
      <a
        className="bg-black bg-opacity-90 rounded-full px-2 pt-2 pb-1 cursor-pointer"
        href={`#${id}`}
      >
        <MdKeyboardDoubleArrowDown size={96} color="white" />
      </a>
    </motion.div>
  );
}
