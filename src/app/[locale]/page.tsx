import Greeting from "@/components/greeting";
import ProfilePicture from "@/components/profile-picture";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "HomePage" });

  return {
    title: t("title"),
  };
}

export default function HomePage() {
  return (
    <div className="flex w-full flex-grow select-none flex-col items-center justify-center gap-8 md:flex-row">
      <ProfilePicture />
      <Greeting />
    </div>
  );
}
