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
          <Link // Use Link to make the entire card clickable
            key={id}
            href={href}
            className={cn(
              "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm item flex-shrink-0",
              "bg-cover"
            )}
            style={{ backgroundImage: `url(${img})` }}
          >
            <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
            <div className="flex flex-row items-center space-x-4 z-10">
              <div className="flex flex-col">
                <div className="font-normal text-base text-gray-50 relative z-10">
                  {name}
                </div>
              </div>
            </div>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10"></h1>
              <div className="font-normal text-sm text-gray-50 relative z-10 my-4">
                {description}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
