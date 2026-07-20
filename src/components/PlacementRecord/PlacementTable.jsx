import { useMemo, useState } from "react";

import {
  FaArrowLeft,
  FaArrowRight,
  FaBriefcase,
  FaDownload,
  FaLinkedinIn,
  FaSearch,
} from "react-icons/fa";

const placementRecords = [
  {
    id: 1,
    name: "Rohit Kumar",
    initials: "RK",
    role: "Software Engineer",
    domain: "Software Development",
    company: "Microsoft",
    package: 18.5,
    packageLabel: "₹18.5 LPA",
    date: "15 May 2024",
    month: "May",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
  {
    id: 2,
    name: "Sneha Patel",
    initials: "SP",
    role: "Data Scientist",
    domain: "Data Science",
    company: "Google",
    package: 24,
    packageLabel: "₹24 LPA",
    date: "14 May 2024",
    month: "May",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
  {
    id: 3,
    name: "Amit Verma",
    initials: "AV",
    role: "Product Analyst",
    domain: "Data Analytics",
    company: "Amazon",
    package: 16.2,
    packageLabel: "₹16.2 LPA",
    date: "13 May 2024",
    month: "May",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
  {
    id: 4,
    name: "Pooja Singh",
    initials: "PS",
    role: "UI / UX Designer",
    domain: "UI / UX Design",
    company: "Adobe",
    package: 12.8,
    packageLabel: "₹12.8 LPA",
    date: "12 May 2024",
    month: "May",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
  {
    id: 5,
    name: "Vikram Das",
    initials: "VD",
    role: "Cloud Engineer",
    domain: "Cloud Computing",
    company: "Amazon",
    package: 17.4,
    packageLabel: "₹17.4 LPA",
    date: "10 April 2024",
    month: "April",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
  {
    id: 6,
    name: "Neha Gupta",
    initials: "NG",
    role: "Business Analyst",
    domain: "Data Analytics",
    company: "Deloitte",
    package: 11.6,
    packageLabel: "₹11.6 LPA",
    date: "08 April 2024",
    month: "April",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
  {
    id: 7,
    name: "Karan Yadav",
    initials: "KY",
    role: "DevOps Engineer",
    domain: "DevOps",
    company: "Infosys",
    package: 14.5,
    packageLabel: "₹14.5 LPA",
    date: "29 March 2024",
    month: "March",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
  {
    id: 8,
    name: "Aisha Khan",
    initials: "AK",
    role: "Cyber Security Analyst",
    domain: "Cyber Security",
    company: "TCS",
    package: 10.8,
    packageLabel: "₹10.8 LPA",
    date: "24 March 2024",
    month: "March",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
];

function PlacementTable() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("Latest");

  const filteredRecords = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    let result = placementRecords.filter((record) => {
      return (
        !keyword ||
        record.name.toLowerCase().includes(keyword) ||
        record.company.toLowerCase().includes(keyword) ||
        record.role.toLowerCase().includes(keyword) ||
        record.domain.toLowerCase().includes(keyword)
      );
    });

    if (sortBy === "Package: High to Low") {
      result = [...result].sort(
        (firstRecord, secondRecord) =>
          secondRecord.package - firstRecord.package
      );
    }

    if (sortBy === "Candidate Name") {
      result = [...result].sort((firstRecord, secondRecord) =>
        firstRecord.name.localeCompare(secondRecord.name)
      );
    }

    return result;
  }, [search, sortBy]);

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="border-b border-slate-200 px-4 py-5 sm:px-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Complete Records
            </p>

            <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
              Placement Records
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Search and explore verified candidate placement details.
            </p>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-bold text-white transition hover:bg-blue-700 lg:w-auto"
          >
            <FaDownload />
            Export Records
          </button>
        </div>

        {/* Search and Sort */}
        <div className="mt-5 grid gap-3 md:grid-cols-[1fr_220px]">
          <div className="flex items-center rounded-xl border border-slate-300 px-4 py-3.5 focus-within:border-blue-600 focus-within:ring-2 focus-within:ring-blue-100">
            <FaSearch className="shrink-0 text-slate-400" />

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search candidate, company, role or domain"
              className="ml-3 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
            />
          </div>

          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="rounded-xl border border-slate-300 bg-white px-4 py-3.5 text-sm font-bold text-slate-700 outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            <option>Latest</option>
            <option>Package: High to Low</option>
            <option>Candidate Name</option>
          </select>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden overflow-x-auto lg:block">
        <table className="w-full min-w-[1100px]">
          <thead className="bg-slate-50 text-left">
            <tr className="text-xs font-bold uppercase tracking-wide text-slate-500">
              <th className="px-6 py-4">Candidate</th>
              <th className="px-5 py-4">Role & Domain</th>
              <th className="px-5 py-4">Company</th>
              <th className="px-5 py-4">Package</th>
              <th className="px-5 py-4">Placement Date</th>
              <th className="px-5 py-4 text-center">LinkedIn</th>
            </tr>
          </thead>

          <tbody>
            {filteredRecords.map((record) => (
              <tr
                key={record.id}
                className="border-t border-slate-100 transition hover:bg-blue-50/40"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-sm font-extrabold text-white">
                      {record.initials}
                    </div>

                    <div>
                      <p className="font-extrabold text-slate-900">
                        {record.name}
                      </p>

                      <p className="mt-1 text-xs text-slate-500">
                        Verified Candidate
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-5 py-5">
                  <p className="font-bold text-slate-800">
                    {record.role}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    {record.domain}
                  </p>
                </td>

                <td className="px-5 py-5">
                  <p className="font-bold text-blue-600">
                    {record.company}
                  </p>
                </td>

                <td className="px-5 py-5">
                  <span className="rounded-full bg-green-50 px-3 py-2 text-sm font-extrabold text-green-700">
                    {record.packageLabel}
                  </span>
                </td>

                <td className="px-5 py-5 text-sm font-semibold text-slate-600">
                  {record.date}
                </td>

                <td className="px-5 py-5">
                  <a
                    href={record.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-[#0077B5] text-white transition hover:-translate-y-0.5"
                  >
                    <FaLinkedinIn />
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile Cards */}
      <div className="space-y-4 p-4 lg:hidden">
        {filteredRecords.map((record) => (
          <article
            key={record.id}
            className="rounded-2xl border border-slate-200 p-4"
          >
            <div className="flex items-start gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-extrabold text-white">
                {record.initials}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="font-extrabold text-slate-900">
                  {record.name}
                </h3>

                <p className="mt-1 text-sm font-bold text-blue-600">
                  {record.role}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {record.domain}
                </p>
              </div>

              <a
                href={record.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0077B5] text-white"
              >
                <FaLinkedinIn />
              </a>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-3">
              <MobileInfo
                label="Company"
                value={record.company}
              />

              <MobileInfo
                label="Package"
                value={record.packageLabel}
              />

              <MobileInfo
                label="Placement Date"
                value={record.date}
                className="col-span-2"
              />
            </div>
          </article>
        ))}
      </div>

      {/* Empty Result */}
      {filteredRecords.length === 0 && (
        <div className="px-6 py-16 text-center">
          <FaBriefcase className="mx-auto text-4xl text-slate-300" />

          <h3 className="mt-4 text-lg font-extrabold text-slate-900">
            No placement records found
          </h3>

          <p className="mt-2 text-sm text-slate-500">
            Try another candidate, company, role or domain.
          </p>
        </div>
      )}

      {/* Pagination */}
      {filteredRecords.length > 0 && (
        <div className="flex items-center justify-between gap-4 border-t border-slate-200 px-4 py-5 sm:px-7">
          <p className="text-xs font-semibold text-slate-500 sm:text-sm">
            Showing {filteredRecords.length} of 12,846 records
          </p>

          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Previous page"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-600 transition hover:border-blue-500 hover:text-blue-600"
            >
              <FaArrowLeft />
            </button>

            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-bold text-white"
            >
              1
            </button>

            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center rounded-lg font-bold text-slate-600 hover:bg-slate-100 sm:flex"
            >
              2
            </button>

            <button
              type="button"
              className="hidden h-10 w-10 items-center justify-center rounded-lg font-bold text-slate-600 hover:bg-slate-100 sm:flex"
            >
              3
            </button>

            <button
              type="button"
              aria-label="Next page"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-300 text-slate-600 transition hover:border-blue-500 hover:text-blue-600"
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

function MobileInfo({
  label,
  value,
  className = "",
}) {
  return (
    <div
      className={`rounded-xl bg-slate-50 p-3 ${className}`}
    >
      <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
        {label}
      </p>

      <p className="mt-1 text-sm font-extrabold text-slate-800">
        {value}
      </p>
    </div>
  );
}

export default PlacementTable;