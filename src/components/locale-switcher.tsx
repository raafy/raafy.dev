"use client";

import clsx from "clsx";
import { startTransition } from "react";
import { usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { useParams } from "next/navigation";

export default function LocaleSwitcher() {
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();

  return (
    <div className="flex gap-x-2 font-jetbrains text-sm font-bold">
      <button
        disabled={currentLocale === "en" ? true : false}
        className={clsx(currentLocale === "en" && "opacity-50")}
        onClick={() =>
          startTransition(() => {
            router.replace(
              // @ts-expect-error -- TypeScript will validate that only known `params`
              // are used in combination with a given `pathname`. Since the two will
              // always match for the current route, we can skip runtime checks.
              { pathname, params },
              { locale: "en" },
            );
          })
        }
      >
        EN
      </button>
      <p className="opacity-50">|</p>
      <button
        disabled={currentLocale === "ms" ? true : false}
        className={clsx(currentLocale === "ms" && "opacity-50")}
        onClick={() =>
          startTransition(() => {
            router.replace(
              // @ts-expect-error -- TypeScript will validate that only known `params`
              // are used in combination with a given `pathname`. Since the two will
              // always match for the current route, we can skip runtime checks.
              { pathname, params },
              { locale: "ms" },
            );
          })
        }
      >
        BM
      </button>
    </div>
  );
}
