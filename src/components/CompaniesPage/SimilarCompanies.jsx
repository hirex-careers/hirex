import { useState } from "react";

import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
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
    industry: "Technology, Internet",
    location: "Bangalore, India",
    rating: 4.6,
    employees: "10,000+",
    openJobs: 234,
  },
  {
    id: 2,
    name: "Microsoft",
    logo: microsoft,
    industry: "Technology, Software",
    location: "Hyderabad, India",
    rating: 4.5,
    employees: "10,000+",
    openJobs: 198,
  },
  {
    id: 3,
    name: "Amazon",
    logo: amazon,
    industry: "E-commerce, Cloud",
    location: "Bangalore, India",
    rating: 4.4,
    employees: "10,000+",
    openJobs: 312,
  },
  {
    id: 4,
    name: "Swiggy",
    logo: swiggy,
    industry: "Food Technology",
    location: "Bangalore, India",
    rating: 4.3,
    employees: "5,000+",
    openJobs: 168,
  },
  {
    id: 5,
    name: "Infosys",
    logo: google,
    industry: "Technology, IT Services",
    location: "Pune, India",
    rating: 4.1,
    employees: "10,000+",
    openJobs: 189,
  },
  {
    id: 6,
    name: "Tata Consultancy",
    logo: microsoft,
    industry: "Technology, Consulting",
    location: "Mumbai, India",
    rating: 4.2,
    employees: "10,000+",
    openJobs: 278,
  },
  {
    id: 7,
    name: "Flipkart",
    logo: amazon,
    industry: "E-commerce",
    location: "Bangalore, India",
    rating: 4.3,
    employees: "10,000+",
    openJobs: 143,
  },
  {
    id: 8,
    name: "Zomato",
    logo: swiggy,
    industry: "Food Technology",
    location: "Gurugram, India",
    rating: 4.2,
    employees: "5,000+",
    openJobs: 201,
  },
];

function SimilarCompanies({
  currentCompany,
  onSelectCompany,
}) {
  if (!currentCompany) {
    return null;
  }

  const similarCompanies = companies.filter(
    (company) => company.name !== currentCompany.name
  );

  const handleViewCompany = (company) => {
    if (onSelectCompany) {
      onSelectCompany(company);
      return;
    }

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#071A55] via-[#123B9A] to-[#2869E8] px-5 py-8 text-white sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"></div>

          <div className="absolute -bottom-24 left-[25%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Recommended Companies
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Similar to {currentCompany.name}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Explore companies offering similar roles, technologies and
              career opportunities.
            </p>
          </div>

          <button
            type="button"
            className="flex w-full shrink-0 items-center justify-center gap-3 rounded-xl border border-white/20 bg-white/10 px-6 py-3.5 font-bold text-white backdrop-blur-lg transition hover:bg-white hover:text-blue-600 sm:w-auto"
          >
            Browse All Companies
            <FaArrowRight />
          </button>
        </div>
      </div>

      {/* Cards */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="flex snap-x gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-2 md:overflow-visible md:pb-0 xl:grid-cols-4">
          {similarCompanies.map((company) => (
            <SimilarCompanyCard
              key={company.id}
              company={company}
              onView={() => handleViewCompany(company)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-7 flex flex-col gap-5 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Find the Right Workplace
            </p>

            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
              Compare companies before choosing your next role
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Compare ratings, employee size, open jobs and locations to make
              a better career decision.
            </p>
          </div>

          <button
            type="button"
            className="flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
          >
            Compare Companies
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function SimilarCompanyCard({
  company,
  onView,
}) {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <article className="group flex min-w-[285px] snap-start flex-col rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl md:min-w-0">
      {/* Company Header */}
      <div className="flex items-start justify-between gap-3">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-slate-200 bg-white p-3 shadow-sm">
          <img
            src={company.logo}
            alt={`${company.name} logo`}
            className="h-10 w-10 object-contain"
          />
        </div>

        <div className="rounded-full bg-green-50 px-3 py-1.5 text-[11px] font-bold text-green-700">
          Hiring
        </div>
      </div>

      {/* Company Details */}
      <div className="mt-5">
        <div className="flex items-center gap-2">
          <h3 className="truncate text-xl font-extrabold text-slate-900">
            {company.name}
          </h3>

          <FaCheckCircle className="shrink-0 text-sm text-blue-600" />
        </div>

        <p className="mt-2 min-h-[40px] text-sm leading-5 text-slate-500">
          {company.industry}
        </p>
      </div>

      {/* Rating */}
      <div className="mt-4 flex items-center gap-2">
        <div className="flex gap-1 text-amber-400">
          {[1, 2, 3, 4, 5].map((star) => (
            <FaStar
              key={star}
              className={
                star <= Math.round(company.rating)
                  ? "text-amber-400"
                  : "text-slate-200"
              }
            />
          ))}
        </div>

        <span className="text-sm font-extrabold text-slate-900">
          {company.rating}
        </span>
      </div>

      {/* Information */}
      <div className="mt-5 space-y-3 text-sm text-slate-600">
        <p className="flex items-center gap-3">
          <FaMapMarkerAlt className="shrink-0 text-blue-600" />

          <span className="truncate">
            {company.location}
          </span>
        </p>

        <p className="flex items-center gap-3">
          <FaUsers className="shrink-0 text-blue-600" />

          {company.employees} Employees
        </p>

        <p className="flex items-center gap-3">
          <FaBriefcase className="shrink-0 text-blue-600" />

          {company.openJobs} Open Jobs
        </p>
      </div>

      {/* Jobs Badge */}
      <div className="mt-5 rounded-2xl bg-blue-50 px-4 py-3">
        <p className="text-xs font-semibold text-blue-600">
          Current Opportunities
        </p>

        <p className="mt-1 text-lg font-extrabold text-slate-900">
          {company.openJobs} Jobs Available
        </p>
      </div>

      {/* Buttons */}
      <div className="mt-auto grid grid-cols-2 gap-3 pt-6">
        <button
          type="button"
          onClick={() =>
            setIsFollowing((previousState) => !previousState)
          }
          className={`rounded-xl px-4 py-3 text-sm font-extrabold transition ${
            isFollowing
              ? "border border-blue-600 bg-blue-50 text-blue-600"
              : "border border-slate-300 text-slate-700 hover:border-blue-500 hover:text-blue-600"
          }`}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>

        <button
          type="button"
          onClick={onView}
          className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-4 py-3 text-sm font-extrabold text-white shadow-md transition hover:-translate-y-0.5"
        >
          View
          <FaArrowRight className="text-xs" />
        </button>
      </div>
    </article>
  );
}

export default SimilarCompanies;