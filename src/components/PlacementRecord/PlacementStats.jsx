import {
  FaBriefcase,
  FaBuilding,
  FaChartLine,
  FaRupeeSign,
  FaTrophy,
  FaUsers,
} from "react-icons/fa";

const placementStats = [
  {
    id: 1,
    label: "Total Placed",
    value: "12,846",
    growth: "+18.6%",
    icon: <FaUsers />,
    iconClass: "bg-blue-500/20 text-cyan-300",
  },
  {
    id: 2,
    label: "Companies Hired",
    value: "2,425",
    growth: "+24.3%",
    icon: <FaBriefcase />,
    iconClass: "bg-orange-500/20 text-orange-300",
  },
  {
    id: 3,
    label: "Average Package",
    value: "8.56 LPA",
    growth: "+15.2%",
    icon: <FaRupeeSign />,
    iconClass: "bg-amber-500/20 text-amber-300",
  },
  {
    id: 4,
    label: "Highest Package",
    value: "21.4 LPA",
    growth: "+12.5%",
    icon: <FaChartLine />,
    iconClass: "bg-emerald-500/20 text-emerald-300",
  },
  {
    id: 5,
    label: "Total Offers",
    value: "20,153",
    growth: "+19.7%",
    icon: <FaBuilding />,
    iconClass: "bg-cyan-500/20 text-cyan-300",
  },
  {
    id: 6,
    label: "Placement Rate",
    value: "94.6%",
    growth: "+8.4%",
    icon: <FaTrophy />,
    iconClass: "bg-yellow-500/20 text-yellow-300",
  },
];

function PlacementStats() {
  return (
    <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
      {placementStats.map((stat) => (
        <article
          key={stat.id}
          className="group rounded-2xl border border-white/15 bg-white/10 p-3 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white/15 hover:shadow-xl sm:p-4"
        >
          <div className="flex items-start gap-3">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${stat.iconClass}`}
            >
              {stat.icon}
            </div>

            <div className="min-w-0">
              <p className="truncate text-lg font-extrabold text-white sm:text-xl">
                {stat.value}
              </p>

              <p className="mt-1 text-[10px] font-semibold text-blue-100 sm:text-xs">
                {stat.label}
              </p>
            </div>
          </div>

          <div className="mt-3 border-t border-white/10 pt-3">
            <p className="text-[10px] font-semibold text-blue-100 sm:text-xs">
              <span className="font-extrabold text-emerald-300">
                {stat.growth}
              </span>{" "}
              vs last year
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PlacementStats;