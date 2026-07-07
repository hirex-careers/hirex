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
    salary: "₹8-12 LPA",
    type: "Full Time",
  },
  {
    logo: google,
    company: "Google",
    title: "Product Manager",
    location: "Hyderabad",
    salary: "₹15-25 LPA",
    type: "Full Time",
  },
  {
    logo: swiggy,
    company: "Swiggy",
    title: "Business Analyst",
    location: "Bangalore",
    salary: "₹6-10 LPA",
    type: "Full Time",
  },
  {
    logo: amazon,
    company: "Amazon",
    title: "Software Engineer",
    location: "Pune",
    salary: "₹12-20 LPA",
    type: "Full Time",
  },
];

function FeaturedJobs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-12">

          <h2 className="text-4xl font-bold">
            Featured Jobs
          </h2>

          <button className="text-blue-600 font-semibold">
            View All →
          </button>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">

          {jobs.map((job) => (
            <JobCard key={job.company} {...job} />
          ))}

        </div>

      </div>
    </section>
  );
}

export default FeaturedJobs;