"use client";

import { Menu } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-zinc-800 bg-zinc-900 px-4">
      <div className="flex items-center gap-3">
        <button
          type="button"
          className="rounded-md p-2 transition-colors hover:bg-zinc-800"
        >
          <Menu className="h-5 w-5" />
        </button>

        <h1 className="text-lg font-semibold tracking-wide">EcoSphere</h1>
      </div>

      <div />
    </header>
  );
}
