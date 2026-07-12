import {
  Building2,
  FileText,
  LayoutDashboard,
  Leaf,
  Settings,
  Trophy,
  Users,
} from "lucide-react";
import Link from "next/link";

const features = [
  {
    title: "Environmental",
    description:
      "Track emissions, goals, carbon transactions, and product ESG data.",
    href: "/environmental",
    icon: Leaf,
    accentClassName: "text-green-400",
  },
  {
    title: "Social",
    description:
      "Manage CSR activities, participation, diversity, and engagement.",
    href: "/social",
    icon: Users,
    accentClassName: "text-sky-400",
  },
  {
    title: "Governance",
    description:
      "Review policies, acknowledgements, audits, and compliance issues.",
    href: "/governance",
    icon: Building2,
    accentClassName: "text-violet-400",
  },
  {
    title: "Gamification",
    description:
      "Run challenges, award badges, track rewards, and compare teams.",
    href: "/gamification",
    icon: Trophy,
    accentClassName: "text-orange-400",
  },
  {
    title: "Reports",
    description: "Generate ESG summaries, module reports, and custom exports.",
    href: "/reports",
    icon: FileText,
    accentClassName: "text-zinc-300",
  },
  {
    title: "Settings",
    description:
      "Configure departments, categories, ESG rules, and notifications.",
    href: "/settings",
    icon: Settings,
    accentClassName: "text-zinc-400",
  },
] as const;

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-8 text-white">
      <div className="mx-auto flex max-w-7xl flex-col gap-6">
        <section className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-6">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-green-500/60 bg-green-500/10">
                  <Leaf className="h-5 w-5 text-green-400" aria-hidden="true" />
                </div>
                <p className="text-sm font-medium text-green-500">EcoSphere</p>
              </div>

              <h1 className="mt-5 text-4xl font-semibold text-zinc-100">
                EcoSphere
              </h1>
              <p className="mt-2 text-xl font-medium text-zinc-300">
                Enterprise ESG Management Platform
              </p>
              <p className="mt-4 max-w-3xl text-sm leading-6 text-zinc-500">
                A unified workspace for ESG teams to track environmental goals,
                CSR participation, governance compliance, gamified engagement,
                and executive reporting for the Odoo Hackathon challenge.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <Link
                className="inline-flex h-11 min-w-48 items-center justify-center gap-2 rounded-md bg-green-600 px-5 text-sm font-semibold text-zinc-950 transition-colors hover:bg-green-500"
                href="/dashboard"
              >
                <LayoutDashboard className="h-4 w-4" aria-hidden="true" />
                Launch Dashboard
              </Link>
              <div className="flex gap-3">
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-700 bg-zinc-950 px-4 text-sm font-medium text-zinc-300 transition-colors hover:border-green-500 hover:text-green-400"
                  href="/environmental"
                >
                  Environmental
                </Link>
                <Link
                  className="inline-flex h-9 items-center justify-center rounded-md border border-zinc-700 bg-zinc-950 px-4 text-sm font-medium text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100"
                  href="/reports"
                >
                  Reports
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-4">
            <p className="text-sm text-zinc-500">Modules</p>
            <h2 className="mt-1 text-2xl font-semibold text-zinc-100">
              ESG operations at a glance
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {features.map((feature) => {
              const Icon = feature.icon;

              return (
                <Link
                  className="group rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 transition-colors hover:border-zinc-600 hover:bg-zinc-900/50"
                  href={feature.href}
                  key={feature.title}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      className={`h-4 w-4 ${feature.accentClassName}`}
                      aria-hidden="true"
                    />
                    <h3 className="text-sm font-semibold text-zinc-200">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-zinc-500">
                    {feature.description}
                  </p>
                </Link>
              );
            })}
          </div>
        </section>

        <footer className="rounded-xl border border-zinc-800 bg-zinc-950/60 p-4 text-sm text-zinc-500">
          Built for the Odoo Hackathon
        </footer>
      </div>
    </main>
  );
}
