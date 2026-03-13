"use client";
import { Spotlight } from "./ui/Spotlight";
import { TypewriterEffectSmooth } from "./ui/TypewriterEffect";
import { motion } from "framer-motion";

const Hero = () => {
  const words = [
    {
      text: "I",
    },
    {
      text: "Build",
    },
    {
      text: "High-performance",
    },

    {
      text: "Teams",
      className: "text-purple-600 dark:text-purple-600",
    },
  ];

  const wordsNormal = [
    { text: "I" },
    { text: "Build" },
    { text: "High-performance" },
  ];

  return (
    <div id="home" className="pb-20 pt-48 sm:pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="top-10 left-full h-[80vh]" fill="purple" />
        <Spotlight
          className="top-28 left-80 h-[80vh] w-[50vw]"
          fill="#87CEEB"
        />
        <Spotlight
          className="absolute -top-20 left-1/2 transform -translate-x-1/2 h-[40vh] w-[30vw]"
          fill="white"
        />
      </div>

      {/* *** MODIFIED BACKGROUND CONTAINER: ***
        1. Changed 'bg-white' to 'bg-black-100' (your dark color) 
        2. Changed the light mask color to match the dark background
      */}
      <div className="h-screen w-full glassmorphism-dark bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black-100 dark:bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center"
        >
          <motion.img
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            src="/avatar.jpg"
            alt="profile-pic"
            className="rounded-full w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 border-4 border-purple/30 mb-5 shadow-[0_0_30px_rgba(203,172,249,0.2)] object-cover"
          />
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="uppercase tracking-widest text-sm md:text-xl text-center text-blue-100 max-w-80 font-heading font-medium"
          >
            Lee Payne
          </motion.h2>
          <TypewriterEffectSmooth
            className="text-center md:text-5xl lg:text-6xl my-5"
            words={words}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl font-light text-neutral-300 px-4"
          >
            Hi, I&apos;m Lee, an experienced manager in building high
            performance teams and operational excellence.
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
