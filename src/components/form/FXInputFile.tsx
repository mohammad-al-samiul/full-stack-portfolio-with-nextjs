/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { useFormContext } from "react-hook-form";

import { IProps } from "./FXInput";

interface IFileProps extends IProps {
  setImagePreviews: Dispatch<SetStateAction<[] | string[]>>;
}

export default function FXInputFile({
  label,
  name,
  setImagePreviews,
}: IFileProps) {
  const [imageFiles, setImageFiles] = useState<File[] | []>([]);

  const {
    register,
    setValue,
    formState: { errors },
  } = useFormContext();

  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);

    setValue(name, files); // Update form value with selected files

    // Generate previews for each file
    const newPreviews: string[] = files.map((file) =>
      // eslint-disable-next-line prettier/prettier
      URL.createObjectURL(file)
    );

    setImagePreviews(newPreviews);
  };

  //console.log("image", imageFile);

  return (
    <div className="w-full">
      <input
        multiple
        {...register(name)}
        className="hidden"
        id={name}
        type="file"
        onChange={handleFile}
      />
      <label
        className="flex h-14 w-full cursor-pointer items-center justify-center rounded-xl border-2 border-default-200 text-default-500 shadow-sm transition-all duration-100 hover:border-default-400"
        htmlFor={name}
      >
        {label}
      </label>
    </div>
  );
}
