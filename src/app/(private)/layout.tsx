import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
