type Department = {
  name: string;
  score: number;
};

type DepartmentRankingProps = {
  departments: readonly Department[];
};

export default function DepartmentRanking({
  departments,
}: DepartmentRankingProps) {
  const max = Math.max(...departments.map((department) => department.score), 1);

  return (
    <div className="flex h-52 items-end gap-5 px-2 pb-1">
      {departments.map((department) => (
        <div
          className="flex min-w-0 flex-1 flex-col items-center gap-2"
          key={department.name}
        >
          <div
            className="w-full max-w-12 rounded-md border border-sky-400/80 bg-sky-500/40 shadow-[0_0_16px_rgba(56,189,248,0.08)]"
            style={{ height: `${(department.score / max) * 132 + 22}px` }}
          />
          <span className="truncate text-xs text-zinc-400">
            {department.name}
          </span>
        </div>
      ))}
    </div>
  );
}
