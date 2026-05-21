import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "globals.css";
import { DrawerProvider } from "@/components/providers/DrawerProvider";
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
  description: "Discover your next career opportunity with JobZipa. Explore thousands of job listings, connect with top companies, and take the next step in your professional journey.",
};



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <DrawerProvider>
          <AppShell>{children}</AppShell>
        </DrawerProvider>
      </body>
    </html>
  );
}
