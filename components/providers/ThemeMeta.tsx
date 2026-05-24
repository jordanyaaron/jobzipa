"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const isDark = resolvedTheme === "dark";
    const color = isDark ? "#0b1220" : "#ffffff";

    // 1. Theme color meta
    let meta = document.querySelector('meta[name="theme-color"]') as HTMLMetaElement | null;
    if (!meta) {
      meta = document.createElement("meta") as HTMLMetaElement;
      meta.name = "theme-color";
      document.head.appendChild(meta);
    }
    meta.content = color;

    // 2. Force background color on root (hii inasaidia bottom bar sana)
    document.documentElement.style.backgroundColor = color;
    document.body.style.backgroundColor = color;
    document.body.style.setProperty("background-color", color, "important");

    // 3. Extra attempt
    const style = document.createElement("style");
    style.innerHTML = `
      html, body { 
        background-color: ${color} !important; 
      }
    `;
    document.head.appendChild(style);

  }, [resolvedTheme]);

  return null;
}