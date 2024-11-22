"use client";

import React from "react";

export default function DetailsCard({ project }: { project: any }) {
  return (
    <div
      key={project._id}
      className="relative bg-cover bg-no-repeat w-full sm:w-4/5 lg:w-3/4 min-h-[350px] sm:min-h-[500px] lg:min-h-[600px] shadow-[0px_0px_40px_#1f1f1f] group"
      style={{
        backgroundImage: `url(${project.imageUrl})`,
        // backgroundPosition: "",
        backgroundSize: "fill", // Ensures the image covers the whole div
      }}
    >
      <div className="absolute inset-0 bg-[#1f1f1f9a]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#343d68] to-[#343d687c] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100" />
      <div className="absolute text-white text-[80px] sm:text-[100px] font-bold hidden group-hover:block right-[-10px] top-[-40px]">
        {project.id}
      </div>
      <div className="absolute flex flex-col gap-5 text-white bottom-[15%] left-[8%] z-20 transform group-hover:scale-110 transition-transform duration-400 lg:w-1/2 sm:w-3/4 md:w-2/3">
        <h1 className="text-lg lg:text-4xl font-bold  lg:text-start lg:mb-3">
          {project.title}
        </h1>
        <p className="text-sm lg:text-lg">{project.description}</p>
        <div className="flex gap-3 flex-wrap">
          {project.techStack.map((tech: any, index: any) => (
            <span
              key={index}
              className="text-xs bg-white text-gray-800 rounded-full px-3 py-1"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Added Features List */}
        <div className="mt-4 hidden lg:block">
          <h2 className="text-md font-bold">Features:</h2>
          <ul className="list-disc pl-5 text-sm lg:text-lg">
            {project.features?.map((feature: string, index: number) => (
              <li key={index} className="text-white">
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex gap-4 flex-wrap">
          <a
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            href={project.github}
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          <a
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            href={project.live}
            rel="noopener noreferrer"
            target="_blank"
          >
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
}
