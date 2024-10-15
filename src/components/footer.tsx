import { useTranslations } from "next-intl";
import LocaleSwitcher from "./locale-switcher";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Footer({ locale }: { locale: string }) {
  unstable_setRequestLocale(locale);
  const currentYear = new Date().getFullYear();
  const t = useTranslations("Footer");

  return (
    <footer className="flex select-none flex-col items-center gap-y-2">
      <LocaleSwitcher />
      <p className="text-center font-jetbrains text-xs opacity-50">
        &copy; {currentYear} {t("copyright")}
      </p>
    </footer>
  );
}
