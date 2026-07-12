"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Environmental", href: "/environmental" },
  { label: "Social", href: "/social" },
  { label: "Governance", href: "/governance" },
  { label: "Gamification", href: "/gamification" },
  { label: "Reports", href: "/reports" },
  { label: "Settings", href: "/settings" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-zinc-800 bg-zinc-900">
      <div className="flex overflow-x-auto">
        {NAV_ITEMS.map((item) => {
          const active = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-1 min-w- border-r border-zinc-800 px-6 py-3 text-center text-sm transition-colors",
                active
                  ? "border-b-2 border-zinc-200 bg-zinc-800 text-white"
                  : "text-zinc-400 hover:bg-zinc-800 hover:text-white",
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
