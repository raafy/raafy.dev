"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

export function generateStaticMetadataMetadata() {}

export default function AboutMe() {
  const t = useTranslations("AboutPage");

  return (
    <div className="flex w-full flex-grow select-none flex-col items-center justify-center gap-y-6">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-6 w-full text-2xl font-bold md:text-3xl"
      >
        {t("heading")}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        {t("content1")}
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        {t("content2")}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 3 }}
        className="mt-6"
      >
        <a
          href="/docs/CV.pdf"
          target="_blank"
          className="rounded-md bg-[#000000] px-4 py-2 font-bold text-[#ffffff] hover:opacity-80 dark:bg-[#ffffff] dark:text-[#000000]"
        >
          Curriculum Vitae
        </a>
      </motion.div>
    </div>
  );
}
