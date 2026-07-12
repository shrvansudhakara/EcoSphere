type EmissionsTrendProps = {
  points: readonly number[];
};

export default function EmissionsTrend({ points }: EmissionsTrendProps) {
  const width = 520;
  const height = 160;
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = Math.max(max - min, 1);
  const coordinates = points.map((point, index) => {
    const x = (index / (points.length - 1)) * width;
    const y = height - ((point - min) / range) * (height - 34) - 17;

    return { x, y };
  });
  const linePoints = coordinates.map(({ x, y }) => `${x},${y}`).join(" ");

  return (
    <div className="h-52">
      <svg
        aria-label="Emissions trend over 12 months"
        className="h-full w-full"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
      >
        <polyline
          fill="none"
          points={linePoints}
          stroke="#2fa64f"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
        />
        {coordinates.map(({ x, y }) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} fill="#2fa64f" r="4" />
        ))}
      </svg>
    </div>
  );
}
