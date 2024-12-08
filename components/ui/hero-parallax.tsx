"use client";
import React from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export const HeroParallax = ({
  highlights,
}: {
  highlights: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = highlights.slice(0, 3);
  const secondRow = highlights.slice(3, 6);
  const thirdRow = highlights.slice(6, 9);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="h-[300vh] py-40 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((highlight) => (
            <HighlightCard
              highlight={highlight}
              translate={translateX}
              key={highlight.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20">
          {secondRow.map((highlight) => (
            <HighlightCard
              highlight={highlight}
              translate={translateXReverse}
              key={highlight.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((highlight) => (
            <HighlightCard
              highlight={highlight}
              translate={translateX}
              key={highlight.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        Tarun Yadav <br />
        <p className="text-orange-500">
        Ju-Jitsu Champion
        </p>
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Representing India at the Asian Games 2022, Tarun Yadav is an 8-time
        Gold Medalist and the winner of the prestigious ADCC Submission Fighting
        World Championship. Explore his remarkable journey and achievements.
      </p>
    </div>
  );
};

export const HighlightCard = ({
  highlight,
  translate,
}: {
  highlight: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={highlight.title}
      className="group/highlight h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={highlight.link}
        className="block group-hover/highlight:shadow-2xl"
      >
        <Image
          src={highlight.thumbnail}
          height="600"
          width="600"
          className="object-cover object-center absolute h-full w-full inset-0"
          alt={highlight.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/highlight:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/highlight:opacity-100 text-white">
        {highlight.title}
      </h2>
    </motion.div>
  );
};
