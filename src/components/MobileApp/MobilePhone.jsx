import {
  FaSearch,
  FaBell,
  FaHeart,
} from "react-icons/fa";

import FloatingCards from "./FloatingCards";

const jobs = [
  {
    title: "Frontend Developer",
    company: "Google",
    salary: "₹18 LPA",
    buttonClass: "bg-blue-600",
    heartClass: "text-red-500",
  },
  {
    title: "Data Analyst",
    company: "Microsoft",
    salary: "₹15 LPA",
    buttonClass: "bg-cyan-500",
    heartClass: "text-pink-500",
  },
  {
    title: "UI / UX Designer",
    company: "Adobe",
    salary: "₹14 LPA",
    buttonClass: "bg-indigo-600",
    heartClass: "text-gray-400",
  },
];

function MobilePhone() {
  return (
    <div className="relative mx-auto flex w-full max-w-[520px] justify-center pb-14 pt-4 sm:pb-20 lg:pb-0 lg:pt-0">
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[100px] sm:h-[430px] sm:w-[430px]"></div>

      {/* Phone */}
      <div className="relative z-20 h-[590px] w-[290px] overflow-hidden rounded-[42px] border-[8px] border-black bg-white shadow-[0_35px_80px_rgba(0,0,0,.35)] sm:h-[650px] sm:w-[320px] sm:rounded-[48px] sm:border-[10px] lg:h-[690px] lg:w-[340px]">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-0 z-30 h-6 w-32 -translate-x-1/2 rounded-b-3xl bg-black sm:h-7 sm:w-40"></div>

        {/* Screen */}
        <div className="h-full bg-slate-50 px-4 pt-10 sm:px-5 sm:pt-12">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-blue-600 sm:text-2xl">
                HireX
              </h3>

              <p className="text-xs text-gray-500 sm:text-sm">
                Good Morning 👋
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white sm:h-11 sm:w-11">
              S
            </div>
          </div>

          {/* Search */}
          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-white px-3 py-3 shadow-md sm:mt-6 sm:px-4 sm:py-4">
            <FaSearch className="shrink-0 text-blue-600" />

            <span className="truncate text-xs text-gray-400 sm:text-sm">
              Search Jobs...
            </span>

            <FaBell className="ml-auto shrink-0 text-gray-500" />
          </div>

          {/* Job Cards */}
          <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="rounded-2xl bg-white p-4 shadow-lg sm:rounded-3xl sm:p-5"
              >
                <div className="flex justify-between gap-3">
                  <div className="min-w-0">
                    <h4 className="truncate text-sm font-bold sm:text-base">
                      {job.title}
                    </h4>

                    <p className="mt-1 text-xs text-blue-600 sm:text-sm">
                      {job.company}
                    </p>
                  </div>

                  <FaHeart
                    className={`shrink-0 ${job.heartClass}`}
                  />
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-sm font-semibold sm:text-base">
                    {job.salary}
                  </span>

                  <button
                    type="button"
                    className={`${job.buttonClass} rounded-xl px-3 py-2 text-xs font-semibold text-white sm:px-4 sm:text-sm`}
                  >
                    Apply
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <FloatingCards />
    </div>
  );
}

export default MobilePhone;