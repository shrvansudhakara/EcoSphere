"use client";

import Link from "next/link";
import { SIDEBAR_SECTIONS } from "@/config/navigation";

export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-900 p-4">
      <nav aria-label="Sidebar navigation" className="flex flex-col gap-5">
        {SIDEBAR_SECTIONS.map((section) => (
          <div key={section.label}>
            <Link
              href={section.href}
              className="block text-sm font-semibold text-zinc-300 hover:text-white"
            >
              {section.label}
            </Link>

            {section.children.length > 0 && (
              <div className="mt-2 ml-4 flex flex-col gap-2">
                {section.children.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-sm text-zinc-400 hover:text-white"
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
