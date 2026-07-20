import { useState } from "react";

import {
  FaMapMarkerAlt,
  FaStar,
  FaBriefcase,
  FaEllipsisV,
  FaCheckCircle,
} from "react-icons/fa";

function CompanyCard({
  logo,
  name,
  industry,
  location,
  rating,
  openJobs,
  isSelected,
  onSelect,
}) {
  const [isFollowing, setIsFollowing] = useState(false);

  const handleFollow = (event) => {
    event.stopPropagation();
    setIsFollowing((previousState) => !previousState);
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
      {/* Top */}
      <div className="flex items-start gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2 shadow-sm sm:h-16 sm:w-16">
          <img
            src={logo}
            alt={`${name} logo`}
            className="h-10 w-10 object-contain sm:h-11 sm:w-11"
          />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="truncate text-base font-extrabold text-slate-900 sm:text-lg">
                  {name}
                </h3>

                <FaCheckCircle className="shrink-0 text-xs text-blue-500" />
              </div>

              <p className="mt-1 truncate text-xs text-slate-500 sm:text-sm">
                {industry}
              </p>
            </div>

            <button
              type="button"
              onClick={(event) => event.stopPropagation()}
              aria-label="More company options"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100"
            >
              <FaEllipsisV />
            </button>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-slate-500">
            <span className="flex items-center gap-1.5">
              <FaMapMarkerAlt />
              {location}
            </span>

            <span className="flex items-center gap-1.5">
              <FaStar className="text-amber-400" />
              <span className="font-bold text-slate-800">
                {rating}
              </span>
            </span>

            <span className="flex items-center gap-1.5">
              <FaBriefcase />
              {openJobs} Open Jobs
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Buttons */}
      <div className="mt-5 grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={(event) => {
            event.stopPropagation();
            onSelect();
          }}
          className="rounded-lg border border-blue-600 px-4 py-2.5 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
        >
          View Company
        </button>

        <button
          type="button"
          onClick={handleFollow}
          className={`rounded-lg px-4 py-2.5 text-sm font-bold transition ${
            isFollowing
              ? "border border-blue-600 bg-blue-50 text-blue-600"
              : "bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md hover:-translate-y-0.5"
          }`}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>
    </article>
  );
}

export default CompanyCard;