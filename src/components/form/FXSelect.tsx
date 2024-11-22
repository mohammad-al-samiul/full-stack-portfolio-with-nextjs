import { useFormContext } from "react-hook-form";

import { IProps } from "./FXInput";
import { Select, SelectItem } from "@nextui-org/react";

interface ISelectProps extends IProps {
  options: {
    key: string;
    label: string;
  }[];
  disabled?: boolean;
}

export default function FXSelect({
  options,
  label,
  name,
  disabled,
}: ISelectProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <Select
      {...register(name)}
      className="min-w-full sm:min-w-[225px]"
      items={options}
      label={label}
      variant="bordered"
      isDisabled={disabled}
      // placeholder="Select a District"
    >
      {(options) => <SelectItem key={options.key}>{options.label}</SelectItem>}
    </Select>
  );
}
