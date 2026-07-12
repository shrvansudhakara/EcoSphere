import { Medal, Plus, Trophy } from "lucide-react";

const challenges = [
  {
    title: "Sustainability Sprint",
    xp: "200",
    deadline: "2026-07-20",
    status: "Active",
  },
  {
    title: "Recycle Challenge",
    xp: "80",
    deadline: "2026-07-15",
    status: "Active",
  },
  {
    title: "Commute Green Week",
    xp: "120",
    deadline: "2026-07-25",
    status: "Draft",
  },
] as const;

const leaderboard = [
  { rank: 1, employee: "Manufacturing Dept", xp: "4,820" },
  { rank: 2, employee: "Aditi Rao", xp: "3,910" },
  { rank: 3, employee: "Corporate Dept", xp: "3,505" },
] as const;

function ChallengeBadge({ status }: { status: "Active" | "Draft" }) {
  const className =
    status === "Active"
      ? "border-green-500 bg-green-500/10 text-green-400"
      : "border-zinc-600 bg-zinc-800/40 text-zinc-400";

  return (
    <span
      className={`inline-flex min-w-20 justify-center rounded-md border px-3 py-1 text-xs font-medium ${className}`}
    >
      {status}
    </span>
  );
}

export default function GamificationPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      <div>
        <p className="text-sm text-orange-400">
          Gamification: Challenges, Badges & Leaderboard
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-zinc-100">
          Gamification
        </h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-500">
          Encourage sustainable behavior through challenges, badges, rewards,
          points, and department leaderboards.
        </p>
      </div>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <div className="grid gap-2 md:grid-cols-5">
          {[
            "Challenges",
            "Challenge Participation",
            "Badges",
            "Rewards",
            "Leaderboard",
          ].map((tab) => (
            <button
              className={
                tab === "Challenges"
                  ? "h-9 rounded-md border border-orange-500 bg-orange-500 px-4 text-left text-sm font-medium text-zinc-950"
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
            className="inline-flex h-9 min-w-36 items-center justify-center gap-2 rounded-md bg-orange-500 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-400"
            type="button"
          >
            <Plus className="h-4 w-4" aria-hidden="true" />
            New Challenge
          </button>
        </div>

        <div className="mt-5 grid gap-4 lg:grid-cols-3">
          {challenges.map((challenge) => (
            <article
              className="rounded-xl border border-orange-500 bg-zinc-950/70 p-4"
              key={challenge.title}
            >
              <div className="flex items-center gap-2">
                <Trophy
                  className="h-4 w-4 text-orange-400"
                  aria-hidden="true"
                />
                <h2 className="text-sm font-semibold text-zinc-200">
                  {challenge.title}
                </h2>
              </div>
              <p className="mt-3 text-sm text-zinc-400">
                XP: {challenge.xp} · Hard
              </p>
              <p className="mt-1 text-sm text-zinc-500">
                Deadline {challenge.deadline}
              </p>
              <div className="mt-4">
                <ChallengeBadge status={challenge.status} />
              </div>
              <button
                className="mt-4 inline-flex h-9 min-w-32 items-center justify-center rounded-md bg-orange-500 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-orange-400"
                type="button"
              >
                Join Challenge
              </button>
            </article>
          ))}
        </div>
      </section>

      <div className="grid gap-5 xl:grid-cols-2">
        <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
            <Medal className="h-4 w-4 text-orange-400" aria-hidden="true" />
            Badge Gallery
          </div>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Green Beginner",
              "Carbon Saver",
              "Sustainability Champion",
              "Team Player",
            ].map((badge) => (
              <div
                className="rounded-lg border border-orange-500 bg-orange-500/10 px-4 py-3 text-sm font-medium text-orange-300"
                key={badge}
              >
                {badge}
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
          <h2 className="text-sm font-semibold text-zinc-300">Leaderboard</h2>
          <div className="mt-4 overflow-x-auto rounded-lg border border-zinc-800">
            <table className="min-w-[520px] w-full border-collapse text-left text-sm">
              <thead className="bg-zinc-900 text-xs font-semibold text-zinc-400">
                <tr>
                  <th className="border-b border-zinc-700 px-4 py-3">Rank</th>
                  <th className="border-b border-zinc-700 px-4 py-3">
                    Employee/Dept
                  </th>
                  <th className="border-b border-zinc-700 px-4 py-3">XP</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-900 bg-zinc-950/70 text-zinc-400">
                {leaderboard.map((entry) => (
                  <tr className="hover:bg-zinc-900/50" key={entry.rank}>
                    <td className="px-4 py-3 text-zinc-300">{entry.rank}</td>
                    <td className="px-4 py-3">{entry.employee}</td>
                    <td className="px-4 py-3">{entry.xp}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  );
}
