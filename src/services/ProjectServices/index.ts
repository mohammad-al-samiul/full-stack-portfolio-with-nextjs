"use server";

import { revalidateTag } from "next/cache";

import axiosInstance from "@/src/config/axios.config";

const fetchOption = {
  next: {
    tags: ["projects"],
  },
};

export const getProjects = async () => {
  const res = await fetch(
    `https://portfolio-api-nine-rose.vercel.app/api/projects`,
    fetchOption,
  );

  return res.json();
};

export const getOneProjects = async (id: string) => {
  const res = await fetch(
    `https://portfolio-api-nine-rose.vercel.app/api/projects/${id}`,
    fetchOption,
  );

  return res.json();
};

export const createProduct = async (projectData: FormData) => {
  try {
    const { data } = await axiosInstance.post("/projects", projectData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    revalidateTag("projects");

    return data;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
