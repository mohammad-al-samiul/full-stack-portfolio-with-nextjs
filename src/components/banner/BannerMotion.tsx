"use client";
import Image from "next/image";
import myPhoto from "@/src/assets/photo.png";
import { motion } from "motion/react";

export default function BannerMotion() {
  return (
    <div className="relative w-[298px] h-[298px] xl:w-[498px] xl:h-[498px]">
      {/* Photo */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7, ease: "easeIn" }}
        className="absolute inset-0 w-full h-full rounded-full overflow-hidden"
      >
        <Image
          className="w-full h-full object-cover"
          src={myPhoto}
          alt="my-photo"
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
          cx="253"
          cy="253"
          r="250"
          stroke="#0d9488"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ strokeDasharray: "24 10 0 0" }}
          animate={{
            strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
            rotate: [120, 360],
          }}
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
