"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  date: string;
  content: React.ReactNode;
}

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full font-sans md:px-10" ref={containerRef}>
      <div className="max-w-7xl mx-auto py-10 md:py-20 px-6 md:px-8 lg:px-10 ">
        <h2 className="heading mb-4 text-purple dark:text-purple max-w-4xl">
          My professional journey
        </h2>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div
            key={item.date}
            className="flex justify-start pt-10 md:pt-40 md:gap-10"
          >
            <div className="sticky flex flex-col md:flex-row z-40 items-center top-20 sm:top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div className="h-8 w-8 sm:h-10 sm:w-10 absolute left-1 md:left-3 rounded-full bg-black/90 flex items-center justify-center backdrop-blur-2xl border border-white/40">
                <div className="h-3 w-3 sm:h-4 sm:w-4 rounded-full bg-cyan-400 dark:bg-purple border border-white/50 shadow-[0_0_15px_rgba(203,172,249,0.9)]" />
              </div>
              <h3 className="hidden md:block text-xl md:pl-20 md:text-2xl font-heading font-bold text-cyan-400 dark:text-purple">
                {item.title} <br /> <span className="text-sm font-normal text-neutral-400">{item.date}</span>
              </h3>
            </div>

            <div className="relative pl-10 pr-2 md:pl-4 w-full">
              <h3 className="md:hidden block text-lg mb-2 text-left font-heading font-bold text-cyan-400 dark:text-purple">
                {item.title} <br /> <span className="text-[10px] font-normal text-neutral-400">{item.date}</span>
              </h3>
              <div className="text-zinc-200 dark:text-zinc-100 text-xs sm:text-sm md:text-base leading-relaxed">
                {item.content}
              </div>
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-5 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.3)_10%,rgba(255,255,255,0.3)_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
