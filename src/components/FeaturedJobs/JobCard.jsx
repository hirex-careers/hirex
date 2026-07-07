import { FaBookmark, FaMapMarkerAlt } from "react-icons/fa";

function JobCard({
  logo,
  company,
  title,
  location,
  salary,
  type,
}) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 cursor-pointer">

      <div className="flex justify-between items-start">

        <div className="flex gap-4">

          <img
            src={logo}
            alt={company}
            className="w-14 h-14 rounded-xl object-contain border p-2"
          />

          <div>
            <h3 className="font-bold text-lg">
              {title}
            </h3>

            <p className="text-blue-600 text-sm">
              {company}
            </p>
          </div>

        </div>

        <FaBookmark className="text-gray-400 hover:text-blue-600" />

      </div>

      <div className="mt-5 flex items-center text-gray-500 gap-2">
        <FaMapMarkerAlt />
        {location}
      </div>

      <div className="mt-6 flex justify-between items-center">

        <span className="font-bold text-blue-600">
          {salary}
        </span>

        <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm">
          {type}
        </span>

      </div>

    </div>
  );
}

export default JobCard;