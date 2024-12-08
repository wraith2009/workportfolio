"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const ConnectPage = () => {
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Description:", description);
    // Handle form submission logic here
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://res.cloudinary.com/dhrbg2jbi/image/upload/v1733658616/_TBH6478_rhgnka.jpg"
        alt="Background"
        fill
        className="absolute inset-0 object-cover z-0"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-5"></div>

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-center items-center min-h-screen px-6"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Animated Heading */}
        <motion.h1
          variants={itemVariants}
          className="text-6xl md:text-8xl font-bold text-white mb-12 text-center tracking-tight drop-shadow-lg"
        >
          Let&apos;s Connect
        </motion.h1>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          variants={itemVariants}
          className="w-full max-w-xl space-y-8"
        >
          {/* Email Field */}
          <motion.div variants={itemVariants}>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-5 py-4 bg-white/10 text-white 
                         text-lg rounded-xl backdrop-blur-sm 
                         border border-white/20
                         focus:outline-none 
                         focus:ring-2 focus:ring-white/50 
                         transition-all duration-300 
                         placeholder-white/50"
              placeholder="Enter your email"
            />
          </motion.div>

          {/* Description Field */}
          <motion.div variants={itemVariants}>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              rows={5}
              className="w-full px-5 py-4 bg-white/10 text-white 
                         text-lg rounded-xl backdrop-blur-sm 
                         border border-white/20
                         focus:outline-none 
                         focus:ring-2 focus:ring-white/50 
                         transition-all duration-300 
                         placeholder-white/50"
              placeholder="Tell us about yourself"
            ></textarea>
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            variants={itemVariants}
            className="w-full py-4 text-lg bg-white text-black 
                       font-semibold rounded-xl 
                       hover:bg-white/90 
                       transition-colors duration-300 
                       focus:outline-none 
                       focus:ring-2 focus:ring-black/50"
          >
            Send
          </motion.button>
        </motion.form>
      </motion.div>
    </div>
  );
};

export default ConnectPage;
