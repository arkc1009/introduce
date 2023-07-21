"use client";

import { motion } from "framer-motion";
import { nanoid } from "nanoid";
import { useMemo } from "react";
import { ClassNameValue, twJoin, twMerge } from "tailwind-merge";
import YoutubeIframe from "../Iframe/YoutubeIframe";
import { GrYoutube, GrTwitter, GrSoundcloud } from "react-icons/gr";

type Sns = { youtube: string; twitter: string; soundcloud: string };

interface IntroduceParagraphProps {
  title: string;
  className?: ClassNameValue;
  youtube?: string;
  sns?: Sns;
}

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.4,
      duration: 0.4,
    },
  },
};

const titleVariants = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

const itemVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0 },
};

export default function IntroduceParagraph({
  title,
  className,
  youtube,
  sns,
  ...rest
}: IntroduceParagraphProps) {
  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      className={twMerge("flex flex-col justify-center", className)}
      {...rest}
    >
      <motion.div
        variants={titleVariants}
        initial="hidden"
        whileInView="show"
        className="min-w-[250px] w-max mb-2 grid grid-cols-2"
      >
        <h4 className="font-extrabold text-8xl mb-1 col-[1_/_3]">{title}</h4>
        <motion.ul
          variants={containerVariants}
          className="flex gap-4 items-center"
        >
          <motion.li
            variants={itemVariants}
            className="text-red-500 cursor-pointer hover:!opacity-60"
          >
            <a href={sns?.youtube}>
              <GrYoutube size={28} />
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="text-blue-500 cursor-pointer hover:!opacity-60"
          >
            <a href={sns?.twitter}>
              <GrTwitter size={24} />
            </a>
          </motion.li>
          <motion.li
            variants={itemVariants}
            className="text-orange-400 cursor-pointer hover:!opacity-60"
          >
            <a href={sns?.soundcloud}>
              <GrSoundcloud size={30} />
            </a>
          </motion.li>
        </motion.ul>

        <motion.a
          className={twJoin(
            "font-bold opacity-75 cursor-pointer text-end",
            "hover:underline hover:opacity-50"
          )}
          initial={{ opacity: 0, y: -10 }}
          whileInView={{
            opacity: 0.75,
            y: 0,
            transition: {
              delay: 0.8,
            },
          }}
          whileHover={{ x: -16 }}
        >
          @handleId
        </motion.a>
      </motion.div>

      {youtube ? (
        <YoutubeIframe src={youtube} width="80%" height="450" title="TEST" />
      ) : null}
    </motion.ul>
  );
}
