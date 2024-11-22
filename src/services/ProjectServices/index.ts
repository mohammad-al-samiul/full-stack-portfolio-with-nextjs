"use server";

import axiosInstance from "@/src/config/axios.config";
import { revalidateTag } from "next/cache";

const fetchOption = {
  next: {
    tags: ["projects"],
  },
};
export const getProjects = async () => {
  const res = await fetch(`http://localhost:5000/api/projects`, fetchOption);

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
