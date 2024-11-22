/* eslint-disable prettier/prettier */
"use server";

import axiosInstance from "@/src/config/axios.config";
import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

interface AuthResponse {
  success: boolean;
  data?: {
    accessToken: string;
    refreshToken: string;
  };
  message?: string;
}

export const loginUser = async (userData: FieldValues) => {
  try {
    const { data } = await axiosInstance.post<AuthResponse>(
      "/auth/login",
      userData
    );

    if (data.success && data.data) {
      cookies().set("accessToken", data?.data?.accessToken);
      cookies().set("refreshToken", data?.data?.refreshToken);
    }

    return data;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const logout = () => {
  cookies().delete("accessToken");
  cookies().delete("refreshToken");
};

export const getCurrentUser = async () => {
  const accessToken = cookies().get("accessToken")?.value;
  //console.log(accessToken);
  let decodedToken = null;

  if (accessToken) {
    decodedToken = await jwtDecode(accessToken);

    //console.log("decode", decodedToken);

    return {
      email: decodedToken.email,
      role: decodedToken.role,
      image: decodedToken.image,
    };
  }

  return decodedToken;
};
