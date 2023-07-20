"use client";

import Section, { SectionProps } from "@/components/Section";
import { motion } from "framer-motion";

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
    <Section
      className="grid grid-cols-2 p-16 gap-4 text-black text-lg"
      {...props}
    >
      <div className="bg-blue-300"></div>
      <div>
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

      <div>
        <motion.ul>
          <h4 className="font-bold text-4xl mb-2">HYOI</h4>
          <li>텍스트입니다.</li>
          <li>텍스트입니다.</li>
          <li>텍스트입니다.</li>
          <li>텍스트입니다.</li>
          <li>텍스트입니다.</li>
          <li>텍스트입니다.</li>
          <li>텍스트입니다.</li>
          <li>텍스트입니다.</li>
          <li>텍스트입니다.</li>
        </motion.ul>
      </div>
      <div className="bg-pink-200"></div>
    </Section>
  );
}
