import { useState } from "react";

import {
  FaChevronDown,
  FaChevronUp,
  FaBriefcase,
  FaRupeeSign,
  FaLaptopHouse,
  FaCalendarAlt,
  FaBuilding,
} from "react-icons/fa";

const filterGroups = [
  {
    id: "experience",
    title: "Experience",
    icon: <FaBriefcase />,
    options: [
      { label: "Fresher (0-1 yr)", count: 3234 },
      { label: "1-3 years", count: 4321 },
      { label: "3-5 years", count: 2134 },
      { label: "5+ years", count: 1132 },
    ],
  },
  {
    id: "jobType",
    title: "Job Type",
    icon: <FaBriefcase />,
    options: [
      { label: "Full Time", count: 8456 },
      { label: "Part Time", count: 532 },
      { label: "Contract", count: 723 },
      { label: "Internship", count: 289 },
    ],
  },
  {
    id: "workMode",
    title: "Work Mode",
    icon: <FaLaptopHouse />,
    options: [
      { label: "Remote", count: 3123 },
      { label: "Work From Home", count: 4261 },
      { label: "Hybrid", count: 2130 },
      { label: "On-site", count: 1267 },
    ],
  },
  {
    id: "datePosted",
    title: "Date Posted",
    icon: <FaCalendarAlt />,
    options: [
      { label: "Last 24 Hours", count: 865 },
      { label: "Last 3 Days", count: 1432 },
      { label: "Last 7 Days", count: 3267 },
      { label: "Last 30 Days", count: 7124 },
    ],
  },
  {
    id: "company",
    title: "Company",
    icon: <FaBuilding />,
    options: [
      { label: "Google", count: 320 },
      { label: "Microsoft", count: 280 },
      { label: "Amazon", count: 410 },
      { label: "Swiggy", count: 190 },
    ],
  },
];

function FilterSidebar({
  filters,
  setFilters,
  onApply,
  onClear,
}) {
  const [openGroups, setOpenGroups] = useState({
    experience: true,
    jobType: true,
    workMode: true,
    datePosted: false,
    company: false,
  });

  const toggleGroup = (groupId) => {
    setOpenGroups((previousState) => ({
      ...previousState,
      [groupId]: !previousState[groupId],
    }));
  };

  const toggleFilter = (groupId, optionLabel) => {
    setFilters((previousState) => {
      const currentOptions = previousState[groupId];

      const updatedOptions = currentOptions.includes(optionLabel)
        ? currentOptions.filter((item) => item !== optionLabel)
        : [...currentOptions, optionLabel];

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
          Filter Jobs
        </h2>

        <button
          type="button"
          onClick={onClear}
          className="text-sm font-bold text-blue-600 transition hover:text-blue-700"
        >
          Clear All
        </button>
      </div>

      {/* Experience */}
      {filterGroups.slice(0, 1).map((group) => (
        <FilterGroup
          key={group.id}
          group={group}
          isOpen={openGroups[group.id]}
          toggleGroup={toggleGroup}
          selectedOptions={filters[group.id]}
          toggleFilter={toggleFilter}
        />
      ))}

      {/* Salary */}
      <div className="border-b border-slate-200 py-4">
        <div className="flex items-center gap-3 text-sm font-bold text-slate-800">
          <span className="text-slate-500">
            <FaRupeeSign />
          </span>

          Maximum Salary
        </div>

        <div className="pt-4">
          <input
            type="range"
            min="5"
            max="30"
            step="1"
            value={filters.salary}
            onChange={(event) =>
              setFilters((previousState) => ({
                ...previousState,
                salary: Number(event.target.value),
              }))
            }
            className="w-full accent-blue-600"
          />

          <div className="mt-2 flex items-center justify-between text-xs font-semibold text-slate-500">
            <span>₹5 LPA</span>

            <span>
              {filters.salary === 30
                ? "₹30+ LPA"
                : `₹${filters.salary} LPA`}
            </span>
          </div>
        </div>
      </div>

      {/* Other filters */}
      {filterGroups.slice(1).map((group) => (
        <FilterGroup
          key={group.id}
          group={group}
          isOpen={openGroups[group.id]}
          toggleGroup={toggleGroup}
          selectedOptions={filters[group.id]}
          toggleFilter={toggleFilter}
        />
      ))}

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

function FilterGroup({
  group,
  isOpen,
  toggleGroup,
  selectedOptions,
  toggleFilter,
}) {
  return (
    <div className="border-b border-slate-200 py-4">
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

        {isOpen ? (
          <FaChevronUp className="text-xs text-slate-500" />
        ) : (
          <FaChevronDown className="text-xs text-slate-500" />
        )}
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
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
                    checked={selectedOptions.includes(option.label)}
                    onChange={() =>
                      toggleFilter(group.id, option.label)
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
  );
}

export default FilterSidebar;