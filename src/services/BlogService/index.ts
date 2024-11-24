"use server";

import { FieldValues, SubmitHandler } from "react-hook-form";

import axiosInstance from "@/src/config/axios.config";

export const createBlog = async (postData: SubmitHandler<FieldValues>) => {
  try {
    const { data } = await axiosInstance.post("/blogs", postData);
    console.log(data);
  } catch (error: any) {
    throw new Error(error);
  }
};
