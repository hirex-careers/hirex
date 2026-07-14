import { FaArrowRight } from "react-icons/fa";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative overflow-hidden bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 p-8">

      {/* Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      <div className="relative z-10">

        <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white text-2xl shadow-lg">

          {icon}

        </div>

        <h3 className="mt-7 text-2xl font-bold text-gray-800">

          {title}

        </h3>

        <p className="mt-4 text-gray-500 leading-7">

          {description}

        </p>

        <button className="mt-8 flex items-center gap-2 text-blue-600 font-semibold group-hover:gap-4 transition-all">

          Learn More

          <FaArrowRight />

        </button>

      </div>

    </div>
  );
}

export default FeatureCard;