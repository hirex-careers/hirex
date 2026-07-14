import {
  FaCode,
  FaChartLine,
  FaBullhorn,
  FaPaintBrush,
  FaArrowRight,
  FaRobot,
  FaShieldAlt,
  FaCloud,
  FaServer,
  FaHandshake,
  FaWallet,
  FaUsers,
  FaHeartbeat,
} from "react-icons/fa";

const iconMap = {
  code: <FaCode />,
  data: <FaChartLine />,
  marketing: <FaBullhorn />,
  design: <FaPaintBrush />,
  ai: <FaRobot />,
  security: <FaShieldAlt />,
  cloud: <FaCloud />,
  devops: <FaServer />,
  sales: <FaHandshake />,
  finance: <FaWallet />,
  hr: <FaUsers />,
  health: <FaHeartbeat />,
};

function CategoryCard({ title, jobs, icon }) {
  return (
    <div className="group relative flex h-[270px] w-full cursor-pointer flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl sm:h-[285px] sm:p-6 lg:h-[280px] lg:p-5 xl:h-[290px] xl:p-6">
      {/* Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-0 transition duration-500 group-hover:opacity-100"></div>

      <div className="relative z-10 flex h-full flex-col">
        {/* Top */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-2xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-[28px] lg:h-14 lg:w-14 lg:text-2xl xl:h-16 xl:w-16 xl:text-[28px]">
            {iconMap[icon]}
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all duration-300 group-hover:-rotate-45 group-hover:bg-blue-600 group-hover:text-white">
            <FaArrowRight />
          </div>
        </div>

        {/* Title */}
        <h3 className="mt-7 min-h-[64px] text-xl font-bold leading-8 text-gray-800 sm:text-2xl lg:text-xl xl:text-2xl">
          {title}
        </h3>

        {/* Job Count */}
        <p className="mt-auto border-t border-gray-100 pt-4 text-sm font-medium text-gray-500 sm:text-base">
          <span className="font-bold text-blue-600">{jobs}+</span>{" "}
          Jobs Available
        </p>
      </div>
    </div>
  );
}

export default CategoryCard;