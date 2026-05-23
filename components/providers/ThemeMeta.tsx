"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const isDark = resolvedTheme === "dark";
    const color = isDark ? "#0b1220" : "#ffffff";

    // 1. Update or create main theme-color meta
    let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement;

    if (!meta) {
      meta = document.createElement("meta") as HTMLMetaElement;
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = color;

    // 2. Extra meta for better bottom bar support
    let darkMeta = document.querySelector('meta[name="theme-color"][media*="dark"]') as HTMLMetaElement;

    if (!darkMeta) {
      darkMeta = document.createElement("meta") as HTMLMetaElement;
      darkMeta.name = "theme-color";
      darkMeta.media = "(prefers-color-scheme: dark)";
      document.head.appendChild(darkMeta);
    }
    darkMeta.content = "#0b1220";

    // 3. Force background on root elements
    document.documentElement.style.backgroundColor = color;
    document.body.style.backgroundColor = color;

  }, [resolvedTheme]);

  return null;
}