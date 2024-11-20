"use client";
import Image from "next/image";
import myPhoto from "@/src/assets/photo.png";
import { motion } from "motion/react";

export default function BannerMotion() {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      //transition={{ duration: 0.3, delay: 1, ease: "linear" }}
      transition={{ duration: 0.5, delay: 1, ease: "easeInOut" }}
    >
      <Image width={400} src={myPhoto} alt="my-photo" />
    </motion.div>
  );
}
