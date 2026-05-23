"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const isDark = resolvedTheme === "dark";
    const color = isDark ? "#0b1220" : "#ffffff";

    // Status Bar
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement("meta");
      metaTheme.setAttribute("name", "theme-color");
      document.head.appendChild(metaTheme);
    }
    metaTheme.setAttribute("content", color);

    // Bottom Navigation Bar (Muhimu sana)
    const metaNav = document.createElement("meta");
    metaNav.setAttribute("name", "theme-color");
    metaNav.setAttribute("media", "(prefers-color-scheme: dark)");
    metaNav.setAttribute("content", isDark ? "#0b1220" : "#ffffff");
    document.head.appendChild(metaNav);

    // Extra for Android Navigation Bar
    document.documentElement.style.setProperty('background-color', color, 'important');

  }, [resolvedTheme]);

  return null;
}