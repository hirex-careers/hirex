import {
  FaArrowUp,
  FaRupeeSign,
  FaTrophy,
} from "react-icons/fa";

const salaryRanges = [
  {
    range: "0 - 3 LPA",
    percentage: 12.4,
    candidates: 1593,
  },
  {
    range: "3 - 6 LPA",
    percentage: 24.7,
    candidates: 3173,
  },
  {
    range: "6 - 10 LPA",
    percentage: 28.9,
    candidates: 3712,
  },
  {
    range: "10 - 15 LPA",
    percentage: 18.6,
    candidates: 2389,
  },
  {
    range: "15 - 20 LPA",
    percentage: 9.3,
    candidates: 1195,
  },
  {
    range: "20+ LPA",
    percentage: 6.1,
    candidates: 784,
  },
];

function SalaryDistribution() {
  const highestPercentage = Math.max(
    ...salaryRanges.map((item) => item.percentage)
  );

  return (
    <section className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 px-5 py-5 sm:px-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Package Analytics
        </p>

        <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
          Salary Distribution
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Candidate distribution across annual salary ranges.
        </p>
      </div>

      <div className="p-5 sm:p-7">
        {/* Summary */}
        <div className="grid grid-cols-3 gap-3">
          <SalaryStat
            icon={<FaRupeeSign />}
            value="8.56"
            label="Average LPA"
          />

          <SalaryStat
            icon={<FaTrophy />}
            value="21.4"
            label="Highest LPA"
          />

          <SalaryStat
            icon={<FaArrowUp />}
            value="+15.2%"
            label="Growth"
          />
        </div>

        {/* Distribution Bars */}
        <div className="mt-7 space-y-5">
          {salaryRanges.map((item) => {
            const barWidth =
              (item.percentage / highestPercentage) * 100;

            return (
              <div key={item.range}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-bold text-slate-700">
                      {item.range}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      {item.candidates.toLocaleString("en-IN")} candidates
                    </p>
                  </div>

                  <p className="shrink-0 text-sm font-extrabold text-slate-900">
                    {item.percentage}%
                  </p>
                </div>

                <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
                  <div
                    style={{
                      width: `${barWidth}%`,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 transition-all duration-700"
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/* Highlight */}
        <div className="mt-7 rounded-2xl bg-gradient-to-r from-[#071A55] to-[#2563EB] p-5 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-cyan-300">
            Most Common Package
          </p>

          <div className="mt-3 flex items-end justify-between gap-4">
            <div>
              <p className="text-2xl font-extrabold">
                ₹6 - ₹10 LPA
              </p>

              <p className="mt-2 text-sm text-blue-100">
                3,712 candidates placed in this salary range.
              </p>
            </div>

            <FaRupeeSign className="shrink-0 text-4xl text-cyan-300" />
          </div>
        </div>
      </div>
    </section>
  );
}

function SalaryStat({
  icon,
  value,
  label,
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-center sm:p-4">
      <div className="mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        {icon}
      </div>

      <p className="mt-3 text-sm font-extrabold text-slate-900 sm:text-lg">
        {value}
      </p>

      <p className="mt-1 text-[9px] font-semibold text-slate-500 sm:text-xs">
        {label}
      </p>
    </div>
  );
}

export default SalaryDistribution;