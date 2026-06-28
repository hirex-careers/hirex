const jobs = [
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Bangalore",
    salary: "₹12 - ₹18 LPA",
    type: "Full Time",
  },
  {
    title: "Data Analyst",
    company: "Accenture",
    location: "Hyderabad",
    salary: "₹6 - ₹10 LPA",
    type: "Full Time",
  },
  {
    title: "Java Developer",
    company: "TCS",
    location: "Kolkata",
    salary: "₹5 - ₹8 LPA",
    type: "Full Time",
  },
];

export default function FeaturedJobs() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center">
          Featured Jobs
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {jobs.map((job) => (
            <div
              key={job.title}
              className="rounded-2xl border p-6 shadow-sm hover:shadow-xl transition"
            >
              <h3 className="text-2xl font-bold">{job.title}</h3>

              <p className="text-blue-600 mt-2">{job.company}</p>

              <p className="text-gray-500 mt-2">
                📍 {job.location}
              </p>

              <p className="mt-2 font-semibold">
                💰 {job.salary}
              </p>

              <span className="inline-block mt-4 px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                {job.type}
              </span>

              <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}