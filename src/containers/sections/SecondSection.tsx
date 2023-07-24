'use client';

import IntroduceParagraph from '@/components/Paragraph/IntroduceParagraph';
import { SectionProps } from '@/components/Section';
import ArrowSection from '@/components/Section/ArrowSection';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function SecondSection(props: SectionProps) {
  return (
    <ArrowSection
      className="grid grid-cols-2 p-16 gap-x-4 text-black text-xl h-auto"
      nextId="3"
      circle
      {...props}
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        whileHover={{ x: -500 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex items-center"
      ></motion.div>

      <IntroduceParagraph title="PONE" youtube="https://youtu.be/cTeNxrgBrw8" />

      <IntroduceParagraph
        title="HYOI"
        className="items-end"
        youtube="https://youtu.be/cTeNxrgBrw8"
      />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
        className="h-screen flex items-center"
      ></motion.div>
    </ArrowSection>
  );
}
