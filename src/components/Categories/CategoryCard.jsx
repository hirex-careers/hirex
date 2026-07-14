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
  code: <FaCode size={28} />,
  data: <FaChartLine size={28} />,
  marketing: <FaBullhorn size={28} />,
  design: <FaPaintBrush size={28} />,
  ai: <FaRobot size={28} />,
  security: <FaShieldAlt size={28} />,
  cloud: <FaCloud size={28} />,
  devops: <FaServer size={28} />,
  sales: <FaHandshake size={28} />,
  finance: <FaWallet size={28} />,
  hr: <FaUsers size={28} />,
  health: <FaHeartbeat size={28} />,
};

function CategoryCard({ title, jobs, icon }) {
  return (
    <div className="group relative bg-white rounded-3xl border border-gray-100 p-7 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 cursor-pointer overflow-hidden h-[290px] flex flex-col">

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
        <h3 className="mt-8 text-2xl font-bold text-gray-800 min-h-[64px] leading-8">
          {title}  
        </h3>

        {/* Jobs */}
        <p className="mt-auto pt-4 text-gray-500">
          {jobs}+ Jobs Available
        </p>

      </div>

    </div>
  );
}

export default CategoryCard;