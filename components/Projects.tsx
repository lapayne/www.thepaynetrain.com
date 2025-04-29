"use client";
import { cn } from "@/lib/utils";
import { projects } from "@/data";

const Projects = () => {
  return (
    <div id="projects" className=" group/card container">
     
        <h2 className="heading text-purple dark:text-purple max-w-4xl">
          Projects
        </h2>

      {projects.map(({ id, name, description, href, img }) => (
        <div
          key={id}
          className={cn(
            "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto item",
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
          <a href={href}>
            <div className="text content">
              <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10"></h1>
              <div className="font-normal text-sm text-gray-50 relative z-10 my-4">
                {description}
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
