"use client";
import React, { useState, JSX } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { cn } from "@/lib/utils";
import Link from "next/link";
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
      let direction = current! - scrollYProgress.getPrevious()!;

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
      className="bg-white dark:bg-slate-900 text-black dark:text-white border-neutral-200 dark:border-slate-800"
    >
      <span className="block sm:hidden">{navItem.icon}</span>
      {navItem.name}
    </Button>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 1, y: -100 }}
        animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className={cn(
          "flex max-w-fit backdrop-blur fixed top-10 inset-x-0 mx-auto border rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] px-10 py-5 border-white/[0.2] items-center justify-center space-x-4",
          className
        )}
      >
        {navItems.map((navItem: any, idx: number) => {
          const isScrollLink = isInternalScrollLink(navItem.link);

          if (isScrollLink) {
            // Case 1: Internal scroll link (#section-id)
            return (
              <button
                key={`link-${idx}`}
                className="!p-0"
                onClick={() => handleNavigation(navItem.link)}
              >
                <NavItemContent navItem={navItem} />
              </button>
            );
          } else {
            // Case 2: Full hyperlink (Next.js route or external URL)
            return (
              <Link
                key={`link-${idx}`}
                href={navItem.link}
                className="!p-0"
                target="_blank" // This opens the link in a new window/tab
              >
                <NavItemContent navItem={navItem} />
              </Link>
            );
          }
        })}
      </motion.div>
    </AnimatePresence>
  );
};
