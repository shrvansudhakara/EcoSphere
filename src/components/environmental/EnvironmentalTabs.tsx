type EnvironmentalTab = {
  label: string;
  active?: boolean;
};

type EnvironmentalTabsProps = {
  tabs: readonly EnvironmentalTab[];
};

export default function EnvironmentalTabs({ tabs }: EnvironmentalTabsProps) {
  return (
    <div className="grid gap-2 md:grid-cols-4">
      {tabs.map((tab) => (
        <button
          className={
            tab.active
              ? "h-9 rounded-md border border-green-600 bg-green-600 px-4 text-left text-sm font-medium text-zinc-950"
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
