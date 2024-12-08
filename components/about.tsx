/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Award, Zap, Shield, Target } from "lucide-react";

// Define the type for a highlight section
interface WrestlerHighlight {
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}

const WrestlerPortfolioSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const wrestlerHighlights: WrestlerHighlight[] = [
    {
      icon: <Award className="text-orange-600" size={32} />,
      title: "Championship Prowess",
      description:
        "Multiple national and international wrestling championships, demonstrating exceptional skill and determination.",
      image: "/images/wrestler1.jpg",
    },
    {
      icon: <Zap className="text-orange-600" size={32} />,
      title: "Technical Mastery",
      description:
        "Renowned for advanced wrestling techniques, combining strength, agility, and strategic thinking.",
      image: "/images/wrestler2.jpg",
    },
    {
      icon: <Shield className="text-orange-600" size={32} />,
      title: "Mental Resilience",
      description:
        "Exceptional mental toughness, overcoming challenges and maintaining peak performance under pressure.",
      image: "/images/wrestler3.jpg",
    },
    {
      icon: <Target className="text-orange-600" size={32} />,
      title: "Career Highlights",
      description:
        "Consistent top performer with a track record of breaking records and inspiring young athletes.",
      image: "/images/wrestler4.jpg",
    },
  ];

  // Background image parallax effect
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[400vh] overflow-x-hidden bg-gray-100"
    >
      {/* Fixed Background */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
        style={{
          backgroundImage: "url('/images/background.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: `translateY(${backgroundY})`,
        }}
      >
        {/* Centered Title */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl md:text-5xl font-bold text-white text-center z-10 drop-shadow-lg px-4"
        >
          Wrestler&apos;s Journey
        </motion.h1>

        {/* Card Containers */}
        <div className="relative h-full w-full">
          {wrestlerHighlights.map((highlight, index) => {
            // Calculate scroll-based positioning
            const progress = useTransform(
              scrollYProgress,
              [index * 0.25, (index + 1) * 0.25],
              [0, 1]
            );

            const y = useTransform(
              progress,
              [0, 1],
              [`${100 + index * 30}%`, `-${50 + index * 30}%`]
            );

            const scale = useTransform(progress, [0, 0.5, 1], [0.8, 1, 0.8]);

            const opacity = useTransform(
              progress,
              [0, 0.2, 0.8, 1],
              [0, 1, 1, 0]
            );

            return (
              <motion.div
                key={index}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl px-4"
                style={{
                  y,
                  scale,
                  opacity,
                }}
              >
                <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center w-full max-w-full">
                  {/* Image */}
                  <div className="relative w-full h-[300px] md:h-[500px]">
                    <Image
                      src={highlight.image}
                      alt={highlight.title}
                      fill
                      priority={index === 0}
                      className="object-cover rounded-2xl shadow-2xl"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>

                  {/* Text Content */}
                  <div className="bg-white/90 backdrop-blur-sm p-4 md:p-8 rounded-2xl shadow-xl w-full">
                    <div className="flex items-center mb-4 space-x-4">
                      {highlight.icon}
                      <h2 className="text-xl md:text-3xl font-bold text-orange-600">
                        {highlight.title}
                      </h2>
                    </div>
                    <p className="text-sm md:text-xl text-gray-700 leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WrestlerPortfolioSection;
