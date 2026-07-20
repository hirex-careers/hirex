import {
  FaArrowRight,
  FaLinkedinIn,
  FaQuoteLeft,
  FaStar,
  FaTrophy,
} from "react-icons/fa";

const stories = [
  {
    id: 1,
    name: "Arjun Mehta",
    initials: "AM",
    role: "Software Engineer",
    company: "Microsoft",
    package: "18.5 LPA",
    previousStatus: "Final Year Student",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    story:
      "HireX helped me improve my resume, prepare for technical interviews and connect with the right opportunity. I received my dream offer within three weeks.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    initials: "PS",
    role: "Data Scientist",
    company: "Google",
    package: "24 LPA",
    previousStatus: "Data Analyst",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    story:
      "The career guidance and interview preparation were extremely useful. The platform helped me switch to a better role with strong career growth.",
  },
  {
    id: 3,
    name: "Rahul Das",
    initials: "RD",
    role: "Cloud Engineer",
    company: "Amazon",
    package: "16.8 LPA",
    previousStatus: "Technical Support",
    rating: 5,
    linkedin: "https://www.linkedin.com/in/sayanrana/",
    story:
      "After months of unsuccessful applications, HireX helped me identify my skill gaps and prepare strategically. I successfully transitioned into cloud engineering.",
  },
];

function SuccessStories() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="relative overflow-hidden bg-gradient-to-r from-[#071A55] via-[#123B9A] to-[#2869E8] px-5 py-8 text-white sm:px-7">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10" />

          <div className="absolute -bottom-24 left-[30%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />
        </div>

        <div className="relative z-10 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Candidate Journeys
            </p>

            <h2 className="mt-3 text-2xl font-extrabold sm:text-3xl">
              Placement Success Stories
            </h2>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-blue-100">
              Real stories from candidates who achieved meaningful career
              transformations through HireX.
            </p>
          </div>

          <button
            type="button"
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 font-bold text-white backdrop-blur-lg transition hover:bg-white hover:text-blue-600 sm:w-auto"
          >
            View All Stories
            <FaArrowRight />
          </button>
        </div>
      </div>

      <div className="grid gap-5 p-4 sm:p-6 lg:grid-cols-3">
        {stories.map((story) => (
          <article
            key={story.id}
            className="group flex h-full flex-col rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
                <FaQuoteLeft />
              </div>

              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar
                    key={star}
                    className={
                      star <= story.rating
                        ? "text-amber-400"
                        : "text-slate-200"
                    }
                  />
                ))}
              </div>
            </div>

            <p className="mt-5 min-h-[150px] text-sm leading-7 text-slate-600">
              “{story.story}”
            </p>

            <div className="mt-5 grid grid-cols-2 gap-3">
              <StoryStat
                label="Placed At"
                value={story.company}
              />

              <StoryStat
                label="Package"
                value={story.package}
              />
            </div>

            <div className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-5">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-extrabold text-white">
                {story.initials}
              </div>

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-extrabold text-slate-900">
                  {story.name}
                </h3>

                <p className="mt-1 truncate text-xs text-slate-500">
                  {story.role}
                </p>

                <p className="mt-1 text-xs font-bold text-blue-600">
                  Previously: {story.previousStatus}
                </p>
              </div>

              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-50 text-amber-500">
                <FaTrophy />
              </div>
            </div>

            <a
              href={story.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label={`${story.name} LinkedIn profile`}
              className="mt-auto pt-5"
            >
              <span className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#0077B5] px-4 py-3 text-sm font-extrabold text-[#0077B5] transition hover:bg-[#0077B5] hover:text-white">
                <FaLinkedinIn />
                View LinkedIn Profile
              </span>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}

function StoryStat({ label, value }) {
  return (
    <div className="rounded-xl bg-slate-50 p-3 text-center">
      <p className="text-sm font-extrabold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold text-slate-500">
        {label}
      </p>
    </div>
  );
}

export default SuccessStories;