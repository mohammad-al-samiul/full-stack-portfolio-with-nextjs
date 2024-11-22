"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function DesignationAnimation() {
  const [textColor, setTextColor] = useState("text-[deeppink]");

  // Define the texts and their corresponding colors
  const textColorMap = [
    { text: "Coder", color: "text-[deeppink]" },
    { text: "Software Developer", color: "text-[deeppink]" },
    { text: "Full Stack Developer", color: "text-[dodgerblue]" },
    { text: "Frontend Developer", color: "text-[dodgerblue]" },
  ];

  // Generate the sequence dynamically
  const sequence = textColorMap.flatMap(({ text, color }) => [
    text,
    1000,
    () => setTextColor(color),
  ]);

  return (
    <div className={`text-4xl ${textColor}`} style={{ fontSize: "46px" }}>
      <TypeAnimation
        cursor={true}
        repeat={Infinity}
        sequence={sequence}
        speed={50}
        wrapper="span"
      />
    </div>
  );
}
