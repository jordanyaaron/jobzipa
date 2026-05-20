"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  BookmarkIcon,
  QuestionMarkCircleIcon,
  XMarkIcon,
  HomeIcon,
  LockClosedIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  closeDrawer?: () => void;
}

const Sidebar = ({ closeDrawer }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const navLinks = [
    { name: "Home", icon: HomeIcon, href: "/" },
    { name: "Bookmarked", icon: BookmarkIcon, href: "/bookmark" },
    { name: "FAQ", icon: QuestionMarkCircleIcon, href: "/faq" },
    { name: "About US", icon: InformationCircleIcon, href: "/about" },
    { name: "Privacy Policy", icon: LockClosedIcon, href: "/privacy" },
  ];

  const handleNavigate = (href: string) => {
    closeDrawer?.();

    setTimeout(() => {
      router.push(href);
    }, 50);
  };
  return (
    <aside className="h-full w-64 p-4 flex flex-col">
      
      {/* Header */}
      <div className="flex h-12 items-center border-b pb-2">
        {closeDrawer && (
          <button onClick={closeDrawer}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        )}

        <h1 className="ml-2 text-xl font-bold">JobZipa</h1>
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-2 pt-3">
        {navLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;

          return (
            <button
              key={link.name}
              onClick={() => handleNavigate(link.href)}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left transition ${
                isActive
                  ? "bg-[var(--hover)] font-medium"
                  : "hover:bg-[var(--hover)]"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{link.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;