import {
  FaBookmark,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
} from "react-icons/fa";

function JobCard({
  logo,
  company,
  title,
  location,
  salary,
  type,
}) {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 p-6">

      {/* Top */}
      <div className="flex justify-between items-start">

        <div className="flex items-center gap-4">

          <div className="w-16 h-16 rounded-2xl bg-gray-50 flex items-center justify-center border">
            <img
              src={logo}
              alt={company}
              className="w-10 h-10 object-contain"
            />
          </div>

          <div>
            <h3 className="font-bold text-xl text-gray-800">
              {title}
            </h3>

            <p className="text-blue-600 font-medium mt-1">
              {company}
            </p>
          </div>

        </div>

        <button className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition">
          <FaBookmark />
        </button>

      </div>

      {/* Details */}
      <div className="mt-6 space-y-3">

        <div className="flex items-center gap-2 text-gray-600">
          <FaMapMarkerAlt className="text-blue-600" />
          <span>{location}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaMoneyBillWave className="text-green-600" />
          <span>{salary}</span>
        </div>

        <div className="flex items-center gap-2 text-gray-600">
          <FaBriefcase className="text-orange-500" />
          <span>2-5 Years Experience</span>
        </div>

      </div>

      {/* Bottom */}
      <div className="mt-8 flex justify-between items-center">

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold">
          {type}
        </span>

        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl hover:bg-blue-700 transition">
          Apply Now
        </button>

      </div>

    </div>
  );
}

export default JobCard;