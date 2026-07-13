import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

function HeroSearch() {
  return (
    <div className="mt-12 w-full max-w-[950px] bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-2 flex flex-col lg:flex-row items-center">

      <div className="flex flex-col lg:flex-row items-center">

        {/* Job Search */}
        <div className="flex items-center w-full flex-1 px-5 py-4">

          <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center">
            <FaSearch className="text-blue-600 text-lg" />
          </div>

          <div className="ml-4 w-full">

            <label className="text-xs font-semibold text-gray-400 uppercase">
              Job Title
            </label>

            <input
              type="text"
              placeholder="Frontend Developer"
              className="w-full mt-1 outline-none text-gray-800 font-medium"
            />

          </div>

        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-16 bg-gray-200"></div>

        {/* Location */}
        <div className="flex items-center w-full flex-1 px-5 py-4">

          <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center">
            <FaMapMarkerAlt className="text-cyan-600 text-lg" />
          </div>

          <div className="ml-4 w-full">

            <label className="text-xs font-semibold text-gray-400 uppercase">
              Location
            </label>

            <input
              type="text"
              placeholder="Bangalore"
              className="w-full mt-1 outline-none text-gray-800 font-medium"
            />

          </div>

        </div>

        {/* Divider */}
        <div className="hidden lg:block w-px h-16 bg-gray-200"></div>

        {/* Job Type */}
        <div className="flex items-center w-full flex-1 px-5 py-4">

          <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center">
            <FaBriefcase className="text-purple-600 text-lg" />
          </div>

          <div className="ml-4 w-full">

            <label className="text-xs font-semibold text-gray-400 uppercase">
              Job Type
            </label>

            <select className="w-full mt-1 outline-none bg-transparent text-gray-800 font-medium">

              <option>Full Time</option>
              <option>Part Time</option>
              <option>Remote</option>
              <option>Internship</option>

            </select>

          </div>

        </div>

        {/* Button */}
        <div className="w-full lg:w-auto px-3 py-3">

          <button className="w-full lg:w-auto px-10 py-5 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 text-white font-bold shadow-xl hover:scale-105 transition duration-300">

            Search Jobs

          </button>

        </div>

      </div>

    </div>
  );
}

export default HeroSearch;