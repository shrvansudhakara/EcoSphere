import { Download, Pencil, Plus, Trash2 } from "lucide-react";

const actions = [
  {
    label: "New Goal",
    icon: Plus,
    className: "bg-green-600 text-zinc-950 hover:bg-green-500",
  },
  {
    label: "Edit",
    icon: Pencil,
    className: "bg-amber-600 text-zinc-950 hover:bg-amber-500",
  },
  {
    label: "Delete",
    icon: Trash2,
    className: "bg-rose-400 text-zinc-950 hover:bg-rose-300",
  },
  {
    label: "Export",
    icon: Download,
    className: "bg-zinc-300 text-zinc-950 hover:bg-zinc-200",
  },
] as const;

export default function EnvironmentalActions() {
  return (
    <div className="flex flex-wrap gap-3">
      {actions.map((action) => {
        const Icon = action.icon;

        return (
          <button
            className={`inline-flex h-9 min-w-28 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold transition-colors ${action.className}`}
            key={action.label}
            type="button"
          >
            <Icon className="h-4 w-4" aria-hidden="true" />
            <span>{action.label}</span>
          </button>
        );
      })}
    </div>
  );
}
