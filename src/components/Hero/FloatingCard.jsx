import { FaRocket } from "react-icons/fa";

function FloatingCard() {
  return (
    <div className="w-[250px] rounded-2xl border border-white/60 bg-white/95 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.18)] backdrop-blur-xl sm:w-[285px] sm:rounded-3xl sm:p-5 lg:w-[310px]">
      <div className="flex items-center gap-3 sm:gap-4">

        {/* Icon */}
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg sm:h-14 sm:w-14 sm:rounded-2xl lg:h-16 lg:w-16">
          <FaRocket className="text-lg text-white sm:text-xl lg:text-2xl" />
        </div>

        {/* Text */}
        <div className="min-w-0">
          <h3 className="truncate text-base font-bold text-gray-800 sm:text-lg lg:text-xl">
            Your Dream Job
          </h3>

          <p className="mt-1 text-xs text-gray-500 sm:text-sm lg:text-base">
            is One Step Away!
          </p>
        </div>
      </div>

      {/* Progress Line */}
      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-gray-100 sm:mt-5 sm:h-2">
        <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>
      </div>
    </div>
  );
}

export default FloatingCard;