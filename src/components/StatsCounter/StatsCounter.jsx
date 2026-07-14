import StatCard from "./StatCard";

import {
  FaUsers,
  FaBuilding,
  FaBriefcase,
  FaChartLine,
} from "react-icons/fa";

const stats = [
  {
    number: 50000,
    suffix: "+",
    title: "Job Seekers",
    icon: <FaUsers />,
  },
  {
    number: 2500,
    suffix: "+",
    title: "Companies",
    icon: <FaBuilding />,
  },
  {
    number: 10000,
    suffix: "+",
    title: "Jobs Posted",
    icon: <FaBriefcase />,
  },
  {
    number: 95,
    suffix: "%",
    title: "Hiring Success",
    icon: <FaChartLine />,
  },
];

function StatsCounter() {
  return (
    <section className="w-full overflow-hidden bg-gradient-to-b from-white to-slate-50 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
            Our Achievements
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Trusted by Thousands
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base lg:text-lg">
            Helping job seekers and recruiters connect faster.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-7 xl:gap-8">
          {stats.map((item) => (
            <StatCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsCounter;