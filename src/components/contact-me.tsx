"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useState } from "react";
import Loader from "./loader";
import clsx from "clsx";

export default function ContactMe() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [loading, setIsLoading] = useState<boolean>(false);
  const t = useTranslations("ContactPage");

  return (
    <div className="flex w-full flex-grow flex-col items-center justify-center gap-y-6">
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
        {t("content")}
      </motion.p>
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
        className="mt-6 flex w-full max-w-[500px] flex-col gap-y-4 font-jetbrains"
      >
        <label htmlFor="name" className="font-bold">
          {t("form.name")}
        </label>
        <input
          name="name"
          type="text"
          placeholder="John Doe"
          className="w-full max-w-[500px] border bg-[#f7f7f7] p-2 text-[#000000]"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="email" className="font-bold">
          {t("form.email")}
        </label>
        <input
          name="email"
          type="email"
          placeholder="example@email.com"
          className="w-full max-w-[500px] border bg-[#f7f7f7] p-2 text-[#000000]"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message" className="font-bold">
          {t("form.message")}
        </label>
        <textarea
          name="message"
          rows={5}
          className="w-full resize-none border bg-[#f7f7f7] p-2 text-[#000000]"
          onChange={(e) => setMessage(e.target.value)}
          required
          placeholder={t("form.messagePlaceholder")}
        ></textarea>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 3 }}
          className="flex w-full justify-center"
        >
          <button
            onClick={async () => {
              try {
                setIsLoading(true);
                console.log({ name, email, message });
                setTimeout(() => setIsLoading(false), 5000);
              } catch (error) {
                console.error(error);
              }
            }}
            className={clsx(
              "mt-6 h-10 rounded-md bg-[#000000] px-4 py-2 font-bold text-[#ffffff] hover:opacity-80 dark:bg-[#ffffff] dark:text-[#000000]",
            )}
          >
            {loading ? (
              <Loader
                size="h-4 w-4"
                color="border-[#ffffff] dark:border-[#000000]"
              />
            ) : (
              t("form.submit")
            )}
          </button>
        </motion.div>
      </motion.form>
    </div>
  );
}
