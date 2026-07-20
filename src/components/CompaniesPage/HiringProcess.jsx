import {
  FaArrowRight,
  FaBriefcase,
  FaCheckCircle,
  FaClipboardCheck,
  FaCode,
  FaFileAlt,
  FaHandshake,
  FaHeadset,
  FaLightbulb,
  FaUsers,
} from "react-icons/fa";

const hiringSteps = [
  {
    id: 1,
    title: "Application Submitted",
    duration: "Instant",
    icon: <FaFileAlt />,
    description:
      "Submit your updated profile and resume through HireX.",
    tips: [
      "Keep your resume updated",
      "Mention relevant skills",
      "Add measurable achievements",
    ],
  },
  {
    id: 2,
    title: "Resume Screening",
    duration: "1–2 Days",
    icon: <FaClipboardCheck />,
    description:
      "The recruitment team reviews your skills, experience and profile.",
    tips: [
      "Use role-specific keywords",
      "Keep the resume concise",
      "Highlight relevant projects",
    ],
  },
  {
    id: 3,
    title: "Online Assessment",
    duration: "1–2 Days",
    icon: <FaCode />,
    description:
      "Complete an aptitude, technical or role-based assessment.",
    tips: [
      "Practice aptitude questions",
      "Revise technical fundamentals",
      "Manage your time carefully",
    ],
  },
  {
    id: 4,
    title: "Technical Interview",
    duration: "2–3 Days",
    icon: <FaLightbulb />,
    description:
      "Discuss your technical knowledge, projects and problem-solving approach.",
    tips: [
      "Explain projects clearly",
      "Practice problem solving",
      "Prepare real examples",
    ],
  },
  {
    id: 5,
    title: "HR Interview",
    duration: "1 Day",
    icon: <FaHeadset />,
    description:
      "Discuss expectations, communication, culture fit and availability.",
    tips: [
      "Research the company",
      "Prepare your introduction",
      "Be clear about expectations",
    ],
  },
  {
    id: 6,
    title: "Offer Letter",
    duration: "1–3 Days",
    icon: <FaHandshake />,
    description:
      "Selected candidates receive the official offer and onboarding details.",
    tips: [
      "Review the offer carefully",
      "Confirm joining details",
      "Complete documentation",
    ],
  },
];

const hiringStats = [
  {
    label: "Applications",
    value: "18,200",
    icon: <FaFileAlt />,
  },
  {
    label: "Interviews",
    value: "2,540",
    icon: <FaUsers />,
  },
  {
    label: "Offers",
    value: "432",
    icon: <FaHandshake />,
  },
  {
    label: "Successful Joining",
    value: "356",
    icon: <FaCheckCircle />,
  },
];

