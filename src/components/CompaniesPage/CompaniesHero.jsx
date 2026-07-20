import {
  FaSearch,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";

function CompaniesHero({
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
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-[18%] h-80 w-80 rounded-full border border-white/10"></div>

        <div className="absolute -top-20 right-[7%] h-56 w-56 rounded-full border border-white/10"></div>

        <div className="absolute left-[18%] top-8 h-20 w-20 rounded-full border border-white/10"></div>

        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl"></div>

        {/* City Shape */}
        <div className="absolute bottom-0 left-0 right-0 flex h-20 items-end justify-between px-4 opacity-10">
          {[48, 70, 36, 58, 82, 45, 65, 40, 76, 52, 88, 43].map(
            (height, index) => (
              <div
                key={index}
                style={{ height: `${height}px` }}
                className="w-8 rounded-t-sm bg-white sm:w-12"
              ></div>
            )
          )}
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1380px]">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-2xl font-extrabold text-white sm:text-3xl lg:text-[36px]">
            Discover Top Companies
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-sm text-blue-100 sm:text-base">
            Explore verified companies and find your dream career
          </p>
        </div>

        {/* Search Form */}
        <form
          onSubmit={handleSubmit}
          className="mx-auto mt-6 w-full max-w-[1100px] rounded-2xl bg-white p-3 shadow-[0_20px_50px_rgba(0,0,0,0.2)] sm:p-4"
        >
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-0">
            {/* Company Search */}
            <div className="flex min-w-0 flex-1 items-center rounded-xl border border-slate-200 px-4 py-3 lg:rounded-none lg:border-0">
              <FaSearch className="shrink-0 text-slate-400 lg:hidden" />

              <div className="ml-3 min-w-0 flex-1 lg:ml-0">
                <label
                  htmlFor="company-keyword"
                  className="block text-[10px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs"
                >
                  Search Company
                </label>

                <input
                  id="company-keyword"
                  type="text"
                  value={searchValues.keyword}
                  onChange={(event) =>
                    updateField("keyword", event.target.value)
                  }
                  placeholder="e.g. Google, Microsoft"
                  className="mt-1 w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                />
              </div>
            </div>

            <div className="hidden h-14 w-px bg-slate-200 lg:block"></div>

            {/* Industry */}
            <div className="flex min-w-0 flex-1 items-center rounded-xl border border-slate-200 px-4 py-3 lg:rounded-none lg:border-0">
              <FaBuilding className="shrink-0 text-slate-400 lg:hidden" />

              <div className="ml-3 min-w-0 flex-1 lg:ml-0">
                <label
                  htmlFor="company-industry"
                  className="block text-[10px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs"
                >
                  Industry
                </label>

                <select
                  id="company-industry"
                  value={searchValues.industry}
                  onChange={(event) =>
                    updateField("industry", event.target.value)
                  }
                  className="mt-1 w-full bg-transparent text-sm font-medium text-slate-800 outline-none"
                >
                  <option>All Industries</option>
                  <option>Technology</option>
                  <option>E-commerce</option>
                  <option>Food Technology</option>
                  <option>IT Services</option>
                  <option>Finance</option>
                  <option>Healthcare</option>
                  <option>Consulting</option>
                </select>
              </div>
            </div>

            <div className="hidden h-14 w-px bg-slate-200 lg:block"></div>

            {/* Location */}
            <div className="flex min-w-0 flex-1 items-center rounded-xl border border-slate-200 px-4 py-3 lg:rounded-none lg:border-0">
              <FaMapMarkerAlt className="shrink-0 text-slate-400 lg:hidden" />

              <div className="ml-3 min-w-0 flex-1 lg:ml-0">
                <label
                  htmlFor="company-location"
                  className="block text-[10px] font-bold uppercase tracking-wide text-slate-400 sm:text-xs"
                >
                  Location
                </label>

                <input
                  id="company-location"
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

            {/* Button */}
            <div className="w-full lg:w-auto lg:pl-4">
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-8 py-4 font-bold text-white shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl lg:min-w-[190px]"
              >
                <FaSearch />
                Search Companies
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CompaniesHero;