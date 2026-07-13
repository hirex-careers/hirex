import { FaRocket } from "react-icons/fa";

function FloatingCard() {
  return (
    <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] px-6 py-5 flex items-center gap-4 min-w-[300px]">

      {/* Icon */}
      <div className="w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 flex items-center justify-center text-white text-xl">
        <FaRocket />
      </div>

      {/* Text */}
      <div>
        <h3 className="font-bold text-lg text-gray-800">
          Your Dream Job
        </h3>

        <p className="text-sm text-gray-500">
          is One Step Away!
        </p>
      </div>

    </div>
  );
}

export default FloatingCard;