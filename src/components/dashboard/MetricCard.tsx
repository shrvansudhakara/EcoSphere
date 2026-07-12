type MetricCardProps = {
  title: string;
  value: string;
  accent: string;
  caption?: string;
};

export default function MetricCard({
  title,
  value,
  accent,
  caption,
}: MetricCardProps) {
  return (
    <section
      className="min-h-28 rounded-lg border bg-zinc-950/70 p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
      style={{ borderColor: accent }}
    >
      <p className="text-xs font-medium text-zinc-500">{title}</p>
      <p className="mt-4 text-2xl font-semibold" style={{ color: accent }}>
        {value}
      </p>
      {caption && <p className="mt-2 text-xs text-zinc-500">{caption}</p>}
    </section>
  );
}
