import { useMutation } from "@tanstack/react-query";
import { FieldValues, SubmitHandler } from "react-hook-form";
import { toast } from "sonner";

import { createBlog } from "../services/BlogService";

export const useCreateBlogPost = () => {
  return useMutation({
    mutationKey: ["CREATE_POST"],
    mutationFn: async (postData: SubmitHandler<FieldValues>) =>
      await createBlog(postData),
    onSuccess: () => {
      toast.success("Blog created Successfully");
    },
    onError: (error: any) => {
      toast.error(error.message);
    },
  });
};
