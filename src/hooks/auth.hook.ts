import { FieldValues } from "react-hook-form";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

import { loginUser } from "../services/AuthService";

export const useUserLogin = () => {
  return useMutation<any, Error, FieldValues>({
    mutationKey: ["USER_LOGIN"],
    mutationFn: async (userData) => await loginUser(userData),
    onSuccess: () => {
      toast.success("User Login Successfull");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
