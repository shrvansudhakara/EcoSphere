import type { ComponentType, SVGProps } from "react";

export type ReportCardItem = {
  title: string;
  description: string;
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  accentClassName: string;
};

type ReportCardProps = {
  report: ReportCardItem;
};

export default function ReportCard({ report }: ReportCardProps) {
  const Icon = report.icon;

  return (
    <article className="flex min-h-36 flex-col justify-between rounded-xl border border-zinc-700 bg-zinc-950/70 p-4">
      <div>
        <div className="flex items-center gap-2">
          <Icon
            className={`h-4 w-4 ${report.accentClassName}`}
            aria-hidden="true"
          />
          <h2 className="text-sm font-semibold text-zinc-200">
            {report.title}
          </h2>
        </div>
        <p className="mt-3 text-sm leading-6 text-zinc-500">
          {report.description}
        </p>
      </div>

      <button
        className="mt-5 inline-flex h-9 w-28 items-center justify-center rounded-md bg-zinc-300 px-4 text-sm font-semibold text-zinc-950 transition-colors hover:bg-zinc-200"
        type="button"
      >
        Generate
      </button>
    </article>
  );
}
