import { FaRocket } from "react-icons/fa";

function FloatingCard() {
  return (
    <div className="absolute right-0 top-20 bg-white rounded-2xl shadow-xl px-5 py-4 z-20 animate-bounce">

      <div className="flex items-center gap-3">

        <div className="bg-blue-600 text-white rounded-full p-3">
          <FaRocket />
        </div>

        <div>
          <h4 className="font-semibold">
            Your Dream Job
          </h4>

          <p className="text-sm text-gray-500">
            is One Step Away!
          </p>
        </div>

      </div>

    </div>
  );
}

export default FloatingCard;