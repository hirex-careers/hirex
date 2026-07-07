import { FaSearch, FaMapMarkerAlt, FaBriefcase } from "react-icons/fa";

function HeroSearch() {
  return (
    <div className="mt-10 bg-white rounded-2xl shadow-2xl p-3 flex flex-col lg:flex-row gap-3">

      <div className="flex items-center flex-1 px-4">
        <FaSearch className="text-gray-400" />
        <input
          type="text"
          placeholder="Job title, keyword or company"
          className="w-full px-3 py-3 outline-none"
        />
      </div>

      <div className="flex items-center flex-1 px-4 border-l">
        <FaMapMarkerAlt className="text-gray-400" />
        <input
          type="text"
          placeholder="Location"
          className="w-full px-3 py-3 outline-none"
        />
      </div>

      <div className="flex items-center flex-1 px-4 border-l">
        <FaBriefcase className="text-gray-400" />
        <select className="w-full px-3 py-3 outline-none bg-transparent">
          <option>Job Type</option>
          <option>Full Time</option>
          <option>Internship</option>
          <option>Remote</option>
        </select>
      </div>

      <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 rounded-xl font-semibold">
        Search Jobs
      </button>

    </div>
  );
}

export default HeroSearch;