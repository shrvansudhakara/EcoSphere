import { Pencil, Plus, Settings, Trash2 } from "lucide-react";

const departments = [
  {
    name: "Manufacturing",
    code: "MFG",
    head: "S. Nair",
    parent: "-",
    employees: 134,
    status: "Active",
  },
  {
    name: "Logistics",
    code: "LOG",
    head: "R. Iyer",
    parent: "Manufacturing",
    employees: 58,
    status: "Active",
  },
  {
    name: "Corporate",
    code: "COR",
    head: "A. Mehta",
    parent: "-",
    employees: 41,
    status: "Active",
  },
] as const;

const notificationSettings = [
  "Enable auto emission calculation",
  "Require evidence for all CSR activities",
  "Auto-award badges on challenge completion",
  "Email alerts for new compliance issues",
] as const;

function StatusBadge({ status }: { status: "Active" }) {
  return (
    <span className="inline-flex min-w-24 justify-center rounded-md border border-green-500 bg-green-500/10 px-3 py-1 text-xs font-medium text-green-400">
      {status}
    </span>
  );
}

export default function SettingsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      <div>
        <p className="text-sm text-zinc-400">
          Settings: Configuration & Administration
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-zinc-100">Settings</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-500">
          Maintain departments, categories, ESG configuration, and notification
          rules used across the platform.
        </p>
      </div>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <div className="grid gap-2 md:grid-cols-4">
          {[
            "Departments",
            "Categories",
            "ESG Configuration",
            "Notification Settings",
          ].map((tab) => (
            <button
              className={
                tab === "Departments"
                  ? "h-9 rounded-md border border-zinc-300 bg-zinc-300 px-4 text-left text-sm font-medium text-zinc-950"
                  : "h-9 rounded-md border border-zinc-800 bg-zinc-950 px-4 text-left text-sm font-medium text-zinc-500"
              }
              key={tab}
              type="button"
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            className="inline-flex h-9 min-w-40 items-center justify-center gap-2 rounded-md bg-zinc-300 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            type="button"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            New Department
          </button>
          <button
            className="inline-flex h-9 min-w-24 items-center justify-center gap-2 rounded-md bg-amber-600 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-amber-500"
            type="button"
          >
            <Pencil className="h-4 w-4" aria-hidden="true" />
            Edit
          </button>
          <button
            className="inline-flex h-9 min-w-24 items-center justify-center gap-2 rounded-md bg-rose-400 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-rose-300"
            type="button"
          >
            <Trash2 className="h-4 w-4" aria-hidden="true" />
            Delete
          </button>
        </div>

        <div className="mt-5 overflow-x-auto rounded-lg border border-zinc-800">
          <table className="min-w-[860px] w-full border-collapse text-left text-sm">
            <thead className="bg-zinc-900 text-xs font-semibold text-zinc-400">
              <tr>
                <th className="border-b border-zinc-700 px-4 py-3">Name</th>
                <th className="border-b border-zinc-700 px-4 py-3">Code</th>
                <th className="border-b border-zinc-700 px-4 py-3">Head</th>
                <th className="border-b border-zinc-700 px-4 py-3">
                  Parent Dept
                </th>
                <th className="border-b border-zinc-700 px-4 py-3">
                  Employees
                </th>
                <th className="border-b border-zinc-700 px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 bg-zinc-950/70 text-zinc-400">
              {departments.map((department) => (
                <tr className="hover:bg-zinc-900/50" key={department.code}>
                  <td className="px-4 py-3 text-zinc-300">{department.name}</td>
                  <td className="px-4 py-3">{department.code}</td>
                  <td className="px-4 py-3">{department.head}</td>
                  <td className="px-4 py-3">{department.parent}</td>
                  <td className="px-4 py-3">{department.employees}</td>
                  <td className="px-4 py-3">
                    <StatusBadge status={department.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
          <Settings className="h-4 w-4 text-zinc-500" aria-hidden="true" />
          ESG Configuration & Notifications
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {notificationSettings.map((setting) => (
            <label
              className="flex items-center gap-3 text-sm text-zinc-400"
              key={setting}
            >
              <input
                checked
                className="h-4 w-4 accent-zinc-300"
                readOnly
                type="checkbox"
              />
              <span>{setting}</span>
            </label>
          ))}
        </div>
      </section>
    </div>
  );
}
