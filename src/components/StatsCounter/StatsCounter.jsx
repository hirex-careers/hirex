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
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 uppercase tracking-widest font-semibold">
            Our Achievements
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 text-gray-900">
            Trusted by Thousands
          </h2>

          <p className="text-gray-500 mt-4 text-lg">
            Helping job seekers and recruiters connect faster.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {stats.map((item) => (
            <StatCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StatsCounter;