"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function DesignationAnimation() {
  const [textColor, setTextColor] = useState("text-primary");
  return (
    <TypeAnimation
      sequence={[
        " Coder",
        1000,
        () => setTextColor("darksalmon"),

        " Software Developer",
        1000,
        () => setTextColor("deeppink"),
        " Full Stack Developer",
        1000,
        () => setTextColor("darkviolet"),
        " Frontend Developer",
        1000,
        () => setTextColor("dodgerblue"),
      ]}
      speed={50}
      style={{ fontSize: "46px" }}
      repeat={Infinity}
      wrapper="span"
      cursor={true}
    />
  );
}
