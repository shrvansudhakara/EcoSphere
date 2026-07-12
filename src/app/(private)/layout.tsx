import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
