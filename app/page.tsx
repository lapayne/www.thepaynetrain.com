import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Quotes from "@/components/Quotes";
import Education from "@/components/Education";
import Work from "@/components/work";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex justify-center items-center flex-col overflow-clip mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Quotes />
        <Work />
        <Education />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
