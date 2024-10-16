"use client";

import { Link } from "@/i18n/routing";
import { MenuIcon, XIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import ThemeSwitcher from "./theme-switcher";
import { motion } from "framer-motion";
import clsx from "clsx";

const menu = {
  open: { opacity: 1, scale: 1, x: 0 },
  closed: { opacity: 0, scale: 0, x: "38%" },
};

export default function Header() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const t = useTranslations("Header");

  return (
    <>
      <header className="flex select-none items-center justify-between">
        <Link
          href={"/"}
          className="hover:opacity-80"
          onClick={() => setMenuOpen(false)}
        >
          <h1 className="font-fira text-3xl font-extrabold">&#123;R&#125;</h1>
        </Link>
        <div className="flex items-center gap-x-6 md:gap-x-8">
          <ThemeSwitcher />
          <nav className="hidden items-center gap-x-8 font-jetbrains font-bold md:flex">
            <Link href={"/about"} className="hover:opacity-80">
              {t("about")}
            </Link>
            <Link href={"/projects"} className="hover:opacity-80">
              {t("projects")}
            </Link>
            <Link href={"/contact"} className="hover:opacity-80">
              {t("contact")}
            </Link>
          </nav>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex rounded-full p-1 md:hidden"
          >
            {menuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </header>
      <motion.div
        className={clsx("relative z-50 md:hidden")}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={menuOpen ? "open" : "closed"}
        variants={menu}
      >
        <nav className="absolute mt-4 flex w-full flex-col items-center gap-y-2 rounded-xl bg-[#ffffff] p-6 font-jetbrains font-bold text-[#000000] drop-shadow dark:bg-[#ffffff] dark:text-[#000000]">
          <Link
            href={"/about"}
            className="hover:opacity-80"
            onClick={() => setMenuOpen(false)}
          >
            {t("about")}
          </Link>
          <Link
            href={"/projects"}
            className="hover:opacity-80"
            onClick={() => setMenuOpen(false)}
          >
            {t("projects")}
          </Link>
          <Link
            href={"/contact"}
            className="hover:opacity-80"
            onClick={() => setMenuOpen(false)}
          >
            {t("contact")}
          </Link>
        </nav>
      </motion.div>
    </>
  );
}
