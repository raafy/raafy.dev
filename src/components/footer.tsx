import { useTranslations } from "next-intl";
import LocaleSwitcher from "./locale-switcher";
import { unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

import GithubIcon from "@/assets/icons/github.svg";
import LinkedInIcon from "@/assets/icons/linkedin.svg";
import WhatsAppIcon from "@/assets/icons/whatsapp.svg";

export default function Footer({ locale }: { locale: string }) {
  unstable_setRequestLocale(locale);
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer className="mt-10 flex select-none flex-col items-center gap-y-2">
      <div className="mb-4 flex gap-x-4">
        <a
          href="https://github.com/raafy"
          target="_blank"
          className="hover:opacity-80"
        >
          <Image
            src={GithubIcon}
            alt="Github Icon"
            className="h-6 w-6 dark:invert"
          />
        </a>
        <a
          href="https://linkedin.com/in/raafyshiham"
          target="_blank"
          className="hover:opacity-80"
        >
          <Image
            src={LinkedInIcon}
            alt="LinkedIn Icon"
            className="h-6 w-6 dark:invert"
          />
        </a>
        <a
          href="https://wa.me/601154043550"
          target="_blank"
          className="hover:opacity-80"
        >
          <Image
            src={WhatsAppIcon}
            alt="WhatsApp Icon"
            className="h-6 w-6 dark:invert"
          />
        </a>
      </div>
      <LocaleSwitcher />
      <p className="text-center font-jetbrains text-xs opacity-50">
        &copy; {currentYear} {t("copyright")}
      </p>
    </footer>
  );
}
