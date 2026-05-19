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

import Image from "next/image";
import JobzipaLogo from "../../assets/logos/jobzipa.png";

interface SidebarProps {
  toggleDrawer: () => void;
}

const Sidebar = ({
  toggleDrawer,
}: SidebarProps) => {
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
      href: "/bookmarked",
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

  return (
    <aside className="h-full w-64 p-4">
      {/* Header */}
      <div className="flex h-12 items-center border-b border-[var(--border)] pb-[10px] pl-2">
        <button
          onClick={toggleDrawer}
          className="rounded-lg bg-[var(--hover)] p-2 hover:bg-[var(--hover)] lg:hidden"
        >
          <XMarkIcon className="h-6 w-6 text-[var(--text)]" />
        </button>

        <Image
          src={JobzipaLogo}
          className="ml-[10px] h-9 w-auto"
          alt="Jobzipa logo"
          priority
        />
      </div>

      {/* Navigation */}
      <nav className="space-y-2 pt-2">
        {navLinks.map((link) => {
          const Icon = link.icon;

          const isActive = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              onClick={toggleDrawer}
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
    </aside>
  );
};

export default Sidebar;