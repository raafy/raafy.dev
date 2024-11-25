import "@/styles/globals.css";
import { Metadata } from "next";

interface AdminLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: "Admin",
  description: "Admin page",
};

export default function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <html lang="en">
      <body className="bg-black text-white">{children}</body>
    </html>
  );
}
