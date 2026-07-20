import {
  FaBuilding,
  FaCalendarAlt,
  FaGlobe,
  FaMapMarkerAlt,
  FaUsers,
  FaCheckCircle,
} from "react-icons/fa";

function CompanyOverview({ company }) {
  const benefits = [
    "Flexible Work Environment",
    "Health Insurance",
    "Learning & Development",
    "Performance Bonus",
    "Paid Time Off",
    "Employee Wellness Program",
  ];

  const technologies = [
    "React",
    "JavaScript",
    "Python",
    "Java",
    "AWS",
    "Docker",
    "Kubernetes",
    "Artificial Intelligence",
  ];

  return (
    <div className="space-y-6">
      {/* About */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
            <FaBuilding />
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Company Overview
            </p>

            <h3 className="mt-1 text-xl font-extrabold text-slate-900">
              About {company.name}
            </h3>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          {company.name} is a leading {company.industry.toLowerCase()} company
          focused on building innovative products, modern technology solutions
          and excellent customer experiences. The company provides employees
          with opportunities to work on impactful projects and grow their
          careers.
        </p>

        <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
          Its collaborative culture encourages learning, experimentation,
          ownership and long-term professional development.
        </p>

        {/* Company Information */}
        <div className="mt-7 grid grid-cols-2 gap-3 md:grid-cols-4">
          <InfoCard
            icon={<FaUsers />}
            label="Employees"
            value={company.employees}
          />

          <InfoCard
            icon={<FaCalendarAlt />}
            label="Founded"
            value={company.founded}
          />

          <InfoCard
            icon={<FaMapMarkerAlt />}
            label="Headquarters"
            value={company.headquarters}
          />

          <InfoCard
            icon={<FaGlobe />}
            label="Presence"
            value={company.presence}
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Employee Experience
        </p>

        <h3 className="mt-2 text-xl font-extrabold text-slate-900">
          Benefits and Perks
        </h3>

        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
            >
              <FaCheckCircle className="shrink-0 text-green-500" />

              <span className="text-sm font-bold text-slate-700">
                {benefit}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <section className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
          Technology
        </p>

        <h3 className="mt-2 text-xl font-extrabold text-slate-900">
          Technologies Used
        </h3>

        <div className="mt-6 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-blue-100 bg-blue-50 px-4 py-2.5 text-sm font-bold text-blue-700"
            >
              {technology}
            </span>
          ))}
        </div>
      </section>

      {/* Culture */}
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-[#071A55] via-[#123B9A] to-[#2869E8] p-6 text-white shadow-xl sm:p-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
          Life at {company.name}
        </p>

        <h3 className="mt-3 text-2xl font-extrabold">
          Build, Learn and Grow Together
        </h3>

        <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
          Employees work in collaborative teams, solve real-world problems and
          receive support through mentorship, training and internal mobility
          opportunities.
        </p>

        <div className="mt-6 grid grid-cols-3 gap-3">
          <CultureStat value="92%" label="Recommend" />
          <CultureStat value="4.6/5" label="Culture" />
          <CultureStat value="89%" label="Growth" />
        </div>
      </section>
    </div>
  );
}

function InfoCard({ icon, label, value }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-center">
      <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
        {icon}
      </div>

      <p className="mt-3 break-words text-sm font-extrabold text-slate-900">
        {value}
      </p>

      <p className="mt-1 text-xs font-medium text-slate-500">
        {label}
      </p>
    </div>
  );
}

function CultureStat({ value, label }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/10 p-3 text-center backdrop-blur-lg sm:p-4">
      <p className="text-lg font-extrabold sm:text-xl">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold text-blue-100 sm:text-xs">
        {label}
      </p>
    </div>
  );
}

export default CompanyOverview;