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
import {analytics, logEvent} from "firebase";
export default function Home() {

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const analytics = getAnalytics();

      const handleRouteChange = (url) => {
        logEvent(analytics, 'page_view', { page_path: url });
      };
    }
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
