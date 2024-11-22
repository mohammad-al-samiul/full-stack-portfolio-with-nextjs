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
import { Link } from "@nextui-org/link";
import NextLink from "next/link";
import DetailsCard from "@/src/components/UI/DetailsCard";
import Card from "@/src/components/UI/Card";
import { getProjects } from "@/src/services/ProjectServices";

export default async function Projects() {
  const { data: projects } = await getProjects();
  // const projects = [
  //   {
  //     id: "1",
  //     title: "Regal Dragon Restaurant",
  //     description:
  //       "An online food delivery and ordering platform designed to connect users with restaurants, allowing them to order food for delivery or pickup.",
  //     techStack: [
  //       "JavaScript",
  //       "Tailwind",
  //       "React",
  //       "Node.js",
  //       "Express",
  //       "MongoDB",
  //     ],
  //     github:
  //       "https://github.com/mohammad-al-samiul/Regal-Dragon-Restaurant-Client",
  //     live: "https://regal-dragon-restaurant.netlify.app/",
  //     imageUrl: "regal-dragon.png",
  //   },
  //   {
  //     id: "2",
  //     title: "Doctor's Portal",
  //     description:
  //       "A web platform tailored for dentists, offering features designed to manage dental services and appointments efficiently.",
  //     techStack: [
  //       "JavaScript",
  //       "Tailwind",
  //       "React",
  //       "Node.js",
  //       "Express",
  //       "MongoDB",
  //     ],
  //     github: "https://github.com/mohammad-al-samiul/doctor-portal-client",
  //     live: "https://doctors-porta1.netlify.app/",
  //     imageUrl: "doctors-portal.png",
  //   },
  //   {
  //     projectId: "3",
  //     title: "Genius Car",
  //     description:
  //       "Explore a diverse range of services for vehicle maintenance, repairs, and upgrades to ensure the best for your car.",
  //     techStack: [
  //       "JavaScript",
  //       "Tailwind",
  //       "React",
  //       "Node.js",
  //       "Express",
  //       "MongoDB",
  //     ],
  //     github: "https://github.com/mohammad-al-samiul/genius-car-client",
  //     live: "https://genius-car-react.netlify.app/",
  //     imageUrl: "genius-car.png",
  //   },
  // ];
  return (
    <>
      <div className="mt-8 lg:mt-20 px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-accent">
          Projects
        </h2>
        <div className="w-full flex  gap-12 justify-center items-center mt-8 lg:mt-20">
          {projects.map((project: any) => (
            <Card project={project} key={project.id} />
          ))}
        </div>
      </div>
    </>
  );
}
