import { useState } from "react";

import {
  FaChevronDown,
  FaChevronUp,
  FaBuilding,
  FaUsers,
  FaMapMarkerAlt,
  FaStar,
  FaBriefcase,
} from "react-icons/fa";

const filterGroups = [
  {
    id: "industry",
    title: "Industry",
    icon: <FaBuilding />,
    options: [
      { label: "Technology", count: 3241 },
      { label: "Finance", count: 2134 },
      { label: "Healthcare", count: 1645 },
      { label: "Education", count: 1320 },
      { label: "E-commerce", count: 1123 },
    ],
  },
  {
    id: "companySize",
    title: "Company Size",
    icon: <FaUsers />,
    options: [
      { label: "1-10 employees", count: 1234 },
      { label: "11-50 employees", count: 2341 },
      { label: "51-200 employees", count: 1876 },
      { label: "201-500 employees", count: 1069 },
      { label: "500+ employees", count: 2109 },
    ],
  },
  {
    id: "location",
    title: "Location",
    icon: <FaMapMarkerAlt />,
    options: [
      { label: "Bangalore", count: 2410 },
      { label: "Hyderabad", count: 1876 },
      { label: "Mumbai", count: 1543 },
      { label: "Delhi NCR", count: 1320 },
      { label: "Pune", count: 980 },
    ],
  },
  {
    id: "rating",
    title: "Rating",
    icon: <FaStar />,
    options: [
      { label: "4.5 & above", count: 2341 },
      { label: "4.0 & above", count: 4321 },
      { label: "3.5 & above", count: 5210 },
      { label: "3.0 & above", count: 6123 },
    ],
  },
  {
    id: "hiringStatus",
    title: "Hiring Status",
    icon: <FaBriefcase />,
    options: [
      { label: "Actively Hiring", count: 5421 },
      { label: "Hiring Soon", count: 1234 },
    ],
  },
];

function CompanyFilterSidebar({
  filters,
  setFilters,
  onApply,
  onClear,
}) {
  const [openGroups, setOpenGroups] = useState({
    industry: true,
    companySize: false,
    location: true,
    rating: true,
    hiringStatus: false,
  });

  const toggleGroup = (groupId) => {
    setOpenGroups((previousState) => ({
      ...previousState,
      [groupId]: !previousState[groupId],
    }));
  };

  const toggleFilter = (groupId, optionLabel) => {
    setFilters((previousState) => {
      const selectedOptions =
        previousState[groupId] || [];

      const updatedOptions =
        selectedOptions.includes(optionLabel)
          ? selectedOptions.filter(
              (item) => item !== optionLabel
            )
          : [...selectedOptions, optionLabel];

      return {
        ...previousState,
        [groupId]: updatedOptions,
      };
    });
  };

  return (
    <div className="bg-white p-4 lg:p-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-slate-200 pb-4">
        <h2 className="text-lg font-extrabold text-slate-900">
          Filters
        </h2>

        <button
          type="button"
          onClick={onClear}
          className="text-sm font-bold text-blue-600 transition hover:text-blue-700"
        >
          Clear All
        </button>
      </div>

      {/* Filter Groups */}
      <div>
        {filterGroups.map((group) => (
          <div
            key={group.id}
            className="border-b border-slate-200 py-4"
          >
            <button
              type="button"
              onClick={() => toggleGroup(group.id)}
              className="flex w-full items-center justify-between gap-3"
            >
              <span className="flex items-center gap-3 text-sm font-bold text-slate-800">
                <span className="text-slate-500">
                  {group.icon}
                </span>

                {group.title}
              </span>

              {openGroups[group.id] ? (
                <FaChevronUp className="text-xs text-slate-500" />
              ) : (
                <FaChevronDown className="text-xs text-slate-500" />
              )}
            </button>

            <div
              className={`grid transition-all duration-300 ${
                openGroups[group.id]
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div className="space-y-3 pt-4">
                  {group.options.map((option) => (
                    <label
                      key={option.label}
                      className="flex cursor-pointer items-center justify-between gap-3"
                    >
                      <span className="flex min-w-0 items-center gap-3">
                        <input
                          type="checkbox"
                          checked={filters[
                            group.id
                          ].includes(option.label)}
                          onChange={() =>
                            toggleFilter(
                              group.id,
                              option.label
                            )
                          }
                          className="h-4 w-4 shrink-0 rounded border-slate-300 accent-blue-600"
                        />

                        <span className="truncate text-sm text-slate-600">
                          {option.label}
                        </span>
                      </span>

                      <span className="shrink-0 text-xs text-slate-400">
                        ({option.count})
                      </span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Apply */}
      <button
        type="button"
        onClick={onApply}
        className="mt-5 w-full rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 px-5 py-3.5 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl"
      >
        Apply Filters
      </button>
    </div>
  );
}

export default CompanyFilterSidebar;