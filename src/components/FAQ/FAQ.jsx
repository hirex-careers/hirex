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
      "HireX reviews employer information and job postings before publishing them to improve trust and reduce spam.",
  },
  {
    question: "Can employers post jobs on HireX?",
    answer:
      "Yes. Recruiters can create a company account, post jobs and manage candidates from one dashboard.",
  },
  {
    question: "Can I save jobs and apply later?",
    answer:
      "Yes. Every saved job appears inside your dashboard so you can apply anytime.",
  },
  {
    question: "How can I track my applications?",
    answer:
      "Your dashboard displays every application with status updates like Applied, Under Review, Interview and Hired.",
  },
];

function FAQ() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-16 sm:py-20 lg:py-24">

      {/* Blur Background */}

      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl"></div>

      <div className="absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-cyan-100/60 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Heading */}

        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">

          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">

            Frequently Asked Questions

          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">

            Everything You Need to Know

          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base lg:text-lg">

            Find quick answers about job applications, recruiter accounts and HireX features.

          </p>

        </div>

        {/* FAQ Grid */}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">

          <div className="space-y-5">

            {faqs.slice(0, 4).map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}

          </div>

          <div className="space-y-5">

            {faqs.slice(4).map((item) => (
              <FAQItem
                key={item.question}
                question={item.question}
                answer={item.answer}
              />
            ))}

          </div>

        </div>

        {/* Contact Card */}

        <div className="mt-10 sm:mt-14">

          <div className="mx-auto max-w-3xl rounded-3xl bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-500 px-6 py-8 text-center text-white shadow-2xl sm:px-10 sm:py-10">

            <h3 className="text-2xl font-bold sm:text-3xl">

              Still have a question?

            </h3>

            <p className="mt-3 text-sm leading-7 text-blue-100 sm:text-base">

              Our support team is always ready to help you with your HireX journey.

            </p>

            <button className="mt-6 rounded-2xl bg-white px-7 py-3 font-semibold text-blue-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">

              Contact Support

            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default FAQ;