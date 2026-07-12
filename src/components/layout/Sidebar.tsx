export default function Sidebar() {
  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-900 p-4">
      <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-zinc-400">
        Environmental
      </h2>

      <nav
        aria-label="Environmental navigation"
        className="flex flex-col gap-2"
      >
        <button
          type="button"
          className="rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-800"
        >
          Overview
        </button>

        <button
          type="button"
          className="rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-800"
        >
          Emission Factors
        </button>

        <button
          type="button"
          className="rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-800"
        >
          Product ESG Profiles
        </button>

        <button
          type="button"
          className="rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-800"
        >
          Carbon Transactions
        </button>

        <button
          type="button"
          className="rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-800"
        >
          Goals
        </button>
      </nav>
    </aside>
  );
}
