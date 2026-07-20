import {
  FaMoneyBillWave,
  FaHeartbeat,
  FaHome,
  FaLaptop,
  FaPizzaSlice,
  FaChartLine,
  FaGraduationCap,
  FaUmbrellaBeach,
  FaDumbbell,
  FaCar,
  FaBaby,
  FaPlaneDeparture,
} from "react-icons/fa";

const benefits = [
  {
    title: "Competitive Salary",
    description:
      "Market-aligned compensation with regular performance reviews.",
    icon: <FaMoneyBillWave />,
  },
  {
    title: "Health Insurance",
    description:
      "Medical coverage for employees and eligible family members.",
    icon: <FaHeartbeat />,
  },
  {
    title: "Flexible Work",
    description:
      "Remote, hybrid and flexible working options based on the role.",
    icon: <FaHome />,
  },
  {
    title: "Laptop Provided",
    description:
      "Modern devices and tools to help employees work productively.",
    icon: <FaLaptop />,
  },
  {
    title: "Meals & Snacks",
    description:
      "Office refreshments, snacks and meal support at selected locations.",
    icon: <FaPizzaSlice />,
  },
  {
    title: "Annual Bonus",
    description:
      "Performance-based incentives and annual bonus opportunities.",
    icon: <FaChartLine />,
  },
  {
    title: "Learning Budget",
    description:
      "Courses, certifications and professional development support.",
    icon: <FaGraduationCap />,
  },
  {
    title: "Paid Leaves",
    description:
      "Annual leave, sick leave and company-wide wellness breaks.",
    icon: <FaUmbrellaBeach />,
  },
  {
    title: "Wellness Support",
    description:
      "Fitness, mental wellness and employee assistance programs.",
    icon: <FaDumbbell />,
  },
  {
    title: "Cab Facility",
    description:
      "Transport support for eligible shifts and office locations.",
    icon: <FaCar />,
  },
  {
    title: "Parental Benefits",
    description:
      "Maternity, paternity and adoption leave support for employees.",
    icon: <FaBaby />,
  },
  {
    title: "Relocation Support",
    description:
      "Assistance for eligible candidates moving to a new work location.",
    icon: <FaPlaneDeparture />,
  },
];

function CompanyBenefits({ company }) {
  if (!company) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#071A55] via-[#123B9A] to-[#2869E8] px-5 py-8 text-white sm:px-8 sm:py-10">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/10"></div>

          <div className="absolute -bottom-28 left-[30%] h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl"></div>
        </div>

        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
            Employee Benefits
          </p>

          <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
            Benefits & Perks at {company.name}
          </h2>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
            Explore the benefits designed to support employee wellbeing,
            career growth and work-life balance.
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 xl:grid-cols-4">
          {benefits.map((benefit) => (
            <article
              key={benefit.title}
              className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:p-5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 opacity-0 transition duration-300 group-hover:opacity-100"></div>

              <div className="relative z-10">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-xl text-white shadow-lg sm:h-14 sm:w-14 sm:text-2xl">
                  {benefit.icon}
                </div>

                <h3 className="mt-5 text-sm font-extrabold text-slate-900 sm:text-lg">
                  {benefit.title}
                </h3>

                <p className="mt-2 text-xs leading-6 text-slate-500 sm:text-sm">
                  {benefit.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-7 flex flex-col gap-5 rounded-3xl border border-blue-100 bg-gradient-to-r from-blue-50 to-cyan-50 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Employee First Culture
            </p>

            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
              Benefits that support every stage of your career
            </h3>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600">
              Availability may vary depending on job level, location,
              employment type and company policy.
            </p>
          </div>

          <button
            type="button"
            className="w-full shrink-0 rounded-xl bg-blue-600 px-6 py-4 font-extrabold text-white shadow-lg transition hover:-translate-y-0.5 hover:bg-blue-700 sm:w-auto"
          >
            Explore Open Jobs
          </button>
        </div>
      </div>
    </section>
  );
}

export default CompanyBenefits;