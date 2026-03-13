"use client";
import { cn } from "@/lib/utils";
import { projects } from "@/data";
import Link from "next/link"; // Import the Link component

const Projects = () => {
  return (
    <div className="w-full  font-sans md:px-10" id="projects">
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="heading text-purple dark:text-purple max-w-4xl bg-center text-center mb-8">
          Projects
        </h2>
      </div>

      <div className="relative max-w-7xl mx-auto pb-20 flex flex-row flex-wrap gap-8 justify-center">
        {projects.map(({ id, name, description, href, img }) => (
          <Link 
            key={id}
            href={href}
            className={cn(
              "group/card cursor-pointer overflow-hidden relative card h-[28rem] rounded-2xl shadow-2xl max-w-sm w-full flex-shrink-0 transition-all duration-500 hover:scale-[1.02] glassmorphism-dark",
              "bg-cover bg-center"
            )}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute inset-0 bg-black/60 transition-opacity duration-500 group-hover/card:opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
            
            <div className="relative h-full w-full p-6 flex flex-col justify-end">
              <div className="z-10 transform transition-transform duration-500 group-hover/card:-translate-y-2">
                <h3 className="font-heading font-bold text-2xl text-white mb-2">
                  {name}
                </h3>
                <p className="font-light text-sm text-gray-300 line-clamp-3">
                  {description}
                </p>
                <div className="mt-4 flex items-center text-purple text-sm font-medium opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                  View Project <span className="ml-2">→</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
