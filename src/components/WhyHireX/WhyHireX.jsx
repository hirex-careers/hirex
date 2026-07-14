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
    <section className="py-28 bg-gradient-to-b from-slate-50 to-white">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">

          <span className="text-blue-600 uppercase tracking-widest font-semibold">

            WHY HIREX

          </span>

          <h2 className="text-5xl font-bold mt-4">

            Why Choose HireX?

          </h2>

          <p className="mt-5 text-lg text-gray-500 max-w-2xl mx-auto">

            Everything you need to build your career,
            connect with top recruiters,
            and land your dream job.

          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item) => (
            <FeatureCard key={item.title} {...item} />
          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyHireX;