import Footer from "@/components/footer";
import Header from "@/components/header";
import { routing } from "@/i18n/routing";
import "@/styles/globals.css";
import { NextIntlClientProvider } from "next-intl";
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from "next-intl/server";
import { ThemeProvider } from "next-themes";
import localFont from "next/font/local";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const firaCode = localFont({
  src: "../../assets/fonts/FiraCode-VF.woff2",
  variable: "--font-fira-code",
});

const jetbrainsMono = localFont({
  src: [
    {
      path: "../../assets/fonts/JetBrainsMono-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/JetBrainsMono-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/JetBrainsMono-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../assets/fonts/JetBrainsMono-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../assets/fonts/JetBrainsMono-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-jetbrains-mono",
});

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: LocaleLayoutProps) {
  unstable_setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${jetbrainsMono.variable} ${firaCode.variable} flex min-h-dvh flex-col items-center bg-[#ffffff] p-8 text-[#000000] antialiased dark:bg-[#000000] dark:text-[#ffffff]`}
      >
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider attribute="class">
            <div className="flex w-full max-w-screen-lg flex-grow flex-col items-center">
              <Header />
              <main className="flex max-w-screen-md flex-grow flex-col px-4 py-8 font-jetbrains">
                {children}
              </main>
              <Footer locale={locale} />
            </div>
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
