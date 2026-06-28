const jobs = [
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "₹12 LPA",
  },
  {
    title: "Data Analyst",
    company: "Amazon",
    location: "Hyderabad",
    salary: "₹8 LPA",
  },
  {
    title: "Full Stack Developer",
    company: "Microsoft",
    location: "Remote",
    salary: "₹18 LPA",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8">
        <h2 className="text-4xl font-bold text-center">
          Featured Jobs
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Handpicked opportunities from top companies
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold">{job.title}</h3>

              <p className="mt-4">{job.company}</p>

              <p>{job.location}</p>

              <p className="mt-3 text-blue-600 font-semibold">
                {job.salary}
              </p>

              <button className="mt-6 w-full bg-blue-600 text-white py-3 rounded-xl">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}