import React from "react";
import NextLink from "next/link";
import { Image } from "@nextui-org/image";

export default function Card({ project }: { project: any }) {
  return (
    <div className="h-[420px] lg:max-w-sm border border-gray-200 rounded-lg shadow  dark:border-gray-800">
      <NextLink href={`projects/${project._id}`}>
        <Image
          alt={project.title}
          className="rounded"
          height={220}
          src={project.imageUrl}
          width={500}
        />
      </NextLink>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-default-800 ">
          {project.title}
        </h5>

        <p className="mb-3 font-normal text-default-">{project.description}</p>
        <NextLink
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-500 rounded-lg hover:bg-teal-600 "
          href={`projects/${project._id}`}
        >
          View Project
          <svg
            aria-hidden="true"
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            fill="none"
            viewBox="0 0 14 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 5h12m0 0L9 1m4 4L9 9"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </NextLink>
      </div>
    </div>
  );
}
