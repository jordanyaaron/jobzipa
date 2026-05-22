"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export default function ThemeMeta() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    const color =
      resolvedTheme === "dark"
        ? "#0b1220"
        : "#ffffff";

    document
      .querySelector("meta[name='theme-color']")
      ?.setAttribute("content", color);
  }, [resolvedTheme]);

  return null;
}