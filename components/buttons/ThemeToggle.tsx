

"use client";

import { useTheme } from "next-themes";
import {  useEffect , useState } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Sehemu hii inabadilisha rangi ya bar ya simu kila theme ikibadilika
  useEffect(() => {
    if (!mounted) return

    // Chagua rangi kulingana na theme iliyo hai kwa sasa
    // resolvedTheme inajua kama mfumo upo dark au light hata kama umeweka 'system'
    const currentTheme = resolvedTheme || theme
    const color = currentTheme === "dark" ? "#0b1220" : "#ffffff" // #0f172a ni slate-900 ya Tailwind

    // Tafuta au tengeneza meta tag ya theme-color
    let metaTag = document.querySelector('meta[name="theme-color"]')
    
    if (!metaTag) {
      metaTag = document.createElement('meta')
      metaTag.setAttribute('name', 'theme-color')
      document.head.appendChild(metaTag)
    }
    
    // Weka rangi mpya kwenye simu
    metaTag.setAttribute('content', color)
  }, [theme, resolvedTheme, mounted])

  if (!mounted) return null

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