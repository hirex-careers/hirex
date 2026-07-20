import { useState } from "react";

import {
  FaCalendarAlt,
  FaChartLine,
} from "react-icons/fa";

const monthlyData = [
  { month: "Jan", value: 245 },
  { month: "Feb", value: 310 },
  { month: "Mar", value: 470 },
  { month: "Apr", value: 395 },
  { month: "May", value: 742 },
  { month: "Jun", value: 455 },
  { month: "Jul", value: 438 },
  { month: "Aug", value: 365 },
  { month: "Sep", value: 610 },
  { month: "Oct", value: 670 },
  { month: "Nov", value: 692 },
  { month: "Dec", value: 760 },
];

function MonthlyPlacementChart() {
  const [period, setPeriod] = useState("Monthly");
  const [activeIndex, setActiveIndex] = useState(4);

  const maxValue = Math.max(
    ...monthlyData.map((item) => item.value)
  );

  const points = monthlyData.map((item, index) => {
    const x =
      (index / (monthlyData.length - 1)) * 100;

    const y =
      92 - (item.value / maxValue) * 72;

    return {
      ...item,
      x,
      y,
    };
  });

  const linePath = points
    .map((point, index) => {
      const command = index === 0 ? "M" : "L";

      return `${command} ${point.x} ${point.y}`;
    })
    .join(" ");

  const areaPath =
    `${linePath} L 100 100 L 0 100 Z`;

  const activePoint =
    points[activeIndex] || points[0];

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Placement Growth
          </p>

          <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
            Monthly Candidate Placements
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Track month-wise placement performance.
          </p>
        </div>

        <select
          value={period}
          onChange={(event) =>
            setPeriod(event.target.value)
          }
          className="rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm font-bold text-slate-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
        >
          <option value="Monthly">
            Monthly
          </option>

          <option value="Quarterly">
            Quarterly
          </option>

          <option value="Yearly">
            Yearly
          </option>
        </select>
      </div>

      <div className="p-4 sm:p-6 lg:p-7">
        {/* Summary Cards */}
        <div className="grid gap-4 sm:grid-cols-3">
          <ChartStat
            icon={<FaCalendarAlt />}
            label="Best Month"
            value="December"
          />

          <ChartStat
            icon={<FaChartLine />}
            label="Highest Placements"
            value="760"
          />

          <ChartStat
            icon={<FaChartLine />}
            label="Average Growth"
            value="+18.6%"
          />
        </div>

        {/* Chart */}
        <div className="relative mt-7 h-[300px] overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-b from-blue-50/70 to-white sm:h-[360px]">
          {/* Grid Lines */}
          <div className="pointer-events-none absolute inset-x-4 bottom-12 top-7 sm:inset-x-6">
            {[0, 1, 2, 3, 4].map((line) => (
              <div
                key={line}
                style={{
                  top: `${line * 25}%`,
                }}
                className="absolute left-0 right-0 border-t border-dashed border-slate-200"
              />
            ))}
          </div>

          {/* SVG Graph */}
          <svg
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            className="absolute bottom-12 left-4 right-4 top-7 h-[calc(100%-76px)] w-[calc(100%-32px)] overflow-visible sm:left-6 sm:right-6 sm:w-[calc(100%-48px)]"
          >
            <defs>
              <linearGradient
                id="placement-chart-area"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor="#2563EB"
                  stopOpacity="0.3"
                />

                <stop
                  offset="100%"
                  stopColor="#2563EB"
                  stopOpacity="0"
                />
              </linearGradient>
            </defs>

            <path
              d={areaPath}
              fill="url(#placement-chart-area)"
            />

            <path
              d={linePath}
              fill="none"
              stroke="#2563EB"
              strokeWidth="1.7"
              vectorEffect="non-scaling-stroke"
              strokeLinecap="round"
              strokeLinejoin="round"
            />

            {points.map((point, index) => (
              <circle
                key={point.month}
                cx={point.x}
                cy={point.y}
                r={
                  index === activeIndex
                    ? 2.2
                    : 1.6
                }
                fill={
                  index === activeIndex
                    ? "#1D4ED8"
                    : "#3B82F6"
                }
                stroke="#FFFFFF"
                strokeWidth="0.8"
                vectorEffect="non-scaling-stroke"
                className="cursor-pointer"
                onClick={() =>
                  setActiveIndex(index)
                }
              />
            ))}
          </svg>

          {/* Tooltip */}
          <div
            style={{
              left: `clamp(70px, ${activePoint.x}%, calc(100% - 70px))`,
              top: `${Math.max(
                activePoint.y - 2,
                8
              )}%`,
            }}
            className="pointer-events-none absolute z-20 -translate-x-1/2 -translate-y-full rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xl"
          >
            <p className="text-xs font-bold text-slate-500">
              {activePoint.month} 2024
            </p>

            <p className="mt-1 text-sm font-extrabold text-slate-900">
              Placed: {activePoint.value}
            </p>
          </div>

          {/* Month Labels */}
          <div className="absolute bottom-3 left-4 right-4 grid grid-cols-12 text-center sm:left-6 sm:right-6">
            {monthlyData.map((item, index) => (
              <button
                key={item.month}
                type="button"
                onClick={() =>
                  setActiveIndex(index)
                }
                className={`text-[9px] font-bold transition sm:text-xs ${
                  index === activeIndex
                    ? "text-blue-600"
                    : "text-slate-400 hover:text-slate-600"
                }`}
              >
                {item.month}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ChartStat({
  icon,
  label,
  value,
}) {
  return (
    <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-xs font-semibold text-slate-500">
          {label}
        </p>

        <p className="mt-1 truncate font-extrabold text-slate-900">
          {value}
        </p>
      </div>
    </div>
  );
}

export default MonthlyPlacementChart;