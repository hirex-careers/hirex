import {
  FaBookmark,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

function JobCard({
  logo,
  company,
  title,
  location,
  salary,
  experience,
  type,
  skills,
  posted,
}) {
  return (
    <div className="group bg-white rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 p-7">

      {/* Header */}
      <div className="flex justify-between">

        <div className="flex gap-4">

          <div className="w-16 h-16 rounded-2xl bg-gray-50 border flex items-center justify-center">
            <img
              src={logo}
              alt={company}
              className="w-10 h-10 object-contain"
            />
          </div>

          <div>

            <h3 className="text-2xl font-bold text-gray-800">
              {title}
            </h3>

            <p className="text-blue-600 font-semibold mt-1">
              {company}
            </p>

          </div>

        </div>

        <button className="w-11 h-11 rounded-full bg-gray-100 hover:bg-blue-600 hover:text-white transition">
          <FaBookmark className="mx-auto mt-3" />
        </button>

      </div>

      {/* Info */}
      <div className="mt-7 space-y-3">

        <div className="flex items-center gap-3 text-gray-600">
          <FaMapMarkerAlt className="text-blue-600" />
          {location}
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <FaMoneyBillWave className="text-green-600" />
          {salary}
        </div>

        <div className="flex items-center gap-3 text-gray-600">
          <FaBriefcase className="text-orange-500" />
          {experience}
        </div>

      </div>

      {/* Skills */}
      <div className="flex gap-3 mt-7 flex-wrap">

        {skills.map((skill) => (
          <span
            key={skill}
            className="px-4 py-2 rounded-full bg-slate-100 text-sm font-medium"
          >
            {skill}
          </span>
        ))}

      </div>

      {/* Footer */}
      <div className="mt-8 flex justify-between items-center">

        <div>

          <span className="px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold">
            {type}
          </span>

          <p className="text-gray-400 text-sm mt-3">
            Posted {posted}
          </p>

        </div>

        <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-xl hover:scale-105 transition">

          Apply

          <FaArrowRight />

        </button>

      </div>

    </div>
  );
}

export default JobCard;