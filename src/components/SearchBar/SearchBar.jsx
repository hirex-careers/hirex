import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-4 mt-12 max-w-5xl">

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

        {/* Job Title */}
        <div className="flex items-center border rounded-xl px-4 py-3">
          <FaSearch className="text-blue-600 mr-3" />
          <input
            type="text"
            placeholder="Job title or keyword"
            className="outline-none w-full"
          />
        </div>

        {/* Location */}
        <div className="flex items-center border rounded-xl px-4 py-3">
          <FaMapMarkerAlt className="text-blue-600 mr-3" />
          <input
            type="text"
            placeholder="Location"
            className="outline-none w-full"
          />
        </div>

        {/* Category */}
        <select className="border rounded-xl px-4 py-3 outline-none">
          <option>All Categories</option>
          <option>Software Development</option>
          <option>Data Science</option>
          <option>Marketing</option>
          <option>HR</option>
        </select>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold">
          Search Jobs
        </button>

      </div>

    </div>
  );
}

export default SearchBar;