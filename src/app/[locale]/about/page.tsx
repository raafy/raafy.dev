import AboutMe from "@/components/about-me";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "AboutPage" });

  return {
    title: t("title"),
  };
}

export default function AboutPage() {
  return <AboutMe />;
}
