type Activity = {
  label: string;
  tone: "success" | "warning" | "info" | "neutral";
};

type RecentActivityProps = {
  activities: readonly Activity[];
};

const toneClassNames: Record<Activity["tone"], string> = {
  success: "bg-green-500",
  warning: "bg-yellow-400",
  info: "bg-sky-400",
  neutral: "bg-zinc-400",
};

export default function RecentActivity({ activities }: RecentActivityProps) {
  return (
    <ul className="space-y-3">
      {activities.map((activity) => (
        <li
          className="flex items-center gap-3 text-sm text-zinc-300"
          key={activity.label}
        >
          <span
            className={`h-2 w-2 rounded-sm ${toneClassNames[activity.tone]}`}
          />
          <span>{activity.label}</span>
        </li>
      ))}
    </ul>
  );
}
