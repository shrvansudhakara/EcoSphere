import type { ReactNode } from "react";
import Header from "@/components/layout/Header";
import Navbar from "@/components/layout/Navbar";
import Sidebar from "@/components/layout/Sidebar";

export default function PrivateLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />

      <div className="flex">
        <Sidebar />

        <div className="flex flex-1 flex-col">
          <Navbar />
          <main className="p-6">{children}</main>
        </div>
      </div>
    </div>
  );
}
