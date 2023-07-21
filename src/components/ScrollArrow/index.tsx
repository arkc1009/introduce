"use client";

import { motion } from "framer-motion";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { ClassNameValue, twJoin, twMerge } from "tailwind-merge";

export interface ScrollArrowProps {
  id?: string | null;
  circle?: boolean;
  className?: ClassNameValue;
}

export default function ScrollArrow({
  id,
  circle = false,
  className,
}: ScrollArrowProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.7 }}
      whileHover={{ opacity: 1, transition: { delay: 0 } }}
      transition={{ delay: 1.5 }}
      className={twMerge(
        "animate-bounce absolute bottom-8 left-0 w-full h-fit z-10 flex justify-center",
        className
      )}
    >
      {id ? (
        <a
          className={twJoin(
            "px-2 pt-2 pb-1 cursor-pointer",
            circle && "bg-black bg-opacity-90 rounded-full"
          )}
          href={`#${id}`}
        >
          <MdKeyboardDoubleArrowDown size={96} color="white" />
        </a>
      ) : (
        <MdKeyboardDoubleArrowDown size={96} color="white" />
      )}
    </motion.div>
  );
}
