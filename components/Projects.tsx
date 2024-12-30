"use client";
import { cn } from "@/lib/utils";
import { projects } from "@/data";

const Projects = () => {

  return (
   

    
    <div className=" group/card container">
      
      {projects.map(({id,name,description,href,img}) => (
        <div 
  key={id}
  className={cn(
    'cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto item',
    'bg-cover'
  )}
  style={{ backgroundImage: `url(${img})` }}
>
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
         
          <div className="flex flex-col">
            <p className="font-normal text-base text-gray-50 relative z-10">
             {name}
            </p>
            <p className="text-sm text-gray-400">2 min read</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
            
          </h1>
          <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
            {description}
          </p>
        </div>
      </div>
    ))}
    </div>
  );
};

export default Projects;
