const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Software Engineer @ TCS",
    review:
      "HireX helped me get interview calls within 3 days. Amazing platform!",
  },
  {
    name: "Priya Singh",
    role: "Data Analyst @ Accenture",
    review:
      "The application process was smooth and I got hired quickly.",
  },
  {
    name: "Amit Verma",
    role: "Frontend Developer @ Infosys",
    review:
      "Verified jobs and excellent support. Highly recommended!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center">
          What Our Users Say
        </h2>

        <p className="text-center text-gray-500 mt-3">
          Trusted by thousands of job seekers.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-2xl transition"
            >
              <div className="text-yellow-500 text-xl">
                ⭐⭐⭐⭐⭐
              </div>

              <p className="mt-4 text-gray-600">
                "{item.review}"
              </p>

              <h3 className="mt-6 text-xl font-bold">
                {item.name}
              </h3>

              <p className="text-blue-600">
                {item.role}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}