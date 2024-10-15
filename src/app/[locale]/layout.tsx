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
import { Fira_Code, JetBrains_Mono } from "next/font/google";

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: { locale: string };
}

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
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
            <div className="flex w-full max-w-screen-lg flex-grow flex-col">
              <Header />
              <main className="flex flex-grow flex-col p-4 font-jetbrains">
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
