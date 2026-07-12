import { FileDown, Play } from "lucide-react";

type FilterControl = {
  label: string;
  value: string;
};

type ReportBuilderProps = {
  filters: readonly FilterControl[];
};

const exportActions = [
  { label: "Run Report", icon: Play, className: "bg-zinc-300 text-zinc-950" },
  {
    label: "Export PDF",
    icon: FileDown,
    className: "bg-zinc-950 text-zinc-300",
  },
  {
    label: "Export Excel",
    icon: FileDown,
    className: "bg-zinc-950 text-zinc-300",
  },
  {
    label: "Export CSV",
    icon: FileDown,
    className: "bg-zinc-950 text-zinc-300",
  },
] as const;

export default function ReportBuilder({ filters }: ReportBuilderProps) {
  return (
    <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
      <h2 className="text-sm font-semibold text-zinc-300">
        Custom Report Builder: Filters
      </h2>

      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {filters.map((filter) => (
          <label className="block" key={filter.label}>
            <span className="sr-only">{filter.label}</span>
            <select
              className="h-9 w-full rounded-md border border-zinc-700 bg-zinc-950 px-3 text-sm text-zinc-400 outline-none transition-colors focus:border-zinc-300"
              defaultValue={filter.value}
            >
              <option>{filter.value}</option>
            </select>
          </label>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-3">
        {exportActions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              className={`inline-flex h-9 min-w-32 items-center justify-center gap-2 rounded-md border border-zinc-700 px-4 text-sm font-semibold transition-colors hover:border-zinc-500 ${action.className}`}
              key={action.label}
              type="button"
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{action.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
}
