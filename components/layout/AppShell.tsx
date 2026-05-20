"use client";

import Header from "@/components/headers/Header";
import { useDrawer } from "@/components/providers/DrawerProvider";
import Sidebar from '@/components/sidebars/Sidebar';

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const { open, toggleDrawer } = useDrawer();

  return (
    <div className="flex h-screen">

      {/* Sidebar (desktop) */}
      <div className="hidden lg:block w-64 border-r">
        <Sidebar  toggleDrawer={toggleDrawer}  />
      </div>

      {/* Mobile sidebar */}
      <div
        className={`fixed inset-0 bg-black/40 lg:hidden ${
          open ? "block" : "hidden"
        }`}
        onClick={toggleDrawer}
      />

      <div
        className={`fixed left-0 top-0 h-full w-64 bg-white lg:hidden transition-transform ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Sidebar />
      </div>

      {/* Main area */}
      <div className="flex flex-1 flex-col">

        {/* Header */}
        <Header toggleDrawer={toggleDrawer} />

        {/* Page content (SERVER PAGES ZIPO HAPA) */}
        <main className="flex-1 overflow-y-auto">
          {children}
        </main>

      </div>
    </div>
  );
}