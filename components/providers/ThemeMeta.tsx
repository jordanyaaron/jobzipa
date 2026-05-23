"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const updateColor = () => {
      const color = resolvedTheme === "dark" ? "#0b1220" : "#ffffff";

      // Tafuta meta au itengeneze
      let meta = document.querySelector('meta[name="theme-color"]');
      
      if (!meta) {
        meta = document.createElement("meta");
        meta.setAttribute("name", "theme-color");
        document.head.appendChild(meta);
      }

      meta.setAttribute("content", color);

      // Extra meta tags kwa nguvu zaidi
      const appleMeta = document.querySelector('meta[name="apple-mobile-web-app-status-bar-style"]');
      if (appleMeta) {
        appleMeta.setAttribute("content", resolvedTheme === "dark" ? "black" : "default");
      }
    };

    // Run mara moja + baada ya delay
    updateColor();
    const timeout1 = setTimeout(updateColor, 300);
    const timeout2 = setTimeout(updateColor, 800);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, [resolvedTheme]);

  return null;
}