import { useState } from "react";

import {
  FaBookmark,
  FaRegBookmark,
  FaBriefcase,
  FaMapMarkerAlt,
  FaUsers,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";

const jobTemplates = [
  {
    id: 1,
    title: "Software Engineer",
    location: "Bangalore, India",
    salary: "₹12 - ₹20 LPA",
    experience: "2-4 Years",
    type: "Full Time",
    mode: "Hybrid",
    posted: "2 hours ago",
    skills: ["JavaScript", "React", "Node.js"],
  },
  {
    id: 2,
    title: "Data Analyst",
    location: "Hyderabad, India",
    salary: "₹8 - ₹14 LPA",
    experience: "1-3 Years",
    type: "Full Time",
    mode: "Hybrid",
    posted: "5 hours ago",
    skills: ["SQL", "Power BI", "Excel"],
  },
  {
    id: 3,
    title: "Product Manager",
    location: "Gurugram, India",
    salary: "₹18 - ₹28 LPA",
    experience: "4-7 Years",
    type: "Full Time",
    mode: "On-site",
    posted: "1 day ago",
    skills: ["Product", "Agile", "Analytics"],
  },
  {
    id: 4,
    title: "UI / UX Designer",
    location: "Remote",
    salary: "₹9 - ₹16 LPA",
    experience: "2-4 Years",
    type: "Full Time",
    mode: "Remote",
    posted: "1 day ago",
    skills: ["Figma", "UX Research", "Design System"],
  },
  {
    id: 5,
    title: "DevOps Engineer",
    location: "Pune, India",
    salary: "₹14 - ₹22 LPA",
    experience: "3-6 Years",
    type: "Full Time",
    mode: "Hybrid",
    posted: "2 days ago",
    skills: ["AWS", "Docker", "Kubernetes"],
  },
  {
    id: 6,
    title: "Business Analyst",
    location: "Mumbai, India",
    salary: "₹7 - ₹13 LPA",
    experience: "1-4 Years",
    type: "Full Time",
    mode: "On-site",
    posted: "3 days ago",
    skills: ["Excel", "SQL", "Business Analysis"],
  },
];

function CompanyOpenJobs({ company }) {
  if (!company) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Current Opportunities
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            Open Jobs at {company.name}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Explore verified career opportunities and apply directly through
            HireX.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white p-2">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-8 w-8 object-contain"
            />
          </div>

          <div>
            <p className="text-xs font-semibold text-slate-500">
              Total Openings
            </p>

            <p className="font-extrabold text-slate-900">
              {company.openJobs} Jobs
            </p>
          </div>
        </div>
      </div>

      {/* Job Cards */}
      <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {jobTemplates.map((job) => (
          <OpenJobCard
            key={`${company.id}-${job.id}`}
            job={job}
            company={company}
          />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-7 flex flex-col items-center justify-between gap-4 rounded-2xl bg-gradient-to-r from-[#071A55] via-[#123B9A] to-[#2869E8] p-5 text-white sm:flex-row sm:p-6">
        <div>
          <h3 className="text-xl font-extrabold">
            Explore all {company.openJobs} opportunities
          </h3>

          <p className="mt-2 text-sm text-blue-100">
            Find a role matching your skills, experience and career goals.
          </p>
        </div>

        <button
          type="button"
          className="flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-3.5 font-extrabold text-blue-600 shadow-lg transition hover:-translate-y-0.5 sm:w-auto"
        >
          View All Jobs
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}

function OpenJobCard({ job, company }) {
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved((previousState) => !previousState);
  };

  return (
    <article className="group flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl">
      {/* Company */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2">
            <img
              src={company.logo}
              alt={`${company.name} logo`}
              className="h-8 w-8 object-contain"
            />
          </div>

          <div className="min-w-0">
            <h3 className="truncate text-lg font-extrabold text-slate-900">
              {job.title}
            </h3>

            <div className="mt-1 flex items-center gap-2">
              <p className="truncate text-sm font-bold text-blue-600">
                {company.name}
              </p>

              <FaCheckCircle className="shrink-0 text-xs text-blue-500" />
            </div>
          </div>
        </div>

        <button
          type="button"
          onClick={handleSave}
          aria-label="Save job"
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full border transition ${
            isSaved
              ? "border-blue-500 bg-blue-50 text-blue-600"
              : "border-slate-200 text-slate-600 hover:border-blue-500 hover:text-blue-600"
          }`}
        >
          {isSaved ? <FaBookmark /> : <FaRegBookmark />}
        </button>
      </div>

      {/* Details */}
      <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-slate-500">
        <span className="flex items-center gap-2">
          <FaMapMarkerAlt className="shrink-0 text-blue-600" />
          <span className="truncate">{job.location}</span>
        </span>

        <span className="flex items-center gap-2">
          <FaBriefcase className="shrink-0 text-blue-600" />
          {job.experience}
        </span>

        <span className="flex items-center gap-2">
          <FaUsers className="shrink-0 text-blue-600" />
          {job.mode}
        </span>

        <span className="flex items-center gap-2">
          <FaClock className="shrink-0 text-blue-600" />
          {job.type}
        </span>
      </div>

      {/* Skills */}
      <div className="mt-5 flex flex-wrap gap-2">
        {job.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-bold text-slate-600"
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Salary */}
      <div className="mt-5 rounded-xl bg-green-50 px-4 py-3">
        <p className="text-xs font-semibold text-green-600">
          Salary Package
        </p>

        <p className="mt-1 font-extrabold text-slate-900">
          {job.salary}
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto flex items-end justify-between gap-3 pt-5">
        <p className="text-xs text-slate-400">
          Posted {job.posted}
        </p>

        <button
          type="button"
          className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-0.5"
        >
          View Job
          <FaArrowRight className="text-xs" />
        </button>
      </div>
    </article>
  );
}

export default CompanyOpenJobs;