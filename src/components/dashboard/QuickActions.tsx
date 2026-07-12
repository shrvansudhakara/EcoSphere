import type { ReactNode } from "react";

type QuickAction = {
  label: string;
  icon: ReactNode;
  tone: "green" | "orange" | "zinc";
};

type QuickActionsProps = {
  actions: readonly QuickAction[];
};

const toneClassNames: Record<QuickAction["tone"], string> = {
  green: "bg-green-600 text-zinc-950 hover:bg-green-500",
  orange: "bg-orange-500 text-zinc-950 hover:bg-orange-400",
  zinc: "bg-zinc-300 text-zinc-950 hover:bg-zinc-200",
};

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <div className="flex max-w-xs flex-col gap-3">
      {actions.map((action) => (
        <button
          className={`inline-flex h-9 items-center gap-2 rounded-md px-4 text-left text-sm font-semibold transition-colors ${toneClassNames[action.tone]}`}
          key={action.label}
          type="button"
        >
          {action.icon}
          <span>{action.label}</span>
        </button>
      ))}
    </div>
  );
}
