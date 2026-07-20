import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
} from "react-icons/fa";

import google from "../../assets/images/company/google.png";
import microsoft from "../../assets/images/company/microsoft.png";
import amazon from "../../assets/images/company/amazon.png";
import swiggy from "../../assets/images/company/swiggy.png";

const companies = [
  {
    id: 1,
    name: "Google",
    logo: google,
    hires: 528,
    averagePackage: "18.6 LPA",
    highestPackage: "32 LPA",
  },
  {
    id: 2,
    name: "Microsoft",
    logo: microsoft,
    hires: 486,
    averagePackage: "17.9 LPA",
    highestPackage: "30 LPA",
  },
  {
    id: 3,
    name: "Amazon",
    logo: amazon,
    hires: 452,
    averagePackage: "16.8 LPA",
    highestPackage: "28 LPA",
  },
  {
    id: 4,
    name: "Swiggy",
    logo: swiggy,
    hires: 318,
    averagePackage: "12.4 LPA",
    highestPackage: "20 LPA",
  },
  {
    id: 5,
    name: "TCS",
    logo: microsoft,
    hires: 642,
    averagePackage: "7.8 LPA",
    highestPackage: "14 LPA",
  },
  {
    id: 6,
    name: "Infosys",
    logo: google,
    hires: 574,
    averagePackage: "8.2 LPA",
    highestPackage: "15 LPA",
  },
];

function TopHiringCompanies() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b border-slate-200 px-5 py-5 sm:flex-row sm:items-end sm:justify-between sm:px-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Hiring Partners
          </p>

          <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
            Top Hiring Companies
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Leading companies hiring candidates through HireX.
          </p>
        </div>

        <button
          type="button"
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-600 px-5 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-50 sm:w-auto"
        >
          View all companies
          <FaArrowRight />
        </button>
      </div>

      <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-2 xl:grid-cols-3">
        {companies.map((company) => (
          <article
            key={company.id}
            className="group rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-slate-200 bg-white p-2 shadow-sm">
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="h-10 w-10 object-contain"
                  />
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate text-lg font-extrabold text-slate-900">
                      {company.name}
                    </h3>

                    <FaCheckCircle className="shrink-0 text-xs text-blue-600" />
                  </div>

                  <p className="mt-1 text-xs font-semibold text-green-600">
                    Active Hiring Partner
                  </p>
                </div>
              </div>

              <div className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                #{company.id}
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-slate-50 p-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                  <FaBriefcase />
                </div>

                <div>
                  <p className="text-xl font-extrabold text-slate-900">
                    {company.hires}
                  </p>

                  <p className="text-xs text-slate-500">
                    Candidates hired
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <CompanyStat
                label="Average Package"
                value={company.averagePackage}
              />

              <CompanyStat
                label="Highest Package"
                value={company.highestPackage}
              />
            </div>

            <button
              type="button"
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 font-extrabold text-white shadow-md transition hover:-translate-y-0.5"
            >
              View Open Jobs
              <FaArrowRight />
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

function CompanyStat({ label, value }) {
  return (
    <div className="rounded-xl border border-slate-200 p-3 text-center">
      <p className="text-sm font-extrabold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold text-slate-500">
        {label}
      </p>
    </div>
  );
}

export default TopHiringCompanies;