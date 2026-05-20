"use client";

import {
  MagnifyingGlassIcon
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

type HeaderProps = {
  toggleDrawer?: () => void;
};

export default function Header({ toggleDrawer }: HeaderProps) {
  const [query, setQuery] = useState("");


  return (
    <header className="h-16 border-b flex lg:fixed top-0 left-0 right-0 bg-white items-center px-4">
      
      <h1 className="text-2xl font-bold text-black ml-2">
        JobZipa
      </h1>

      {/* spacer pushes button to right */}
      <div className="hidden lg:block flex-1" />
      <div className="hidden md:flex flex-1 mx-6">
        <div className="relative hidden md:flex flex-1 ">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--placeholder)] opacity-60" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // onKeyDown={handleSearch}
            className="w-full text-[var(--placeholder)] pl-10 pr-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none text-[var(--text)] placeholder:text-[var(--placeholder)]"
          />
        </div>
      </div>

      {/* Drawer button RIGHT SIDE */}
      <button
        onClick={toggleDrawer}
        className="rounded-lg p-2 text-2xl  hover:bg-gray-100 lg:hidden"
      >
        ☰
      </button>
    </header>
  );
}