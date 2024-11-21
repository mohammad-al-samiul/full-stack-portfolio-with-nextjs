import NextLink from "next/link";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Container from "../../Container";

export default function Footer() {
  return (
    <Container>
      <div className="mt-20 w-full flex items-center justify-center text-default-800 px-4">
        <div className=" w-full px-4 flex flex-col justify-center">
          <div className="w-full text-3xl lg:text-6xl font-bold mt-6">
            <h1 className="w-full md:w-2/3">Get in Touch</h1>
          </div>
          <div className="flex mt-8 flex-col md:flex-row md:justify-between items-start ">
            <p className="w-full md:w-2/3   text-justify">
              I'm always open to new opportunities, collaboration, and
              connecting with fellow developers. Feel free to reach out to me
              via Email or connect with me on LinkedIn
            </p>
            <div className="lg:w-[20%] w-full flex justify-center mt-3 lg:mt-0 lg:pt-0 ">
              <NextLink
                href="/contact"
                className="bg-accent justify-center text-center rounded-lg shadow px-10 py-3 flex items-center text-white"
              >
                Contact US
              </NextLink>
            </div>
          </div>
          <div className="flex flex-col">
            <div className=" flex mt-4 lg:mt-24  flex-row justify-around lg:justify-between">
              <NextLink
                href="/"
                className="hidden md:block cursor-pointer font-bold  font-stylish-one uppercase text-xl"
              >
                Al Samiul
              </NextLink>
              <NextLink
                href="/about"
                className=" md:block cursor-pointer  uppercase"
              >
                About
              </NextLink>
              <NextLink
                href="/skills"
                className=" md:block cursor-pointer   uppercase"
              >
                Skill
              </NextLink>
              <NextLink
                href="/projects"
                className=" md:block cursor-pointer uppercase"
              >
                Project
              </NextLink>
              <NextLink
                href="/contact"
                className=" md:block cursor-pointer uppercase"
              >
                Contact
              </NextLink>
            </div>
            <div className=" flex gap-4 justify-center lg:items-start mt-4 lg:mt-6">
              <a
                target="_blank"
                href="https://www.facebook.com/alsamiul1996"
                rel="noreferrer"
              >
                <FaFacebook className="text-3xl hover:text-accent " />
              </a>

              <a
                target="_blank"
                href="https://github.com/mohammad-al-samiul"
                rel="noreferrer"
              >
                <FaGithub className="text-3xl hover:text-accent transition-all duration-600" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/al-samiul/"
                rel="noreferrer"
              >
                <FaLinkedinIn className="text-3xl hover:text-accent transition-all duration-600" />
              </a>
            </div>
            <hr className="border-gray-600 mt-7" />
            <p className="w-full text-center my-12 ">
              Copyright © 2023 Al Samiul Creative
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}
