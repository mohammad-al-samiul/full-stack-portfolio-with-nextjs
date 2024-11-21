import Image from "next/image";

import nextjs from "@/src/assets/images/stack/NextJsCircle.png";
import bash from "@/src/assets/images/stack/Bash.svg";
import bootstrap from "@/src/assets/images/stack/Bootstrap.svg";
import css from "@/src/assets/images/stack/CSS.png";
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

import blob from "@/src/assets/images/userAsset/blob vector.png";

export default function TechStack() {
  const projects = [
    {
      id: 1,
      title: "Regal Dragon Restaurant",
      description:
        "An online food delivery and ordering platform designed to connect users with restaurants, allowing them to order food for delivery or pickup.",
      techStack: [
        html,
        css,
        javascript,
        tailwind,
        react,
        nodejs,
        express,
        mongodb,
      ],
      github:
        "https://github.com/mohammad-al-samiul/Regal-Dragon-Restaurant-Client",
      live: "https://regal-dragon-restaurant.netlify.app/",
    },
    {
      id: 2,
      title: "Doctor's Portal",
      description:
        "A web platform tailored for dentists, offering features designed to manage dental services and appointments efficiently.",
      techStack: [
        html,
        css,
        javascript,
        tailwind,
        react,
        nodejs,
        express,
        mongodb,
      ],
      github: "https://github.com/mohammad-al-samiul/doctor-portal-client",
      live: "https://doctors-porta1.netlify.app/",
    },
    {
      id: 3,
      title: "Genius Car",
      description:
        "Explore a diverse range of services for vehicle maintenance, repairs, and upgrades to ensure the best for your car.",
      techStack: [
        html,
        css,
        javascript,
        tailwind,
        react,
        nodejs,
        express,
        mongodb,
      ],
      github: "https://github.com/mohammad-al-samiul/genius-car-client",
      live: "https://genius-car-react.netlify.app/",
    },
  ];
  return (
    <div className="lg:flex lg:px-20 lg:py-20 mt-20 relative">
      <div className="lg:w-1/2 px-10">
        <h1 className="text-3xl text-accent">Me and My Tech Stack</h1>
        <p className="mt-4 text-justify">
          I’m a passionate full-stack web developer with 2 years of experience
          creating real-world applications using the MERN stack, TypeScript,
          Redux, and Next.js. I love building interactive, user-friendly, and
          efficient web solutions that solve real-world problems. My journey
          began with a curiosity for coding, and it quickly grew into a passion
          for web development. I specialize in creating responsive front-end
          designs, secure back-end systems, and scalable architectures. Using
          TypeScript helps me write clean, reliable code, while Redux ensures
          smooth state management. Next.js is my go-to framework for building
          fast and optimized web applications. I’m driven by the idea of making
          technology accessible and impactful for users and businesses.
          Collaboration, learning, and solving challenges are what keep me
          motivated to grow and contribute to the ever-evolving world of web
          development.
        </p>
      </div>
      <div className="lg:w-1/2 relative mt-20 px-10 lg:mt-0 lg:px-0">
        <div className="grid grid-cols-5 gap-6 lg:px-10 relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[-5] animate-blob">
            <Image src={blob} alt="Blob" width={200} height={200} />
          </div>
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={html}
            alt="HTML"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={css}
            alt="CSS"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={javascript}
            alt="JavaScript"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={react}
            alt="React"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={nodejs}
            alt="Node.js"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={nextjs}
            alt="Next.js"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={redux}
            alt="Redux"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={tailwind}
            alt="Tailwind CSS"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={bootstrap}
            alt="Bootstrap"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={bash}
            alt="Bash"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={express}
            alt="Express"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={github}
            alt="Github"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={git}
            alt="Git"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={mongodb}
            alt="MongoDB"
            width={80}
            height={80}
          />
          <Image
            className="w-20 transition-transform duration-500 hover:scale-125"
            src={typescript}
            alt="Typescript"
            width={80}
            height={80}
          />
        </div>
      </div>
    </div>
  );
}
