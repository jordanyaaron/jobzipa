"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const updateThemeColor = () => {
      let meta = document.querySelector('meta[name="theme-color"]');

      // Create a tag if it is not present
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', 'theme-color');
        document.head.appendChild(meta);
      }

      const color = resolvedTheme === "dark" ? "#0b1220" : "#ffffff";
      meta.setAttribute("content", color);
    };

    // Update mara moja
    updateThemeColor();

    // Update kila resolvedTheme inabadilika
    const interval = setInterval(updateThemeColor, 100); // Safety check

    return () => clearInterval(interval);
  }, [resolvedTheme]);

  return null;
}