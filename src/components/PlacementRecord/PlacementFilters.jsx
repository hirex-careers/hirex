import { useState } from "react";

import {
  FaChevronDown,
  FaFilter,
  FaRedoAlt,
  FaSearch,
} from "react-icons/fa";

const domains = [
  "All Domains",
  "Software Development",
  "Data Science",
  "Data Analytics",
  "Cloud Computing",
  "DevOps",
  "Cyber Security",
  "UI / UX Design",
  "Product Management",
  "Sales & Marketing",
];

const months = [
  "All Months",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const years = ["2026", "2025", "2024", "2023"];

function PlacementFilters({
  filterValues,
  setFilterValues,
  onFilter,
  onReset,
}) {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const safeFilterValues = {
    keyword: "",
    domain: "All Domains",
    year: "2024",
    month: "All Months",
    ...filterValues,
  };

  const updateField = (field, value) => {
    setFilterValues((previousState) => ({
      ...previousState,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (onFilter) {
      onFilter();
    }

    setIsMobileOpen(false);
  };

  const handleReset = () => {
    if (onReset) {
      onReset();
    }

    setIsMobileOpen(false);
  };

  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() =>
          setIsMobileOpen((previousState) => !previousState)
        }
        className="flex w-full items-center justify-between px-5 py-4 text-left lg:hidden"
      >
        <span className="flex items-center gap-3 font-extrabold text-blue-600">
          <FaFilter />
          Filter & Search
        </span>

        <FaChevronDown
          className={`transition-transform duration-300 ${
            isMobileOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 lg:block ${
          isMobileOpen
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0 lg:opacity-100"
        }`}
      >
        <div className="overflow-hidden">
          <form
            onSubmit={handleSubmit}
            className="grid gap-4 border-t border-slate-200 p-4 lg:grid-cols-[1.45fr_1fr_0.85fr_0.9fr_auto_auto] lg:items-end lg:border-t-0 lg:p-5"
          >
            <FilterField label="Search by Candidate / Company">
              <div className="flex items-center rounded-xl border border-slate-300 bg-white px-4 py-3.5 transition focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
                <FaSearch className="shrink-0 text-slate-400" />

                <input
                  type="text"
                  value={safeFilterValues.keyword}
                  onChange={(event) =>
                    updateField("keyword", event.target.value)
                  }
                  placeholder="Search name or company"
                  className="ml-3 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </FilterField>

            <FilterField label="Domain">
              <select
                value={safeFilterValues.domain}
                onChange={(event) =>
                  updateField("domain", event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                {domains.map((domain) => (
                  <option key={domain} value={domain}>
                    {domain}
                  </option>
                ))}
              </select>
            </FilterField>

            <FilterField label="Year">
              <select
                value={safeFilterValues.year}
                onChange={(event) =>
                  updateField("year", event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                {years.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
            </FilterField>

            <FilterField label="Month">
              <select
                value={safeFilterValues.month}
                onChange={(event) =>
                  updateField("month", event.target.value)
                }
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-semibold text-slate-800 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
            </FilterField>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 px-7 py-3.5 font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl lg:min-w-[150px]"
            >
              <FaFilter />
              Filter
            </button>

            <button
              type="button"
              onClick={handleReset}
              className="flex w-full items-center justify-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-3.5 font-bold text-slate-700 transition hover:border-blue-500 hover:bg-blue-50 hover:text-blue-600 lg:w-auto"
            >
              <FaRedoAlt />
              Reset
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function FilterField({ label, children }) {
  return (
    <div>
      <label className="mb-2 block text-xs font-bold text-slate-600">
        {label}
      </label>

      {children}
    </div>
  );
}

export default PlacementFilters;