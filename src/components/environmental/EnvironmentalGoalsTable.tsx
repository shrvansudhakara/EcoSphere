import StatusBadge, { type EnvironmentalStatus } from "./StatusBadge";

export type EnvironmentalGoal = {
  name: string;
  department: string;
  targetCo2: string;
  currentCo2: string;
  progress: number;
  deadline: string;
  status: EnvironmentalStatus;
};

type EnvironmentalGoalsTableProps = {
  goals: readonly EnvironmentalGoal[];
};

export default function EnvironmentalGoalsTable({
  goals,
}: EnvironmentalGoalsTableProps) {
  return (
    <div className="overflow-x-auto rounded-lg border border-zinc-800">
      <table className="min-w-[920px] w-full border-collapse text-left text-sm">
        <thead className="bg-zinc-900 text-xs font-semibold text-zinc-400">
          <tr>
            <th className="border-b border-zinc-700 px-4 py-3">Name</th>
            <th className="border-b border-zinc-700 px-4 py-3">Department</th>
            <th className="border-b border-zinc-700 px-4 py-3">Target CO2</th>
            <th className="border-b border-zinc-700 px-4 py-3">Current CO2</th>
            <th className="border-b border-zinc-700 px-4 py-3">Progress</th>
            <th className="border-b border-zinc-700 px-4 py-3">Deadline</th>
            <th className="border-b border-zinc-700 px-4 py-3">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-zinc-900 bg-zinc-950/70 text-zinc-400">
          {goals.map((goal) => (
            <tr className="hover:bg-zinc-900/50" key={goal.name}>
              <td className="px-4 py-3 text-zinc-300">{goal.name}</td>
              <td className="px-4 py-3">{goal.department}</td>
              <td className="px-4 py-3">{goal.targetCo2}</td>
              <td className="px-4 py-3">{goal.currentCo2}</td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-36 rounded-sm bg-zinc-800">
                    <div
                      className="h-full rounded-sm bg-green-500"
                      style={{ width: `${goal.progress}%` }}
                    />
                  </div>
                  <span className="w-10 text-xs text-zinc-400">
                    {goal.progress}%
                  </span>
                </div>
              </td>
              <td className="px-4 py-3">{goal.deadline}</td>
              <td className="px-4 py-3">
                <StatusBadge status={goal.status} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
