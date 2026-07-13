import JobCard from "./JobCard";

import microsoft from "../../assets/images/company/microsoft.png";
import google from "../../assets/images/company/google.png";
import amazon from "../../assets/images/company/amazon.png";
import swiggy from "../../assets/images/company/swiggy.png";

const jobs = [
  {
    logo: microsoft,
    company: "Microsoft",
    title: "Frontend Developer",
    location: "Bangalore",
    salary: "₹8 - ₹12 LPA",
    type: "Full Time",
  },
  {
    logo: google,
    company: "Google",
    title: "Product Manager",
    location: "Hyderabad",
    salary: "₹18 - ₹30 LPA",
    type: "Full Time",
  },
  {
    logo: amazon,
    company: "Amazon",
    title: "Software Engineer",
    location: "Pune",
    salary: "₹15 - ₹25 LPA",
    type: "Hybrid",
  },
  {
    logo: swiggy,
    company: "Swiggy",
    title: "Business Analyst",
    location: "Bangalore",
    salary: "₹8 - ₹14 LPA",
    type: "Remote",
  },
];

function FeaturedJobs() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F8FAFC] to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="flex flex-col md:flex-row justify-between md:items-center mb-14">

          <div>
            <span className="text-blue-600 font-semibold uppercase tracking-widest">
              Featured Opportunities
            </span>

            <h2 className="text-4xl md:text-5xl font-bold mt-3 text-gray-900">
              Explore Top Jobs
            </h2>

            <p className="text-gray-500 mt-4 max-w-xl">
              Discover exciting career opportunities from India's leading companies.
            </p>
          </div>

          <button className="mt-6 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all">
            View All Jobs →
          </button>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">

          {jobs.map((job) => (
            <JobCard key={job.company} {...job} />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedJobs;