import { FaCode, FaChartLine, FaBullhorn, FaPaintBrush } from "react-icons/fa";

const iconMap = {
  code: <FaCode size={28} />,
  data: <FaChartLine size={28} />,
  marketing: <FaBullhorn size={28} />,
  design: <FaPaintBrush size={28} />,
};

function CategoryCard({ title, jobs, icon }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
      <div className="w-14 h-14 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center mb-5">
        {iconMap[icon]}
      </div>

      <h3 className="text-xl font-semibold">{title}</h3>

      <p className="text-gray-500 mt-2">{jobs} Jobs Available</p>
    </div>
  );
}

export default CategoryCard;