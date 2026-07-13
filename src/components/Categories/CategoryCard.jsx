import {
  FaCode,
  FaChartLine,
  FaBullhorn,
  FaPaintBrush,
  FaArrowRight,
} from "react-icons/fa";

const iconMap = {
  code: <FaCode size={28} />,
  data: <FaChartLine size={28} />,
  marketing: <FaBullhorn size={28} />,
  design: <FaPaintBrush size={28} />,
};

function CategoryCard({ title, jobs, icon }) {
  return (
    <div className="group relative bg-white rounded-3xl border border-gray-100 p-7 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden">

      {/* Gradient Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-blue-50 via-white to-cyan-50"></div>

      <div className="relative z-10">

        {/* Top */}
        <div className="flex justify-between items-start">

          <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg">

            {iconMap[icon]}

          </div>

          <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition">

            <FaArrowRight />

          </div>

        </div>

        {/* Title */}
        <h3 className="mt-8 text-2xl font-bold text-gray-800">

          {title}

        </h3>

        {/* Jobs */}
        <p className="mt-3 text-gray-500">

          {jobs}+ Jobs Available

        </p>

      </div>

    </div>
  );
}

export default CategoryCard;