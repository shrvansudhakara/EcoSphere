"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { SIDEBAR_SECTIONS } from "@/config/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-900 p-4">
      <nav aria-label="Sidebar navigation" className="flex flex-col gap-5">
        {SIDEBAR_SECTIONS.map((section) => (
          <div key={section.label}>
            <Link
              href={section.href}
              className={cn(
                "block rounded-md px-2 py-1 text-sm font-semibold transition-colors",
                pathname === section.href
                  ? "bg-zinc-800 text-white"
                  : "text-zinc-300 hover:bg-zinc-800 hover:text-white",
              )}
            >
              {section.label}
            </Link>

            {section.children.length > 0 && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {section.children.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={cn(
                      "rounded-md px-2 py-1 text-sm transition-colors",
                      pathname === item.href
                        ? "bg-zinc-800 text-white"
                        : "text-zinc-400 hover:bg-zinc-800 hover:text-white",
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}
