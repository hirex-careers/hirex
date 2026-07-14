import {
  FaBookmark,
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaArrowRight,
} from "react-icons/fa";

function JobCard({
  logo,
  company,
  title,
  location,
  salary,
  experience,
  type,
  skills,
  posted,
}) {
  return (
    <div className="group relative flex h-[500px] w-full flex-col overflow-hidden rounded-3xl border border-gray-100 bg-white p-5 shadow-md transition-all duration-500 hover:-translate-y-2 hover:border-blue-100 hover:shadow-2xl sm:h-[510px] sm:p-6 lg:h-[520px]">

      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/80 via-white to-cyan-50/70 opacity-0 transition duration-500 group-hover:opacity-100"></div>

      <div className="relative z-10 flex h-full flex-col">

        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-gray-100 bg-gray-50 sm:h-16 sm:w-16">
              <img
                src={logo}
                alt={`${company} logo`}
                className="h-9 w-9 object-contain sm:h-10 sm:w-10"
              />
            </div>

            <div className="min-w-0">
              <h3 className="min-h-[56px] text-lg font-bold leading-7 text-gray-800 sm:text-xl">
                {title}
              </h3>

              <p className="mt-1 truncate font-semibold text-blue-600">
                {company}
              </p>
            </div>
          </div>

          <button
            type="button"
            aria-label={`Save ${title}`}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-500 transition hover:bg-blue-600 hover:text-white sm:h-11 sm:w-11"
          >
            <FaBookmark />
          </button>
        </div>

        {/* Job Information */}
        <div className="mt-6 space-y-3.5 text-sm text-gray-600 sm:text-base">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="shrink-0 text-blue-600" />
            <span>{location}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaMoneyBillWave className="shrink-0 text-green-600" />
            <span>{salary}</span>
          </div>

          <div className="flex items-center gap-3">
            <FaBriefcase className="shrink-0 text-orange-500" />
            <span>{experience}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mt-6 flex min-h-[80px] flex-wrap content-start gap-2.5">
          {skills.map((skill) => (
            <span
              key={skill}
              className="h-fit rounded-full bg-slate-100 px-3.5 py-2 text-xs font-semibold text-gray-700 sm:text-sm"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-auto flex items-end justify-between gap-3 border-t border-gray-100 pt-5">
          <div className="min-w-0">
            <span className="inline-block rounded-full bg-blue-100 px-3.5 py-2 text-xs font-semibold text-blue-700 sm:text-sm">
              {type}
            </span>

            <p className="mt-3 text-xs text-gray-400 sm:text-sm">
              Posted {posted}
            </p>
          </div>

          <button
            type="button"
            className="flex shrink-0 items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl sm:px-5"
          >
            Apply
            <FaArrowRight />
          </button>
        </div>

      </div>
    </div>
  );
}

export default JobCard;