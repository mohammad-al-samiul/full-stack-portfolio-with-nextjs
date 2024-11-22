"use client";
import Image from "next/image";
import { motion } from "motion/react";

import myPhoto from "../../../public/favicon.ico";

export default function BannerMotion() {
  return (
    <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
      {/* Photo */}
      <motion.div
        className="absolute inset-0 w-full h-full rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeIn" }}
        whileInView={{ opacity: 1 }}
      >
        <Image
          alt="my-photo"
          className="w-full h-full object-cover"
          src={myPhoto}
        />
      </motion.div>

      {/* Circle */}
      <motion.svg
        className="absolute inset-0 w-full h-full"
        fill="transparent"
        viewBox="0 0 506 506"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.circle
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
          cx="253"
          cy="253"
          initial={{ strokeDasharray: "24 10 0 0" }}
          r="250"
          stroke="#0d9488"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </motion.svg>
    </div>
  );
}
