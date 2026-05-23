"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const isDark = resolvedTheme === "dark";
    const color = isDark ? "#0b1220" : "#ffffff";

    // 1. Normal theme-color
    let meta = document.querySelector('meta[name="theme-color"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = color;

    // 2. Media query for dark mode (inasaidia bottom bar)
    const darkMeta = document.createElement("meta");
    darkMeta.name = "theme-color";
    darkMeta.media = "(prefers-color-scheme: dark)";
    darkMeta.content = "#0b1220";
    document.head.appendChild(darkMeta);

    // 3. Force on html & body
    document.documentElement.style.backgroundColor = color;
    document.body.style.backgroundColor = color;

  }, [resolvedTheme]);

  return null;
}