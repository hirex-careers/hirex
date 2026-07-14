import { FaArrowRight } from "react-icons/fa";

function FeatureCard({ icon, title, description }) {
  return (
    <div className="group relative flex h-[330px] w-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl sm:h-[340px] sm:p-7 lg:h-[350px] xl:p-8">

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-0 transition duration-500 group-hover:opacity-100"></div>

      <div className="relative z-10 flex h-full flex-col">

        {/* Icon */}
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xl text-white shadow-lg sm:h-16 sm:w-16 sm:text-2xl">
          {icon}
        </div>

        {/* Title */}
        <h3 className="mt-6 min-h-[56px] text-xl font-bold leading-7 text-gray-800 sm:mt-7 sm:text-2xl">
          {title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-gray-500 sm:mt-4 sm:text-base">
          {description}
        </p>

        {/* Button */}
        <button
          type="button"
          className="mt-auto flex items-center gap-2 pt-6 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-4"
        >
          Learn More
          <FaArrowRight />
        </button>

      </div>
    </div>
  );
}

export default FeatureCard;