import { FileText, Plus, Trophy } from "lucide-react";
import {
  DepartmentRanking,
  EmissionsTrend,
  MetricCard,
  QuickActions,
  RecentActivity,
  SectionCard,
} from "@/components/dashboard";

const metrics = [
  {
    title: "Environmental Score",
    value: "82 / 100",
    accent: "#2fa64f",
    caption: "Emission tracking and goals",
  },
  {
    title: "Social Score",
    value: "74 / 100",
    accent: "#3ba4f4",
    caption: "CSR and employee engagement",
  },
  {
    title: "Governance Score",
    value: "88 / 100",
    accent: "#a879ff",
    caption: "Policies, audits and compliance",
  },
  {
    title: "Overall ESG Score",
    value: "81 / 100",
    accent: "#3ba4f4",
    caption: "Executive overview",
  },
];

const emissionsTrend = [46, 58, 67, 71, 68, 61, 50, 54, 63, 69, 69, 65];

const departmentRanking = [
  { name: "Sales", score: 58 },
  { name: "HR", score: 82 },
  { name: "Logi", score: 68 },
  { name: "Corp", score: 96 },
  { name: "R&D", score: 66 },
];

const recentActivities = [
  { label: "Priya completed Zero Waste Week", tone: "success" },
  { label: "New compliance issue in Logistics", tone: "warning" },
  { label: "42 new Carbon Transactions logged", tone: "info" },
  { label: "R&D acknowledged Anti-Corruption Policy", tone: "neutral" },
] as const;

const quickActions = [
  {
    label: "Log Carbon Data",
    tone: "green",
    icon: <Plus className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "Start Challenge",
    tone: "orange",
    icon: <Trophy className="h-4 w-4" aria-hidden="true" />,
  },
  {
    label: "View Reports",
    tone: "zinc",
    icon: <FileText className="h-4 w-4" aria-hidden="true" />,
  },
] as const;

export default function DashboardPage() {
  return (
    <div className="mx-auto flex max-w-7xl flex-col gap-5">
      <div>
        <p className="text-sm text-zinc-500">Dashboard: Executive Overview</p>
        <h1 className="mt-1 text-2xl font-semibold text-zinc-100">
          EcoSphere Dashboard
        </h1>
      </div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {metrics.map((metric) => (
          <MetricCard key={metric.title} {...metric} />
        ))}
      </div>

      <p className="text-xs text-zinc-500">
        Features: live KPI tiles, trend arrows, click-through to module
      </p>

      <div className="grid gap-5 xl:grid-cols-2">
        <SectionCard
          title="Emissions Trend (12 mo)"
          className="min-h-72 border-zinc-800"
        >
          <EmissionsTrend points={emissionsTrend} />
        </SectionCard>

        <SectionCard
          title="Department ESG Ranking"
          className="min-h-72 border-zinc-800"
        >
          <DepartmentRanking departments={departmentRanking} />
        </SectionCard>
      </div>

      <div className="grid gap-5 xl:grid-cols-2">
        <SectionCard title="Recent Activity">
          <RecentActivity activities={recentActivities} />
        </SectionCard>

        <SectionCard title="Quick Actions">
          <QuickActions actions={quickActions} />
        </SectionCard>
      </div>

      <SectionCard title="ESG Summary">
        <div className="grid gap-4 text-sm text-zinc-400 md:grid-cols-3">
          <div>
            <p className="text-xs font-semibold uppercase text-green-500">
              Environmental
            </p>
            <p className="mt-2">Carbon transactions and goals are on track.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-sky-400">
              Social
            </p>
            <p className="mt-2">CSR participation rose across key teams.</p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase text-violet-400">
              Governance
            </p>
            <p className="mt-2">Audit acknowledgements remain strongest.</p>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
