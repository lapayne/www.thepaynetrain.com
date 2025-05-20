'use client';
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Quotes from "@/components/Quotes";
import Education from "@/components/Education";
import Work from "@/components/work";
import Projects from "@/components/Projects";
import Certs from "@/components/Certs";
import { useEffect } from "react";
import {analytics, logEvent} from "./firebase";

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined' && analytics) {
      // For a static HTML page, we might only want to log the initial page view.
      // Since there's no client-side routing in a statically exported app by default,
      // we can just log it once on component mount.
      logEvent(analytics, 'page_view', { page_path: window.location.pathname });

      // If you have any client-side navigation and want to track those,
      // you'd need a different approach, potentially not relying on Next.js's router.
      // For a truly static export, this initial log might be sufficient.
      console.log("Firebase Analytics page_view logged on initial load.");
    } else if (typeof window !== 'undefined' && !analytics) {
      console.warn("Firebase Analytics not initialized.");
    }
  }, []);

  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Quotes />
        <Skills />

        <Certs />

        <Work />
        <Education />
        <Projects />
        <Footer />
      </div>
    </main>
  );
}
