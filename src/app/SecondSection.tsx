"use client";

import Section, { SectionProps } from "@/components/Section";
import ArrowSection from "@/components/Section/ArrowSection";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.4,
    },
  },
};

const title = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const item = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

export default function SecondSection(props: SectionProps) {
  return (
    <ArrowSection
      className="grid grid-cols-2 p-16 gap-x-4 text-black text-xl h-auto"
      nextId="3"
      {...props}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ x: -500 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex items-center"
      >
      </motion.div>
      <div className="flex items-center">
        <motion.ul variants={container} initial="hidden" whileInView="show">
          <motion.h4
            variants={title}
            initial="hidden"
            whileInView="show"
            className="font-bold text-6xl mb-2"
          >
            PONE
          </motion.h4>
          <motion.li variants={item}>텍스트입니다.</motion.li>
          <motion.li variants={item}>텍스트입니다.</motion.li>
          <motion.li variants={item}>텍스트입니다.</motion.li>
          <motion.li variants={item}>텍스트입니다.</motion.li>
          <motion.li variants={item}>텍스트입니다.</motion.li>
          <motion.li variants={item}>텍스트입니다.</motion.li>
          <motion.li variants={item}>텍스트입니다.</motion.li>
          <motion.li variants={item}>텍스트입니다.</motion.li>
          <motion.li variants={item}>텍스트입니다.</motion.li>
        </motion.ul>
      </div>

      <div className="flex items-center justify-end pr-24">
        <motion.ul variants={container} initial="hidden" whileInView="show">
          <motion.h4
            variants={title}
            initial="hidden"
            whileInView="show"
            className="font-bold text-6xl mb-2"
          >
            HYOI
          </motion.h4>
          <motion.li variants={item}>텍스트입니다?</motion.li>
          <motion.li variants={item}>텍스트입니다?</motion.li>
          <motion.li variants={item}>텍스트입니다?</motion.li>
          <motion.li variants={item}>텍스트입니다?</motion.li>
          <motion.li variants={item}>텍스트입니다?</motion.li>
          <motion.li variants={item}>텍스트입니다?</motion.li>
          <motion.li variants={item}>텍스트입니다?</motion.li>
          <motion.li variants={item}>텍스트입니다?</motion.li>
          <motion.li variants={item}>텍스트입니다?</motion.li>
        </motion.ul>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex items-center"
      >
      </motion.div>
    </ArrowSection>
  );
}
