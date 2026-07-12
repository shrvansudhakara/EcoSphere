import { Search } from "lucide-react";
import {
  EnvironmentalActions,
  type EnvironmentalGoal,
  EnvironmentalGoalsTable,
  EnvironmentalTabs,
} from "@/components/environmental";

const tabs = [
  { label: "Emission Factors" },
  { label: "Product ESG Profiles" },
  { label: "Carbon Transactions" },
  { label: "Environmental Goals", active: true },
] as const;

const goals: EnvironmentalGoal[] = [
  {
    name: "Reduce Fleet Emissions",
    department: "Logistics",
    targetCo2: "500 t",
    currentCo2: "390 t",
    progress: 78,
    deadline: "2026-12-31",
    status: "Active",
  },
  {
    name: "Cut Packaging Waste",
    department: "Manufacturing",
    targetCo2: "120 t",
    currentCo2: "98 t",
    progress: 82,
    deadline: "2026-09-30",
    status: "On Track",
  },
  {
    name: "Office Energy Cut",
    department: "Corporate",
    targetCo2: "80 t",
    currentCo2: "80 t",
    progress: 100,
    deadline: "2026-06-30",
    status: "Completed",
  },
  {
    name: "Vendor Transport Shift",
    department: "Procurement",
    targetCo2: "240 t",
    currentCo2: "132 t",
    progress: 55,
    deadline: "2026-08-15",
    status: "Delayed",
  },
];

export default function EnvironmentPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      <div>
        <p className="text-sm text-green-500">
          Environmental: Emission Tracking & Goals
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-zinc-100">
          Environmental Goals
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-500">
          Track emission targets, current CO2 values, progress, deadlines, and
          goal status across departments.
        </p>
      </div>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <EnvironmentalTabs tabs={tabs} />

        <div className="mt-4 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <EnvironmentalActions />

          <label className="relative block w-full lg:max-w-xs">
            <Search
              className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-sky-300"
              aria-hidden="true"
            />
            <span className="sr-only">Search goals</span>
            <input
              className="h-9 w-full rounded-md border border-zinc-700 bg-zinc-950 pr-3 pl-9 text-sm text-zinc-300 outline-none transition-colors placeholder:text-zinc-600 focus:border-green-500"
              placeholder="Search goals..."
              type="search"
            />
          </label>
        </div>

        <div className="mt-5">
          <EnvironmentalGoalsTable goals={goals} />
        </div>

        <p className="mt-3 text-xs text-zinc-600">
          Row actions: view, edit, delete. Carbon transactions auto-generated
          from purchase, manufacturing, fleet, and expense activity.
        </p>
      </section>
    </div>
  );
}
