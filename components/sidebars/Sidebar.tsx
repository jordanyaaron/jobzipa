"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookmarkIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
  HomeIcon,
  LockClosedIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  toggleDrawer?: () => void;
}

const Sidebar = ({ toggleDrawer }: SidebarProps) => {
  const pathname = usePathname();

  const navLinks = [
    {
      name: "Home",
      icon: HomeIcon,
      href: "/",
    },
    {
      name: "Bookmarked",
      icon: BookmarkIcon,
      href: "/bookmark",
    },
    {
      name: "FAQ",
      icon: QuestionMarkCircleIcon,
      href: "/faq",
    },
    {
      name: "About US",
      icon: InformationCircleIcon,
      href: "/about",
    },
    {
      name: "Privacy Policy",
      icon: LockClosedIcon,
      href: "/privacy",
    },
  ];

  const handleClick = () => {
    // only close drawer if function exists (mobile only)
    if (toggleDrawer) toggleDrawer();
  };

  return (
    <aside className="h-full w-64 p-4">
      {/* Header */}
      <div className="flex h-12 items-center border-b border-[var(--border)] pb-[10px] pl-2">
        {toggleDrawer && (
          <button
            onClick={handleClick}
            className="rounded-lg bg-[var(--hover)] p-2 hover:bg-[var(--hover)] lg:hidden"
          >
            <XMarkIcon className="h-6 w-6 text-[var(--text)]" />
          </button>
        )}

        <h1 className="text-2xl font-bold text-black ml-2">
          JobZipa
        </h1>
      </div>

      {/* Navigation h-[calc(100vh-200px)]*/}
      <nav className="space-y-2 pt-2 ">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => {
                if (toggleDrawer) toggleDrawer();
              }}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 transition ${
                isActive
                  ? "bg-[var(--hover)] font-medium"
                  : "hover:bg-[var(--hover)]"
              }`}
            >
              <Icon className="h-5 w-5 text-[var(--text)]" />

              <span className="text-[var(--text)]">
                {link.name}
              </span>
            </Link>
          );
        })}
      </nav>
      <div
          className="
            absolute w-full lg:w-62  bottom-10 h-auto
          "
      >
         <button
            className="
              relative w-[calc(100%-30px)] mx-30px flex items-center justify-between
              px-4 py-3 rounded-xl
              bg-gradient-to-r from-zinc-900 to-zinc-700
              text-white shadow-md
              transition-all duration-300
              hover:scale-[1.02] hover:shadow-lg
              active:scale-95
              overflow-hidden
            "
          >
            <span className="flex items-center gap-3">
              <span className="text-xl">🌙</span>
              <span className="font-medium">Theme</span>
            </span>
            <span className="text-xs bg-white/20 px-2 py-1 rounded-full">
              Switch
            </span>
          </button>
      </div>
          
    </aside>
  );
};

export default Sidebar;