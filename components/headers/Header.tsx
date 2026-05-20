"use client";

import { useState } from "react";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
} from "@heroicons/react/24/outline";

type HeaderProps = {
  toggleDrawer?: () => void;
};

export default function Header({ toggleDrawer }: HeaderProps) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <header
      className="
        h-16
        border-b
        flex
        items-center
        gap-3
        px-4
        bg-white
        lg:fixed
        top-0
        left-0
        right-0
        z-50
      "
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-2">
        <h1 className="text-2xl font-bold text-black">
          JobZipa
        </h1>
      </div>

      {/* DESKTOP SEARCH */}
      <div className="hidden lg:flex flex-1 items-center gap-2 max-w-2xl mx-auto">
        <div className="flex-1 relative">
          <MagnifyingGlassIcon
            className="
              w-5
              h-5
              text-gray-400
              absolute
              left-3
              top-1/2
              -translate-y-1/2
            "
          />

          <input
            type="text"
            placeholder="Search jobs..."
            className="
              w-full
              h-11
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              pl-10
              pr-4
              outline-none
              focus:border-black
            "
          />
        </div>

        <button
          className="
            h-11
            px-4
            rounded-xl
            border
            border-gray-200
            flex
            items-center
            gap-2
            hover:bg-gray-100
            transition
          "
        >
          <FunnelIcon className="w-5 h-5" />
          <span>Filters</span>
        </button>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center gap-2 ml-auto">

        {/* MOBILE SEARCH BUTTON */}
        <button
          onClick={() => setShowMobileSearch((prev) => !prev)}
          className="
            lg:hidden
            rounded-lg
            p-2
            hover:bg-gray-100
          "
        >
          <MagnifyingGlassIcon className="w-6 h-6" />
        </button>

        {/* DRAWER BUTTON */}
        <button
          onClick={toggleDrawer}
          className="
            rounded-lg
            p-2
            text-2xl
            hover:bg-gray-100
            lg:hidden
          "
        >
          ☰
        </button>
      </div>

      {/* MOBILE SEARCH AREA */}
      <div
        className={`
          absolute
          left-0
          right-0
          top-full
          border-b
          bg-white
          p-4
          flex
          flex-col
          gap-3
          transition-all
          duration-300
          lg:hidden
          ${showMobileSearch
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-3"
          }
        `}
      >
        {/* SEARCH INPUT */}
        <div className="relative">
          <MagnifyingGlassIcon
            className="
              w-5
              h-5
              text-gray-400
              absolute
              left-3
              top-1/2
              -translate-y-1/2
            "
          />

          <input
            type="text"
            placeholder="Search jobs..."
            className="
              w-full
              h-11
              rounded-xl
              border
              border-gray-200
              bg-gray-50
              pl-10
              pr-4
              outline-none
              focus:border-black
            "
          />
        </div>

        {/* FILTER CONTAINER */}
        <div className="flex items-center gap-2">

          <button
            className="
              flex-1
              h-11
              rounded-xl
              border
              border-gray-200
              flex
              items-center
              justify-center
              gap-2
              hover:bg-gray-100
              transition
            "
          >
            <FunnelIcon className="w-5 h-5" />
            <span>Filters</span>
          </button>

          <button
            className="
              h-11
              px-5
              rounded-xl
              bg-black
              text-white
              font-medium
              hover:opacity-90
              transition
            "
          >
            Search
          </button>
        </div>
      </div>
    </header>
  );
}