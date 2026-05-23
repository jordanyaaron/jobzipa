import type { Metadata,Viewport } from "next";
import "./globals.css";
import ThemeMeta from "@/components/providers/ThemeMeta";


  
import {
  Geist,
  Geist_Mono,
} from "next/font/google";


import { DrawerProvider } from "@/components/providers/DrawerProvider";

import ThemeProvider from "@/components/providers/ThemeProvider";

import AppShell from "@/components/layout/AppShell";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "JobZipa - Find Your Dream Job",

  description:
    "Discover your next career opportunity with JobZipa. Explore thousands of job listings, connect with top companies, and take the next step in your professional journey.",

  
  themeColor: "#0b1220",
   manifest: "/manifest.json",
   
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
    >
      <body
        className={`
          ${geistSans.variable}
          ${geistMono.variable}
          bg-background
        `}
      >
        <ThemeProvider>
          <ThemeMeta />
          <DrawerProvider>

            <AppShell>
              {children}
            </AppShell>

          </DrawerProvider>

        </ThemeProvider>
      </body>
    </html>
  );
}