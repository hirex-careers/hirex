import {
  FaRocket,
  FaShieldAlt,
  FaBrain,
  FaChartLine,
} from "react-icons/fa";

import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: <FaRocket />,
    title: "Fast Hiring",
    description:
      "Apply to thousands of verified jobs and get hired faster with HireX.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Verified Companies",
    description:
      "Every employer is verified so you can apply with confidence.",
  },
  {
    icon: <FaBrain />,
    title: "Smart Matching",
    description:
      "AI-powered recommendations based on your skills and interests.",
  },
  {
    icon: <FaChartLine />,
    title: "Career Growth",
    description:
      "Resume tips, interview preparation and career guidance in one place.",
  },
];

function WhyHireX() {
  return (
    <section className="w-full bg-gradient-to-b from-slate-50 to-white pt-16 pb-5 sm:pt-20 sm:pb-6 lg:pt-24 lg:pb-8">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 xl:px-12">

        {/* Heading */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-blue-600 sm:text-sm">
            Why HireX
          </span>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Why Choose HireX?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-gray-500 sm:text-base lg:text-lg">
            Everything you need to build your career, connect with top
            recruiters and land your dream job.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4 lg:gap-6 xl:gap-8">
          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhyHireX;