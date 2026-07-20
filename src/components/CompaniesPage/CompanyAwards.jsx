import {
  FaTrophy,
  FaStar,
  FaRocket,
  FaGem,
  FaHeart,
  FaGlobeAsia,
  FaMedal,
  FaAward,
} from "react-icons/fa";

const awards = [
  {
    id: 1,
    title: "Best Employer 2026",
    organization: "HireX Workplace Awards",
    description:
      "Recognised for employee growth, leadership and workplace culture.",
    icon: <FaTrophy />,
  },
  {
    id: 2,
    title: "Great Place to Work",
    organization: "Employee Experience",
    description:
      "Awarded for building a trusted and inclusive working environment.",
    icon: <FaStar />,
  },
  {
    id: 3,
    title: "Fastest Growing Company",
    organization: "Business Excellence",
    description:
      "Recognised for rapid growth, innovation and market expansion.",
    icon: <FaRocket />,
  },
  {
    id: 4,
    title: "Top Global Enterprise",
    organization: "Industry Recognition",
    description:
      "Recognised as a leading organisation with strong global presence.",
    icon: <FaGem />,
  },
  {
    id: 5,
    title: "Employee Choice Award",
    organization: "People & Culture",
    description:
      "Selected by employees for career opportunities and supportive teams.",
    icon: <FaHeart />,
  },
  {
    id: 6,
    title: "Global Impact Award",
    organization: "Technology & Innovation",
    description:
      "Honoured for creating products and services with meaningful impact.",
    icon: <FaGlobeAsia />,
  },
];

function CompanyAwards({ company }) {
  if (!company) {
    return null;
  }

  return (
    <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">
      {/* Header */}
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <div className="flex items-center gap-2 text-blue-600">
            <FaAward />

            <p className="text-xs font-bold uppercase tracking-[0.18em]">
              Awards & Recognition
            </p>
          </div>

          <h2 className="mt-3 text-2xl font-extrabold text-slate-900 sm:text-3xl">
            Recognition Earned by {company.name}
          </h2>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
            Awards highlighting company culture, business growth and employee
            experience.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-amber-50 px-4 py-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-amber-500 text-white">
            <FaMedal />
          </div>

          <div>
            <p className="text-xs font-semibold text-amber-700">
              Total Recognition
            </p>

            <p className="font-extrabold text-slate-900">
              25+ Awards
            </p>
          </div>
        </div>
      </div>

      {/* Awards */}
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {awards.map((award, index) => (
          <article
            key={award.id}
            className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-amber-200 hover:shadow-xl sm:p-6"
          >
            <div className="absolute -right-14 -top-14 h-40 w-40 rounded-full bg-amber-100 opacity-0 blur-2xl transition duration-300 group-hover:opacity-100"></div>

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 via-orange-500 to-rose-500 text-2xl text-white shadow-lg">
                  {award.icon}
                </div>

                <span className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-bold text-slate-600">
                  #{index + 1}
                </span>
              </div>

              <p className="mt-5 text-xs font-bold uppercase tracking-[0.15em] text-amber-600">
                {award.organization}
              </p>

              <h3 className="mt-2 text-xl font-extrabold text-slate-900">
                {award.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-500">
                {award.description}
              </p>

              <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-sm font-bold text-green-600">
                <FaMedal />
                Verified Recognition
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Recognition Banner */}
      <div className="relative mt-7 overflow-hidden rounded-3xl bg-gradient-to-r from-[#071A55] via-[#123B9A] to-[#2869E8] p-6 text-white sm:p-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"></div>

          <div className="absolute -bottom-20 left-[30%] h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              Recognised Workplace
            </p>

            <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
              Building a workplace where people can grow
            </h3>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100">
              These recognitions reflect the company&apos;s focus on people,
              innovation and long-term impact.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 lg:min-w-[420px]">
            <RecognitionStat value="25+" label="Awards" />
            <RecognitionStat value="12+" label="Countries" />
            <RecognitionStat value="92%" label="Recommend" />
          </div>
        </div>
      </div>
    </section>
  );
}

function RecognitionStat({
  value,
  label,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-4 text-center backdrop-blur-lg">
      <p className="text-xl font-extrabold sm:text-2xl">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold text-blue-100 sm:text-xs">
        {label}
      </p>
    </div>
  );
}

export default CompanyAwards;