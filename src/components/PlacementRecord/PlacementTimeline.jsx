import {
  FaBriefcase,
  FaBuilding,
  FaCheckCircle,
  FaRupeeSign,
  FaUserGraduate,
} from "react-icons/fa";

const timelineItems = [
  {
    id: 1,
    title: "Riya Sen joined Google",
    description:
      "Placed as a Data Scientist with a ₹24 LPA package.",
    time: "10 minutes ago",
    icon: <FaUserGraduate />,
    iconClass: "bg-blue-100 text-blue-600",
  },
  {
    id: 2,
    title: "Microsoft hired 18 candidates",
    description:
      "Candidates were selected for software engineering roles.",
    time: "35 minutes ago",
    icon: <FaBuilding />,
    iconClass: "bg-cyan-100 text-cyan-600",
  },
  {
    id: 3,
    title: "New highest package recorded",
    description:
      "A candidate received a ₹21.4 LPA offer in Cloud Computing.",
    time: "1 hour ago",
    icon: <FaRupeeSign />,
    iconClass: "bg-amber-100 text-amber-600",
  },
  {
    id: 4,
    title: "Amazon placement drive completed",
    description:
      "42 candidates were shortlisted across multiple domains.",
    time: "3 hours ago",
    icon: <FaBriefcase />,
    iconClass: "bg-orange-100 text-orange-600",
  },
  {
    id: 5,
    title: "Monthly placement target achieved",
    description:
      "HireX crossed 700 placements this month.",
    time: "Yesterday",
    icon: <FaCheckCircle />,
    iconClass: "bg-green-100 text-green-600",
  },
];

function PlacementTimeline() {
  return (
    <section className="h-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      <div className="border-b border-slate-200 px-5 py-5 sm:px-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Live Updates
        </p>

        <h2 className="mt-2 text-xl font-extrabold text-slate-900 sm:text-2xl">
          Recent Placement Timeline
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Latest placement activities and achievements.
        </p>
      </div>

      <div className="relative p-5 sm:p-7">
        <div className="absolute bottom-8 left-[37px] top-8 w-px bg-gradient-to-b from-blue-600 via-cyan-400 to-green-500" />

        <div className="space-y-5">
          {timelineItems.map((item) => (
            <article
              key={item.id}
              className="relative flex gap-4 pl-1"
            >
              <div
                className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${item.iconClass}`}
              >
                {item.icon}
              </div>

              <div className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-4 transition hover:border-blue-200 hover:bg-white hover:shadow-lg">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <h3 className="font-extrabold text-slate-900">
                    {item.title}
                  </h3>

                  <span className="shrink-0 text-xs font-semibold text-slate-400">
                    {item.time}
                  </span>
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <button
          type="button"
          className="mt-6 w-full rounded-xl border border-blue-600 px-5 py-3.5 font-bold text-blue-600 transition hover:bg-blue-50"
        >
          View Complete Timeline
        </button>
      </div>
    </section>
  );
}

export default PlacementTimeline;