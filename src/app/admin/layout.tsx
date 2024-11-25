import "@/styles/globals.css";
import clsx from "clsx";
import { Metadata } from "next";
import localFont from "next/font/local";

interface AdminLayoutProps {
  children: React.ReactNode;
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

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin page",
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "bg-black text-white",
          firaCode.variable,
          jetbrainsMono.variable,
        )}
      >
        {children}
      </body>
    </html>
  );
}