function HiringProcess({ company }) {
  if (!company) {
    return null;
  }

  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-[#071A55] via-[#123B9A] to-[#2869E8] px-5 py-8 text-white sm:px-8 sm:py-10">
        {/* Decorations */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/10"></div>

          <div className="absolute -bottom-28 right-[25%] h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl"></div>

          <div className="absolute left-[35%] top-8 h-20 w-20 rounded-full border border-white/10"></div>
        </div>

        <div className="relative z-10 flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
              Recruitment Journey
            </p>

            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">
              Hiring Process at {company.name}
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-blue-100 sm:text-base">
              Understand every stage of the recruitment process and prepare
              confidently before applying.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            <HighlightCard
              value="12 Days"
              label="Average Hiring Time"
            />

            <HighlightCard
              value="1 in 18"
              label="Offer Ratio"
            />

            <HighlightCard
              value="92%"
              label="Response Rate"
              className="col-span-2 sm:col-span-1"
            />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid gap-8 p-5 sm:p-7 lg:grid-cols-[1.6fr_0.8fr] lg:p-8">
        {/* Timeline */}
        <div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Step-by-Step Process
            </p>

            <h3 className="mt-2 text-2xl font-extrabold text-slate-900">
              From Application to Offer
            </h3>

            <p className="mt-2 text-sm leading-6 text-slate-500">
              Each hiring stage may vary slightly depending on the role and
              department.
            </p>
          </div>

          <div className="relative mt-8">
            {/* Desktop vertical line */}
            <div className="absolute bottom-8 left-6 top-8 hidden w-px bg-gradient-to-b from-blue-600 via-cyan-400 to-green-500 sm:block"></div>

            <div className="space-y-5">
              {hiringSteps.map((step, index) => (
                <article
                  key={step.id}
                  className="relative rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl sm:ml-16"
                >
                  {/* Step icon */}
                  <div className="mb-4 flex items-center gap-4 sm:absolute sm:-left-[65px] sm:top-5 sm:mb-0">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg">
                      {step.icon}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-blue-600">
                        Step {index + 1}
                      </p>

                      <h4 className="mt-1 text-lg font-extrabold text-slate-900">
                        {step.title}
                      </h4>
                    </div>

                    <span className="w-fit rounded-full bg-blue-50 px-3 py-1.5 text-xs font-bold text-blue-700">
                      {step.duration}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>

                  <div className="mt-5 grid gap-2 sm:grid-cols-3">
                    {step.tips.map((tip) => (
                      <div
                        key={tip}
                        className="flex items-start gap-2 rounded-xl bg-slate-50 px-3 py-3 text-xs font-semibold leading-5 text-slate-600"
                      >
                        <FaCheckCircle className="mt-0.5 shrink-0 text-green-500" />

                        <span>{tip}</span>
                      </div>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        {/* Statistics */}
        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <section className="rounded-3xl border border-slate-200 bg-slate-50 p-5 sm:p-6">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">
              Hiring Statistics
            </p>

            <h3 className="mt-2 text-xl font-extrabold text-slate-900">
              Recruitment Overview
            </h3>

            <div className="mt-6 grid grid-cols-2 gap-3 lg:grid-cols-1">
              {hiringStats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    {stat.icon}
                  </div>

                  <div>
                    <p className="text-xl font-extrabold text-slate-900">
                      {stat.value}
                    </p>

                    <p className="mt-1 text-xs font-semibold text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-3xl border border-green-100 bg-gradient-to-br from-green-50 to-cyan-50 p-5 sm:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-500 text-white shadow-lg">
              <FaBriefcase />
            </div>

            <h3 className="mt-5 text-xl font-extrabold text-slate-900">
              Candidate Preparation Tips
            </h3>

            <div className="mt-5 space-y-3">
              {[
                "Customize your resume for the role",
                "Research the company and its products",
                "Practice technical and behavioural questions",
                "Prepare relevant project examples",
                "Keep documents ready before applying",
              ].map((tip) => (
                <p
                  key={tip}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                >
                  <FaCheckCircle className="mt-1 shrink-0 text-green-500" />
                  {tip}
                </p>
              ))}
            </div>
          </section>
        </aside>
      </div>

      {/* CTA */}
      <div className="border-t border-slate-200 px-5 py-6 sm:px-8">
        <div className="flex flex-col gap-5 rounded-2xl bg-gradient-to-r from-[#071A55] via-[#123B9A] to-[#2869E8] p-5 text-white sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
              Ready to Apply?
            </p>

            <h3 className="mt-2 text-2xl font-extrabold">
              Start Your Journey with {company.name}
            </h3>

            <p className="mt-2 text-sm leading-6 text-blue-100">
              Explore current openings and find the role that matches your
              skills.
            </p>
          </div>

          <button
            type="button"
            className="flex w-full shrink-0 items-center justify-center gap-3 rounded-xl bg-white px-6 py-4 font-extrabold text-blue-600 shadow-lg transition hover:-translate-y-0.5 sm:w-auto"
          >
            Explore Jobs
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

function HighlightCard({
  value,
  label,
  className = "",
}) {
  return (
    <div
      className={`rounded-2xl border border-white/10 bg-white/10 p-4 backdrop-blur-lg ${className}`}
    >
      <p className="text-xl font-extrabold text-white">
        {value}
      </p>

      <p className="mt-1 text-[11px] font-semibold leading-4 text-blue-100">
        {label}
      </p>
    </div>
  );
}

export default HiringProcess;