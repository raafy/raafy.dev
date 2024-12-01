import { useTranslations } from "next-intl";
import Logo from "./3d-logo";

export default function UnderConstruction() {
  const t = useTranslations("UnderConstruction");
  return (
    <div className="flex h-full w-full flex-col gap-y-6">
      <Logo />
      <div className="flex flex-col items-center gap-y-4">
        <h2 className="text-center">{t("message").split(".")[0]}</h2>
        <p className="text-center">{t("message").split(".")[1]}</p>
      </div>
    </div>
  );
}
