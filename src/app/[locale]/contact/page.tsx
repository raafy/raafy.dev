import ContactMe from "@/components/contact-me";
import { unstable_setRequestLocale, getTranslations } from "next-intl/server";

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "ContactPage" });

  return {
    title: t("title"),
  };
}

export default function ContactPage() {
  return <ContactMe />;
}
