"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function Greeting() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
        className="text-center text-2xl font-bold md:text-left md:text-4xl"
      >
        {t("greeting")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="text-center text-sm md:text-left md:text-lg"
      >
        {t("welcome")}
      </motion.p>
    </div>
  );
}
