import UnderConstruction from "@/components/under-construction";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ProjectsPage" });

  return {
    title: t("title"),
  };
}

export default function ProjectsPage() {
  return (
    <div className="flex flex-grow flex-col items-center justify-center">
      <UnderConstruction />
    </div>
  );
}
