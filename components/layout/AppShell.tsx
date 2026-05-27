"use client";

import Header from "@/components/headers/Header";
import Sidebar from "@/components/sidebars/Sidebar";
import {useDrawer} from "@/components/providers/DrawerProvider"
import { usePathname } from "next/navigation";

export default function AppShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    open,
    toggleDrawer,
    closeDrawer,
  } = useDrawer();
  const pathname = usePathname();

    const hideNavbar =
      pathname === "/post" 
  
  if(hideNavbar) {
    return (
        <main className="min-full">
          {children}
        </main>
    )
  } 

  return (
    <div className="min-full">

      {/* HEADER */}
      <Header toggleDrawer={toggleDrawer} />
      <div className="flex">

      {/* DESKTOP SIDEBAR */}
        
      <aside
        className="
          hidden lg:block
          fixed top-0 left-0 bottom-0
          w-64 z-40
          border-r border-theme
        "
      >
        <Sidebar />
      </aside>
          

        {/* MOBILE OVERLAY */}
        {open && (
          <div
            onClick={closeDrawer}
            className="
              fixed inset-0 z-40
              bg-black/50
              lg:hidden
            "
          />
        )}

        {/* MOBILE DRAWER */}
        <div
          className={`
            fixed top-0 left-0 z-50
            h-full w-64
            bg-white
            transition-transform duration-300
            lg:hidden

            ${
              open
                ? "translate-x-0"
                : "-translate-x-full"
            }
          `}
        >
          <Sidebar toggleDrawer={toggleDrawer} />
        </div>

        {/* MAIN CONTENT */}
        <main
          className={`
            flex-1
            pt-16
            p-4 min-h-screen
            ${hideNavbar ? "lg:ml-0" : "lg:ml-64"}
          `}
        >
          {children}
        </main>

      </div>
    </div>
  );
}