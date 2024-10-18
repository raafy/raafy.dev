import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function ProjectsPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("ProjectsPage");

  const data = t.raw("projects") as {
    name: string;
    technologies: string[];
    platforms: string[];
    description: string;
    urls: { platform: string; url: string }[];
  }[];

  console.log();

  return (
    <div>
      <p>{t("heading")}</p>
    </div>
  );
}
