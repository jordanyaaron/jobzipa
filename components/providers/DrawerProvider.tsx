"use client";

import { createContext, useContext, useState } from "react";

const DrawerContext = createContext<any>(null);

export function DrawerProvider({ children }: any) {
  const [open, setOpen] = useState(false);

  const toggleDrawer = () => setOpen((p) => !p);

  return (
    <DrawerContext.Provider value={{ open, toggleDrawer }}>
      {children}
    </DrawerContext.Provider>
  );
}

export const useDrawer = () => useContext(DrawerContext);