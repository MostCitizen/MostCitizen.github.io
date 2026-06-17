"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

function useMounted() {
  const mounted = React.useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  return mounted;
}

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const mounted = useMounted();
  if (!mounted) {
    return <div className="p-2 h-9 w-9" />;
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors h-9 w-9 flex items-center justify-center overflow-hidden"
      aria-label="Toggle theme"
    >
      <Sun className="h-5 w-5 transition-all dark:rotate-90 dark:scale-0 scale-100 rotate-0" />
      <Moon className="absolute h-5 w-5 transition-all dark:rotate-0 dark:scale-100 scale-0 -rotate-90" />
    </button>
  );
}
