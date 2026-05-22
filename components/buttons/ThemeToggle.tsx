"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } =
    useTheme();

  return (
    <button
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="
              relative w-[calc(100%-30px)] mx-30px flex items-center justify-between
              px-4 py-3 rounded-xl
              bg-gradient-to-r from-zinc-900 to-zinc-700
              text-white shadow-md
              transition-all duration-300
              hover:scale-[1.02] hover:shadow-lg
              active:scale-95
              overflow-hidden
            "
          >
            <span className="flex items-center gap-3">
              <span className="text-lg">
                {resolvedTheme === "dark" ? "☀️" : "🌙"}
              </span>

              <span className="font-medium">
                {resolvedTheme === "dark" ? "Light Mode" : "Dark Mode"}
              </span>
            </span>

            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
              Switch
            </span>
          </button>
  );
}