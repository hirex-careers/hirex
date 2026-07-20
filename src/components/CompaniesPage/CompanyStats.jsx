import {
  FaStar,
  FaUsers,
  FaGlobeAsia,
  FaBuilding,
  FaBriefcase,
  FaChartLine,
  FaCheckCircle,
  FaCalendarAlt,
  FaArrowRight,
  FaRocket,
  FaHandshake,
  FaUserCheck,
} from "react-icons/fa";

const performanceMetrics = [
  {
    label: "Work-Life Balance",
    value: 92,
  },
  {
    label: "Career Growth",
    value: 88,
  },
  {
    label: "Salary & Benefits",
    value: 90,
  },
  {
    label: "Job Security",
    value: 87,
  },
  {
    label: "Company Culture",
    value: 94,
  },
  {
    label: "Management",
    value: 85,
  },
];

const hiringMetrics = [
  {
    label: "Applications",
    value: "52K+",
    icon: <FaUsers />,
  },
  {
    label: "Interview Success",
    value: "18%",
    icon: <FaUserCheck />,
  },
  {
    label: "Offer Rate",
    value: "7%",
    icon: <FaHandshake />,
  },
  {
    label: "Average Hiring Time",
    value: "12 Days",
    icon: <FaCalendarAlt />,
  },
  {
    label: "Joining Rate",
    value: "89%",
    icon: <FaCheckCircle />,
  },
];

const companyTimeline = [
  {
    year: "1998",
    title: "Company Founded",
    description:
      "The company started its journey with a strong focus on innovation.",
  },
  {
    year: "2005",
    title: "Global Expansion",
    description:
      "Operations expanded across multiple international markets.",
  },
  {
    year: "2012",
    title: "10,000+ Employees",
    description:
      "The workforce crossed a major milestone with rapid hiring growth.",
  },
  {
    year: "2018",
    title: "Industry Recognition",
    description:
      "Recognised as one of the leading companies in its sector.",
  },
  {
    year: "2024",
    title: "AI Transformation",
    description:
      "The company accelerated investments in AI and modern technologies.",
  },
  {
    year: "2026",
    title: "Major Hiring Expansion",
    description:
      "Plans announced to hire thousands of professionals across departments.",
  },
];

function CompanyStats({ company }) {
  if (!company) {
    return null;
  }

  const overviewStats = [
    {
      label: "Overall Rating",
      value: `${company.rating}/5`,
      icon: <FaStar />,
      note: "Employee Rating",
    },
    {
      label: "Employees",
      value: company.employees,
      icon: <FaUsers />,
      note: "Global Workforce",
    },
    {
      label: "Countries",
      value: company.presence === "Global" ? "28+" : "1",
      icon: <FaGlobeAsia />,
      note: "Business Presence",
    },
    {
      label: "Offices",
      value: company.presence === "Global" ? "64+" : "18+",
      icon: <FaBuilding />,
      note: "Office Locations",
    },
    {
      label: "Open Jobs",
      value: `${company.openJobs}+`,
      icon: <FaBriefcase />,
      note: "Active Openings",
    },
    {
      label: "Annual Growth",
      value: "38%",
      icon: <FaChartLine />,
      note: "Year-on-Year",
    },
  ];

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#071A55] via-[#123B9A] to-[#2869E8] px-5 py-8 text-white sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"></div>

          <div className="absolute -bottom-24 left-[25%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"></div>

          <div className="absolute left-[55%] top-6 h-20 w-20 rounded-full border border-white/10"></div>
        </div>

        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            Company Analytics
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            {company.name} by the Numbers
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Explore workforce growth, hiring performance, employee experience
            and company milestones.
          </p>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-6">
          {overviewStats.map((stat) => (
            <article
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-0 transition duration-300 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-lg text-white shadow-lg">
                  {stat.icon}
                </div>

                <p className="mt-4 text-xl font-extrabold text-slate-900 sm:text-2xl">
                  {stat.value}
                </p>

                <p className="mt-1 text-sm font-bold text-slate-700">
                  {stat.label}
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  {stat.note}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Main Grid */}
        <div className="mt-7 grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
          {/* Performance */}
          <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Employee Experience
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                Company Performance
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Ratings across major employee experience categories.
              </p>
            </div>

            <div className="mt-7 space-y-5">
              {performanceMetrics.map((metric) => (
                <PerformanceBar
                  key={metric.label}
                  label={metric.label}
                  value={metric.value}
                />
              ))}
            </div>
          </section>

          {/* Hiring Metrics */}
          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-5 shadow-sm sm:p-7">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Recruitment Analytics
            </p>

            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
              Hiring Statistics
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              A snapshot of recruitment efficiency and conversion.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-3">
              {hiringMetrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className={`rounded-2xl border border-slate-200 bg-white p-4 ${
                    index === hiringMetrics.length - 1
                      ? "col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {metric.icon}
                  </div>

                  <p className="mt-4 text-xl font-extrabold text-slate-900">
                    {metric.value}
                  </p>

                  <p className="mt-1 text-xs font-semibold text-slate-500">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Timeline */}
        <section className="mt-7 rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
                Growth Journey
              </p>

              <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
                Company Timeline
              </h3>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500">
                Key milestones in the growth journey of {company.name}.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl bg-blue-50 px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
                <FaRocket />
              </div>

              <div>
                <p className="text-xs font-semibold text-blue-600">
                  Growth Journey
                </p>

                <p className="font-extrabold text-slate-900">
                  {company.founded} – 2026
                </p>
              </div>
            </div>
          </div>

          <div className="relative mt-8">
            <div className="absolute bottom-0 left-[22px] top-0 hidden w-px bg-gradient-to-b from-blue-600 via-cyan-400 to-green-500 sm:block"></div>

            <div className="space-y-5">
              {companyTimeline.map((item, index) => (
                <article
                  key={`${item.year}-${item.title}`}
                  className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-blue-200 hover:bg-white hover:shadow-lg sm:ml-14"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 font-extrabold text-white shadow-lg sm:absolute sm:-left-[55px] sm:top-5 sm:mb-0">
                    {index + 1}
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-blue-600">
                        {item.year}
                      </p>

                      <h4 className="mt-1 text-lg font-extrabold text-slate-900">
                        {item.title}
                      </h4>
                    </div>

                    <FaCheckCircle className="shrink-0 text-green-500" />
                  </div>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <div className="relative mt-7 overflow-hidden rounded-3xl bg-gradient-to-r from-[#071A55] via-[#123B9A] to-[#2869E8] p-6 text-white sm:p-8">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"></div>

            <div className="absolute -bottom-20 left-[30%] h-64 w-64 rounded-full bg-cyan-300/10 blur-3xl"></div>
          </div>

          <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                Build Your Career
              </p>

              <h3 className="mt-2 text-2xl font-extrabold sm:text-3xl">
                Join {company.employees} professionals at {company.name}
              </h3>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100">
                Explore open roles and become part of a growing organisation
                working across innovation, technology and customer impact.
              </p>
            </div>

            <button
              type="button"
              className="flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-extrabold text-blue-600 shadow-lg transition hover:-translate-y-0.5 sm:w-auto"
            >
              View Open Jobs
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function PerformanceBar({
  label,
  value,
}) {
  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <span className="text-sm font-bold text-slate-700">
          {label}
        </span>

        <span className="text-sm font-extrabold text-slate-900">
          {value}%
        </span>
      </div>

      <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100">
        <div
          style={{ width: `${value}%` }}
          className="h-full rounded-full bg-gradient-to-r from-blue-600 to-cyan-500"
        ></div>
      </div>
    </div>
  );
}

export default CompanyStats;