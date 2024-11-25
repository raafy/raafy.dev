"use client";

import clsx from "clsx";
import { LaptopMinimalIcon, MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex items-center rounded-full bg-[#f7f7f7] p-1 dark:bg-[#333333]">
      <button
        aria-label="Toggle Light Mode"
        className={clsx(
          "rounded-full p-1.5",
          theme === "light" && "bg-[#ffffff] dark:bg-[#000000]",
        )}
        onClick={() => setTheme("light")}
      >
        <SunIcon size={16} />
      </button>
      <button
        aria-label="Toggle Dark Mode"
        className={clsx(
          "rounded-full p-1.5",
          theme === "dark" && "bg-[#ffffff] dark:bg-[#000000]",
        )}
        onClick={() => setTheme("dark")}
      >
        <MoonIcon size={16} />
      </button>
      <button
        aria-label="Toggle System Mode"
        className={clsx(
          "rounded-full p-1.5",
          theme === "system" && "bg-[#ffffff] dark:bg-[#000000]",
        )}
        onClick={() => setTheme("system")}
      >
        <LaptopMinimalIcon size={16} />
      </button>
    </div>
  );
}
