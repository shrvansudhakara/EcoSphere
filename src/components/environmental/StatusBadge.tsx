export type EnvironmentalStatus =
  | "Active"
  | "On Track"
  | "Completed"
  | "Delayed";

type StatusBadgeProps = {
  status: EnvironmentalStatus;
};

const statusClassNames: Record<EnvironmentalStatus, string> = {
  Active: "border-green-500 bg-green-500/10 text-green-400",
  "On Track": "border-green-500 bg-green-500/10 text-green-400",
  Completed: "border-sky-400 bg-sky-400/10 text-sky-300",
  Delayed: "border-rose-400 bg-rose-400/10 text-rose-300",
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex min-w-24 justify-center rounded-md border px-3 py-1 text-xs font-medium ${statusClassNames[status]}`}
    >
      {status}
    </span>
  );
}
