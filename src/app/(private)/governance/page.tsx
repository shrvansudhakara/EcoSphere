import { Download, Plus, ShieldCheck } from "lucide-react";

const audits = [
  {
    title: "Q2 Waste Audit",
    department: "Manufacturing",
    auditor: "S. Nair",
    date: "2026-06-12",
    findings: "3 minor issues",
    status: "Completed",
  },
  {
    title: "Vendor Compliance Check",
    department: "Procurement",
    auditor: "R. Iyer",
    date: "2026-07-01",
    findings: "1 open issue",
    status: "Under Review",
  },
] as const;

const complianceIssues = [
  {
    issue: "Missing MSDS sheets",
    severity: "High",
    department: "Manufacturing",
    status: "Open",
  },
  {
    issue: "Late vendor disclosure",
    severity: "Medium",
    department: "Procurement",
    status: "Resolved",
  },
] as const;

function Badge({
  label,
}: {
  label: "Completed" | "Under Review" | "High" | "Medium" | "Open" | "Resolved";
}) {
  const className = {
    Completed: "border-sky-400 bg-sky-400/10 text-sky-300",
    "Under Review": "border-violet-400 bg-violet-400/10 text-violet-300",
    High: "border-rose-400 bg-rose-400/10 text-rose-300",
    Medium: "border-amber-500 bg-amber-500/10 text-amber-400",
    Open: "border-rose-400 bg-rose-400/10 text-rose-300",
    Resolved: "border-green-500 bg-green-500/10 text-green-400",
  }[label];

  return (
    <span
      className={`inline-flex min-w-24 justify-center rounded-md border px-3 py-1 text-xs font-medium ${className}`}
    >
      {label}
    </span>
  );
}

export default function GovernancePage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      <div>
        <p className="text-sm text-violet-400">
          Governance: Policies, Audits & Compliance
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-zinc-100">
          Governance
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-500">
          Track policy acknowledgements, audit findings, compliance severity,
          and resolution status across departments.
        </p>
      </div>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <div className="grid gap-2 md:grid-cols-4">
          {[
            "Policies",
            "Policy Acknowledgements",
            "Audits",
            "Compliance Issues",
          ].map((tab) => (
            <button
              className={
                tab === "Audits"
                  ? "h-9 rounded-md border border-violet-400 bg-violet-400 px-4 text-left text-sm font-medium text-zinc-950"
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
            className="inline-flex h-9 min-w-32 items-center justify-center gap-2 rounded-md bg-violet-400 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-violet-300"
            type="button"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            New Audit
          </button>
          <button
            className="inline-flex h-9 min-w-32 items-center justify-center gap-2 rounded-md bg-zinc-300 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
            type="button"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Export
          </button>
        </div>

        <div className="mt-5 overflow-x-auto rounded-lg border border-zinc-800">
          <table className="min-w-[920px] w-full border-collapse text-left text-sm">
            <thead className="bg-zinc-900 text-xs font-semibold text-zinc-400">
              <tr>
                <th className="border-b border-zinc-700 px-4 py-3">Title</th>
                <th className="border-b border-zinc-700 px-4 py-3">
                  Department
                </th>
                <th className="border-b border-zinc-700 px-4 py-3">Auditor</th>
                <th className="border-b border-zinc-700 px-4 py-3">Date</th>
                <th className="border-b border-zinc-700 px-4 py-3">Findings</th>
                <th className="border-b border-zinc-700 px-4 py-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 bg-zinc-950/70 text-zinc-400">
              {audits.map((audit) => (
                <tr className="hover:bg-zinc-900/50" key={audit.title}>
                  <td className="px-4 py-3 text-zinc-300">{audit.title}</td>
                  <td className="px-4 py-3">{audit.department}</td>
                  <td className="px-4 py-3">{audit.auditor}</td>
                  <td className="px-4 py-3">{audit.date}</td>
                  <td className="px-4 py-3">{audit.findings}</td>
                  <td className="px-4 py-3">
                    <Badge label={audit.status} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
          <ShieldCheck className="h-4 w-4 text-violet-400" aria-hidden="true" />
          Compliance issues raised from audits
        </div>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {complianceIssues.map((item) => (
            <article
              className="rounded-lg border border-zinc-800 bg-zinc-950/70 p-4"
              key={item.issue}
            >
              <p className="text-sm font-semibold text-zinc-200">
                {item.issue}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Badge label={item.severity} />
                <Badge label={item.status} />
              </div>
              <p className="mt-3 text-sm text-zinc-500">{item.department}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
