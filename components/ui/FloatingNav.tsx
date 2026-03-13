"use client";
import React, { useState, JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "./MovingBorder";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true); // Show on scroll up
        } else {
          setVisible(false); // Hide on scroll down
        }
      }
    }
  });

  // Reinstated function to handle smooth scrolling for internal section links
  const handleNavigation = (link: string) => {
    // Only execute smooth scroll if it's an internal section link
    if (link.startsWith("#")) {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  // Function to determine if a link is an internal section link
  const isInternalScrollLink = (link: string) => link.startsWith("#");

  const NavItemContent = ({ navItem }: { navItem: any }) => (
    <Button
      borderRadius="1.75rem"
      className="bg-black/80 dark:bg-black/90 text-white border-white/20 backdrop-blur-2xl hover:bg-white/10 transition-all duration-300 h-12 w-full flex flex-col items-center justify-center p-0"
    >
      <span className="block text-lg">{navItem.icon}</span>
      <span className="hidden sm:block text-sm font-medium">{navItem.name}</span>
      <span className="block sm:hidden text-[8px] font-bold uppercase tracking-widest mt-0.5">{navItem.name.substring(0, 3)}</span>
    </Button>
  );

  return (
    <>
      {/* Desktop Navigation */}
      <AnimatePresence mode="wait">
        <motion.div
          initial={{ opacity: 1, y: -100 }}
          animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "hidden sm:flex max-w-fit fixed top-10 inset-x-0 mx-auto z-[5000] px-10 py-5 items-center justify-center space-x-4 glassmorphism-dark rounded-xl",
            className
          )}
        >
          {navItems.map((navItem: any, idx: number) => {
            const isScrollLink = isInternalScrollLink(navItem.link);
            const Content = (
              <Button
                borderRadius="1.75rem"
                className="bg-black/20 text-white border-white/20 backdrop-blur-md hover:bg-white/10 transition-all duration-300 px-4 py-2"
              >
                <span className="text-sm font-medium">{navItem.name}</span>
              </Button>
            );

            if (isScrollLink) {
              return (
                <button
                  key={`desktop-link-${idx}`}
                  className="!p-0"
                  onClick={() => handleNavigation(navItem.link)}
                >
                  {Content}
                </button>
              );
            } else {
              return (
                <Link
                  key={`desktop-link-${idx}`}
                  href={navItem.link}
                  className="!p-0"
                  target="_blank"
                >
                  {Content}
                </Link>
              );
            }
          })}
        </motion.div>
      </AnimatePresence>

      {/* Mobile Bottom Navigation */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-[5000] px-4 pb-6 pt-2 bg-gradient-to-t from-black to-transparent pointer-events-none">
        <div className="max-w-md mx-auto grid grid-cols-4 gap-2 glassmorphism-dark rounded-2xl p-2 pointer-events-auto border border-white/20">
          {navItems.map((navItem: any, idx: number) => {
            const isScrollLink = isInternalScrollLink(navItem.link);
            const content = (
              <div className="flex flex-col items-center justify-center py-2 text-white hover:text-purple transition-colors">
                <span className="text-xl mb-1">{navItem.icon}</span>
                <span className="text-[8px] font-bold uppercase tracking-widest">{navItem.name.substring(0, 3)}</span>
              </div>
            );

            if (isScrollLink) {
              return (
                <button
                  key={`mobile-link-${idx}`}
                  onClick={() => handleNavigation(navItem.link)}
                  className="flex flex-col items-center justify-center h-full w-full"
                >
                  {content}
                </button>
              );
            } else {
              return (
                <Link
                  key={`mobile-link-${idx}`}
                  href={navItem.link}
                  target="_blank"
                  className="flex flex-col items-center justify-center h-full w-full"
                >
                  {content}
                </Link>
              );
            }
          })}
        </div>
      </div>
    </>
  );
};
