import type { ReactNode } from "react";

type SectionCardProps = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function SectionCard({
  title,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={`rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 ${className}`}
    >
      <h2 className="mb-4 text-sm font-semibold text-zinc-300">{title}</h2>
      {children}
    </section>
  );
}
