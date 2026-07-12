import { BarChart3, FileText, Leaf, ShieldCheck, Users } from "lucide-react";
import {
  ReportBuilder,
  ReportCard,
  type ReportCardItem,
  ReportTabs,
} from "@/components/reports";

const tabs = [
  { label: "Environmental" },
  { label: "Social" },
  { label: "Governance" },
  { label: "ESG Summary", active: true },
  { label: "Custom Builder" },
] as const;

const reports: ReportCardItem[] = [
  {
    title: "Environmental Report",
    description: "Emissions, goals, vendor and product breakdown",
    icon: Leaf,
    accentClassName: "text-green-400",
  },
  {
    title: "Social Report",
    description: "Diversity, CSR participation and training completion",
    icon: Users,
    accentClassName: "text-sky-400",
  },
  {
    title: "Governance Report",
    description: "Policies, audits, compliance and risk summary",
    icon: ShieldCheck,
    accentClassName: "text-violet-400",
  },
  {
    title: "ESG Summary",
    description: "Executive overview, all scores and department comparison",
    icon: BarChart3,
    accentClassName: "text-amber-300",
  },
];

const filters = [
  { label: "Date Range", value: "Date Range" },
  { label: "Department", value: "Department" },
  { label: "Module", value: "Module" },
  { label: "Employee", value: "Employee" },
  { label: "ESG Category", value: "ESG Category" },
] as const;

export default function ReportsPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      <div>
        <p className="text-sm text-zinc-400">
          Reports: Analytics & Custom Report Builder
        </p>
        <h1 className="mt-1 text-2xl font-semibold text-zinc-100">Reports</h1>
        <p className="mt-2 max-w-2xl text-sm text-zinc-500">
          Generate ESG reports, compare module performance, and export custom
          datasets for leadership review.
        </p>
      </div>

      <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <ReportTabs tabs={tabs} />

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {reports.map((report) => (
            <ReportCard key={report.title} report={report} />
          ))}
        </div>
      </section>

      <ReportBuilder filters={filters} />

      <div className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4">
        <div className="flex items-center gap-2 text-sm font-semibold text-zinc-300">
          <FileText className="h-4 w-4 text-zinc-500" aria-hidden="true" />
          Report Output Preview
        </div>
        <p className="mt-3 text-sm text-zinc-500">
          Mock report output will summarize environmental, social, governance,
          and gamification metrics based on the selected filters.
        </p>
      </div>
    </div>
  );
}
