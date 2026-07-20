import {
  FaStar,
  FaCheckCircle,
  FaQuoteLeft,
  FaLinkedinIn,
} from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Rahul Sharma",
    role: "Software Engineer",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "Excellent work culture with supportive managers and strong learning opportunities. The projects are challenging and help employees grow professionally.",
  },
  {
    id: 2,
    name: "Priya Das",
    role: "UI / UX Designer",
    rating: 4,
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "The company provides a healthy work-life balance, collaborative teammates and opportunities to work with modern design tools and technologies.",
  },
  {
    id: 3,
    name: "Ankit Roy",
    role: "Data Analyst",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    review:
      "Good salary structure, supportive leadership and strong career-growth opportunities. It is a great place for professionals who want to learn.",
  },
];

function EmployeeReviews({ company }) {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
      {/* Heading */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
            Employee Reviews
          </p>

          <h2 className="mt-2 text-2xl font-extrabold text-slate-900">
            What Employees Say
          </h2>

          <p className="mt-2 text-sm leading-6 text-slate-500">
            Reviews shared by professionals working at{" "}
            {company?.name || "this company"}.
          </p>
        </div>

        <button
          type="button"
          className="rounded-xl border border-blue-600 px-5 py-3 text-sm font-bold text-blue-600 transition hover:bg-blue-50"
        >
          View All Reviews
        </button>
      </div>

      {/* Review Cards */}
      <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {reviews.map((review) => (
          <article
            key={review.id}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
          >
            {/* Hover Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-0 transition duration-300 group-hover:opacity-100"></div>

            <div className="relative z-10">
              {/* Top */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
                  <FaQuoteLeft />
                </div>

                <a
                  href={review.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${review.name} LinkedIn profile`}
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0077B5] text-white shadow-md transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <FaLinkedinIn className="text-lg" />
                </a>
              </div>

              {/* Rating */}
              <div className="mt-5 flex gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= review.rating
                        ? "text-amber-400"
                        : "text-slate-200"
                    }
                  />
                ))}
              </div>

              {/* Review */}
              <p className="mt-5 min-h-[145px] text-sm leading-7 text-slate-600">
                “{review.review}”
              </p>

              {/* Employee */}
              <div className="mt-6 border-t border-slate-100 pt-5">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-extrabold text-white">
                      {review.name.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="truncate font-extrabold text-slate-900">
                          {review.name}
                        </h3>

                        <FaCheckCircle className="shrink-0 text-xs text-blue-600" />
                      </div>

                      <p className="mt-1 truncate text-xs text-slate-500">
                        {review.role}
                      </p>
                    </div>
                  </div>

                  <span className="shrink-0 rounded-full bg-green-50 px-3 py-1.5 text-xs font-bold text-green-700">
                    Verified
                  </span>
                </div>

                <a
                  href={review.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#0077B5] px-4 py-3 text-sm font-bold text-[#0077B5] transition hover:bg-[#0077B5] hover:text-white"
                >
                  <FaLinkedinIn />
                  View LinkedIn Profile
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default EmployeeReviews;