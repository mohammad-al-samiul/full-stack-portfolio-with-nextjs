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

  return (
    <>
      <div className="mt-3 lg:mt-20 px-4">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-accent">
          Projects
        </h2>
        <div className="w-full lg:flex  gap-12 justify-center items-center mt-8 lg:mt-8">
          {projects.map((project: any) => (
            <Card project={project} key={project._id} />
          ))}
        </div>
      </div>
    </>
  );
}
