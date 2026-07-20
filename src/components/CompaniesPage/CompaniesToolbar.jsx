import { FaFilter } from "react-icons/fa";

function CompaniesToolbar({
  resultCount,
  sortBy,
  setSortBy,
  openFilters,
}) {
  return (
    <div className="border-b border-slate-200 bg-white px-4 py-4 sm:px-5 lg:px-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        {/* Left */}
        <div className="flex items-center justify-between gap-3 sm:justify-start">
          <button
            type="button"
            onClick={openFilters}
            className="flex items-center gap-2 rounded-lg border border-blue-600 px-4 py-2.5 text-sm font-bold text-blue-600 transition hover:bg-blue-50 lg:hidden"
          >
            <FaFilter />
            Filters
          </button>

          <p className="text-sm text-slate-600 sm:text-base">
            <span className="font-extrabold text-slate-900">
              {resultCount.toLocaleString("en-IN")}
            </span>{" "}
            {resultCount === 1
              ? "company found"
              : "companies found"}
          </p>
        </div>

        {/* Sort */}
        <div className="flex items-center justify-between gap-3 sm:justify-end">
          <label
            htmlFor="company-sort"
            className="shrink-0 text-sm font-semibold text-slate-500"
          >
            Sort by:
          </label>

          <select
            id="company-sort"
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="w-full min-w-0 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100 sm:w-auto sm:min-w-[170px]"
          >
            <option>Most Popular</option>
            <option>Highest Rated</option>
            <option>Most Open Jobs</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default CompaniesToolbar;