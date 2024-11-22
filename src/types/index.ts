import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface IUser {
  _id?: string;
  name?: string;
  email: string;
  password?: string;
  image?: string;
  phone?: number;
  address?: string;
  role: string;
}
