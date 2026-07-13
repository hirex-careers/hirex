import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

function HeroSearch() {
  return (
    <div className="mt-12 bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-2 flex flex-col lg:flex-row items-center">

      {/* Job Search */}
      <div className="flex items-center flex-1 w-full px-5 py-3">
        <FaSearch className="text-blue-600 text-lg" />

        <input
          type="text"
          placeholder="Job title, keyword or company"
          className="w-full ml-3 outline-none text-gray-700 placeholder:text-gray-400"
        />
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px h-10 bg-gray-200"></div>

      {/* Location */}
      <div className="flex items-center flex-1 w-full px-5 py-3">
        <FaMapMarkerAlt className="text-blue-600 text-lg" />

        <input
          type="text"
          placeholder="Location"
          className="w-full ml-3 outline-none text-gray-700 placeholder:text-gray-400"
        />
      </div>

      {/* Divider */}
      <div className="hidden lg:block w-px h-10 bg-gray-200"></div>

      {/* Job Type */}
      <div className="flex items-center flex-1 w-full px-5 py-3">
        <FaBriefcase className="text-blue-600 text-lg" />

        <select className="w-full ml-3 outline-none bg-transparent text-gray-700">
          <option>Job Type</option>
          <option>Full Time</option>
          <option>Part Time</option>
          <option>Remote</option>
          <option>Internship</option>
        </select>
      </div>

      {/* Search Button */}
      <button className="w-full lg:w-auto bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-10 py-4 rounded-xl transition-all duration-300">
        Search Jobs
      </button>

    </div>
  );
}

export default HeroSearch;