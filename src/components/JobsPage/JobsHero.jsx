import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
} from "react-icons/fa";

function JobsHero({
  searchValues,
  setSearchValues,
  onSearch,
}) {
  const updateField = (field, value) => {
    setSearchValues((previousState) => ({
      ...previousState,
      [field]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch();
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-r from-[#071A55] via-[#123B9A] to-[#2869E8] px-3 py-7 sm:px-5 sm:py-9 lg:py-10">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-36 right-20 h-80 w-80 rounded-full border border-white/10"></div>
        <div className="absolute -top-20 right-[18%] h-52 w-52 rounded-full border border-white/10"></div>
        <div className="absolute left-[21%] top-8 h-20 w-20 rounded-full border border-white/10"></div>
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1380px]">
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-[34px]">
            Find the right job for you
          </h1>

          <p className="mt-2 text-sm text-blue-100 sm:text-base">
            Search through 10,000+ active jobs from trusted companies
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-5 w-full max-w-[1050px] rounded-2xl bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-4"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-0">
            <div className="flex min-w-0 flex-1 items-center rounded-xl border border-slate-200 px-4 py-3 lg:rounded-none lg:border-0">
              <FaSearch className="shrink-0 text-slate-400 lg:hidden" />

              <div className="ml-3 min-w-0 flex-1 lg:ml-0">
                <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs">
                  Job Title
                </label>

                <input
                  type="text"
                  value={searchValues.keyword}
                  onChange={(event) =>
                    updateField("keyword", event.target.value)
                  }
                  placeholder="e.g. React Developer"
                  className="mt-1 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="hidden h-14 w-px bg-slate-200 lg:block"></div>

            <div className="flex min-w-0 flex-1 items-center rounded-xl border border-slate-200 px-4 py-3 lg:rounded-none lg:border-0">
              <FaMapMarkerAlt className="shrink-0 text-slate-400 lg:hidden" />

              <div className="ml-3 min-w-0 flex-1 lg:ml-0">
                <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs">
                  Location
                </label>

                <input
                  type="text"
                  value={searchValues.location}
                  onChange={(event) =>
                    updateField("location", event.target.value)
                  }
                  placeholder="City or remote"
                  className="mt-1 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="hidden h-14 w-px bg-slate-200 lg:block"></div>

            <div className="flex min-w-0 flex-1 items-center rounded-xl border border-slate-200 px-4 py-3 lg:rounded-none lg:border-0">
              <FaBriefcase className="shrink-0 text-slate-400 lg:hidden" />

              <div className="ml-3 min-w-0 flex-1 lg:ml-0">
                <label className="block text-[10px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs">
                  Job Type
                </label>

                <select
                  value={searchValues.jobType}
                  onChange={(event) =>
                    updateField("jobType", event.target.value)
                  }
                  className="mt-1 w-full bg-transparent text-sm text-slate-800 outline-none"
                >
                  <option>All Job Types</option>
                  <option>Full Time</option>
                  <option>Part Time</option>
                  <option>Remote</option>
                  <option>Hybrid</option>
                  <option>Internship</option>
                </select>
              </div>
            </div>

            <div className="w-full lg:w-auto lg:pl-4">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl lg:min-w-[170px]"
              >
                <FaSearch />
                Search Jobs
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default JobsHero;