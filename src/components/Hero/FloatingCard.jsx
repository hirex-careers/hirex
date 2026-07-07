import { FaBriefcase, FaCheckCircle, FaUsers } from "react-icons/fa";

function FloatingCard() {
  return (
    <>
      {/* Card 1 */}
      <div className="absolute top-16 -left-8 bg-white rounded-2xl shadow-xl p-4 w-56">
        <div className="flex items-center gap-3">
          <div className="bg-blue-100 p-3 rounded-full">
            <FaBriefcase className="text-blue-600" />
          </div>

          <div>
            <h4 className="font-semibold">UI/UX Designer</h4>
            <p className="text-sm text-gray-500">₹12 LPA • Remote</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="absolute bottom-24 -right-8 bg-white rounded-2xl shadow-xl p-4 w-52">
        <div className="flex items-center gap-3">
          <FaCheckCircle className="text-green-500 text-xl" />

          <div>
            <h4 className="font-semibold">Application Sent</h4>
            <p className="text-sm text-gray-500">Successfully Applied</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="absolute top-1/2 right-0 bg-white rounded-2xl shadow-xl p-4 w-48">
        <div className="flex items-center gap-3">
          <FaUsers className="text-purple-500 text-xl" />

          <div>
            <h4 className="font-semibold">2.5K+</h4>
            <p className="text-sm text-gray-500">Active Recruiters</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FloatingCard;