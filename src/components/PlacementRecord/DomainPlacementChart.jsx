import { useState } from "react";

const domainData = [
  {
    id: 1,
    name: "Software Development",
    percentage: 45.2,
    placements: 5806,
    color: "#2563EB",
  },
  {
    id: 2,
    name: "Data Science",
    percentage: 18.7,
    placements: 2402,
    color: "#06B6D4",
  },
  {
    id: 3,
    name: "Analytics",
    percentage: 12.3,
    placements: 1580,
    color: "#F59E0B",
  },
  {
    id: 4,
    name: "Cloud Computing",
    percentage: 8.6,
    placements: 1105,
    color: "#EF4444",
  },
  {
    id: 5,
    name: "DevOps",
    percentage: 6.1,
    placements: 784,
    color: "#14B8A6",
  },
  {
    id: 6,
    name: "Others",
    percentage: 9.1,
    placements: 1169,
    color: "#94A3B8",
  },
];

function DomainPlacementChart() {
  const [activeDomain, setActiveDomain] = useState(domainData[0]);

  const gradient = domainData
    .reduce(
      (result, item) => {
        const start = result.current;
        const end = start + item.percentage;

        result.parts.push(
          `${item.color} ${start}% ${end}%`
        );

        result.current = end;
        return result;
      },
      {
        current: 0,
        parts: [],
      }
    )
    .parts.join(", ");

  return (
    <section className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 px-5 py-5 sm:px-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Domain Analytics
        </p>

        <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
          Domain-wise Placements
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Placement distribution across career domains.
        </p>
      </div>

      <div className="p-5 sm:p-7">
        <div className="grid items-center gap-8 md:grid-cols-[220px_1fr]">
          {/* Donut */}
          <div className="flex justify-center">
            <div
              style={{
                background: `conic-gradient(${gradient})`,
              }}
              className="relative h-52 w-52 rounded-full shadow-inner"
            >
              <div className="absolute inset-8 flex flex-col items-center justify-center rounded-full bg-white shadow-sm">
                <p className="text-2xl font-extrabold text-slate-900">
                  12,846
                </p>

                <p className="mt-1 text-xs font-semibold text-slate-500">
                  Total Placed
                </p>
              </div>
            </div>
          </div>

          {/* Domains */}
          <div className="space-y-3">
            {domainData.map((domain) => (
              <button
                key={domain.id}
                type="button"
                onClick={() => setActiveDomain(domain)}
                className={`flex w-full items-center justify-between gap-4 rounded-xl border px-4 py-3 text-left transition ${
                  activeDomain.id === domain.id
                    ? "border-blue-200 bg-blue-50"
                    : "border-transparent hover:border-slate-200 hover:bg-slate-50"
                }`}
              >
                <span className="flex min-w-0 items-center gap-3">
                  <span
                    style={{
                      backgroundColor: domain.color,
                    }}
                    className="h-3 w-3 shrink-0 rounded-full"
                  ></span>

                  <span className="truncate text-sm font-bold text-slate-700">
                    {domain.name}
                  </span>
                </span>

                <span className="shrink-0 text-sm font-extrabold text-slate-900">
                  {domain.percentage}%
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Domain */}
        <div className="mt-7 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                Selected Domain
              </p>

              <h3 className="mt-2 text-lg font-extrabold text-slate-900">
                {activeDomain.name}
              </h3>
            </div>

            <div className="flex gap-3">
              <DomainStat
                value={activeDomain.placements.toLocaleString("en-IN")}
                label="Candidates"
              />

              <DomainStat
                value={`${activeDomain.percentage}%`}
                label="Share"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function DomainStat({ value, label }) {
  return (
    <div className="min-w-[100px] rounded-xl bg-white px-4 py-3 text-center shadow-sm">
      <p className="font-extrabold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold text-slate-500">
        {label}
      </p>
    </div>
  );
}

export default DomainPlacementChart;