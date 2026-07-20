import {
  FaChartLine,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";

import PlacementStats from "./PlacementStats";

function PlacementHero({
  year,
  setYear,
}) {
  const selectedYear = year || "2024";

  const handleYearChange = (event) => {
    if (setYear) {
      setYear(event.target.value);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#041641] via-[#062D75] to-[#0756B8] px-3 py-8 text-white sm:px-5 sm:py-10 lg:py-12">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-28 -top-36 h-[430px] w-[430px] rounded-full border border-white/10" />

        <div className="absolute -right-10 top-12 h-[260px] w-[260px] rounded-full border border-white/10" />

        <div className="absolute bottom-0 right-[18%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="absolute left-[68%] top-12 h-2 w-2 rounded-full bg-cyan-300" />

        <div className="absolute left-[73%] top-28 h-1.5 w-1.5 rounded-full bg-blue-200" />

        <div className="absolute bottom-8 left-[45%] h-1.5 w-1.5 rounded-full bg-cyan-300" />
      </div>

      {/* Desktop Background Illustration */}
      <div className="pointer-events-none absolute bottom-7 right-8 hidden items-end gap-4 opacity-20 lg:flex">
        <div className="flex h-36 w-36 items-center justify-center text-[110px] text-cyan-300">
          <FaUserGraduate />
        </div>

        <div className="flex h-44 w-44 items-center justify-center text-[140px] text-cyan-300">
          <FaChartLine />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1550px]">
        {/* Top Content */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="text-sm font-bold text-cyan-300">
              Our Placements. Their Success.
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
              HireX Placement Record
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Empowering careers. Building futures. Celebrating success stories
              every month.
            </p>
          </div>

          {/* Year Selector */}
          <div className="w-full lg:w-auto">
            <label
              htmlFor="placement-hero-year"
              className="sr-only"
            >
              Placement year
            </label>

            <select
              id="placement-hero-year"
              value={selectedYear}
              onChange={handleYearChange}
              className="w-full rounded-xl border border-white/20 bg-white/10 px-5 py-3.5 font-bold text-white outline-none backdrop-blur-xl transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20 lg:min-w-[130px]"
            >
              <option
                value="2026"
                className="text-slate-900"
              >
                2026
              </option>

              <option
                value="2025"
                className="text-slate-900"
              >
                2025
              </option>

              <option
                value="2024"
                className="text-slate-900"
              >
                2024
              </option>

              <option
                value="2023"
                className="text-slate-900"
              >
                2023
              </option>
            </select>
          </div>
        </div>

        {/* Placement Statistics */}
        <PlacementStats />

        {/* Mobile Highlight */}
        <div className="mt-6 flex items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/10 px-5 py-4 backdrop-blur-xl lg:hidden">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300">
            <FaTrophy />
          </div>

          <div>
            <p className="text-xs text-blue-100">
              Placement Performance
            </p>

            <p className="font-extrabold text-white">
              Growing stronger every year
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PlacementHero;