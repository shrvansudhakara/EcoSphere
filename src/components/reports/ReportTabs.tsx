type ReportTab = {
  label: string;
  active?: boolean;
};

type ReportTabsProps = {
  tabs: readonly ReportTab[];
};

export default function ReportTabs({ tabs }: ReportTabsProps) {
  return (
    <div className="grid gap-2 md:grid-cols-5">
      {tabs.map((tab) => (
        <button
          className={
            tab.active
              ? "h-9 rounded-md border border-zinc-300 bg-zinc-300 px-4 text-left text-sm font-medium text-zinc-950"
              : "h-9 rounded-md border border-zinc-800 bg-zinc-950 px-4 text-left text-sm font-medium text-zinc-500 transition-colors hover:border-zinc-700 hover:text-zinc-300"
          }
          key={tab.label}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
