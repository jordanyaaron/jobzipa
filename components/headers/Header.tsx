"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-black">
          JobZipa
        </h1>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-6 md:flex">
          <a href="#" className="text-gray-600 hover:text-black">
            Jobs
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            Companies
          </a>
          <a href="#" className="text-gray-600 hover:text-black">
            About
          </a>

          <button className="rounded-xl bg-black px-4 py-2 text-white">
            Post Job
          </button>
        </nav>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t px-6 py-4 md:hidden flex flex-col gap-4">
          <a href="#">Jobs</a>
          <a href="#">Companies</a>
          <a href="#">About</a>

          <button className="rounded-xl bg-black px-4 py-2 text-white w-fit">
            Post Job
          </button>
        </div>
      )}
    </header>
  );
}