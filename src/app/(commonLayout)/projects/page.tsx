import Image from "next/image";
import { FaGithub, FaLink } from "react-icons/fa";
import express from "@/src/assets/images/stack/Express.png";
import github from "@/src/assets/images/stack/Github.svg";
import html from "@/src/assets/images/stack/HTML.png";
import javascript from "@/src/assets/images/stack/Javascript.svg";
import mongodb from "@/src/assets/images/stack/MongoDB.svg";
import nodejs from "@/src/assets/images/stack/NodeJs.svg";
import react from "@/src/assets/images/stack/React.png";
import redux from "@/src/assets/images/stack/Redux.svg";
import tailwind from "@/src/assets/images/stack/Tailwind.png";
import typescript from "@/src/assets/images/stack/Typescript.svg";
import vercel from "@/src/assets/images/stack/Vercel.svg";
import git from "@/src/assets/images/stack/Git.svg";
import project1 from "@/src/assets/images/project/regal-dragon.png";
import Container from "@/src/components/Container";

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Regal Dragon Restaurant",
      description:
        "An online food delivery and ordering platform designed to connect users with restaurants, allowing them to order food for delivery or pickup.",
      techStack: [
        "JavaScript",
        "Tailwind",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      github:
        "https://github.com/mohammad-al-samiul/Regal-Dragon-Restaurant-Client",
      live: "https://regal-dragon-restaurant.netlify.app/",
      imageUrl: "regal-dragon.png",
    },
    {
      id: 2,
      title: "Doctor's Portal",
      description:
        "A web platform tailored for dentists, offering features designed to manage dental services and appointments efficiently.",
      techStack: [
        "JavaScript",
        "Tailwind",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      github: "https://github.com/mohammad-al-samiul/doctor-portal-client",
      live: "https://doctors-porta1.netlify.app/",
      imageUrl: "doctors-portal.png",
    },
    {
      id: 3,
      title: "Genius Car",
      description:
        "Explore a diverse range of services for vehicle maintenance, repairs, and upgrades to ensure the best for your car.",
      techStack: [
        "JavaScript",
        "Tailwind",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
      ],
      github: "https://github.com/mohammad-al-samiul/genius-car-client",
      live: "https://genius-car-react.netlify.app/",
      imageUrl: "genius-car.png",
    },
  ];
  return (
    <>
      <div className="mt-8 lg:mt-20 px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-accent">
          Projects
        </h2>
        <div className="w-full flex flex-col gap-12 justify-center items-center mt-8 lg:mt-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative bg-cover bg-no-repeat w-full sm:w-4/5 lg:w-3/4 min-h-[350px] sm:min-h-[500px] lg:min-h-[600px] shadow-[0px_0px_40px_#1f1f1f] group"
              style={{
                backgroundImage: `url(${project.imageUrl})`,
                backgroundPosition: "center",
                backgroundSize: "cover", // Ensures the image covers the whole div
              }}
            >
              <div className="absolute inset-0 bg-[#1f1f1f9a]"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-[#343d68] to-[#343d687c] scale-x-0 origin-left transition-transform duration-400 group-hover:scale-x-100"></div>
              <div className="absolute text-white text-[80px] sm:text-[100px] font-bold hidden group-hover:block right-[-10px] top-[-40px]">
                {project.id}
              </div>
              <div className="absolute flex flex-col gap-5 text-white bottom-[23%] left-[8%] z-20 transform group-hover:scale-110 transition-transform duration-400 lg:w-1/2 sm:w-3/4 md:w-2/3">
                <h1 className="text-lg lg:text-4xl font-bold text-center lg:text-start lg:mb-3">
                  {project.title}
                </h1>
                <p className="text-sm lg:text-lg">{project.description}</p>
                <div className="flex gap-3 flex-wrap">
                  {project.techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-white text-gray-800 rounded-full px-3 py-1"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="mt-4 flex gap-4 flex-wrap">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600"
                  >
                    Read More
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
                  >
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
