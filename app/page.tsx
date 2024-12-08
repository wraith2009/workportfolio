"use client";

import React from "react";
import { motion } from "framer-motion";
import { AlignJustify, Instagram, Twitter } from "lucide-react";
import WrestlerPortfolioSection from "@/components/about";
import { TimelineDemo } from "@/components/timelineDemo";

const WrestlingPortfolio = () => {
  return (
    <div className="min-h-screen  text-white">
      <motion.header
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="fixed w-full z-50"
      >
        <div className=" py-4 px-10">
          <div className="container mx-auto flex justify-between items-center">
            <div className="text-2xl font-bold text-orange-500">
              Wrestler Name
            </div>

            <div className="flex space-x-4 ">
              <Instagram className="text-white hover:text-orange-500 cursor-pointer" />
              <Twitter className="text-white hover:text-orange-500 cursor-pointer" />
            </div>
            <div className="md:hidden">
              <AlignJustify className="text-white" />
            </div>
          </div>
        </div>
      </motion.header>

      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative h-screen flex items-center justify-center"
        style={{
          backgroundImage:
            'url("https://res.cloudinary.com/dc2ytoxzg/image/upload/v1733644499/IMG_20231229_210356_payjcl.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-orange-500">
            Tarun
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Champion Wrestler | Multiple Title Holder | Inspirational Athlete
          </p>
        </motion.div>
      </motion.section>

      <WrestlerPortfolioSection />
      <TimelineDemo />
    </div>
  );
};

export default WrestlingPortfolio;
