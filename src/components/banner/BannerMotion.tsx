"use client";
import Image from "next/image";
import myPhoto from "@/src/assets/photo.png";
import { motion } from "motion/react";

export default function BannerMotion() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      animate={{ y: -20 }}
      transition={{ duration: 0.5, delay: 0.7, ease: "easeIn" }}
    >
      <Image width={400} src={myPhoto} alt="my-photo" />
    </motion.div>
  );
}
