import { FaRocket } from "react-icons/fa";

function FloatingCard() {
  return (
    <div className="w-[310px] rounded-3xl bg-white/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-white/60 p-5">

      <div className="flex items-center gap-4">

        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-lg">

          <FaRocket className="text-white text-2xl" />

        </div>

        {/* Text */}
        <div>

          <h3 className="text-xl font-bold text-gray-800">
            Your Dream Job
          </h3>

          <p className="text-gray-500 mt-1">
            is One Step Away!
          </p>

        </div>

      </div>

      {/* Bottom Line */}
      <div className="mt-5 h-2 rounded-full bg-gray-100 overflow-hidden">

        <div className="h-full w-[70%] rounded-full bg-gradient-to-r from-blue-600 to-cyan-400"></div>

      </div>

    </div>
  );
}

export default FloatingCard;