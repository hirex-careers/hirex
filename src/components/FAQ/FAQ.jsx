import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How do I apply for a job on HireX?",
    answer:
      "Create your profile, upload your resume, search for suitable jobs and click the Apply button. You can also track your application status from your dashboard.",
  },
  {
    question: "Is HireX free for job seekers?",
    answer:
      "Yes. Job seekers can create profiles, search jobs, save opportunities and apply for jobs without any charge.",
  },
  {
    question: "Can freshers apply through HireX?",
    answer:
      "Yes. HireX includes internships, entry-level jobs and fresher-friendly opportunities across both technical and non-technical domains.",
  },
  {
    question: "How does AI job recommendation work?",
    answer:
      "HireX compares your skills, experience, preferred location and career interests with available jobs to suggest relevant opportunities.",
  },
  {
    question: "Are companies on HireX verified?",
    answer:
      "HireX aims to review employer information and job postings before publishing them, helping candidates apply with greater confidence.",
  },
  {
    question: "Can employers post jobs on HireX?",
    answer:
      "Yes. Employers can create a recruiter account, publish job openings, manage applicants and shortlist suitable candidates.",
  },
  {
    question: "Can I save jobs and apply later?",
    answer:
      "Yes. You can bookmark jobs and access them later from the Saved Jobs section of your candidate dashboard.",
  },
  {
    question: "How can I track my applications?",
    answer:
      "Your dashboard will show each application and its current stage, such as Applied, Under Review, Shortlisted, Interview or Rejected.",
  },
];

function FAQ() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24">
      {/* Background decoration */}
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"></div>
      <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-5xl px-6">
        <div className="mb-14 text-center">
          <span className="font-semibold uppercase tracking-widest text-blue-600">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-gray-900 md:text-5xl">
            Everything You Need to Know
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
            Find quick answers about job applications, employer accounts and
            HireX features.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

  {/* Left Side */}

  <div className="space-y-5">

    {faqs.slice(0, 4).map((item) => (
      <FAQItem
        key={item.question}
        question={item.question}
        answer={item.answer}
      />
    ))}

  </div>

  {/* Right Side */}

  <div className="space-y-5">

    {faqs.slice(4, 8).map((item) => (
      <FAQItem
        key={item.question}
        question={item.question}
        answer={item.answer}
      />
    ))}

  </div>

</div>

        <div className="mt-12 rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-500 p-8 text-center text-white shadow-xl">
          <h3 className="text-2xl font-bold">Still have a question?</h3>

          <p className="mt-3 text-blue-50">
            Our support team will help you with your HireX journey.
          </p>

          <button
            type="button"
            className="mt-6 rounded-xl bg-white px-7 py-3 font-semibold text-blue-600 transition hover:-translate-y-1 hover:shadow-lg"
          >
            Contact Support
          </button>
        </div>
      </div>
    </section>
  );
}

export default FAQ;