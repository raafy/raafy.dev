"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ProfilePicture() {
  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1 }}
      className="rounded-full shadow-inner"
    >
      <Image
        priority
        src="/images/profile.webp"
        alt="Profile Picture"
        width={777}
        height={777}
        className="h-[250px] w-[250px] rounded-full"
      />
    </motion.div>
  );
}
