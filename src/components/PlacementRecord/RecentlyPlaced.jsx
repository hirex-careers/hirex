import {
  FaArrowRight,
  FaBriefcase,
  FaCalendarAlt,
  FaLinkedinIn,
} from "react-icons/fa";

import google from "../../assets/images/company/google.png";
import microsoft from "../../assets/images/company/microsoft.png";
import amazon from "../../assets/images/company/amazon.png";
import swiggy from "../../assets/images/company/swiggy.png";

const candidates = [
  {
    id: 1,
    name: "Rohit Kumar",
    initials: "RK",
    role: "Software Development Engineer",
    company: "Microsoft",
    companyLogo: microsoft,
    package: "18.5 LPA",
    date: "15 May 2024",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
  {
    id: 2,
    name: "Sneha Patel",
    initials: "SP",
    role: "Data Scientist",
    company: "Google",
    companyLogo: google,
    package: "24.0 LPA",
    date: "14 May 2024",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
  {
    id: 3,
    name: "Amit Verma",
    initials: "AV",
    role: "Product Analyst",
    company: "Amazon",
    companyLogo: amazon,
    package: "16.2 LPA",
    date: "13 May 2024",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
  {
    id: 4,
    name: "Pooja Singh",
    initials: "PS",
    role: "UI / UX Designer",
    company: "Adobe",
    companyLogo: swiggy,
    package: "12.8 LPA",
    date: "12 May 2024",
    linkedin: "https://www.linkedin.com/in/sayanrana/",
  },
];

function RecentlyPlaced() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-5 sm:px-7">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Placement Highlights
          </p>

          <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
            Recently Placed Candidates
          </h2>
        </div>

        <button
          type="button"
          className="flex shrink-0 items-center gap-2 text-sm font-bold text-blue-600"
        >
          View all
          <FaArrowRight />
        </button>
      </div>

      <div className="grid gap-4 p-4 sm:p-6 md:grid-cols-2 xl:grid-cols-4">
        {candidates.map((candidate) => (
          <CandidateCard
            key={candidate.id}
            candidate={candidate}
          />
        ))}
      </div>
    </section>
  );
}

function CandidateCard({ candidate }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-extrabold text-white">
            {candidate.initials}
          </div>

          <div className="min-w-0">
            <h3 className="truncate font-extrabold text-slate-900">
              {candidate.name}
            </h3>

            <p className="mt-1 truncate text-xs text-slate-500">
              {candidate.role}
            </p>
          </div>
        </div>

        <a
          href={candidate.linkedin}
          target="_blank"
          rel="noreferrer"
          aria-label={`${candidate.name} LinkedIn profile`}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0077B5] text-white shadow-md transition hover:-translate-y-0.5"
        >
          <FaLinkedinIn />
        </a>
      </div>

      <div className="mt-5 flex items-center gap-3 rounded-xl bg-slate-50 p-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white p-2">
          <img
            src={candidate.companyLogo}
            alt={`${candidate.company} logo`}
            className="h-7 w-7 object-contain"
          />
        </div>

        <div className="min-w-0">
          <p className="truncate font-bold text-slate-900">
            {candidate.company}
          </p>

          <p className="mt-1 text-xs text-slate-500">
            Verified Hiring Partner
          </p>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-500">
        <div className="rounded-xl border border-slate-200 p-3">
          <FaBriefcase className="text-blue-600" />

          <p className="mt-2 font-extrabold text-slate-900">
            {candidate.package}
          </p>

          <p className="mt-1">Package</p>
        </div>

        <div className="rounded-xl border border-slate-200 p-3">
          <FaCalendarAlt className="text-blue-600" />

          <p className="mt-2 font-extrabold text-slate-900">
            {candidate.date}
          </p>

          <p className="mt-1">Placement Date</p>
        </div>
      </div>

      <a
        href={candidate.linkedin}
        target="_blank"
        rel="noreferrer"
        className="mt-auto pt-5"
      >
        <span className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#0077B5] px-4 py-3 text-sm font-extrabold text-[#0077B5] transition hover:bg-[#0077B5] hover:text-white">
          <FaLinkedinIn />
          View LinkedIn Profile
        </span>
      </a>
    </article>
  );
}

export default RecentlyPlaced;