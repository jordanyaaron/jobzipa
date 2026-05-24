"use client";
import Link from "next/link";
import {
  MagnifyingGlassIcon,
  FunnelIcon ,ArrowLeftIcon,PlusIcon
} from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";

type HeaderProps = {
  toggleDrawer?: () => void;
};

export default function Header({ toggleDrawer }: HeaderProps) {
  const [query, setQuery] = useState("");
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);


  return (
    <header className="h-16 border-b bg-[var(--background)] border-theme lg:z-50 flex lg:fixed top-0 left-0 right-0 items-center px-4">
      
      <h1 className="text-2xl font-bold text-black text-main ml-2">
        JobZipa
      </h1>

      {/* spacer pushes button to right */}
      <div className="lg:hidden  flex-1" />
      <div className="hidden lg:flex flex-1 mx-6">
        <div className="relative hidden md:flex flex-1 ">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-[var(--placeholder)] opacity-60" />
          <input
            type="text"
            placeholder="Search jobs..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            // onKeyDown={handleSearch}
            className="w-full text-[var(--placeholder)] border border-theme pl-10 pr-4 py-2 rounded-lg border border-[var(--border)] focus:outline-none text-[var(--text)] placeholder:text-[var(--placeholder)]"
          />
        </div>
      </div>

      <Link
        href="/post"
        className="flex items-center gap-2 px-4 py-2 rounded-lg text-white bg-green-600 hover:bg-green-700"
      >
        <PlusIcon className="h-5 w-5 text-white" />
        Post
      </Link>

      <button
          onClick={() => setMobileSearchOpen(true)}
          className="lg:hidden p-2 rounded-lg hover:bg-[var(--hover)]  text-main"
      >
          <MagnifyingGlassIcon className="h-6 w-6   text-main" />
      </button>

      <button
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="p-2 rounded-lg hover:bg-[var(--hover)]"
        >
        <FunnelIcon className="h-6 w-6 text-main" />
      </button>

      {/* Drawer button RIGHT SIDE */}
      <button
        onClick={toggleDrawer}
        className="rounded-lg p-2 text-2xl text-main  hover:bg-gray-100 lg:hidden"
      >
        ☰
      </button>
      {mobileSearchOpen && (
                <div className="fixed top-0 left-0 w-full h-16 z-50 flex items-center px-4 bg-[var(--background)] border-b border-[var(--border)]">
                
                <button
                    onClick={() => setMobileSearchOpen(false)}
                    className="mr-3 p-2 rounded-lg hover:bg-[var(--hover)]"
                >
                    <ArrowLeftIcon className="h-6 w-6 text-[var(--text)]" />
                </button>

                <input
                    type="text"
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search jobs..."
                    className="flex-1 px-4 py-2 rounded-lg border  border-theme text-[var(--text)] focus:outline-none"
                    autoFocus
                />
                </div>
            )}
    </header>
  );
}