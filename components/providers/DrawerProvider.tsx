"use client";

import { createContext, useContext, useState } from "react";

const DrawerContext = createContext<any>(null);

export function DrawerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => {
    setOpen((prev: boolean) => !prev);
  };

  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <DrawerContext.Provider
      value={{
        open,
        toggleDrawer,
        closeDrawer,
      }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawer = () => useContext(DrawerContext);