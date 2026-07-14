import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

function HeroSearch() {
  return (
    <div className="mx-auto w-full rounded-2xl bg-white p-2 shadow-[0_25px_70px_rgba(0,0,0,0.25)] md:rounded-3xl md:p-3">
      <div className="flex w-full flex-col lg:flex-row lg:items-center">
        {/* Job Search */}
        <div className="flex w-full flex-1 items-center px-4 py-4 sm:px-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-100 sm:h-12 sm:w-12">
            <FaSearch className="text-lg text-blue-600" />
          </div>

          <div className="ml-3 min-w-0 flex-1 sm:ml-4">
            <label className="block text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
              Job Title
            </label>

            <input
              type="text"
              placeholder="Job title, keyword or company"
              className="mt-1 w-full bg-transparent text-sm font-medium text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mx-4 h-px bg-gray-200 lg:mx-0 lg:h-16 lg:w-px"></div>

        {/* Location */}
        <div className="flex w-full flex-1 items-center px-4 py-4 sm:px-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-cyan-100 sm:h-12 sm:w-12">
            <FaMapMarkerAlt className="text-lg text-cyan-600" />
          </div>

          <div className="ml-3 min-w-0 flex-1 sm:ml-4">
            <label className="block text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
              Location
            </label>

            <input
              type="text"
              placeholder="City or remote"
              className="mt-1 w-full bg-transparent text-sm font-medium text-gray-800 outline-none placeholder:text-gray-400 sm:text-base"
            />
          </div>
        </div>

        {/* Divider */}
        <div className="mx-4 h-px bg-gray-200 lg:mx-0 lg:h-16 lg:w-px"></div>

        {/* Job Type */}
        <div className="flex w-full flex-1 items-center px-4 py-4 sm:px-5">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-purple-100 sm:h-12 sm:w-12">
            <FaBriefcase className="text-lg text-purple-600" />
          </div>

          <div className="ml-3 min-w-0 flex-1 sm:ml-4">
            <label className="block text-[10px] font-semibold uppercase tracking-wide text-gray-400 sm:text-xs">
              Job Type
            </label>

            <select className="mt-1 w-full bg-transparent text-sm font-medium text-gray-800 outline-none sm:text-base">
              <option>All Job Types</option>
              <option>Full Time</option>
              <option>Part Time</option>
              <option>Remote</option>
              <option>Hybrid</option>
              <option>Internship</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="w-full p-2 lg:w-auto lg:min-w-[190px]">
          <button
            type="button"
            className="w-full rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-7 py-4 font-bold text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl lg:min-h-[72px] lg:rounded-2xl"
          >
            Search Jobs
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeroSearch;