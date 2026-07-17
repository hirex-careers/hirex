import { useState } from "react";

import {
  FaBookmark,
  FaRegBookmark,
  FaMapMarkerAlt,
  FaBriefcase,
  FaUsers,
  FaCheckCircle,
  FaEllipsisH,
} from "react-icons/fa";

function JobListCard({
  logo,
  title,
  company,
  salary,
  experience,
  location,
  type,
  mode,
  posted,
  isSelected,
  onSelect,
}) {
  const [isSaved, setIsSaved] = useState(false);

  const toggleSaved = (event) => {
    event.stopPropagation();
    setIsSaved((previous) => !previous);
  };

  const handleApply = (event) => {
    event.stopPropagation();
  };

  return (
    <article
      onClick={onSelect}
      className={`group cursor-pointer rounded-2xl border bg-white p-4 transition-all duration-300 sm:p-5 ${
        isSelected
          ? "border-blue-500 bg-blue-50/40 shadow-md"
          : "border-slate-200 hover:border-blue-300 hover:shadow-lg"
      }`}
    >
      {/* Desktop */}
      <div className="hidden items-center gap-4 md:flex">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2">
          <img
            src={logo}
            alt={`${company} logo`}
            className="h-10 w-10 object-contain"
          />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-base font-extrabold text-slate-900">
            {title}
          </h3>

          <div className="mt-1 flex items-center gap-2">
            <p className="truncate text-sm font-bold text-blue-600">
              {company}
            </p>

            <FaCheckCircle className="shrink-0 text-xs text-blue-500" />
          </div>

          <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2 text-[11px] text-slate-500">
            <span className="flex items-center gap-1.5">
              <FaBriefcase />
              {experience}
            </span>

            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt />
              {location}
            </span>

            <span className="flex items-center gap-1.5">
              <FaUsers />
              {mode}
            </span>
          </div>

          <div className="mt-4 flex items-end justify-between gap-3">
            <div>
              <p className="text-sm font-extrabold text-slate-900">
                {salary}
              </p>

              <p className="mt-1 text-xs text-slate-400">
                {posted}
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={toggleSaved}
                aria-label="Save job"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700"
              >
                {isSaved ? (
                  <FaBookmark className="text-blue-600" />
                ) : (
                  <FaRegBookmark />
                )}
              </button>

              <button
                type="button"
                onClick={handleApply}
                className="rounded-lg bg-blue-600 px-4 py-2.5 text-xs font-bold text-white"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <div className="flex items-start gap-3">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2">
            <img
              src={logo}
              alt={`${company} logo`}
              className="h-10 w-10 object-contain"
            />
          </div>

          <div className="min-w-0 flex-1">
            <h3 className="truncate font-extrabold text-slate-900">
              {title}
            </h3>

            <div className="mt-1 flex items-center gap-2">
              <p className="text-sm font-bold text-blue-600">
                {company}
              </p>

              <FaCheckCircle className="text-[10px] text-blue-500" />
            </div>
          </div>

          <FaEllipsisH className="mt-2 text-slate-500" />
        </div>

        <div className="ml-[68px] mt-4 grid grid-cols-2 gap-2 text-xs text-slate-500">
          <span className="flex items-center gap-2">
            <FaBriefcase />
            {experience}
          </span>

          <span className="flex items-center gap-2">
            <FaMapMarkerAlt />
            {location}
          </span>

          <span className="flex items-center gap-2">
            <FaUsers />
            {mode}
          </span>

          <span className="flex items-center gap-2">
            <FaBriefcase />
            {type}
          </span>
        </div>

        <div className="ml-[68px] mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="font-extrabold text-slate-900">
              {salary}
            </p>

            <p className="mt-1 text-xs text-slate-400">
              {posted}
            </p>
          </div>

          <button
            type="button"
            onClick={toggleSaved}
            aria-label="Save job"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 bg-white text-slate-700"
          >
            {isSaved ? (
              <FaBookmark className="text-blue-600" />
            ) : (
              <FaRegBookmark />
            )}
          </button>
        </div>
      </div>
    </article>
  );
}

export default JobListCard;