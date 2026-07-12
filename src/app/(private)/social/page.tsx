import { CheckCircle2, Plus, Users } from "lucide-react";

const activities = [
  {
    title: "Tree Plantation",
    joined: 24,
    required: "Evidence required",
    status: "Open",
  },
  {
    title: "Blood Donation",
    joined: 18,
    required: "Evidence required",
    status: "Open",
  },
  {
    title: "Beach Cleanup",
    joined: 31,
    required: "Open",
    status: "Open",
  },
  {
    title: "ESG Workshop",
    joined: 52,
    required: "Training completion",
    status: "Open",
  },
] as const;

const approvals = [
  {
    employee: "Aditi Rao",
    activity: "Tree Plantation",
    proof: "photo.jpg",
    points: 50,
    approval: "Pending",
  },
  {
    employee: "Karan Shah",
    activity: "ESG Workshop",
    proof: "cert.pdf",
    points: 30,
    approval: "Approved",
  },
] as const;

function ApprovalBadge({ status }: { status: "Pending" | "Approved" }) {
  const className =
    status === "Approved"
      ? "border-green-500 bg-green-500/10 text-green-400"
      : "border-amber-500 bg-amber-500/10 text-amber-400";

  return (
    <span
      className={`inline-flex min-w-24 justify-center rounded-md border px-3 py-1 text-xs font-medium ${className}`}
    >
      {status}
    </span>
  );
}

export default function SocialPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      <div>
        <p className="text-sm text-sky-400">
          Social: CSR & Employee Engagement
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-zinc-100">Social</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-500">
          Coordinate CSR activities, employee participation, evidence review,
          and diversity engagement across the organization.
        </p>
      </div>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <div className="grid gap-2 md:grid-cols-3">
          <button
            className="h-9 rounded-md border border-sky-500 bg-sky-500 px-4 text-left text-sm font-medium text-zinc-950"
            type="button"
          >
            CSR Activities
          </button>
          <button
            className="h-9 rounded-md border border-zinc-800 bg-zinc-950 px-4 text-left text-sm font-medium text-zinc-500"
            type="button"
          >
            Employee Participation
          </button>
          <button
            className="h-9 rounded-md border border-zinc-800 bg-zinc-950 px-4 text-left text-sm font-medium text-zinc-500"
            type="button"
          >
            Diversity Dashboard
          </button>
        </div>

        <div className="mt-4 flex flex-wrap gap-3">
          <button
            className="inline-flex h-9 min-w-32 items-center justify-center gap-2 rounded-md bg-sky-500 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-sky-400"
            type="button"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            New Activity
          </button>
          <button
            className="inline-flex h-9 min-w-32 items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-950 px-4 text-sm font-semibold text-zinc-300 transition-colors hover:border-zinc-500"
            type="button"
          >
            <Users className="h-4 w-4" aria-hidden="true" />
            Review Queue
          </button>
        </div>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {activities.map((activity) => (
            <article
              className="rounded-xl border border-sky-500 bg-zinc-950/70 p-4"
              key={activity.title}
            >
              <div className="flex items-center gap-2">
                <CheckCircle2
                  className="h-4 w-4 text-green-400"
                  aria-hidden="true"
                />
                <h2 className="text-sm font-semibold text-zinc-200">
                  {activity.title}
                </h2>
              </div>
              <p className="mt-3 text-sm text-zinc-400">
                {activity.joined} joined
              </p>
              <p className="mt-1 text-sm text-zinc-500">{activity.required}</p>
              <button
                className="mt-5 inline-flex h-9 w-24 items-center justify-center rounded-md bg-sky-500 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-sky-400"
                type="button"
              >
                Join
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <h2 className="text-sm font-semibold text-zinc-300">
          Employee Participation: approval queue
        </h2>
        <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-800">
          <table className="min-w-[760px] w-full border-collapse text-left text-sm">
            <thead className="bg-zinc-900 text-xs font-semibold text-zinc-400">
              <tr>
                <th className="border-b border-zinc-700 px-4 py-3">Employee</th>
                <th className="border-b border-zinc-700 px-4 py-3">
                  Activity/Challenge
                </th>
                <th className="border-b border-zinc-700 px-4 py-3">Proof</th>
                <th className="border-b border-zinc-700 px-4 py-3">Points</th>
                <th className="border-b border-zinc-700 px-4 py-3">Approval</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-900 bg-zinc-950/70 text-zinc-400">
              {approvals.map((approval) => (
                <tr className="hover:bg-zinc-900/50" key={approval.employee}>
                  <td className="px-4 py-3 text-zinc-300">
                    {approval.employee}
                  </td>
                  <td className="px-4 py-3">{approval.activity}</td>
                  <td className="px-4 py-3">{approval.proof}</td>
                  <td className="px-4 py-3">{approval.points}</td>
                  <td className="px-4 py-3">
                    <ApprovalBadge status={approval.approval} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
